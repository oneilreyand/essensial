const { test, expect } = require('@playwright/test');

test.describe('Login & Dashboard E2E Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Navigasi ke halaman utama sebelum setiap test
        await page.goto('/');
    });

    test('TC01: Login Success and reach Dashboard', async ({ page }) => {
        // 1. Temukan input email dan isi dengan kredensial yang diberikan
        const emailInput = page.locator('input[name="username"]');
        await emailInput.first().fill('reyand.oneil@assist.id');

        // 2. Temukan input password dan isi
        const passwordInput = page.locator('input[name="password"]');
        await passwordInput.first().fill('12345678');

        // 3. Klik tombol Login/Masuk
        const loginButton = page.locator('button[data-test="login-btn"]');
        await loginButton.first().click();

        // 4. Tunggu sampai navigasi ke dashboard selesai
        await page.waitForURL(/dashboard/);

        // 5. Validasi URL sudah mengarah ke halaman dashboard
        await expect(page).toHaveURL(/dashboard/);

        // 6. Ambil screenshot halaman Dashboard
        await page.screenshot({ path: 'dashboard-success.png', fullPage: true });
    });

    test('TC02: Login with Invalid Password', async ({ page }) => {
        const emailInput = page.locator('input[name="username"]');
        await emailInput.first().fill('reyand.oneil@assist.id');

        const passwordInput = page.locator('input[name="password"]');
        await passwordInput.first().fill('password_salah_123');

        const loginButton = page.locator('button[data-test="login-btn"]');
        await loginButton.first().click();

        // Tunggu pesan error muncul (atau tunggu beberapa detik)
        await page.waitForTimeout(3000);
        await page.screenshot({ path: 'login-invalid.png' });
    });

    test('TC03: Login with Empty Fields', async ({ page }) => {
        // Langsung klik login tanpa mengisi apapun
        const loginButton = page.locator('button[data-test="login-btn"]');
        await loginButton.first().click();

        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'login-empty-fields.png' });
    });

});
