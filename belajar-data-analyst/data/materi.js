/* =========================================================
   MATERI BELAJAR DATA ANALYST — Excel Dasar sampai Mahir
   Semua materi tersimpan di file ini (tanpa database).
   Mau menambah materi? Salin satu objek pelajaran, ganti id-nya.
   ========================================================= */

const yt = (q) => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const xj = (fn) => "https://exceljet.net/functions/" + fn + "-function";

window.SUMBER_UMUM = [
  { type: "course", title: "Google Data Analytics Professional Certificate (Coursera)", url: "https://www.coursera.org/professional-certificates/google-data-analytics", note: "Program resmi Google: spreadsheet, SQL, Tableau, R/Python. Bisa audit / ajukan bantuan biaya." },
  { type: "course", title: "GCFGlobal / LearnFree — Excel Gratis", url: "https://edu.gcfglobal.org/en/excel/", note: "Kursus Excel gratis dari nol, cocok untuk pemula total." },
  { type: "doc", title: "Microsoft Excel — Bantuan & Pelatihan Resmi", url: "https://support.microsoft.com/en-us/excel", note: "Dokumentasi resmi dan video pendek dari Microsoft." },
  { type: "doc", title: "Exceljet — Daftar Fungsi Excel", url: "https://exceljet.net/functions", note: "Referensi fungsi dengan contoh yang sangat jelas." },
  { type: "course", title: "Kaggle Learn — SQL, Pandas, Visualisasi", url: "https://www.kaggle.com/learn", note: "Kursus mini gratis + latihan langsung di browser." },
  { type: "course", title: "Microsoft Learn — Power BI", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi", note: "Jalur belajar Power BI resmi dan gratis." },
  { type: "yt", title: "YouTube: Belajar Excel Bahasa Indonesia", url: yt("belajar excel bahasa indonesia dari nol"), note: "Kumpulan tutorial berbahasa Indonesia." },
  { type: "yt", title: "YouTube: Excel for Data Analysis (full course)", url: yt("excel for data analysis full course"), note: "Kursus panjang berbahasa Inggris." },
];

window.MATERI = [
  /* =================== LEVEL 1 =================== */
  {
    id: 1, slug: "dasar", title: "Dasar Excel", tag: "Pemula", color: "#16a34a",
    desc: "Kenali Excel, input data, rumus pertama, dan cara merapikan tabel.",
    lessons: [
      {
        id: "l1-1", title: "Mengenal Excel & Antarmuka", dur: 15,
        summary: "Workbook, worksheet, sel, kolom, baris, Ribbon, dan Name Box.",
        content: `
<p>Excel adalah <b>spreadsheet</b>: lembar kerja berisi kotak-kotak (<b>sel</b>) yang tersusun dalam <b>kolom</b> (A, B, C …) dan <b>baris</b> (1, 2, 3 …). Alamat sel ditulis kolom + baris, misalnya <code>B3</code>.</p>
<h4>Istilah penting</h4>
<ul>
<li><b>Workbook</b> = satu file Excel (.xlsx).</li>
<li><b>Worksheet / Sheet</b> = tab di bagian bawah. Satu workbook bisa berisi banyak sheet.</li>
<li><b>Range</b> = kumpulan sel, ditulis <code>A1:C10</code> (dari A1 sampai C10).</li>
<li><b>Ribbon</b> = menu di atas (Home, Insert, Formulas, Data, …).</li>
<li><b>Name Box</b> = kotak kiri atas yang menunjukkan alamat sel aktif. Ketik <code>D50</code> lalu Enter untuk melompat.</li>
<li><b>Formula Bar</b> = tempat melihat/menyunting isi sel dan rumus.</li>
</ul>
<h4>Shortcut wajib hafal</h4>
<table class="tbl"><tr><th>Shortcut</th><th>Fungsi</th></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Panah</kbd></td><td>Lompat ke ujung data</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Panah</kbd></td><td>Blok sampai ujung data</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd></td><td>Undo / Redo</td></tr>
<tr><td><kbd>F2</kbd></td><td>Edit isi sel</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Page Up/Down</kbd></td><td>Pindah sheet</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Home</kbd></td><td>Kembali ke A1</td></tr></table>
<div class="tip">💡 Data analyst menghabiskan banyak waktu bernavigasi. Membiasakan shortcut sejak awal menghemat berjam-jam.</div>`,
        practice: ["Buat workbook baru berisi 3 sheet: <i>Data</i>, <i>Analisis</i>, <i>Dashboard</i>.", "Gunakan Name Box untuk melompat ke sel Z100, lalu kembali dengan Ctrl+Home.", "Ganti warna tab sheet Data menjadi hijau (klik kanan tab → Tab Color)."],
        quiz: [
          { q: "Alamat sel pada kolom C baris 7 ditulis…", o: ["7C", "C7", "C:7", "R7C3"], a: 1, why: "Format alamat sel adalah huruf kolom diikuti nomor baris." },
          { q: "Range A1:B3 berisi berapa sel?", o: ["2", "3", "5", "6"], a: 3, why: "2 kolom (A, B) × 3 baris = 6 sel." },
        ],
        res: [
          { type: "yt", title: "Pengenalan Excel untuk pemula", url: yt("pengenalan microsoft excel untuk pemula") },
          { type: "doc", title: "Shortcut keyboard Excel (Microsoft)", url: "https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f" },
          { type: "course", title: "GCFGlobal: Getting Started with Excel", url: "https://edu.gcfglobal.org/en/excel/" },
        ],
      },
      {
        id: "l1-2", title: "Input Data & Tipe Data", dur: 20,
        summary: "Teks, angka, tanggal, Autofill, Flash Fill, dan kesalahan input yang sering terjadi.",
        content: `
<p>Excel mengenali beberapa <b>tipe data</b>. Salah tipe = rumus error, jadi ini fondasi penting.</p>
<table class="tbl"><tr><th>Tipe</th><th>Contoh</th><th>Ciri default</th></tr>
<tr><td>Angka</td><td>15000</td><td>Rata kanan</td></tr>
<tr><td>Teks</td><td>Jakarta</td><td>Rata kiri</td></tr>
<tr><td>Tanggal</td><td>16/11/2026</td><td>Rata kanan (sebenarnya angka seri)</td></tr>
<tr><td>Boolean</td><td>TRUE / FALSE</td><td>Rata tengah</td></tr></table>
<div class="warn">⚠️ Angka yang rata kiri biasanya tersimpan sebagai <b>teks</b> (sering terjadi saat impor data). Akibatnya SUM menghasilkan 0. Perbaiki dengan Data → Text to Columns → Finish, atau <code>=VALUE(A2)</code>.</div>
<h4>Autofill</h4>
<p>Ketik <code>Senin</code> lalu tarik <b>fill handle</b> (kotak kecil di pojok kanan bawah sel), dan Excel otomatis melanjutkan Selasa, Rabu, dst. Ini juga berlaku untuk angka berpola (1, 2 → 3, 4, 5…) dan tanggal.</p>
<h4>Flash Fill (Ctrl+E)</h4>
<p>Excel menebak pola dari contoh yang Anda ketik. Misalnya kolom A berisi <i>budi.santoso@mail.com</i>; ketik <i>Budi Santoso</i> di B2, lalu tekan <kbd>Ctrl</kbd>+<kbd>E</kbd> dan seluruh kolom terisi.</p>
<h4>Tanggal adalah angka</h4>
<p>Di balik layar, 1 Januari 1900 = 1, dan setiap hari bertambah 1. Karena itu selisih tanggal bisa dihitung langsung: <code>=B2-A2</code> menghasilkan jumlah hari.</p>`,
        practice: ["Ketik daftar 12 bulan memakai Autofill dari satu sel 'Januari'.", "Buat kolom email lalu pisahkan nama depan dengan Flash Fill.", "Ketik '00123 (diawali apostrof) dan perhatikan bedanya dengan 00123."],
        quiz: [
          { q: "Angka di sel tampil rata kiri dan SUM menghasilkan 0. Penyebab paling mungkin?", o: ["Rumus salah ketik", "Angka tersimpan sebagai teks", "Sel terkunci", "Format mata uang"], a: 1, why: "Angka berformat teks tidak ikut dijumlah oleh SUM." },
          { q: "Shortcut Flash Fill adalah…", o: ["Ctrl+F", "Ctrl+D", "Ctrl+E", "Ctrl+R"], a: 2, why: "Ctrl+E menjalankan Flash Fill." },
        ],
        res: [
          { type: "yt", title: "Autofill & Flash Fill Excel", url: yt("flash fill excel tutorial indonesia") },
          { type: "doc", title: "Menggunakan Flash Fill (Microsoft)", url: "https://support.microsoft.com/en-us/office/using-flash-fill-in-excel-3f9bcf1e-db93-4890-94a0-1578341f73f7" },
        ],
      },
      {
        id: "l1-3", title: "Rumus Pertama: SUM, AVERAGE, MIN, MAX, COUNT", dur: 25,
        summary: "Struktur rumus, operator aritmatika, dan 5 fungsi agregasi dasar.",
        content: `
<p>Semua rumus diawali tanda <code>=</code>. Operator dasar: <code>+ - * / ^</code>. Urutan hitung mengikuti matematika (kurung → pangkat → kali/bagi → tambah/kurang).</p>
<div class="formula">=SUM(B2:B10)</div>
<table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>
<tr><td><code>SUM</code></td><td>Menjumlahkan</td><td><code>=SUM(B2:B10)</code></td></tr>
<tr><td><code>AVERAGE</code></td><td>Rata-rata</td><td><code>=AVERAGE(B2:B10)</code></td></tr>
<tr><td><code>MIN</code> / <code>MAX</code></td><td>Nilai terkecil / terbesar</td><td><code>=MAX(B2:B10)</code></td></tr>
<tr><td><code>COUNT</code></td><td>Menghitung sel berisi <b>angka</b></td><td><code>=COUNT(B2:B10)</code></td></tr>
<tr><td><code>COUNTA</code></td><td>Menghitung sel <b>tidak kosong</b></td><td><code>=COUNTA(A2:A10)</code></td></tr>
<tr><td><code>COUNTBLANK</code></td><td>Menghitung sel kosong</td><td><code>=COUNTBLANK(A2:A10)</code></td></tr></table>
<h4>Contoh data</h4>
<table class="tbl sheet"><tr><th></th><th>A</th><th>B</th></tr>
<tr><th>1</th><td><b>Produk</b></td><td><b>Penjualan</b></td></tr>
<tr><th>2</th><td>Kopi</td><td>120</td></tr><tr><th>3</th><td>Teh</td><td>85</td></tr>
<tr><th>4</th><td>Susu</td><td>140</td></tr><tr><th>5</th><td>Jus</td><td>60</td></tr></table>
<p><code>=SUM(B2:B5)</code> → 405, <code>=AVERAGE(B2:B5)</code> → 101,25, <code>=MAX(B2:B5)</code> → 140.</p>
<div class="tip">💡 <kbd>Alt</kbd>+<kbd>=</kbd> membuat AutoSum otomatis. Status bar di bawah juga langsung menampilkan Sum/Average saat Anda memblok range.</div>
<div class="warn">⚠️ Pemisah argumen di Excel berbahasa Indonesia biasanya titik koma: <code>=IF(A1&gt;5;"Ya";"Tidak")</code>. Di materi ini dipakai koma (standar internasional).</div>`,
        practice: ["Buat tabel 10 produk dengan harga & qty, lalu hitung Total = Harga*Qty.", "Hitung total, rata-rata, penjualan tertinggi & terendah.", "Bandingkan hasil COUNT dan COUNTA pada kolom yang berisi teks dan angka."],
        quiz: [
          { q: "Fungsi untuk menghitung sel yang TIDAK kosong (termasuk teks)?", o: ["COUNT", "COUNTA", "COUNTIF", "SUM"], a: 1, why: "COUNT hanya angka; COUNTA menghitung semua sel yang terisi." },
          { q: "Hasil =2+3*4 adalah…", o: ["20", "14", "24", "9"], a: 1, why: "Perkalian dihitung lebih dulu: 3*4=12, lalu +2 = 14." },
        ],
        res: [
          { type: "yt", title: "Rumus dasar Excel SUM AVERAGE MAX MIN", url: yt("rumus dasar excel sum average max min count") },
          { type: "doc", title: "Exceljet: SUM", url: xj("sum") },
          { type: "doc", title: "Exceljet: COUNTA", url: xj("counta") },
        ],
      },
      {
        id: "l1-4", title: "Referensi Sel: Relatif, Absolut, Campuran", dur: 20,
        summary: "Kapan memakai $ dan cara cepat dengan F4.",
        content: `
<p>Saat rumus disalin, referensi <b>relatif</b> ikut bergeser. Kadang kita ingin satu sel tetap terkunci; itulah referensi <b>absolut</b> dengan tanda <code>$</code>.</p>
<table class="tbl"><tr><th>Tulisan</th><th>Jenis</th><th>Saat disalin</th></tr>
<tr><td><code>A1</code></td><td>Relatif</td><td>Kolom & baris bergeser</td></tr>
<tr><td><code>$A$1</code></td><td>Absolut</td><td>Terkunci total</td></tr>
<tr><td><code>$A1</code></td><td>Campuran</td><td>Kolom terkunci, baris bergeser</td></tr>
<tr><td><code>A$1</code></td><td>Campuran</td><td>Baris terkunci, kolom bergeser</td></tr></table>
<h4>Contoh: menghitung pajak</h4>
<p>Tarif pajak 11% disimpan di <code>E1</code>. Harga ada di B2:B10. Rumus di C2:</p>
<div class="formula">=B2*$E$1</div>
<p>Saat disalin ke C3, rumus menjadi <code>=B3*$E$1</code>; tarif pajak tetap mengacu ke E1.</p>
<div class="tip">💡 Klik referensi di formula bar lalu tekan <kbd>F4</kbd> berulang: A1 → $A$1 → A$1 → $A1 → A1.</div>
<h4>Latihan klasik: tabel perkalian</h4>
<p>Isi B1:J1 dengan 1–9 dan A2:A10 dengan 1–9. Di B2 tulis <code>=$A2*B$1</code>, lalu salin ke seluruh tabel. Ini contoh sempurna referensi campuran.</p>`,
        practice: ["Buat tabel perkalian 1–9 hanya dengan SATU rumus yang disalin.", "Buat kolom 'Harga + Pajak' dengan tarif pajak di sel terpisah.", "Buat konversi USD→IDR dengan kurs di satu sel absolut."],
        quiz: [
          { q: "Rumus =B2*$E$1 disalin ke bawah 1 baris menjadi…", o: ["=B3*$E$2", "=B3*$E$1", "=B2*$E$1", "=C2*$E$1"], a: 1, why: "B2 relatif menjadi B3, sedangkan $E$1 terkunci." },
          { q: "Tombol untuk berganti jenis referensi dengan cepat?", o: ["F2", "F4", "F9", "F11"], a: 1, why: "F4 memutar jenis referensi." },
        ],
        res: [
          { type: "yt", title: "Referensi absolut dan relatif Excel", url: yt("referensi absolut relatif excel tanda dolar") },
          { type: "doc", title: "Exceljet: Absolute reference", url: "https://exceljet.net/glossary/absolute-reference" },
        ],
      },
      {
        id: "l1-5", title: "Format Sel & Tampilan Profesional", dur: 20,
        summary: "Number format, mata uang Rupiah, persen, freeze panes, dan tabel rapi.",
        content: `
<p>Format mengubah <b>tampilan</b>, bukan nilai. Angka 0,25 bisa tampil sebagai 25% tanpa berubah nilainya.</p>
<h4>Format angka penting (Ctrl+1)</h4>
<ul>
<li><b>Number</b>: atur desimal dan pemisah ribuan.</li>
<li><b>Currency / Accounting</b>: Rp 1.500.000.</li>
<li><b>Percentage</b>: 0,15 → 15%.</li>
<li><b>Date</b>: dd/mm/yyyy, dd mmm yyyy, dll.</li>
<li><b>Custom</b>: contoh <code>#,##0,,"jt"</code> menampilkan 2500000 sebagai <i>3jt</i>.</li>
</ul>
<h4>Membuat laporan mudah dibaca</h4>
<ol>
<li>Header tebal dengan warna latar netral.</li>
<li>Angka rata kanan, teks rata kiri.</li>
<li><b>View → Freeze Panes</b> agar header tetap terlihat saat scroll.</li>
<li>Hindari <i>Merge Cells</i> di area data karena menyulitkan sort & filter. Gunakan <b>Center Across Selection</b>.</li>
<li>Gunakan warna seperlunya: 1 warna aksen untuk menyorot.</li>
</ol>
<div class="tip">💡 Format Painter (ikon kuas): klik dua kali untuk menyalin format ke banyak tempat sekaligus.</div>`,
        practice: ["Format kolom harga menjadi Rupiah tanpa desimal.", "Buat kolom 'Margin' dalam persen 1 desimal.", "Bekukan baris header dan kolom pertama."],
        quiz: [
          { q: "Sel berisi 0,2 diberi format Percentage. Nilai aslinya menjadi…", o: ["20", "0,2", "2", "20%"], a: 1, why: "Format hanya mengubah tampilan; nilainya tetap 0,2." },
          { q: "Mengapa Merge Cells sebaiknya dihindari di area data?", o: ["Membuat file berat", "Mengganggu sort/filter & rumus", "Tidak bisa diberi warna", "Tidak bisa dicetak"], a: 1, why: "Sel gabungan menyulitkan sorting, filtering, dan seleksi." },
        ],
        res: [
          { type: "yt", title: "Format cells Excel Rupiah & custom format", url: yt("custom number format excel rupiah") },
          { type: "doc", title: "Exceljet: Custom number formats", url: "https://exceljet.net/articles/custom-number-formats" },
        ],
      },
      {
        id: "l1-6", title: "Sort & Filter", dur: 15,
        summary: "Mengurutkan berdasarkan banyak kolom dan menyaring data dengan cepat.",
        content: `
<p><b>Sort</b> mengurutkan, <b>Filter</b> menyembunyikan baris yang tidak memenuhi kriteria.</p>
<h4>Sort bertingkat</h4>
<p>Data → Sort → Add Level. Contoh: urutkan <i>Wilayah</i> A→Z, lalu <i>Penjualan</i> terbesar→terkecil.</p>
<h4>Filter</h4>
<ul>
<li>Aktifkan dengan <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>.</li>
<li>Filter teks: <i>contains</i>, <i>begins with</i>.</li>
<li>Filter angka: <i>Top 10</i>, <i>greater than</i>, <i>above average</i>.</li>
<li>Filter tanggal: <i>this month</i>, <i>last quarter</i>.</li>
</ul>
<div class="tip">💡 Gunakan <code>=SUBTOTAL(9,B2:B100)</code> agar total hanya menghitung baris yang terlihat setelah filter. Angka 9 = SUM, 1 = AVERAGE, 3 = COUNTA.</div>
<div class="warn">⚠️ Selalu blok seluruh tabel sebelum sort. Jika hanya satu kolom yang diurutkan, data antar kolom akan tertukar.</div>`,
        practice: ["Urutkan data penjualan per wilayah lalu per nilai terbesar.", "Filter 5 produk dengan penjualan tertinggi.", "Bandingkan hasil SUM vs SUBTOTAL(9,…) saat filter aktif."],
        quiz: [
          { q: "Fungsi yang mengabaikan baris tersembunyi oleh filter?", o: ["SUM", "SUMIF", "SUBTOTAL", "TOTAL"], a: 2, why: "SUBTOTAL (dan AGGREGATE) hanya menghitung baris terlihat." },
          { q: "Shortcut mengaktifkan filter?", o: ["Ctrl+Shift+L", "Ctrl+F", "Alt+F", "Ctrl+T"], a: 0, why: "Ctrl+Shift+L mengaktifkan/mematikan filter." },
        ],
        res: [
          { type: "yt", title: "Sort dan filter Excel lengkap", url: yt("sort filter excel lengkap pemula") },
          { type: "doc", title: "Exceljet: SUBTOTAL", url: xj("subtotal") },
        ],
      },
    ],
  },

  /* =================== LEVEL 2 =================== */
  {
    id: 2, slug: "menengah", title: "Excel Menengah", tag: "Menengah", color: "#0891b2",
    desc: "Logika, fungsi bersyarat, teks, tanggal, lookup, dan validasi data.",
    lessons: [
      {
        id: "l2-1", title: "Logika: IF, AND, OR, IFS", dur: 30,
        summary: "Membuat keputusan otomatis dalam rumus.",
        content: `
<div class="formula">=IF(kondisi, nilai_jika_benar, nilai_jika_salah)</div>
<p>Contoh: status lulus jika nilai ≥ 75.</p>
<div class="formula">=IF(B2>=75,"Lulus","Remedial")</div>
<h4>Kondisi ganda</h4>
<ul>
<li><code>AND</code>: semua syarat harus benar → <code>=IF(AND(B2>=75,C2>=80),"Lulus","Tidak")</code></li>
<li><code>OR</code>: salah satu cukup → <code>=IF(OR(D2="VIP",E2>1000000),"Diskon","Normal")</code></li>
</ul>
<h4>IF bertingkat vs IFS</h4>
<div class="formula">=IF(B2>=90,"A",IF(B2>=80,"B",IF(B2>=70,"C","D")))</div>
<p>Lebih rapi dengan <code>IFS</code> (Excel 2019+):</p>
<div class="formula">=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",TRUE,"D")</div>
<h4>Menangani error</h4>
<div class="formula">=IFERROR(B2/C2,0)</div>
<p>Jika pembagian menghasilkan error (misalnya #DIV/0!), tampilkan 0.</p>
<div class="tip">💡 Kondisi paling ketat ditulis lebih dulu. IF berhenti di kondisi pertama yang benar.</div>`,
        practice: ["Beri grade A/B/C/D untuk 20 nilai siswa memakai IFS.", "Tandai pelanggan 'Prioritas' jika belanja > 5 juta ATAU transaksi > 10 kali.", "Hitung rasio konversi dan bungkus dengan IFERROR."],
        quiz: [
          { q: "=IF(AND(5>3,2>4),\"Ya\",\"Tidak\") menghasilkan…", o: ["Ya", "Tidak", "#VALUE!", "TRUE"], a: 1, why: "2>4 salah, sehingga AND bernilai FALSE." },
          { q: "Fungsi untuk menangkap error dan menggantinya?", o: ["ISERROR", "IFERROR", "ERROR.TYPE", "IFNA saja"], a: 1, why: "IFERROR(value, value_if_error)." },
        ],
        res: [
          { type: "yt", title: "Rumus IF AND OR Excel", url: yt("rumus if and or excel bertingkat") },
          { type: "doc", title: "Exceljet: IF", url: xj("if") },
          { type: "doc", title: "Exceljet: IFS", url: xj("ifs") },
        ],
      },
      {
        id: "l2-2", title: "Agregasi Bersyarat: COUNTIF(S), SUMIF(S), AVERAGEIF(S)", dur: 30,
        summary: "Menghitung dan menjumlah berdasarkan kriteria, fondasi analisis.",
        content: `
<div class="formula">=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)</div>
<table class="tbl sheet"><tr><th></th><th>A</th><th>B</th><th>C</th></tr>
<tr><th>1</th><td><b>Wilayah</b></td><td><b>Produk</b></td><td><b>Omzet</b></td></tr>
<tr><th>2</th><td>Jawa</td><td>Kopi</td><td>500</td></tr>
<tr><th>3</th><td>Bali</td><td>Teh</td><td>300</td></tr>
<tr><th>4</th><td>Jawa</td><td>Teh</td><td>200</td></tr>
<tr><th>5</th><td>Jawa</td><td>Kopi</td><td>400</td></tr></table>
<ul>
<li>Jumlah transaksi Jawa: <code>=COUNTIF(A2:A5,"Jawa")</code> → 3</li>
<li>Omzet Jawa: <code>=SUMIF(A2:A5,"Jawa",C2:C5)</code> → 1100</li>
<li>Omzet Kopi di Jawa: <code>=SUMIFS(C2:C5,A2:A5,"Jawa",B2:B5,"Kopi")</code> → 900</li>
<li>Omzet &gt; 300: <code>=SUMIF(C2:C5,"&gt;300")</code> → 900</li>
</ul>
<h4>Kriteria dari sel</h4>
<div class="formula">=SUMIFS(C:C,A:A,F2,C:C,">="&G2)</div>
<p>Operator digabung dengan sel memakai <code>&amp;</code>.</p>
<h4>Wildcard</h4>
<p><code>"*kopi*"</code> = mengandung kata kopi, <code>"K*"</code> = diawali K, <code>"?"</code> = satu karakter apa saja.</p>
<div class="tip">💡 Hafalkan SUMIFS (yang ada "S"-nya). SUMIFS bisa menangani 1 kriteria juga, dan urutan argumennya konsisten dengan COUNTIFS & AVERAGEIFS.</div>`,
        practice: ["Buat tabel ringkasan omzet per wilayah × produk memakai SUMIFS.", "Hitung jumlah transaksi bulan ini dengan kriteria tanggal >= & <=.", "Hitung rata-rata nilai transaksi untuk pelanggan yang namanya mengandung 'PT'."],
        quiz: [
          { q: "Argumen pertama SUMIFS adalah…", o: ["criteria_range", "criteria", "sum_range", "range"], a: 2, why: "SUMIFS diawali sum_range, berbeda dengan SUMIF." },
          { q: "Kriteria 'lebih besar dari nilai di G2' ditulis…", o: ["\">G2\"", "\">\"&G2", ">G2", "\"&>G2\""], a: 1, why: "Operator sebagai teks lalu digabung dengan & ke referensi sel." },
        ],
        res: [
          { type: "yt", title: "SUMIFS COUNTIFS Excel", url: yt("sumifs countifs excel tutorial indonesia") },
          { type: "doc", title: "Exceljet: SUMIFS", url: xj("sumifs") },
          { type: "doc", title: "Exceljet: COUNTIFS", url: xj("countifs") },
        ],
      },
      {
        id: "l2-3", title: "Fungsi Teks untuk Membersihkan Data", dur: 30,
        summary: "LEFT, RIGHT, MID, LEN, TRIM, PROPER, SUBSTITUTE, TEXTJOIN, TEXTBEFORE.",
        content: `
<p>Data mentah sering berantakan: spasi ganda, huruf tak seragam, kode yang perlu dipecah. Fungsi teks adalah alat pembersihnya.</p>
<table class="tbl"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>LEFT</code></td><td><code>=LEFT("JKT-0012",3)</code></td><td>JKT</td></tr>
<tr><td><code>RIGHT</code></td><td><code>=RIGHT("JKT-0012",4)</code></td><td>0012</td></tr>
<tr><td><code>MID</code></td><td><code>=MID("INV2026110",4,4)</code></td><td>2026</td></tr>
<tr><td><code>LEN</code></td><td><code>=LEN("Data")</code></td><td>4</td></tr>
<tr><td><code>TRIM</code></td><td><code>=TRIM("  budi   santoso ")</code></td><td>budi santoso</td></tr>
<tr><td><code>PROPER</code></td><td><code>=PROPER("budi santoso")</code></td><td>Budi Santoso</td></tr>
<tr><td><code>UPPER/LOWER</code></td><td><code>=UPPER("jkt")</code></td><td>JKT</td></tr>
<tr><td><code>SUBSTITUTE</code></td><td><code>=SUBSTITUTE("08-12-34","-","")</code></td><td>081234</td></tr>
<tr><td><code>FIND/SEARCH</code></td><td><code>=FIND("@","a@b.com")</code></td><td>2</td></tr>
<tr><td><code>TEXTJOIN</code></td><td><code>=TEXTJOIN(", ",TRUE,A2:A5)</code></td><td>gabung dengan koma</td></tr>
<tr><td><code>TEXTBEFORE</code>*</td><td><code>=TEXTBEFORE("budi@mail.com","@")</code></td><td>budi</td></tr>
<tr><td><code>TEXTSPLIT</code>*</td><td><code>=TEXTSPLIT("a,b,c",",")</code></td><td>a | b | c</td></tr></table>
<p class="muted">* Tersedia di Excel 365.</p>
<h4>Kombinasi: ambil username email (versi lama)</h4>
<div class="formula">=LEFT(A2,FIND("@",A2)-1)</div>
<h4>Gabung teks dan angka berformat</h4>
<div class="formula">="Total: Rp "&TEXT(B2,"#,##0")</div>
<div class="tip">💡 Kombo pembersih paling sering dipakai: <code>=PROPER(TRIM(A2))</code>.</div>`,
        practice: ["Bersihkan 20 nama pelanggan yang spasi & kapitalnya berantakan.", "Pisahkan kode 'JKT-2026-0012' menjadi kota, tahun, nomor.", "Ambil domain dari kolom email (setelah @)."],
        quiz: [
          { q: "Fungsi untuk menghapus spasi berlebih?", o: ["CLEAN", "TRIM", "STRIP", "SUBSTITUTE"], a: 1, why: "TRIM menghapus spasi di awal/akhir & spasi ganda di tengah." },
          { q: "=MID(\"ANALISIS\",3,3) menghasilkan…", o: ["ANA", "ALI", "NAL", "SIS"], a: 1, why: "Mulai karakter ke-3 (A), ambil 3 karakter: A-L-I." },
        ],
        res: [
          { type: "yt", title: "Fungsi teks Excel LEFT MID RIGHT", url: yt("fungsi teks excel left mid right trim") },
          { type: "doc", title: "Exceljet: TEXTBEFORE", url: xj("textbefore") },
          { type: "doc", title: "Exceljet: TEXTJOIN", url: xj("textjoin") },
        ],
      },
      {
        id: "l2-4", title: "Fungsi Tanggal & Waktu", dur: 25,
        summary: "TODAY, YEAR, MONTH, EOMONTH, DATEDIF, NETWORKDAYS, WEEKDAY.",
        content: `
<table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>
<tr><td><code>TODAY()</code> / <code>NOW()</code></td><td>Tanggal / waktu sekarang</td><td><code>=TODAY()</code></td></tr>
<tr><td><code>YEAR, MONTH, DAY</code></td><td>Ambil komponen</td><td><code>=MONTH(A2)</code></td></tr>
<tr><td><code>DATE</code></td><td>Susun tanggal</td><td><code>=DATE(2026,11,16)</code></td></tr>
<tr><td><code>EOMONTH</code></td><td>Akhir bulan</td><td><code>=EOMONTH(A2,0)</code></td></tr>
<tr><td><code>EDATE</code></td><td>Tambah n bulan</td><td><code>=EDATE(A2,3)</code></td></tr>
<tr><td><code>DATEDIF</code></td><td>Selisih tahun/bulan/hari</td><td><code>=DATEDIF(A2,TODAY(),"y")</code></td></tr>
<tr><td><code>NETWORKDAYS</code></td><td>Hari kerja</td><td><code>=NETWORKDAYS(A2,B2,Libur)</code></td></tr>
<tr><td><code>WEEKDAY</code></td><td>Hari ke- (1–7)</td><td><code>=WEEKDAY(A2,2)</code></td></tr>
<tr><td><code>TEXT</code></td><td>Nama hari/bulan</td><td><code>=TEXT(A2,"mmmm yyyy")</code></td></tr></table>
<h4>Kasus nyata data analyst</h4>
<ul>
<li><b>Umur pelanggan</b>: <code>=DATEDIF(TglLahir,TODAY(),"y")</code></li>
<li><b>Kolom bulan untuk grouping</b>: <code>=TEXT(A2,"yyyy-mm")</code></li>
<li><b>Kuartal</b>: <code>="Q"&ROUNDUP(MONTH(A2)/3,0)</code></li>
<li><b>Lama pengiriman (hari kerja)</b>: <code>=NETWORKDAYS(TglPesan,TglKirim)</code></li>
<li><b>Weekend?</b> <code>=IF(WEEKDAY(A2,2)>5,"Weekend","Weekday")</code></li>
</ul>
<div class="tip">💡 <kbd>Ctrl</kbd>+<kbd>;</kbd> memasukkan tanggal hari ini sebagai nilai statis (tidak berubah besok).</div>`,
        practice: ["Dari kolom tanggal transaksi, buat kolom Tahun, Bulan, Kuartal, Nama Hari.", "Hitung umur 15 karyawan dan masa kerja dalam bulan.", "Hitung SLA pengiriman dalam hari kerja."],
        quiz: [
          { q: "Rumus untuk mendapatkan tanggal terakhir di bulan yang sama?", o: ["=EDATE(A2,0)", "=EOMONTH(A2,0)", "=ENDMONTH(A2)", "=DATE(A2,12,31)"], a: 1, why: "EOMONTH(tanggal,0) = akhir bulan tersebut." },
          { q: "WEEKDAY(A2,2) bernilai 6 berarti…", o: ["Jumat", "Sabtu", "Minggu", "Senin"], a: 1, why: "Mode 2: Senin=1 … Sabtu=6, Minggu=7." },
        ],
        res: [
          { type: "yt", title: "Rumus tanggal Excel DATEDIF EOMONTH", url: yt("rumus tanggal excel datedif eomonth networkdays") },
          { type: "doc", title: "Exceljet: EOMONTH", url: xj("eomonth") },
          { type: "doc", title: "Exceljet: NETWORKDAYS", url: xj("networkdays") },
        ],
      },
      {
        id: "l2-5", title: "VLOOKUP & HLOOKUP", dur: 30,
        summary: "Mengambil data dari tabel lain, plus keterbatasannya.",
        content: `
<div class="formula">=VLOOKUP(nilai_dicari, tabel, nomor_kolom, FALSE)</div>
<p>Tabel referensi produk di sheet <i>Master</i> (A: Kode, B: Nama, C: Harga). Di sheet transaksi kita punya kode di A2:</p>
<div class="formula">=VLOOKUP(A2,Master!$A$2:$C$100,3,FALSE)</div>
<p>Artinya: cari A2 di kolom pertama tabel, ambil kolom ke-3 (Harga), dengan pencocokan <b>persis</b> (FALSE).</p>
<h4>Approximate match (TRUE)</h4>
<p>Berguna untuk tabel rentang, misalnya komisi berdasarkan omzet. Kolom pertama <b>harus terurut naik</b>.</p>
<table class="tbl"><tr><th>Omzet min</th><th>Komisi</th></tr><tr><td>0</td><td>2%</td></tr><tr><td>10.000.000</td><td>5%</td></tr><tr><td>50.000.000</td><td>8%</td></tr></table>
<div class="formula">=VLOOKUP(B2,TabelKomisi,2,TRUE)</div>
<h4>Keterbatasan VLOOKUP</h4>
<ul><li>Hanya bisa mencari ke <b>kanan</b>.</li><li>Nomor kolom statis: jika ada kolom baru disisipkan, hasilnya salah.</li><li>Lebih lambat di data besar.</li></ul>
<p>Solusinya: <b>INDEX-MATCH</b> atau <b>XLOOKUP</b> (Level 3).</p>
<div class="warn">⚠️ Error #N/A = data tidak ditemukan. Periksa spasi tersembunyi (TRIM) atau beda tipe data (angka vs teks).</div>`,
        practice: ["Buat sheet Master Produk & sheet Transaksi, lalu ambil Nama & Harga dengan VLOOKUP.", "Buat tabel komisi bertingkat dengan approximate match.", "Bungkus VLOOKUP dengan IFERROR agar #N/A menjadi 'Tidak ditemukan'."],
        quiz: [
          { q: "Argumen ke-4 FALSE pada VLOOKUP berarti…", o: ["Cari dari bawah", "Exact match", "Approximate match", "Abaikan huruf besar"], a: 1, why: "FALSE/0 = pencocokan persis." },
          { q: "Kelemahan utama VLOOKUP?", o: ["Tidak bisa beda sheet", "Tidak bisa mencari ke kiri", "Hanya untuk angka", "Maks 100 baris"], a: 1, why: "Kolom kunci harus di paling kiri tabel." },
        ],
        res: [
          { type: "yt", title: "VLOOKUP Excel dari nol", url: yt("vlookup excel tutorial indonesia pemula") },
          { type: "doc", title: "Exceljet: VLOOKUP", url: xj("vlookup") },
        ],
      },
      {
        id: "l2-6", title: "Conditional Formatting", dur: 20,
        summary: "Menyorot pola, outlier, dan duplikat secara visual.",
        content: `
<p>Home → Conditional Formatting membuat data "bicara" tanpa grafik.</p>
<ul>
<li><b>Highlight Cells Rules</b>: lebih besar dari, berisi teks, duplikat.</li>
<li><b>Top/Bottom</b>: 10 teratas, di atas rata-rata.</li>
<li><b>Data Bars</b>: batang di dalam sel.</li>
<li><b>Color Scales</b>: heatmap (merah–kuning–hijau).</li>
<li><b>Icon Sets</b>: panah/lampu lalu lintas.</li>
</ul>
<h4>Rule dengan rumus (paling kuat)</h4>
<p>Blok A2:F100 → New Rule → <i>Use a formula</i>:</p>
<div class="formula">=$F2<0</div>
<p>Seluruh baris dengan profit negatif akan tersorot. Kuncinya <code>$</code> di kolom dan baris relatif.</p>
<div class="formula">=$C2=MAX($C$2:$C$100)</div>
<p>Menyorot baris dengan penjualan tertinggi.</p>
<div class="tip">💡 Jangan berlebihan. Satu atau dua aturan yang bermakna lebih baik daripada lembar penuh warna.</div>`,
        practice: ["Sorot duplikat pada kolom ID pelanggan.", "Buat heatmap penjualan bulanan per produk.", "Sorot seluruh baris yang tanggal jatuh temponya sudah lewat: =$E2<TODAY()."],
        quiz: [
          { q: "Agar seluruh baris tersorot berdasarkan kolom F, rumus yang tepat…", o: ["=F2<0", "=$F$2<0", "=$F2<0", "=F$2<0"], a: 2, why: "Kolom dikunci ($F), baris relatif (2) agar mengikuti tiap baris." },
        ],
        res: [
          { type: "yt", title: "Conditional formatting rumus Excel", url: yt("conditional formatting excel formula highlight row") },
          { type: "doc", title: "Exceljet: Conditional formatting with formulas", url: "https://exceljet.net/articles/conditional-formatting-with-formulas" },
        ],
      },
      {
        id: "l2-7", title: "Data Validation & Drop-down", dur: 15,
        summary: "Mencegah data kotor sejak awal input.",
        content: `
<p>Data → Data Validation membatasi apa yang boleh diketik.</p>
<ul>
<li><b>List</b>: drop-down, sumber dari range <code>=$H$2:$H$6</code> atau teks <code>Jawa,Bali,Sumatra</code>.</li>
<li><b>Whole number / Decimal</b>: misalnya qty antara 1–1000.</li>
<li><b>Date</b>: hanya tanggal tahun ini.</li>
<li><b>Text length</b>: NIK harus 16 karakter.</li>
<li><b>Custom</b>: rumus bebas, misalnya tidak boleh duplikat <code>=COUNTIF($A:$A,A2)=1</code>.</li>
</ul>
<h4>Drop-down bertingkat (dependent)</h4>
<p>Pilih Provinsi → drop-down Kota berubah. Di Excel 365:</p>
<div class="formula">=FILTER(TabelKota[Kota],TabelKota[Provinsi]=A2)</div>
<p>Hasil FILTER ditaruh di kolom bantu, lalu list validasi mengacu ke <code>=$J$2#</code>.</p>
<div class="tip">💡 Isi tab <i>Input Message</i> dan <i>Error Alert</i> agar pengguna tahu aturan input.</div>`,
        practice: ["Buat drop-down Status: Baru, Proses, Selesai, Batal.", "Batasi kolom Qty hanya angka bulat 1–500.", "Cegah ID duplikat dengan validasi custom."],
        quiz: [
          { q: "Validasi untuk mencegah ID duplikat di kolom A?", o: ["=UNIQUE(A:A)", "=COUNTIF($A:$A,A2)=1", "=A2<>A1", "=ISDUP(A2)"], a: 1, why: "Nilai boleh masuk jika hanya muncul satu kali." },
        ],
        res: [
          { type: "yt", title: "Data validation drop down Excel", url: yt("data validation drop down list excel bertingkat") },
          { type: "doc", title: "Membuat drop-down list (Microsoft)", url: "https://support.microsoft.com/en-us/office/create-a-drop-down-list-7693307a-59ef-400a-b769-c5402dce407b" },
        ],
      },
    ],
  },

  /* =================== LEVEL 3 =================== */
  {
    id: 3, slug: "lanjut", title: "Excel Lanjutan", tag: "Lanjut", color: "#7c3aed",
    desc: "Lookup modern, Excel Table, PivotTable, grafik, dan data cleaning profesional.",
    lessons: [
      {
        id: "l3-1", title: "INDEX + MATCH", dur: 30,
        summary: "Kombinasi lookup fleksibel: ke kiri, dua arah, dan tahan sisipan kolom.",
        content: `
<p><code>MATCH</code> mencari <b>posisi</b>, <code>INDEX</code> mengambil <b>nilai</b> di posisi itu.</p>
<div class="formula">=INDEX(kolom_hasil, MATCH(nilai_dicari, kolom_kunci, 0))</div>
<div class="formula">=INDEX(Master!$A:$A, MATCH(E2, Master!$C:$C, 0))</div>
<p>Contoh di atas mencari ke <b>kiri</b>: kunci di kolom C, hasil di kolom A. Hal ini tidak bisa dilakukan VLOOKUP.</p>
<h4>Lookup dua arah (baris & kolom)</h4>
<table class="tbl sheet"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr>
<tr><th>1</th><td></td><td><b>Jan</b></td><td><b>Feb</b></td><td><b>Mar</b></td></tr>
<tr><th>2</th><td>Kopi</td><td>10</td><td>12</td><td>15</td></tr>
<tr><th>3</th><td>Teh</td><td>8</td><td>9</td><td>11</td></tr></table>
<div class="formula">=INDEX(B2:D3, MATCH("Teh",A2:A3,0), MATCH("Feb",B1:D1,0))</div>
<p>Hasil: 9.</p>
<h4>Lookup multi-kriteria</h4>
<div class="formula">=INDEX(C2:C100, MATCH(1, (A2:A100=G1)*(B2:B100=G2), 0))</div>
<p>Perkalian array bernilai 1 hanya ketika kedua syarat benar. (Di Excel lama, akhiri dengan Ctrl+Shift+Enter.)</p>`,
        practice: ["Ganti semua VLOOKUP dari pelajaran sebelumnya dengan INDEX-MATCH.", "Buat pencarian dua arah: pilih produk & bulan lewat drop-down.", "Cari harga berdasarkan Produk + Ukuran (2 kriteria)."],
        quiz: [
          { q: "Argumen ke-3 MATCH bernilai 0 berarti…", o: ["Approximate", "Exact match", "Cari dari bawah", "Wildcard"], a: 1, why: "0 = pencocokan persis." },
          { q: "Keunggulan INDEX-MATCH dibanding VLOOKUP?", o: ["Lebih pendek", "Bisa mencari ke kiri & tahan sisip kolom", "Otomatis menampilkan grafik", "Tidak perlu tabel"], a: 1, why: "Kolom hasil & kunci terpisah, jadi arah bebas dan tidak bergantung nomor kolom." },
        ],
        res: [
          { type: "yt", title: "INDEX MATCH Excel", url: yt("index match excel tutorial indonesia") },
          { type: "doc", title: "Exceljet: INDEX and MATCH", url: "https://exceljet.net/articles/index-and-match" },
        ],
      },
      {
        id: "l3-2", title: "XLOOKUP (Lookup Modern)", dur: 25,
        summary: "Pengganti VLOOKUP/INDEX-MATCH di Excel 365/2021.",
        content: `
<div class="formula">=XLOOKUP(dicari, kolom_cari, kolom_hasil, [jika_tidak_ada], [mode_cocok], [mode_cari])</div>
<div class="formula">=XLOOKUP(A2, Master[Kode], Master[Harga], "Tidak ada")</div>
<h4>Keunggulan</h4>
<ul>
<li>Default <b>exact match</b>, jadi tidak perlu FALSE.</li>
<li>Bisa ke kiri/kanan/atas/bawah.</li>
<li>Argumen <i>if_not_found</i> bawaan, tanpa IFERROR.</li>
<li>Mengembalikan <b>banyak kolom</b> sekaligus: <code>=XLOOKUP(A2,Master[Kode],Master[[Nama]:[Harga]])</code></li>
<li><b>Cari dari bawah</b> (transaksi terakhir): mode_cari = -1.</li>
</ul>
<div class="formula">=XLOOKUP(G2, Transaksi[Pelanggan], Transaksi[Tanggal], , 0, -1)</div>
<p>Mengambil tanggal transaksi <b>terakhir</b> seorang pelanggan.</p>
<h4>Multi-kriteria</h4>
<div class="formula">=XLOOKUP(1, (A:A=G1)*(B:B=G2), C:C)</div>
<div class="tip">💡 Pakai Google Sheets? XLOOKUP juga tersedia di sana.</div>`,
        practice: ["Ambil Nama, Kategori, Harga sekaligus dengan satu XLOOKUP.", "Cari transaksi terakhir tiap pelanggan.", "Bandingkan VLOOKUP, INDEX-MATCH, XLOOKUP untuk kasus yang sama."],
        quiz: [
          { q: "Default mode pencocokan XLOOKUP adalah…", o: ["Approximate", "Exact", "Wildcard", "Binary"], a: 1, why: "XLOOKUP default exact match (0)." },
          { q: "Untuk mencari dari data paling bawah, search_mode diisi…", o: ["1", "-1", "2", "0"], a: 1, why: "-1 = cari dari terakhir ke pertama." },
        ],
        res: [
          { type: "yt", title: "XLOOKUP Excel lengkap", url: yt("xlookup excel tutorial lengkap") },
          { type: "doc", title: "Exceljet: XLOOKUP", url: xj("xlookup") },
        ],
      },
      {
        id: "l3-3", title: "Excel Table & Named Range", dur: 20,
        summary: "Struktur data yang otomatis meluas dan rumus yang mudah dibaca.",
        content: `
<p>Blok data → <kbd>Ctrl</kbd>+<kbd>T</kbd>. Data Anda kini menjadi <b>Excel Table</b>.</p>
<h4>Kenapa wajib?</h4>
<ul>
<li>Otomatis meluas saat baris baru ditambah, sehingga rumus, Pivot, dan grafik ikut ter-update.</li>
<li><b>Structured reference</b>: <code>=SUM(Penjualan[Omzet])</code> jauh lebih jelas daripada <code>=SUM(D2:D5000)</code>.</li>
<li>Rumus di kolom baru langsung terisi ke seluruh baris.</li>
<li>Total Row bawaan (Table Design → Total Row).</li>
<li>Slicer untuk filter interaktif.</li>
</ul>
<div class="formula">=[@Harga]*[@Qty]</div>
<p><code>[@Kolom]</code> = nilai di baris yang sama.</p>
<h4>Named Range</h4>
<p>Formulas → Define Name. Misalnya sel E1 diberi nama <code>TarifPajak</code>, maka rumus menjadi <code>=B2*TarifPajak</code>.</p>
<div class="tip">💡 Beri nama tabel yang jelas (Table Design → Table Name): <code>tblPenjualan</code>, <code>tblProduk</code>.</div>`,
        practice: ["Ubah data penjualan menjadi Table bernama tblPenjualan.", "Tambah kolom Total dengan structured reference.", "Tambahkan Slicer untuk Wilayah."],
        quiz: [
          { q: "Shortcut membuat Excel Table?", o: ["Ctrl+T", "Ctrl+L", "Alt+T", "Ctrl+Shift+T"], a: 0, why: "Ctrl+T (atau Ctrl+L) membuat Table." },
          { q: "[@Qty] dalam rumus Table berarti…", o: ["Seluruh kolom Qty", "Qty di baris yang sama", "Header Qty", "Total Qty"], a: 1, why: "@ = this row." },
        ],
        res: [
          { type: "yt", title: "Excel Table structured reference", url: yt("excel table structured references tutorial") },
          { type: "doc", title: "Exceljet: Excel Tables", url: "https://exceljet.net/articles/excel-tables" },
        ],
      },
      {
        id: "l3-4", title: "PivotTable: Meringkas Ribuan Baris dalam Detik", dur: 40,
        summary: "Alat analisis paling penting di Excel.",
        content: `
<p>Insert → PivotTable (pastikan data berbentuk Table). Seret field ke 4 area:</p>
<table class="tbl"><tr><th>Area</th><th>Isi</th><th>Contoh</th></tr>
<tr><td>Rows</td><td>Kategori di baris</td><td>Wilayah</td></tr>
<tr><td>Columns</td><td>Kategori di kolom</td><td>Bulan</td></tr>
<tr><td>Values</td><td>Angka yang diringkas</td><td>Sum of Omzet</td></tr>
<tr><td>Filters</td><td>Filter global</td><td>Tahun</td></tr></table>
<h4>Teknik penting</h4>
<ul>
<li><b>Summarize Values By</b>: Sum, Count, Average, Max, Distinct Count (perlu Data Model).</li>
<li><b>Show Values As</b>: % of Grand Total, % of Column, Running Total, Difference From (growth MoM).</li>
<li><b>Group</b> tanggal menjadi Bulan/Kuartal/Tahun; group angka menjadi rentang umur.</li>
<li><b>Calculated Field</b>: Profit = Omzet − Biaya.</li>
<li><b>Slicer & Timeline</b> untuk filter interaktif.</li>
<li><b>Refresh</b> (Alt+F5) setelah data berubah.</li>
</ul>
<h4>Pertanyaan bisnis yang bisa dijawab</h4>
<ol><li>Wilayah mana dengan omzet terbesar?</li><li>Produk apa yang tumbuh paling cepat bulan ini?</li><li>Berapa kontribusi % tiap kategori?</li><li>Hari apa transaksi paling ramai?</li></ol>
<div class="formula">=GETPIVOTDATA("Omzet",$A$3,"Wilayah","Jawa")</div>
<p>Mengambil angka dari Pivot ke sel lain (berguna untuk dashboard).</p>`,
        practice: ["Unduh dataset Superstore (Kaggle) lalu buat Pivot omzet per Region × Category.", "Tampilkan % kontribusi tiap kategori.", "Group tanggal per bulan dan hitung growth MoM dengan 'Difference From'.", "Tambah Slicer Segment & Timeline Order Date."],
        quiz: [
          { q: "Untuk melihat kontribusi persen tiap kategori gunakan…", o: ["Summarize by Average", "Show Values As % of Grand Total", "Calculated Item", "Group"], a: 1, why: "Show Values As → % of Grand Total." },
          { q: "Setelah data sumber berubah, Pivot perlu…", o: ["Dibuat ulang", "Di-Refresh", "Disimpan ulang", "Otomatis tanpa apa pun"], a: 1, why: "Pivot memakai cache; perlu Refresh (Alt+F5)." },
        ],
        res: [
          { type: "yt", title: "PivotTable Excel lengkap", url: yt("pivot table excel lengkap pemula sampai mahir") },
          { type: "doc", title: "Exceljet: Pivot tables", url: "https://exceljet.net/articles/excel-pivot-tables" },
          { type: "course", title: "Dataset latihan: Superstore (Kaggle)", url: "https://www.kaggle.com/search?q=superstore" },
        ],
      },
      {
        id: "l3-5", title: "Visualisasi: Memilih Grafik yang Tepat", dur: 30,
        summary: "Bar, line, combo, scatter, dan prinsip storytelling with data.",
        content: `
<table class="tbl"><tr><th>Tujuan</th><th>Grafik</th></tr>
<tr><td>Membandingkan kategori</td><td>Bar / Column (urutkan!)</td></tr>
<tr><td>Tren waktu</td><td>Line</td></tr>
<tr><td>Komposisi (≤5 bagian)</td><td>Stacked bar / Donut</td></tr>
<tr><td>Hubungan 2 variabel</td><td>Scatter</td></tr>
<tr><td>Distribusi</td><td>Histogram / Box plot</td></tr>
<tr><td>Nilai + persen berbeda skala</td><td>Combo (kolom + garis di sumbu sekunder)</td></tr>
<tr><td>Kontribusi naik-turun</td><td>Waterfall</td></tr></table>
<h4>Prinsip desain</h4>
<ol>
<li><b>Judul = kesimpulan</b>. Contoh: “Penjualan Jawa naik 23% di Q3”, bukan “Grafik Penjualan”.</li>
<li>Hapus gridline, border, dan efek 3D yang tidak perlu.</li>
<li>Satu warna aksen untuk data yang ingin ditekankan, sisanya abu-abu.</li>
<li>Label data langsung di batang daripada legend jauh.</li>
<li>Sumbu bar chart selalu mulai dari 0.</li>
</ol>
<h4>Sparklines</h4>
<p>Insert → Sparklines: grafik mini di dalam sel untuk menunjukkan tren per baris.</p>
<div class="tip">💡 Buku rekomendasi: <i>Storytelling with Data</i> karya Cole Nussbaumer Knaflic.</div>`,
        practice: ["Buat line chart omzet bulanan dengan judul berupa insight.", "Buat combo chart: Omzet (kolom) + Margin % (garis, sumbu sekunder).", "Rapikan satu grafik default Excel menjadi versi minimalis."],
        quiz: [
          { q: "Grafik terbaik untuk tren penjualan 12 bulan?", o: ["Pie", "Line", "Scatter", "Radar"], a: 1, why: "Line chart menunjukkan perubahan berurutan sepanjang waktu." },
          { q: "Judul grafik yang baik adalah…", o: ["Nama sheet", "Deskripsi data saja", "Insight/kesimpulan utama", "Kosong"], a: 2, why: "Judul berbentuk insight langsung menyampaikan pesan." },
        ],
        res: [
          { type: "yt", title: "Membuat grafik Excel profesional", url: yt("excel chart professional design tutorial") },
          { type: "yt", title: "Storytelling with Data (talk)", url: yt("storytelling with data cole nussbaumer knaflic") },
        ],
      },
      {
        id: "l3-6", title: "Data Cleaning End-to-End", dur: 35,
        summary: "Checklist membersihkan data mentah sebelum dianalisis.",
        content: `
<p>Sekitar 60–80% waktu data analyst dipakai untuk <b>menyiapkan data</b>. Ikuti checklist ini:</p>
<ol>
<li><b>Backup</b> data mentah, lalu kerjakan di salinan.</li>
<li><b>Hapus duplikat</b>: Data → Remove Duplicates (tentukan kolom kunci).</li>
<li><b>Spasi & kapitalisasi</b>: <code>=PROPER(TRIM(A2))</code>; karakter aneh: <code>=CLEAN(A2)</code>.</li>
<li><b>Tipe data</b>: angka-teks → VALUE / Text to Columns; tanggal teks → DATEVALUE.</li>
<li><b>Nilai kosong</b>: Go To Special (F5 → Special → Blanks). Putuskan: isi, hapus, atau tandai.</li>
<li><b>Standarisasi kategori</b>: "Jkt", "JAKARTA", "Jakarta " → "Jakarta" (Find & Replace atau tabel mapping + XLOOKUP).</li>
<li><b>Outlier</b>: cek MIN/MAX, sort, atau conditional formatting. Nilai qty −5 atau umur 250 pasti salah.</li>
<li><b>Pisah/gabung kolom</b>: Text to Columns, TEXTSPLIT, Flash Fill.</li>
<li><b>Validasi akhir</b>: total baris, total omzet dibandingkan sumber.</li>
<li><b>Dokumentasikan</b> setiap langkah (sheet <i>Catatan</i>).</li>
</ol>
<h4>Trik: isi sel kosong dengan nilai di atasnya</h4>
<p>Blok kolom → F5 → Special → Blanks → ketik <code>=</code> lalu tekan panah atas → <kbd>Ctrl</kbd>+<kbd>Enter</kbd>. Setelah itu Copy → Paste Values.</p>
<div class="tip">💡 Jika langkah cleaning berulang setiap minggu, otomatiskan dengan <b>Power Query</b> (Level 4).</div>`,
        practice: ["Ambil dataset 'dirty data' dari Kaggle lalu bersihkan mengikuti 10 langkah di atas.", "Buat tabel mapping untuk menyeragamkan nama kota.", "Tulis log cleaning: apa yang diubah, berapa baris terdampak."],
        quiz: [
          { q: "Cara cepat memilih semua sel kosong dalam range?", o: ["Ctrl+A", "F5 → Special → Blanks", "Ctrl+Shift+B", "Filter → Blank (tidak bisa)"], a: 1, why: "Go To Special → Blanks memilih semua sel kosong." },
          { q: "Langkah pertama sebelum cleaning?", o: ["Hapus duplikat", "Backup data mentah", "Buat Pivot", "Buat grafik"], a: 1, why: "Selalu simpan data asli agar bisa kembali jika terjadi kesalahan." },
        ],
        res: [
          { type: "yt", title: "Data cleaning Excel", url: yt("data cleaning in excel step by step") },
          { type: "course", title: "Google DA Course 4: Process Data from Dirty to Clean", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
          { type: "course", title: "Dataset kotor untuk latihan (Kaggle)", url: "https://www.kaggle.com/search?q=dirty+data" },
        ],
      },
    ],
  },

  /* =================== LEVEL 4 =================== */
  {
    id: 4, slug: "mahir", title: "Excel Mahir", tag: "Mahir", color: "#db2777",
    desc: "Dynamic array, LET/LAMBDA, Power Query, Power Pivot & DAX, skenario, dan dashboard.",
    lessons: [
      {
        id: "l4-1", title: "Dynamic Array: FILTER, SORT, UNIQUE, SEQUENCE", dur: 35,
        summary: "Satu rumus menghasilkan banyak sel (spill).",
        content: `
<p>Di Excel 365, rumus dapat <b>tumpah (spill)</b> ke banyak sel. Referensikan hasilnya dengan <code>#</code>, misalnya <code>=COUNTA(F2#)</code>.</p>
<table class="tbl"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>UNIQUE</code></td><td><code>=UNIQUE(tbl[Wilayah])</code></td><td>Daftar wilayah unik</td></tr>
<tr><td><code>SORT</code></td><td><code>=SORT(A2:C100,3,-1)</code></td><td>Urut kolom 3 menurun</td></tr>
<tr><td><code>SORTBY</code></td><td><code>=SORTBY(tbl[Produk],tbl[Omzet],-1)</code></td><td>Produk urut omzet</td></tr>
<tr><td><code>FILTER</code></td><td><code>=FILTER(tbl,tbl[Wilayah]="Jawa","Kosong")</code></td><td>Baris wilayah Jawa</td></tr>
<tr><td><code>SEQUENCE</code></td><td><code>=SEQUENCE(12)</code></td><td>1 sampai 12</td></tr>
<tr><td><code>TAKE</code>/<code>DROP</code></td><td><code>=TAKE(SORT(...),5)</code></td><td>5 teratas</td></tr>
<tr><td><code>VSTACK</code>/<code>HSTACK</code></td><td><code>=VSTACK(Jan!A2:C50,Feb!A2:C50)</code></td><td>Gabung tabel</td></tr>
<tr><td><code>GROUPBY</code>*</td><td><code>=GROUPBY(tbl[Wilayah],tbl[Omzet],SUM)</code></td><td>Ringkasan seperti Pivot</td></tr></table>
<p class="muted">* GROUPBY & PIVOTBY tersedia di Excel 365 versi terbaru.</p>
<h4>Contoh: Top 5 produk Jawa</h4>
<div class="formula">=TAKE(SORT(FILTER(tbl[[Produk]:[Omzet]],tbl[Wilayah]="Jawa"),2,-1),5)</div>
<h4>FILTER multi-kriteria</h4>
<div class="formula">=FILTER(tbl,(tbl[Wilayah]="Jawa")*(tbl[Omzet]>1000000))</div>
<p>Gunakan <code>*</code> untuk AND dan <code>+</code> untuk OR.</p>
<div class="warn">⚠️ Error #SPILL! artinya area tujuan tidak kosong. Kosongkan sel di bawah/kanannya.</div>`,
        practice: ["Buat daftar wilayah unik + total omzet di sebelahnya (UNIQUE + SUMIFS dengan #).", "Buat laporan Top 10 pelanggan yang otomatis berubah.", "Buat filter interaktif: pilih wilayah di drop-down, tabel hasil FILTER berubah."],
        quiz: [
          { q: "Error #SPILL! biasanya karena…", o: ["Rumus salah", "Area hasil terhalang data lain", "Data terlalu besar", "Versi Excel lama"], a: 1, why: "Hasil dynamic array butuh ruang kosong." },
          { q: "Dalam FILTER, kondisi OR ditulis dengan…", o: ["*", "+", "&", "OR()"], a: 1, why: "Penjumlahan array: bernilai benar jika salah satu kondisi benar." },
        ],
        res: [
          { type: "yt", title: "Dynamic array Excel FILTER SORT UNIQUE", url: yt("excel dynamic arrays filter sort unique tutorial") },
          { type: "doc", title: "Exceljet: FILTER", url: xj("filter") },
          { type: "doc", title: "Exceljet: Dynamic array formulas", url: "https://exceljet.net/articles/dynamic-array-formulas-in-excel" },
        ],
      },
      {
        id: "l4-2", title: "LET & LAMBDA: Rumus Seperti Programmer", dur: 30,
        summary: "Variabel dalam rumus dan membuat fungsi buatan sendiri.",
        content: `
<h4>LET: beri nama pada bagian rumus</h4>
<div class="formula">=LET(omzet, SUM(tbl[Omzet]), biaya, SUM(tbl[Biaya]), (omzet-biaya)/omzet)</div>
<p>Lebih mudah dibaca dan lebih cepat karena setiap bagian dihitung sekali.</p>
<h4>LAMBDA: fungsi kustom</h4>
<p>Formulas → Name Manager → New. Nama: <code>MARGIN</code>, Refers to:</p>
<div class="formula">=LAMBDA(pendapatan, biaya, IFERROR((pendapatan-biaya)/pendapatan, 0))</div>
<p>Kini di sheet mana pun cukup tulis <code>=MARGIN(B2,C2)</code>.</p>
<h4>Fungsi helper LAMBDA</h4>
<ul>
<li><code>MAP</code>: terapkan ke setiap elemen.</li>
<li><code>BYROW</code> / <code>BYCOL</code>: hitung per baris/kolom → <code>=BYROW(B2:M20,LAMBDA(r,SUM(r)))</code></li>
<li><code>SCAN</code>: running total → <code>=SCAN(0,B2:B13,LAMBDA(a,x,a+x))</code></li>
<li><code>REDUCE</code>: akumulasi menjadi satu nilai.</li>
</ul>
<div class="tip">💡 Mulai dengan LET dulu. Begitu ada rumus panjang yang dipakai berulang, jadikan LAMBDA.</div>`,
        practice: ["Tulis ulang satu rumus panjang Anda dengan LET.", "Buat LAMBDA bernama GROWTH(baru, lama).", "Buat running total omzet bulanan dengan SCAN."],
        quiz: [
          { q: "Tempat mendaftarkan LAMBDA agar bisa dipakai seperti fungsi biasa?", o: ["Data Validation", "Name Manager", "Power Query", "Macro"], a: 1, why: "LAMBDA disimpan sebagai Named formula di Name Manager." },
        ],
        res: [
          { type: "yt", title: "LET LAMBDA Excel", url: yt("excel let lambda function tutorial") },
          { type: "doc", title: "Exceljet: LET", url: xj("let") },
          { type: "doc", title: "Exceljet: LAMBDA", url: xj("lambda") },
        ],
      },
      {
        id: "l4-3", title: "Power Query: Otomatisasi Cleaning & ETL", dur: 45,
        summary: "Impor, bersihkan, gabung data sekali klik Refresh.",
        content: `
<p>Data → Get Data. Power Query <b>merekam setiap langkah</b>. Bulan depan cukup klik <b>Refresh</b>, dan semua langkah terulang otomatis.</p>
<h4>Sumber data</h4>
<p>Excel, CSV, folder (gabung puluhan file sekaligus), web, database SQL, SharePoint.</p>
<h4>Transformasi utama</h4>
<ul>
<li>Remove Columns / Rows, Remove Duplicates, Filter.</li>
<li>Change Type (penting!), Trim, Clean, Capitalize.</li>
<li>Split Column by Delimiter.</li>
<li><b>Unpivot Columns</b>: ubah tabel lebar (Jan, Feb, Mar…) menjadi panjang (Bulan, Nilai). Ini fitur andalan.</li>
<li>Fill Down, Replace Values.</li>
<li>Group By (agregasi).</li>
<li>Add Column → Conditional Column / Custom Column (bahasa M).</li>
</ul>
<h4>Menggabungkan data</h4>
<table class="tbl"><tr><th>Fitur</th><th>Fungsi</th><th>Analog SQL</th></tr>
<tr><td>Append</td><td>Tumpuk tabel (baris)</td><td>UNION</td></tr>
<tr><td>Merge</td><td>Gabung berdasarkan kunci (kolom)</td><td>JOIN</td></tr></table>
<h4>Contoh bahasa M</h4>
<div class="formula">= Table.AddColumn(Source, "Kategori Omzet", each if [Omzet] > 1000000 then "Besar" else "Kecil")</div>
<div class="tip">💡 Proyek klasik: gabungkan 12 file CSV penjualan bulanan dalam satu folder memakai <i>Get Data → From Folder</i>.</div>`,
        practice: ["Impor CSV, ubah tipe data, trim, dan hapus duplikat di Power Query.", "Unpivot tabel penjualan bulanan berformat lebar.", "Merge tabel transaksi dengan master produk (Left Outer Join).", "Gabungkan beberapa file dari satu folder."],
        quiz: [
          { q: "Mengubah kolom Jan–Des menjadi 2 kolom (Bulan, Nilai) disebut…", o: ["Pivot", "Unpivot", "Transpose", "Append"], a: 1, why: "Unpivot mengubah format lebar menjadi panjang." },
          { q: "Merge di Power Query setara dengan … di SQL", o: ["UNION", "JOIN", "GROUP BY", "WHERE"], a: 1, why: "Merge menggabungkan tabel berdasarkan kolom kunci." },
        ],
        res: [
          { type: "yt", title: "Power Query Excel dari nol", url: yt("power query excel tutorial lengkap indonesia") },
          { type: "doc", title: "Power Query documentation (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/power-query/" },
        ],
      },
      {
        id: "l4-4", title: "Power Pivot, Data Model & DAX Dasar", dur: 40,
        summary: "Relasi antar tabel dan measure untuk jutaan baris.",
        content: `
<p>Data Model memungkinkan banyak tabel terhubung seperti database, tanpa VLOOKUP.</p>
<h4>Star schema</h4>
<ul>
<li><b>Fact table</b>: transaksi (Tanggal, KodeProduk, IDPelanggan, Qty, Omzet).</li>
<li><b>Dimension table</b>: Produk, Pelanggan, Kalender.</li>
<li>Relasi one-to-many: Dim[Kode] (1) → Fact[Kode] (*).</li>
</ul>
<h4>Measure DAX</h4>
<div class="formula">Total Omzet := SUM(Fact[Omzet])</div>
<div class="formula">Jumlah Pelanggan := DISTINCTCOUNT(Fact[IDPelanggan])</div>
<div class="formula">Omzet Jawa := CALCULATE([Total Omzet], Dim_Wilayah[Wilayah] = "Jawa")</div>
<div class="formula">Omzet YTD := TOTALYTD([Total Omzet], Kalender[Tanggal])</div>
<div class="formula">Growth % := DIVIDE([Total Omzet] - [Omzet Bln Lalu], [Omzet Bln Lalu])</div>
<h4>Konsep kunci</h4>
<ul><li><b>Measure</b> dihitung sesuai konteks filter (baris/kolom/slicer Pivot).</li>
<li><b>Calculated column</b> dihitung per baris dan disimpan.</li>
<li><code>CALCULATE</code> = fungsi terpenting DAX: mengubah konteks filter.</li></ul>
<div class="tip">💡 DAX yang Anda pelajari di sini sama persis dengan yang dipakai di <b>Power BI</b>.</div>`,
        practice: ["Buat 3 tabel (Fact, Produk, Kalender) dan hubungkan di Diagram View.", "Buat measure Total Omzet, Distinct Pelanggan, Rata-rata per Transaksi.", "Buat Pivot dari Data Model memakai measure tersebut."],
        quiz: [
          { q: "Fungsi DAX untuk mengubah konteks filter?", o: ["FILTER", "CALCULATE", "SUMX", "RELATED"], a: 1, why: "CALCULATE mengevaluasi ekspresi dalam konteks filter yang dimodifikasi." },
          { q: "Tabel transaksi dalam star schema disebut…", o: ["Dimension", "Fact", "Lookup", "Bridge"], a: 1, why: "Fact table menyimpan kejadian/transaksi bernilai angka." },
        ],
        res: [
          { type: "yt", title: "Power Pivot DAX Excel", url: yt("power pivot dax excel tutorial beginner") },
          { type: "doc", title: "DAX reference (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/dax/" },
        ],
      },
      {
        id: "l4-5", title: "What-If Analysis & Statistik di Excel", dur: 30,
        summary: "Goal Seek, Scenario Manager, Data Table, Solver, Analysis ToolPak.",
        content: `
<h4>Goal Seek</h4>
<p>Data → What-If → Goal Seek. Misalnya: “Berapa unit yang harus terjual agar profit = 50 juta?”</p>
<h4>Data Table (sensitivitas)</h4>
<p>Lihat profit pada kombinasi harga × volume dalam satu tabel.</p>
<h4>Scenario Manager</h4>
<p>Simpan skenario Optimis / Normal / Pesimis lalu buat ringkasan.</p>
<h4>Solver (add-in)</h4>
<p>Optimasi dengan batasan, misalnya alokasi budget iklan untuk memaksimalkan penjualan.</p>
<h4>Fungsi statistik penting</h4>
<table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
<tr><td><code>MEDIAN</code>, <code>MODE.SNGL</code></td><td>Nilai tengah, nilai paling sering</td></tr>
<tr><td><code>STDEV.S</code>, <code>VAR.S</code></td><td>Sebaran data (sampel)</td></tr>
<tr><td><code>PERCENTILE.INC</code>, <code>QUARTILE.INC</code></td><td>Persentil, kuartil (deteksi outlier IQR)</td></tr>
<tr><td><code>CORREL</code></td><td>Korelasi dua variabel</td></tr>
<tr><td><code>FORECAST.LINEAR</code>, <code>TREND</code></td><td>Prediksi linear</td></tr>
<tr><td><code>RANK.EQ</code></td><td>Peringkat</td></tr></table>
<p>Aktifkan <b>Analysis ToolPak</b> (File → Options → Add-ins) untuk statistik deskriptif, histogram, regresi, dan t-test sekali klik.</p>
<p>Fitur <b>Forecast Sheet</b> (Data → Forecast Sheet) membuat peramalan time series otomatis.</p>`,
        practice: ["Gunakan Goal Seek untuk mencari harga jual agar margin 30%.", "Buat Data Table 2 variabel: harga × diskon → profit.", "Jalankan Descriptive Statistics di Analysis ToolPak.", "Hitung korelasi biaya iklan vs penjualan."],
        quiz: [
          { q: "Tool untuk mencari input agar hasil rumus mencapai target tertentu?", o: ["Solver", "Goal Seek", "Data Table", "Forecast"], a: 1, why: "Goal Seek mengubah satu input sampai output mencapai target." },
          { q: "CORREL bernilai -0,9 berarti…", o: ["Tidak ada hubungan", "Hubungan positif kuat", "Hubungan negatif kuat", "Error"], a: 2, why: "Mendekati -1 = hubungan negatif kuat." },
        ],
        res: [
          { type: "yt", title: "What-if analysis Excel goal seek data table", url: yt("what if analysis excel goal seek data table scenario") },
          { type: "doc", title: "Analysis ToolPak (Microsoft)", url: "https://support.microsoft.com/en-us/office/load-the-analysis-toolpak-in-excel-105b4bd8-b5c4-4e8b-a2a6-29f7e2e8f88b" },
        ],
      },
      {
        id: "l4-6", title: "Membangun Dashboard Interaktif", dur: 60,
        summary: "Dari data mentah menjadi dashboard satu halaman yang siap dipresentasikan.",
        content: `
<h4>Arsitektur 3 sheet</h4>
<ol><li><b>Data</b>: Table bersih (idealnya dari Power Query).</li><li><b>Calc</b>: PivotTable / rumus ringkasan.</li><li><b>Dashboard</b>: KPI, grafik, slicer. Tanpa data mentah.</li></ol>
<h4>Layout (pola F/Z)</h4>
<ul>
<li>Baris atas: <b>KPI card</b> (Total Omzet, Jumlah Order, AOV, Growth %).</li>
<li>Tengah: tren waktu (line) + perbandingan kategori (bar terurut).</li>
<li>Kiri/atas: <b>Slicer & Timeline</b> yang terhubung ke semua Pivot (Report Connections).</li>
<li>Bawah: tabel detail / Top 10.</li>
</ul>
<h4>Trik KPI card</h4>
<div class="formula">=TEXT(GETPIVOTDATA("Omzet",Calc!$A$3)/1000000,"#,##0.0")&" jt"</div>
<p>Masukkan ke Shape (klik shape → formula bar → <code>=Calc!B2</code>) agar angka tampil di dalam kartu.</p>
<h4>Checklist kualitas</h4>
<ul><li>Gridlines dimatikan (View → Gridlines).</li><li>Palet 2–3 warna konsisten.</li><li>Setiap grafik menjawab satu pertanyaan bisnis.</li><li>Uji: klik slicer, apakah semua ikut berubah?</li><li>Lindungi sheet (Review → Protect Sheet) sebelum dibagikan.</li></ul>`,
        practice: ["Bangun dashboard penjualan dari dataset Superstore: 4 KPI, 3 grafik, 2 slicer.", "Hubungkan satu slicer ke semua PivotTable.", "Presentasikan 3 insight utama dalam 2 menit (rekam diri sendiri)."],
        quiz: [
          { q: "Agar satu slicer mengontrol banyak Pivot, gunakan…", o: ["Group", "Report Connections", "Refresh All", "Calculated Field"], a: 1, why: "Slicer → Report Connections → centang semua Pivot." },
        ],
        res: [
          { type: "yt", title: "Excel interactive dashboard from scratch", url: yt("excel interactive dashboard from scratch") },
          { type: "yt", title: "Dashboard Excel bahasa Indonesia", url: yt("membuat dashboard excel interaktif") },
        ],
      },
      {
        id: "l4-7", title: "Otomatisasi: Macro, VBA & Office Scripts (Pengenalan)", dur: 30,
        summary: "Rekam pekerjaan berulang dan jalankan sekali klik.",
        content: `
<p>Aktifkan tab <b>Developer</b> (File → Options → Customize Ribbon). Simpan file sebagai <b>.xlsm</b>.</p>
<h4>Record Macro</h4>
<p>Developer → Record Macro → lakukan langkah (format laporan, filter, dll.) → Stop. Jalankan kembali dengan shortcut atau tombol.</p>
<h4>Contoh VBA sederhana</h4>
<div class="formula">Sub RapikanLaporan()
    Range("A1").CurrentRegion.Columns.AutoFit
    Rows(1).Font.Bold = True
    ActiveSheet.ListObjects(1).Range.AutoFilter
    MsgBox "Laporan rapi!"
End Sub</div>
<h4>Office Scripts (Excel Web)</h4>
<p>Tab Automate di Excel Online memakai TypeScript dan bisa dijadwalkan lewat Power Automate.</p>
<div class="tip">💡 Untuk data analyst modern, prioritaskan <b>Power Query</b> (cleaning) dan <b>Python</b> (otomasi berat) dibanding VBA. VBA tetap berguna untuk tugas format & laporan rutin.</div>`,
        practice: ["Rekam macro yang memformat laporan harian Anda.", "Buat tombol (Insert → Shape → Assign Macro).", "Buka editor VBA (Alt+F11) dan baca kode hasil rekaman."],
        quiz: [
          { q: "Ekstensi file untuk menyimpan workbook berisi macro?", o: [".xlsx", ".xlsm", ".csv", ".xlsb saja"], a: 1, why: ".xlsx tidak bisa menyimpan macro; gunakan .xlsm." },
        ],
        res: [
          { type: "yt", title: "Macro VBA Excel pemula", url: yt("macro vba excel pemula indonesia") },
          { type: "doc", title: "Office Scripts (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/office/dev/scripts/overview/excel" },
        ],
      },
    ],
  },

  /* =================== LEVEL 5 =================== */
  {
    id: 5, slug: "ekosistem", title: "Ekosistem Data Analyst", tag: "Karier", color: "#ea580c",
    desc: "Statistik, SQL, Power BI, Python, dan portofolio untuk siap kerja.",
    lessons: [
      {
        id: "l5-1", title: "Proses Analisis Data (Ask → Act)", dur: 20,
        summary: "Kerangka kerja 6 tahap dari Google Data Analytics.",
        content: `
<p>Kerangka 6 tahap yang dipakai di Google Data Analytics Certificate:</p>
<ol>
<li><b>Ask</b>: definisikan masalah bisnis. Gunakan pertanyaan SMART (Specific, Measurable, Action-oriented, Relevant, Time-bound).</li>
<li><b>Prepare</b>: kumpulkan data; nilai kredibilitasnya.</li>
<li><b>Process</b>: bersihkan & validasi data.</li>
<li><b>Analyze</b>: temukan pola, tren, hubungan.</li>
<li><b>Share</b>: visualisasi & storytelling.</li>
<li><b>Act</b>: rekomendasi yang bisa dieksekusi.</li>
</ol>
<h4>Contoh</h4>
<p><b>Masalah:</b> Penjualan online turun. <b>Pertanyaan SMART:</b> “Kategori & wilayah mana yang omzetnya turun lebih dari 10% di Q3 dibanding Q2, dan apa faktor penyebabnya?”</p>
<h4>Jenis analisis</h4>
<table class="tbl"><tr><th>Jenis</th><th>Pertanyaan</th></tr>
<tr><td>Deskriptif</td><td>Apa yang terjadi?</td></tr><tr><td>Diagnostik</td><td>Mengapa terjadi?</td></tr>
<tr><td>Prediktif</td><td>Apa yang akan terjadi?</td></tr><tr><td>Preskriptif</td><td>Apa yang harus dilakukan?</td></tr></table>`,
        practice: ["Ubah 3 pertanyaan bisnis yang samar menjadi pertanyaan SMART.", "Petakan proyek dashboard Level 4 ke 6 tahap di atas."],
        quiz: [
          { q: "Tahap membersihkan & memvalidasi data disebut…", o: ["Prepare", "Process", "Analyze", "Share"], a: 1, why: "Process = cleaning & transformasi." },
        ],
        res: [
          { type: "course", title: "Google Data Analytics Certificate (Coursera)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
          { type: "yt", title: "Google Career Certificates — Data Analytics", url: yt("google career certificates data analytics full course") },
        ],
      },
      {
        id: "l5-2", title: "Statistik Dasar untuk Data Analyst", dur: 40,
        summary: "Central tendency, sebaran, distribusi, sampling, korelasi vs kausalitas.",
        content: `
<h4>Ukuran pemusatan</h4>
<ul><li><b>Mean</b> (rata-rata): sensitif terhadap outlier.</li><li><b>Median</b>: nilai tengah, lebih tahan outlier (cocok untuk gaji, harga rumah).</li><li><b>Modus</b>: nilai paling sering.</li></ul>
<h4>Ukuran sebaran</h4>
<ul><li><b>Range</b> = max − min.</li><li><b>Standar deviasi</b>: rata-rata jarak dari mean.</li><li><b>IQR</b> = Q3 − Q1. Outlier jika &lt; Q1 − 1,5×IQR atau &gt; Q3 + 1,5×IQR.</li></ul>
<h4>Distribusi normal</h4>
<p>Aturan 68–95–99,7: ±1, ±2, ±3 standar deviasi dari mean.</p>
<h4>Sampling & bias</h4>
<p>Sampel harus mewakili populasi. Waspadai <i>selection bias</i> dan <i>survivorship bias</i>.</p>
<h4>Korelasi ≠ kausalitas</h4>
<p>Penjualan es krim berkorelasi dengan kasus tenggelam, tetapi penyebab keduanya adalah cuaca panas (variabel perancu).</p>
<h4>A/B testing (konsep)</h4>
<p>Bandingkan dua versi (A vs B) dan uji apakah perbedaannya signifikan secara statistik (p-value &lt; 0,05).</p>`,
        practice: ["Hitung mean, median, stdev, Q1, Q3, IQR dari data gaji, lalu deteksi outlier.", "Buat histogram distribusi nilai transaksi.", "Cari 1 contoh berita yang salah menyimpulkan korelasi sebagai sebab-akibat."],
        quiz: [
          { q: "Untuk data gaji yang memiliki beberapa nilai sangat tinggi, ukuran pusat terbaik…", o: ["Mean", "Median", "Max", "Range"], a: 1, why: "Median tidak terpengaruh outlier ekstrem." },
          { q: "Batas atas outlier metode IQR adalah…", o: ["Q3 + IQR", "Q3 + 1,5×IQR", "Mean + 1 SD", "Q2 × 2"], a: 1, why: "Rumus Tukey: Q3 + 1,5×IQR." },
        ],
        res: [
          { type: "course", title: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
          { type: "yt", title: "StatQuest — statistik dijelaskan sederhana", url: yt("statquest statistics fundamentals") },
        ],
      },
      {
        id: "l5-3", title: "SQL Dasar: SELECT sampai JOIN", dur: 50,
        summary: "Bahasa wajib untuk mengambil data dari database.",
        content: `
<p>Hampir semua lowongan data analyst meminta SQL. Kabar baiknya: logika Excel Anda langsung terpakai.</p>
<table class="tbl"><tr><th>Excel</th><th>SQL</th></tr>
<tr><td>Filter</td><td><code>WHERE</code></td></tr><tr><td>Sort</td><td><code>ORDER BY</code></td></tr>
<tr><td>PivotTable / SUMIFS</td><td><code>GROUP BY</code> + <code>SUM()</code></td></tr>
<tr><td>VLOOKUP / Merge</td><td><code>JOIN</code></td></tr><tr><td>Remove Duplicates</td><td><code>DISTINCT</code></td></tr>
<tr><td>IF</td><td><code>CASE WHEN</code></td></tr></table>
<div class="formula">SELECT wilayah,
       COUNT(*)        AS jumlah_order,
       SUM(omzet)      AS total_omzet,
       AVG(omzet)      AS rata_omzet
FROM   penjualan
WHERE  tanggal >= '2026-01-01'
GROUP  BY wilayah
HAVING SUM(omzet) > 100000000
ORDER  BY total_omzet DESC
LIMIT  10;</div>
<h4>JOIN</h4>
<div class="formula">SELECT p.tanggal, pr.nama_produk, p.qty
FROM   penjualan p
LEFT JOIN produk pr ON p.kode_produk = pr.kode;</div>
<p><b>INNER JOIN</b> = hanya yang cocok di kedua tabel; <b>LEFT JOIN</b> = semua baris kiri + yang cocok di kanan.</p>
<h4>Urutan eksekusi</h4>
<p>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</p>
<div class="tip">💡 Berikutnya: subquery, CTE (<code>WITH</code>), dan window function (<code>ROW_NUMBER</code>, <code>LAG</code>, <code>SUM() OVER</code>).</div>`,
        practice: ["Selesaikan kursus Intro to SQL di Kaggle (gratis, di browser).", "Kerjakan 20 soal SQL di SQLBolt atau W3Schools.", "Tulis query: 5 pelanggan dengan total belanja tertinggi tahun ini."],
        quiz: [
          { q: "Untuk memfilter hasil agregasi (misal SUM > 100) gunakan…", o: ["WHERE", "HAVING", "ORDER BY", "FILTER"], a: 1, why: "WHERE dijalankan sebelum GROUP BY; HAVING memfilter setelah agregasi." },
          { q: "JOIN yang mempertahankan semua baris tabel kiri?", o: ["INNER", "LEFT", "RIGHT", "CROSS"], a: 1, why: "LEFT JOIN mempertahankan semua baris tabel kiri." },
        ],
        res: [
          { type: "course", title: "Kaggle Learn — Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql" },
          { type: "course", title: "SQLBolt — latihan interaktif", url: "https://sqlbolt.com/" },
          { type: "doc", title: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { type: "yt", title: "SQL untuk data analyst", url: yt("sql for data analysts full course") },
        ],
      },
      {
        id: "l5-4", title: "Power BI: Dari Excel ke BI Tool", dur: 45,
        summary: "Power Query + Data Model + DAX + visual interaktif yang bisa dibagikan.",
        content: `
<p>Kabar baik: jika Anda sudah menguasai <b>Power Query</b> dan <b>DAX</b> di Level 4, Anda sudah menguasai sekitar 70% Power BI.</p>
<h4>Alur kerja Power BI Desktop</h4>
<ol><li><b>Get Data</b> → Power Query Editor (sama seperti di Excel).</li><li><b>Model view</b>: buat relasi star schema.</li><li><b>Measures</b> dengan DAX.</li><li><b>Report view</b>: seret visual, slicer, drill-down.</li><li><b>Publish</b> ke Power BI Service untuk berbagi & refresh terjadwal.</li></ol>
<h4>Fitur yang membedakan dari Excel</h4>
<ul><li>Cross-filtering otomatis antar visual.</li><li>Drill-through ke halaman detail.</li><li>Tooltip halaman kustom.</li><li>Row-Level Security.</li><li>Kapasitas data jauh lebih besar.</li></ul>
<h4>Alternatif</h4>
<p><b>Tableau</b> (dipakai di Google DA Certificate; Tableau Public gratis) dan <b>Looker Studio</b> (gratis, cocok untuk data Google Sheets/GA4).</p>`,
        practice: ["Unduh Power BI Desktop (gratis, Windows).", "Impor dataset Superstore dan buat ulang dashboard Excel Anda di Power BI.", "Ikuti satu modul Microsoft Learn: 'Get started with Power BI'."],
        quiz: [
          { q: "Bahasa rumus measure di Power BI?", o: ["M", "DAX", "SQL", "VBA"], a: 1, why: "DAX untuk measure; M untuk Power Query." },
        ],
        res: [
          { type: "course", title: "Microsoft Learn — Power BI", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi" },
          { type: "yt", title: "Power BI full course beginner", url: yt("power bi full course for beginners") },
          { type: "course", title: "Tableau Public (gratis)", url: "https://public.tableau.com/" },
        ],
      },
      {
        id: "l5-5", title: "Python untuk Analisis Data (pandas)", dur: 50,
        summary: "Saat Excel mulai berat: jutaan baris, otomasi, dan analisis lanjutan.",
        content: `
<p>Gunakan <b>Google Colab</b> (gratis, tanpa install) atau Jupyter.</p>
<div class="formula">import pandas as pd

df = pd.read_excel("penjualan.xlsx")      # atau read_csv
df.head()                                   # 5 baris pertama
df.info()                                   # tipe data & null
df.describe()                               # statistik deskriptif

# Cleaning
df = df.drop_duplicates()
df["kota"] = df["kota"].str.strip().str.title()
df["tanggal"] = pd.to_datetime(df["tanggal"])

# Filter (seperti FILTER Excel)
jawa = df[df["wilayah"] == "Jawa"]

# Pivot (seperti PivotTable)
ringkas = df.pivot_table(index="wilayah", columns="kategori",
                         values="omzet", aggfunc="sum")

# Group by (seperti SUMIFS)
top = (df.groupby("produk")["omzet"].sum()
         .sort_values(ascending=False).head(10))

# Lookup (seperti XLOOKUP)
df = df.merge(produk, on="kode_produk", how="left")</div>
<h4>Visualisasi</h4>
<div class="formula">top.plot(kind="barh", title="Top 10 Produk")</div>
<div class="tip">💡 Excel 365 kini punya <b>Python in Excel</b> (<code>=PY()</code>), sehingga pandas bisa dijalankan langsung dari sel.</div>`,
        practice: ["Selesaikan kursus Pandas di Kaggle Learn.", "Ulangi satu analisis Excel Anda (Pivot + Top 10) dengan pandas di Colab.", "Buat 3 grafik dengan matplotlib/seaborn."],
        quiz: [
          { q: "Padanan PivotTable di pandas?", o: ["df.merge()", "df.pivot_table()", "df.head()", "df.plot()"], a: 1, why: "pivot_table() meringkas data seperti PivotTable." },
        ],
        res: [
          { type: "course", title: "Kaggle Learn — Pandas", url: "https://www.kaggle.com/learn/pandas" },
          { type: "course", title: "Google Colab", url: "https://colab.research.google.com/" },
          { type: "yt", title: "Python pandas for data analysis", url: yt("python pandas data analysis full course") },
        ],
      },
      {
        id: "l5-6", title: "Portofolio & Persiapan Kerja", dur: 40,
        summary: "3 proyek, GitHub/LinkedIn, CV, dan latihan interview.",
        content: `
<h4>3 proyek portofolio wajib</h4>
<ol>
<li><b>Excel</b>: data cleaning + Pivot + dashboard interaktif (Level 3–4).</li>
<li><b>SQL</b>: analisis dataset publik dengan JOIN, CTE, dan window function.</li>
<li><b>BI / Python</b>: dashboard Power BI/Tableau atau notebook analisis end-to-end.</li>
</ol>
<h4>Struktur studi kasus (untuk setiap proyek)</h4>
<p>Latar belakang → Pertanyaan bisnis → Data & cleaning → Analisis → Insight (3 poin) → Rekomendasi → Link file.</p>
<h4>Tempat publikasi</h4>
<ul><li>GitHub (README yang rapi), Tableau Public, NovyPro (Power BI), Medium/LinkedIn post.</li></ul>
<h4>Pertanyaan interview yang sering muncul</h4>
<ul>
<li>Bedanya VLOOKUP & XLOOKUP / INNER & LEFT JOIN?</li>
<li>Bagaimana menangani missing values & outlier?</li>
<li>Ceritakan proyek di mana analisis Anda mengubah keputusan.</li>
<li>Live test: buat Pivot / tulis query dalam 30 menit.</li>
</ul>
<div class="tip">💡 Ukur hasil di CV dengan angka: “Mengotomatisasi laporan mingguan dengan Power Query, menghemat 4 jam/minggu”.</div>`,
        practice: ["Pilih 1 dataset (Kaggle/BPS/data.go.id) dan tulis studi kasus lengkap.", "Buat repositori GitHub 'portofolio-data-analyst'.", "Latih 10 pertanyaan interview, rekam jawaban Anda."],
        quiz: [
          { q: "Bagian terpenting studi kasus portofolio menurut recruiter?", o: ["Warna dashboard", "Insight & rekomendasi bisnis", "Jumlah rumus", "Panjang dokumen"], a: 1, why: "Recruiter ingin melihat Anda mengubah data menjadi keputusan." },
        ],
        res: [
          { type: "course", title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
          { type: "course", title: "Portal Satu Data Indonesia (data.go.id)", url: "https://data.go.id/" },
          { type: "course", title: "BPS — Badan Pusat Statistik", url: "https://www.bps.go.id/" },
          { type: "yt", title: "Data analyst portfolio project ideas", url: yt("data analyst portfolio project excel sql power bi") },
        ],
      },
    ],
  },
];
