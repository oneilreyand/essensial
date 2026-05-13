# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pendaftaranPasien.spec.js >> Registrasi Pasien >> TC01: Registrasi Pasien Baru - Daftar Kunjungan
- Location: tests/pendaftaranPasien.spec.js:25:9

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('dialog').filter({ hasText: 'Daftar Kunjungan' })
Expected: hidden
Received: visible
Timeout:  5000ms

Call log:
  - Expect "toBeHidden" with timeout 5000ms
  - waiting for getByRole('dialog').filter({ hasText: 'Daftar Kunjungan' })
    8 × locator resolved to <div role="dialog" class="jss259 jss245">…</div>
      - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner [ref=e4]:
        - generic [ref=e5]:
          - button "open drawer" [ref=e6] [cursor=pointer]:
            - img [ref=e8]
          - generic [ref=e11]:
            - generic [ref=e12]:
              - generic [ref=e13]:
                - generic "Cari data pasien dari Nama / Nomor Medical Record / Alamat Pasien / Nomor BPJS" [ref=e15]:
                  - combobox [ref=e17]:
                    - textbox "Cari Pasien / No MR / No Ktp / No Asuransi..." [ref=e18]
                    - img [ref=e19]
                - generic [ref=e23]:
                  - button "Pendaftaran Baru" [active] [ref=e24] [cursor=pointer]:
                    - generic [ref=e26]: Pendaftaran Baru
                  - button [ref=e28] [cursor=pointer]:
                    - img [ref=e30]
              - generic [ref=e36]:
                - img "Kamar Medis" [ref=e38]
                - generic [ref=e40]:
                  - button "Klinik Assist.id [Clinica Pro]" [ref=e41] [cursor=pointer]:
                    - generic "Klinik Assist.id [Clinica Pro]" [ref=e43]
                  - button [ref=e45] [cursor=pointer]:
                    - img [ref=e47]
                - paragraph [ref=e51] [cursor=pointer]: PIC
                - button [ref=e53] [cursor=pointer]:
                  - img [ref=e55]
                - button "Notification" [ref=e60] [cursor=pointer]:
                  - img [ref=e62]
                - button "Account" [ref=e67] [cursor=pointer]:
                  - img [ref=e69]
            - generic [ref=e74]:
              - heading "Registration" [level=1] [ref=e75]
              - paragraph [ref=e76]: Klinik Assist.id [Clinica Pro]
            - progressbar [ref=e80]
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - img [ref=e88]
              - generic [ref=e90]:
                - paragraph [ref=e91]: Capaian Antrean Online FKTP BPJS
                - paragraph [ref=e92]: (Target di set Default. untuk penyesuaian. Office > Dashboard BPJS > Pencapaian Antrean Online)
                - paragraph [ref=e93]:
                  - text: "Antrol MJKN:"
                  - generic [ref=e94]: 0%
                  - text: "/ Target:"
                  - generic [ref=e95]: 20%
                  - text: (0/0 Kunjungan BPJS)
                - paragraph [ref=e96]:
                  - text: "Total Antrol:"
                  - generic [ref=e97]: 0%
                  - text: "/ Target:"
                  - generic [ref=e98]: 80%
                  - text: (0/0 Kunjungan BPJS)
            - generic [ref=e99]:
              - button "Bantuan" [ref=e100] [cursor=pointer]:
                - generic [ref=e101]: Bantuan
              - button "Refresh" [ref=e102] [cursor=pointer]:
                - img [ref=e104]
              - button "Tutup" [ref=e107] [cursor=pointer]:
                - img [ref=e109]
          - generic [ref=e114]:
            - generic [ref=e115]:
              - img [ref=e116]
              - generic [ref=e118]:
                - paragraph [ref=e119]: Capaian Pengiriman Data ke Satu Sehat
                - paragraph [ref=e120]:
                  - text: "Encounter (Minggu ini / Minggu lalu):"
                  - generic [ref=e121]: 1/12
                - paragraph [ref=e122]:
                  - text: "Condition (Minggu ini / Minggu lalu):"
                  - generic [ref=e123]: 0/2
                - paragraph [ref=e124]:
                  - text: "Capaian Minggu Ini:"
                  - generic [ref=e125]: 4.17%
            - generic [ref=e126]:
              - button "Bantuan" [ref=e127] [cursor=pointer]:
                - generic [ref=e128]: Bantuan
              - button "Refresh" [ref=e129] [cursor=pointer]:
                - img [ref=e131]
              - button "Tutup" [ref=e134] [cursor=pointer]:
                - img [ref=e136]
        - generic [ref=e140]:
          - list [ref=e143]:
            - button "Rawat Jalan Poli" [ref=e144] [cursor=pointer]:
              - generic [ref=e146]: Rawat Jalan Poli
            - button "Laboratorium" [ref=e147] [cursor=pointer]:
              - generic [ref=e149]: Laboratorium
            - button "Rawat Jalan Lab" [ref=e150] [cursor=pointer]:
              - generic [ref=e152]: Rawat Jalan Lab
            - button "AntriCepat" [ref=e153] [cursor=pointer]:
              - generic [ref=e155]: AntriCepat
            - button "Gawat Darurat" [ref=e156] [cursor=pointer]:
              - generic [ref=e158]: Gawat Darurat
            - button "Rawat Inap" [ref=e159] [cursor=pointer]:
              - generic [ref=e161]: Rawat Inap
            - button "Rawat Inap Persalinan" [ref=e162] [cursor=pointer]:
              - generic [ref=e164]: Rawat Inap Persalinan
            - button "Kunjungan Sehat" [ref=e165] [cursor=pointer]:
              - generic [ref=e167]: Kunjungan Sehat
            - button "Promotif Preventif" [ref=e168] [cursor=pointer]:
              - generic [ref=e170]: Promotif Preventif
            - button "Kegiatan Kelompok" [ref=e171] [cursor=pointer]:
              - generic [ref=e173]: Kegiatan Kelompok
            - button "Antrian Awal" [ref=e174] [cursor=pointer]:
              - generic [ref=e176]: Antrian Awal
            - button "Satu Sehat" [ref=e177] [cursor=pointer]:
              - generic [ref=e179]: Satu Sehat
            - button "Corporate MCU" [ref=e180] [cursor=pointer]:
              - generic [ref=e182]: Corporate MCU
            - button "Screen Antrian" [ref=e183] [cursor=pointer]:
              - generic [ref=e185]: Screen Antrian
          - generic [ref=e189]:
            - generic [ref=e191]:
              - paragraph [ref=e193]: Rawat Jalan Poli
              - button [ref=e195] [cursor=pointer]:
                - img [ref=e197]
              - generic [ref=e202]: Auto-Cancel Aktif (Auto)
            - generic [ref=e204]:
              - button "List PCare" [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: List PCare
              - button "Export" [ref=e207] [cursor=pointer]:
                - generic [ref=e208]: Export
              - button "Klik ikon ini untuk print list kunjungan pasien pada sesuai tanggal kunjungan tersebut" [ref=e209] [cursor=pointer]:
                - img [ref=e211]
            - generic [ref=e214]:
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - textbox "DD/MM/YYYY" [ref=e217]: 05/05/2026
                  - button [ref=e219] [cursor=pointer]:
                    - generic [ref=e221]: event
                - paragraph [ref=e222]: Tanggal Kunjungan
              - button [ref=e223] [cursor=pointer]:
                - img [ref=e225]
            - generic "Pilih poli yang lebih spesifik" [ref=e230]:
              - generic [ref=e231]: Poli *
              - generic [ref=e233]:
                - button "Semua Poli" [ref=e234] [cursor=pointer]
                - img
            - generic [ref=e235]:
              - generic [ref=e237]:
                - generic [ref=e238]: Tenaga Medis *
                - generic [ref=e240]:
                  - button "Semua Tenaga Medis" [ref=e241] [cursor=pointer]
                  - img
              - generic [ref=e243]:
                - generic [ref=e244]: Metode Pembayaran *
                - generic [ref=e246]:
                  - button "Semua Metode Pembayaran" [ref=e247] [cursor=pointer]
                  - img
              - generic [ref=e250]:
                - textbox "Nama Pasien, Nomor MR" [ref=e251]
                - img [ref=e252]
            - generic [ref=e255]:
              - table [ref=e257]:
                - rowgroup [ref=e258]:
                  - row "Status Tanggal Kunjungan Tanggal Dibuat No Kunjungan Jam Datang No Poli Nama Pasien Rencana Tindakan Rencana Paket Tenaga Medis Tipe Bayar Rujuk BPJS" [ref=e259]:
                    - columnheader "Status" [ref=e260]
                    - columnheader "Tanggal Kunjungan" [ref=e261]
                    - columnheader "Tanggal Dibuat" [ref=e262]
                    - columnheader "No Kunjungan" [ref=e263]
                    - columnheader "Jam Datang" [ref=e264]
                    - columnheader "No" [ref=e265]
                    - columnheader "Poli" [ref=e266]
                    - columnheader [ref=e267]
                    - columnheader "Nama Pasien" [ref=e268]
                    - columnheader "Rencana Tindakan" [ref=e269]
                    - columnheader "Rencana Paket" [ref=e270]
                    - columnheader "Tenaga Medis" [ref=e271]
                    - columnheader "Tipe Bayar" [ref=e272]
                    - columnheader "Rujuk BPJS" [ref=e273]
                - rowgroup [ref=e274]:
                  - row "Confirmed 05/05/2026, 10:30 05/05/2026, 10:31 - - xxx-2 Umum Komang, KUUGA0000280, 25 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e275] [cursor=pointer]:
                    - cell "Confirmed" [ref=e276]:
                      - generic [ref=e277]: Confirmed
                    - rowheader "05/05/2026, 10:30" [ref=e278]
                    - cell "05/05/2026, 10:31" [ref=e279]
                    - cell "-" [ref=e280]
                    - cell "-" [ref=e281]
                    - cell "xxx-2" [ref=e282]
                    - cell "Umum" [ref=e283]
                    - cell [ref=e284]
                    - cell "Komang, KUUGA0000280, 25 Tahun" [ref=e285]
                    - cell [ref=e286]
                    - cell [ref=e287]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e288]
                    - cell "Tunai" [ref=e289]
                    - cell [ref=e290]
                  - row "Confirmed 05/05/2026, 10:40 05/05/2026, 10:33 - - xxx-3 Umum Ahmad reza, ACE0000063, 125 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e291] [cursor=pointer]:
                    - cell "Confirmed" [ref=e292]:
                      - generic [ref=e293]: Confirmed
                    - rowheader "05/05/2026, 10:40" [ref=e294]
                    - cell "05/05/2026, 10:33" [ref=e295]
                    - cell "-" [ref=e296]
                    - cell "-" [ref=e297]
                    - cell "xxx-3" [ref=e298]
                    - cell "Umum" [ref=e299]
                    - cell [ref=e300]
                    - cell "Ahmad reza, ACE0000063, 125 Tahun" [ref=e301]
                    - cell [ref=e302]
                    - cell [ref=e303]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e304]
                    - cell "Tunai" [ref=e305]
                    - cell [ref=e306]
                  - row "Confirmed 05/05/2026, 15:20 05/05/2026, 15:29 - - xxx-4 Umum Gunawan Setia, 2024-1678, 25 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e307] [cursor=pointer]:
                    - cell "Confirmed" [ref=e308]:
                      - generic [ref=e309]: Confirmed
                    - rowheader "05/05/2026, 15:20" [ref=e310]
                    - cell "05/05/2026, 15:29" [ref=e311]
                    - cell "-" [ref=e312]
                    - cell "-" [ref=e313]
                    - cell "xxx-4" [ref=e314]
                    - cell "Umum" [ref=e315]
                    - cell [ref=e316]
                    - cell "Gunawan Setia, 2024-1678, 25 Tahun" [ref=e317]
                    - cell [ref=e318]
                    - cell [ref=e319]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e320]
                    - cell "Tunai" [ref=e321]
                    - cell [ref=e322]
                  - row "Confirmed 05/05/2026, 17:36 05/05/2026, 17:36 - - xxx-5 Umum Reyand , KUUGA0000290, 16 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e323] [cursor=pointer]:
                    - cell "Confirmed" [ref=e324]:
                      - generic [ref=e325]: Confirmed
                    - rowheader "05/05/2026, 17:36" [ref=e326]
                    - cell "05/05/2026, 17:36" [ref=e327]
                    - cell "-" [ref=e328]
                    - cell "-" [ref=e329]
                    - cell "xxx-5" [ref=e330]
                    - cell "Umum" [ref=e331]
                    - cell [ref=e332]
                    - cell "Reyand , KUUGA0000290, 16 Tahun" [ref=e333]
                    - cell [ref=e334]
                    - cell [ref=e335]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e336]
                    - cell "Tunai" [ref=e337]
                    - cell [ref=e338]
                  - row "Confirmed 05/05/2026, 17:40 05/05/2026, 17:40 - - xxx-6 Umum Reyand , KUUGA0000290, 16 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e339] [cursor=pointer]:
                    - cell "Confirmed" [ref=e340]:
                      - generic [ref=e341]: Confirmed
                    - rowheader "05/05/2026, 17:40" [ref=e342]
                    - cell "05/05/2026, 17:40" [ref=e343]
                    - cell "-" [ref=e344]
                    - cell "-" [ref=e345]
                    - cell "xxx-6" [ref=e346]
                    - cell "Umum" [ref=e347]
                    - cell [ref=e348]
                    - cell "Reyand , KUUGA0000290, 16 Tahun" [ref=e349]
                    - cell [ref=e350]
                    - cell [ref=e351]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e352]
                    - cell "Tunai" [ref=e353]
                    - cell [ref=e354]
                  - row "Confirmed 05/05/2026, 17:41 05/05/2026, 17:41 - - xxx-7 Umum Reyand , KUUGA0000290, 16 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e355] [cursor=pointer]:
                    - cell "Confirmed" [ref=e356]:
                      - generic [ref=e357]: Confirmed
                    - rowheader "05/05/2026, 17:41" [ref=e358]
                    - cell "05/05/2026, 17:41" [ref=e359]
                    - cell "-" [ref=e360]
                    - cell "-" [ref=e361]
                    - cell "xxx-7" [ref=e362]
                    - cell "Umum" [ref=e363]
                    - cell [ref=e364]
                    - cell "Reyand , KUUGA0000290, 16 Tahun" [ref=e365]
                    - cell [ref=e366]
                    - cell [ref=e367]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e368]
                    - cell "Tunai" [ref=e369]
                    - cell [ref=e370]
                  - row "Confirmed 05/05/2026, 17:50 05/05/2026, 17:50 - - xxx-8 Umum Reyand , KUUGA0000290, 16 Tahun Dr. med. dent. Bobby And Heroes Sp.KHLab Tunai" [ref=e371] [cursor=pointer]:
                    - cell "Confirmed" [ref=e372]:
                      - generic [ref=e373]: Confirmed
                    - rowheader "05/05/2026, 17:50" [ref=e374]
                    - cell "05/05/2026, 17:50" [ref=e375]
                    - cell "-" [ref=e376]
                    - cell "-" [ref=e377]
                    - cell "xxx-8" [ref=e378]
                    - cell "Umum" [ref=e379]
                    - cell [ref=e380]
                    - cell "Reyand , KUUGA0000290, 16 Tahun" [ref=e381]
                    - cell [ref=e382]
                    - cell [ref=e383]
                    - cell "Dr. med. dent. Bobby And Heroes Sp.KHLab" [ref=e384]
                    - cell "Tunai" [ref=e385]
                    - cell [ref=e386]
                  - 'row "Engaged 05/05/2026, 11:14 05/05/2026, 11:14 - 11 : 13 1 Umum reyand test dev 01, 2024-0009, 35 Tahun dr. dr. Alexander Sp.AKA Tunai" [ref=e387] [cursor=pointer]':
                    - cell "Engaged" [ref=e388]:
                      - generic [ref=e389]: Engaged
                    - rowheader "05/05/2026, 11:14" [ref=e390]
                    - cell "05/05/2026, 11:14" [ref=e391]
                    - cell "-" [ref=e392]
                    - 'cell "11 : 13" [ref=e393]'
                    - cell "1" [ref=e394]
                    - cell "Umum" [ref=e395]
                    - cell [ref=e396]
                    - cell "reyand test dev 01, 2024-0009, 35 Tahun" [ref=e397]
                    - cell [ref=e398]
                    - cell [ref=e399]
                    - cell "dr. dr. Alexander Sp.AKA" [ref=e400]
                    - cell "Tunai" [ref=e401]
                    - cell [ref=e402]
              - generic [ref=e405]:
                - generic [ref=e406]: "Jumlah baris perhalaman:"
                - generic [ref=e408]:
                  - button "8" [ref=e409] [cursor=pointer]
                  - img
                - generic [ref=e410]: 1-8 Dari 10 Data
                - generic [ref=e411]:
                  - button "Previous Page" [disabled]:
                    - generic:
                      - img
                  - button "Next Page" [ref=e412] [cursor=pointer]:
                    - img [ref=e414]
      - generic [ref=e417]:
        - list [ref=e418]:
          - button "Assist.id Assist.id" [ref=e419] [cursor=pointer]:
            - img "Assist.id" [ref=e421]
            - generic [ref=e422]:
              - generic: Assist.id
            - button [ref=e423]:
              - img [ref=e425]
        - list [ref=e427]:
          - button "Dashboard" [ref=e428] [cursor=pointer]:
            - img [ref=e431]
          - generic "Rawat Jalan" [ref=e434]:
            - button [ref=e436] [cursor=pointer]:
              - img [ref=e439]
          - generic "Registrasi" [ref=e446]:
            - button [ref=e448] [cursor=pointer]:
              - img [ref=e451]
          - generic "EMR" [ref=e453]:
            - button [ref=e455] [cursor=pointer]:
              - img [ref=e458]
          - generic "Apotek" [ref=e463]:
            - button [ref=e465] [cursor=pointer]:
              - img [ref=e468]
          - generic "Kasir" [ref=e471]:
            - button [ref=e473] [cursor=pointer]:
              - img [ref=e476]
          - generic "Profile" [ref=e478]:
            - button [ref=e480] [cursor=pointer]:
              - img [ref=e483]
          - generic "Message Center" [ref=e490]:
            - button [ref=e492] [cursor=pointer]:
              - img [ref=e495]
          - separator [ref=e498]
          - generic "Office" [ref=e499]:
            - button [ref=e501] [cursor=pointer]:
              - img [ref=e504]
            - generic:
              - generic: Baru
          - generic "Akreditasi" [ref=e506]:
            - button [ref=e508] [cursor=pointer]:
              - img [ref=e511]
          - generic "Layanan Tambahan" [ref=e513]:
            - button [ref=e515] [cursor=pointer]:
              - img [ref=e518]
            - generic:
              - generic: Baru
          - button "Teleconsultation Services" [ref=e520] [cursor=pointer]:
            - img [ref=e523]
          - generic "Settings" [ref=e525]:
            - button [ref=e527] [cursor=pointer]:
              - img [ref=e530]
          - generic "PKS" [ref=e533]:
            - button [ref=e535] [cursor=pointer]:
              - img [ref=e538]
          - generic "Bantuan & Saran" [ref=e540]:
            - button [ref=e542] [cursor=pointer]:
              - img [ref=e545]
          - separator [ref=e548]
          - generic "Belanja Obat" [ref=e549]:
            - button "GPOS" [ref=e550] [cursor=pointer]:
              - img "GPOS" [ref=e553]
          - generic "Advanced Reporting" [ref=e554]:
            - button "Advanced Reporting" [ref=e555] [cursor=pointer]:
              - img "Advanced Reporting" [ref=e558]
          - generic "Zesta Admin" [ref=e559]:
            - button "Zesta Admin" [ref=e560] [cursor=pointer]:
              - img "Zesta Admin" [ref=e563]
    - alertdialog [ref=e565]:
      - generic [ref=e567]:
        - img [ref=e568]
        - generic [ref=e570]: Appointment berhasil ditambahkan
      - button "close" [ref=e571] [cursor=pointer]:
        - img [ref=e573]
  - generic [ref=e576]:
    - button [ref=e577] [cursor=pointer]:
      - img [ref=e578]
    - generic:
      - generic:
        - generic:
          - generic:
            - img
          - generic:
            - heading "Live Chat" [level=3]
            - generic:
              - generic: Online
        - button:
          - img
      - generic:
        - generic:
          - generic: Hi there! How can we help you today?
      - generic:
        - generic:
          - generic:
            - button:
              - img
            - textbox "Type your message..."
            - button [disabled]:
              - img
      - generic:
        - link "⚡ Powered by Zesta":
          - /url: https://zesta.id
          - text: ⚡ Powered by
          - strong: Zesta
  - status [ref=e580]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/auth.fixture';
  2  | 
  3  | async function clickOptionWithRetry(option) {
  4  |     await expect(option).toBeVisible({ timeout: 30000 });
  5  | 
  6  |     for (let attempt = 0; attempt < 3; attempt += 1) {
  7  |         try {
  8  |             await option.click({ timeout: 10000 });
  9  |             return;
  10 |         } catch (error) {
  11 |             if (attempt === 2) {
  12 |                 throw error;
  13 |             }
  14 |         }
  15 |     }
  16 | }
  17 | 
  18 | test.describe('Registrasi Pasien', () => {
  19 | 
  20 |     test.beforeEach(async ({ page }) => {
  21 |         // Halaman EMR dan login sudah ditangani otomatis oleh fixture.
  22 |         await expect(page.locator('[data-test="sidebar-item-registrasi"]')).toBeVisible();
  23 |     });
  24 | 
  25 |     test('TC01: Registrasi Pasien Baru - Daftar Kunjungan', async ({ page }) => {
  26 |         // 1. Navigasi ke halaman Registrasi via sidebar
  27 |         await page.locator('[data-test="sidebar-item-registrasi"]').click();
  28 |         await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
  29 | 
  30 |         // 2. Buka form Pendaftaran Baru
  31 |         await page.getByRole('button', { name: 'Pendaftaran Baru' }).click();
  32 |         await page.getByText('Daftar Kunjungan').click();
  33 |         const registrationDialog = page.getByRole('dialog').filter({ hasText: 'Daftar Kunjungan' });
  34 |         await expect(registrationDialog).toBeVisible();
  35 | 
  36 |         // 3. Cari dan pilih pasien
  37 |         const searchInput = registrationDialog.getByRole('textbox', { name: 'Cari Nama Lengkap Pasien /' });
  38 |         await searchInput.fill('KUUGA0000290');
  39 |         
  40 |         // Tunggu hasil pencarian muncul dan pilih pasien existing, bukan opsi "new".
  41 |         const patientResult = registrationDialog.getByRole('button', {
  42 |             name: /KUUGA0000290/i,
  43 |         });
  44 |         await expect(patientResult).toBeVisible({ timeout: 30000 });
  45 |         await patientResult.click();
  46 | 
  47 |         // Jika aplikasi meminta tipe pasien, pilih pasien umum sebelum lanjut.
  48 |         const patientTypeDialog = page.getByRole('dialog').filter({ hasText: 'Tentukan tipe pasien' });
  49 |         const shouldChoosePatientType = await patientTypeDialog
  50 |             .waitFor({ state: 'visible', timeout: 3000 })
  51 |             .then(() => true)
  52 |             .catch(() => false);
  53 | 
  54 |         if (shouldChoosePatientType) {
  55 |             await patientTypeDialog.getByText('Pasien Umum').click();
  56 |             await expect(patientTypeDialog).toBeHidden();
  57 |         }
  58 | 
  59 |         const doctorField = registrationDialog.locator('#select-doctorName');
  60 |         await expect(doctorField).toBeVisible();
  61 | 
  62 |         // 4. Pilih dokter
  63 |         await doctorField.scrollIntoViewIfNeeded();
  64 |         await doctorField.click();
  65 |         await clickOptionWithRetry(page.getByRole('option', { name: 'Dr. med. dent. Bobby And Heroes Sp.KHLab' }));
  66 |         await expect(doctorField).toContainText('Dr. med. dent. Bobby And Heroes Sp.KHLab');
  67 | 
  68 |         // Setelah dokter dipilih, sistem mewajibkan slot agar jam dan durasi terisi.
  69 |         await expect(registrationDialog.getByRole('button', {
  70 |             name: /\d{2}:\d{2}\s*-\s*\d{2}:\d{2}\s*WIB/,
  71 |         })).toBeVisible({ timeout: 30000 });
  72 | 
  73 |         // 5. Simpan pendaftaran
  74 |         await registrationDialog.getByRole('button', { name: 'Simpan' }).click();
> 75 |         await expect(registrationDialog).toBeHidden();
     |                                          ^ Error: expect(locator).toBeHidden() failed
  76 | 
  77 |         // 6. Navigasi ke EMR dan verifikasi
  78 |         await page.locator('[data-test="sidebar-item-emr"]').click();
  79 |         await expect(page).toHaveURL(/.*emr/);
  80 |     });
  81 | });
  82 | 
```