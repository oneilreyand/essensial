import { test as base, expect } from '@playwright/test';
import fs from 'fs';
import { addCoverageReport } from 'monocart-reporter';

const authFile = '.auth/user.json';
const baseUrl = 'https://dev-essensial.assist.id';

async function waitForVisible(locator, timeout) {
    return locator
        .waitFor({ state: 'visible', timeout })
        .then(() => true)
        .catch(() => false);
}

async function gotoEmr(page) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
        await page.goto(`${baseUrl}/emr?e2e=${Date.now()}`, { waitUntil: 'commit', timeout: 30000 });

        const hasBody = await page
            .waitForFunction(() => document.body && document.body.children.length > 0, { timeout: 30000 })
            .then(() => true)
            .catch(() => false);

        if (hasBody) {
            return;
        }
    }
}

async function clearSession(page) {
    await page.goto(baseUrl, { waitUntil: 'commit', timeout: 30000 }).catch(() => {});
    await page.evaluate(() => localStorage.clear()).catch(() => {});
    await page.context().clearCookies();
}

async function login(page) {
    console.log('Session tidak ditemukan atau sudah expired, melakukan login otomatis...');
    await clearSession(page);
    await page.goto(`${baseUrl}/login`, { waitUntil: 'commit', timeout: 30000 });
    await page.locator('#username').fill(process.env.TEST_EMAIL);
    await page.locator('[data-test="input-password"]').fill(process.env.TEST_PASSWORD);
    await page.locator('[data-test="login-btn"]').click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.context().storageState({ path: authFile });
    await gotoEmr(page);
}

export const test = base.extend({
    // Fixture ini akan memastikan user sudah login sebelum test dijalankan
    page: async ({ page }, use) => {
        // Jika file auth belum ada, lakukan login manual satu kali
        if (!fs.existsSync(authFile)) {
            await login(page);
        } else {
            await gotoEmr(page);

            const isLoginPage = page.url().includes('/login')
                || await page.locator('#username').isVisible({ timeout: 5000 }).catch(() => false);

            if (isLoginPage) {
                await login(page);
            }
        }

        const sidebar = page.locator('[data-test="sidebar-item-registrasi"], [data-test="sidebar-item-emr"]').first();
        const isReady = await waitForVisible(sidebar, 15000);

        if (!isReady) {
            await login(page);
        }

        await expect(sidebar).toBeVisible({ timeout: 60000 });
        
        // Lanjutkan ke test yang sebenarnya
        await use(page);
    },

    // Fixture otomatis untuk mengumpulkan coverage
    autoTestFixture: [async ({ page }, use) => {
        // Cek apakah browser adalah chromium (hanya chromium yang support coverage v8)
        const isChromium = base.info().project.name === 'chromium';
        
        if (isChromium) {
            await Promise.all([
                page.coverage.startJSCoverage({ resetOnNavigation: false }),
                page.coverage.startCSSCoverage({ resetOnNavigation: false })
            ]);
        }

        await use();

        if (isChromium) {
            const [jsCoverage, cssCoverage] = await Promise.all([
                page.coverage.stopJSCoverage(),
                page.coverage.stopCSSCoverage()
            ]);
            
            // Tambahkan data coverage ke report
            await addCoverageReport([...jsCoverage, ...cssCoverage], base.info());
        }
    }, { auto: true }],
});

export { expect };
