-- SOAL LATIHAN SQL — TokoKita (kerjakan di bawah setiap soal)
-- Database: tokokita.db (SQLite) atau jalankan tokokita.sql di PostgreSQL/MySQL.
-- Revenue baris = qty * harga_satuan * (1 - diskon). Pendapatan hanya dari order status 'selesai'.
-- Catatan: fungsi tanggal ditulis untuk SQLite (substr/strftime/julianday).

-- [sq01] (Dasar) Lihat seluruh katalog
-- Tampilkan semua kolom dari tabel products.
-- Petunjuk: SELECT * FROM nama_tabel



-- [sq02] (Dasar) Produk kecantikan termahal
-- Tampilkan nama_produk dan harga untuk kategori Kecantikan, urut dari harga termahal.
-- Petunjuk: WHERE kategori = '...' lalu ORDER BY harga DESC



-- [sq03] (Dasar) 10 pelanggan pertama
-- Tampilkan customer_id, nama, tgl_daftar dari 10 pelanggan yang paling awal mendaftar.
-- Petunjuk: ORDER BY tgl_daftar, customer_id LIMIT 10



-- [sq04] (Dasar) Kota pelanggan
-- Tampilkan daftar kota unik pelanggan, urut A–Z.
-- Petunjuk: SELECT DISTINCT



-- [sq05] (Dasar) Rentang harga menengah
-- Tampilkan nama_produk, harga untuk produk dengan harga 100.000 sampai 300.000 (termasuk batasnya), urut harga termurah lalu nama.
-- Petunjuk: BETWEEN 100000 AND 300000



-- [sq06] (Dasar) Cari dengan LIKE
-- Tampilkan nama_produk yang namanya mengandung kata Kaos atau Tas.
-- Petunjuk: LIKE '%Kaos%' OR LIKE '%Tas%'



-- [sq07] (Dasar) Margin produk tertinggi
-- Hitung laba_per_unit (harga − hpp) dan margin (laba ÷ harga, 3 desimal). Tampilkan nama_produk, laba_per_unit, margin untuk 5 produk dengan margin tertinggi.
-- Petunjuk: ROUND(1.0*(harga-hpp)/harga, 3); kalikan 1.0 agar tidak dibulatkan ke bawah



-- [sq08] (Dasar) Retur COD tahun 2026
-- Tampilkan order_id, tgl_order untuk order berstatus retur dengan metode bayar COD yang terjadi di tahun 2026, urut tanggal.
-- Petunjuk: Tiga kondisi dengan AND; tgl_order >= '2026-01-01'



-- [sq09] (Agregasi) Pelanggan per kota
-- Hitung jumlah pelanggan per kota, urut dari yang terbanyak.
-- Petunjuk: GROUP BY kota, COUNT(*)



-- [sq10] (Agregasi) Order per status
-- Hitung jumlah order untuk setiap status.
-- Petunjuk: GROUP BY status



-- [sq11] (Agregasi) Statistik harga per kategori
-- Untuk setiap kategori, tampilkan rata-rata harga (dibulatkan tanpa desimal), harga termurah, dan termahal.
-- Petunjuk: ROUND(AVG(harga)), MIN, MAX



-- [sq12] (Agregasi) Kota besar
-- Tampilkan kota yang memiliki minimal 50 pelanggan beserta jumlahnya.
-- Petunjuk: HAVING COUNT(*) >= 50



-- [sq13] (Agregasi) Tingkat pembatalan
-- Hitung persentase order batal per metode_bayar (2 desimal), urut dari yang tertinggi.
-- Petunjuk: 100.0 * SUM(CASE WHEN status='batal' THEN 1 ELSE 0 END) / COUNT(*)



-- [sq14] (Agregasi) Segmen harga
-- Kelompokkan produk: Murah (<100.000), Sedang (<300.000), Premium (sisanya). Tampilkan segmen dan jumlah produk.
-- Petunjuk: CASE WHEN ... END lalu GROUP BY



-- [sq15] (Agregasi) CAC per channel
-- Dari tabel marketing, tampilkan per channel: total biaya, total signup, dan CAC (biaya ÷ signup, dibulatkan tanpa desimal). Urut CAC termurah.
-- Petunjuk: ROUND(1.0*SUM(biaya)/SUM(signup))



-- [sq16] (Agregasi) Pendaftar per tahun
-- Hitung jumlah pelanggan baru per tahun pendaftaran.
-- Petunjuk: substr(tgl_daftar, 1, 4) atau strftime('%Y', tgl_daftar)



-- [sq17] (JOIN) Revenue per kategori
-- Hitung revenue order berstatus selesai per kategori (dibulatkan tanpa desimal), urut terbesar. Revenue = qty × harga_satuan × (1 − diskon).
-- Petunjuk: order_items JOIN orders JOIN products, WHERE status='selesai', GROUP BY kategori



-- [sq18] (JOIN) Order terbaru & pelanggannya
-- Tampilkan order_id, tgl_order, nama, kota untuk 10 order selesai terbaru.
-- Petunjuk: orders JOIN customers; ORDER BY tgl_order DESC, order_id DESC LIMIT 10



-- [sq19] (JOIN) Pelanggan tanpa order
-- Berapa jumlah pelanggan yang belum pernah membuat order sama sekali?
-- Petunjuk: LEFT JOIN orders ... WHERE o.order_id IS NULL



-- [sq20] (JOIN) Produk tidak laku
-- Tampilkan nama_produk yang tidak pernah muncul di order_items. (Jika hasilnya kosong, itu jawaban yang benar!)
-- Petunjuk: Anti-join products LEFT JOIN order_items



-- [sq21] (JOIN) Kota dengan revenue terbesar
-- Tampilkan 5 kota pelanggan dengan revenue order selesai terbesar (dibulatkan tanpa desimal).
-- Petunjuk: 3 tabel: order_items, orders, customers



-- [sq22] (JOIN) Performa channel akuisisi
-- Per channel_akuisisi, tampilkan jumlah order selesai dan revenue-nya (dibulatkan). Hati-hati: hitung order dengan COUNT(DISTINCT …).
-- Petunjuk: JOIN order_items membuat 1 order jadi banyak baris → COUNT(DISTINCT o.order_id)



-- [sq23] (JOIN) Gross margin per kategori
-- Hitung gross margin % order selesai per kategori: (revenue − Σ qty×hpp) ÷ revenue × 100, 1 desimal. Urut tertinggi.
-- Petunjuk: SUM(qty*hpp) dari products



-- [sq24] (Subquery & CTE) Di atas rata-rata
-- Tampilkan nama_produk, harga untuk produk yang harganya di atas rata-rata harga semua produk.
-- Petunjuk: WHERE harga > (SELECT AVG(harga) FROM products)



-- [sq25] (Subquery & CTE) AOV
-- Hitung AOV: rata-rata nilai per order untuk order selesai (dibulatkan tanpa desimal). Satu angka saja.
-- Petunjuk: CTE: hitung nilai per order dulu, lalu AVG



-- [sq26] (Subquery & CTE) Top 10 pelanggan
-- Tampilkan customer_id, nama, total_belanja (dibulatkan) untuk 10 pelanggan dengan total belanja order selesai terbesar.
-- Petunjuk: CTE total per customer_id lalu JOIN customers



-- [sq27] (Subquery & CTE) Repeat rate
-- Dari pelanggan yang punya order selesai, berapa persen yang punya ≥ 2 order selesai? (2 desimal)
-- Petunjuk: CTE jumlah order per pelanggan, lalu 100.0*SUM(CASE WHEN n>=2 ...)/COUNT(*)



-- [sq28] (Subquery & CTE) Revenue bulanan 2026
-- Tampilkan bulan (format YYYY-MM) dan revenue order selesai (dibulatkan) untuk tahun 2026, urut bulan.
-- Petunjuk: substr(tgl_order,1,7) atau strftime('%Y-%m', tgl_order)



-- [sq29] (Subquery & CTE) Pelanggan 1 vs 2+ order
-- Kelompokkan pelanggan (yang punya order selesai) menjadi '1 order' dan '2+ order'. Tampilkan tipe, jumlah pelanggan, dan rata-rata total belanja (dibulatkan).
-- Petunjuk: Dua CTE: nilai per order → ringkasan per pelanggan



-- [sq30] (Window) Top 3 produk per kategori
-- Berdasarkan total unit terjual (semua order), tampilkan kategori, nama_produk, unit, peringkat untuk produk dengan peringkat 1–3 di setiap kategori (pakai RANK).
-- Petunjuk: CTE unit per produk, lalu RANK() OVER (PARTITION BY kategori ORDER BY unit DESC)



-- [sq31] (Window) Order pertama tiap pelanggan
-- Untuk setiap pelanggan yang pernah order, tampilkan customer_id, order_id, tgl_order dari order pertamanya (semua status). Jika tanggal sama, ambil order_id terkecil.
-- Petunjuk: ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY tgl_order, order_id) = 1



-- [sq32] (Window) Growth MoM
-- Tampilkan bulan, revenue, growth_pct untuk seluruh bulan (order selesai). growth_pct = % perubahan dari bulan sebelumnya, 1 desimal (bulan pertama NULL). Revenue dibulatkan.
-- Petunjuk: CTE revenue bulanan lalu LAG(revenue) OVER (ORDER BY bulan)



-- [sq33] (Window) Revenue kumulatif 2026
-- Untuk bulan-bulan di 2026, tampilkan bulan, revenue, kumulatif (running total sejak Januari 2026). Semua dibulatkan, order selesai.
-- Petunjuk: SUM(rev) OVER (ORDER BY bulan)



-- [sq34] (Window) Kontribusi kategori
-- Tampilkan kategori, revenue, pct_total: persentase revenue tiap kategori terhadap total (order selesai, 1 desimal). Revenue dibulatkan.
-- Petunjuk: 100.0 * rev / SUM(rev) OVER ()



-- [sq35] (Window) Jarak antar order
-- Berapa rata-rata jarak (hari) antara order selesai berturut-turut dari pelanggan yang sama? Satu angka, 1 desimal.
-- Petunjuk: julianday(tgl_order) - julianday(LAG(tgl_order) OVER (PARTITION BY customer_id ORDER BY tgl_order))



-- [sq36] (Window) Kategori favorit tiap kota
-- Untuk setiap kota pelanggan, tampilkan kategori dengan revenue order selesai terbesar beserta revenue-nya (dibulatkan).
-- Petunjuk: CTE revenue per kota×kategori, lalu ROW_NUMBER() OVER (PARTITION BY kota ORDER BY rev DESC) = 1



-- [sq37] (Analisis) Funnel per device
-- Dari web_events, hitung jumlah sesi unik di tiap langkah (view_product, add_to_cart, checkout, purchase) per device. Kolom: device, view, cart, checkout, purchase.
-- Petunjuk: COUNT(DISTINCT CASE WHEN event='...' THEN session_id END)



-- [sq38] (Analisis) Conversion per sumber trafik
-- Hitung conversion rate (sesi purchase ÷ sesi view_product × 100, 2 desimal) per sumber, urut tertinggi.
-- Petunjuk: Gabungkan teknik soal funnel dengan pembagian



-- [sq39] (Analisis) Ukuran cohort 2026
-- Tentukan cohort setiap pelanggan = bulan (YYYY-MM) order selesai pertamanya. Tampilkan cohort, pelanggan untuk cohort di tahun 2026, urut cohort.
-- Petunjuk: CTE MIN(substr(tgl_order,1,7)) per customer_id



-- [sq40] (Analisis) Retensi bulan ke-1
-- Untuk cohort 2026-01 s.d. 2026-09, hitung % pelanggan yang order selesai lagi di bulan kalender berikutnya setelah bulan cohort (1 desimal). Kolom: cohort, retensi_m1.
-- Petunjuk: Hitung bulan_ke = selisih bulan antara order & cohort; retensi = pelanggan unik dgn bulan_ke=1 ÷ ukuran cohort



-- [sq41] (Analisis) Analisis Pareto
-- Urutkan produk dari revenue terbesar (order selesai). Berapa jumlah produk yang dibutuhkan untuk mencapai 80% revenue? (hitung produk yang persentase kumulatif sebelumnya masih < 80%)
-- Petunjuk: SUM(rev) OVER (ORDER BY rev DESC) − rev = kumulatif sebelum produk itu



-- [sq42] (Analisis) LTV vs CAC
-- Untuk channel berbayar (Instagram, TikTok, Google Ads), tampilkan channel, cac, revenue_per_pelanggan, rasio: CAC dari tabel marketing, revenue_per_pelanggan = revenue order selesai pelanggan channel itu ÷ jumlah pelanggan channel itu (semua pelanggan terdaftar). Bulatkan cac & revenue tanpa desimal, rasio 2 desimal. Urut rasio tertinggi.
-- Petunjuk: Dua CTE (marketing & revenue per channel_akuisisi) lalu JOIN di channel



-- [sq43] (Analisis) Pelanggan At Risk
-- Berapa jumlah pelanggan yang punya ≥ 2 order selesai tetapi order selesai terakhirnya sebelum 2026-07-01? (kandidat kampanye win-back)
-- Petunjuk: GROUP BY customer_id HAVING COUNT(*) >= 2 AND MAX(tgl_order) < '2026-07-01'



