/* Soal Lab SQL (dataset TokoKita). Solusi diuji di SQLite. */
window.LAB_SQL = [
 {
  "id": "sq01",
  "tag": "Dasar",
  "t": "Lihat seluruh katalog",
  "p": "Tampilkan <b>semua kolom</b> dari tabel <code>products</code>.",
  "h": "SELECT * FROM nama_tabel",
  "s": "SELECT * FROM products;",
  "order": false
 },
 {
  "id": "sq02",
  "tag": "Dasar",
  "t": "Produk kecantikan termahal",
  "p": "Tampilkan <code>nama_produk</code> dan <code>harga</code> untuk kategori <b>Kecantikan</b>, urut dari harga termahal.",
  "h": "WHERE kategori = '...' lalu ORDER BY harga DESC",
  "s": "SELECT nama_produk, harga FROM products WHERE kategori = 'Kecantikan' ORDER BY harga DESC, nama_produk;",
  "order": true
 },
 {
  "id": "sq03",
  "tag": "Dasar",
  "t": "10 pelanggan pertama",
  "p": "Tampilkan <code>customer_id, nama, tgl_daftar</code> dari 10 pelanggan yang <b>paling awal mendaftar</b>.",
  "h": "ORDER BY tgl_daftar, customer_id LIMIT 10",
  "s": "SELECT customer_id, nama, tgl_daftar FROM customers ORDER BY tgl_daftar, customer_id LIMIT 10;",
  "order": true
 },
 {
  "id": "sq04",
  "tag": "Dasar",
  "t": "Kota pelanggan",
  "p": "Tampilkan daftar <b>kota unik</b> pelanggan, urut A–Z.",
  "h": "SELECT DISTINCT",
  "s": "SELECT DISTINCT kota FROM customers ORDER BY kota;",
  "order": true
 },
 {
  "id": "sq05",
  "tag": "Dasar",
  "t": "Rentang harga menengah",
  "p": "Tampilkan <code>nama_produk, harga</code> untuk produk dengan harga <b>100.000 sampai 300.000</b> (termasuk batasnya), urut harga termurah lalu nama.",
  "h": "BETWEEN 100000 AND 300000",
  "s": "SELECT nama_produk, harga FROM products WHERE harga BETWEEN 100000 AND 300000 ORDER BY harga, nama_produk;",
  "order": true
 },
 {
  "id": "sq06",
  "tag": "Dasar",
  "t": "Cari dengan LIKE",
  "p": "Tampilkan <code>nama_produk</code> yang namanya mengandung kata <b>Kaos</b> atau <b>Tas</b>.",
  "h": "LIKE '%Kaos%' OR LIKE '%Tas%'",
  "s": "SELECT nama_produk FROM products WHERE nama_produk LIKE '%Kaos%' OR nama_produk LIKE '%Tas%';",
  "order": false
 },
 {
  "id": "sq07",
  "tag": "Dasar",
  "t": "Margin produk tertinggi",
  "p": "Hitung <code>laba_per_unit</code> (harga − hpp) dan <code>margin</code> (laba ÷ harga, <b>3 desimal</b>). Tampilkan <code>nama_produk, laba_per_unit, margin</code> untuk <b>5 produk dengan margin tertinggi</b>.",
  "h": "ROUND(1.0*(harga-hpp)/harga, 3); kalikan 1.0 agar tidak dibulatkan ke bawah",
  "s": "SELECT nama_produk, harga - hpp AS laba_per_unit, ROUND(1.0*(harga-hpp)/harga, 3) AS margin FROM products ORDER BY margin DESC, nama_produk LIMIT 5;",
  "order": true
 },
 {
  "id": "sq08",
  "tag": "Dasar",
  "t": "Retur COD tahun 2026",
  "p": "Tampilkan <code>order_id, tgl_order</code> untuk order berstatus <b>retur</b> dengan metode bayar <b>COD</b> yang terjadi di tahun <b>2026</b>, urut tanggal.",
  "h": "Tiga kondisi dengan AND; tgl_order >= '2026-01-01'",
  "s": "SELECT order_id, tgl_order FROM orders WHERE status = 'retur' AND metode_bayar = 'COD' AND tgl_order >= '2026-01-01' ORDER BY tgl_order, order_id;",
  "order": true
 },
 {
  "id": "sq09",
  "tag": "Agregasi",
  "t": "Pelanggan per kota",
  "p": "Hitung jumlah pelanggan per <code>kota</code>, urut dari yang terbanyak.",
  "h": "GROUP BY kota, COUNT(*)",
  "s": "SELECT kota, COUNT(*) AS jumlah FROM customers GROUP BY kota ORDER BY jumlah DESC, kota;",
  "order": true
 },
 {
  "id": "sq10",
  "tag": "Agregasi",
  "t": "Order per status",
  "p": "Hitung jumlah order untuk setiap <code>status</code>.",
  "h": "GROUP BY status",
  "s": "SELECT status, COUNT(*) AS jumlah FROM orders GROUP BY status;",
  "order": false
 },
 {
  "id": "sq11",
  "tag": "Agregasi",
  "t": "Statistik harga per kategori",
  "p": "Untuk setiap <code>kategori</code>, tampilkan rata-rata harga (dibulatkan tanpa desimal), harga termurah, dan termahal.",
  "h": "ROUND(AVG(harga)), MIN, MAX",
  "s": "SELECT kategori, ROUND(AVG(harga)) AS rata, MIN(harga) AS termurah, MAX(harga) AS termahal FROM products GROUP BY kategori;",
  "order": false
 },
 {
  "id": "sq12",
  "tag": "Agregasi",
  "t": "Kota besar",
  "p": "Tampilkan kota yang memiliki <b>minimal 50 pelanggan</b> beserta jumlahnya.",
  "h": "HAVING COUNT(*) >= 50",
  "s": "SELECT kota, COUNT(*) AS jumlah FROM customers GROUP BY kota HAVING COUNT(*) >= 50;",
  "order": false
 },
 {
  "id": "sq13",
  "tag": "Agregasi",
  "t": "Tingkat pembatalan",
  "p": "Hitung <b>persentase order batal</b> per <code>metode_bayar</code> (2 desimal), urut dari yang tertinggi.",
  "h": "100.0 * SUM(CASE WHEN status='batal' THEN 1 ELSE 0 END) / COUNT(*)",
  "s": "SELECT metode_bayar, ROUND(100.0*SUM(CASE WHEN status='batal' THEN 1 ELSE 0 END)/COUNT(*), 2) AS pct_batal FROM orders GROUP BY metode_bayar ORDER BY pct_batal DESC;",
  "order": true
 },
 {
  "id": "sq14",
  "tag": "Agregasi",
  "t": "Segmen harga",
  "p": "Kelompokkan produk: <b>Murah</b> (&lt;100.000), <b>Sedang</b> (&lt;300.000), <b>Premium</b> (sisanya). Tampilkan segmen dan jumlah produk.",
  "h": "CASE WHEN ... END lalu GROUP BY",
  "s": "SELECT CASE WHEN harga < 100000 THEN 'Murah' WHEN harga < 300000 THEN 'Sedang' ELSE 'Premium' END AS segmen, COUNT(*) AS jumlah FROM products GROUP BY 1;",
  "order": false
 },
 {
  "id": "sq15",
  "tag": "Agregasi",
  "t": "CAC per channel",
  "p": "Dari tabel <code>marketing</code>, tampilkan per <code>channel</code>: total biaya, total signup, dan <b>CAC</b> (biaya ÷ signup, dibulatkan tanpa desimal). Urut CAC termurah.",
  "h": "ROUND(1.0*SUM(biaya)/SUM(signup))",
  "s": "SELECT channel, SUM(biaya) AS biaya, SUM(signup) AS signup, ROUND(1.0*SUM(biaya)/SUM(signup)) AS cac FROM marketing GROUP BY channel ORDER BY cac;",
  "order": true
 },
 {
  "id": "sq16",
  "tag": "Agregasi",
  "t": "Pendaftar per tahun",
  "p": "Hitung jumlah pelanggan baru per <b>tahun</b> pendaftaran.",
  "h": "substr(tgl_daftar, 1, 4) atau strftime('%Y', tgl_daftar)",
  "s": "SELECT substr(tgl_daftar,1,4) AS tahun, COUNT(*) AS jumlah FROM customers GROUP BY 1;",
  "order": false
 },
 {
  "id": "sq17",
  "tag": "JOIN",
  "t": "Revenue per kategori",
  "p": "Hitung <b>revenue</b> order berstatus <b>selesai</b> per <code>kategori</code> (dibulatkan tanpa desimal), urut terbesar. Revenue = qty × harga_satuan × (1 − diskon).",
  "h": "order_items JOIN orders JOIN products, WHERE status='selesai', GROUP BY kategori",
  "s": "SELECT p.kategori, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM order_items oi JOIN orders o ON oi.order_id = o.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status = 'selesai' GROUP BY p.kategori ORDER BY revenue DESC;",
  "order": true
 },
 {
  "id": "sq18",
  "tag": "JOIN",
  "t": "Order terbaru & pelanggannya",
  "p": "Tampilkan <code>order_id, tgl_order, nama, kota</code> untuk <b>10 order selesai terbaru</b>.",
  "h": "orders JOIN customers; ORDER BY tgl_order DESC, order_id DESC LIMIT 10",
  "s": "SELECT o.order_id, o.tgl_order, c.nama, c.kota FROM orders o JOIN customers c ON o.customer_id = c.customer_id WHERE o.status = 'selesai' ORDER BY o.tgl_order DESC, o.order_id DESC LIMIT 10;",
  "order": true
 },
 {
  "id": "sq19",
  "tag": "JOIN",
  "t": "Pelanggan tanpa order",
  "p": "Berapa <b>jumlah</b> pelanggan yang <b>belum pernah</b> membuat order sama sekali?",
  "h": "LEFT JOIN orders ... WHERE o.order_id IS NULL",
  "s": "SELECT COUNT(*) AS jumlah FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;",
  "order": false
 },
 {
  "id": "sq20",
  "tag": "JOIN",
  "t": "Produk tidak laku",
  "p": "Tampilkan <code>nama_produk</code> yang <b>tidak pernah</b> muncul di order_items. (Jika hasilnya kosong, itu jawaban yang benar!)",
  "h": "Anti-join products LEFT JOIN order_items",
  "s": "SELECT p.nama_produk FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id WHERE oi.item_id IS NULL;",
  "order": false
 },
 {
  "id": "sq21",
  "tag": "JOIN",
  "t": "Kota dengan revenue terbesar",
  "p": "Tampilkan <b>5 kota</b> pelanggan dengan revenue order selesai terbesar (dibulatkan tanpa desimal).",
  "h": "3 tabel: order_items, orders, customers",
  "s": "SELECT c.kota, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM order_items oi JOIN orders o ON oi.order_id = o.order_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'selesai' GROUP BY c.kota ORDER BY revenue DESC LIMIT 5;",
  "order": true
 },
 {
  "id": "sq22",
  "tag": "JOIN",
  "t": "Performa channel akuisisi",
  "p": "Per <code>channel_akuisisi</code>, tampilkan <b>jumlah order selesai</b> dan revenue-nya (dibulatkan). Hati-hati: hitung order dengan <code>COUNT(DISTINCT …)</code>.",
  "h": "JOIN order_items membuat 1 order jadi banyak baris → COUNT(DISTINCT o.order_id)",
  "s": "SELECT c.channel_akuisisi, COUNT(DISTINCT o.order_id) AS jml_order, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM orders o JOIN customers c ON c.customer_id = o.customer_id JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY c.channel_akuisisi;",
  "order": false
 },
 {
  "id": "sq23",
  "tag": "JOIN",
  "t": "Gross margin per kategori",
  "p": "Hitung <b>gross margin %</b> order selesai per kategori: (revenue − Σ qty×hpp) ÷ revenue × 100, 1 desimal. Urut tertinggi.",
  "h": "SUM(qty*hpp) dari products",
  "s": "SELECT p.kategori, ROUND(100.0*(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) - SUM(oi.qty*p.hpp))/SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)), 1) AS gm_pct FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status = 'selesai' GROUP BY p.kategori ORDER BY gm_pct DESC;",
  "order": true
 },
 {
  "id": "sq24",
  "tag": "Subquery & CTE",
  "t": "Di atas rata-rata",
  "p": "Tampilkan <code>nama_produk, harga</code> untuk produk yang harganya <b>di atas rata-rata</b> harga semua produk.",
  "h": "WHERE harga > (SELECT AVG(harga) FROM products)",
  "s": "SELECT nama_produk, harga FROM products WHERE harga > (SELECT AVG(harga) FROM products);",
  "order": false
 },
 {
  "id": "sq25",
  "tag": "Subquery & CTE",
  "t": "AOV",
  "p": "Hitung <b>AOV</b>: rata-rata nilai per order untuk order selesai (dibulatkan tanpa desimal). Satu angka saja.",
  "h": "CTE: hitung nilai per order dulu, lalu AVG",
  "s": "WITH v AS (SELECT oi.order_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS nilai FROM order_items oi JOIN orders o ON o.order_id = oi.order_id WHERE o.status = 'selesai' GROUP BY oi.order_id) SELECT ROUND(AVG(nilai)) AS aov FROM v;",
  "order": false
 },
 {
  "id": "sq26",
  "tag": "Subquery & CTE",
  "t": "Top 10 pelanggan",
  "p": "Tampilkan <code>customer_id, nama, total_belanja</code> (dibulatkan) untuk <b>10 pelanggan</b> dengan total belanja order selesai terbesar.",
  "h": "CTE total per customer_id lalu JOIN customers",
  "s": "WITH t AS (SELECT o.customer_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS total FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY o.customer_id) SELECT t.customer_id, c.nama, ROUND(t.total) AS total_belanja FROM t JOIN customers c ON c.customer_id = t.customer_id ORDER BY t.total DESC LIMIT 10;",
  "order": true
 },
 {
  "id": "sq27",
  "tag": "Subquery & CTE",
  "t": "Repeat rate",
  "p": "Dari pelanggan yang punya order selesai, berapa <b>persen</b> yang punya <b>≥ 2 order selesai</b>? (2 desimal)",
  "h": "CTE jumlah order per pelanggan, lalu 100.0*SUM(CASE WHEN n>=2 ...)/COUNT(*)",
  "s": "WITH n AS (SELECT customer_id, COUNT(*) AS jml FROM orders WHERE status = 'selesai' GROUP BY customer_id) SELECT ROUND(100.0*SUM(CASE WHEN jml >= 2 THEN 1 ELSE 0 END)/COUNT(*), 2) AS repeat_rate FROM n;",
  "order": false
 },
 {
  "id": "sq28",
  "tag": "Subquery & CTE",
  "t": "Revenue bulanan 2026",
  "p": "Tampilkan <code>bulan</code> (format YYYY-MM) dan revenue order selesai (dibulatkan) untuk tahun <b>2026</b>, urut bulan.",
  "h": "substr(tgl_order,1,7) atau strftime('%Y-%m', tgl_order)",
  "s": "SELECT substr(o.tgl_order,1,7) AS bulan, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' AND o.tgl_order >= '2026-01-01' GROUP BY 1 ORDER BY 1;",
  "order": true
 },
 {
  "id": "sq29",
  "tag": "Subquery & CTE",
  "t": "Pelanggan 1 vs 2+ order",
  "p": "Kelompokkan pelanggan (yang punya order selesai) menjadi <b>'1 order'</b> dan <b>'2+ order'</b>. Tampilkan tipe, jumlah pelanggan, dan rata-rata total belanja (dibulatkan).",
  "h": "Dua CTE: nilai per order → ringkasan per pelanggan",
  "s": "WITH v AS (SELECT o.customer_id, o.order_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS nilai FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status='selesai' GROUP BY o.customer_id, o.order_id), c AS (SELECT customer_id, COUNT(*) AS jml, SUM(nilai) AS total FROM v GROUP BY customer_id) SELECT CASE WHEN jml = 1 THEN '1 order' ELSE '2+ order' END AS tipe, COUNT(*) AS pelanggan, ROUND(AVG(total)) AS rata_belanja FROM c GROUP BY 1;",
  "order": false
 },
 {
  "id": "sq30",
  "tag": "Window",
  "t": "Top 3 produk per kategori",
  "p": "Berdasarkan total <b>unit terjual</b> (semua order), tampilkan <code>kategori, nama_produk, unit, peringkat</code> untuk produk dengan <b>peringkat 1–3</b> di setiap kategori (pakai RANK).",
  "h": "CTE unit per produk, lalu RANK() OVER (PARTITION BY kategori ORDER BY unit DESC)",
  "s": "WITH j AS (SELECT p.kategori, p.nama_produk, SUM(oi.qty) AS unit FROM order_items oi JOIN products p ON p.product_id = oi.product_id GROUP BY 1, 2), r AS (SELECT *, RANK() OVER (PARTITION BY kategori ORDER BY unit DESC) AS peringkat FROM j) SELECT * FROM r WHERE peringkat <= 3;",
  "order": false
 },
 {
  "id": "sq31",
  "tag": "Window",
  "t": "Order pertama tiap pelanggan",
  "p": "Untuk setiap pelanggan yang pernah order, tampilkan <code>customer_id, order_id, tgl_order</code> dari <b>order pertamanya</b> (semua status). Jika tanggal sama, ambil order_id terkecil.",
  "h": "ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id) = 1",
  "s": "SELECT customer_id, order_id, tgl_order FROM (SELECT o.*, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id) AS rn FROM orders o) WHERE rn = 1;",
  "order": false
 },
 {
  "id": "sq32",
  "tag": "Window",
  "t": "Growth MoM",
  "p": "Tampilkan <code>bulan, revenue, growth_pct</code> untuk seluruh bulan (order selesai). growth_pct = % perubahan dari bulan sebelumnya, <b>1 desimal</b> (bulan pertama NULL). Revenue dibulatkan.",
  "h": "CTE revenue bulanan lalu LAG(revenue) OVER (ORDER BY bulan)",
  "s": "WITH b AS (SELECT substr(o.tgl_order,1,7) AS bulan, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY 1) SELECT bulan, ROUND(rev) AS revenue, ROUND(100.0*(rev - LAG(rev) OVER (ORDER BY bulan))/LAG(rev) OVER (ORDER BY bulan), 1) AS growth_pct FROM b ORDER BY bulan;",
  "order": true
 },
 {
  "id": "sq33",
  "tag": "Window",
  "t": "Revenue kumulatif 2026",
  "p": "Untuk bulan-bulan di <b>2026</b>, tampilkan <code>bulan, revenue, kumulatif</code> (running total sejak Januari 2026). Semua dibulatkan, order selesai.",
  "h": "SUM(rev) OVER (ORDER BY bulan)",
  "s": "WITH b AS (SELECT substr(o.tgl_order,1,7) AS bulan, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' AND o.tgl_order >= '2026-01-01' GROUP BY 1) SELECT bulan, ROUND(rev) AS revenue, ROUND(SUM(rev) OVER (ORDER BY bulan)) AS kumulatif FROM b ORDER BY bulan;",
  "order": true
 },
 {
  "id": "sq34",
  "tag": "Window",
  "t": "Kontribusi kategori",
  "p": "Tampilkan <code>kategori, revenue, pct_total</code>: persentase revenue tiap kategori terhadap total (order selesai, <b>1 desimal</b>). Revenue dibulatkan.",
  "h": "100.0 * rev / SUM(rev) OVER ()",
  "s": "WITH k AS (SELECT p.kategori, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status='selesai' GROUP BY 1) SELECT kategori, ROUND(rev) AS revenue, ROUND(100.0*rev/SUM(rev) OVER (), 1) AS pct_total FROM k;",
  "order": false
 },
 {
  "id": "sq35",
  "tag": "Window",
  "t": "Jarak antar order",
  "p": "Berapa <b>rata-rata jarak (hari)</b> antara order selesai berturut-turut dari pelanggan yang sama? Satu angka, 1 desimal.",
  "h": "julianday(tgl_order) - julianday(LAG(tgl_order) OVER (PARTITION BY customer_id ORDER BY tgl_order))",
  "s": "WITH g AS (SELECT julianday(tgl_order) - julianday(LAG(tgl_order) OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id)) AS jarak FROM orders WHERE status = 'selesai') SELECT ROUND(AVG(jarak), 1) AS rata_jarak FROM g WHERE jarak IS NOT NULL;",
  "order": false
 },
 {
  "id": "sq36",
  "tag": "Window",
  "t": "Kategori favorit tiap kota",
  "p": "Untuk setiap <code>kota</code> pelanggan, tampilkan <b>kategori</b> dengan revenue order selesai terbesar beserta revenue-nya (dibulatkan).",
  "h": "CTE revenue per kota×kategori, lalu ROW_NUMBER() OVER (PARTITION BY kota ORDER BY rev DESC) = 1",
  "s": "WITH k AS (SELECT c.kota, p.kategori, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'selesai' GROUP BY 1, 2), r AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY kota ORDER BY rev DESC) AS rn FROM k) SELECT kota, kategori, ROUND(rev) AS revenue FROM r WHERE rn = 1;",
  "order": false
 },
 {
  "id": "sq37",
  "tag": "Analisis",
  "t": "Funnel per device",
  "p": "Dari <code>web_events</code>, hitung jumlah <b>sesi unik</b> di tiap langkah (view_product, add_to_cart, checkout, purchase) per <code>device</code>. Kolom: device, view, cart, checkout, purchase.",
  "h": "COUNT(DISTINCT CASE WHEN event='...' THEN session_id END)",
  "s": "SELECT device, COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END) AS view, COUNT(DISTINCT CASE WHEN event='add_to_cart' THEN session_id END) AS cart, COUNT(DISTINCT CASE WHEN event='checkout' THEN session_id END) AS checkout, COUNT(DISTINCT CASE WHEN event='purchase' THEN session_id END) AS purchase FROM web_events GROUP BY device;",
  "order": false
 },
 {
  "id": "sq38",
  "tag": "Analisis",
  "t": "Conversion per sumber trafik",
  "p": "Hitung <b>conversion rate</b> (sesi purchase ÷ sesi view_product × 100, 2 desimal) per <code>sumber</code>, urut tertinggi.",
  "h": "Gabungkan teknik soal funnel dengan pembagian",
  "s": "SELECT sumber, ROUND(100.0*COUNT(DISTINCT CASE WHEN event='purchase' THEN session_id END)/COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END), 2) AS cr FROM web_events GROUP BY sumber ORDER BY cr DESC;",
  "order": true
 },
 {
  "id": "sq39",
  "tag": "Analisis",
  "t": "Ukuran cohort 2026",
  "p": "Tentukan <b>cohort</b> setiap pelanggan = bulan (YYYY-MM) order selesai <b>pertamanya</b>. Tampilkan <code>cohort, pelanggan</code> untuk cohort di tahun 2026, urut cohort.",
  "h": "CTE MIN(substr(tgl_order,1,7)) per customer_id",
  "s": "WITH f AS (SELECT customer_id, MIN(substr(tgl_order,1,7)) AS cohort FROM orders WHERE status = 'selesai' GROUP BY customer_id) SELECT cohort, COUNT(*) AS pelanggan FROM f WHERE cohort >= '2026-01' GROUP BY cohort ORDER BY cohort;",
  "order": true
 },
 {
  "id": "sq40",
  "tag": "Analisis",
  "t": "Retensi bulan ke-1",
  "p": "Untuk cohort <b>2026-01 s.d. 2026-09</b>, hitung <b>% pelanggan</b> yang order selesai lagi di <b>bulan kalender berikutnya</b> setelah bulan cohort (1 desimal). Kolom: cohort, retensi_m1.",
  "h": "Hitung bulan_ke = selisih bulan antara order & cohort; retensi = pelanggan unik dgn bulan_ke=1 ÷ ukuran cohort",
  "s": "WITH f AS (SELECT customer_id, MIN(substr(tgl_order,1,7)) AS cohort FROM orders WHERE status='selesai' GROUP BY customer_id), a AS (SELECT DISTINCT o.customer_id, f.cohort, (CAST(substr(o.tgl_order,1,4) AS INT) - CAST(substr(f.cohort,1,4) AS INT))*12 + CAST(substr(o.tgl_order,6,2) AS INT) - CAST(substr(f.cohort,6,2) AS INT) AS bulan_ke FROM orders o JOIN f ON f.customer_id = o.customer_id WHERE o.status='selesai') SELECT cohort, ROUND(100.0*COUNT(DISTINCT CASE WHEN bulan_ke = 1 THEN customer_id END)/COUNT(DISTINCT customer_id), 1) AS retensi_m1 FROM a WHERE cohort BETWEEN '2026-01' AND '2026-09' GROUP BY cohort ORDER BY cohort;",
  "order": true
 },
 {
  "id": "sq41",
  "tag": "Analisis",
  "t": "Analisis Pareto",
  "p": "Urutkan produk dari revenue terbesar (order selesai). Berapa <b>jumlah produk</b> yang dibutuhkan untuk mencapai <b>80% revenue</b>? (hitung produk yang persentase kumulatif <i>sebelumnya</i> masih &lt; 80%)",
  "h": "SUM(rev) OVER (ORDER BY rev DESC) − rev = kumulatif sebelum produk itu",
  "s": "WITH p AS (SELECT oi.product_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id WHERE o.status='selesai' GROUP BY 1), c AS (SELECT rev, (SUM(rev) OVER (ORDER BY rev DESC ROWS UNBOUNDED PRECEDING) - rev) / SUM(rev) OVER () AS kum_sebelum FROM p) SELECT COUNT(*) AS jumlah_produk FROM c WHERE kum_sebelum < 0.8;",
  "order": false
 },
 {
  "id": "sq42",
  "tag": "Analisis",
  "t": "LTV vs CAC",
  "p": "Untuk channel berbayar (Instagram, TikTok, Google Ads), tampilkan <code>channel, cac, revenue_per_pelanggan, rasio</code>: CAC dari tabel marketing, revenue_per_pelanggan = revenue order selesai pelanggan channel itu ÷ jumlah pelanggan channel itu (semua pelanggan terdaftar). Bulatkan cac & revenue tanpa desimal, rasio 2 desimal. Urut rasio tertinggi.",
  "h": "Dua CTE (marketing & revenue per channel_akuisisi) lalu JOIN di channel",
  "s": "WITH m AS (SELECT channel, 1.0*SUM(biaya)/SUM(signup) AS cac FROM marketing GROUP BY channel), r AS (SELECT c.channel_akuisisi AS channel, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM customers c JOIN orders o ON o.customer_id = c.customer_id JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY 1), n AS (SELECT channel_akuisisi AS channel, COUNT(*) AS jml FROM customers GROUP BY 1) SELECT m.channel, ROUND(m.cac) AS cac, ROUND(r.rev/n.jml) AS revenue_per_pelanggan, ROUND(r.rev/n.jml/m.cac, 2) AS rasio FROM m JOIN r ON r.channel = m.channel JOIN n ON n.channel = m.channel ORDER BY rasio DESC;",
  "order": true
 },
 {
  "id": "sq43",
  "tag": "Analisis",
  "t": "Pelanggan At Risk",
  "p": "Berapa <b>jumlah pelanggan</b> yang punya <b>≥ 2 order selesai</b> tetapi order selesai terakhirnya <b>sebelum 2026-07-01</b>? (kandidat kampanye win-back)",
  "h": "GROUP BY customer_id HAVING COUNT(*) >= 2 AND MAX(tgl_order) < '2026-07-01'",
  "s": "SELECT COUNT(*) AS jumlah FROM (SELECT customer_id FROM orders WHERE status = 'selesai' GROUP BY customer_id HAVING COUNT(*) >= 2 AND MAX(tgl_order) < '2026-07-01');",
  "order": false
 }
];
