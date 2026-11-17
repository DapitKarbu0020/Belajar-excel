-- KUNCI JAWABAN LATIHAN SQL — TokoKita
-- Database: tokokita.db (SQLite) atau jalankan tokokita.sql di PostgreSQL/MySQL.
-- Revenue baris = qty * harga_satuan * (1 - diskon). Pendapatan hanya dari order status 'selesai'.
-- Catatan: fungsi tanggal ditulis untuk SQLite (substr/strftime/julianday).

-- [sq01] (Dasar) Lihat seluruh katalog
-- Tampilkan semua kolom dari tabel products.
SELECT * FROM products;

-- [sq02] (Dasar) Produk kecantikan termahal
-- Tampilkan nama_produk dan harga untuk kategori Kecantikan, urut dari harga termahal.
SELECT nama_produk, harga FROM products WHERE kategori = 'Kecantikan' ORDER BY harga DESC, nama_produk;

-- [sq03] (Dasar) 10 pelanggan pertama
-- Tampilkan customer_id, nama, tgl_daftar dari 10 pelanggan yang paling awal mendaftar.
SELECT customer_id, nama, tgl_daftar FROM customers ORDER BY tgl_daftar, customer_id LIMIT 10;

-- [sq04] (Dasar) Kota pelanggan
-- Tampilkan daftar kota unik pelanggan, urut A–Z.
SELECT DISTINCT kota FROM customers ORDER BY kota;

-- [sq05] (Dasar) Rentang harga menengah
-- Tampilkan nama_produk, harga untuk produk dengan harga 100.000 sampai 300.000 (termasuk batasnya), urut harga termurah lalu nama.
SELECT nama_produk, harga FROM products WHERE harga BETWEEN 100000 AND 300000 ORDER BY harga, nama_produk;

-- [sq06] (Dasar) Cari dengan LIKE
-- Tampilkan nama_produk yang namanya mengandung kata Kaos atau Tas.
SELECT nama_produk FROM products WHERE nama_produk LIKE '%Kaos%' OR nama_produk LIKE '%Tas%';

-- [sq07] (Dasar) Margin produk tertinggi
-- Hitung laba_per_unit (harga − hpp) dan margin (laba ÷ harga, 3 desimal). Tampilkan nama_produk, laba_per_unit, margin untuk 5 produk dengan margin tertinggi.
SELECT nama_produk, harga - hpp AS laba_per_unit, ROUND(1.0*(harga-hpp)/harga, 3) AS margin FROM products ORDER BY margin DESC, nama_produk LIMIT 5;

-- [sq08] (Dasar) Retur COD tahun 2026
-- Tampilkan order_id, tgl_order untuk order berstatus retur dengan metode bayar COD yang terjadi di tahun 2026, urut tanggal.
SELECT order_id, tgl_order FROM orders WHERE status = 'retur' AND metode_bayar = 'COD' AND tgl_order >= '2026-01-01' ORDER BY tgl_order, order_id;

-- [sq09] (Agregasi) Pelanggan per kota
-- Hitung jumlah pelanggan per kota, urut dari yang terbanyak.
SELECT kota, COUNT(*) AS jumlah FROM customers GROUP BY kota ORDER BY jumlah DESC, kota;

-- [sq10] (Agregasi) Order per status
-- Hitung jumlah order untuk setiap status.
SELECT status, COUNT(*) AS jumlah FROM orders GROUP BY status;

-- [sq11] (Agregasi) Statistik harga per kategori
-- Untuk setiap kategori, tampilkan rata-rata harga (dibulatkan tanpa desimal), harga termurah, dan termahal.
SELECT kategori, ROUND(AVG(harga)) AS rata, MIN(harga) AS termurah, MAX(harga) AS termahal FROM products GROUP BY kategori;

-- [sq12] (Agregasi) Kota besar
-- Tampilkan kota yang memiliki minimal 50 pelanggan beserta jumlahnya.
SELECT kota, COUNT(*) AS jumlah FROM customers GROUP BY kota HAVING COUNT(*) >= 50;

-- [sq13] (Agregasi) Tingkat pembatalan
-- Hitung persentase order batal per metode_bayar (2 desimal), urut dari yang tertinggi.
SELECT metode_bayar, ROUND(100.0*SUM(CASE WHEN status='batal' THEN 1 ELSE 0 END)/COUNT(*), 2) AS pct_batal FROM orders GROUP BY metode_bayar ORDER BY pct_batal DESC;

-- [sq14] (Agregasi) Segmen harga
-- Kelompokkan produk: Murah (<100.000), Sedang (<300.000), Premium (sisanya). Tampilkan segmen dan jumlah produk.
SELECT CASE WHEN harga < 100000 THEN 'Murah' WHEN harga < 300000 THEN 'Sedang' ELSE 'Premium' END AS segmen, COUNT(*) AS jumlah FROM products GROUP BY 1;

-- [sq15] (Agregasi) CAC per channel
-- Dari tabel marketing, tampilkan per channel: total biaya, total signup, dan CAC (biaya ÷ signup, dibulatkan tanpa desimal). Urut CAC termurah.
SELECT channel, SUM(biaya) AS biaya, SUM(signup) AS signup, ROUND(1.0*SUM(biaya)/SUM(signup)) AS cac FROM marketing GROUP BY channel ORDER BY cac;

-- [sq16] (Agregasi) Pendaftar per tahun
-- Hitung jumlah pelanggan baru per tahun pendaftaran.
SELECT substr(tgl_daftar,1,4) AS tahun, COUNT(*) AS jumlah FROM customers GROUP BY 1;

-- [sq17] (JOIN) Revenue per kategori
-- Hitung revenue order berstatus selesai per kategori (dibulatkan tanpa desimal), urut terbesar. Revenue = qty × harga_satuan × (1 − diskon).
SELECT p.kategori, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM order_items oi JOIN orders o ON oi.order_id = o.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status = 'selesai' GROUP BY p.kategori ORDER BY revenue DESC;

-- [sq18] (JOIN) Order terbaru & pelanggannya
-- Tampilkan order_id, tgl_order, nama, kota untuk 10 order selesai terbaru.
SELECT o.order_id, o.tgl_order, c.nama, c.kota FROM orders o JOIN customers c ON o.customer_id = c.customer_id WHERE o.status = 'selesai' ORDER BY o.tgl_order DESC, o.order_id DESC LIMIT 10;

-- [sq19] (JOIN) Pelanggan tanpa order
-- Berapa jumlah pelanggan yang belum pernah membuat order sama sekali?
SELECT COUNT(*) AS jumlah FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;

-- [sq20] (JOIN) Produk tidak laku
-- Tampilkan nama_produk yang tidak pernah muncul di order_items. (Jika hasilnya kosong, itu jawaban yang benar!)
SELECT p.nama_produk FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id WHERE oi.item_id IS NULL;

-- [sq21] (JOIN) Kota dengan revenue terbesar
-- Tampilkan 5 kota pelanggan dengan revenue order selesai terbesar (dibulatkan tanpa desimal).
SELECT c.kota, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM order_items oi JOIN orders o ON oi.order_id = o.order_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'selesai' GROUP BY c.kota ORDER BY revenue DESC LIMIT 5;

-- [sq22] (JOIN) Performa channel akuisisi
-- Per channel_akuisisi, tampilkan jumlah order selesai dan revenue-nya (dibulatkan). Hati-hati: hitung order dengan COUNT(DISTINCT …).
SELECT c.channel_akuisisi, COUNT(DISTINCT o.order_id) AS jml_order, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM orders o JOIN customers c ON c.customer_id = o.customer_id JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY c.channel_akuisisi;

-- [sq23] (JOIN) Gross margin per kategori
-- Hitung gross margin % order selesai per kategori: (revenue − Σ qty×hpp) ÷ revenue × 100, 1 desimal. Urut tertinggi.
SELECT p.kategori, ROUND(100.0*(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) - SUM(oi.qty*p.hpp))/SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)), 1) AS gm_pct FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status = 'selesai' GROUP BY p.kategori ORDER BY gm_pct DESC;

-- [sq24] (Subquery & CTE) Di atas rata-rata
-- Tampilkan nama_produk, harga untuk produk yang harganya di atas rata-rata harga semua produk.
SELECT nama_produk, harga FROM products WHERE harga > (SELECT AVG(harga) FROM products);

-- [sq25] (Subquery & CTE) AOV
-- Hitung AOV: rata-rata nilai per order untuk order selesai (dibulatkan tanpa desimal). Satu angka saja.
WITH v AS (SELECT oi.order_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS nilai FROM order_items oi JOIN orders o ON o.order_id = oi.order_id WHERE o.status = 'selesai' GROUP BY oi.order_id) SELECT ROUND(AVG(nilai)) AS aov FROM v;

-- [sq26] (Subquery & CTE) Top 10 pelanggan
-- Tampilkan customer_id, nama, total_belanja (dibulatkan) untuk 10 pelanggan dengan total belanja order selesai terbesar.
WITH t AS (SELECT o.customer_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS total FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY o.customer_id) SELECT t.customer_id, c.nama, ROUND(t.total) AS total_belanja FROM t JOIN customers c ON c.customer_id = t.customer_id ORDER BY t.total DESC LIMIT 10;

-- [sq27] (Subquery & CTE) Repeat rate
-- Dari pelanggan yang punya order selesai, berapa persen yang punya ≥ 2 order selesai? (2 desimal)
WITH n AS (SELECT customer_id, COUNT(*) AS jml FROM orders WHERE status = 'selesai' GROUP BY customer_id) SELECT ROUND(100.0*SUM(CASE WHEN jml >= 2 THEN 1 ELSE 0 END)/COUNT(*), 2) AS repeat_rate FROM n;

-- [sq28] (Subquery & CTE) Revenue bulanan 2026
-- Tampilkan bulan (format YYYY-MM) dan revenue order selesai (dibulatkan) untuk tahun 2026, urut bulan.
SELECT substr(o.tgl_order,1,7) AS bulan, ROUND(SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon))) AS revenue FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' AND o.tgl_order >= '2026-01-01' GROUP BY 1 ORDER BY 1;

-- [sq29] (Subquery & CTE) Pelanggan 1 vs 2+ order
-- Kelompokkan pelanggan (yang punya order selesai) menjadi '1 order' dan '2+ order'. Tampilkan tipe, jumlah pelanggan, dan rata-rata total belanja (dibulatkan).
WITH v AS (SELECT o.customer_id, o.order_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS nilai FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status='selesai' GROUP BY o.customer_id, o.order_id), c AS (SELECT customer_id, COUNT(*) AS jml, SUM(nilai) AS total FROM v GROUP BY customer_id) SELECT CASE WHEN jml = 1 THEN '1 order' ELSE '2+ order' END AS tipe, COUNT(*) AS pelanggan, ROUND(AVG(total)) AS rata_belanja FROM c GROUP BY 1;

-- [sq30] (Window) Top 3 produk per kategori
-- Berdasarkan total unit terjual (semua order), tampilkan kategori, nama_produk, unit, peringkat untuk produk dengan peringkat 1–3 di setiap kategori (pakai RANK).
WITH j AS (SELECT p.kategori, p.nama_produk, SUM(oi.qty) AS unit FROM order_items oi JOIN products p ON p.product_id = oi.product_id GROUP BY 1, 2), r AS (SELECT *, RANK() OVER (PARTITION BY kategori ORDER BY unit DESC) AS peringkat FROM j) SELECT * FROM r WHERE peringkat <= 3;

-- [sq31] (Window) Order pertama tiap pelanggan
-- Untuk setiap pelanggan yang pernah order, tampilkan customer_id, order_id, tgl_order dari order pertamanya (semua status). Jika tanggal sama, ambil order_id terkecil.
SELECT customer_id, order_id, tgl_order FROM (SELECT o.*, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id) AS rn FROM orders o) WHERE rn = 1;

-- [sq32] (Window) Growth MoM
-- Tampilkan bulan, revenue, growth_pct untuk seluruh bulan (order selesai). growth_pct = % perubahan dari bulan sebelumnya, 1 desimal (bulan pertama NULL). Revenue dibulatkan.
WITH b AS (SELECT substr(o.tgl_order,1,7) AS bulan, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY 1) SELECT bulan, ROUND(rev) AS revenue, ROUND(100.0*(rev - LAG(rev) OVER (ORDER BY bulan))/LAG(rev) OVER (ORDER BY bulan), 1) AS growth_pct FROM b ORDER BY bulan;

-- [sq33] (Window) Revenue kumulatif 2026
-- Untuk bulan-bulan di 2026, tampilkan bulan, revenue, kumulatif (running total sejak Januari 2026). Semua dibulatkan, order selesai.
WITH b AS (SELECT substr(o.tgl_order,1,7) AS bulan, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM orders o JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' AND o.tgl_order >= '2026-01-01' GROUP BY 1) SELECT bulan, ROUND(rev) AS revenue, ROUND(SUM(rev) OVER (ORDER BY bulan)) AS kumulatif FROM b ORDER BY bulan;

-- [sq34] (Window) Kontribusi kategori
-- Tampilkan kategori, revenue, pct_total: persentase revenue tiap kategori terhadap total (order selesai, 1 desimal). Revenue dibulatkan.
WITH k AS (SELECT p.kategori, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id WHERE o.status='selesai' GROUP BY 1) SELECT kategori, ROUND(rev) AS revenue, ROUND(100.0*rev/SUM(rev) OVER (), 1) AS pct_total FROM k;

-- [sq35] (Window) Jarak antar order
-- Berapa rata-rata jarak (hari) antara order selesai berturut-turut dari pelanggan yang sama? Satu angka, 1 desimal.
WITH g AS (SELECT julianday(tgl_order) - julianday(LAG(tgl_order) OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id)) AS jarak FROM orders WHERE status = 'selesai') SELECT ROUND(AVG(jarak), 1) AS rata_jarak FROM g WHERE jarak IS NOT NULL;

-- [sq36] (Window) Kategori favorit tiap kota
-- Untuk setiap kota pelanggan, tampilkan kategori dengan revenue order selesai terbesar beserta revenue-nya (dibulatkan).
WITH k AS (SELECT c.kota, p.kategori, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id JOIN products p ON p.product_id = oi.product_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'selesai' GROUP BY 1, 2), r AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY kota ORDER BY rev DESC) AS rn FROM k) SELECT kota, kategori, ROUND(rev) AS revenue FROM r WHERE rn = 1;

-- [sq37] (Analisis) Funnel per device
-- Dari web_events, hitung jumlah sesi unik di tiap langkah (view_product, add_to_cart, checkout, purchase) per device. Kolom: device, view, cart, checkout, purchase.
SELECT device, COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END) AS view, COUNT(DISTINCT CASE WHEN event='add_to_cart' THEN session_id END) AS cart, COUNT(DISTINCT CASE WHEN event='checkout' THEN session_id END) AS checkout, COUNT(DISTINCT CASE WHEN event='purchase' THEN session_id END) AS purchase FROM web_events GROUP BY device;

-- [sq38] (Analisis) Conversion per sumber trafik
-- Hitung conversion rate (sesi purchase ÷ sesi view_product × 100, 2 desimal) per sumber, urut tertinggi.
SELECT sumber, ROUND(100.0*COUNT(DISTINCT CASE WHEN event='purchase' THEN session_id END)/COUNT(DISTINCT CASE WHEN event='view_product' THEN session_id END), 2) AS cr FROM web_events GROUP BY sumber ORDER BY cr DESC;

-- [sq39] (Analisis) Ukuran cohort 2026
-- Tentukan cohort setiap pelanggan = bulan (YYYY-MM) order selesai pertamanya. Tampilkan cohort, pelanggan untuk cohort di tahun 2026, urut cohort.
WITH f AS (SELECT customer_id, MIN(substr(tgl_order,1,7)) AS cohort FROM orders WHERE status = 'selesai' GROUP BY customer_id) SELECT cohort, COUNT(*) AS pelanggan FROM f WHERE cohort >= '2026-01' GROUP BY cohort ORDER BY cohort;

-- [sq40] (Analisis) Retensi bulan ke-1
-- Untuk cohort 2026-01 s.d. 2026-09, hitung % pelanggan yang order selesai lagi di bulan kalender berikutnya setelah bulan cohort (1 desimal). Kolom: cohort, retensi_m1.
WITH f AS (SELECT customer_id, MIN(substr(tgl_order,1,7)) AS cohort FROM orders WHERE status='selesai' GROUP BY customer_id), a AS (SELECT DISTINCT o.customer_id, f.cohort, (CAST(substr(o.tgl_order,1,4) AS INT) - CAST(substr(f.cohort,1,4) AS INT))*12 + CAST(substr(o.tgl_order,6,2) AS INT) - CAST(substr(f.cohort,6,2) AS INT) AS bulan_ke FROM orders o JOIN f ON f.customer_id = o.customer_id WHERE o.status='selesai') SELECT cohort, ROUND(100.0*COUNT(DISTINCT CASE WHEN bulan_ke = 1 THEN customer_id END)/COUNT(DISTINCT customer_id), 1) AS retensi_m1 FROM a WHERE cohort BETWEEN '2026-01' AND '2026-09' GROUP BY cohort ORDER BY cohort;

-- [sq41] (Analisis) Analisis Pareto
-- Urutkan produk dari revenue terbesar (order selesai). Berapa jumlah produk yang dibutuhkan untuk mencapai 80% revenue? (hitung produk yang persentase kumulatif sebelumnya masih < 80%)
WITH p AS (SELECT oi.product_id, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM order_items oi JOIN orders o ON o.order_id = oi.order_id WHERE o.status='selesai' GROUP BY 1), c AS (SELECT rev, (SUM(rev) OVER (ORDER BY rev DESC ROWS UNBOUNDED PRECEDING) - rev) / SUM(rev) OVER () AS kum_sebelum FROM p) SELECT COUNT(*) AS jumlah_produk FROM c WHERE kum_sebelum < 0.8;

-- [sq42] (Analisis) LTV vs CAC
-- Untuk channel berbayar (Instagram, TikTok, Google Ads), tampilkan channel, cac, revenue_per_pelanggan, rasio: CAC dari tabel marketing, revenue_per_pelanggan = revenue order selesai pelanggan channel itu ÷ jumlah pelanggan channel itu (semua pelanggan terdaftar). Bulatkan cac & revenue tanpa desimal, rasio 2 desimal. Urut rasio tertinggi.
WITH m AS (SELECT channel, 1.0*SUM(biaya)/SUM(signup) AS cac FROM marketing GROUP BY channel), r AS (SELECT c.channel_akuisisi AS channel, SUM(oi.qty * oi.harga_satuan * (1 - oi.diskon)) AS rev FROM customers c JOIN orders o ON o.customer_id = c.customer_id JOIN order_items oi ON oi.order_id = o.order_id WHERE o.status = 'selesai' GROUP BY 1), n AS (SELECT channel_akuisisi AS channel, COUNT(*) AS jml FROM customers GROUP BY 1) SELECT m.channel, ROUND(m.cac) AS cac, ROUND(r.rev/n.jml) AS revenue_per_pelanggan, ROUND(r.rev/n.jml/m.cac, 2) AS rasio FROM m JOIN r ON r.channel = m.channel JOIN n ON n.channel = m.channel ORDER BY rasio DESC;

-- [sq43] (Analisis) Pelanggan At Risk
-- Berapa jumlah pelanggan yang punya ≥ 2 order selesai tetapi order selesai terakhirnya sebelum 2026-07-01? (kandidat kampanye win-back)
SELECT COUNT(*) AS jumlah FROM (SELECT customer_id FROM orders WHERE status = 'selesai' GROUP BY customer_id HAVING COUNT(*) >= 2 AND MAX(tgl_order) < '2026-07-01');

