# Jalur Data Analyst — Belajar & Tracking Progres

Website statis untuk belajar menjadi **Data Analyst**, dari nol sampai siap melamar kerja.
**Tanpa database, tanpa server.** Klik dua kali `index.html` untuk membukanya.

## Isi
**9 level · 52 pelajaran** (materi, latihan, kuis, catatan, sumber YouTube/Google/Microsoft/Kaggle)

| Level | Topik |
|---|---|
| 1 | Fondasi: peran DA, proses analisis, berpikir analitis, jenis data, metrik & KPI, etika |
| 2 | Spreadsheet: Excel & Google Sheets (rumus, lookup, PivotTable, Excel modern, What-If) |
| 3 | Statistik: deskriptif, distribusi, sampling & CI, uji hipotesis & A/B test, regresi |
| 4 | SQL: SELECT, GROUP BY, JOIN, CTE, window function, cohort & funnel, dialek |
| 5 | Data cleaning & EDA: checklist, Power Query, SQL & pandas, kerangka EDA |
| 6 | Visualisasi & BI: prinsip grafik, desain dashboard, **Power BI, Tableau, Looker Studio**, storytelling |
| 7 | Python: dasar, pandas, groupby/merge, matplotlib/seaborn, notebook end-to-end |
| 8 | Analisis bisnis: penjualan & tren, funnel, cohort & retensi, RFM, marketing (CAC/LTV) |
| 9 | Karier: portofolio, CV & LinkedIn, interview & tes teknis, roadmap 6 bulan |

## Praktik
| Latihan | Keterangan |
|---|---|
| 🗄️ **Lab SQL** | 43 soal interaktif di browser (SQLite), dicek otomatis, **berjalan offline** |
| 🐍 **Lab Python** | 25 soal Python & pandas di browser (Pyodide), dicek otomatis. **Butuh internet** saat pertama memuat |
| 📗 **File Excel** | 9 studi kasus `.xlsx` dengan kolom Cek otomatis (`latihan/excel`) |
| 📊 **Proyek BI** | 3 proyek: Power BI, Tableau, Looker Studio, dengan angka acuan |
| ⬇️ **Unduhan** | `tokokita.db`, `tokokita.sql`, soal & kunci SQL, 3 notebook (soal + kunci), 6 CSV |

Semua latihan memakai dataset fiktif **TokoKita** (toko online): customers, products, orders, order_items, marketing, web_events.

## Progres
Tersimpan otomatis di browser (localStorage). Pindah perangkat: ⚙️ Pengaturan → Ekspor progres → Impor di perangkat lain.
Progres dari versi sebelumnya otomatis dipindahkan ke struktur 9 level.

## Struktur folder
```
index.html
assets/        style.css, app.js (tracking), labs.js (Lab SQL/Python, Proyek BI)
data/          materi.js, latihan.js, lab-sql.js, lab-py.js, dataset.js
vendor/        sql.js (SQLite WebAssembly, lisensi MIT)
latihan/excel  9 file .xlsx
latihan/sql    tokokita.db, tokokita.sql, soal-sql.sql, kunci-sql.sql
latihan/python 3 notebook soal + 3 notebook kunci (.ipynb)
latihan/data   6 file CSV
```
