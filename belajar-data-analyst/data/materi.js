/* MATERI JALUR DATA ANALYST — 9 level. Dibuat dari gen/build_materi.js. */
window.SUMBER_UMUM = [
 {
  "type": "course",
  "title": "Google Data Analytics Professional Certificate (Coursera)",
  "url": "https://www.coursera.org/professional-certificates/google-data-analytics",
  "note": "Program resmi Google: spreadsheet, SQL, Tableau, R/Python. Bisa audit / ajukan bantuan biaya."
 },
 {
  "type": "course",
  "title": "GCFGlobal / LearnFree — Excel Gratis",
  "url": "https://edu.gcfglobal.org/en/excel/",
  "note": "Kursus Excel gratis dari nol, cocok untuk pemula total."
 },
 {
  "type": "doc",
  "title": "Microsoft Excel — Bantuan & Pelatihan Resmi",
  "url": "https://support.microsoft.com/en-us/excel",
  "note": "Dokumentasi resmi dan video pendek dari Microsoft."
 },
 {
  "type": "doc",
  "title": "Exceljet — Daftar Fungsi Excel",
  "url": "https://exceljet.net/functions",
  "note": "Referensi fungsi dengan contoh yang sangat jelas."
 },
 {
  "type": "course",
  "title": "Kaggle Learn — SQL, Pandas, Visualisasi",
  "url": "https://www.kaggle.com/learn",
  "note": "Kursus mini gratis + latihan langsung di browser."
 },
 {
  "type": "course",
  "title": "Microsoft Learn — Power BI",
  "url": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
  "note": "Jalur belajar Power BI resmi dan gratis."
 },
 {
  "type": "yt",
  "title": "YouTube: Belajar Excel Bahasa Indonesia",
  "url": "https://www.youtube.com/results?search_query=belajar%20excel%20bahasa%20indonesia%20dari%20nol",
  "note": "Kumpulan tutorial berbahasa Indonesia."
 },
 {
  "type": "yt",
  "title": "YouTube: Excel for Data Analysis (full course)",
  "url": "https://www.youtube.com/results?search_query=excel%20for%20data%20analysis%20full%20course",
  "note": "Kursus panjang berbahasa Inggris."
 },
 {
  "type": "course",
  "title": "SQLBolt — latihan SQL interaktif",
  "url": "https://sqlbolt.com/",
  "note": "Belajar SQL langsung di browser, sangat ramah pemula."
 },
 {
  "type": "course",
  "title": "Tableau Free Training & Tableau Public",
  "url": "https://www.tableau.com/learn/training",
  "note": "Video resmi Tableau; Tableau Public gratis untuk portofolio."
 },
 {
  "type": "doc",
  "title": "Looker Studio Help Center",
  "url": "https://support.google.com/looker-studio",
  "note": "Panduan resmi dashboard gratis dari Google."
 },
 {
  "type": "course",
  "title": "OpenIntro Statistics (buku gratis)",
  "url": "https://www.openintro.org/book/os/",
  "note": "Buku statistik pengantar yang gratis dan berkualitas."
 },
 {
  "type": "course",
  "title": "DataLemur — latihan soal interview SQL",
  "url": "https://datalemur.com/",
  "note": "Soal tes teknis dari perusahaan nyata."
 }
];
window.MIGRASI = {"l5-1":"f-2","l1-1":"x-1","l1-2":"x-1","l1-3":"x-2","l1-4":"x-2","l1-5":"x-3","l1-6":"x-3","l2-6":"x-3","l2-1":"x-4","l2-2":"x-4","l2-3":"x-5","l2-4":"x-5","l2-5":"x-6","l3-1":"x-6","l3-2":"x-6","l3-3":"x-7","l2-7":"x-7","l3-4":"x-7","l4-1":"x-8","l4-2":"x-8","l4-5":"x-9","l4-7":"x-9","l5-2":"s-1","l3-6":"c-1","l4-3":"c-2","l3-5":"v-1","l4-6":"v-2","l5-4":"v-3","l5-6":"k-1","l4-4":"v-3","l5-3":"q-1","l5-5":"p-2"};
window.MATERI = [
 {
  "id": 1,
  "slug": "fondasi",
  "title": "Fondasi Data Analyst",
  "tag": "Mulai di sini",
  "color": "#0f766e",
  "desc": "Peran data analyst, proses analisis, berpikir analitis, jenis data, metrik bisnis, dan etika data.",
  "lessons": [
   {
    "id": "f-1",
    "title": "Apa Itu Data Analyst?",
    "dur": 20,
    "summary": "Peran, tugas harian, perbedaan dengan Data Scientist/Engineer, dan peta skill.",
    "content": "\n<p><b>Data Analyst</b> mengubah data mentah menjadi <b>jawaban dan rekomendasi</b> yang membantu orang mengambil keputusan. Fokusnya adalah pertanyaan bisnis, bukan alat.</p>\n<h4>Contoh pekerjaan harian</h4>\n<ul>\n<li>Menarik data penjualan dari database dengan <b>SQL</b>.</li>\n<li>Membersihkan dan menggabungkan data dari beberapa sumber (Excel, CSV, API).</li>\n<li>Membuat dan memelihara <b>dashboard</b> KPI (Power BI / Tableau / Looker Studio).</li>\n<li>Menjawab pertanyaan ad-hoc: “Kenapa penjualan minggu ini turun?”</li>\n<li>Menganalisis hasil eksperimen/A-B test dan kampanye marketing.</li>\n<li>Mempresentasikan insight ke manajer atau tim non-teknis.</li>\n</ul>\n<h4>Peran-peran di dunia data</h4>\n<table class=\"tbl\"><tr><th>Peran</th><th>Fokus</th><th>Alat utama</th></tr>\n<tr><td><b>Data Analyst</b></td><td>Menjelaskan apa yang terjadi & mengapa; rekomendasi bisnis</td><td>SQL, Excel, BI, Python dasar, statistik</td></tr>\n<tr><td>BI Analyst/Developer</td><td>Model data & dashboard skala perusahaan</td><td>SQL, Power BI/Tableau, DAX, data modeling</td></tr>\n<tr><td>Data Scientist</td><td>Prediksi & model machine learning</td><td>Python/R, statistik lanjut, ML</td></tr>\n<tr><td>Data Engineer</td><td>Membangun pipeline & infrastruktur data</td><td>SQL, Python, cloud, Airflow, dbt</td></tr>\n<tr><td>Analytics Engineer</td><td>Mengubah data mentah jadi tabel siap analisis</td><td>SQL, dbt, Git</td></tr></table>\n<h4>Peta skill (urutan belajar di website ini)</h4>\n<ol>\n<li><b>Fondasi</b>: proses analisis, berpikir analitis, metrik bisnis.</li>\n<li><b>Spreadsheet</b>: Excel/Google Sheets, alat yang dipakai hampir semua perusahaan.</li>\n<li><b>Statistik</b>: agar kesimpulanmu benar, bukan kebetulan.</li>\n<li><b>SQL</b>: skill teknis nomor 1 di lowongan data analyst.</li>\n<li><b>Data cleaning & EDA</b>: menyiapkan & mengenal data.</li>\n<li><b>Visualisasi & BI</b>: menyampaikan temuan.</li>\n<li><b>Python</b>: analisis lebih besar & otomatisasi.</li>\n<li><b>Analisis bisnis</b>: funnel, cohort, RFM, marketing.</li>\n<li><b>Karier</b>: portofolio & interview.</li>\n</ol>\n<div class=\"tip\">💡 Skill paling diremehkan: <b>komunikasi</b>. Analisis hebat tidak berguna jika tidak dipahami pengambil keputusan.</div>",
    "practice": [
     "Cari 5 lowongan Data Analyst (LinkedIn/Jobstreet/Glints). Catat skill yang paling sering muncul.",
     "Tulis 3 keputusan bisnis di sekitarmu (warung, kampus, kantor) yang bisa dibantu data.",
     "Tentukan target: dalam berapa bulan kamu ingin siap melamar?"
    ],
    "quiz": [
     {
      "q": "Fokus utama Data Analyst adalah…",
      "o": [
       "Membangun model machine learning",
       "Membangun pipeline data",
       "Menjawab pertanyaan bisnis dengan data",
       "Mengelola server database"
      ],
      "a": 2,
      "why": "DA menerjemahkan data menjadi insight & rekomendasi."
     },
     {
      "q": "Skill teknis yang paling sering diminta di lowongan DA?",
      "o": [
       "Java",
       "SQL",
       "C++",
       "Photoshop"
      ],
      "a": 1,
      "why": "SQL dipakai untuk mengambil data dari database di hampir semua perusahaan."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Google Data Analytics Certificate (Coursera)",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     },
     {
      "type": "yt",
      "title": "A day in the life of a data analyst",
      "url": "https://www.youtube.com/results?search_query=day%20in%20the%20life%20of%20a%20data%20analyst"
     },
     {
      "type": "yt",
      "title": "Roadmap data analyst (Bahasa Indonesia)",
      "url": "https://www.youtube.com/results?search_query=roadmap%20data%20analyst%20pemula%20bahasa%20indonesia"
     }
    ]
   },
   {
    "id": "f-2",
    "title": "Proses Analisis Data (Ask → Act)",
    "dur": 20,
    "summary": "Kerangka kerja 6 tahap dari Google Data Analytics.",
    "content": "\n<p>Kerangka 6 tahap yang dipakai di Google Data Analytics Certificate:</p>\n<ol>\n<li><b>Ask</b>: definisikan masalah bisnis. Gunakan pertanyaan SMART (Specific, Measurable, Action-oriented, Relevant, Time-bound).</li>\n<li><b>Prepare</b>: kumpulkan data; nilai kredibilitasnya.</li>\n<li><b>Process</b>: bersihkan & validasi data.</li>\n<li><b>Analyze</b>: temukan pola, tren, hubungan.</li>\n<li><b>Share</b>: visualisasi & storytelling.</li>\n<li><b>Act</b>: rekomendasi yang bisa dieksekusi.</li>\n</ol>\n<h4>Contoh</h4>\n<p><b>Masalah:</b> Penjualan online turun. <b>Pertanyaan SMART:</b> “Kategori & wilayah mana yang omzetnya turun lebih dari 10% di Q3 dibanding Q2, dan apa faktor penyebabnya?”</p>\n<h4>Jenis analisis</h4>\n<table class=\"tbl\"><tr><th>Jenis</th><th>Pertanyaan</th></tr>\n<tr><td>Deskriptif</td><td>Apa yang terjadi?</td></tr><tr><td>Diagnostik</td><td>Mengapa terjadi?</td></tr>\n<tr><td>Prediktif</td><td>Apa yang akan terjadi?</td></tr><tr><td>Preskriptif</td><td>Apa yang harus dilakukan?</td></tr></table>",
    "practice": [
     "Ubah 3 pertanyaan bisnis yang samar menjadi pertanyaan SMART.",
     "Petakan File Latihan Excel 06 (dashboard) ke 6 tahap di atas."
    ],
    "quiz": [
     {
      "q": "Tahap membersihkan & memvalidasi data disebut…",
      "o": [
       "Prepare",
       "Process",
       "Analyze",
       "Share"
      ],
      "a": 1,
      "why": "Process = cleaning & transformasi."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Google Data Analytics Certificate (Coursera)",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     },
     {
      "type": "yt",
      "title": "Google Career Certificates — Data Analytics",
      "url": "https://www.youtube.com/results?search_query=google%20career%20certificates%20data%20analytics%20full%20course"
     }
    ]
   },
   {
    "id": "f-3",
    "title": "Berpikir Analitis & Merumuskan Masalah",
    "dur": 25,
    "summary": "Dari pertanyaan samar menjadi pertanyaan yang bisa dianalisis: SMART, issue tree, hipotesis.",
    "content": "\n<p>Kesalahan pemula paling umum: langsung membuka data tanpa tahu <b>pertanyaannya</b>. Analis yang baik mulai dengan memahami masalah.</p>\n<h4>1. Pahami konteks dengan bertanya</h4>\n<ul><li>Keputusan apa yang akan diambil dari analisis ini?</li><li>Siapa yang memakai hasilnya?</li><li>Kapan dibutuhkan, dan seberapa akurat?</li><li>Apa definisi metriknya? (contoh: “pelanggan aktif” = belanja dalam 30 hari terakhir?)</li></ul>\n<h4>2. Ubah menjadi pertanyaan SMART</h4>\n<table class=\"tbl\"><tr><th>Samar</th><th>SMART</th></tr>\n<tr><td>“Kenapa penjualan jelek?”</td><td>“Kategori & kota mana yang pendapatannya turun &gt;10% di Oktober 2026 dibanding September, dan apakah penurunannya dari jumlah order atau nilai per order?”</td></tr>\n<tr><td>“Iklan TikTok efektif nggak?”</td><td>“Berapa biaya akuisisi (CAC) pelanggan dari TikTok vs Instagram selama Q3 2026, dan berapa nilai belanja mereka dalam 60 hari pertama?”</td></tr></table>\n<h4>3. Pecah masalah dengan issue tree (MECE)</h4>\n<p>MECE = <i>Mutually Exclusive, Collectively Exhaustive</i>: cabang tidak tumpang tindih dan mencakup semua kemungkinan.</p>\n<div class=\"formula\" data-lang=\"LOGIKA\">Pendapatan = Jumlah Order × Nilai rata-rata per Order (AOV)\nJumlah Order = Pengunjung × Conversion Rate\nAOV = Item per Order × Harga rata-rata per Item</div>\n<p>Jika pendapatan turun, cek cabang mana yang berubah. Ini jauh lebih cepat daripada menebak.</p>\n<h4>4. Tulis hipotesis lalu uji dengan data</h4>\n<ul><li>H1: Conversion rate mobile turun setelah update aplikasi.</li><li>H2: Stok produk terlaris habis.</li><li>H3: Kompetitor sedang promo besar.</li></ul>\n<p>Prioritaskan hipotesis yang paling mungkin <i>dan</i> paling mudah dicek.</p>\n<div class=\"tip\">💡 Teknik <b>5 Whys</b>: tanyakan “mengapa?” berulang sampai menemukan akar masalah, bukan gejalanya.</div>",
    "practice": [
     "Ubah 3 pertanyaan samar dari kehidupanmu menjadi pertanyaan SMART.",
     "Buat issue tree untuk: 'Jumlah pelanggan baru bulan ini turun 20%'.",
     "Tulis 3 hipotesis untuk masalah di atas dan data apa yang dibutuhkan untuk mengujinya."
    ],
    "quiz": [
     {
      "q": "Pendapatan = Jumlah Order × …",
      "o": [
       "Jumlah pelanggan",
       "AOV (nilai rata-rata per order)",
       "Conversion rate",
       "Biaya iklan"
      ],
      "a": 1,
      "why": "Pendapatan dapat dipecah menjadi volume order × nilai per order."
     },
     {
      "q": "Prinsip MECE berarti cabang analisis…",
      "o": [
       "Boleh tumpang tindih",
       "Tidak tumpang tindih & mencakup semua kemungkinan",
       "Hanya 2 cabang",
       "Selalu berbentuk angka"
      ],
      "a": 1,
      "why": "Mutually Exclusive, Collectively Exhaustive."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Structured thinking / problem solving for analysts",
      "url": "https://www.youtube.com/results?search_query=structured%20thinking%20problem%20solving%20data%20analyst"
     },
     {
      "type": "course",
      "title": "Google DA Course 2: Ask Questions to Make Data-Driven Decisions",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     }
    ]
   },
   {
    "id": "f-4",
    "title": "Jenis & Struktur Data",
    "dur": 25,
    "summary": "Tipe variabel, skala pengukuran, tidy data, granularitas, primary key, format lebar vs panjang.",
    "content": "\n<h4>Jenis variabel</h4>\n<table class=\"tbl\"><tr><th>Jenis</th><th>Skala</th><th>Contoh</th><th>Ringkasan yang tepat</th></tr>\n<tr><td rowspan=\"2\">Kategorik (kualitatif)</td><td>Nominal</td><td>kota, metode bayar</td><td>Jumlah, persentase, modus</td></tr>\n<tr><td>Ordinal</td><td>rating 1–5, ukuran S/M/L</td><td>Median, persentase</td></tr>\n<tr><td rowspan=\"2\">Numerik (kuantitatif)</td><td>Diskrit</td><td>jumlah item, jumlah klik</td><td>Mean, median, sum</td></tr>\n<tr><td>Kontinu</td><td>harga, durasi, berat</td><td>Mean, median, std, distribusi</td></tr></table>\n<div class=\"warn\">⚠️ Kode pos, ID pelanggan, dan nomor HP berbentuk angka tetapi <b>bukan</b> data numerik. Menjumlahkannya tidak bermakna.</div>\n<h4>Tidy data</h4>\n<ol><li>Setiap <b>kolom</b> = satu variabel.</li><li>Setiap <b>baris</b> = satu observasi.</li><li>Setiap <b>sel</b> = satu nilai.</li></ol>\n<p>Hampir semua alat (Pivot, SQL, pandas, Power BI) bekerja paling baik dengan data tidy.</p>\n<h4>Granularitas (grain)</h4>\n<p>Satu baris mewakili apa? Di dataset TokoKita: <code>orders</code> = 1 baris per pesanan, <code>order_items</code> = 1 baris per <i>barang dalam</i> pesanan. Salah paham grain menyebabkan angka dobel saat JOIN.</p>\n<h4>Primary key & foreign key</h4>\n<ul><li><b>Primary key</b>: kolom unik per baris (<code>order_id</code> di tabel orders).</li><li><b>Foreign key</b>: kolom yang merujuk tabel lain (<code>customer_id</code> di orders → customers).</li></ul>\n<h4>Format lebar vs panjang</h4>\n<table class=\"tbl\"><tr><th>Lebar (wide)</th><th>Panjang (long / tidy)</th></tr>\n<tr><td>Produk | Jan | Feb | Mar</td><td>Produk | Bulan | Penjualan</td></tr>\n<tr><td>Enak dibaca manusia</td><td>Enak diolah mesin (filter, group, chart)</td></tr></table>\n<p>Ubah lebar → panjang dengan <b>Unpivot</b> (Power Query), <code>melt()</code> (pandas), atau <code>UNION ALL</code> (SQL).</p>\n<h4>Data terstruktur vs tidak terstruktur</h4>\n<p>Terstruktur: tabel database, spreadsheet. Semi-terstruktur: JSON, log. Tidak terstruktur: teks ulasan, gambar, audio.</p>",
    "practice": [
     "Buka file latihan/data/order_items.csv. Tentukan grain, primary key, dan foreign key-nya.",
     "Klasifikasikan semua kolom di customers.csv: nominal/ordinal/diskrit/kontinu.",
     "Gambar hubungan 6 tabel TokoKita (lihat tab Skema di Lab SQL)."
    ],
    "quiz": [
     {
      "q": "Rating kepuasan 1–5 termasuk skala…",
      "o": [
       "Nominal",
       "Ordinal",
       "Rasio",
       "Kontinu"
      ],
      "a": 1,
      "why": "Ada urutan, tapi jarak antar nilai tidak pasti sama."
     },
     {
      "q": "Pada tabel order_items, satu baris mewakili…",
      "o": [
       "Satu pelanggan",
       "Satu pesanan",
       "Satu barang dalam satu pesanan",
       "Satu produk di katalog"
      ],
      "a": 2,
      "why": "Grain order_items adalah item per pesanan."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "Tidy Data (Hadley Wickham, paper)",
      "url": "https://vita.had.co.nz/papers/tidy-data.pdf"
     },
     {
      "type": "yt",
      "title": "Types of data: nominal ordinal interval ratio",
      "url": "https://www.youtube.com/results?search_query=types%20of%20data%20nominal%20ordinal%20interval%20ratio"
     }
    ]
   },
   {
    "id": "f-5",
    "title": "Metrik & KPI Bisnis",
    "dur": 30,
    "summary": "Metrik yang wajib dikuasai: revenue, AOV, conversion, retention, churn, CAC, LTV, ROAS.",
    "content": "\n<p>KPI (<i>Key Performance Indicator</i>) adalah metrik yang paling penting untuk tujuan bisnis. Data analyst harus paham <b>definisi & rumus</b>-nya dengan tepat.</p>\n<table class=\"tbl\"><tr><th>Metrik</th><th>Rumus</th><th>Catatan</th></tr>\n<tr><td>Revenue (GMV/Net)</td><td>Σ qty × harga × (1 − diskon)</td><td>Tentukan: termasuk order batal/retur atau tidak?</td></tr>\n<tr><td>Jumlah order</td><td>COUNT(order unik)</td><td></td></tr>\n<tr><td>AOV</td><td>Revenue ÷ jumlah order</td><td>Average Order Value</td></tr>\n<tr><td>Conversion rate</td><td>Pembeli ÷ pengunjung</td><td>Sesuaikan penyebut: sesi atau user?</td></tr>\n<tr><td>Gross margin</td><td>(Revenue − HPP) ÷ Revenue</td><td></td></tr>\n<tr><td>Repeat rate</td><td>Pelanggan dgn ≥2 order ÷ semua pelanggan</td><td></td></tr>\n<tr><td>Retention (bulan ke-n)</td><td>Pelanggan cohort yang aktif di bulan n ÷ ukuran cohort</td><td>Lihat Level 8</td></tr>\n<tr><td>Churn rate</td><td>Pelanggan berhenti ÷ pelanggan awal periode</td><td>Definisikan “berhenti”</td></tr>\n<tr><td>CAC</td><td>Biaya marketing ÷ pelanggan baru</td><td>Customer Acquisition Cost</td></tr>\n<tr><td>LTV / CLV</td><td>AOV × frekuensi × masa hidup × margin</td><td>Bandingkan dgn CAC (sehat: LTV ≥ 3× CAC)</td></tr>\n<tr><td>ROAS</td><td>Pendapatan iklan ÷ biaya iklan</td><td></td></tr>\n<tr><td>CTR</td><td>Klik ÷ impressions</td><td></td></tr></table>\n<h4>Leading vs lagging</h4>\n<ul><li><b>Lagging</b>: hasil akhir (revenue bulan ini). Sudah terjadi, sulit diubah.</li><li><b>Leading</b>: indikator awal (jumlah add-to-cart, pengunjung). Bisa ditindaklanjuti lebih cepat.</li></ul>\n<h4>North Star Metric</h4>\n<p>Satu metrik yang paling mencerminkan nilai bagi pelanggan, misalnya “jumlah pesanan selesai per minggu” untuk e-commerce.</p>\n<h4>Jebakan metrik</h4>\n<ul><li><b>Vanity metric</b>: angka besar yang tidak terkait keputusan (total download, followers).</li><li><b>Rata-rata dari rasio</b>: rata-rata ROAS per kampanye ≠ ROAS total. Gunakan Σ pendapatan ÷ Σ biaya.</li><li><b>Simpson’s paradox</b>: tren di total bisa berbalik di setiap segmen.</li></ul>",
    "practice": [
     "Tulis definisi lengkap 'Revenue', 'Pelanggan aktif', dan 'Repeat customer' untuk TokoKita.",
     "Untuk sebuah aplikasi yang kamu pakai (Gojek, Shopee, Spotify), tebak North Star Metric-nya.",
     "Hitung AOV & gross margin TokoKita nanti di Lab SQL (soal tersedia)."
    ],
    "quiz": [
     {
      "q": "CAC dihitung dengan…",
      "o": [
       "Revenue ÷ pelanggan",
       "Biaya marketing ÷ pelanggan baru",
       "Pelanggan baru ÷ biaya",
       "Biaya ÷ klik"
      ],
      "a": 1,
      "why": "Customer Acquisition Cost = biaya untuk mendapatkan satu pelanggan baru."
     },
     {
      "q": "ROAS total 10 kampanye yang benar adalah…",
      "o": [
       "Rata-rata ROAS tiap kampanye",
       "Σ pendapatan ÷ Σ biaya",
       "ROAS kampanye terbesar",
       "Median ROAS"
      ],
      "a": 1,
      "why": "Rata-rata rasio memberi bobot sama ke kampanye kecil & besar, sehingga hasilnya menyesatkan."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "E-commerce metrics explained (AOV, CAC, LTV)",
      "url": "https://www.youtube.com/results?search_query=ecommerce%20metrics%20explained%20aov%20cac%20ltv%20conversion"
     },
     {
      "type": "yt",
      "title": "Simpson's paradox",
      "url": "https://www.youtube.com/results?search_query=simpson's%20paradox%20explained"
     }
    ]
   },
   {
    "id": "f-6",
    "title": "Etika, Privasi & Bias Data",
    "dur": 15,
    "summary": "Data pribadi, UU PDP, anonimisasi, bias, dan integritas analis.",
    "content": "\n<h4>Data pribadi</h4>\n<p>Nama, NIK, email, nomor HP, alamat, lokasi, dan data kesehatan termasuk data pribadi. Di Indonesia, pelindungannya diatur dalam <b>UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</b>.</p>\n<h4>Praktik baik analis</h4>\n<ul>\n<li><b>Minimalkan</b>: ambil hanya kolom yang dibutuhkan.</li>\n<li><b>Anonimkan/pseudonimkan</b>: ganti nama dengan ID, sembunyikan email/HP saat berbagi.</li>\n<li><b>Agregasikan</b> sebelum membagikan (laporan per kota, bukan per orang).</li>\n<li>Jangan kirim data mentah lewat chat pribadi atau menyimpannya di laptop tanpa izin.</li>\n<li>Untuk portofolio: gunakan data publik/fiktif, bukan data kantor.</li>\n</ul>\n<h4>Bias yang sering terjadi</h4>\n<table class=\"tbl\"><tr><th>Bias</th><th>Contoh</th></tr>\n<tr><td>Sampling bias</td><td>Survei kepuasan hanya diisi pelanggan yang sangat puas/kecewa.</td></tr>\n<tr><td>Survivorship bias</td><td>Hanya menganalisis toko yang masih buka, melupakan yang tutup.</td></tr>\n<tr><td>Confirmation bias</td><td>Mencari data yang mendukung pendapat atasan saja.</td></tr>\n<tr><td>Bias historis</td><td>Model rekrutmen meniru keputusan masa lalu yang diskriminatif.</td></tr></table>\n<h4>Integritas</h4>\n<p>Laporkan hasil apa adanya, termasuk ketika tidak sesuai harapan. Sebutkan keterbatasan data dan asumsi. Jangan memotong sumbu grafik untuk melebih-lebihkan perubahan.</p>",
    "practice": [
     "Dari customers.csv, kolom mana yang termasuk data pribadi?",
     "Tulis 3 kalimat 'Keterbatasan data' untuk sebuah analisis penjualan.",
     "Cari 1 contoh berita tentang kebocoran data di Indonesia; apa pelajarannya untuk analis?"
    ],
    "quiz": [
     {
      "q": "Hanya menganalisis startup yang sukses lalu menyimpulkan 'kunci sukses' adalah contoh…",
      "o": [
       "Sampling bias",
       "Survivorship bias",
       "Confirmation bias",
       "Recall bias"
      ],
      "a": 1,
      "why": "Startup yang gagal tidak ikut dianalisis."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Google DA Course 3: Prepare Data (bagian data ethics)",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     },
     {
      "type": "yt",
      "title": "UU Pelindungan Data Pribadi dijelaskan",
      "url": "https://www.youtube.com/results?search_query=UU%20PDP%20pelindungan%20data%20pribadi%20dijelaskan"
     }
    ]
   }
  ]
 },
 {
  "id": 2,
  "slug": "spreadsheet",
  "title": "Spreadsheet: Excel & Google Sheets",
  "tag": "Alat dasar",
  "color": "#16a34a",
  "desc": "Alat yang dipakai hampir semua perusahaan: rumus, lookup, PivotTable, Excel modern, dan What-If. Diringkas khusus kebutuhan analis.",
  "lessons": [
   {
    "title": "Mengenal Excel, Tipe Data & Input",
    "summary": "Antarmuka, istilah, shortcut wajib, tipe data, Autofill & Flash Fill.",
    "dur": 30,
    "content": "<h3 class=\"part\">Bagian 1: Mengenal Excel & Antarmuka</h3>\n<p>Excel adalah <b>spreadsheet</b>: lembar kerja berisi kotak-kotak (<b>sel</b>) yang tersusun dalam <b>kolom</b> (A, B, C …) dan <b>baris</b> (1, 2, 3 …). Alamat sel ditulis kolom + baris, misalnya <code>B3</code>.</p>\n<h4>Istilah penting</h4>\n<ul>\n<li><b>Workbook</b> = satu file Excel (.xlsx).</li>\n<li><b>Worksheet / Sheet</b> = tab di bagian bawah. Satu workbook bisa berisi banyak sheet.</li>\n<li><b>Range</b> = kumpulan sel, ditulis <code>A1:C10</code> (dari A1 sampai C10).</li>\n<li><b>Ribbon</b> = menu di atas (Home, Insert, Formulas, Data, …).</li>\n<li><b>Name Box</b> = kotak kiri atas yang menunjukkan alamat sel aktif. Ketik <code>D50</code> lalu Enter untuk melompat.</li>\n<li><b>Formula Bar</b> = tempat melihat/menyunting isi sel dan rumus.</li>\n</ul>\n<h4>Shortcut wajib hafal</h4>\n<table class=\"tbl\"><tr><th>Shortcut</th><th>Fungsi</th></tr>\n<tr><td><kbd>Ctrl</kbd>+<kbd>Panah</kbd></td><td>Lompat ke ujung data</td></tr>\n<tr><td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Panah</kbd></td><td>Blok sampai ujung data</td></tr>\n<tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd></td><td>Undo / Redo</td></tr>\n<tr><td><kbd>F2</kbd></td><td>Edit isi sel</td></tr>\n<tr><td><kbd>Ctrl</kbd>+<kbd>Page Up/Down</kbd></td><td>Pindah sheet</td></tr>\n<tr><td><kbd>Ctrl</kbd>+<kbd>Home</kbd></td><td>Kembali ke A1</td></tr></table>\n<div class=\"tip\">💡 Data analyst menghabiskan banyak waktu bernavigasi. Membiasakan shortcut sejak awal menghemat berjam-jam.</div>\n<h3 class=\"part\">Bagian 2: Input Data & Tipe Data</h3>\n<p>Excel mengenali beberapa <b>tipe data</b>. Salah tipe = rumus error, jadi ini fondasi penting.</p>\n<table class=\"tbl\"><tr><th>Tipe</th><th>Contoh</th><th>Ciri default</th></tr>\n<tr><td>Angka</td><td>15000</td><td>Rata kanan</td></tr>\n<tr><td>Teks</td><td>Jakarta</td><td>Rata kiri</td></tr>\n<tr><td>Tanggal</td><td>16/11/2026</td><td>Rata kanan (sebenarnya angka seri)</td></tr>\n<tr><td>Boolean</td><td>TRUE / FALSE</td><td>Rata tengah</td></tr></table>\n<div class=\"warn\">⚠️ Angka yang rata kiri biasanya tersimpan sebagai <b>teks</b> (sering terjadi saat impor data). Akibatnya SUM menghasilkan 0. Perbaiki dengan Data → Text to Columns → Finish, atau <code>=VALUE(A2)</code>.</div>\n<h4>Autofill</h4>\n<p>Ketik <code>Senin</code> lalu tarik <b>fill handle</b> (kotak kecil di pojok kanan bawah sel), dan Excel otomatis melanjutkan Selasa, Rabu, dst. Ini juga berlaku untuk angka berpola (1, 2 → 3, 4, 5…) dan tanggal.</p>\n<h4>Flash Fill (Ctrl+E)</h4>\n<p>Excel menebak pola dari contoh yang Anda ketik. Misalnya kolom A berisi <i>budi.santoso@mail.com</i>; ketik <i>Budi Santoso</i> di B2, lalu tekan <kbd>Ctrl</kbd>+<kbd>E</kbd> dan seluruh kolom terisi.</p>\n<h4>Tanggal adalah angka</h4>\n<p>Di balik layar, 1 Januari 1900 = 1, dan setiap hari bertambah 1. Karena itu selisih tanggal bisa dihitung langsung: <code>=B2-A2</code> menghasilkan jumlah hari.</p>",
    "practice": [
     "Buat workbook baru berisi 3 sheet: <i>Data</i>, <i>Analisis</i>, <i>Dashboard</i>.",
     "Gunakan Name Box untuk melompat ke sel Z100, lalu kembali dengan Ctrl+Home.",
     "Ganti warna tab sheet Data menjadi hijau (klik kanan tab → Tab Color).",
     "Ketik daftar 12 bulan memakai Autofill dari satu sel 'Januari'.",
     "Buat kolom email lalu pisahkan nama depan dengan Flash Fill.",
     "Ketik '00123 (diawali apostrof) dan perhatikan bedanya dengan 00123."
    ],
    "quiz": [
     {
      "q": "Alamat sel pada kolom C baris 7 ditulis…",
      "o": [
       "7C",
       "C7",
       "C:7",
       "R7C3"
      ],
      "a": 1,
      "why": "Format alamat sel adalah huruf kolom diikuti nomor baris."
     },
     {
      "q": "Range A1:B3 berisi berapa sel?",
      "o": [
       "2",
       "3",
       "5",
       "6"
      ],
      "a": 3,
      "why": "2 kolom (A, B) × 3 baris = 6 sel."
     },
     {
      "q": "Angka di sel tampil rata kiri dan SUM menghasilkan 0. Penyebab paling mungkin?",
      "o": [
       "Rumus salah ketik",
       "Angka tersimpan sebagai teks",
       "Sel terkunci",
       "Format mata uang"
      ],
      "a": 1,
      "why": "Angka berformat teks tidak ikut dijumlah oleh SUM."
     },
     {
      "q": "Shortcut Flash Fill adalah…",
      "o": [
       "Ctrl+F",
       "Ctrl+D",
       "Ctrl+E",
       "Ctrl+R"
      ],
      "a": 2,
      "why": "Ctrl+E menjalankan Flash Fill."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Pengenalan Excel untuk pemula",
      "url": "https://www.youtube.com/results?search_query=pengenalan%20microsoft%20excel%20untuk%20pemula"
     },
     {
      "type": "doc",
      "title": "Shortcut keyboard Excel (Microsoft)",
      "url": "https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f"
     },
     {
      "type": "course",
      "title": "GCFGlobal: Getting Started with Excel",
      "url": "https://edu.gcfglobal.org/en/excel/"
     },
     {
      "type": "yt",
      "title": "Autofill & Flash Fill Excel",
      "url": "https://www.youtube.com/results?search_query=flash%20fill%20excel%20tutorial%20indonesia"
     },
     {
      "type": "doc",
      "title": "Menggunakan Flash Fill (Microsoft)",
      "url": "https://support.microsoft.com/en-us/office/using-flash-fill-in-excel-3f9bcf1e-db93-4890-94a0-1578341f73f7"
     }
    ],
    "id": "x-1"
   },
   {
    "title": "Rumus Dasar & Referensi Sel",
    "summary": "SUM/AVERAGE/COUNT, operator, referensi relatif-absolut-campuran.",
    "dur": 40,
    "content": "<h3 class=\"part\">Bagian 1: Rumus Pertama: SUM, AVERAGE, MIN, MAX, COUNT</h3>\n<p>Semua rumus diawali tanda <code>=</code>. Operator dasar: <code>+ - * / ^</code>. Urutan hitung mengikuti matematika (kurung → pangkat → kali/bagi → tambah/kurang).</p>\n<div class=\"formula\">=SUM(B2:B10)</div>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>\n<tr><td><code>SUM</code></td><td>Menjumlahkan</td><td><code>=SUM(B2:B10)</code></td></tr>\n<tr><td><code>AVERAGE</code></td><td>Rata-rata</td><td><code>=AVERAGE(B2:B10)</code></td></tr>\n<tr><td><code>MIN</code> / <code>MAX</code></td><td>Nilai terkecil / terbesar</td><td><code>=MAX(B2:B10)</code></td></tr>\n<tr><td><code>COUNT</code></td><td>Menghitung sel berisi <b>angka</b></td><td><code>=COUNT(B2:B10)</code></td></tr>\n<tr><td><code>COUNTA</code></td><td>Menghitung sel <b>tidak kosong</b></td><td><code>=COUNTA(A2:A10)</code></td></tr>\n<tr><td><code>COUNTBLANK</code></td><td>Menghitung sel kosong</td><td><code>=COUNTBLANK(A2:A10)</code></td></tr></table>\n<h4>Contoh data</h4>\n<table class=\"tbl sheet\"><tr><th></th><th>A</th><th>B</th></tr>\n<tr><th>1</th><td><b>Produk</b></td><td><b>Penjualan</b></td></tr>\n<tr><th>2</th><td>Kopi</td><td>120</td></tr><tr><th>3</th><td>Teh</td><td>85</td></tr>\n<tr><th>4</th><td>Susu</td><td>140</td></tr><tr><th>5</th><td>Jus</td><td>60</td></tr></table>\n<p><code>=SUM(B2:B5)</code> → 405, <code>=AVERAGE(B2:B5)</code> → 101,25, <code>=MAX(B2:B5)</code> → 140.</p>\n<div class=\"tip\">💡 <kbd>Alt</kbd>+<kbd>=</kbd> membuat AutoSum otomatis. Status bar di bawah juga langsung menampilkan Sum/Average saat Anda memblok range.</div>\n<div class=\"warn\">⚠️ Pemisah argumen di Excel berbahasa Indonesia biasanya titik koma: <code>=IF(A1&gt;5;\"Ya\";\"Tidak\")</code>. Di materi ini dipakai koma (standar internasional).</div>\n<h3 class=\"part\">Bagian 2: Referensi Sel: Relatif, Absolut, Campuran</h3>\n<p>Saat rumus disalin, referensi <b>relatif</b> ikut bergeser. Kadang kita ingin satu sel tetap terkunci; itulah referensi <b>absolut</b> dengan tanda <code>$</code>.</p>\n<table class=\"tbl\"><tr><th>Tulisan</th><th>Jenis</th><th>Saat disalin</th></tr>\n<tr><td><code>A1</code></td><td>Relatif</td><td>Kolom & baris bergeser</td></tr>\n<tr><td><code>$A$1</code></td><td>Absolut</td><td>Terkunci total</td></tr>\n<tr><td><code>$A1</code></td><td>Campuran</td><td>Kolom terkunci, baris bergeser</td></tr>\n<tr><td><code>A$1</code></td><td>Campuran</td><td>Baris terkunci, kolom bergeser</td></tr></table>\n<h4>Contoh: menghitung pajak</h4>\n<p>Tarif pajak 11% disimpan di <code>E1</code>. Harga ada di B2:B10. Rumus di C2:</p>\n<div class=\"formula\">=B2*$E$1</div>\n<p>Saat disalin ke C3, rumus menjadi <code>=B3*$E$1</code>; tarif pajak tetap mengacu ke E1.</p>\n<div class=\"tip\">💡 Klik referensi di formula bar lalu tekan <kbd>F4</kbd> berulang: A1 → $A$1 → A$1 → $A1 → A1.</div>\n<h4>Latihan klasik: tabel perkalian</h4>\n<p>Isi B1:J1 dengan 1–9 dan A2:A10 dengan 1–9. Di B2 tulis <code>=$A2*B$1</code>, lalu salin ke seluruh tabel. Ini contoh sempurna referensi campuran.</p>",
    "practice": [
     "Buat tabel 10 produk dengan harga & qty, lalu hitung Total = Harga*Qty.",
     "Hitung total, rata-rata, penjualan tertinggi & terendah.",
     "Bandingkan hasil COUNT dan COUNTA pada kolom yang berisi teks dan angka.",
     "Buat tabel perkalian 1–9 hanya dengan SATU rumus yang disalin.",
     "Buat kolom 'Harga + Pajak' dengan tarif pajak di sel terpisah.",
     "Buat konversi USD→IDR dengan kurs di satu sel absolut."
    ],
    "quiz": [
     {
      "q": "Fungsi untuk menghitung sel yang TIDAK kosong (termasuk teks)?",
      "o": [
       "COUNT",
       "COUNTA",
       "COUNTIF",
       "SUM"
      ],
      "a": 1,
      "why": "COUNT hanya angka; COUNTA menghitung semua sel yang terisi."
     },
     {
      "q": "Hasil =2+3*4 adalah…",
      "o": [
       "20",
       "14",
       "24",
       "9"
      ],
      "a": 1,
      "why": "Perkalian dihitung lebih dulu: 3*4=12, lalu +2 = 14."
     },
     {
      "q": "Rumus =B2*$E$1 disalin ke bawah 1 baris menjadi…",
      "o": [
       "=B3*$E$2",
       "=B3*$E$1",
       "=B2*$E$1",
       "=C2*$E$1"
      ],
      "a": 1,
      "why": "B2 relatif menjadi B3, sedangkan $E$1 terkunci."
     },
     {
      "q": "Tombol untuk berganti jenis referensi dengan cepat?",
      "o": [
       "F2",
       "F4",
       "F9",
       "F11"
      ],
      "a": 1,
      "why": "F4 memutar jenis referensi."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Rumus dasar Excel SUM AVERAGE MAX MIN",
      "url": "https://www.youtube.com/results?search_query=rumus%20dasar%20excel%20sum%20average%20max%20min%20count"
     },
     {
      "type": "doc",
      "title": "Exceljet: SUM",
      "url": "https://exceljet.net/functions/sum-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: COUNTA",
      "url": "https://exceljet.net/functions/counta-function"
     },
     {
      "type": "yt",
      "title": "Referensi absolut dan relatif Excel",
      "url": "https://www.youtube.com/results?search_query=referensi%20absolut%20relatif%20excel%20tanda%20dolar"
     },
     {
      "type": "doc",
      "title": "Exceljet: Absolute reference",
      "url": "https://exceljet.net/glossary/absolute-reference"
     }
    ],
    "id": "x-2"
   },
   {
    "title": "Format, Sort, Filter & Conditional Formatting",
    "summary": "Laporan rapi, menyaring data, dan menyorot pola.",
    "dur": 45,
    "content": "<h3 class=\"part\">Bagian 1: Format Sel & Tampilan Profesional</h3>\n<p>Format mengubah <b>tampilan</b>, bukan nilai. Angka 0,25 bisa tampil sebagai 25% tanpa berubah nilainya.</p>\n<h4>Format angka penting (Ctrl+1)</h4>\n<ul>\n<li><b>Number</b>: atur desimal dan pemisah ribuan.</li>\n<li><b>Currency / Accounting</b>: Rp 1.500.000.</li>\n<li><b>Percentage</b>: 0,15 → 15%.</li>\n<li><b>Date</b>: dd/mm/yyyy, dd mmm yyyy, dll.</li>\n<li><b>Custom</b>: contoh <code>#,##0,,\"jt\"</code> menampilkan 2500000 sebagai <i>3jt</i>.</li>\n</ul>\n<h4>Membuat laporan mudah dibaca</h4>\n<ol>\n<li>Header tebal dengan warna latar netral.</li>\n<li>Angka rata kanan, teks rata kiri.</li>\n<li><b>View → Freeze Panes</b> agar header tetap terlihat saat scroll.</li>\n<li>Hindari <i>Merge Cells</i> di area data karena menyulitkan sort & filter. Gunakan <b>Center Across Selection</b>.</li>\n<li>Gunakan warna seperlunya: 1 warna aksen untuk menyorot.</li>\n</ol>\n<div class=\"tip\">💡 Format Painter (ikon kuas): klik dua kali untuk menyalin format ke banyak tempat sekaligus.</div>\n<h3 class=\"part\">Bagian 2: Sort & Filter</h3>\n<p><b>Sort</b> mengurutkan, <b>Filter</b> menyembunyikan baris yang tidak memenuhi kriteria.</p>\n<h4>Sort bertingkat</h4>\n<p>Data → Sort → Add Level. Contoh: urutkan <i>Wilayah</i> A→Z, lalu <i>Penjualan</i> terbesar→terkecil.</p>\n<h4>Filter</h4>\n<ul>\n<li>Aktifkan dengan <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>.</li>\n<li>Filter teks: <i>contains</i>, <i>begins with</i>.</li>\n<li>Filter angka: <i>Top 10</i>, <i>greater than</i>, <i>above average</i>.</li>\n<li>Filter tanggal: <i>this month</i>, <i>last quarter</i>.</li>\n</ul>\n<div class=\"tip\">💡 Gunakan <code>=SUBTOTAL(9,B2:B100)</code> agar total hanya menghitung baris yang terlihat setelah filter. Angka 9 = SUM, 1 = AVERAGE, 3 = COUNTA.</div>\n<div class=\"warn\">⚠️ Selalu blok seluruh tabel sebelum sort. Jika hanya satu kolom yang diurutkan, data antar kolom akan tertukar.</div>\n<h3 class=\"part\">Bagian 3: Conditional Formatting</h3>\n<p>Home → Conditional Formatting membuat data \"bicara\" tanpa grafik.</p>\n<ul>\n<li><b>Highlight Cells Rules</b>: lebih besar dari, berisi teks, duplikat.</li>\n<li><b>Top/Bottom</b>: 10 teratas, di atas rata-rata.</li>\n<li><b>Data Bars</b>: batang di dalam sel.</li>\n<li><b>Color Scales</b>: heatmap (merah–kuning–hijau).</li>\n<li><b>Icon Sets</b>: panah/lampu lalu lintas.</li>\n</ul>\n<h4>Rule dengan rumus (paling kuat)</h4>\n<p>Blok A2:F100 → New Rule → <i>Use a formula</i>:</p>\n<div class=\"formula\">=$F2<0</div>\n<p>Seluruh baris dengan profit negatif akan tersorot. Kuncinya <code>$</code> di kolom dan baris relatif.</p>\n<div class=\"formula\">=$C2=MAX($C$2:$C$100)</div>\n<p>Menyorot baris dengan penjualan tertinggi.</p>\n<div class=\"tip\">💡 Jangan berlebihan. Satu atau dua aturan yang bermakna lebih baik daripada lembar penuh warna.</div>",
    "practice": [
     "Format kolom harga menjadi Rupiah tanpa desimal.",
     "Buat kolom 'Margin' dalam persen 1 desimal.",
     "Bekukan baris header dan kolom pertama.",
     "Urutkan data penjualan per wilayah lalu per nilai terbesar.",
     "Filter 5 produk dengan penjualan tertinggi.",
     "Bandingkan hasil SUM vs SUBTOTAL(9,…) saat filter aktif."
    ],
    "quiz": [
     {
      "q": "Sel berisi 0,2 diberi format Percentage. Nilai aslinya menjadi…",
      "o": [
       "20",
       "0,2",
       "2",
       "20%"
      ],
      "a": 1,
      "why": "Format hanya mengubah tampilan; nilainya tetap 0,2."
     },
     {
      "q": "Mengapa Merge Cells sebaiknya dihindari di area data?",
      "o": [
       "Membuat file berat",
       "Mengganggu sort/filter & rumus",
       "Tidak bisa diberi warna",
       "Tidak bisa dicetak"
      ],
      "a": 1,
      "why": "Sel gabungan menyulitkan sorting, filtering, dan seleksi."
     },
     {
      "q": "Fungsi yang mengabaikan baris tersembunyi oleh filter?",
      "o": [
       "SUM",
       "SUMIF",
       "SUBTOTAL",
       "TOTAL"
      ],
      "a": 2,
      "why": "SUBTOTAL (dan AGGREGATE) hanya menghitung baris terlihat."
     },
     {
      "q": "Shortcut mengaktifkan filter?",
      "o": [
       "Ctrl+Shift+L",
       "Ctrl+F",
       "Alt+F",
       "Ctrl+T"
      ],
      "a": 0,
      "why": "Ctrl+Shift+L mengaktifkan/mematikan filter."
     },
     {
      "q": "Agar seluruh baris tersorot berdasarkan kolom F, rumus yang tepat…",
      "o": [
       "=F2<0",
       "=$F$2<0",
       "=$F2<0",
       "=F$2<0"
      ],
      "a": 2,
      "why": "Kolom dikunci ($F), baris relatif (2) agar mengikuti tiap baris."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Format cells Excel Rupiah & custom format",
      "url": "https://www.youtube.com/results?search_query=custom%20number%20format%20excel%20rupiah"
     },
     {
      "type": "doc",
      "title": "Exceljet: Custom number formats",
      "url": "https://exceljet.net/articles/custom-number-formats"
     },
     {
      "type": "yt",
      "title": "Sort dan filter Excel lengkap",
      "url": "https://www.youtube.com/results?search_query=sort%20filter%20excel%20lengkap%20pemula"
     },
     {
      "type": "doc",
      "title": "Exceljet: SUBTOTAL",
      "url": "https://exceljet.net/functions/subtotal-function"
     },
     {
      "type": "yt",
      "title": "Conditional formatting rumus Excel",
      "url": "https://www.youtube.com/results?search_query=conditional%20formatting%20excel%20formula%20highlight%20row"
     },
     {
      "type": "doc",
      "title": "Exceljet: Conditional formatting with formulas",
      "url": "https://exceljet.net/articles/conditional-formatting-with-formulas"
     }
    ],
    "id": "x-3"
   },
   {
    "title": "Logika & Agregasi Bersyarat",
    "summary": "IF/IFS/IFERROR dan SUMIFS/COUNTIFS/AVERAGEIFS.",
    "dur": 50,
    "content": "<h3 class=\"part\">Bagian 1: Logika: IF, AND, OR, IFS</h3>\n<div class=\"formula\">=IF(kondisi, nilai_jika_benar, nilai_jika_salah)</div>\n<p>Contoh: status lulus jika nilai ≥ 75.</p>\n<div class=\"formula\">=IF(B2>=75,\"Lulus\",\"Remedial\")</div>\n<h4>Kondisi ganda</h4>\n<ul>\n<li><code>AND</code>: semua syarat harus benar → <code>=IF(AND(B2>=75,C2>=80),\"Lulus\",\"Tidak\")</code></li>\n<li><code>OR</code>: salah satu cukup → <code>=IF(OR(D2=\"VIP\",E2>1000000),\"Diskon\",\"Normal\")</code></li>\n</ul>\n<h4>IF bertingkat vs IFS</h4>\n<div class=\"formula\">=IF(B2>=90,\"A\",IF(B2>=80,\"B\",IF(B2>=70,\"C\",\"D\")))</div>\n<p>Lebih rapi dengan <code>IFS</code> (Excel 2019+):</p>\n<div class=\"formula\">=IFS(B2>=90,\"A\",B2>=80,\"B\",B2>=70,\"C\",TRUE,\"D\")</div>\n<h4>Menangani error</h4>\n<div class=\"formula\">=IFERROR(B2/C2,0)</div>\n<p>Jika pembagian menghasilkan error (misalnya #DIV/0!), tampilkan 0.</p>\n<div class=\"tip\">💡 Kondisi paling ketat ditulis lebih dulu. IF berhenti di kondisi pertama yang benar.</div>\n<h3 class=\"part\">Bagian 2: Agregasi Bersyarat: COUNTIF(S), SUMIF(S), AVERAGEIF(S)</h3>\n<div class=\"formula\">=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)</div>\n<table class=\"tbl sheet\"><tr><th></th><th>A</th><th>B</th><th>C</th></tr>\n<tr><th>1</th><td><b>Wilayah</b></td><td><b>Produk</b></td><td><b>Omzet</b></td></tr>\n<tr><th>2</th><td>Jawa</td><td>Kopi</td><td>500</td></tr>\n<tr><th>3</th><td>Bali</td><td>Teh</td><td>300</td></tr>\n<tr><th>4</th><td>Jawa</td><td>Teh</td><td>200</td></tr>\n<tr><th>5</th><td>Jawa</td><td>Kopi</td><td>400</td></tr></table>\n<ul>\n<li>Jumlah transaksi Jawa: <code>=COUNTIF(A2:A5,\"Jawa\")</code> → 3</li>\n<li>Omzet Jawa: <code>=SUMIF(A2:A5,\"Jawa\",C2:C5)</code> → 1100</li>\n<li>Omzet Kopi di Jawa: <code>=SUMIFS(C2:C5,A2:A5,\"Jawa\",B2:B5,\"Kopi\")</code> → 900</li>\n<li>Omzet &gt; 300: <code>=SUMIF(C2:C5,\"&gt;300\")</code> → 900</li>\n</ul>\n<h4>Kriteria dari sel</h4>\n<div class=\"formula\">=SUMIFS(C:C,A:A,F2,C:C,\">=\"&G2)</div>\n<p>Operator digabung dengan sel memakai <code>&amp;</code>.</p>\n<h4>Wildcard</h4>\n<p><code>\"*kopi*\"</code> = mengandung kata kopi, <code>\"K*\"</code> = diawali K, <code>\"?\"</code> = satu karakter apa saja.</p>\n<div class=\"tip\">💡 Hafalkan SUMIFS (yang ada \"S\"-nya). SUMIFS bisa menangani 1 kriteria juga, dan urutan argumennya konsisten dengan COUNTIFS & AVERAGEIFS.</div>",
    "practice": [
     "Beri grade A/B/C/D untuk 20 nilai siswa memakai IFS.",
     "Tandai pelanggan 'Prioritas' jika belanja > 5 juta ATAU transaksi > 10 kali.",
     "Hitung rasio konversi dan bungkus dengan IFERROR.",
     "Buat tabel ringkasan omzet per wilayah × produk memakai SUMIFS.",
     "Hitung jumlah transaksi bulan ini dengan kriteria tanggal >= & <=.",
     "Hitung rata-rata nilai transaksi untuk pelanggan yang namanya mengandung 'PT'."
    ],
    "quiz": [
     {
      "q": "=IF(AND(5>3,2>4),\"Ya\",\"Tidak\") menghasilkan…",
      "o": [
       "Ya",
       "Tidak",
       "#VALUE!",
       "TRUE"
      ],
      "a": 1,
      "why": "2>4 salah, sehingga AND bernilai FALSE."
     },
     {
      "q": "Fungsi untuk menangkap error dan menggantinya?",
      "o": [
       "ISERROR",
       "IFERROR",
       "ERROR.TYPE",
       "IFNA saja"
      ],
      "a": 1,
      "why": "IFERROR(value, value_if_error)."
     },
     {
      "q": "Argumen pertama SUMIFS adalah…",
      "o": [
       "criteria_range",
       "criteria",
       "sum_range",
       "range"
      ],
      "a": 2,
      "why": "SUMIFS diawali sum_range, berbeda dengan SUMIF."
     },
     {
      "q": "Kriteria 'lebih besar dari nilai di G2' ditulis…",
      "o": [
       "\">G2\"",
       "\">\"&G2",
       ">G2",
       "\"&>G2\""
      ],
      "a": 1,
      "why": "Operator sebagai teks lalu digabung dengan & ke referensi sel."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Rumus IF AND OR Excel",
      "url": "https://www.youtube.com/results?search_query=rumus%20if%20and%20or%20excel%20bertingkat"
     },
     {
      "type": "doc",
      "title": "Exceljet: IF",
      "url": "https://exceljet.net/functions/if-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: IFS",
      "url": "https://exceljet.net/functions/ifs-function"
     },
     {
      "type": "yt",
      "title": "SUMIFS COUNTIFS Excel",
      "url": "https://www.youtube.com/results?search_query=sumifs%20countifs%20excel%20tutorial%20indonesia"
     },
     {
      "type": "doc",
      "title": "Exceljet: SUMIFS",
      "url": "https://exceljet.net/functions/sumifs-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: COUNTIFS",
      "url": "https://exceljet.net/functions/countifs-function"
     }
    ],
    "id": "x-4"
   },
   {
    "title": "Fungsi Teks & Tanggal",
    "summary": "Membersihkan teks dan mengolah tanggal untuk analisis.",
    "dur": 45,
    "content": "<h3 class=\"part\">Bagian 1: Fungsi Teks untuk Membersihkan Data</h3>\n<p>Data mentah sering berantakan: spasi ganda, huruf tak seragam, kode yang perlu dipecah. Fungsi teks adalah alat pembersihnya.</p>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>\n<tr><td><code>LEFT</code></td><td><code>=LEFT(\"JKT-0012\",3)</code></td><td>JKT</td></tr>\n<tr><td><code>RIGHT</code></td><td><code>=RIGHT(\"JKT-0012\",4)</code></td><td>0012</td></tr>\n<tr><td><code>MID</code></td><td><code>=MID(\"INV2026110\",4,4)</code></td><td>2026</td></tr>\n<tr><td><code>LEN</code></td><td><code>=LEN(\"Data\")</code></td><td>4</td></tr>\n<tr><td><code>TRIM</code></td><td><code>=TRIM(\"  budi   santoso \")</code></td><td>budi santoso</td></tr>\n<tr><td><code>PROPER</code></td><td><code>=PROPER(\"budi santoso\")</code></td><td>Budi Santoso</td></tr>\n<tr><td><code>UPPER/LOWER</code></td><td><code>=UPPER(\"jkt\")</code></td><td>JKT</td></tr>\n<tr><td><code>SUBSTITUTE</code></td><td><code>=SUBSTITUTE(\"08-12-34\",\"-\",\"\")</code></td><td>081234</td></tr>\n<tr><td><code>FIND/SEARCH</code></td><td><code>=FIND(\"@\",\"a@b.com\")</code></td><td>2</td></tr>\n<tr><td><code>TEXTJOIN</code></td><td><code>=TEXTJOIN(\", \",TRUE,A2:A5)</code></td><td>gabung dengan koma</td></tr>\n<tr><td><code>TEXTBEFORE</code>*</td><td><code>=TEXTBEFORE(\"budi@mail.com\",\"@\")</code></td><td>budi</td></tr>\n<tr><td><code>TEXTSPLIT</code>*</td><td><code>=TEXTSPLIT(\"a,b,c\",\",\")</code></td><td>a | b | c</td></tr></table>\n<p class=\"muted\">* Tersedia di Excel 365.</p>\n<h4>Kombinasi: ambil username email (versi lama)</h4>\n<div class=\"formula\">=LEFT(A2,FIND(\"@\",A2)-1)</div>\n<h4>Gabung teks dan angka berformat</h4>\n<div class=\"formula\">=\"Total: Rp \"&TEXT(B2,\"#,##0\")</div>\n<div class=\"tip\">💡 Kombo pembersih paling sering dipakai: <code>=PROPER(TRIM(A2))</code>.</div>\n<h3 class=\"part\">Bagian 2: Fungsi Tanggal & Waktu</h3>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>\n<tr><td><code>TODAY()</code> / <code>NOW()</code></td><td>Tanggal / waktu sekarang</td><td><code>=TODAY()</code></td></tr>\n<tr><td><code>YEAR, MONTH, DAY</code></td><td>Ambil komponen</td><td><code>=MONTH(A2)</code></td></tr>\n<tr><td><code>DATE</code></td><td>Susun tanggal</td><td><code>=DATE(2026,11,16)</code></td></tr>\n<tr><td><code>EOMONTH</code></td><td>Akhir bulan</td><td><code>=EOMONTH(A2,0)</code></td></tr>\n<tr><td><code>EDATE</code></td><td>Tambah n bulan</td><td><code>=EDATE(A2,3)</code></td></tr>\n<tr><td><code>DATEDIF</code></td><td>Selisih tahun/bulan/hari</td><td><code>=DATEDIF(A2,TODAY(),\"y\")</code></td></tr>\n<tr><td><code>NETWORKDAYS</code></td><td>Hari kerja</td><td><code>=NETWORKDAYS(A2,B2,Libur)</code></td></tr>\n<tr><td><code>WEEKDAY</code></td><td>Hari ke- (1–7)</td><td><code>=WEEKDAY(A2,2)</code></td></tr>\n<tr><td><code>TEXT</code></td><td>Nama hari/bulan</td><td><code>=TEXT(A2,\"mmmm yyyy\")</code></td></tr></table>\n<h4>Kasus nyata data analyst</h4>\n<ul>\n<li><b>Umur pelanggan</b>: <code>=DATEDIF(TglLahir,TODAY(),\"y\")</code></li>\n<li><b>Kolom bulan untuk grouping</b>: <code>=TEXT(A2,\"yyyy-mm\")</code></li>\n<li><b>Kuartal</b>: <code>=\"Q\"&ROUNDUP(MONTH(A2)/3,0)</code></li>\n<li><b>Lama pengiriman (hari kerja)</b>: <code>=NETWORKDAYS(TglPesan,TglKirim)</code></li>\n<li><b>Weekend?</b> <code>=IF(WEEKDAY(A2,2)>5,\"Weekend\",\"Weekday\")</code></li>\n</ul>\n<div class=\"tip\">💡 <kbd>Ctrl</kbd>+<kbd>;</kbd> memasukkan tanggal hari ini sebagai nilai statis (tidak berubah besok).</div>",
    "practice": [
     "Bersihkan 20 nama pelanggan yang spasi & kapitalnya berantakan.",
     "Pisahkan kode 'JKT-2026-0012' menjadi kota, tahun, nomor.",
     "Ambil domain dari kolom email (setelah @).",
     "Dari kolom tanggal transaksi, buat kolom Tahun, Bulan, Kuartal, Nama Hari.",
     "Hitung umur 15 karyawan dan masa kerja dalam bulan.",
     "Hitung SLA pengiriman dalam hari kerja."
    ],
    "quiz": [
     {
      "q": "Fungsi untuk menghapus spasi berlebih?",
      "o": [
       "CLEAN",
       "TRIM",
       "STRIP",
       "SUBSTITUTE"
      ],
      "a": 1,
      "why": "TRIM menghapus spasi di awal/akhir & spasi ganda di tengah."
     },
     {
      "q": "=MID(\"ANALISIS\",3,3) menghasilkan…",
      "o": [
       "ANA",
       "ALI",
       "NAL",
       "SIS"
      ],
      "a": 1,
      "why": "Mulai karakter ke-3 (A), ambil 3 karakter: A-L-I."
     },
     {
      "q": "Rumus untuk mendapatkan tanggal terakhir di bulan yang sama?",
      "o": [
       "=EDATE(A2,0)",
       "=EOMONTH(A2,0)",
       "=ENDMONTH(A2)",
       "=DATE(A2,12,31)"
      ],
      "a": 1,
      "why": "EOMONTH(tanggal,0) = akhir bulan tersebut."
     },
     {
      "q": "WEEKDAY(A2,2) bernilai 6 berarti…",
      "o": [
       "Jumat",
       "Sabtu",
       "Minggu",
       "Senin"
      ],
      "a": 1,
      "why": "Mode 2: Senin=1 … Sabtu=6, Minggu=7."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Fungsi teks Excel LEFT MID RIGHT",
      "url": "https://www.youtube.com/results?search_query=fungsi%20teks%20excel%20left%20mid%20right%20trim"
     },
     {
      "type": "doc",
      "title": "Exceljet: TEXTBEFORE",
      "url": "https://exceljet.net/functions/textbefore-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: TEXTJOIN",
      "url": "https://exceljet.net/functions/textjoin-function"
     },
     {
      "type": "yt",
      "title": "Rumus tanggal Excel DATEDIF EOMONTH",
      "url": "https://www.youtube.com/results?search_query=rumus%20tanggal%20excel%20datedif%20eomonth%20networkdays"
     },
     {
      "type": "doc",
      "title": "Exceljet: EOMONTH",
      "url": "https://exceljet.net/functions/eomonth-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: NETWORKDAYS",
      "url": "https://exceljet.net/functions/networkdays-function"
     }
    ],
    "id": "x-5"
   },
   {
    "title": "Lookup: VLOOKUP, INDEX-MATCH, XLOOKUP",
    "summary": "Mengambil data dari tabel lain, dari yang klasik ke modern.",
    "dur": 70,
    "content": "<h3 class=\"part\">Bagian 1: VLOOKUP & HLOOKUP</h3>\n<div class=\"formula\">=VLOOKUP(nilai_dicari, tabel, nomor_kolom, FALSE)</div>\n<p>Tabel referensi produk di sheet <i>Master</i> (A: Kode, B: Nama, C: Harga). Di sheet transaksi kita punya kode di A2:</p>\n<div class=\"formula\">=VLOOKUP(A2,Master!$A$2:$C$100,3,FALSE)</div>\n<p>Artinya: cari A2 di kolom pertama tabel, ambil kolom ke-3 (Harga), dengan pencocokan <b>persis</b> (FALSE).</p>\n<h4>Approximate match (TRUE)</h4>\n<p>Berguna untuk tabel rentang, misalnya komisi berdasarkan omzet. Kolom pertama <b>harus terurut naik</b>.</p>\n<table class=\"tbl\"><tr><th>Omzet min</th><th>Komisi</th></tr><tr><td>0</td><td>2%</td></tr><tr><td>10.000.000</td><td>5%</td></tr><tr><td>50.000.000</td><td>8%</td></tr></table>\n<div class=\"formula\">=VLOOKUP(B2,TabelKomisi,2,TRUE)</div>\n<h4>Keterbatasan VLOOKUP</h4>\n<ul><li>Hanya bisa mencari ke <b>kanan</b>.</li><li>Nomor kolom statis: jika ada kolom baru disisipkan, hasilnya salah.</li><li>Lebih lambat di data besar.</li></ul>\n<p>Solusinya: <b>INDEX-MATCH</b> atau <b>XLOOKUP</b> (Bagian 2 & 3 di bawah).</p>\n<div class=\"warn\">⚠️ Error #N/A = data tidak ditemukan. Periksa spasi tersembunyi (TRIM) atau beda tipe data (angka vs teks).</div>\n<h3 class=\"part\">Bagian 2: INDEX + MATCH</h3>\n<p><code>MATCH</code> mencari <b>posisi</b>, <code>INDEX</code> mengambil <b>nilai</b> di posisi itu.</p>\n<div class=\"formula\">=INDEX(kolom_hasil, MATCH(nilai_dicari, kolom_kunci, 0))</div>\n<div class=\"formula\">=INDEX(Master!$A:$A, MATCH(E2, Master!$C:$C, 0))</div>\n<p>Contoh di atas mencari ke <b>kiri</b>: kunci di kolom C, hasil di kolom A. Hal ini tidak bisa dilakukan VLOOKUP.</p>\n<h4>Lookup dua arah (baris & kolom)</h4>\n<table class=\"tbl sheet\"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr>\n<tr><th>1</th><td></td><td><b>Jan</b></td><td><b>Feb</b></td><td><b>Mar</b></td></tr>\n<tr><th>2</th><td>Kopi</td><td>10</td><td>12</td><td>15</td></tr>\n<tr><th>3</th><td>Teh</td><td>8</td><td>9</td><td>11</td></tr></table>\n<div class=\"formula\">=INDEX(B2:D3, MATCH(\"Teh\",A2:A3,0), MATCH(\"Feb\",B1:D1,0))</div>\n<p>Hasil: 9.</p>\n<h4>Lookup multi-kriteria</h4>\n<div class=\"formula\">=INDEX(C2:C100, MATCH(1, (A2:A100=G1)*(B2:B100=G2), 0))</div>\n<p>Perkalian array bernilai 1 hanya ketika kedua syarat benar. (Di Excel lama, akhiri dengan Ctrl+Shift+Enter.)</p>\n<h3 class=\"part\">Bagian 3: XLOOKUP (Lookup Modern)</h3>\n<div class=\"formula\">=XLOOKUP(dicari, kolom_cari, kolom_hasil, [jika_tidak_ada], [mode_cocok], [mode_cari])</div>\n<div class=\"formula\">=XLOOKUP(A2, Master[Kode], Master[Harga], \"Tidak ada\")</div>\n<h4>Keunggulan</h4>\n<ul>\n<li>Default <b>exact match</b>, jadi tidak perlu FALSE.</li>\n<li>Bisa ke kiri/kanan/atas/bawah.</li>\n<li>Argumen <i>if_not_found</i> bawaan, tanpa IFERROR.</li>\n<li>Mengembalikan <b>banyak kolom</b> sekaligus: <code>=XLOOKUP(A2,Master[Kode],Master[[Nama]:[Harga]])</code></li>\n<li><b>Cari dari bawah</b> (transaksi terakhir): mode_cari = -1.</li>\n</ul>\n<div class=\"formula\">=XLOOKUP(G2, Transaksi[Pelanggan], Transaksi[Tanggal], , 0, -1)</div>\n<p>Mengambil tanggal transaksi <b>terakhir</b> seorang pelanggan.</p>\n<h4>Multi-kriteria</h4>\n<div class=\"formula\">=XLOOKUP(1, (A:A=G1)*(B:B=G2), C:C)</div>\n<div class=\"tip\">💡 Pakai Google Sheets? XLOOKUP juga tersedia di sana.</div>",
    "practice": [
     "Buat sheet Master Produk & sheet Transaksi, lalu ambil Nama & Harga dengan VLOOKUP.",
     "Buat tabel komisi bertingkat dengan approximate match.",
     "Bungkus VLOOKUP dengan IFERROR agar #N/A menjadi 'Tidak ditemukan'.",
     "Ganti semua VLOOKUP dari pelajaran sebelumnya dengan INDEX-MATCH.",
     "Buat pencarian dua arah: pilih produk & bulan lewat drop-down.",
     "Cari harga berdasarkan Produk + Ukuran (2 kriteria)."
    ],
    "quiz": [
     {
      "q": "Argumen ke-4 FALSE pada VLOOKUP berarti…",
      "o": [
       "Cari dari bawah",
       "Exact match",
       "Approximate match",
       "Abaikan huruf besar"
      ],
      "a": 1,
      "why": "FALSE/0 = pencocokan persis."
     },
     {
      "q": "Kelemahan utama VLOOKUP?",
      "o": [
       "Tidak bisa beda sheet",
       "Tidak bisa mencari ke kiri",
       "Hanya untuk angka",
       "Maks 100 baris"
      ],
      "a": 1,
      "why": "Kolom kunci harus di paling kiri tabel."
     },
     {
      "q": "Argumen ke-3 MATCH bernilai 0 berarti…",
      "o": [
       "Approximate",
       "Exact match",
       "Cari dari bawah",
       "Wildcard"
      ],
      "a": 1,
      "why": "0 = pencocokan persis."
     },
     {
      "q": "Keunggulan INDEX-MATCH dibanding VLOOKUP?",
      "o": [
       "Lebih pendek",
       "Bisa mencari ke kiri & tahan sisip kolom",
       "Otomatis menampilkan grafik",
       "Tidak perlu tabel"
      ],
      "a": 1,
      "why": "Kolom hasil & kunci terpisah, jadi arah bebas dan tidak bergantung nomor kolom."
     },
     {
      "q": "Default mode pencocokan XLOOKUP adalah…",
      "o": [
       "Approximate",
       "Exact",
       "Wildcard",
       "Binary"
      ],
      "a": 1,
      "why": "XLOOKUP default exact match (0)."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "VLOOKUP Excel dari nol",
      "url": "https://www.youtube.com/results?search_query=vlookup%20excel%20tutorial%20indonesia%20pemula"
     },
     {
      "type": "doc",
      "title": "Exceljet: VLOOKUP",
      "url": "https://exceljet.net/functions/vlookup-function"
     },
     {
      "type": "yt",
      "title": "INDEX MATCH Excel",
      "url": "https://www.youtube.com/results?search_query=index%20match%20excel%20tutorial%20indonesia"
     },
     {
      "type": "doc",
      "title": "Exceljet: INDEX and MATCH",
      "url": "https://exceljet.net/articles/index-and-match"
     },
     {
      "type": "yt",
      "title": "XLOOKUP Excel lengkap",
      "url": "https://www.youtube.com/results?search_query=xlookup%20excel%20tutorial%20lengkap"
     },
     {
      "type": "doc",
      "title": "Exceljet: XLOOKUP",
      "url": "https://exceljet.net/functions/xlookup-function"
     }
    ],
    "id": "x-6"
   },
   {
    "title": "Excel Table, Validasi Data & PivotTable",
    "summary": "Struktur data yang benar, input bersih, dan ringkasan cepat dengan Pivot.",
    "dur": 65,
    "content": "<h3 class=\"part\">Bagian 1: Excel Table & Named Range</h3>\n<p>Blok data → <kbd>Ctrl</kbd>+<kbd>T</kbd>. Data Anda kini menjadi <b>Excel Table</b>.</p>\n<h4>Kenapa wajib?</h4>\n<ul>\n<li>Otomatis meluas saat baris baru ditambah, sehingga rumus, Pivot, dan grafik ikut ter-update.</li>\n<li><b>Structured reference</b>: <code>=SUM(Penjualan[Omzet])</code> jauh lebih jelas daripada <code>=SUM(D2:D5000)</code>.</li>\n<li>Rumus di kolom baru langsung terisi ke seluruh baris.</li>\n<li>Total Row bawaan (Table Design → Total Row).</li>\n<li>Slicer untuk filter interaktif.</li>\n</ul>\n<div class=\"formula\">=[@Harga]*[@Qty]</div>\n<p><code>[@Kolom]</code> = nilai di baris yang sama.</p>\n<h4>Named Range</h4>\n<p>Formulas → Define Name. Misalnya sel E1 diberi nama <code>TarifPajak</code>, maka rumus menjadi <code>=B2*TarifPajak</code>.</p>\n<div class=\"tip\">💡 Beri nama tabel yang jelas (Table Design → Table Name): <code>tblPenjualan</code>, <code>tblProduk</code>.</div>\n<h3 class=\"part\">Bagian 2: Data Validation & Drop-down</h3>\n<p>Data → Data Validation membatasi apa yang boleh diketik.</p>\n<ul>\n<li><b>List</b>: drop-down, sumber dari range <code>=$H$2:$H$6</code> atau teks <code>Jawa,Bali,Sumatra</code>.</li>\n<li><b>Whole number / Decimal</b>: misalnya qty antara 1–1000.</li>\n<li><b>Date</b>: hanya tanggal tahun ini.</li>\n<li><b>Text length</b>: NIK harus 16 karakter.</li>\n<li><b>Custom</b>: rumus bebas, misalnya tidak boleh duplikat <code>=COUNTIF($A:$A,A2)=1</code>.</li>\n</ul>\n<h4>Drop-down bertingkat (dependent)</h4>\n<p>Pilih Provinsi → drop-down Kota berubah. Di Excel 365:</p>\n<div class=\"formula\">=FILTER(TabelKota[Kota],TabelKota[Provinsi]=A2)</div>\n<p>Hasil FILTER ditaruh di kolom bantu, lalu list validasi mengacu ke <code>=$J$2#</code>.</p>\n<div class=\"tip\">💡 Isi tab <i>Input Message</i> dan <i>Error Alert</i> agar pengguna tahu aturan input.</div>\n<h3 class=\"part\">Bagian 3: PivotTable: Meringkas Ribuan Baris dalam Detik</h3>\n<p>Insert → PivotTable (pastikan data berbentuk Table). Seret field ke 4 area:</p>\n<table class=\"tbl\"><tr><th>Area</th><th>Isi</th><th>Contoh</th></tr>\n<tr><td>Rows</td><td>Kategori di baris</td><td>Wilayah</td></tr>\n<tr><td>Columns</td><td>Kategori di kolom</td><td>Bulan</td></tr>\n<tr><td>Values</td><td>Angka yang diringkas</td><td>Sum of Omzet</td></tr>\n<tr><td>Filters</td><td>Filter global</td><td>Tahun</td></tr></table>\n<h4>Teknik penting</h4>\n<ul>\n<li><b>Summarize Values By</b>: Sum, Count, Average, Max, Distinct Count (perlu Data Model).</li>\n<li><b>Show Values As</b>: % of Grand Total, % of Column, Running Total, Difference From (growth MoM).</li>\n<li><b>Group</b> tanggal menjadi Bulan/Kuartal/Tahun; group angka menjadi rentang umur.</li>\n<li><b>Calculated Field</b>: Profit = Omzet − Biaya.</li>\n<li><b>Slicer & Timeline</b> untuk filter interaktif.</li>\n<li><b>Refresh</b> (Alt+F5) setelah data berubah.</li>\n</ul>\n<h4>Pertanyaan bisnis yang bisa dijawab</h4>\n<ol><li>Wilayah mana dengan omzet terbesar?</li><li>Produk apa yang tumbuh paling cepat bulan ini?</li><li>Berapa kontribusi % tiap kategori?</li><li>Hari apa transaksi paling ramai?</li></ol>\n<div class=\"formula\">=GETPIVOTDATA(\"Omzet\",$A$3,\"Wilayah\",\"Jawa\")</div>\n<p>Mengambil angka dari Pivot ke sel lain (berguna untuk dashboard).</p>",
    "practice": [
     "Ubah data penjualan menjadi Table bernama tblPenjualan.",
     "Tambah kolom Total dengan structured reference.",
     "Tambahkan Slicer untuk Wilayah.",
     "Buat drop-down Status: Baru, Proses, Selesai, Batal.",
     "Batasi kolom Qty hanya angka bulat 1–500.",
     "Cegah ID duplikat dengan validasi custom."
    ],
    "quiz": [
     {
      "q": "Shortcut membuat Excel Table?",
      "o": [
       "Ctrl+T",
       "Ctrl+L",
       "Alt+T",
       "Ctrl+Shift+T"
      ],
      "a": 0,
      "why": "Ctrl+T (atau Ctrl+L) membuat Table."
     },
     {
      "q": "[@Qty] dalam rumus Table berarti…",
      "o": [
       "Seluruh kolom Qty",
       "Qty di baris yang sama",
       "Header Qty",
       "Total Qty"
      ],
      "a": 1,
      "why": "@ = this row."
     },
     {
      "q": "Validasi untuk mencegah ID duplikat di kolom A?",
      "o": [
       "=UNIQUE(A:A)",
       "=COUNTIF($A:$A,A2)=1",
       "=A2<>A1",
       "=ISDUP(A2)"
      ],
      "a": 1,
      "why": "Nilai boleh masuk jika hanya muncul satu kali."
     },
     {
      "q": "Untuk melihat kontribusi persen tiap kategori gunakan…",
      "o": [
       "Summarize by Average",
       "Show Values As % of Grand Total",
       "Calculated Item",
       "Group"
      ],
      "a": 1,
      "why": "Show Values As → % of Grand Total."
     },
     {
      "q": "Setelah data sumber berubah, Pivot perlu…",
      "o": [
       "Dibuat ulang",
       "Di-Refresh",
       "Disimpan ulang",
       "Otomatis tanpa apa pun"
      ],
      "a": 1,
      "why": "Pivot memakai cache; perlu Refresh (Alt+F5)."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Excel Table structured reference",
      "url": "https://www.youtube.com/results?search_query=excel%20table%20structured%20references%20tutorial"
     },
     {
      "type": "doc",
      "title": "Exceljet: Excel Tables",
      "url": "https://exceljet.net/articles/excel-tables"
     },
     {
      "type": "yt",
      "title": "Data validation drop down Excel",
      "url": "https://www.youtube.com/results?search_query=data%20validation%20drop%20down%20list%20excel%20bertingkat"
     },
     {
      "type": "doc",
      "title": "Membuat drop-down list (Microsoft)",
      "url": "https://support.microsoft.com/en-us/office/create-a-drop-down-list-7693307a-59ef-400a-b769-c5402dce407b"
     },
     {
      "type": "yt",
      "title": "PivotTable Excel lengkap",
      "url": "https://www.youtube.com/results?search_query=pivot%20table%20excel%20lengkap%20pemula%20sampai%20mahir"
     },
     {
      "type": "doc",
      "title": "Exceljet: Pivot tables",
      "url": "https://exceljet.net/articles/excel-pivot-tables"
     }
    ],
    "id": "x-7"
   },
   {
    "title": "Excel Modern: Dynamic Array, LET & LAMBDA",
    "summary": "FILTER, SORT, UNIQUE, XLOOKUP spill, rumus seperti programmer.",
    "dur": 55,
    "content": "<h3 class=\"part\">Bagian 1: Dynamic Array: FILTER, SORT, UNIQUE, SEQUENCE</h3>\n<p>Di Excel 365, rumus dapat <b>tumpah (spill)</b> ke banyak sel. Referensikan hasilnya dengan <code>#</code>, misalnya <code>=COUNTA(F2#)</code>.</p>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>\n<tr><td><code>UNIQUE</code></td><td><code>=UNIQUE(tbl[Wilayah])</code></td><td>Daftar wilayah unik</td></tr>\n<tr><td><code>SORT</code></td><td><code>=SORT(A2:C100,3,-1)</code></td><td>Urut kolom 3 menurun</td></tr>\n<tr><td><code>SORTBY</code></td><td><code>=SORTBY(tbl[Produk],tbl[Omzet],-1)</code></td><td>Produk urut omzet</td></tr>\n<tr><td><code>FILTER</code></td><td><code>=FILTER(tbl,tbl[Wilayah]=\"Jawa\",\"Kosong\")</code></td><td>Baris wilayah Jawa</td></tr>\n<tr><td><code>SEQUENCE</code></td><td><code>=SEQUENCE(12)</code></td><td>1 sampai 12</td></tr>\n<tr><td><code>TAKE</code>/<code>DROP</code></td><td><code>=TAKE(SORT(...),5)</code></td><td>5 teratas</td></tr>\n<tr><td><code>VSTACK</code>/<code>HSTACK</code></td><td><code>=VSTACK(Jan!A2:C50,Feb!A2:C50)</code></td><td>Gabung tabel</td></tr>\n<tr><td><code>GROUPBY</code>*</td><td><code>=GROUPBY(tbl[Wilayah],tbl[Omzet],SUM)</code></td><td>Ringkasan seperti Pivot</td></tr></table>\n<p class=\"muted\">* GROUPBY & PIVOTBY tersedia di Excel 365 versi terbaru.</p>\n<h4>Contoh: Top 5 produk Jawa</h4>\n<div class=\"formula\">=TAKE(SORT(FILTER(tbl[[Produk]:[Omzet]],tbl[Wilayah]=\"Jawa\"),2,-1),5)</div>\n<h4>FILTER multi-kriteria</h4>\n<div class=\"formula\">=FILTER(tbl,(tbl[Wilayah]=\"Jawa\")*(tbl[Omzet]>1000000))</div>\n<p>Gunakan <code>*</code> untuk AND dan <code>+</code> untuk OR.</p>\n<div class=\"warn\">⚠️ Error #SPILL! artinya area tujuan tidak kosong. Kosongkan sel di bawah/kanannya.</div>\n<h3 class=\"part\">Bagian 2: LET & LAMBDA: Rumus Seperti Programmer</h3>\n<h4>LET: beri nama pada bagian rumus</h4>\n<div class=\"formula\">=LET(omzet, SUM(tbl[Omzet]), biaya, SUM(tbl[Biaya]), (omzet-biaya)/omzet)</div>\n<p>Lebih mudah dibaca dan lebih cepat karena setiap bagian dihitung sekali.</p>\n<h4>LAMBDA: fungsi kustom</h4>\n<p>Formulas → Name Manager → New. Nama: <code>MARGIN</code>, Refers to:</p>\n<div class=\"formula\">=LAMBDA(pendapatan, biaya, IFERROR((pendapatan-biaya)/pendapatan, 0))</div>\n<p>Kini di sheet mana pun cukup tulis <code>=MARGIN(B2,C2)</code>.</p>\n<h4>Fungsi helper LAMBDA</h4>\n<ul>\n<li><code>MAP</code>: terapkan ke setiap elemen.</li>\n<li><code>BYROW</code> / <code>BYCOL</code>: hitung per baris/kolom → <code>=BYROW(B2:M20,LAMBDA(r,SUM(r)))</code></li>\n<li><code>SCAN</code>: running total → <code>=SCAN(0,B2:B13,LAMBDA(a,x,a+x))</code></li>\n<li><code>REDUCE</code>: akumulasi menjadi satu nilai.</li>\n</ul>\n<div class=\"tip\">💡 Mulai dengan LET dulu. Begitu ada rumus panjang yang dipakai berulang, jadikan LAMBDA.</div>",
    "practice": [
     "Buat daftar wilayah unik + total omzet di sebelahnya (UNIQUE + SUMIFS dengan #).",
     "Buat laporan Top 10 pelanggan yang otomatis berubah.",
     "Buat filter interaktif: pilih wilayah di drop-down, tabel hasil FILTER berubah.",
     "Tulis ulang satu rumus panjang Anda dengan LET.",
     "Buat LAMBDA bernama GROWTH(baru, lama).",
     "Buat running total omzet bulanan dengan SCAN."
    ],
    "quiz": [
     {
      "q": "Error #SPILL! biasanya karena…",
      "o": [
       "Rumus salah",
       "Area hasil terhalang data lain",
       "Data terlalu besar",
       "Versi Excel lama"
      ],
      "a": 1,
      "why": "Hasil dynamic array butuh ruang kosong."
     },
     {
      "q": "Dalam FILTER, kondisi OR ditulis dengan…",
      "o": [
       "*",
       "+",
       "&",
       "OR()"
      ],
      "a": 1,
      "why": "Penjumlahan array: bernilai benar jika salah satu kondisi benar."
     },
     {
      "q": "Tempat mendaftarkan LAMBDA agar bisa dipakai seperti fungsi biasa?",
      "o": [
       "Data Validation",
       "Name Manager",
       "Power Query",
       "Macro"
      ],
      "a": 1,
      "why": "LAMBDA disimpan sebagai Named formula di Name Manager."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Dynamic array Excel FILTER SORT UNIQUE",
      "url": "https://www.youtube.com/results?search_query=excel%20dynamic%20arrays%20filter%20sort%20unique%20tutorial"
     },
     {
      "type": "doc",
      "title": "Exceljet: FILTER",
      "url": "https://exceljet.net/functions/filter-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: Dynamic array formulas",
      "url": "https://exceljet.net/articles/dynamic-array-formulas-in-excel"
     },
     {
      "type": "yt",
      "title": "LET LAMBDA Excel",
      "url": "https://www.youtube.com/results?search_query=excel%20let%20lambda%20function%20tutorial"
     },
     {
      "type": "doc",
      "title": "Exceljet: LET",
      "url": "https://exceljet.net/functions/let-function"
     },
     {
      "type": "doc",
      "title": "Exceljet: LAMBDA",
      "url": "https://exceljet.net/functions/lambda-function"
     }
    ],
    "id": "x-8"
   },
   {
    "title": "What-If, Otomasi & Google Sheets",
    "summary": "Goal Seek, Data Table, statistik, macro, dan fungsi khas Google Sheets.",
    "dur": 50,
    "content": "<h3 class=\"part\">Bagian 1: What-If Analysis & Statistik di Excel</h3>\n<h4>Goal Seek</h4>\n<p>Data → What-If → Goal Seek. Misalnya: “Berapa unit yang harus terjual agar profit = 50 juta?”</p>\n<h4>Data Table (sensitivitas)</h4>\n<p>Lihat profit pada kombinasi harga × volume dalam satu tabel.</p>\n<h4>Scenario Manager</h4>\n<p>Simpan skenario Optimis / Normal / Pesimis lalu buat ringkasan.</p>\n<h4>Solver (add-in)</h4>\n<p>Optimasi dengan batasan, misalnya alokasi budget iklan untuk memaksimalkan penjualan.</p>\n<h4>Fungsi statistik penting</h4>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Kegunaan</th></tr>\n<tr><td><code>MEDIAN</code>, <code>MODE.SNGL</code></td><td>Nilai tengah, nilai paling sering</td></tr>\n<tr><td><code>STDEV.S</code>, <code>VAR.S</code></td><td>Sebaran data (sampel)</td></tr>\n<tr><td><code>PERCENTILE.INC</code>, <code>QUARTILE.INC</code></td><td>Persentil, kuartil (deteksi outlier IQR)</td></tr>\n<tr><td><code>CORREL</code></td><td>Korelasi dua variabel</td></tr>\n<tr><td><code>FORECAST.LINEAR</code>, <code>TREND</code></td><td>Prediksi linear</td></tr>\n<tr><td><code>RANK.EQ</code></td><td>Peringkat</td></tr></table>\n<p>Aktifkan <b>Analysis ToolPak</b> (File → Options → Add-ins) untuk statistik deskriptif, histogram, regresi, dan t-test sekali klik.</p>\n<p>Fitur <b>Forecast Sheet</b> (Data → Forecast Sheet) membuat peramalan time series otomatis.</p>\n<h3 class=\"part\">Bagian 2: Otomatisasi: Macro, VBA & Office Scripts (Pengenalan)</h3>\n<p>Aktifkan tab <b>Developer</b> (File → Options → Customize Ribbon). Simpan file sebagai <b>.xlsm</b>.</p>\n<h4>Record Macro</h4>\n<p>Developer → Record Macro → lakukan langkah (format laporan, filter, dll.) → Stop. Jalankan kembali dengan shortcut atau tombol.</p>\n<h4>Contoh VBA sederhana</h4>\n<div class=\"formula\">Sub RapikanLaporan()\n    Range(\"A1\").CurrentRegion.Columns.AutoFit\n    Rows(1).Font.Bold = True\n    ActiveSheet.ListObjects(1).Range.AutoFilter\n    MsgBox \"Laporan rapi!\"\nEnd Sub</div>\n<h4>Office Scripts (Excel Web)</h4>\n<p>Tab Automate di Excel Online memakai TypeScript dan bisa dijadwalkan lewat Power Automate.</p>\n<div class=\"tip\">💡 Untuk data analyst modern, prioritaskan <b>Power Query</b> (cleaning) dan <b>Python</b> (otomasi berat) dibanding VBA. VBA tetap berguna untuk tugas format & laporan rutin.</div>\n<h3 class=\"part\">Bonus: Google Sheets untuk Analis</h3>\n<p>Google Sheets gratis, berbasis web, dan mudah dibagikan. Hampir semua rumus Excel berlaku, ditambah beberapa fungsi khas:</p>\n<table class=\"tbl\"><tr><th>Fungsi</th><th>Kegunaan</th></tr>\n<tr><td><code>QUERY(range, \"select B, sum(D) where C='Jakarta' group by B\")</code></td><td>Menulis query mirip SQL langsung di sheet</td></tr>\n<tr><td><code>IMPORTRANGE(url, \"Sheet1!A:F\")</code></td><td>Mengambil data dari file Sheets lain</td></tr>\n<tr><td><code>ARRAYFORMULA()</code></td><td>Satu rumus untuk seluruh kolom</td></tr>\n<tr><td><code>FILTER, UNIQUE, SORT</code></td><td>Sama seperti dynamic array Excel 365</td></tr>\n<tr><td><code>GOOGLEFINANCE, IMPORTHTML</code></td><td>Mengambil data dari web</td></tr></table>\n<p>Google Sheets juga menjadi sumber data populer untuk <b>Looker Studio</b> (Level 6).</p>",
    "practice": [
     "Gunakan Goal Seek untuk mencari harga jual agar margin 30%.",
     "Buat Data Table 2 variabel: harga × diskon → profit.",
     "Jalankan Descriptive Statistics di Analysis ToolPak.",
     "Hitung korelasi biaya iklan vs penjualan.",
     "Rekam macro yang memformat laporan harian Anda.",
     "Buat tombol (Insert → Shape → Assign Macro)."
    ],
    "quiz": [
     {
      "q": "Tool untuk mencari input agar hasil rumus mencapai target tertentu?",
      "o": [
       "Solver",
       "Goal Seek",
       "Data Table",
       "Forecast"
      ],
      "a": 1,
      "why": "Goal Seek mengubah satu input sampai output mencapai target."
     },
     {
      "q": "CORREL bernilai -0,9 berarti…",
      "o": [
       "Tidak ada hubungan",
       "Hubungan positif kuat",
       "Hubungan negatif kuat",
       "Error"
      ],
      "a": 2,
      "why": "Mendekati -1 = hubungan negatif kuat."
     },
     {
      "q": "Ekstensi file untuk menyimpan workbook berisi macro?",
      "o": [
       ".xlsx",
       ".xlsm",
       ".csv",
       ".xlsb saja"
      ],
      "a": 1,
      "why": ".xlsx tidak bisa menyimpan macro; gunakan .xlsm."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "What-if analysis Excel goal seek data table",
      "url": "https://www.youtube.com/results?search_query=what%20if%20analysis%20excel%20goal%20seek%20data%20table%20scenario"
     },
     {
      "type": "doc",
      "title": "Analysis ToolPak (Microsoft)",
      "url": "https://support.microsoft.com/en-us/office/load-the-analysis-toolpak-in-excel-105b4bd8-b5c4-4e8b-a2a6-29f7e2e8f88b"
     },
     {
      "type": "yt",
      "title": "Macro VBA Excel pemula",
      "url": "https://www.youtube.com/results?search_query=macro%20vba%20excel%20pemula%20indonesia"
     },
     {
      "type": "doc",
      "title": "Office Scripts (Microsoft Learn)",
      "url": "https://learn.microsoft.com/en-us/office/dev/scripts/overview/excel"
     }
    ],
    "id": "x-9"
   }
  ]
 },
 {
  "id": 3,
  "slug": "statistik",
  "title": "Statistik untuk Analis",
  "tag": "Wajib",
  "color": "#7c3aed",
  "desc": "Statistik deskriptif, distribusi, sampling, uji hipotesis & A/B test, korelasi dan regresi.",
  "lessons": [
   {
    "id": "s-1",
    "title": "Statistik Dasar untuk Data Analyst",
    "dur": 40,
    "summary": "Central tendency, sebaran, distribusi, sampling, korelasi vs kausalitas.",
    "content": "\n<h4>Ukuran pemusatan</h4>\n<ul><li><b>Mean</b> (rata-rata): sensitif terhadap outlier.</li><li><b>Median</b>: nilai tengah, lebih tahan outlier (cocok untuk gaji, harga rumah).</li><li><b>Modus</b>: nilai paling sering.</li></ul>\n<h4>Ukuran sebaran</h4>\n<ul><li><b>Range</b> = max − min.</li><li><b>Standar deviasi</b>: rata-rata jarak dari mean.</li><li><b>IQR</b> = Q3 − Q1. Outlier jika &lt; Q1 − 1,5×IQR atau &gt; Q3 + 1,5×IQR.</li></ul>\n<h4>Distribusi normal</h4>\n<p>Aturan 68–95–99,7: ±1, ±2, ±3 standar deviasi dari mean.</p>\n<h4>Sampling & bias</h4>\n<p>Sampel harus mewakili populasi. Waspadai <i>selection bias</i> dan <i>survivorship bias</i>.</p>\n<h4>Korelasi ≠ kausalitas</h4>\n<p>Penjualan es krim berkorelasi dengan kasus tenggelam, tetapi penyebab keduanya adalah cuaca panas (variabel perancu).</p>\n<h4>A/B testing (konsep)</h4>\n<p>Bandingkan dua versi (A vs B) dan uji apakah perbedaannya signifikan secara statistik (p-value &lt; 0,05).</p>",
    "practice": [
     "Hitung mean, median, stdev, Q1, Q3, IQR dari data gaji, lalu deteksi outlier.",
     "Buat histogram distribusi nilai transaksi.",
     "Cari 1 contoh berita yang salah menyimpulkan korelasi sebagai sebab-akibat."
    ],
    "quiz": [
     {
      "q": "Untuk data gaji yang memiliki beberapa nilai sangat tinggi, ukuran pusat terbaik…",
      "o": [
       "Mean",
       "Median",
       "Max",
       "Range"
      ],
      "a": 1,
      "why": "Median tidak terpengaruh outlier ekstrem."
     },
     {
      "q": "Batas atas outlier metode IQR adalah…",
      "o": [
       "Q3 + IQR",
       "Q3 + 1,5×IQR",
       "Mean + 1 SD",
       "Q2 × 2"
      ],
      "a": 1,
      "why": "Rumus Tukey: Q3 + 1,5×IQR."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Khan Academy — Statistics & Probability",
      "url": "https://www.khanacademy.org/math/statistics-probability"
     },
     {
      "type": "yt",
      "title": "StatQuest — statistik dijelaskan sederhana",
      "url": "https://www.youtube.com/results?search_query=statquest%20statistics%20fundamentals"
     }
    ]
   },
   {
    "id": "s-2",
    "title": "Distribusi & Probabilitas",
    "dur": 30,
    "summary": "Distribusi normal, skewness, z-score, binomial, dan Central Limit Theorem.",
    "content": "\n<h4>Bentuk distribusi</h4>\n<ul>\n<li><b>Normal (simetris)</b>: mean ≈ median. Contoh: tinggi badan.</li>\n<li><b>Right-skewed (miring kanan)</b>: ekor panjang ke kanan, mean &gt; median. Contoh: pendapatan, nilai order, durasi sesi. <b>Sangat umum di data bisnis.</b></li>\n<li><b>Left-skewed</b>: mean &lt; median. Contoh: nilai ujian yang mudah.</li>\n<li><b>Bimodal</b>: dua puncak, sering tanda ada dua kelompok berbeda dalam data.</li>\n</ul>\n<div class=\"tip\">💡 Selalu lihat <b>histogram</b> sebelum memilih mean atau median.</div>\n<h4>Z-score</h4>\n<div class=\"formula\" data-lang=\"RUMUS\">z = (x − mean) / standar deviasi</div>\n<p>z = 2 berarti nilai berada 2 standar deviasi di atas rata-rata. Nilai |z| &gt; 3 sering dianggap outlier (untuk data yang mendekati normal).</p>\n<h4>Aturan 68–95–99,7</h4>\n<p>Pada distribusi normal: ±1 SD memuat ~68% data, ±2 SD ~95%, ±3 SD ~99,7%.</p>\n<h4>Probabilitas dasar</h4>\n<ul><li>P(A atau B) = P(A) + P(B) − P(A dan B)</li><li>Jika independen: P(A dan B) = P(A) × P(B)</li><li>Probabilitas bersyarat: P(beli | add-to-cart) = conversion dari keranjang ke pembelian.</li></ul>\n<h4>Distribusi binomial</h4>\n<p>Jumlah “sukses” dari n percobaan ya/tidak. Contoh: dari 1.000 pengunjung dengan conversion 3%, berapa peluang ≥ 40 pembeli? Di Excel: <code>=1-BINOM.DIST(39,1000,0.03,TRUE)</code>.</p>\n<h4>Central Limit Theorem (CLT)</h4>\n<p>Rata-rata dari sampel yang cukup besar akan berdistribusi mendekati normal, <b>apa pun bentuk data aslinya</b>. Inilah alasan uji statistik untuk rata-rata dan proporsi bisa dipakai pada data bisnis yang miring.</p>",
    "practice": [
     "Buat histogram nilai pesanan TokoKita (Excel/Python). Miring ke mana?",
     "Hitung z-score untuk 5 nilai pesanan terbesar.",
     "Simulasikan CLT di Python: ambil 1.000 sampel rata-rata dari data miring, lalu plot."
    ],
    "quiz": [
     {
      "q": "Pada data miring kanan, umumnya…",
      "o": [
       "mean < median",
       "mean = median",
       "mean > median",
       "tidak ada median"
      ],
      "a": 2,
      "why": "Ekor kanan (nilai besar) menarik mean ke atas."
     },
     {
      "q": "Nilai dengan z-score = −2 berarti…",
      "o": [
       "2 di bawah mean",
       "2 SD di bawah mean",
       "2% terbawah",
       "outlier pasti"
      ],
      "a": 1,
      "why": "z mengukur jarak dalam satuan standar deviasi."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "StatQuest: The Normal Distribution",
      "url": "https://www.youtube.com/results?search_query=statquest%20normal%20distribution%20clearly%20explained"
     },
     {
      "type": "yt",
      "title": "Central Limit Theorem explained",
      "url": "https://www.youtube.com/results?search_query=central%20limit%20theorem%20explained%20simply"
     },
     {
      "type": "course",
      "title": "OpenIntro Statistics (buku gratis)",
      "url": "https://www.openintro.org/book/os/"
     }
    ]
   },
   {
    "id": "s-3",
    "title": "Sampling & Interval Kepercayaan",
    "dur": 25,
    "summary": "Populasi vs sampel, metode sampling, standard error, dan confidence interval.",
    "content": "\n<p>Kita jarang punya data seluruh populasi. Dari <b>sampel</b>, kita memperkirakan nilai populasi beserta <b>ketidakpastiannya</b>.</p>\n<h4>Metode sampling</h4>\n<ul><li><b>Simple random</b>: setiap anggota punya peluang sama.</li><li><b>Stratified</b>: ambil acak dari tiap kelompok (kota, segmen) agar proporsional.</li><li><b>Cluster</b>: pilih beberapa kelompok utuh secara acak.</li><li><b>Convenience</b>: yang mudah dijangkau. Rawan bias!</li></ul>\n<h4>Standard error (SE)</h4>\n<div class=\"formula\" data-lang=\"RUMUS\">SE rata-rata  = s / √n\nSE proporsi  = √( p(1−p) / n )</div>\n<p>Semakin besar n, semakin kecil SE, sehingga estimasi lebih presisi.</p>\n<h4>Confidence interval (CI) 95%</h4>\n<div class=\"formula\" data-lang=\"RUMUS\">CI 95% ≈ estimasi ± 1,96 × SE</div>\n<p><b>Contoh:</b> survei 400 pelanggan, 62% puas. SE = √(0,62×0,38/400) = 0,0243. CI 95% = 62% ± 4,8% → <b>57,2% – 66,8%</b>.</p>\n<p>Di Excel: <code>=CONFIDENCE.NORM(0.05, stdev, n)</code> menghasilkan margin of error.</p>\n<h4>Interpretasi yang benar</h4>\n<p>“Jika survei diulang berkali-kali, 95% interval yang dibuat dengan cara ini akan memuat nilai sebenarnya.” Dalam praktik bisnis: “Kepuasan pelanggan kemungkinan besar antara 57% dan 67%.”</p>\n<div class=\"warn\">⚠️ Jika dua CI tumpang tindih banyak, perbedaan dua kelompok belum tentu nyata. Gunakan uji hipotesis (pelajaran berikutnya).</div>",
    "practice": [
     "Hitung CI 95% untuk conversion rate mobile vs desktop dari tabel web_events.",
     "Berapa sampel yang dibutuhkan agar margin of error survei ±3%? (petunjuk: n = 1,96² × p(1−p) / 0,03²)"
    ],
    "quiz": [
     {
      "q": "Jika ukuran sampel diperbesar 4×, standard error menjadi…",
      "o": [
       "4× lebih kecil",
       "2× lebih kecil",
       "Sama",
       "2× lebih besar"
      ],
      "a": 1,
      "why": "SE ∝ 1/√n; √4 = 2."
     },
     {
      "q": "Metode sampling paling rawan bias?",
      "o": [
       "Simple random",
       "Stratified",
       "Convenience",
       "Systematic"
      ],
      "a": 2,
      "why": "Sampel dipilih karena mudah, bukan acak."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Confidence intervals clearly explained",
      "url": "https://www.youtube.com/results?search_query=confidence%20interval%20clearly%20explained%20statquest"
     },
     {
      "type": "course",
      "title": "Khan Academy: Confidence intervals",
      "url": "https://www.khanacademy.org/math/statistics-probability"
     }
    ]
   },
   {
    "id": "s-4",
    "title": "Uji Hipotesis & A/B Testing",
    "dur": 40,
    "summary": "H0/H1, p-value, signifikansi, t-test, uji proporsi, chi-square, dan desain A/B test.",
    "content": "\n<h4>Logika uji hipotesis</h4>\n<ol><li><b>H0</b> (nol): tidak ada perbedaan/efek. <b>H1</b>: ada perbedaan.</li><li>Tentukan α (biasanya 0,05).</li><li>Hitung statistik uji dan <b>p-value</b>: peluang melihat hasil seekstrem ini <i>jika H0 benar</i>.</li><li>p &lt; α → tolak H0 (“signifikan secara statistik”).</li></ol>\n<div class=\"warn\">⚠️ p-value <b>bukan</b> peluang H0 benar, dan “signifikan” tidak sama dengan “penting”. Selalu laporkan besar efeknya (misal +1,2 poin persen) dan CI-nya.</div>\n<h4>Memilih uji</h4>\n<table class=\"tbl\"><tr><th>Pertanyaan</th><th>Uji</th><th>Excel / Python</th></tr>\n<tr><td>Rata-rata 2 grup berbeda? (nilai order A vs B)</td><td>t-test 2 sampel</td><td><code>=T.TEST(A,B,2,3)</code> / <code>scipy.stats.ttest_ind</code></td></tr>\n<tr><td>Proporsi 2 grup berbeda? (conversion A vs B)</td><td>z-test proporsi / chi-square</td><td><code>statsmodels proportions_ztest</code></td></tr>\n<tr><td>Hubungan 2 variabel kategorik? (device × beli)</td><td>Chi-square</td><td><code>=CHISQ.TEST()</code> / <code>chi2_contingency</code></td></tr>\n<tr><td>Rata-rata &gt;2 grup?</td><td>ANOVA</td><td><code>scipy.stats.f_oneway</code></td></tr></table>\n<h4>A/B testing: langkah praktis</h4>\n<ol>\n<li><b>Hipotesis</b>: “Tombol checkout hijau meningkatkan conversion.”</li>\n<li><b>Metrik utama</b> (satu!) + guardrail metrics (misal refund rate).</li>\n<li><b>Ukuran sampel</b> dihitung di awal dari baseline, MDE (efek minimum yang ingin dideteksi), α=5%, power=80%.</li>\n<li><b>Randomisasi</b> pengguna ke A/B.</li>\n<li>Jalankan sampai sampel tercapai (minimal 1–2 siklus mingguan). <b>Jangan berhenti saat p-value kebetulan &lt; 0,05</b> (peeking).</li>\n<li>Analisis: beda proporsi, CI, p-value, cek segmen.</li>\n</ol>\n<h4>Contoh perhitungan</h4>\n<p>A: 480 pembeli / 12.000 pengunjung (4,0%). B: 552 / 12.000 (4,6%). Selisih +0,6 pp (relatif +15%).</p>\n<div class=\"formula\" data-lang=\"PYTHON\">from statsmodels.stats.proportion import proportions_ztest\nz, p = proportions_ztest([552, 480], [12000, 12000])\nprint(round(p, 4))   # ≈ 0.02 → signifikan pada α = 0,05</div>\n<h4>Error tipe I & II</h4>\n<ul><li><b>Tipe I</b> (false positive): menyimpulkan ada efek padahal tidak; dikontrol oleh α.</li><li><b>Tipe II</b> (false negative): melewatkan efek nyata; dikontrol oleh power (1−β).</li></ul>",
    "practice": [
     "Pakai kalkulator sample size A/B online: baseline 4%, MDE 0,5 pp. Berapa pengunjung per grup?",
     "Uji apakah conversion (purchase/session) mobile vs desktop di web_events berbeda signifikan (Lab Python).",
     "Tulis laporan 5 kalimat hasil A/B test contoh di atas untuk manajer non-teknis."
    ],
    "quiz": [
     {
      "q": "p-value = 0,03 dengan α = 0,05 berarti…",
      "o": [
       "Peluang H0 benar 3%",
       "Tolak H0, hasil signifikan",
       "Gagal tolak H0",
       "Efeknya 3%"
      ],
      "a": 1,
      "why": "p < α → tolak H0."
     },
     {
      "q": "Menghentikan A/B test begitu p < 0,05 pertama kali muncul disebut…",
      "o": [
       "Power analysis",
       "Peeking: meningkatkan false positive",
       "Randomisasi",
       "Stratifikasi"
      ],
      "a": 1,
      "why": "Mengintip berulang menaikkan peluang error tipe I."
     },
     {
      "q": "Uji untuk membandingkan conversion rate dua grup?",
      "o": [
       "t-test rata-rata",
       "Uji proporsi / chi-square",
       "Korelasi",
       "Regresi"
      ],
      "a": 1,
      "why": "Conversion adalah proporsi (ya/tidak)."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "StatQuest: p-values clearly explained",
      "url": "https://www.youtube.com/results?search_query=statquest%20p-values%20clearly%20explained"
     },
     {
      "type": "yt",
      "title": "A/B testing for data analysts",
      "url": "https://www.youtube.com/results?search_query=ab%20testing%20data%20analyst%20tutorial%20sample%20size"
     },
     {
      "type": "doc",
      "title": "Evan Miller — A/B sample size calculator",
      "url": "https://www.evanmiller.org/ab-testing/sample-size.html"
     }
    ]
   },
   {
    "id": "s-5",
    "title": "Korelasi & Regresi Linear",
    "dur": 35,
    "summary": "Pearson vs Spearman, regresi sederhana & berganda, R², dan interpretasi koefisien.",
    "content": "\n<h4>Korelasi</h4>\n<ul><li><b>Pearson r</b> (−1 s.d. 1): hubungan <i>linear</i>. Excel <code>=CORREL()</code>, pandas <code>df.corr()</code>.</li><li><b>Spearman</b>: hubungan monoton berbasis ranking; lebih tahan outlier & data miring.</li></ul>\n<p>Patokan kasar |r|: &lt;0,3 lemah, 0,3–0,7 sedang, &gt;0,7 kuat. <b>Selalu lihat scatter plot</b>: r bisa menipu (Anscombe’s quartet).</p>\n<div class=\"warn\">⚠️ Korelasi ≠ kausalitas. Biaya iklan & penjualan sama-sama naik di Desember karena musim liburan (variabel perancu).</div>\n<h4>Regresi linear sederhana</h4>\n<div class=\"formula\" data-lang=\"MODEL\">Penjualan = β0 + β1 × Biaya_iklan + error</div>\n<p><b>β1</b> = perubahan rata-rata penjualan untuk setiap kenaikan 1 unit biaya iklan. <b>R²</b> = proporsi variasi penjualan yang dijelaskan model (0–1).</p>\n<h4>Di Excel</h4>\n<ul><li><code>=SLOPE(Y,X)</code>, <code>=INTERCEPT(Y,X)</code>, <code>=RSQ(Y,X)</code>, <code>=FORECAST.LINEAR(x,Y,X)</code></li><li>Analysis ToolPak → Regression untuk output lengkap (p-value tiap koefisien).</li><li>Scatter chart → Add Trendline → Display equation & R².</li></ul>\n<h4>Di Python</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">import statsmodels.formula.api as smf\nmodel = smf.ols(\"signup ~ biaya + C(channel)\", data=marketing).fit()\nprint(model.summary())</div>\n<h4>Regresi berganda</h4>\n<p>Koefisien diinterpretasikan “dengan variabel lain dianggap tetap”. Waspadai <b>multikolinearitas</b> (variabel input saling berkorelasi tinggi).</p>\n<h4>Cek asumsi singkat</h4>\n<ul><li>Hubungan kira-kira linear (lihat scatter).</li><li>Residual tidak berpola.</li><li>Outlier ekstrem tidak mendominasi.</li></ul>",
    "practice": [
     "Dari tabel marketing, hitung korelasi biaya vs signup per channel.",
     "Buat regresi signup ~ biaya di Excel (Analysis ToolPak) dan interpretasikan β1.",
     "Cari contoh Anscombe's quartet dan jelaskan pelajarannya."
    ],
    "quiz": [
     {
      "q": "R² = 0,64 artinya…",
      "o": [
       "Korelasi 0,64",
       "64% variasi Y dijelaskan model",
       "Model 64% akurat",
       "β1 = 0,64"
      ],
      "a": 1,
      "why": "R² adalah proporsi variasi yang dijelaskan."
     },
     {
      "q": "Korelasi yang lebih tahan outlier & hubungan non-linear monoton?",
      "o": [
       "Pearson",
       "Spearman",
       "R²",
       "Kovarians"
      ],
      "a": 1,
      "why": "Spearman berbasis ranking."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "StatQuest: Linear regression",
      "url": "https://www.youtube.com/results?search_query=statquest%20linear%20regression%20clearly%20explained"
     },
     {
      "type": "doc",
      "title": "Exceljet: CORREL",
      "url": "https://exceljet.net/functions/correl-function"
     }
    ]
   }
  ]
 },
 {
  "id": 4,
  "slug": "sql",
  "title": "SQL untuk Analisis Data",
  "tag": "Inti",
  "color": "#2563eb",
  "desc": "Mengambil, menggabungkan, dan meringkas data langsung dari database: dari SELECT sampai window function & cohort.",
  "lessons": [
   {
    "title": "Database Relasional & SELECT Dasar",
    "dur": 35,
    "summary": "Tabel, primary/foreign key, SELECT, WHERE, ORDER BY, LIMIT, DISTINCT, NULL.",
    "sqltag": "dasar",
    "content": "\n<p>Database relasional menyimpan data dalam <b>tabel</b> yang saling terhubung lewat <b>key</b>. SQL (<i>Structured Query Language</i>) adalah bahasa untuk bertanya ke database.</p>\n<h4>Database latihan: TokoKita</h4>\n<table class=\"tbl\"><tr><th>Tabel</th><th>Isi</th><th>Key</th></tr>\n<tr><td><code>customers</code></td><td>600 pelanggan</td><td>PK customer_id</td></tr>\n<tr><td><code>products</code></td><td>40 produk, 5 kategori</td><td>PK product_id</td></tr>\n<tr><td><code>orders</code></td><td>header pesanan (status, tanggal)</td><td>PK order_id, FK customer_id</td></tr>\n<tr><td><code>order_items</code></td><td>barang per pesanan</td><td>FK order_id, product_id</td></tr>\n<tr><td><code>marketing</code></td><td>biaya iklan mingguan</td><td>—</td></tr>\n<tr><td><code>web_events</code></td><td>event funnel website</td><td>PK event_id</td></tr></table>\n<h4>Anatomi query</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT  nama, kota, tgl_daftar          -- kolom yang diambil\nFROM    customers                         -- dari tabel mana\nWHERE   kota = 'Bandung'                  -- filter baris\n  AND   tgl_daftar >= '2026-01-01'\nORDER BY tgl_daftar DESC                  -- urutan\nLIMIT   10;                               -- batasi jumlah baris</div>\n<h4>Operator di WHERE</h4>\n<table class=\"tbl\"><tr><th>Operator</th><th>Contoh</th></tr>\n<tr><td><code>= &lt;&gt; &gt; &lt; &gt;= &lt;=</code></td><td><code>harga &gt;= 200000</code></td></tr>\n<tr><td><code>AND / OR / NOT</code></td><td><code>kategori = 'Fashion' OR kategori = 'Olahraga'</code></td></tr>\n<tr><td><code>IN</code></td><td><code>kota IN ('Jakarta','Bandung')</code></td></tr>\n<tr><td><code>BETWEEN</code></td><td><code>tgl_order BETWEEN '2026-07-01' AND '2026-09-30'</code></td></tr>\n<tr><td><code>LIKE</code></td><td><code>nama_produk LIKE '%Kaos%'</code> (% = karakter apa saja)</td></tr>\n<tr><td><code>IS NULL</code></td><td><code>email IS NULL</code> (bukan <code>= NULL</code>!)</td></tr></table>\n<h4>Kolom hitungan & alias</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT nama_produk,\n       harga,\n       harga - hpp                 AS laba_per_unit,\n       ROUND(1.0*(harga-hpp)/harga, 3) AS margin\nFROM products\nORDER BY margin DESC;</div>\n<p><code>DISTINCT</code> menghapus duplikat: <code>SELECT DISTINCT kota FROM customers;</code></p>\n<div class=\"warn\">⚠️ Di SQLite/PostgreSQL, pembagian dua bilangan bulat dibulatkan ke bawah (7/2 = 3). Kalikan dengan <code>1.0</code> agar hasilnya desimal.</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>Dasar</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan semua soal 'Dasar' di Lab SQL.",
     "Tulis query: 10 produk termahal kategori Elektronik.",
     "Tulis query: pelanggan dari Jakarta yang mendaftar di 2026, urut terbaru."
    ],
    "quiz": [
     {
      "q": "Klausa untuk memfilter baris adalah…",
      "o": [
       "ORDER BY",
       "WHERE",
       "SELECT",
       "LIMIT"
      ],
      "a": 1,
      "why": "WHERE memfilter baris sebelum ditampilkan."
     },
     {
      "q": "Cara benar mencari nilai kosong?",
      "o": [
       "kolom = NULL",
       "kolom IS NULL",
       "kolom = ''",
       "kolom == NULL"
      ],
      "a": 1,
      "why": "NULL tidak bisa dibandingkan dengan =."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "SQLBolt — latihan interaktif",
      "url": "https://sqlbolt.com/"
     },
     {
      "type": "course",
      "title": "Kaggle Learn — Intro to SQL",
      "url": "https://www.kaggle.com/learn/intro-to-sql"
     },
     {
      "type": "doc",
      "title": "W3Schools SQL Tutorial",
      "url": "https://www.w3schools.com/sql/"
     },
     {
      "type": "yt",
      "title": "SQL untuk pemula (Bahasa Indonesia)",
      "url": "https://www.youtube.com/results?search_query=belajar%20sql%20dasar%20untuk%20data%20analyst%20bahasa%20indonesia"
     }
    ],
    "id": "q-1"
   },
   {
    "title": "Agregasi: GROUP BY, HAVING & CASE WHEN",
    "dur": 40,
    "summary": "COUNT, SUM, AVG, MIN, MAX per kelompok; filter hasil agregasi; kategori dengan CASE.",
    "sqltag": "Agregasi",
    "content": "\n<p>GROUP BY adalah “PivotTable”-nya SQL.</p>\n<div class=\"formula\" data-lang=\"SQL\">SELECT status,\n       COUNT(*)                     AS jumlah_order,\n       COUNT(DISTINCT customer_id)  AS jumlah_pelanggan\nFROM orders\nGROUP BY status\nORDER BY jumlah_order DESC;</div>\n<h4>Aturan emas</h4>\n<p>Setiap kolom di SELECT harus <b>ada di GROUP BY</b> atau <b>dibungkus fungsi agregat</b>.</p>\n<h4>WHERE vs HAVING</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT kota, COUNT(*) AS jml\nFROM customers\nWHERE tgl_daftar >= '2026-01-01'   -- filter baris SEBELUM dikelompokkan\nGROUP BY kota\nHAVING COUNT(*) >= 20              -- filter kelompok SETELAH agregasi\nORDER BY jml DESC;</div>\n<h4>Urutan eksekusi logis</h4>\n<p><b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</b>. Karena itu alias dari SELECT umumnya tidak bisa dipakai di WHERE.</p>\n<h4>CASE WHEN: IF-nya SQL</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT CASE\n         WHEN harga < 100000 THEN 'Murah'\n         WHEN harga < 300000 THEN 'Sedang'\n         ELSE 'Premium'\n       END AS segmen_harga,\n       COUNT(*) AS jumlah_produk\nFROM products\nGROUP BY 1;</div>\n<h4>Agregasi bersyarat (sangat sering dipakai)</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT COUNT(*) AS total_order,\n       SUM(CASE WHEN status = 'batal' THEN 1 ELSE 0 END) AS order_batal,\n       ROUND(100.0 * SUM(CASE WHEN status = 'batal' THEN 1 ELSE 0 END) / COUNT(*), 2) AS pct_batal\nFROM orders;</div>\n<div class=\"tip\">💡 <code>COUNT(*)</code> menghitung baris; <code>COUNT(kolom)</code> mengabaikan NULL; <code>COUNT(DISTINCT kolom)</code> menghitung nilai unik.</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>Agregasi</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan soal 'Agregasi' di Lab SQL.",
     "Hitung jumlah pelanggan per channel_akuisisi & kota (2 kolom group).",
     "Hitung % order batal per metode bayar. Metode mana paling sering batal?"
    ],
    "quiz": [
     {
      "q": "Untuk memfilter kelompok dengan SUM(omzet) > 1 juta gunakan…",
      "o": [
       "WHERE",
       "HAVING",
       "GROUP BY",
       "LIMIT"
      ],
      "a": 1,
      "why": "HAVING memfilter setelah agregasi."
     },
     {
      "q": "COUNT(DISTINCT customer_id) menghitung…",
      "o": [
       "Semua baris",
       "Pelanggan unik",
       "Baris non-NULL",
       "Pesanan"
      ],
      "a": 1,
      "why": "DISTINCT menghitung nilai unik."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "Mode SQL Tutorial: GROUP BY",
      "url": "https://mode.com/sql-tutorial/sql-group-by"
     },
     {
      "type": "yt",
      "title": "GROUP BY & HAVING explained",
      "url": "https://www.youtube.com/results?search_query=sql%20group%20by%20having%20explained"
     }
    ],
    "id": "q-2"
   },
   {
    "title": "JOIN: Menggabungkan Tabel",
    "dur": 45,
    "summary": "INNER, LEFT, anti-join, multi-join, dan jebakan baris dobel (fan-out).",
    "sqltag": "JOIN",
    "content": "\n<p>Data tersebar di banyak tabel. JOIN menyatukannya berdasarkan key, seperti XLOOKUP tetapi jauh lebih kuat.</p>\n<div class=\"formula\" data-lang=\"SQL\">SELECT o.order_id, o.tgl_order, c.nama, c.kota\nFROM orders AS o\nINNER JOIN customers AS c ON o.customer_id = c.customer_id\nWHERE o.status = 'selesai';</div>\n<table class=\"tbl\"><tr><th>Jenis</th><th>Hasil</th></tr>\n<tr><td><code>INNER JOIN</code></td><td>Hanya baris yang cocok di kedua tabel</td></tr>\n<tr><td><code>LEFT JOIN</code></td><td>Semua baris kiri + yang cocok di kanan (tidak cocok → NULL)</td></tr>\n<tr><td><code>RIGHT JOIN</code></td><td>Kebalikan LEFT (jarang dipakai; tukar urutan tabel saja)</td></tr>\n<tr><td><code>FULL OUTER JOIN</code></td><td>Semua baris dari kedua tabel</td></tr></table>\n<h4>Multi-join: pendapatan per kategori</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT p.kategori,\n       SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS revenue\nFROM order_items oi\nJOIN orders   o ON oi.order_id   = o.order_id\nJOIN products p ON oi.product_id = p.product_id\nWHERE o.status = 'selesai'\nGROUP BY p.kategori\nORDER BY revenue DESC;</div>\n<h4>Anti-join: cari yang TIDAK punya pasangan</h4>\n<div class=\"formula\" data-lang=\"SQL\">-- Pelanggan yang belum pernah order\nSELECT c.customer_id, c.nama\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nWHERE o.order_id IS NULL;</div>\n<h4>⚠️ Jebakan fan-out</h4>\n<p>Jika kamu JOIN <code>orders</code> (1 baris per order) dengan <code>order_items</code> (banyak baris per order) lalu <code>COUNT(*)</code>, jumlah order akan <b>terlalu besar</b>. Gunakan <code>COUNT(DISTINCT o.order_id)</code>, atau agregasikan dulu sebelum JOIN.</p>\n<div class=\"tip\">💡 Sebelum JOIN, tanyakan: “grain tabel ini apa?” dan “hubungannya 1-ke-1, 1-ke-banyak, atau banyak-ke-banyak?”</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>JOIN</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan soal 'JOIN' di Lab SQL.",
     "Cari produk yang tidak pernah terjual (anti-join).",
     "Hitung revenue per kota pelanggan (3 tabel)."
    ],
    "quiz": [
     {
      "q": "Untuk menemukan pelanggan tanpa order, gunakan…",
      "o": [
       "INNER JOIN",
       "LEFT JOIN + WHERE kanan IS NULL",
       "CROSS JOIN",
       "UNION"
      ],
      "a": 1,
      "why": "Pola anti-join."
     },
     {
      "q": "Menghitung jumlah order setelah JOIN ke order_items sebaiknya…",
      "o": [
       "COUNT(*)",
       "COUNT(DISTINCT order_id)",
       "SUM(qty)",
       "MAX(order_id)"
      ],
      "a": 1,
      "why": "Satu order bisa punya banyak item (fan-out)."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "Mode SQL Tutorial: Joins",
      "url": "https://mode.com/sql-tutorial/sql-joins"
     },
     {
      "type": "yt",
      "title": "SQL joins visualized",
      "url": "https://www.youtube.com/results?search_query=sql%20joins%20explained%20visually%20inner%20left"
     }
    ],
    "id": "q-3"
   },
   {
    "title": "Subquery & CTE (WITH)",
    "dur": 35,
    "summary": "Query di dalam query, CTE untuk analisis bertahap yang mudah dibaca.",
    "sqltag": "Subquery & CTE",
    "content": "\n<h4>Subquery</h4>\n<div class=\"formula\" data-lang=\"SQL\">-- Produk dengan harga di atas rata-rata\nSELECT nama_produk, harga\nFROM products\nWHERE harga > (SELECT AVG(harga) FROM products);</div>\n<div class=\"formula\" data-lang=\"SQL\">-- Pelanggan yang pernah membeli kategori Elektronik\nSELECT nama FROM customers\nWHERE customer_id IN (\n  SELECT o.customer_id\n  FROM orders o JOIN order_items oi ON o.order_id = oi.order_id\n  JOIN products p ON p.product_id = oi.product_id\n  WHERE p.kategori = 'Elektronik'\n);</div>\n<h4>CTE: analisis langkah demi langkah</h4>\n<p>CTE (<i>Common Table Expression</i>) membuat “tabel sementara” bernama. Jauh lebih mudah dibaca daripada subquery bertingkat.</p>\n<div class=\"formula\" data-lang=\"SQL\">WITH order_value AS (           -- langkah 1: nilai tiap order\n  SELECT order_id,\n         SUM(qty * harga_satuan * (1 - diskon)) AS nilai\n  FROM order_items\n  GROUP BY order_id\n),\ncust AS (                        -- langkah 2: ringkasan per pelanggan\n  SELECT o.customer_id,\n         COUNT(*)      AS jml_order,\n         SUM(v.nilai)  AS total_belanja\n  FROM orders o\n  JOIN order_value v ON o.order_id = v.order_id\n  WHERE o.status = 'selesai'\n  GROUP BY o.customer_id\n)\nSELECT CASE WHEN jml_order = 1 THEN '1 order' ELSE '2+ order' END AS tipe,\n       COUNT(*)                AS pelanggan,\n       ROUND(AVG(total_belanja)) AS rata_belanja\nFROM cust\nGROUP BY 1;</div>\n<div class=\"tip\">💡 Pola kerja analis: <b>satu CTE = satu langkah logika</b>. Uji setiap CTE dengan <code>SELECT * FROM nama_cte LIMIT 5</code> sebelum lanjut.</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>Subquery & CTE</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan soal 'Subquery & CTE' di Lab SQL.",
     "Dengan CTE, hitung AOV per bulan untuk order selesai.",
     "Cari 10 pelanggan dengan total belanja tertinggi beserta kotanya."
    ],
    "quiz": [
     {
      "q": "Kata kunci untuk membuat CTE?",
      "o": [
       "CREATE",
       "WITH",
       "TEMP",
       "AS ONLY"
      ],
      "a": 1,
      "why": "WITH nama AS (…)"
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "Mode SQL Tutorial: Subqueries",
      "url": "https://mode.com/sql-tutorial/sql-sub-queries"
     },
     {
      "type": "yt",
      "title": "SQL CTE tutorial",
      "url": "https://www.youtube.com/results?search_query=sql%20cte%20with%20clause%20tutorial%20data%20analyst"
     }
    ],
    "id": "q-4"
   },
   {
    "title": "Window Functions",
    "dur": 45,
    "summary": "ROW_NUMBER, RANK, LAG/LEAD, running total, moving average, persentase dari total.",
    "sqltag": "Window",
    "content": "\n<p>Window function menghitung nilai <b>di atas sekelompok baris terkait tanpa menggabungkannya</b>, sehingga setiap baris tetap ada. Ini salah satu topik favorit tes teknis.</p>\n<div class=\"formula\" data-lang=\"SQL\">fungsi() OVER (PARTITION BY kelompok ORDER BY urutan)</div>\n<h4>Ranking</h4>\n<div class=\"formula\" data-lang=\"SQL\">-- Produk terlaris per kategori (peringkat dalam kategori)\nWITH jual AS (\n  SELECT p.kategori, p.nama_produk, SUM(oi.qty) AS unit\n  FROM order_items oi JOIN products p ON p.product_id = oi.product_id\n  GROUP BY 1, 2\n)\nSELECT *,\n       RANK() OVER (PARTITION BY kategori ORDER BY unit DESC) AS peringkat\nFROM jual;</div>\n<p><code>ROW_NUMBER</code> = 1,2,3,4 (selalu unik) · <code>RANK</code> = 1,2,2,4 · <code>DENSE_RANK</code> = 1,2,2,3.</p>\n<h4>Order pertama tiap pelanggan</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT * FROM (\n  SELECT o.*,\n         ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY tgl_order) AS urutan\n  FROM orders o\n) t\nWHERE urutan = 1;</div>\n<h4>LAG/LEAD: membandingkan dengan periode sebelumnya</h4>\n<div class=\"formula\" data-lang=\"SQL\">WITH bulanan AS (\n  SELECT substr(o.tgl_order,1,7) AS bulan,\n         SUM(oi.qty*oi.harga_satuan*(1-oi.diskon)) AS revenue\n  FROM orders o JOIN order_items oi ON o.order_id = oi.order_id\n  WHERE o.status = 'selesai'\n  GROUP BY 1\n)\nSELECT bulan, revenue,\n       LAG(revenue) OVER (ORDER BY bulan) AS bulan_lalu,\n       ROUND(100.0*(revenue - LAG(revenue) OVER (ORDER BY bulan))\n             / LAG(revenue) OVER (ORDER BY bulan), 1) AS growth_pct\nFROM bulanan;</div>\n<h4>Running total & moving average</h4>\n<div class=\"formula\" data-lang=\"SQL\">SUM(revenue) OVER (ORDER BY bulan)                                   AS kumulatif,\nAVG(revenue) OVER (ORDER BY bulan ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS ma_3bln,\n1.0 * revenue / SUM(revenue) OVER ()                                  AS pct_dari_total</div>\n<p>Waktu antar order: <code>julianday(tgl_order) - julianday(LAG(tgl_order) OVER (PARTITION BY customer_id ORDER BY tgl_order))</code>.</p>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>Window</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan soal 'Window' di Lab SQL.",
     "Hitung growth revenue bulanan (MoM) memakai LAG.",
     "Ambil 3 produk terlaris di setiap kategori."
    ],
    "quiz": [
     {
      "q": "RANK pada nilai 90, 85, 85, 80 menghasilkan…",
      "o": [
       "1,2,3,4",
       "1,2,2,4",
       "1,2,2,3",
       "1,1,2,3"
      ],
      "a": 1,
      "why": "RANK melompati peringkat setelah nilai seri."
     },
     {
      "q": "Fungsi untuk mengambil nilai baris sebelumnya?",
      "o": [
       "LEAD",
       "LAG",
       "FIRST",
       "PREV"
      ],
      "a": 1,
      "why": "LAG = sebelumnya, LEAD = sesudahnya."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Kaggle Learn — Advanced SQL (window functions)",
      "url": "https://www.kaggle.com/learn/advanced-sql"
     },
     {
      "type": "doc",
      "title": "PostgreSQL docs: Window Functions tutorial",
      "url": "https://www.postgresql.org/docs/current/tutorial-window.html"
     },
     {
      "type": "yt",
      "title": "SQL window functions explained",
      "url": "https://www.youtube.com/results?search_query=sql%20window%20functions%20explained%20row_number%20rank%20lag"
     }
    ],
    "id": "q-5"
   },
   {
    "title": "Tanggal, Teks & Query Analisis Nyata",
    "dur": 40,
    "summary": "Fungsi tanggal per dialek, cohort bulanan, funnel, dan template query analis.",
    "sqltag": "Analisis",
    "content": "\n<h4>Fungsi tanggal beda dialek</h4>\n<table class=\"tbl\"><tr><th>Tujuan</th><th>SQLite (Lab)</th><th>PostgreSQL</th><th>MySQL</th><th>BigQuery</th></tr>\n<tr><td>Ambil bulan</td><td><code>strftime('%Y-%m', d)</code></td><td><code>date_trunc('month', d)</code></td><td><code>DATE_FORMAT(d,'%Y-%m')</code></td><td><code>DATE_TRUNC(d, MONTH)</code></td></tr>\n<tr><td>Selisih hari</td><td><code>julianday(a)-julianday(b)</code></td><td><code>a - b</code></td><td><code>DATEDIFF(a,b)</code></td><td><code>DATE_DIFF(a,b,DAY)</code></td></tr>\n<tr><td>Tambah hari</td><td><code>date(d,'+30 day')</code></td><td><code>d + INTERVAL '30 day'</code></td><td><code>DATE_ADD(d, INTERVAL 30 DAY)</code></td><td><code>DATE_ADD(d, INTERVAL 30 DAY)</code></td></tr></table>\n<h4>Teks</h4>\n<p><code>UPPER, LOWER, TRIM, LENGTH, SUBSTR, REPLACE</code>, gabung teks: <code>||</code> (SQLite/PostgreSQL) atau <code>CONCAT()</code>.</p>\n<h4>Query cohort retensi bulanan</h4>\n<div class=\"formula\" data-lang=\"SQL\">WITH first_order AS (\n  SELECT customer_id, MIN(strftime('%Y-%m', tgl_order)) AS cohort\n  FROM orders WHERE status = 'selesai' GROUP BY 1\n),\naktivitas AS (\n  SELECT DISTINCT o.customer_id, f.cohort,\n         (CAST(strftime('%Y', o.tgl_order) AS INT) - CAST(substr(f.cohort,1,4) AS INT)) * 12\n       + (CAST(strftime('%m', o.tgl_order) AS INT) - CAST(substr(f.cohort,6,2) AS INT)) AS bulan_ke\n  FROM orders o JOIN first_order f ON o.customer_id = f.customer_id\n  WHERE o.status = 'selesai'\n)\nSELECT cohort, bulan_ke, COUNT(*) AS pelanggan_aktif\nFROM aktivitas\nGROUP BY 1, 2\nORDER BY 1, 2;</div>\n<h4>Query funnel</h4>\n<div class=\"formula\" data-lang=\"SQL\">SELECT device,\n       COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END) AS view,\n       COUNT(DISTINCT CASE WHEN event='add_to_cart'  THEN session_id END) AS cart,\n       COUNT(DISTINCT CASE WHEN event='checkout'     THEN session_id END) AS checkout,\n       COUNT(DISTINCT CASE WHEN event='purchase'     THEN session_id END) AS purchase\nFROM web_events\nGROUP BY device;</div>\n<div class=\"tip\">💡 Simpan query-query seperti ini sebagai <b>template pribadi</b>. 80% pekerjaan analis adalah variasi dari pola yang sama.</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/sql\">Lab SQL</a> dan kerjakan soal bertopik <b>Analisis</b>. Database TokoKita sudah siap di browser, tanpa install.</div>",
    "practice": [
     "Kerjakan soal 'Analisis' di Lab SQL.",
     "Ubah query cohort agar menampilkan persentase retensi (bagi dengan ukuran cohort).",
     "Hitung conversion funnel per sumber trafik."
    ],
    "quiz": [
     {
      "q": "Di SQLite, cara mengambil 'YYYY-MM' dari tanggal?",
      "o": [
       "date_trunc('month', d)",
       "strftime('%Y-%m', d)",
       "MONTH(d)",
       "FORMAT(d)"
      ],
      "a": 1,
      "why": "SQLite memakai strftime."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Cohort analysis in SQL",
      "url": "https://www.youtube.com/results?search_query=cohort%20retention%20analysis%20sql%20tutorial"
     },
     {
      "type": "doc",
      "title": "SQLite date & time functions",
      "url": "https://www.sqlite.org/lang_datefunc.html"
     }
    ],
    "id": "q-6"
   },
   {
    "title": "SQL di Dunia Kerja: Dialek, Performa & Gaya",
    "dur": 25,
    "summary": "PostgreSQL/MySQL/BigQuery, index, EXPLAIN, gaya penulisan, dan alat (DBeaver).",
    "content": "\n<h4>Dialek yang akan kamu temui</h4>\n<ul><li><b>PostgreSQL</b>: sangat umum di startup.</li><li><b>MySQL/MariaDB</b>: aplikasi web.</li><li><b>BigQuery / Snowflake / Redshift</b>: data warehouse cloud.</li><li><b>SQL Server</b>: korporat (sering bersama Power BI).</li></ul>\n<p>Konsep inti (SELECT, JOIN, GROUP BY, window) sama; yang berbeda terutama fungsi tanggal/teks dan <code>LIMIT</code> vs <code>TOP</code>.</p>\n<h4>Tips performa</h4>\n<ul>\n<li>Pilih kolom yang dibutuhkan, hindari <code>SELECT *</code> pada tabel besar.</li>\n<li>Filter sedini mungkin (WHERE pada kolom ber-index / partisi tanggal).</li>\n<li>Di warehouse berbayar per data yang dipindai (BigQuery), filter partisi tanggal = hemat biaya.</li>\n<li>Gunakan <code>EXPLAIN</code> untuk melihat rencana eksekusi.</li>\n<li>Agregasikan sebelum JOIN tabel besar.</li>\n</ul>\n<h4>Gaya penulisan yang rapi</h4>\n<div class=\"formula\" data-lang=\"SQL\">-- Tujuan: revenue bulanan order selesai (dibuat: 17 Nov 2026)\nWITH revenue_bulanan AS (\n    SELECT\n        strftime('%Y-%m', o.tgl_order)                 AS bulan,\n        SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS revenue\n    FROM orders AS o\n    JOIN order_items AS oi\n        ON o.order_id = oi.order_id\n    WHERE o.status = 'selesai'\n    GROUP BY 1\n)\nSELECT * FROM revenue_bulanan ORDER BY bulan;</div>\n<h4>Alat</h4>\n<ul><li><b>DBeaver</b> (gratis): klien untuk hampir semua database. Bisa membuka file <code>tokokita.db</code> dari folder latihan/sql.</li><li><b>DB Browser for SQLite</b>: ringan untuk file .db.</li><li><b>BigQuery Sandbox</b>: gratis, ada banyak dataset publik.</li></ul>",
    "practice": [
     "Install DBeaver/DB Browser for SQLite, buka latihan/sql/tokokita.db, jalankan 3 query dari Lab.",
     "Kerjakan file latihan/sql/soal-sql.sql di aplikasi tersebut.",
     "Coba BigQuery Sandbox dengan satu dataset publik."
    ],
    "quiz": [
     {
      "q": "Kebiasaan yang paling menghemat biaya query di BigQuery?",
      "o": [
       "SELECT *",
       "Filter partisi tanggal & pilih kolom seperlunya",
       "ORDER BY di akhir",
       "Pakai alias pendek"
      ],
      "a": 1,
      "why": "BigQuery menagih berdasarkan data yang dipindai."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "DBeaver Community (gratis)",
      "url": "https://dbeaver.io/"
     },
     {
      "type": "doc",
      "title": "DB Browser for SQLite",
      "url": "https://sqlitebrowser.org/"
     },
     {
      "type": "doc",
      "title": "BigQuery Sandbox",
      "url": "https://cloud.google.com/bigquery/docs/sandbox"
     }
    ],
    "id": "q-7"
   }
  ]
 },
 {
  "id": 5,
  "slug": "cleaning-eda",
  "title": "Data Cleaning & EDA",
  "tag": "Inti",
  "color": "#ea580c",
  "desc": "Menilai kualitas data, membersihkannya (Excel, Power Query, SQL, Python), lalu mengeksplorasi pola.",
  "lessons": [
   {
    "id": "c-1",
    "title": "Data Cleaning End-to-End",
    "dur": 35,
    "summary": "Checklist membersihkan data mentah sebelum dianalisis.",
    "content": "\n<p>Sekitar 60–80% waktu data analyst dipakai untuk <b>menyiapkan data</b>. Ikuti checklist ini:</p>\n<ol>\n<li><b>Backup</b> data mentah, lalu kerjakan di salinan.</li>\n<li><b>Hapus duplikat</b>: Data → Remove Duplicates (tentukan kolom kunci).</li>\n<li><b>Spasi & kapitalisasi</b>: <code>=PROPER(TRIM(A2))</code>; karakter aneh: <code>=CLEAN(A2)</code>.</li>\n<li><b>Tipe data</b>: angka-teks → VALUE / Text to Columns; tanggal teks → DATEVALUE.</li>\n<li><b>Nilai kosong</b>: Go To Special (F5 → Special → Blanks). Putuskan: isi, hapus, atau tandai.</li>\n<li><b>Standarisasi kategori</b>: \"Jkt\", \"JAKARTA\", \"Jakarta \" → \"Jakarta\" (Find & Replace atau tabel mapping + XLOOKUP).</li>\n<li><b>Outlier</b>: cek MIN/MAX, sort, atau conditional formatting. Nilai qty −5 atau umur 250 pasti salah.</li>\n<li><b>Pisah/gabung kolom</b>: Text to Columns, TEXTSPLIT, Flash Fill.</li>\n<li><b>Validasi akhir</b>: total baris, total omzet dibandingkan sumber.</li>\n<li><b>Dokumentasikan</b> setiap langkah (sheet <i>Catatan</i>).</li>\n</ol>\n<h4>Trik: isi sel kosong dengan nilai di atasnya</h4>\n<p>Blok kolom → F5 → Special → Blanks → ketik <code>=</code> lalu tekan panah atas → <kbd>Ctrl</kbd>+<kbd>Enter</kbd>. Setelah itu Copy → Paste Values.</p>\n<div class=\"tip\">💡 Jika langkah cleaning berulang setiap minggu, otomatiskan dengan <b>Power Query</b> (pelajaran berikutnya).</div>",
    "practice": [
     "Ambil dataset 'dirty data' dari Kaggle lalu bersihkan mengikuti 10 langkah di atas.",
     "Buat tabel mapping untuk menyeragamkan nama kota.",
     "Tulis log cleaning: apa yang diubah, berapa baris terdampak."
    ],
    "quiz": [
     {
      "q": "Cara cepat memilih semua sel kosong dalam range?",
      "o": [
       "Ctrl+A",
       "F5 → Special → Blanks",
       "Ctrl+Shift+B",
       "Filter → Blank (tidak bisa)"
      ],
      "a": 1,
      "why": "Go To Special → Blanks memilih semua sel kosong."
     },
     {
      "q": "Langkah pertama sebelum cleaning?",
      "o": [
       "Hapus duplikat",
       "Backup data mentah",
       "Buat Pivot",
       "Buat grafik"
      ],
      "a": 1,
      "why": "Selalu simpan data asli agar bisa kembali jika terjadi kesalahan."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Data cleaning Excel",
      "url": "https://www.youtube.com/results?search_query=data%20cleaning%20in%20excel%20step%20by%20step"
     },
     {
      "type": "course",
      "title": "Google DA Course 4: Process Data from Dirty to Clean",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     },
     {
      "type": "course",
      "title": "Dataset kotor untuk latihan (Kaggle)",
      "url": "https://www.kaggle.com/search?q=dirty+data"
     }
    ]
   },
   {
    "id": "c-2",
    "title": "Power Query: Otomatisasi Cleaning & ETL",
    "dur": 45,
    "summary": "Impor, bersihkan, gabung data sekali klik Refresh.",
    "content": "\n<p>Data → Get Data. Power Query <b>merekam setiap langkah</b>. Bulan depan cukup klik <b>Refresh</b>, dan semua langkah terulang otomatis.</p>\n<h4>Sumber data</h4>\n<p>Excel, CSV, folder (gabung puluhan file sekaligus), web, database SQL, SharePoint.</p>\n<h4>Transformasi utama</h4>\n<ul>\n<li>Remove Columns / Rows, Remove Duplicates, Filter.</li>\n<li>Change Type (penting!), Trim, Clean, Capitalize.</li>\n<li>Split Column by Delimiter.</li>\n<li><b>Unpivot Columns</b>: ubah tabel lebar (Jan, Feb, Mar…) menjadi panjang (Bulan, Nilai). Ini fitur andalan.</li>\n<li>Fill Down, Replace Values.</li>\n<li>Group By (agregasi).</li>\n<li>Add Column → Conditional Column / Custom Column (bahasa M).</li>\n</ul>\n<h4>Menggabungkan data</h4>\n<table class=\"tbl\"><tr><th>Fitur</th><th>Fungsi</th><th>Analog SQL</th></tr>\n<tr><td>Append</td><td>Tumpuk tabel (baris)</td><td>UNION</td></tr>\n<tr><td>Merge</td><td>Gabung berdasarkan kunci (kolom)</td><td>JOIN</td></tr></table>\n<h4>Contoh bahasa M</h4>\n<div class=\"formula\">= Table.AddColumn(Source, \"Kategori Omzet\", each if [Omzet] > 1000000 then \"Besar\" else \"Kecil\")</div>\n<div class=\"tip\">💡 Proyek klasik: gabungkan 12 file CSV penjualan bulanan dalam satu folder memakai <i>Get Data → From Folder</i>.</div>",
    "practice": [
     "Impor CSV, ubah tipe data, trim, dan hapus duplikat di Power Query.",
     "Unpivot tabel penjualan bulanan berformat lebar.",
     "Merge tabel transaksi dengan master produk (Left Outer Join).",
     "Gabungkan beberapa file dari satu folder."
    ],
    "quiz": [
     {
      "q": "Mengubah kolom Jan–Des menjadi 2 kolom (Bulan, Nilai) disebut…",
      "o": [
       "Pivot",
       "Unpivot",
       "Transpose",
       "Append"
      ],
      "a": 1,
      "why": "Unpivot mengubah format lebar menjadi panjang."
     },
     {
      "q": "Merge di Power Query setara dengan … di SQL",
      "o": [
       "UNION",
       "JOIN",
       "GROUP BY",
       "WHERE"
      ],
      "a": 1,
      "why": "Merge menggabungkan tabel berdasarkan kolom kunci."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Power Query Excel dari nol",
      "url": "https://www.youtube.com/results?search_query=power%20query%20excel%20tutorial%20lengkap%20indonesia"
     },
     {
      "type": "doc",
      "title": "Power Query documentation (Microsoft Learn)",
      "url": "https://learn.microsoft.com/en-us/power-query/"
     }
    ]
   },
   {
    "title": "Cleaning dengan SQL & Python",
    "dur": 35,
    "summary": "Pola cleaning yang sama di tiga alat: duplikat, spasi, tipe data, missing, standarisasi.",
    "content": "\n<table class=\"tbl\"><tr><th>Masalah</th><th>Excel / Power Query</th><th>SQL</th><th>pandas</th></tr>\n<tr><td>Duplikat</td><td>Remove Duplicates</td><td><code>ROW_NUMBER() OVER (PARTITION BY id …) = 1</code></td><td><code>df.drop_duplicates(\"id\")</code></td></tr>\n<tr><td>Spasi & kapital</td><td>TRIM, PROPER</td><td><code>TRIM(UPPER(x))</code></td><td><code>s.str.strip().str.title()</code></td></tr>\n<tr><td>Teks → angka</td><td>VALUE / Change Type</td><td><code>CAST(x AS INTEGER)</code></td><td><code>pd.to_numeric(s, errors=\"coerce\")</code></td></tr>\n<tr><td>Teks → tanggal</td><td>DATE / Change Type</td><td><code>CAST / TO_DATE</code></td><td><code>pd.to_datetime(s, format=\"%d-%m-%Y\")</code></td></tr>\n<tr><td>Missing value</td><td>Go To Special, Fill Down</td><td><code>COALESCE(x, 0)</code></td><td><code>df.fillna()</code>, <code>df.dropna()</code></td></tr>\n<tr><td>Standarisasi kategori</td><td>Tabel mapping + XLOOKUP</td><td><code>CASE WHEN</code> / JOIN mapping</td><td><code>s.replace(dict)</code> / <code>map</code></td></tr>\n<tr><td>Outlier</td><td>Sort, conditional format</td><td><code>WHERE x &gt; batas</code></td><td><code>df[df.x &gt; q3 + 1.5*iqr]</code></td></tr></table>\n<h4>Deduplikasi di SQL</h4>\n<div class=\"formula\" data-lang=\"SQL\">WITH r AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY order_id ORDER BY tgl_order) AS rn\n  FROM orders_mentah\n)\nSELECT * FROM r WHERE rn = 1;</div>\n<h4>Pipeline cleaning di pandas</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">df = (pd.read_csv(\"orders_kotor.csv\")\n        .drop_duplicates(\"order_id\")\n        .assign(kota=lambda d: d.kota.str.strip().str.title().replace({\"Jkt\": \"Jakarta\"}),\n                harga=lambda d: pd.to_numeric(d.harga.str.replace(r\"[^0-9]\", \"\", regex=True)),\n                tgl=lambda d: pd.to_datetime(d.tgl, format=\"%d-%m-%Y\"))\n        .fillna({\"qty\": 0}))</div>\n<h4>Missing value: hapus, isi, atau tandai?</h4>\n<ul><li><b>Hapus</b> jika sedikit & acak.</li><li><b>Isi</b> (0, median, nilai sebelumnya) jika logis secara bisnis.</li><li><b>Tandai</b> (kolom flag) jika “kosong” itu sendiri informatif.</li></ul>\n<div class=\"tip\">💡 Selalu bandingkan jumlah baris & total angka <b>sebelum vs sesudah</b> cleaning, dan catat setiap keputusan.</div>",
    "practice": [
     "Kerjakan file Excel latihan 04 (data cleaning) lalu ulangi langkah yang sama di pandas.",
     "Tulis query SQL yang menormalkan nama kota dengan CASE WHEN."
    ],
    "quiz": [
     {
      "q": "Fungsi SQL untuk mengganti NULL dengan nilai lain?",
      "o": [
       "IFNULL saja",
       "COALESCE",
       "NVL2",
       "ISNULL()"
      ],
      "a": 1,
      "why": "COALESCE standar ANSI, didukung semua dialek."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Kaggle Learn — Data Cleaning",
      "url": "https://www.kaggle.com/learn/data-cleaning"
     },
     {
      "type": "yt",
      "title": "Data cleaning in pandas",
      "url": "https://www.youtube.com/results?search_query=data%20cleaning%20pandas%20python%20tutorial"
     }
    ],
    "id": "c-3"
   },
   {
    "title": "Exploratory Data Analysis (EDA)",
    "dur": 40,
    "summary": "Kerangka EDA: kenali data, univariat, bivariat, segmen, waktu, lalu catat pertanyaan baru.",
    "content": "\n<p>EDA adalah fase “berkenalan” dengan data sebelum menarik kesimpulan. Tujuannya menemukan pola, anomali, dan pertanyaan yang lebih tajam.</p>\n<h4>Kerangka EDA 6 langkah</h4>\n<ol>\n<li><b>Gambaran umum</b>: jumlah baris/kolom, tipe data, rentang tanggal, grain. (<code>df.info()</code>, <code>df.describe()</code>)</li>\n<li><b>Kualitas</b>: missing, duplikat, nilai mustahil (qty negatif, tanggal masa depan).</li>\n<li><b>Univariat</b>: distribusi tiap variabel (histogram untuk numerik, bar chart untuk kategorik).</li>\n<li><b>Bivariat</b>: hubungan dua variabel (scatter, box plot per kategori, crosstab).</li>\n<li><b>Waktu</b>: tren harian/mingguan/bulanan, musiman, lonjakan.</li>\n<li><b>Segmen</b>: bandingkan per kota, channel, device, kategori. Di sinilah insight biasanya muncul.</li>\n</ol>\n<h4>Pertanyaan EDA untuk TokoKita</h4>\n<ul>\n<li>Berapa pelanggan, order, dan revenue? Bagaimana trennya per bulan?</li>\n<li>Kategori mana yang menyumbang revenue terbesar? Margin tertinggi?</li>\n<li>Berapa % pelanggan yang order lebih dari sekali?</li>\n<li>Apakah channel akuisisi memengaruhi nilai belanja?</li>\n<li>Di langkah funnel mana pengunjung mobile paling banyak hilang?</li>\n</ul>\n<h4>Visual EDA yang paling berguna</h4>\n<table class=\"tbl\"><tr><th>Tujuan</th><th>Visual</th></tr>\n<tr><td>Distribusi</td><td>Histogram, box plot</td></tr><tr><td>Perbandingan kategori</td><td>Bar chart (terurut)</td></tr>\n<tr><td>Tren</td><td>Line chart</td></tr><tr><td>Hubungan</td><td>Scatter</td></tr><tr><td>Dua kategori</td><td>Heatmap crosstab</td></tr></table>\n<div class=\"tip\">💡 Catat setiap temuan dalam format: <b>Observasi → Kemungkinan penyebab → Tindak lanjut</b>. Catatan ini akan menjadi bahan presentasi.</div>",
    "practice": [
     "Lakukan EDA TokoKita di Lab Python atau notebook 02-eda (folder latihan/python).",
     "Tulis 5 temuan dengan format Observasi → Penyebab → Tindak lanjut."
    ],
    "quiz": [
     {
      "q": "Visual terbaik untuk melihat distribusi nilai order?",
      "o": [
       "Pie chart",
       "Histogram / box plot",
       "Line chart",
       "Peta"
      ],
      "a": 1,
      "why": "Histogram & box plot menunjukkan sebaran & outlier."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Exploratory data analysis with pandas",
      "url": "https://www.youtube.com/results?search_query=exploratory%20data%20analysis%20pandas%20project"
     },
     {
      "type": "doc",
      "title": "pandas: 10 minutes to pandas",
      "url": "https://pandas.pydata.org/docs/user_guide/10min.html"
     }
    ],
    "id": "c-4"
   }
  ]
 },
 {
  "id": 6,
  "slug": "visualisasi-bi",
  "title": "Visualisasi & Business Intelligence",
  "tag": "Inti",
  "color": "#db2777",
  "desc": "Prinsip visualisasi, desain dashboard, Power BI, Tableau, Looker Studio, dan data storytelling.",
  "lessons": [
   {
    "id": "v-1",
    "title": "Visualisasi: Memilih Grafik yang Tepat",
    "dur": 30,
    "summary": "Bar, line, combo, scatter, dan prinsip storytelling with data.",
    "content": "\n<table class=\"tbl\"><tr><th>Tujuan</th><th>Grafik</th></tr>\n<tr><td>Membandingkan kategori</td><td>Bar / Column (urutkan!)</td></tr>\n<tr><td>Tren waktu</td><td>Line</td></tr>\n<tr><td>Komposisi (≤5 bagian)</td><td>Stacked bar / Donut</td></tr>\n<tr><td>Hubungan 2 variabel</td><td>Scatter</td></tr>\n<tr><td>Distribusi</td><td>Histogram / Box plot</td></tr>\n<tr><td>Nilai + persen berbeda skala</td><td>Combo (kolom + garis di sumbu sekunder)</td></tr>\n<tr><td>Kontribusi naik-turun</td><td>Waterfall</td></tr></table>\n<h4>Prinsip desain</h4>\n<ol>\n<li><b>Judul = kesimpulan</b>. Contoh: “Penjualan Jawa naik 23% di Q3”, bukan “Grafik Penjualan”.</li>\n<li>Hapus gridline, border, dan efek 3D yang tidak perlu.</li>\n<li>Satu warna aksen untuk data yang ingin ditekankan, sisanya abu-abu.</li>\n<li>Label data langsung di batang daripada legend jauh.</li>\n<li>Sumbu bar chart selalu mulai dari 0.</li>\n</ol>\n<h4>Sparklines</h4>\n<p>Insert → Sparklines: grafik mini di dalam sel untuk menunjukkan tren per baris.</p>\n<div class=\"tip\">💡 Buku rekomendasi: <i>Storytelling with Data</i> karya Cole Nussbaumer Knaflic.</div>",
    "practice": [
     "Buat line chart omzet bulanan dengan judul berupa insight.",
     "Buat combo chart: Omzet (kolom) + Margin % (garis, sumbu sekunder).",
     "Rapikan satu grafik default Excel menjadi versi minimalis."
    ],
    "quiz": [
     {
      "q": "Grafik terbaik untuk tren penjualan 12 bulan?",
      "o": [
       "Pie",
       "Line",
       "Scatter",
       "Radar"
      ],
      "a": 1,
      "why": "Line chart menunjukkan perubahan berurutan sepanjang waktu."
     },
     {
      "q": "Judul grafik yang baik adalah…",
      "o": [
       "Nama sheet",
       "Deskripsi data saja",
       "Insight/kesimpulan utama",
       "Kosong"
      ],
      "a": 2,
      "why": "Judul berbentuk insight langsung menyampaikan pesan."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Membuat grafik Excel profesional",
      "url": "https://www.youtube.com/results?search_query=excel%20chart%20professional%20design%20tutorial"
     },
     {
      "type": "yt",
      "title": "Storytelling with Data (talk)",
      "url": "https://www.youtube.com/results?search_query=storytelling%20with%20data%20cole%20nussbaumer%20knaflic"
     }
    ]
   },
   {
    "id": "v-2",
    "title": "Desain Dashboard yang Dipakai Orang",
    "dur": 45,
    "summary": "Tujuan dashboard, hierarki informasi, KPI card, interaktivitas, dan contoh di Excel.",
    "content": "\n<h4>Sebelum membuka tool: jawab 4 pertanyaan</h4>\n<ol><li><b>Siapa</b> penggunanya? (direksi butuh ringkas, tim operasional butuh detail)</li><li><b>Keputusan</b> apa yang diambil dari dashboard ini?</li><li><b>Seberapa sering</b> dilihat? (harian/mingguan/bulanan)</li><li><b>Metrik</b> apa saja, dengan definisi tertulis?</li></ol>\n<h4>Jenis dashboard</h4>\n<table class=\"tbl\"><tr><th>Jenis</th><th>Untuk</th><th>Ciri</th></tr>\n<tr><td>Strategis</td><td>Manajemen</td><td>Sedikit KPI, tren bulanan, vs target</td></tr>\n<tr><td>Operasional</td><td>Tim harian</td><td>Real-time/harian, detail, alert</td></tr>\n<tr><td>Analitis</td><td>Analis</td><td>Banyak filter, drill-down, eksplorasi</td></tr></table>\n<h4>Checklist dashboard yang baik</h4>\n<ul><li>KPI utama di kiri atas (pola baca F/Z), dibandingkan dengan target/periode lalu.</li><li>Maksimal 5–7 visual per halaman.</li><li>Filter global (tanggal, wilayah) di satu tempat.</li><li>Warna konsisten: satu warna = satu makna.</li><li>Tanggal update data terlihat jelas.</li><li>Definisi metrik tersedia (tooltip/halaman info).</li></ul>\n<h4>Contoh: membangun dashboard di Excel</h4>\n<h4>Arsitektur 3 sheet</h4>\n<ol><li><b>Data</b>: Table bersih (idealnya dari Power Query).</li><li><b>Calc</b>: PivotTable / rumus ringkasan.</li><li><b>Dashboard</b>: KPI, grafik, slicer. Tanpa data mentah.</li></ol>\n<h4>Layout (pola F/Z)</h4>\n<ul>\n<li>Baris atas: <b>KPI card</b> (Total Omzet, Jumlah Order, AOV, Growth %).</li>\n<li>Tengah: tren waktu (line) + perbandingan kategori (bar terurut).</li>\n<li>Kiri/atas: <b>Slicer & Timeline</b> yang terhubung ke semua Pivot (Report Connections).</li>\n<li>Bawah: tabel detail / Top 10.</li>\n</ul>\n<h4>Trik KPI card</h4>\n<div class=\"formula\">=TEXT(GETPIVOTDATA(\"Omzet\",Calc!$A$3)/1000000,\"#,##0.0\")&\" jt\"</div>\n<p>Masukkan ke Shape (klik shape → formula bar → <code>=Calc!B2</code>) agar angka tampil di dalam kartu.</p>\n<h4>Checklist kualitas</h4>\n<ul><li>Gridlines dimatikan (View → Gridlines).</li><li>Palet 2–3 warna konsisten.</li><li>Setiap grafik menjawab satu pertanyaan bisnis.</li><li>Uji: klik slicer, apakah semua ikut berubah?</li><li>Lindungi sheet (Review → Protect Sheet) sebelum dibagikan.</li></ul>",
    "practice": [
     "Sketsa dashboard TokoKita di kertas: 4 KPI, 3 visual, 2 filter.",
     "Kerjakan file Excel latihan 06 (Dashboard KPI Kopi Senja)."
    ],
    "quiz": [
     {
      "q": "Agar satu slicer mengontrol banyak Pivot, gunakan…",
      "o": [
       "Group",
       "Report Connections",
       "Refresh All",
       "Calculated Field"
      ],
      "a": 1,
      "why": "Slicer → Report Connections → centang semua Pivot."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Excel interactive dashboard from scratch",
      "url": "https://www.youtube.com/results?search_query=excel%20interactive%20dashboard%20from%20scratch"
     },
     {
      "type": "yt",
      "title": "Dashboard Excel bahasa Indonesia",
      "url": "https://www.youtube.com/results?search_query=membuat%20dashboard%20excel%20interaktif"
     }
    ]
   },
   {
    "id": "v-3",
    "title": "Power BI: Dari Data ke Laporan Interaktif",
    "dur": 60,
    "summary": "Power Query, model star schema, DAX dasar (CALCULATE, time intelligence), visual, publish.",
    "content": "\n<p>Kabar baik: jika Anda sudah menguasai <b>Power Query</b> dan <b>DAX</b> (Level 5 & bagian DAX di bawah), Anda sudah menguasai sekitar 70% Power BI.</p>\n<h4>Alur kerja Power BI Desktop</h4>\n<ol><li><b>Get Data</b> → Power Query Editor (sama seperti di Excel).</li><li><b>Model view</b>: buat relasi star schema.</li><li><b>Measures</b> dengan DAX.</li><li><b>Report view</b>: seret visual, slicer, drill-down.</li><li><b>Publish</b> ke Power BI Service untuk berbagi & refresh terjadwal.</li></ol>\n<h4>Fitur yang membedakan dari Excel</h4>\n<ul><li>Cross-filtering otomatis antar visual.</li><li>Drill-through ke halaman detail.</li><li>Tooltip halaman kustom.</li><li>Row-Level Security.</li><li>Kapasitas data jauh lebih besar.</li></ul>\n<h4>Alternatif</h4>\n<p><b>Tableau</b> (dipakai di Google DA Certificate; Tableau Public gratis) dan <b>Looker Studio</b> (gratis, cocok untuk data Google Sheets/GA4).</p>\n<h4>DAX yang wajib dikuasai</h4>\n<div class=\"formula\" data-lang=\"DAX\">Revenue        = SUMX(order_items, order_items[qty] * order_items[harga_satuan] * (1 - order_items[diskon]))\nRevenue Selesai = CALCULATE([Revenue], orders[status] = \"selesai\")\nJumlah Order    = DISTINCTCOUNT(orders[order_id])\nAOV             = DIVIDE([Revenue Selesai], [Jumlah Order])\nRevenue LM      = CALCULATE([Revenue Selesai], DATEADD('Kalender'[Date], -1, MONTH))\nGrowth MoM %    = DIVIDE([Revenue Selesai] - [Revenue LM], [Revenue LM])\nRevenue YTD     = TOTALYTD([Revenue Selesai], 'Kalender'[Date])</div>\n<ul>\n<li><b>Measure vs calculated column</b>: measure dihitung sesuai filter visual; kolom dihitung per baris & disimpan.</li>\n<li><b>SUM vs SUMX</b>: SUMX mengiterasi baris (untuk qty × harga).</li>\n<li><b>Tabel kalender</b>: buat dengan <code>CALENDAR(DATE(2025,1,1), DATE(2026,12,31))</code>, tandai sebagai Date Table, relasikan ke tanggal order. Wajib untuk time intelligence.</li>\n</ul>\n<h4>Model TokoKita di Power BI</h4>\n<p>Fact: <code>order_items</code> (+ <code>orders</code>). Dimension: <code>products</code>, <code>customers</code>, <code>Kalender</code>. Relasi 1-ke-banyak dari dimensi ke fakta, filter satu arah.</p>\n<div class=\"tip\">💡 Kerjakan <a href=\"#/proyek-bi\">Proyek BI #1 (Power BI)</a> memakai CSV TokoKita.</div>",
    "practice": [
     "Unduh Power BI Desktop (gratis, Windows).",
     "Impor dataset Superstore dan buat ulang dashboard Excel Anda di Power BI.",
     "Ikuti satu modul Microsoft Learn: 'Get started with Power BI'."
    ],
    "quiz": [
     {
      "q": "Bahasa rumus measure di Power BI?",
      "o": [
       "M",
       "DAX",
       "SQL",
       "VBA"
      ],
      "a": 1,
      "why": "DAX untuk measure; M untuk Power Query."
     },
     {
      "q": "Fungsi DAX untuk mengubah konteks filter?",
      "o": [
       "FILTER",
       "CALCULATE",
       "SUMX",
       "RELATED"
      ],
      "a": 1,
      "why": "CALCULATE mengevaluasi ekspresi dalam konteks filter yang dimodifikasi."
     },
     {
      "q": "Agar time intelligence (DATEADD, TOTALYTD) bekerja, kamu perlu…",
      "o": [
       "Tabel kalender yang ditandai sebagai Date Table",
       "Kolom teks bulan",
       "Visual line chart",
       "Power Query"
      ],
      "a": 0,
      "why": "Fungsi waktu membutuhkan tabel tanggal yang kontinu."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Microsoft Learn — Power BI",
      "url": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
     },
     {
      "type": "yt",
      "title": "Power BI full course beginner",
      "url": "https://www.youtube.com/results?search_query=power%20bi%20full%20course%20for%20beginners"
     },
     {
      "type": "course",
      "title": "Tableau Public (gratis)",
      "url": "https://public.tableau.com/"
     }
    ]
   },
   {
    "title": "Tableau: Visual Analytics",
    "dur": 45,
    "summary": "Dimensions vs measures, Show Me, calculated field, LOD expression, dashboard & Tableau Public.",
    "content": "\n<p>Tableau terkenal karena eksplorasi visual yang cepat: cukup seret-lepas field. Dipakai di Google Data Analytics Certificate. <b>Tableau Public</b> gratis dan bagus untuk portofolio (karya otomatis publik).</p>\n<h4>Konsep dasar</h4>\n<ul>\n<li><b>Dimensions</b> (biru): kategorik → membuat header/kelompok. <b>Measures</b> (hijau): numerik → diagregasi.</li>\n<li><b>Discrete</b> (biru) vs <b>Continuous</b> (hijau) menentukan header vs sumbu.</li>\n<li><b>Shelves</b>: Columns, Rows, Filters, Marks (Color, Size, Label, Tooltip, Detail).</li>\n<li><b>Show Me</b>: rekomendasi chart otomatis.</li>\n</ul>\n<h4>Menghubungkan data TokoKita</h4>\n<p>Connect → Text file → pilih <code>order_items.csv</code>, lalu seret <code>orders.csv</code>, <code>products.csv</code>, <code>customers.csv</code> ke kanvas. Tableau akan membuat <b>relationships</b> berdasarkan kolom yang sama namanya.</p>\n<h4>Calculated field</h4>\n<div class=\"formula\" data-lang=\"TABLEAU\">// Revenue (per baris item)\n[Qty] * [Harga Satuan] * (1 - [Diskon])\n\n// Status selesai saja\nIF [Status] = \"selesai\" THEN [Qty] * [Harga Satuan] * (1 - [Diskon]) END\n\n// Segmen harga\nIF [Harga] < 100000 THEN \"Murah\" ELSEIF [Harga] < 300000 THEN \"Sedang\" ELSE \"Premium\" END</div>\n<h4>LOD expressions (fitur khas Tableau)</h4>\n<div class=\"formula\" data-lang=\"TABLEAU\">// Tanggal order pertama tiap pelanggan (untuk cohort)\n{ FIXED [Customer Id] : MIN([Tgl Order]) }\n\n// Total belanja per pelanggan, tidak terpengaruh dimensi di view\n{ FIXED [Customer Id] : SUM([Revenue]) }</div>\n<h4>Table calculations</h4>\n<p>Klik kanan measure → Quick Table Calculation: Running Total, Percent of Total, Difference (MoM), Rank, Moving Average.</p>\n<h4>Dashboard & Story</h4>\n<p>Gabungkan beberapa sheet di Dashboard, tambahkan <b>Actions</b> (klik bar → filter visual lain). <b>Story</b> menyusun beberapa dashboard menjadi alur presentasi.</p>",
    "practice": [
     "Buat akun Tableau Public & install Tableau Public Desktop.",
     "Kerjakan Proyek BI #2 (Tableau): cohort & segmentasi pelanggan.",
     "Publikasikan 1 dashboard ke profil Tableau Public untuk portofolio."
    ],
    "quiz": [
     {
      "q": "Ekspresi Tableau untuk menghitung nilai per pelanggan terlepas dari view?",
      "o": [
       "Table calculation",
       "{ FIXED [Customer Id] : … }",
       "Parameter",
       "Set"
      ],
      "a": 1,
      "why": "LOD FIXED menghitung pada level dimensi yang ditentukan."
     },
     {
      "q": "Di Tableau, field hijau biasanya…",
      "o": [
       "Diskrit",
       "Kontinu",
       "Filter",
       "Parameter"
      ],
      "a": 1,
      "why": "Hijau = continuous, membentuk sumbu."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Tableau Free Training Videos",
      "url": "https://www.tableau.com/learn/training"
     },
     {
      "type": "course",
      "title": "Tableau Public (gratis)",
      "url": "https://public.tableau.com/"
     },
     {
      "type": "yt",
      "title": "Tableau full course for beginners",
      "url": "https://www.youtube.com/results?search_query=tableau%20full%20course%20for%20beginners"
     },
     {
      "type": "yt",
      "title": "Tableau LOD expressions explained",
      "url": "https://www.youtube.com/results?search_query=tableau%20lod%20expressions%20fixed%20explained"
     }
    ],
    "id": "v-4"
   },
   {
    "title": "Looker Studio: Dashboard Gratis Berbasis Web",
    "dur": 35,
    "summary": "Sumber data (Google Sheets/BigQuery/CSV), dimension & metric, calculated field, blending, berbagi.",
    "content": "\n<p><b>Looker Studio</b> (dulu Google Data Studio) gratis, berjalan di browser, dan mudah dibagikan seperti Google Docs. Populer di tim marketing & UMKM karena terhubung langsung ke Google Sheets, Google Analytics 4, Google Ads, dan BigQuery.</p>\n<h4>Alur kerja</h4>\n<ol>\n<li>Upload CSV TokoKita ke Google Sheets (satu sheet per tabel) atau ke BigQuery.</li>\n<li>Looker Studio → Create → Report → Add data → Google Sheets.</li>\n<li>Cek tipe field di panel data source (Date, Number, Text, Currency IDR).</li>\n<li>Tambahkan chart: Scorecard (KPI), Time series, Bar, Table, Geo map.</li>\n<li>Tambahkan kontrol: Date range control, Drop-down list (filter).</li>\n<li>Share → atur akses Viewer/Editor, atau jadwalkan email laporan.</li>\n</ol>\n<h4>Calculated field</h4>\n<div class=\"formula\" data-lang=\"LOOKER\">Revenue      = qty * harga_satuan * (1 - diskon)\nStatus OK    = CASE WHEN status = \"selesai\" THEN 1 ELSE 0 END\nBulan        = FORMAT_DATETIME(\"%Y-%m\", tgl_order)\nAOV          = SUM(Revenue) / COUNT_DISTINCT(order_id)</div>\n<h4>Blending data</h4>\n<p>Menggabungkan dua sumber berdasarkan join key (mirip LEFT JOIN), misalnya order_items + products berdasarkan product_id. Untuk model yang rumit, lebih baik siapkan tabel gabungan di BigQuery/SQL atau Google Sheets dulu.</p>\n<h4>Kapan memilih yang mana?</h4>\n<table class=\"tbl\"><tr><th></th><th>Power BI</th><th>Tableau</th><th>Looker Studio</th></tr>\n<tr><td>Biaya</td><td>Desktop gratis, berbagi berbayar</td><td>Public gratis, lainnya berbayar</td><td>Gratis</td></tr>\n<tr><td>Kekuatan</td><td>Model data & DAX, ekosistem Microsoft</td><td>Eksplorasi visual, LOD</td><td>Google ecosystem, mudah dibagikan</td></tr>\n<tr><td>Platform</td><td>Windows (Desktop)</td><td>Windows/Mac</td><td>Browser</td></tr>\n<tr><td>Cocok untuk</td><td>Korporat, BI analyst</td><td>Analis visual, portofolio</td><td>Marketing, startup, UMKM</td></tr></table>",
    "practice": [
     "Upload 3 CSV TokoKita ke Google Sheets & buat report Looker Studio.",
     "Kerjakan Proyek BI #3 (Looker Studio): dashboard marketing & funnel.",
     "Bagikan link view-only untuk portofolio."
    ],
    "quiz": [
     {
      "q": "Kontrol Looker Studio untuk memfilter rentang tanggal seluruh halaman?",
      "o": [
       "Scorecard",
       "Date range control",
       "Pivot table",
       "Blend"
      ],
      "a": 1,
      "why": "Date range control mengatur periode semua chart di halaman."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "Looker Studio",
      "url": "https://lookerstudio.google.com/"
     },
     {
      "type": "doc",
      "title": "Looker Studio Help Center",
      "url": "https://support.google.com/looker-studio"
     },
     {
      "type": "yt",
      "title": "Looker Studio tutorial for beginners",
      "url": "https://www.youtube.com/results?search_query=looker%20studio%20tutorial%20for%20beginners"
     }
    ],
    "id": "v-5"
   },
   {
    "title": "Data Storytelling & Presentasi",
    "dur": 30,
    "summary": "Struktur cerita, judul berbentuk insight, dari dashboard ke rekomendasi.",
    "content": "\n<p>Tujuan analisis adalah <b>tindakan</b>. Storytelling memastikan audiens paham <i>apa yang terjadi, mengapa penting, dan apa yang harus dilakukan</i>.</p>\n<h4>Struktur: Situasi → Komplikasi → Resolusi</h4>\n<ol>\n<li><b>Situasi</b>: konteks yang disepakati. “Revenue Q3 TokoKita Rp X, naik 12% YoY.”</li>\n<li><b>Komplikasi</b>: masalah/peluang. “Namun repeat purchase turun dari 38% ke 31%, terutama pelanggan dari TikTok.”</li>\n<li><b>Resolusi</b>: rekomendasi + dampak. “Uji program voucher order kedua untuk pelanggan TikTok; potensi tambahan Rp Y/bulan.”</li>\n</ol>\n<h4>Pyramid principle</h4>\n<p>Sampaikan <b>kesimpulan dulu</b>, baru bukti pendukung. Manajer sibuk mungkin hanya membaca slide pertama.</p>\n<h4>Desain slide/visual</h4>\n<ul><li>Satu slide = satu pesan, tertulis di judul.</li><li>Sorot data penting dengan warna, sisanya abu-abu.</li><li>Anotasi langsung pada grafik (“Kampanye 11.11 dimulai”).</li><li>Angka dibulatkan sesuai kebutuhan (Rp 1,2 M, bukan Rp 1.213.450.900).</li></ul>\n<h4>Template email insight</h4>\n<div class=\"formula\" data-lang=\"TEMPLATE\">Subjek: [Insight] Repeat order pelanggan TikTok turun 9 pp di Q3\n\nRingkasan: Repeat rate pelanggan TikTok turun dari 34% → 25% (Q2 → Q3),\nmenyumbang ±60% penurunan repeat rate total.\n\nKenapa penting: setiap 1 pp repeat rate ≈ Rp 18 jt/bulan.\nDugaan penyebab: voucher order kedua berhenti Juli (perlu dikonfirmasi tim marketing).\nRekomendasi: A/B test voucher order kedua 2 minggu, target +5 pp.\nDetail & dashboard: [link]</div>",
    "practice": [
     "Ambil satu temuan dari EDA TokoKita, tulis dalam struktur Situasi-Komplikasi-Resolusi.",
     "Buat 3 slide presentasi (bisa pakai Google Slides) dengan judul berupa insight.",
     "Rekam diri presentasi 2 menit, tonton ulang, perbaiki."
    ],
    "quiz": [
     {
      "q": "Menurut pyramid principle, yang disampaikan pertama adalah…",
      "o": [
       "Metodologi",
       "Data mentah",
       "Kesimpulan/rekomendasi utama",
       "Ucapan terima kasih"
      ],
      "a": 2,
      "why": "Kesimpulan dulu, bukti sesudahnya."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Storytelling with Data — Cole Nussbaumer Knaflic",
      "url": "https://www.youtube.com/results?search_query=storytelling%20with%20data%20cole%20nussbaumer%20knaflic%20talk"
     },
     {
      "type": "course",
      "title": "Google DA Course 6: Share Data Through the Art of Visualization",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     }
    ],
    "id": "v-6"
   }
  ]
 },
 {
  "id": 7,
  "slug": "python",
  "title": "Python untuk Analisis Data",
  "tag": "Lanjut",
  "color": "#ca8a04",
  "desc": "Python dasar, pandas untuk membaca/membersihkan/meringkas data, visualisasi, dan notebook analisis.",
  "lessons": [
   {
    "title": "Python Dasar untuk Analis",
    "dur": 40,
    "pytag": "Dasar",
    "summary": "Google Colab, variabel, tipe data, list, dict, kondisi, loop, fungsi.",
    "content": "\n<p>Kamu tidak perlu menjadi programmer untuk memakai Python sebagai analis. Cukup kuasai dasar berikut lalu fokus ke <b>pandas</b>.</p>\n<h4>Di mana menjalankan?</h4>\n<ul><li><b>Google Colab</b>: gratis, di browser, tanpa install. Paling disarankan untuk mulai.</li><li><b>Lab Python</b> di website ini: untuk soal-soal singkat.</li><li><b>Jupyter / VS Code</b> + Anaconda: di laptop sendiri.</li></ul>\n<div class=\"formula\" data-lang=\"PYTHON\"># Variabel & tipe data\nharga = 189000          # int\ndiskon = 0.1            # float\nproduk = \"Kemeja Linen\" # str\naktif = True            # bool\n\nharga_akhir = harga * (1 - diskon)\nprint(f\"{produk}: Rp{harga_akhir:,.0f}\")   # Kemeja Linen: Rp170,100</div>\n<h4>List & dictionary</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">kota = [\"Jakarta\", \"Bandung\", \"Surabaya\"]\nkota.append(\"Medan\")\nprint(kota[0], len(kota))          # Jakarta 4\n\nstok = {\"P01\": 12, \"P02\": 0, \"P03\": 5}\nstok[\"P04\"] = 20\nprint(stok.get(\"P02\"))             # 0</div>\n<h4>Kondisi, loop, list comprehension</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">for kode, jumlah in stok.items():\n    if jumlah == 0:\n        print(kode, \"habis!\")\n    elif jumlah < 10:\n        print(kode, \"menipis\")\n\nkuadrat = [x**2 for x in range(1, 6)]          # [1, 4, 9, 16, 25]\nmahal = [h for h in [50, 120, 300] if h > 100] # [120, 300]</div>\n<h4>Fungsi</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">def margin(harga, hpp):\n    \"\"\"Hitung margin laba dalam persen.\"\"\"\n    if harga == 0:\n        return 0\n    return round((harga - hpp) / harga * 100, 1)\n\nprint(margin(189000, 105000))   # 44.4</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/python\">Lab Python</a> dan kerjakan soal bertopik <b>Dasar</b>. Python & pandas berjalan di browser (perlu internet saat pertama kali dimuat).</div>",
    "practice": [
     "Kerjakan soal 'Dasar' di Lab Python.",
     "Selesaikan kursus Python di Kaggle Learn (±5 jam).",
     "Tulis fungsi yang mengubah angka menjadi format 'Rp 1,2 jt'."
    ],
    "quiz": [
     {
      "q": "Struktur data untuk menyimpan pasangan kode → stok?",
      "o": [
       "list",
       "dict",
       "tuple",
       "str"
      ],
      "a": 1,
      "why": "Dictionary menyimpan key-value."
     },
     {
      "q": "Hasil [x*2 for x in [1,2,3]]?",
      "o": [
       "[1,2,3]",
       "[2,4,6]",
       "6",
       "[1,4,9]"
      ],
      "a": 1,
      "why": "List comprehension mengalikan setiap elemen."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Kaggle Learn — Python",
      "url": "https://www.kaggle.com/learn/python"
     },
     {
      "type": "course",
      "title": "Google Colab",
      "url": "https://colab.research.google.com/"
     },
     {
      "type": "yt",
      "title": "Python untuk pemula (Bahasa Indonesia)",
      "url": "https://www.youtube.com/results?search_query=belajar%20python%20dasar%20untuk%20data%20analyst%20bahasa%20indonesia"
     }
    ],
    "id": "p-1"
   },
   {
    "title": "pandas: Membaca, Melihat & Memilih Data",
    "dur": 40,
    "pytag": "pandas Dasar",
    "summary": "DataFrame, read_csv, head/info/describe, memilih kolom, filter baris, sort.",
    "content": "\n<div class=\"formula\" data-lang=\"PYTHON\">import pandas as pd\norders = pd.read_csv(\"orders.csv\", parse_dates=[\"tgl_order\"])\norders.head()          # 5 baris pertama\norders.shape           # (jumlah_baris, jumlah_kolom)\norders.info()          # tipe data & jumlah non-null\norders.describe()      # statistik deskriptif kolom numerik\norders[\"status\"].value_counts(normalize=True)   # proporsi tiap status</div>\n<h4>Memilih kolom & baris</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">orders[\"status\"]                       # satu kolom (Series)\norders[[\"order_id\", \"tgl_order\"]]      # beberapa kolom (DataFrame)\n\n# Filter (seperti WHERE)\nselesai = orders[orders[\"status\"] == \"selesai\"]\nq3 = orders[(orders.tgl_order >= \"2026-07-01\") & (orders.tgl_order < \"2026-10-01\")]\newallet_cod = orders[orders.metode_bayar.isin([\"E-Wallet\", \"COD\"])]\norders.query(\"status == 'batal' and metode_bayar == 'COD'\")\n\n# loc (label) & iloc (posisi)\norders.loc[orders.status == \"retur\", [\"order_id\", \"customer_id\"]]\norders.iloc[:10, :3]\n\n# Urutkan\nproducts.sort_values(\"harga\", ascending=False).head(10)</div>\n<div class=\"warn\">⚠️ Gunakan <code>&amp;</code> dan <code>|</code> (bukan <code>and</code>/<code>or</code>) untuk kondisi ganda, dan bungkus setiap kondisi dengan kurung.</div>\n<h4>Padanan dengan SQL & Excel</h4>\n<table class=\"tbl\"><tr><th>pandas</th><th>SQL</th><th>Excel</th></tr>\n<tr><td><code>df[df.x &gt; 5]</code></td><td>WHERE</td><td>Filter</td></tr>\n<tr><td><code>df.sort_values()</code></td><td>ORDER BY</td><td>Sort</td></tr>\n<tr><td><code>df[[\"a\",\"b\"]]</code></td><td>SELECT a, b</td><td>Pilih kolom</td></tr>\n<tr><td><code>df.head(10)</code></td><td>LIMIT 10</td><td>—</td></tr></table>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/python\">Lab Python</a> dan kerjakan soal bertopik <b>pandas Dasar</b>. Python & pandas berjalan di browser (perlu internet saat pertama kali dimuat).</div>",
    "practice": [
     "Kerjakan soal 'pandas Dasar' di Lab Python.",
     "Buka notebook latihan/python/01-pandas-dasar.ipynb di Google Colab."
    ],
    "quiz": [
     {
      "q": "Method untuk melihat tipe data & jumlah nilai non-null?",
      "o": [
       "df.head()",
       "df.info()",
       "df.shape",
       "df.describe()"
      ],
      "a": 1,
      "why": "info() menampilkan dtype & non-null count."
     },
     {
      "q": "Filter dua kondisi yang benar…",
      "o": [
       "df[df.a>1 and df.b<2]",
       "df[(df.a>1) & (df.b<2)]",
       "df[df.a>1 & df.b<2]",
       "df.filter(a>1,b<2)"
      ],
      "a": 1,
      "why": "Gunakan & dengan kurung di tiap kondisi."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Kaggle Learn — Pandas",
      "url": "https://www.kaggle.com/learn/pandas"
     },
     {
      "type": "doc",
      "title": "pandas: Getting started",
      "url": "https://pandas.pydata.org/docs/getting_started/index.html"
     }
    ],
    "id": "p-2"
   },
   {
    "title": "pandas: Cleaning & Transformasi",
    "dur": 40,
    "pytag": "Transformasi",
    "summary": "Kolom baru, tipe data, tanggal (.dt), teks (.str), missing value, apply, cut.",
    "content": "\n<div class=\"formula\" data-lang=\"PYTHON\">items[\"revenue\"] = items.qty * items.harga_satuan * (1 - items.diskon)\n\norders[\"tgl_order\"] = pd.to_datetime(orders.tgl_order)\norders[\"bulan\"] = orders.tgl_order.dt.to_period(\"M\").astype(str)   # '2026-10'\norders[\"hari\"] = orders.tgl_order.dt.day_name()\norders[\"weekend\"] = orders.tgl_order.dt.dayofweek >= 5\n\ncustomers[\"nama\"] = customers.nama.str.strip().str.title()\ncustomers[\"inisial\"] = customers.nama.str[0]\n\n# Missing values\ndf.isna().sum()\ndf[\"qty\"] = df.qty.fillna(0)\ndf = df.dropna(subset=[\"customer_id\"])\n\n# Kategori dari angka (seperti IF bertingkat)\nproducts[\"segmen\"] = pd.cut(products.harga, bins=[0, 100_000, 300_000, float(\"inf\")],\n                            labels=[\"Murah\", \"Sedang\", \"Premium\"])\n\n# Kondisi sederhana\nimport numpy as np\norders[\"is_ok\"] = np.where(orders.status == \"selesai\", 1, 0)\n\n# Mapping\npeta = {\"E-Wallet\": \"Digital\", \"Kartu Kredit\": \"Digital\", \"Transfer Bank\": \"Digital\", \"COD\": \"Tunai\"}\norders[\"jenis_bayar\"] = orders.metode_bayar.map(peta)</div>\n<h4>Method chaining</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">hasil = (orders\n         .query(\"status == 'selesai'\")\n         .assign(bulan=lambda d: d.tgl_order.dt.to_period(\"M\"))\n         .drop(columns=[\"metode_bayar\"])\n         .rename(columns={\"tgl_order\": \"tanggal\"}))</div>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/python\">Lab Python</a> dan kerjakan soal bertopik <b>Transformasi</b>. Python & pandas berjalan di browser (perlu internet saat pertama kali dimuat).</div>",
    "practice": [
     "Kerjakan soal 'Transformasi' di Lab Python.",
     "Tambahkan kolom umur pelanggan (hari sejak daftar) di customers."
    ],
    "quiz": [
     {
      "q": "Accessor untuk fungsi tanggal di pandas?",
      "o": [
       ".str",
       ".dt",
       ".date",
       ".time"
      ],
      "a": 1,
      "why": "Series datetime memakai .dt."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "pandas: Working with text data",
      "url": "https://pandas.pydata.org/docs/user_guide/text.html"
     },
     {
      "type": "yt",
      "title": "pandas data transformation tutorial",
      "url": "https://www.youtube.com/results?search_query=pandas%20assign%20apply%20map%20cut%20tutorial"
     }
    ],
    "id": "p-3"
   },
   {
    "title": "pandas: Groupby, Pivot & Merge",
    "dur": 45,
    "pytag": "Groupby & Merge",
    "summary": "Agregasi per kelompok, pivot_table, crosstab, merge (JOIN), concat.",
    "content": "\n<div class=\"formula\" data-lang=\"PYTHON\"># GROUP BY\nitems.groupby(\"product_id\")[\"qty\"].sum().sort_values(ascending=False).head(10)\n\nringkas = (df.groupby(\"kategori\")\n             .agg(revenue=(\"revenue\", \"sum\"),\n                  order=(\"order_id\", \"nunique\"),\n                  rata_qty=(\"qty\", \"mean\"))\n             .sort_values(\"revenue\", ascending=False)\n             .reset_index())\n\n# PIVOT TABLE\npv = df.pivot_table(index=\"bulan\", columns=\"kategori\", values=\"revenue\",\n                    aggfunc=\"sum\", fill_value=0)\n\n# CROSSTAB (frekuensi 2 kategori), normalize untuk persentase\npd.crosstab(customers.kota, customers.channel_akuisisi, normalize=\"index\")\n\n# MERGE = JOIN\ndf = (items\n      .merge(orders,   on=\"order_id\",   how=\"left\")\n      .merge(products, on=\"product_id\", how=\"left\"))\n\n# Pastikan tidak terjadi duplikasi tak terduga\ndf = items.merge(products, on=\"product_id\", how=\"left\", validate=\"many_to_one\")\n\n# CONCAT = UNION\nsemua = pd.concat([data_2025, data_2026], ignore_index=True)\n\n# transform: nilai agregat kembali ke setiap baris (mirip window function)\ndf[\"total_pelanggan\"] = df.groupby(\"customer_id\")[\"revenue\"].transform(\"sum\")</div>\n<table class=\"tbl\"><tr><th>pandas</th><th>SQL</th></tr>\n<tr><td><code>groupby().agg()</code></td><td>GROUP BY</td></tr><tr><td><code>merge(how=\"left\")</code></td><td>LEFT JOIN</td></tr>\n<tr><td><code>concat</code></td><td>UNION ALL</td></tr><tr><td><code>groupby().transform()</code></td><td>SUM() OVER (PARTITION BY)</td></tr>\n<tr><td><code>groupby().cumcount()</code> / <code>rank()</code></td><td>ROW_NUMBER / RANK</td></tr><tr><td><code>shift()</code></td><td>LAG</td></tr></table>\n<div class=\"tip\">🧪 <b>Praktik langsung:</b> buka <a href=\"#/lab/python\">Lab Python</a> dan kerjakan soal bertopik <b>Groupby & Merge</b>. Python & pandas berjalan di browser (perlu internet saat pertama kali dimuat).</div>",
    "practice": [
     "Kerjakan soal 'Groupby & Merge' di Lab Python.",
     "Buat pivot revenue bulan × kategori lalu cari bulan terbaik tiap kategori."
    ],
    "quiz": [
     {
      "q": "Padanan LEFT JOIN di pandas?",
      "o": [
       "concat",
       "merge(how='left')",
       "join_left()",
       "append"
      ],
      "a": 1,
      "why": "merge dengan how='left'."
     },
     {
      "q": "Untuk menempelkan total per pelanggan ke setiap baris tanpa mengurangi jumlah baris…",
      "o": [
       "agg",
       "transform",
       "pivot",
       "apply"
      ],
      "a": 1,
      "why": "transform mengembalikan Series sepanjang data asli."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "pandas: Group by user guide",
      "url": "https://pandas.pydata.org/docs/user_guide/groupby.html"
     },
     {
      "type": "doc",
      "title": "pandas: Merge, join, concatenate",
      "url": "https://pandas.pydata.org/docs/user_guide/merging.html"
     }
    ],
    "id": "p-4"
   },
   {
    "title": "Visualisasi dengan matplotlib & seaborn",
    "dur": 35,
    "summary": "Line, bar, histogram, box plot, scatter, heatmap, dan merapikan grafik.",
    "content": "\n<div class=\"formula\" data-lang=\"PYTHON\">import matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Tren bulanan\nbulanan = df.groupby(\"bulan\")[\"revenue\"].sum()\nax = bulanan.plot(kind=\"line\", marker=\"o\", figsize=(10, 4))\nax.set_title(\"Revenue bulanan naik 2× sejak awal 2025\")   # judul = insight\nax.set_ylabel(\"Revenue (Rp)\")\nax.spines[[\"top\", \"right\"]].set_visible(False)\nplt.tight_layout(); plt.show()\n\n# Bar terurut\ndf.groupby(\"kategori\")[\"revenue\"].sum().sort_values().plot(kind=\"barh\")\n\n# Distribusi\nsns.histplot(nilai_order, bins=40)\nsns.boxplot(data=df, x=\"kategori\", y=\"revenue\")\n\n# Hubungan\nsns.scatterplot(data=marketing, x=\"biaya\", y=\"signup\", hue=\"channel\")\n\n# Heatmap (mis. retensi cohort)\nsns.heatmap(retensi, annot=True, fmt=\".0%\", cmap=\"Greens\")</div>\n<h4>Tips</h4>\n<ul><li>Format angka sumbu: <code>ax.yaxis.set_major_formatter(lambda x, _: f\"{x/1e6:.0f} jt\")</code></li><li>Simpan: <code>plt.savefig(\"grafik.png\", dpi=200, bbox_inches=\"tight\")</code></li><li>Interaktif: <b>plotly express</b> (<code>px.line(df, x=..., y=...)</code>).</li></ul>",
    "practice": [
     "Di notebook 02-eda, buat 5 grafik EDA TokoKita dengan judul berbentuk insight.",
     "Buat heatmap retensi cohort di notebook 03."
    ],
    "quiz": [
     {
      "q": "Grafik untuk membandingkan sebaran nilai antar kategori?",
      "o": [
       "Line",
       "Box plot",
       "Pie",
       "Area"
      ],
      "a": 1,
      "why": "Box plot menunjukkan median, kuartil, outlier per grup."
     }
    ],
    "res": [
     {
      "type": "doc",
      "title": "seaborn tutorial",
      "url": "https://seaborn.pydata.org/tutorial.html"
     },
     {
      "type": "course",
      "title": "Kaggle Learn — Data Visualization",
      "url": "https://www.kaggle.com/learn/data-visualization"
     }
    ],
    "id": "p-5"
   },
   {
    "title": "Notebook Analisis End-to-End",
    "dur": 60,
    "summary": "Struktur notebook profesional, reproducible, dan siap dipamerkan di portofolio.",
    "content": "\n<h4>Struktur notebook yang rapi</h4>\n<ol>\n<li><b>Judul & ringkasan</b> (markdown): pertanyaan bisnis + 3 temuan utama di paling atas.</li>\n<li><b>Setup</b>: import, konfigurasi tampilan.</li>\n<li><b>Load data</b> + penjelasan sumber.</li>\n<li><b>Cleaning</b> dengan catatan setiap keputusan.</li>\n<li><b>Analisis</b>: satu bagian per pertanyaan, setiap grafik diikuti 1–2 kalimat interpretasi.</li>\n<li><b>Kesimpulan & rekomendasi</b>.</li>\n<li><b>Keterbatasan & langkah berikutnya</b>.</li>\n</ol>\n<h4>Kebiasaan baik</h4>\n<ul>\n<li>Jalankan <b>Restart & Run All</b> sebelum dibagikan; notebook harus berjalan dari atas ke bawah tanpa error.</li>\n<li>Nama variabel jelas (<code>revenue_bulanan</code>, bukan <code>df2</code>).</li>\n<li>Fungsi untuk langkah yang diulang.</li>\n<li>Jangan tampilkan output raksasa; pakai <code>.head()</code>.</li>\n<li>Simpan di GitHub dengan README berisi ringkasan & screenshot grafik.</li>\n</ul>\n<h4>Notebook latihan yang disediakan</h4>\n<table class=\"tbl\"><tr><th>File</th><th>Isi</th></tr>\n<tr><td>01-pandas-dasar.ipynb</td><td>Membaca, filter, groupby, merge</td></tr>\n<tr><td>02-eda-tokokita.ipynb</td><td>EDA lengkap + visualisasi</td></tr>\n<tr><td>03-cohort-rfm-abtest.ipynb</td><td>Cohort retensi, segmentasi RFM, uji A/B funnel</td></tr></table>\n<p>Setiap notebook punya versi <b>soal</b> dan <b>kunci</b>. Unduh di halaman <a href=\"#/unduhan\">Unduhan</a>, buka di Google Colab (File → Upload notebook), lalu upload CSV dari folder latihan/data.</p>",
    "practice": [
     "Selesaikan ketiga notebook soal tanpa melihat kunci.",
     "Ubah notebook 02 menjadi proyek portofolio: tambah ringkasan, rapikan, upload ke GitHub."
    ],
    "quiz": [
     {
      "q": "Sebelum membagikan notebook, sebaiknya…",
      "o": [
       "Hapus semua markdown",
       "Restart & Run All untuk memastikan berjalan berurutan",
       "Simpan sebagai PDF saja",
       "Tampilkan seluruh DataFrame"
      ],
      "a": 1,
      "why": "Menjamin notebook reproducible."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Data analyst portfolio project in Python",
      "url": "https://www.youtube.com/results?search_query=data%20analyst%20portfolio%20project%20python%20pandas%20end%20to%20end"
     },
     {
      "type": "doc",
      "title": "GitHub: membuat repositori",
      "url": "https://docs.github.com/en/get-started/quickstart/create-a-repo"
     }
    ],
    "id": "p-6"
   }
  ]
 },
 {
  "id": 8,
  "slug": "analisis-bisnis",
  "title": "Analisis Bisnis Terapan",
  "tag": "Studi kasus",
  "color": "#dc2626",
  "desc": "Teknik analisis yang dipakai sehari-hari: penjualan & tren, funnel, cohort & retensi, RFM, marketing, eksperimen.",
  "lessons": [
   {
    "title": "Analisis Penjualan & Tren",
    "dur": 40,
    "sqltag": "Analisis",
    "pytag": "Groupby & Merge",
    "summary": "Dekomposisi revenue, MoM/YoY, musiman, Pareto 80/20, dan analisis kontribusi perubahan.",
    "content": "\n<h4>1. Dekomposisi: dari mana perubahan datang?</h4>\n<div class=\"formula\" data-lang=\"LOGIKA\">Revenue = Pelanggan aktif × Order per pelanggan × AOV\nAOV     = Item per order × Harga rata-rata × (1 − diskon rata-rata)</div>\n<p>Saat revenue turun 10%, hitung perubahan setiap komponen. Mungkin pelanggan tetap, tetapi AOV turun karena diskon besar.</p>\n<h4>2. Perbandingan periode</h4>\n<ul><li><b>MoM</b> (month over month): sensitif terhadap musim.</li><li><b>YoY</b> (year over year): bulan yang sama tahun lalu, sehingga efek musim tersingkir.</li><li><b>YTD</b> vs YTD tahun lalu.</li><li>Bandingkan dengan <b>target</b>, bukan hanya periode lalu.</li></ul>\n<h4>3. Musiman & kalender</h4>\n<p>Ramadan/Lebaran, 11.11, 12.12, Harbolnas, tanggal gajian, akhir pekan. Tandai di grafik agar lonjakan tidak disalahartikan.</p>\n<h4>4. Pareto 80/20</h4>\n<div class=\"formula\" data-lang=\"SQL\">WITH p AS (\n  SELECT product_id, SUM(qty*harga_satuan*(1-diskon)) AS rev\n  FROM order_items GROUP BY 1\n)\nSELECT product_id, rev,\n       ROUND(100.0 * SUM(rev) OVER (ORDER BY rev DESC) / SUM(rev) OVER (), 1) AS pct_kumulatif\nFROM p ORDER BY rev DESC;</div>\n<p>Berapa % produk yang menghasilkan 80% revenue? Hasilnya menentukan prioritas stok & promosi.</p>\n<h4>5. Analisis kontribusi (mix)</h4>\n<p>“Revenue naik Rp 50 jt: Elektronik +40 jt, Fashion +15 jt, Kecantikan −5 jt.” Visual terbaik: <b>waterfall chart</b>.</p>",
    "practice": [
     "Hitung revenue bulanan TokoKita, MoM & YoY untuk Okt 2026 (Lab SQL/Python).",
     "Lakukan analisis Pareto produk: berapa produk yang menyumbang 80% revenue?",
     "Buat waterfall perubahan revenue per kategori Q3 vs Q2 2026."
    ],
    "quiz": [
     {
      "q": "Perbandingan yang menghilangkan efek musiman?",
      "o": [
       "MoM",
       "YoY",
       "WoW",
       "DoD"
      ],
      "a": 1,
      "why": "YoY membandingkan periode yang sama tahun lalu."
     },
     {
      "q": "Visual terbaik untuk menunjukkan kontribusi tiap kategori terhadap perubahan total?",
      "o": [
       "Pie",
       "Waterfall",
       "Scatter",
       "Histogram"
      ],
      "a": 1,
      "why": "Waterfall menunjukkan naik/turun setiap komponen."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Sales analysis case study",
      "url": "https://www.youtube.com/results?search_query=sales%20data%20analysis%20case%20study%20data%20analyst"
     },
     {
      "type": "yt",
      "title": "Pareto analysis explained",
      "url": "https://www.youtube.com/results?search_query=pareto%20analysis%2080%2020%20excel"
     }
    ],
    "id": "b-1"
   },
   {
    "title": "Analisis Funnel & Konversi",
    "dur": 35,
    "sqltag": "Analisis",
    "summary": "Langkah funnel, conversion step-by-step, drop-off, segmentasi device/sumber.",
    "content": "\n<p>Funnel menggambarkan langkah pengguna menuju tujuan. TokoKita: <b>view_product → add_to_cart → checkout → purchase</b> (tabel <code>web_events</code>).</p>\n<h4>Metrik funnel</h4>\n<ul><li><b>Step conversion</b>: cart ÷ view, checkout ÷ cart, purchase ÷ checkout.</li><li><b>Overall conversion</b>: purchase ÷ view.</li><li><b>Drop-off</b>: 1 − step conversion; langkah dengan drop-off terbesar adalah prioritas.</li></ul>\n<div class=\"formula\" data-lang=\"SQL\">WITH f AS (\n  SELECT device,\n    COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END) AS view,\n    COUNT(DISTINCT CASE WHEN event='add_to_cart'  THEN session_id END) AS cart,\n    COUNT(DISTINCT CASE WHEN event='checkout'     THEN session_id END) AS checkout,\n    COUNT(DISTINCT CASE WHEN event='purchase'     THEN session_id END) AS purchase\n  FROM web_events GROUP BY device\n)\nSELECT device,\n       ROUND(100.0*cart/view,1)          AS view_to_cart,\n       ROUND(100.0*checkout/cart,1)      AS cart_to_checkout,\n       ROUND(100.0*purchase/checkout,1)  AS checkout_to_buy,\n       ROUND(100.0*purchase/view,1)      AS overall\nFROM f;</div>\n<h4>Membaca hasil</h4>\n<p>Jika conversion mobile di langkah checkout jauh lebih rendah daripada desktop, hipotesisnya: form checkout mobile sulit dipakai. Rekomendasi: perbaiki UX lalu <b>A/B test</b>.</p>\n<div class=\"tip\">💡 Selalu segmentasikan funnel (device, sumber trafik, pelanggan baru vs lama). Funnel total sering menyembunyikan masalah di satu segmen.</div>",
    "practice": [
     "Hitung funnel per device & per sumber dari web_events.",
     "Uji apakah conversion mobile vs desktop berbeda signifikan (s-4 Uji Hipotesis).",
     "Buat visual funnel di Power BI/Looker Studio."
    ],
    "quiz": [
     {
      "q": "Conversion cart → checkout dihitung…",
      "o": [
       "checkout ÷ view",
       "checkout ÷ cart",
       "cart ÷ checkout",
       "purchase ÷ cart"
      ],
      "a": 1,
      "why": "Langkah berikut ÷ langkah sebelumnya."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Funnel analysis SQL",
      "url": "https://www.youtube.com/results?search_query=funnel%20analysis%20sql%20data%20analyst"
     }
    ],
    "id": "b-2"
   },
   {
    "title": "Cohort & Retensi Pelanggan",
    "dur": 45,
    "sqltag": "Analisis",
    "pytag": "Analisis",
    "summary": "Cohort bulanan, tabel retensi, kurva retensi, repeat rate, churn.",
    "content": "\n<p><b>Cohort</b> = sekelompok pelanggan yang memulai di periode sama (misal order pertama Januari 2026). Melacak cohort menunjukkan apakah produk “menahan” pelanggan, dan apakah cohort baru lebih baik dari yang lama.</p>\n<h4>Tabel retensi</h4>\n<table class=\"tbl\"><tr><th>Cohort</th><th>Bulan 0</th><th>Bulan 1</th><th>Bulan 2</th><th>Bulan 3</th></tr>\n<tr><td>2026-01</td><td>100%</td><td>32%</td><td>21%</td><td>18%</td></tr>\n<tr><td>2026-02</td><td>100%</td><td>35%</td><td>24%</td><td>—</td></tr>\n<tr><td>2026-03</td><td>100%</td><td>29%</td><td>—</td><td>—</td></tr></table>\n<p>Baca <b>per baris</b> (bagaimana satu cohort meluruh) dan <b>per kolom</b> (apakah retensi bulan-1 membaik dari cohort ke cohort).</p>\n<h4>Di pandas</h4>\n<div class=\"formula\" data-lang=\"PYTHON\">ok = orders[orders.status == \"selesai\"].copy()\nok[\"bulan\"] = ok.tgl_order.dt.to_period(\"M\")\nok[\"cohort\"] = ok.groupby(\"customer_id\")[\"bulan\"].transform(\"min\")\nok[\"bulan_ke\"] = (ok.bulan - ok.cohort).apply(lambda x: x.n)\n\ntabel = (ok.groupby([\"cohort\", \"bulan_ke\"])[\"customer_id\"].nunique()\n           .unstack(fill_value=0))\nretensi = tabel.div(tabel[0], axis=0)\nsns.heatmap(retensi.iloc[:, :7], annot=True, fmt=\".0%\", cmap=\"Greens\")</div>\n<h4>Metrik terkait</h4>\n<ul><li><b>Repeat rate</b>: % pelanggan dengan ≥ 2 order.</li><li><b>Churn</b>: pelanggan tidak order selama X hari (tentukan X dari distribusi jarak antar order).</li><li><b>Retensi per channel akuisisi</b>: channel murah dengan retensi buruk bisa lebih mahal dalam jangka panjang.</li></ul>",
    "practice": [
     "Buat tabel retensi cohort TokoKita (Lab SQL soal 'Analisis' atau notebook 03).",
     "Bandingkan retensi bulan-1 per channel akuisisi. Channel mana terbaik?",
     "Visualisasikan sebagai heatmap."
    ],
    "quiz": [
     {
      "q": "Membaca tabel cohort per kolom (bulan ke-1 antar cohort) menunjukkan…",
      "o": [
       "Peluruhan satu cohort",
       "Apakah retensi awal membaik dari waktu ke waktu",
       "Total revenue",
       "Jumlah produk"
      ],
      "a": 1,
      "why": "Kolom yang sama = umur cohort sama, beda waktu mulai."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Cohort analysis explained",
      "url": "https://www.youtube.com/results?search_query=cohort%20analysis%20retention%20explained%20python"
     }
    ],
    "id": "b-3"
   },
   {
    "title": "Segmentasi Pelanggan dengan RFM",
    "dur": 40,
    "pytag": "Analisis",
    "summary": "Recency, Frequency, Monetary: skor 1–5, segmen (Champions, At Risk…), dan aksi marketing.",
    "content": "\n<table class=\"tbl\"><tr><th>Dimensi</th><th>Pertanyaan</th><th>Hitung</th></tr>\n<tr><td><b>R</b>ecency</td><td>Kapan terakhir belanja?</td><td>Hari sejak order terakhir (kecil = bagus)</td></tr>\n<tr><td><b>F</b>requency</td><td>Seberapa sering?</td><td>Jumlah order</td></tr>\n<tr><td><b>M</b>onetary</td><td>Berapa banyak?</td><td>Total belanja</td></tr></table>\n<div class=\"formula\" data-lang=\"PYTHON\">acuan = pd.Timestamp(\"2026-11-01\")\nrfm = (df.groupby(\"customer_id\")\n         .agg(recency=(\"tgl_order\", lambda s: (acuan - s.max()).days),\n              frequency=(\"order_id\", \"nunique\"),\n              monetary=(\"revenue\", \"sum\")))\n\nrfm[\"R\"] = pd.qcut(rfm.recency, 5, labels=[5, 4, 3, 2, 1]).astype(int)          # baru = 5\nrfm[\"F\"] = pd.qcut(rfm.frequency.rank(method=\"first\"), 5, labels=[1, 2, 3, 4, 5]).astype(int)\nrfm[\"M\"] = pd.qcut(rfm.monetary, 5, labels=[1, 2, 3, 4, 5]).astype(int)</div>\n<h4>Segmen & aksi</h4>\n<table class=\"tbl\"><tr><th>Segmen</th><th>Ciri</th><th>Aksi</th></tr>\n<tr><td>Champions</td><td>R tinggi, F & M tinggi</td><td>Program loyalitas, early access</td></tr>\n<tr><td>Loyal</td><td>F tinggi</td><td>Upsell, minta ulasan/referral</td></tr>\n<tr><td>Pelanggan baru</td><td>R tinggi, F = 1</td><td>Onboarding, voucher order kedua</td></tr>\n<tr><td>At Risk</td><td>R rendah, dulu F/M tinggi</td><td>Kampanye win-back personal</td></tr>\n<tr><td>Hibernating</td><td>R, F, M rendah</td><td>Promo murah atau abaikan</td></tr></table>\n<div class=\"tip\">💡 Kembangan berikutnya: clustering K-Means pada R, F, M (masuk wilayah data science).</div>",
    "practice": [
     "Hitung RFM TokoKita di notebook 03 atau Lab Python.",
     "Berapa % pelanggan tiap segmen dan berapa % revenue yang mereka sumbang?",
     "Tulis 1 rekomendasi kampanye untuk segmen At Risk."
    ],
    "quiz": [
     {
      "q": "Pelanggan dengan recency besar (lama tidak belanja) tetapi dulu sering belanja masuk segmen…",
      "o": [
       "Champions",
       "At Risk",
       "Pelanggan baru",
       "Loyal"
      ],
      "a": 1,
      "why": "Dulu bernilai, sekarang mulai hilang."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "RFM analysis python",
      "url": "https://www.youtube.com/results?search_query=rfm%20analysis%20customer%20segmentation%20python"
     }
    ],
    "id": "b-4"
   },
   {
    "title": "Analisis Marketing: CAC, ROAS & Atribusi",
    "dur": 35,
    "sqltag": "Analisis",
    "summary": "Efektivitas channel, CAC vs LTV, payback period, model atribusi.",
    "content": "\n<h4>Pertanyaan utama tim marketing</h4>\n<ol><li>Channel mana yang mendatangkan pelanggan paling <b>murah</b> (CAC)?</li><li>Channel mana yang mendatangkan pelanggan paling <b>bernilai</b> (LTV, retensi)?</li><li>Berapa lama biaya akuisisi “balik modal” (payback)?</li></ol>\n<div class=\"formula\" data-lang=\"SQL\">-- CAC per channel (data mingguan TokoKita)\nSELECT channel,\n       SUM(biaya)                         AS biaya,\n       SUM(signup)                        AS pelanggan_baru,\n       ROUND(1.0 * SUM(biaya) / SUM(signup)) AS cac,\n       ROUND(100.0 * SUM(klik) / SUM(impressions), 2) AS ctr_pct\nFROM marketing\nGROUP BY channel\nORDER BY cac;</div>\n<h4>CAC vs LTV</h4>\n<p>LTV sederhana = rata-rata total laba kotor per pelanggan dalam X bulan. Bandingkan LTV:CAC per channel; rasio ≥ 3 umumnya dianggap sehat.</p>\n<h4>Atribusi</h4>\n<table class=\"tbl\"><tr><th>Model</th><th>Kredit diberikan ke…</th></tr>\n<tr><td>Last click</td><td>Sentuhan terakhir sebelum beli (default banyak tool)</td></tr>\n<tr><td>First click</td><td>Sentuhan pertama</td></tr>\n<tr><td>Linear</td><td>Dibagi rata ke semua sentuhan</td></tr>\n<tr><td>Time decay</td><td>Lebih besar ke sentuhan terdekat</td></tr>\n<tr><td>Data-driven</td><td>Berdasarkan model statistik (GA4)</td></tr></table>\n<div class=\"warn\">⚠️ Last-click cenderung meremehkan channel awareness (TikTok/Instagram) dan melebihkan Google Ads/brand search. Pertimbangkan uji incrementality (geo test/holdout).</div>",
    "practice": [
     "Hitung CAC & CTR per channel dari tabel marketing.",
     "Gabungkan dengan revenue pelanggan per channel_akuisisi untuk LTV:CAC.",
     "Kerjakan file Excel latihan 08 (GlowUp Skincare)."
    ],
    "quiz": [
     {
      "q": "Rasio LTV:CAC yang umumnya dianggap sehat?",
      "o": [
       "< 1",
       "≈ 1",
       "≥ 3",
       "Tidak relevan"
      ],
      "a": 2,
      "why": "Nilai pelanggan minimal 3× biaya untuk mendapatkannya."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Marketing analytics CAC LTV ROAS",
      "url": "https://www.youtube.com/results?search_query=marketing%20analytics%20cac%20ltv%20roas%20explained"
     }
    ],
    "id": "b-5"
   }
  ]
 },
 {
  "id": 9,
  "slug": "karier",
  "title": "Karier & Portofolio",
  "tag": "Karier",
  "color": "#475569",
  "desc": "Membangun portofolio, CV & LinkedIn, persiapan interview & tes teknis, serta roadmap belajar.",
  "lessons": [
   {
    "id": "k-1",
    "title": "Portofolio & Persiapan Kerja",
    "dur": 40,
    "summary": "3 proyek, GitHub/LinkedIn, CV, dan latihan interview.",
    "content": "\n<h4>3 proyek portofolio wajib</h4>\n<ol>\n<li><b>Excel</b>: data cleaning + Pivot + dashboard interaktif (Level 2 & 6).</li>\n<li><b>SQL</b>: analisis dataset publik dengan JOIN, CTE, dan window function.</li>\n<li><b>BI / Python</b>: dashboard Power BI/Tableau atau notebook analisis end-to-end.</li>\n</ol>\n<h4>Struktur studi kasus (untuk setiap proyek)</h4>\n<p>Latar belakang → Pertanyaan bisnis → Data & cleaning → Analisis → Insight (3 poin) → Rekomendasi → Link file.</p>\n<h4>Tempat publikasi</h4>\n<ul><li>GitHub (README yang rapi), Tableau Public, NovyPro (Power BI), Medium/LinkedIn post.</li></ul>\n<h4>Pertanyaan interview yang sering muncul</h4>\n<ul>\n<li>Bedanya VLOOKUP & XLOOKUP / INNER & LEFT JOIN?</li>\n<li>Bagaimana menangani missing values & outlier?</li>\n<li>Ceritakan proyek di mana analisis Anda mengubah keputusan.</li>\n<li>Live test: buat Pivot / tulis query dalam 30 menit.</li>\n</ul>\n<div class=\"tip\">💡 Ukur hasil di CV dengan angka: “Mengotomatisasi laporan mingguan dengan Power Query, menghemat 4 jam/minggu”.</div>",
    "practice": [
     "Pilih 1 dataset (Kaggle/BPS/data.go.id) dan tulis studi kasus lengkap.",
     "Buat repositori GitHub 'portofolio-data-analyst'.",
     "Latih 10 pertanyaan interview, rekam jawaban Anda."
    ],
    "quiz": [
     {
      "q": "Bagian terpenting studi kasus portofolio menurut recruiter?",
      "o": [
       "Warna dashboard",
       "Insight & rekomendasi bisnis",
       "Jumlah rumus",
       "Panjang dokumen"
      ],
      "a": 1,
      "why": "Recruiter ingin melihat Anda mengubah data menjadi keputusan."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Kaggle Datasets",
      "url": "https://www.kaggle.com/datasets"
     },
     {
      "type": "course",
      "title": "Portal Satu Data Indonesia (data.go.id)",
      "url": "https://data.go.id/"
     },
     {
      "type": "course",
      "title": "BPS — Badan Pusat Statistik",
      "url": "https://www.bps.go.id/"
     },
     {
      "type": "yt",
      "title": "Data analyst portfolio project ideas",
      "url": "https://www.youtube.com/results?search_query=data%20analyst%20portfolio%20project%20excel%20sql%20power%20bi"
     }
    ]
   },
   {
    "title": "CV, LinkedIn & Strategi Melamar",
    "dur": 30,
    "summary": "CV ATS-friendly, poin berdampak, profil LinkedIn, dan cara melamar efektif.",
    "content": "\n<h4>CV satu halaman yang lolos ATS</h4>\n<ul><li>Format sederhana (tanpa tabel/kolom rumit), font standar, PDF.</li><li>Urutan: Ringkasan → Skill → Pengalaman/Proyek → Pendidikan → Sertifikasi.</li><li>Masukkan kata kunci dari lowongan (SQL, Power BI, Python, Excel, A/B testing).</li></ul>\n<h4>Rumus poin pengalaman: Aksi + Alat + Hasil terukur</h4>\n<table class=\"tbl\"><tr><th>❌ Lemah</th><th>✅ Kuat</th></tr>\n<tr><td>Membuat laporan penjualan</td><td>Mengotomatisasi laporan penjualan mingguan dengan SQL & Power Query, memangkas waktu dari 4 jam → 20 menit</td></tr>\n<tr><td>Menganalisis data pelanggan</td><td>Membangun segmentasi RFM untuk 12 rb pelanggan; kampanye win-back segmen At Risk meningkatkan repeat order 8%</td></tr></table>\n<p>Belum punya pengalaman kerja? Gunakan proyek portofolio dengan format yang sama.</p>\n<h4>LinkedIn</h4>\n<ul><li>Headline: “Data Analyst | SQL · Power BI · Python | E-commerce analytics”.</li><li>Featured: link dashboard Tableau Public/Power BI dan GitHub.</li><li>Posting proses belajar & insight proyek secara rutin.</li></ul>\n<h4>Strategi melamar</h4>\n<ul><li>Sesuaikan CV untuk setiap lowongan (10 menit per lamaran).</li><li>Cari referral: hubungi analis di perusahaan tujuan dengan pesan singkat & spesifik.</li><li>Pertimbangkan jalur masuk: internship, Junior DA, Business/Operations Analyst, Reporting Analyst, BI Analyst.</li><li>Catat semua lamaran di tracker (Sheets) agar bisa dievaluasi.</li></ul>",
    "practice": [
     "Tulis ulang 3 poin CV-mu dengan rumus Aksi + Alat + Hasil.",
     "Perbarui headline & bagian Featured LinkedIn.",
     "Buat tracker lamaran: perusahaan, posisi, tanggal, status, kontak."
    ],
    "quiz": [
     {
      "q": "Poin CV paling kuat memuat…",
      "o": [
       "Daftar tugas",
       "Aksi + alat + hasil terukur",
       "Hobi",
       "Foto profesional"
      ],
      "a": 1,
      "why": "Recruiter mencari dampak yang terukur."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Data analyst resume tips",
      "url": "https://www.youtube.com/results?search_query=data%20analyst%20resume%20tips%20no%20experience"
     }
    ],
    "id": "k-2"
   },
   {
    "title": "Persiapan Interview & Tes Teknis",
    "dur": 40,
    "summary": "Jenis tes, soal SQL/Excel klasik, studi kasus, metode STAR, dan pertanyaan balik.",
    "content": "\n<h4>Tahap umum rekrutmen DA</h4>\n<ol><li>Screening HR</li><li>Tes teknis: SQL (live/online), Excel, kadang Python/statistik</li><li>Take-home case: dataset + presentasi insight</li><li>Interview user (studi kasus bisnis & behavioral)</li></ol>\n<h4>Soal SQL yang sering keluar</h4>\n<ul><li>Top-N per kelompok (ROW_NUMBER/RANK).</li><li>Growth MoM (LAG).</li><li>Pelanggan yang order di bulan X tetapi tidak di bulan Y (anti-join).</li><li>Retensi / repeat rate.</li><li>Nilai kedua tertinggi, duplikat, running total.</li></ul>\n<p>Semuanya ada di <a href=\"#/lab/sql\">Lab SQL</a>, level Window & Analisis.</p>\n<h4>Studi kasus bisnis: kerangka menjawab</h4>\n<ol><li>Klarifikasi tujuan & definisi metrik.</li><li>Pecah masalah (issue tree).</li><li>Sebut data yang dibutuhkan & analisisnya.</li><li>Hipotesis dan cara mengujinya.</li><li>Rekomendasi + cara mengukur keberhasilan.</li></ol>\n<p>Contoh: “Order aplikasi turun 15% minggu ini. Apa yang kamu lakukan?” → cek data valid → segmentasi (platform, kota, channel, pelanggan baru/lama) → funnel → faktor eksternal → rekomendasi.</p>\n<h4>Pertanyaan behavioral: metode STAR</h4>\n<p><b>S</b>ituasi → <b>T</b>ugas → <b>A</b>ksi (detail yang kamu lakukan) → <b>R</b>esult (angka).</p>\n<h4>Siapkan pertanyaan untuk pewawancara</h4>\n<ul><li>Seperti apa stack data tim (warehouse, BI tool)?</li><li>Bagaimana analis berkolaborasi dengan tim bisnis?</li><li>Apa tantangan data terbesar saat ini?</li></ul>",
    "practice": [
     "Selesaikan semua soal Lab SQL tanpa melihat solusi, dengan batas waktu 10 menit per soal.",
     "Latih 1 studi kasus bisnis dengan teman (bergantian peran).",
     "Siapkan 3 cerita STAR dari pengalamanmu."
    ],
    "quiz": [
     {
      "q": "Langkah pertama menjawab studi kasus 'order turun 15%'?",
      "o": [
       "Langsung menebak penyebab",
       "Klarifikasi tujuan, definisi & validitas data",
       "Membuat dashboard baru",
       "Menyalahkan tim marketing"
      ],
      "a": 1,
      "why": "Pastikan masalahnya nyata dan definisinya jelas."
     }
    ],
    "res": [
     {
      "type": "yt",
      "title": "Data analyst interview questions",
      "url": "https://www.youtube.com/results?search_query=data%20analyst%20interview%20questions%20sql%20case%20study"
     },
     {
      "type": "course",
      "title": "DataLemur — soal SQL interview",
      "url": "https://datalemur.com/"
     },
     {
      "type": "course",
      "title": "StrataScratch — soal SQL & Python",
      "url": "https://www.stratascratch.com/"
     }
    ],
    "id": "k-3"
   },
   {
    "title": "Roadmap 6 Bulan & Sertifikasi",
    "dur": 15,
    "summary": "Rencana belajar mingguan, sertifikasi yang relevan, dan cara tetap konsisten.",
    "content": "\n<table class=\"tbl\"><tr><th>Bulan</th><th>Fokus</th><th>Target output</th></tr>\n<tr><td>1</td><td>Fondasi + Excel (Level 1–2)</td><td>File latihan Excel 01–05 selesai</td></tr>\n<tr><td>2</td><td>Statistik + SQL dasar (Level 3–4)</td><td>Lab SQL Dasar–JOIN selesai</td></tr>\n<tr><td>3</td><td>SQL lanjut + cleaning/EDA (Level 4–5)</td><td>Lab SQL semua selesai; EDA TokoKita</td></tr>\n<tr><td>4</td><td>Visualisasi & BI (Level 6)</td><td>3 proyek BI (Power BI, Tableau, Looker)</td></tr>\n<tr><td>5</td><td>Python + analisis bisnis (Level 7–8)</td><td>Notebook cohort/RFM; Lab Python</td></tr>\n<tr><td>6</td><td>Portofolio & melamar (Level 9)</td><td>3 proyek dipublikasikan, CV, 30+ lamaran</td></tr></table>\n<h4>Sertifikasi yang relevan (opsional)</h4>\n<ul>\n<li><b>Google Data Analytics Professional Certificate</b> (Coursera): fondasi lengkap untuk pemula.</li>\n<li><b>Microsoft PL-300: Power BI Data Analyst</b>: jika menargetkan perusahaan pengguna Power BI.</li>\n<li><b>Tableau Desktop Specialist</b>: jika fokus Tableau.</li>\n<li>Program pemerintah/bootcamp lokal (cek ketersediaan terbaru, misal beasiswa digital talent).</li>\n</ul>\n<div class=\"warn\">⚠️ Sertifikat membantu lolos screening, tetapi <b>portofolio & kemampuan tes teknis</b> yang menentukan.</div>\n<h4>Tetap konsisten</h4>\n<ul><li>Target harian kecil (atur di Pengaturan, misal 30 menit).</li><li>Jaga streak 🔥 di website ini.</li><li>Belajar bersama teman/komunitas; jelaskan materi ke orang lain.</li></ul>",
    "practice": [
     "Tulis roadmap pribadimu (tanggal mulai & target tiap bulan).",
     "Atur target menit harian di Pengaturan.",
     "Gabung 1 komunitas data (LinkedIn/Discord/Telegram)."
    ],
    "quiz": [
     {
      "q": "Yang paling menentukan lolos interview teknis?",
      "o": [
       "Jumlah sertifikat",
       "Portofolio & kemampuan memecahkan soal",
       "Desain CV",
       "Jumlah followers"
      ],
      "a": 1,
      "why": "Kemampuan nyata yang diuji."
     }
    ],
    "res": [
     {
      "type": "course",
      "title": "Google Data Analytics Certificate",
      "url": "https://www.coursera.org/professional-certificates/google-data-analytics"
     },
     {
      "type": "doc",
      "title": "Microsoft PL-300 Power BI Data Analyst",
      "url": "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/"
     }
    ],
    "id": "k-4"
   }
  ]
 }
];
