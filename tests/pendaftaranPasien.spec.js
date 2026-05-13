import { test, expect } from '../fixtures/auth.fixture';

async function clickOptionWithRetry(option) {
    await expect(option).toBeVisible({ timeout: 30000 });

    for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
            await option.click({ timeout: 10000 });
            return;
        } catch (error) {
            if (attempt === 2) {
                throw error;
            }
        }
    }
}

test.describe('Registrasi Pasien', () => {

    test.beforeEach(async ({ page }) => {
        // Halaman EMR dan login sudah ditangani otomatis oleh fixture.
        await expect(page.locator('[data-test="sidebar-item-registrasi"]')).toBeVisible();
    });

    test('TC01: Registrasi Pasien Baru - Daftar Kunjungan', async ({ page }) => {
        // 1. Navigasi ke halaman Registrasi via sidebar
        await page.locator('[data-test="sidebar-item-registrasi"]').click();
        await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();

        // 2. Buka form Pendaftaran Baru
        await page.getByRole('button', { name: 'Pendaftaran Baru' }).click();
        await page.getByText('Daftar Kunjungan').click();
        const registrationDialog = page.getByRole('dialog').filter({ hasText: 'Daftar Kunjungan' });
        await expect(registrationDialog).toBeVisible();

        // 3. Cari dan pilih pasien
        const searchInput = registrationDialog.getByRole('textbox', { name: 'Cari Nama Lengkap Pasien /' });
        await searchInput.fill('KUUGA0000290');
        
        // Tunggu hasil pencarian muncul dan pilih pasien existing, bukan opsi "new".
        const patientResult = registrationDialog.getByRole('button', {
            name: /KUUGA0000290/i,
        });
        await expect(patientResult).toBeVisible({ timeout: 30000 });
        await patientResult.click();

        // Jika aplikasi meminta tipe pasien, pilih pasien umum sebelum lanjut.
        const patientTypeDialog = page.getByRole('dialog').filter({ hasText: 'Tentukan tipe pasien' });
        const shouldChoosePatientType = await patientTypeDialog
            .waitFor({ state: 'visible', timeout: 3000 })
            .then(() => true)
            .catch(() => false);

        if (shouldChoosePatientType) {
            await patientTypeDialog.getByText('Pasien Umum').click();
            await expect(patientTypeDialog).toBeHidden();
        }

        const doctorField = registrationDialog.locator('#select-doctorName');
        await expect(doctorField).toBeVisible();

        // 4. Pilih dokter
        await doctorField.scrollIntoViewIfNeeded();
        await doctorField.click();
        await clickOptionWithRetry(page.getByRole('option', { name: 'Dr. med. dent. Bobby And Heroes Sp.KHLab' }));
        await expect(doctorField).toContainText('Dr. med. dent. Bobby And Heroes Sp.KHLab');

        // Setelah dokter dipilih, sistem mewajibkan slot agar jam dan durasi terisi.
        await expect(registrationDialog.getByRole('button', {
            name: /\d{2}:\d{2}\s*-\s*\d{2}:\d{2}\s*WIB/,
        })).toBeVisible({ timeout: 30000 });

        // 5. Simpan pendaftaran
        await registrationDialog.getByRole('button', { name: 'Simpan' }).click();
        await expect(registrationDialog).toBeHidden();

        // 6. Navigasi ke EMR dan verifikasi
        await page.locator('[data-test="sidebar-item-emr"]').click();
        await expect(page).toHaveURL(/.*emr/);
    });
});
