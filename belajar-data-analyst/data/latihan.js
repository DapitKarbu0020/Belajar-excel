/* Daftar file latihan Excel (folder latihan/). Dibuat otomatis. */
window.LATIHAN = [
 {
  "file": "01-dasar-warung-bu-sari.xlsx",
  "title": "Warung Bu Sari: Rumus Dasar & Referensi Absolut",
  "num": "01",
  "level": 1,
  "dur": 30,
  "rows": 40,
  "questions": 10,
  "skills": [
   "Operator aritmatika (*, +)",
   "SUM, AVERAGE, MIN, MAX, COUNTA",
   "Referensi absolut $ ke sel parameter (PPN)",
   "Format Rupiah & persen"
  ],
  "story": "Bu Sari punya warung kelontong dan mencatat 40 transaksi bulan November 2026. Ia ingin tahu subtotal, PPN, dan total setiap transaksi, serta ringkasan sederhana: total omzet, transaksi terbesar, dan rata-rata belanja.",
  "lessons": [
   "l1-3",
   "l1-4",
   "l1-5",
   "l1-6"
  ]
 },
 {
  "file": "02-menengah-penjualan-cabang.xlsx",
  "title": "Kedai Nusantara: Penjualan 5 Cabang (IF, SUMIFS, VLOOKUP)",
  "num": "02",
  "level": 2,
  "dur": 60,
  "rows": 300,
  "questions": 14,
  "skills": [
   "VLOOKUP exact match ke sheet lain",
   "MONTH untuk kolom bulan",
   "IF untuk kategori status",
   "SUMIFS / COUNTIFS / AVERAGEIFS multi-kriteria",
   "INDEX + MATCH + MAX untuk mencari nama dengan nilai tertinggi"
  ],
  "story": "Kedai Nusantara memiliki 5 cabang. Tim pusat mengirim 300 transaksi Januari–Juni 2026 yang hanya berisi kode produk. Tugasmu: lengkapi nama, kategori, dan harga dari Master_Produk, hitung total, lalu jawab pertanyaan manajer area.",
  "lessons": [
   "l2-1",
   "l2-2",
   "l2-4",
   "l2-5"
  ]
 },
 {
  "file": "03-menengah-hr-karyawan.xlsx",
  "title": "PT Nusantara Data: Data Karyawan (Teks, Tanggal, IF Bertingkat)",
  "num": "03",
  "level": 2,
  "dur": 60,
  "rows": 80,
  "questions": 14,
  "skills": [
   "TRIM + PROPER untuk merapikan teks",
   "LEFT + FIND untuk memotong teks",
   "DATEDIF untuk umur & masa kerja",
   "IF bertingkat",
   "AVERAGEIFS, COUNTIFS, INDEX-MATCH"
  ],
  "story": "Tim HR mengekspor data 80 karyawan dari sistem lama: nama berantakan (spasi & huruf kapital acak). Kamu diminta merapikan nama, mengambil username email, menghitung umur & masa kerja per tanggal acuan, menentukan kelompok usia, dan menghitung bonus akhir tahun berdasarkan rating kinerja.",
  "lessons": [
   "l2-3",
   "l2-4",
   "l2-1",
   "l3-1"
  ]
 },
 {
  "file": "04-lanjut-data-cleaning-ecommerce.xlsx",
  "title": "TokoKita.id: Membersihkan Data Order E-commerce",
  "num": "04",
  "level": 3,
  "dur": 75,
  "rows": 124,
  "questions": 14,
  "skills": [
   "DATE + LEFT/MID/RIGHT untuk tanggal teks",
   "TRIM, PROPER",
   "VLOOKUP ke tabel mapping untuk standarisasi kategori",
   "SUBSTITUTE + VALUE untuk angka teks",
   "Menandai duplikat dengan COUNTIF range bertambah ($A$2:A2)",
   "Menghitung jumlah nilai unik"
  ],
  "story": "Ekspor order Juli–September 2026 dari marketplace sangat kotor: tanggal berupa teks, nama pelanggan berantakan, kota ditulis macam-macam (Jkt, DKI Jakarta, jogja…), harga berformat teks 'Rp 125.000', Qty kadang kosong, dan ada order yang tercatat dua kali. Bersihkan dulu sebelum menghitung omzet yang benar.",
  "lessons": [
   "l3-6",
   "l2-3",
   "l2-5"
  ]
 },
 {
  "file": "05-lanjut-pivot-retail.xlsx",
  "title": "Sentosa Office Supply: Analisis 1.000 Order dengan PivotTable",
  "num": "05",
  "level": 3,
  "dur": 90,
  "rows": 1000,
  "questions": 12,
  "skills": [
   "PivotTable: Rows, Columns, Values, Filters",
   "Show Values As % of Grand Total",
   "Group tanggal per bulan/tahun",
   "Sort & Top N di Pivot",
   "SUMIFS sebagai cross-check"
  ],
  "story": "Sentosa Office Supply menjual elektronik, furnitur, dan ATK ke seluruh Indonesia. Direktur meminta jawaban cepat atas beberapa pertanyaan bisnis dari 1.000 order Jan 2025–Okt 2026. Gunakan PivotTable (Insert → PivotTable) untuk menjawab, lalu ketik jawabannya di sheet Soal. Bonus: cocokkan dengan rumus SUMIFS.",
  "lessons": [
   "l3-4",
   "l3-3",
   "l3-1"
  ]
 },
 {
  "file": "06-mahir-dashboard-kpi-kafe.xlsx",
  "title": "Kopi Senja: Membangun Dashboard KPI",
  "num": "06",
  "level": 4,
  "dur": 120,
  "rows": 912,
  "questions": 9,
  "skills": [
   "Kolom bantu (MONTH, Laba Kotor)",
   "KPI: SUM, AOV, Gross Margin %",
   "SUMIFS dua kriteria di tabel matriks (referensi campuran $C$13 & $B14)",
   "INDEX-MATCH untuk outlet terbaik",
   "Growth MoM",
   "Line chart & prinsip desain dashboard"
  ],
  "story": "Kopi Senja punya 3 outlet (Kemang, Dago, Darmo). Owner ingin satu halaman dashboard: KPI utama, tabel omzet bulanan per outlet, dan grafik tren. Data harian Jan–Okt 2026 sudah tersedia (912 baris). Lengkapi sheet Dashboard.",
  "lessons": [
   "l4-6",
   "l3-5",
   "l1-4"
  ]
 },
 {
  "file": "07-mahir-whatif-model-usaha.xlsx",
  "title": "Bananaku: Model Usaha, BEP, Goal Seek & Sensitivitas",
  "num": "07",
  "level": 4,
  "dur": 60,
  "rows": 0,
  "questions": 11,
  "skills": [
   "Model berbasis asumsi (input terpisah dari rumus)",
   "Break-even analysis",
   "Goal Seek (dan versi aljabarnya)",
   "PMT untuk cicilan",
   "Data Table / tabel sensitivitas dengan referensi campuran"
  ],
  "story": "Rani ingin membuka usaha keripik pisang 'Bananaku' dengan pinjaman modal. Ia butuh model sederhana: laba bulanan, titik impas (BEP), berapa unit atau harga agar target laba tercapai, cicilan pinjaman, dan tabel sensitivitas harga × volume untuk melihat risiko.",
  "lessons": [
   "l4-5",
   "l1-4"
  ]
 },
 {
  "file": "08-studi-kasus-marketing-campaign.xlsx",
  "title": "GlowUp Skincare: Evaluasi Kampanye Digital Marketing",
  "num": "08",
  "level": 5,
  "dur": 75,
  "rows": 120,
  "questions": 13,
  "skills": [
   "Metrik marketing: CTR, CPC, CVR, ROAS",
   "IF bertingkat untuk klasifikasi",
   "Agregasi rasio yang benar (SUM/SUM, bukan rata-rata rasio)",
   "MEDIAN, STDEV, QUARTILE, CORREL",
   "Deteksi outlier metode IQR"
  ],
  "story": "GlowUp Skincare menjalankan 120 kampanye iklan di 5 channel selama Jan–Jun 2026. CMO bertanya: channel mana yang paling menguntungkan, apakah menambah biaya iklan benar-benar menaikkan pendapatan, dan kampanye mana yang performanya janggal (outlier)?",
  "lessons": [
   "l5-2",
   "l4-5",
   "l2-2"
  ]
 },
 {
  "file": "09-studi-kasus-logistik-sla.xlsx",
  "title": "KirimCepat Logistics: Analisis SLA Pengiriman",
  "num": "09",
  "level": 5,
  "dur": 75,
  "rows": 250,
  "questions": 13,
  "skills": [
   "NETWORKDAYS dengan daftar libur",
   "WEEKDAY",
   "VLOOKUP ke tabel SLA",
   "IF On Time / Terlambat",
   "Rasio COUNTIFS ÷ COUNTIF",
   "AVERAGEIFS & INDEX-MATCH untuk ranking"
  ],
  "story": "Sebuah toko online memakai 5 kurir. Manajer operasional ingin tahu kurir mana yang paling tepat waktu sesuai SLA (REG 3 hari kerja, EXPRESS 1 hari kerja), berapa lama gudang memproses pesanan, dan kota mana yang paling lambat. Ada 250 resi Agustus–Oktober 2026. Hari libur harus dikecualikan.",
  "lessons": [
   "l2-4",
   "l2-2",
   "l5-1"
  ]
 }
];
