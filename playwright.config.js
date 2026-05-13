const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html'],
    ['monocart-reporter', {
      name: 'Essensial E2E Coverage Report',
      outputFile: './test-results/coverage/index.html',
      coverage: {
        // Collect coverage for files from the app's domain
        entryFilter: (entry) => entry.url.includes('assist.id'),
        // Filter sources in the report
        sourceFilter: (sourcePath) => sourcePath.includes('assist.id'),
      }
    }]
  ],
  timeout: 120000,
  use: {
    baseURL: 'https://dev-essensial.assist.id/',
    trace: 'on-first-retry',
    // Kita tetap siapkan storageState di sini sebagai target simpan
    storageState: '.auth/user.json',
  },
  projects: [
    {
      name: 'chromium',
      // Mencari semua file .js di folder tests
      testMatch: '**/*.js',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
