/* Soal Lab Python (pandas). Dibuat & diuji otomatis. */
window.LAB_PY = {
 "setup": "\nimport pandas as pd, numpy as np, json, math\n_d = json.loads(_raw)\ndef _df(t):\n    x = _d[\"tables\"][t]\n    df = pd.DataFrame(x[\"rows\"], columns=x[\"cols\"])\n    for c, ty in zip(x[\"cols\"], x[\"types\"]):\n        if ty == \"DATE\":\n            df[c] = pd.to_datetime(df[c])\n    return df\n_BASE = {t: _df(t) for t in _d[\"tables\"]}\n",
 "check": "\ndef _norm(x, ordered):\n    if isinstance(x, (pd.Series, pd.DataFrame)):\n        df = x.to_frame() if isinstance(x, pd.Series) else x.copy()\n        if not isinstance(df.index, pd.RangeIndex) or df.index.name is not None:\n            df = df.reset_index()\n        rows = []\n        for r in df.itertuples(index=False):\n            rows.append(tuple(_cell(v) for v in r))\n        return (\"tbl\", rows if ordered else sorted(rows, key=repr))\n    if isinstance(x, (list, tuple, np.ndarray, pd.Index)):\n        v = [_cell(i) for i in list(x)]\n        return (\"list\", v if ordered else sorted(v, key=repr))\n    return (\"val\", _cell(x))\n\ndef _cell(v):\n    if isinstance(v, (pd.Timestamp,)): return str(v.date())\n    if isinstance(v, pd.Period): return str(v)\n    if isinstance(v, (bool, np.bool_)): return bool(v)\n    if isinstance(v, (int, float, np.integer, np.floating)):\n        f = float(v)\n        if math.isnan(f): return None\n        return round(f, 2)\n    if v is None: return None\n    return str(v).strip()\n\ndef _same(a, b, ordered):\n    A, B = _norm(a, ordered), _norm(b, ordered)\n    if A[0] != B[0]:\n        if {A[0], B[0]} <= {\"list\", \"tbl\"}:\n            fa = A[1] if A[0] == \"list\" else [r[-1] if len(r) == 1 else r for r in A[1]]\n            fb = B[1] if B[0] == \"list\" else [r[-1] if len(r) == 1 else r for r in B[1]]\n            return fa == fb\n        return False\n    if A[0] == \"val\":\n        x, y = A[1], B[1]\n        if isinstance(x, float) and isinstance(y, float):\n            return abs(x - y) <= max(0.011, abs(y) * 1e-6)\n        return x == y\n    if len(A[1]) != len(B[1]): return False\n    for ra, rb in zip(A[1], B[1]):\n        if isinstance(ra, tuple) != isinstance(rb, tuple): return False\n        if isinstance(ra, tuple):\n            if len(ra) != len(rb): return False\n            for p, q in zip(ra, rb):\n                if isinstance(p, float) and isinstance(q, float):\n                    if abs(p - q) > max(0.011, abs(q) * 1e-6): return False\n                elif p != q: return False\n        else:\n            if isinstance(ra, float) and isinstance(rb, float):\n                if abs(ra - rb) > max(0.011, abs(rb) * 1e-6): return False\n            elif ra != rb: return False\n    return True\n\ndef _ns():\n    ns = {\"pd\": pd, \"np\": np, \"math\": math}\n    for k, v in _BASE.items():\n        ns[k] = v.copy()\n    return ns\n",
 "ex": [
  {
   "id": "py01",
   "tag": "Dasar",
   "t": "Harga setelah diskon",
   "p": "Harga Kemeja Linen Rp189.000 mendapat diskon 15%. Simpan harga akhirnya ke variabel <code>jawaban</code>.",
   "h": "harga * (1 - diskon)",
   "s": "harga = 189000\ndiskon = 0.15\njawaban = harga * (1 - diskon)",
   "start": "harga = 189000\ndiskon = 0.15\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py02",
   "tag": "Dasar",
   "t": "Filter list",
   "p": "Dari list <code>harga</code>, buat list baru berisi harga yang <b>lebih dari 100.000</b> (urutan tetap) dan simpan di <code>jawaban</code>.",
   "h": "List comprehension: [h for h in harga if h > 100000]",
   "s": "harga = [89000, 189000, 49000, 349000, 120000, 75000]\njawaban = [h for h in harga if h > 100000]",
   "start": "harga = [89000, 189000, 49000, 349000, 120000, 75000]\n\njawaban = ...",
   "order": true
  },
  {
   "id": "py03",
   "tag": "Dasar",
   "t": "Stok habis",
   "p": "Dari dictionary <code>stok</code>, buat list <b>kode produk yang stoknya 0</b>, urut A–Z, simpan di <code>jawaban</code>.",
   "h": "sorted([k for k, v in stok.items() if v == 0])",
   "s": "stok = {\"P07\": 0, \"P01\": 12, \"P15\": 0, \"P03\": 5, \"P02\": 0}\njawaban = sorted([k for k, v in stok.items() if v == 0])",
   "start": "stok = {\"P07\": 0, \"P01\": 12, \"P15\": 0, \"P03\": 5, \"P02\": 0}\n\njawaban = ...",
   "order": true
  },
  {
   "id": "py04",
   "tag": "Dasar",
   "t": "Fungsi margin",
   "p": "Lengkapi fungsi <code>margin(harga, hpp)</code> yang mengembalikan margin dalam <b>persen, 1 desimal</b>. Lalu <code>jawaban = margin(189000, 97000)</code>.",
   "h": "round((harga - hpp) / harga * 100, 1)",
   "s": "def margin(harga, hpp):\n    return round((harga - hpp) / harga * 100, 1)\njawaban = margin(189000, 97000)",
   "start": "def margin(harga, hpp):\n    # tulis rumusnya di sini\n    return ...\n\njawaban = margin(189000, 97000)",
   "order": false
  },
  {
   "id": "py05",
   "tag": "pandas Dasar",
   "t": "Jumlah order",
   "p": "DataFrame <code>orders</code> sudah tersedia. Berapa <b>jumlah baris</b>-nya?",
   "h": "len(orders) atau orders.shape[0]",
   "s": "jawaban = len(orders)",
   "start": "orders.head()\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py06",
   "tag": "pandas Dasar",
   "t": "Produk olahraga",
   "p": "Buat DataFrame berisi kolom <code>nama_produk, harga</code> untuk kategori <b>Olahraga</b>, urut harga <b>termahal</b>.",
   "h": "products[products.kategori == \"Olahraga\"][[\"nama_produk\", \"harga\"]].sort_values(\"harga\", ascending=False)",
   "s": "jawaban = products[products.kategori == \"Olahraga\"][[\"nama_produk\", \"harga\"]].sort_values(\"harga\", ascending=False)",
   "start": "jawaban = ...",
   "order": true
  },
  {
   "id": "py07",
   "tag": "pandas Dasar",
   "t": "Proporsi status order",
   "p": "Hitung <b>proporsi</b> (0–1) setiap <code>status</code> di tabel orders.",
   "h": "orders[\"status\"].value_counts(normalize=True)",
   "s": "jawaban = orders[\"status\"].value_counts(normalize=True)",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py08",
   "tag": "pandas Dasar",
   "t": "5 produk termahal",
   "p": "Ambil kolom <code>nama_produk, harga</code> dari <b>5 produk termahal</b>.",
   "h": "sort_values(\"harga\", ascending=False).head(5) atau nlargest(5, \"harga\")",
   "s": "jawaban = products.nlargest(5, \"harga\")[[\"nama_produk\", \"harga\"]]",
   "start": "jawaban = ...",
   "order": true
  },
  {
   "id": "py09",
   "tag": "pandas Dasar",
   "t": "Order selesai Oktober 2026",
   "p": "Berapa jumlah order berstatus <b>selesai</b> pada bulan <b>Oktober 2026</b>?",
   "h": "Filter 2 kondisi: (orders.status == \"selesai\") & (orders.tgl_order >= \"2026-10-01\")",
   "s": "jawaban = len(orders[(orders.status == \"selesai\") & (orders.tgl_order >= \"2026-10-01\") & (orders.tgl_order < \"2026-11-01\")])",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py10",
   "tag": "Transformasi",
   "t": "Kolom revenue",
   "p": "Tambahkan kolom <code>revenue</code> = qty × harga_satuan × (1 − diskon) ke <code>order_items</code>. <code>jawaban</code> = total revenue <b>semua</b> item (dibulatkan tanpa desimal).",
   "h": "round(order_items.revenue.sum())",
   "s": "order_items[\"revenue\"] = order_items.qty * order_items.harga_satuan * (1 - order_items.diskon)\njawaban = round(order_items.revenue.sum())",
   "start": "order_items[\"revenue\"] = ...\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py11",
   "tag": "Transformasi",
   "t": "Order per bulan 2026",
   "p": "Buat kolom <code>bulan</code> (format 'YYYY-MM') di orders, lalu hitung <b>jumlah order per bulan</b> untuk tahun 2026 (semua status), urut bulan.",
   "h": "orders.tgl_order.dt.strftime(\"%Y-%m\"); filter dt.year == 2026; groupby(\"bulan\").size()",
   "s": "orders[\"bulan\"] = orders.tgl_order.dt.strftime(\"%Y-%m\")\njawaban = orders[orders.tgl_order.dt.year == 2026].groupby(\"bulan\").size()",
   "start": "orders[\"bulan\"] = ...\n\njawaban = ...",
   "order": true
  },
  {
   "id": "py12",
   "tag": "Transformasi",
   "t": "Segmen harga",
   "p": "Dengan <code>pd.cut</code>, buat segmen harga produk: Murah (≤100.000), Sedang (≤300.000), Premium (sisanya). <code>jawaban</code> = jumlah produk per segmen.",
   "h": "pd.cut(products.harga, bins=[0, 100000, 300000, float(\"inf\")], labels=[\"Murah\",\"Sedang\",\"Premium\"]) lalu value_counts()",
   "s": "products[\"segmen\"] = pd.cut(products.harga, bins=[0, 100000, 300000, float(\"inf\")], labels=[\"Murah\", \"Sedang\", \"Premium\"])\njawaban = products.segmen.value_counts()",
   "start": "products[\"segmen\"] = pd.cut(...)\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py13",
   "tag": "Transformasi",
   "t": "Order akhir pekan",
   "p": "Berapa order (semua status) yang dibuat di hari <b>Sabtu atau Minggu</b>?",
   "h": "orders.tgl_order.dt.dayofweek >= 5 (Senin=0)",
   "s": "jawaban = int((orders.tgl_order.dt.dayofweek >= 5).sum())",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py14",
   "tag": "Transformasi",
   "t": "Pembayaran digital",
   "p": "Petakan metode_bayar: COD → 'Tunai', lainnya → 'Digital'. <code>jawaban</code> = <b>proporsi</b> order 'Digital' (0–1).",
   "h": "np.where(orders.metode_bayar == \"COD\", \"Tunai\", \"Digital\"), lalu mean()",
   "s": "jenis = np.where(orders.metode_bayar == \"COD\", \"Tunai\", \"Digital\")\njawaban = (jenis == \"Digital\").mean()",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py15",
   "tag": "Groupby & Merge",
   "t": "Revenue per kategori",
   "p": "Hitung revenue <b>order selesai</b> per <code>kategori</code> (Series, dibulatkan tanpa desimal), urut terbesar. Kamu perlu menggabungkan order_items, orders, products.",
   "h": "merge(orders, on=\"order_id\").merge(products, on=\"product_id\"); filter status; groupby(\"kategori\")[\"revenue\"].sum().round().sort_values(ascending=False)",
   "s": "df = order_items.merge(orders, on=\"order_id\").merge(products, on=\"product_id\")\ndf[\"revenue\"] = df.qty * df.harga_satuan * (1 - df.diskon)\njawaban = df[df.status == \"selesai\"].groupby(\"kategori\")[\"revenue\"].sum().round().sort_values(ascending=False)",
   "start": "df = order_items.merge(...)\n\njawaban = ...",
   "order": true
  },
  {
   "id": "py16",
   "tag": "Groupby & Merge",
   "t": "Crosstab kota × channel",
   "p": "Buat tabel frekuensi jumlah pelanggan dengan <b>kota</b> sebagai baris dan <b>channel_akuisisi</b> sebagai kolom.",
   "h": "pd.crosstab(customers.kota, customers.channel_akuisisi)",
   "s": "jawaban = pd.crosstab(customers.kota, customers.channel_akuisisi)",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py17",
   "tag": "Groupby & Merge",
   "t": "Top 5 pelanggan",
   "p": "DataFrame <code>customer_id, nama, total</code> untuk <b>5 pelanggan</b> dengan total belanja order selesai terbesar (total dibulatkan), urut terbesar.",
   "h": "Hitung revenue per customer_id, nlargest(5), merge ke customers untuk nama",
   "s": "df = order_items.merge(orders, on=\"order_id\")\ndf = df[df.status == \"selesai\"]\ndf[\"revenue\"] = df.qty * df.harga_satuan * (1 - df.diskon)\nt = df.groupby(\"customer_id\")[\"revenue\"].sum().nlargest(5).round().rename(\"total\").reset_index()\njawaban = t.merge(customers[[\"customer_id\", \"nama\"]], on=\"customer_id\")[[\"customer_id\", \"nama\", \"total\"]]",
   "start": "jawaban = ...",
   "order": true
  },
  {
   "id": "py18",
   "tag": "Groupby & Merge",
   "t": "AOV",
   "p": "Hitung <b>AOV</b> (rata-rata nilai per order) untuk order selesai, dibulatkan tanpa desimal.",
   "h": "Total revenue per order_id dulu (groupby), lalu mean()",
   "s": "df = order_items.merge(orders, on=\"order_id\")\ndf = df[df.status == \"selesai\"]\ndf[\"revenue\"] = df.qty * df.harga_satuan * (1 - df.diskon)\njawaban = round(df.groupby(\"order_id\")[\"revenue\"].sum().mean())",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py19",
   "tag": "Groupby & Merge",
   "t": "Pivot bulan × kategori",
   "p": "Buat <b>pivot_table</b> revenue order selesai tahun <b>2026</b>: index = bulan ('YYYY-MM'), columns = kategori, nilai = sum revenue (dibulatkan), isi kosong dengan 0.",
   "h": "df.pivot_table(index=\"bulan\", columns=\"kategori\", values=\"revenue\", aggfunc=\"sum\", fill_value=0).round()",
   "s": "df = order_items.merge(orders, on=\"order_id\").merge(products, on=\"product_id\")\ndf = df[(df.status == \"selesai\") & (df.tgl_order.dt.year == 2026)].copy()\ndf[\"revenue\"] = df.qty * df.harga_satuan * (1 - df.diskon)\ndf[\"bulan\"] = df.tgl_order.dt.strftime(\"%Y-%m\")\njawaban = df.pivot_table(index=\"bulan\", columns=\"kategori\", values=\"revenue\", aggfunc=\"sum\", fill_value=0).round()",
   "start": "jawaban = ...",
   "order": true
  },
  {
   "id": "py20",
   "tag": "Analisis",
   "t": "Repeat rate",
   "p": "Dari pelanggan yang punya order selesai, berapa <b>persen</b> yang punya ≥ 2 order selesai? (2 desimal)",
   "h": "n = orders[...].groupby('customer_id').size(); round((n >= 2).mean() * 100, 2)",
   "s": "n = orders[orders.status == \"selesai\"].groupby(\"customer_id\").size()\njawaban = round((n >= 2).mean() * 100, 2)",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py21",
   "tag": "Analisis",
   "t": "Conversion per device",
   "p": "Dari <code>web_events</code>, hitung conversion (sesi unik purchase ÷ sesi unik view_product × 100, 2 desimal) per <b>device</b> (Series).",
   "h": "Hitung nunique session per device untuk masing-masing event lalu bagi",
   "s": "v = web_events[web_events.event == \"view_product\"].groupby(\"device\")[\"session_id\"].nunique()\np = web_events[web_events.event == \"purchase\"].groupby(\"device\")[\"session_id\"].nunique()\njawaban = (p / v * 100).round(2)",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py22",
   "tag": "Analisis",
   "t": "Uji signifikansi: Instagram vs TikTok",
   "p": "Apakah conversion (sesi purchase ÷ sesi view_product) pengunjung dari <b>Instagram</b> berbeda signifikan dari <b>TikTok</b>? Lakukan <b>z-test dua proporsi</b> dan simpan <b>p-value</b> (dua sisi, 4 desimal) di <code>jawaban</code>. Apakah p &lt; 0,05?",
   "h": "groupby('sumber')['session_id'].nunique() untuk event view_product & purchase; ambil indeks 'Instagram' & 'TikTok'",
   "s": "v = web_events[web_events.event == \"view_product\"].groupby(\"sumber\")[\"session_id\"].nunique()\np = web_events[web_events.event == \"purchase\"].groupby(\"sumber\")[\"session_id\"].nunique()\nx1, n1, x2, n2 = p[\"Instagram\"], v[\"Instagram\"], p[\"TikTok\"], v[\"TikTok\"]\npg = (x1 + x2) / (n1 + n2)\nse = math.sqrt(pg * (1 - pg) * (1 / n1 + 1 / n2))\nz = (x1 / n1 - x2 / n2) / se\njawaban = round(math.erfc(abs(z) / math.sqrt(2)), 4)",
   "start": "import math\n# x = sesi purchase, n = sesi view_product, per sumber\n# p_gab = (x1+x2)/(n1+n2); se = sqrt(p_gab*(1-p_gab)*(1/n1+1/n2)); z = (x1/n1 - x2/n2)/se\n# p_value = math.erfc(abs(z)/math.sqrt(2))\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py23",
   "tag": "Analisis",
   "t": "Korelasi biaya & signup",
   "p": "Hitung korelasi Pearson antara <code>biaya</code> dan <code>signup</code> di tabel marketing (3 desimal).",
   "h": "marketing.biaya.corr(marketing.signup)",
   "s": "jawaban = round(marketing.biaya.corr(marketing.signup), 3)",
   "start": "jawaban = ...",
   "order": false
  },
  {
   "id": "py24",
   "tag": "Analisis",
   "t": "Median recency",
   "p": "Untuk setiap pelanggan dengan order selesai, hitung <b>recency</b> = jumlah hari dari order selesai terakhir sampai <b>2026-11-01</b>. <code>jawaban</code> = median recency.",
   "h": "(acuan - groupby('customer_id').tgl_order.max()).dt.days.median()",
   "s": "acuan = pd.Timestamp(\"2026-11-01\")\nlast = orders[orders.status == \"selesai\"].groupby(\"customer_id\")[\"tgl_order\"].max()\njawaban = (acuan - last).dt.days.median()",
   "start": "acuan = pd.Timestamp(\"2026-11-01\")\n\njawaban = ...",
   "order": false
  },
  {
   "id": "py25",
   "tag": "Analisis",
   "t": "Ukuran cohort 2026",
   "p": "Cohort = bulan ('YYYY-MM') order selesai pertama tiap pelanggan. <code>jawaban</code> = jumlah pelanggan per cohort untuk cohort tahun 2026 (Series urut bulan).",
   "h": "first = groupby(\"customer_id\").tgl_order.min().dt.strftime(\"%Y-%m\"); filter >= \"2026-01\"; value_counts().sort_index()",
   "s": "first = orders[orders.status == \"selesai\"].groupby(\"customer_id\")[\"tgl_order\"].min().dt.strftime(\"%Y-%m\")\njawaban = first[first >= \"2026-01\"].value_counts().sort_index()",
   "start": "jawaban = ...",
   "order": true
  }
 ]
};
