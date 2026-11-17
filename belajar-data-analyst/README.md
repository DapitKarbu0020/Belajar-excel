# Jalur Data Analyst — Tracker Belajar Excel (Dasar → Mahir)

Website statis untuk belajar & melacak progres menjadi Data Analyst.
**Tanpa database, tanpa install, tanpa server.**

## Cara pakai
1. Ekstrak folder ini.
2. Klik dua kali `index.html`, maka website langsung terbuka di browser (Chrome, Edge, Firefox, Safari, HP juga bisa).
3. Progres tersimpan otomatis di browser (localStorage).

Pindah laptop/HP? Buka **⚙️ Pengaturan & Backup → Ekspor progres**, lalu di perangkat lain pilih **Impor progres**.

## Struktur folder
```
index.html          ← halaman utama
assets/style.css    ← tampilan & animasi
assets/app.js       ← logika tracking, kuis, pencarian, lencana
data/materi.js      ← SEMUA MATERI (edit di sini untuk menambah pelajaran)
data/latihan.js     ← daftar file latihan Excel
latihan/*.xlsx      ← 9 FILE LATIHAN EXCEL (studi kasus)
```

## File latihan Excel (folder `latihan/`)
| No | Studi kasus | Level | Fokus |
|---|---|---|---|
| 01 | Warung Bu Sari | Dasar | SUM/AVERAGE/MAX, referensi absolut |
| 02 | Kedai Nusantara (5 cabang) | Menengah | VLOOKUP, IF, SUMIFS/COUNTIFS |
| 03 | PT Nusantara Data (HR) | Menengah | TRIM/PROPER, DATEDIF, IF bertingkat |
| 04 | TokoKita.id (e-commerce) | Lanjut | Data cleaning, duplikat, mapping |
| 05 | Sentosa Office Supply (1.000 order) | Lanjut | PivotTable |
| 06 | Kopi Senja | Mahir | Dashboard KPI + grafik |
| 07 | Bananaku | Mahir | BEP, Goal Seek, PMT, tabel sensitivitas |
| 08 | GlowUp Skincare | Studi kasus | CTR/ROAS, statistik, outlier |
| 09 | KirimCepat Logistics | Studi kasus | NETWORKDAYS, SLA |

Setiap file memiliki sheet **Petunjuk**, **Data**, **Soal** (kolom *Cek* menilai otomatis ✅/❌ + skor), dan **Kunci** (tab merah).
Kerjakan di sel kuning. Bisa dibuka di Excel 2010+, Excel 365, maupun Google Sheets. Data seluruhnya fiktif.

## Isi materi
| Level | Topik |
|---|---|
| 1. Dasar Excel | Antarmuka, tipe data, SUM/AVERAGE/COUNT, referensi $, format, sort & filter |
| 2. Menengah | IF/IFS, SUMIFS/COUNTIFS, fungsi teks, tanggal, VLOOKUP, conditional formatting, data validation |
| 3. Lanjutan | INDEX-MATCH, XLOOKUP, Excel Table, PivotTable, visualisasi, data cleaning |
| 4. Mahir | Dynamic array, LET/LAMBDA, Power Query, Power Pivot & DAX, What-If & statistik, dashboard, Macro/VBA |
| 5. Ekosistem | Proses analisis (Google), statistik, SQL, Power BI, Python pandas, portofolio |

Setiap pelajaran berisi: materi + contoh rumus (bisa disalin), latihan yang bisa dicentang, kuis, catatan pribadi, dan link sumber (YouTube, Google/Coursera, Microsoft, Exceljet, Kaggle).

## Fitur tracking
- Progres per pelajaran, per level, dan total (ring + bar animasi)
- Waktu belajar aktif tercatat otomatis + target menit harian
- Streak harian 🔥 dan heatmap aktivitas 16 minggu
- 12 lencana pencapaian
- Pencarian cepat `Ctrl+K`, shortcut `D` (selesai), `N`/`P` (next/prev), `H` (beranda)
- Mode gelap, responsif untuk HP

## Menambah materi
Buka `data/materi.js`, salin satu objek pelajaran, lalu ganti `id` (harus unik) dan isinya.
