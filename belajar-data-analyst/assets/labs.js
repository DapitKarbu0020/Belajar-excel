/* =========================================================
   LAB SQL (sql.js / SQLite, offline), LAB PYTHON (Pyodide),
   PROYEK BI, dan halaman UNDUHAN.
   ========================================================= */
(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const A = () => window.APP; // helper dari app.js
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const SQLX = window.LAB_SQL || [];
  const PYX = (window.LAB_PY || {}).ex || [];

  const loaded = {};
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = () => { delete loaded[src]; rej(new Error("Gagal memuat " + src)); };
      document.head.append(s);
    });
    return loaded[src];
  }

  // ---------------- editor helper ----------------
  function editor(ta, onRun) {
    const fit = () => { ta.style.height = "auto"; ta.style.height = Math.max(150, ta.scrollHeight + 4) + "px"; };
    ta.addEventListener("input", fit);
    ta.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); onRun(); }
      if (e.key === "Tab") {
        e.preventDefault();
        const s = ta.selectionStart, en = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + "    " + ta.value.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4; fit();
      }
    });
    setTimeout(fit, 0);
  }
  const fmtCell = (v) => v === null || v === undefined ? '<span class="null">NULL</span>' : typeof v === "number" ? (Number.isInteger(v) ? v.toLocaleString("id-ID") : (+v.toFixed(4)).toLocaleString("id-ID")) : esc(v);
  function tableHTML(cols, rows, max = 200) {
    if (!cols) return "";
    return `<div class="res-meta">${rows.length.toLocaleString("id-ID")} baris${rows.length > max ? ` (ditampilkan ${max})` : ""}</div>
      <div class="res-wrap"><table class="tbl res-tbl"><tr>${cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr>
      ${rows.slice(0, max).map((r) => `<tr>${r.map((v) => `<td>${fmtCell(v)}</td>`).join("")}</tr>`).join("")}</table></div>`;
  }
  const tagsOf = (list) => [...new Set(list.map((x) => x.tag))];

  // =========================================================
  //                       LAB SQL
  // =========================================================
  let dbPromise = null;
  function getDB(status) {
    if (dbPromise) return dbPromise;
    dbPromise = (async () => {
      status("Memuat mesin SQLite…");
      await loadScript("vendor/sql-wasm.js");
      await loadScript("vendor/sql-wasm-b64.js");
      status("Memuat dataset TokoKita…");
      await loadScript("data/dataset.js");
      const bin = Uint8Array.from(atob(window.SQL_WASM_B64), (c) => c.charCodeAt(0));
      const SQL = await window.initSqlJs({ wasmBinary: bin });
      const db = new SQL.Database();
      const D = window.DATASET;
      db.exec("BEGIN");
      for (const [t, x] of Object.entries(D.tables)) {
        const ty = { TEXT: "TEXT", DATE: "TEXT", INTEGER: "INTEGER", REAL: "REAL" };
        db.exec(`CREATE TABLE ${t} (${x.cols.map((c, i) => `${c} ${ty[x.types[i]]}${D.pk[t] === c ? " PRIMARY KEY" : ""}`).join(", ")})`);
        const st = db.prepare(`INSERT INTO ${t} VALUES (${x.cols.map(() => "?").join(",")})`);
        x.rows.forEach((r) => st.run(r));
        st.free();
      }
      db.exec("COMMIT");
      return db;
    })();
    dbPromise.catch(() => (dbPromise = null));
    return dbPromise;
  }
  function runSQL(db, sql) {
    db.exec("SAVEPOINT lab");
    try {
      const res = db.exec(sql);
      return res.length ? res[res.length - 1] : { columns: [], values: [] };
    } finally {
      try { db.exec("ROLLBACK TO lab; RELEASE lab"); } catch (e) { /* abaikan */ }
    }
  }
  const normRow = (r) => r.map((v) => (typeof v === "number" ? Math.round(v * 100) / 100 : v === null ? null : String(v).trim()));
  function sameResult(a, b, ordered) {
    if (a.columns.length !== b.columns.length) return { ok: false, why: `Jumlah kolom berbeda: kamu ${a.columns.length}, seharusnya ${b.columns.length}.` };
    if (a.values.length !== b.values.length) return { ok: false, why: `Jumlah baris berbeda: kamu ${a.values.length}, seharusnya ${b.values.length}.` };
    let A1 = a.values.map(normRow).map((r) => JSON.stringify(r)), B1 = b.values.map(normRow).map((r) => JSON.stringify(r));
    if (!ordered) { A1 = A1.sort(); B1 = B1.sort(); }
    for (let i = 0; i < A1.length; i++) if (A1[i] !== B1[i]) return { ok: false, why: ordered ? `Isi/urutan baris ke-${i + 1} belum sama. Periksa rumus, pembulatan, filter, atau ORDER BY.` : "Jumlah baris sudah sama, tetapi isinya berbeda. Periksa rumus, pembulatan, atau filter." };
    return { ok: true };
  }

  function renderSQL(view, arg) {
    const S = A().S;
    S.sql = S.sql || {}; S.drafts = S.drafts || {};
    const tags = tagsOf(SQLX);
    let cur = SQLX.find((x) => x.id === arg) || SQLX.find((x) => x.tag === decodeURIComponent(arg || "") && !S.sql[x.id]) || SQLX.find((x) => x.tag === decodeURIComponent(arg || "")) || SQLX.find((x) => !S.sql[x.id]) || SQLX[0];
    let mode = arg === "bebas" ? "bebas" : arg === "skema" ? "skema" : "soal";
    const done = () => SQLX.filter((x) => S.sql[x.id]).length;

    A().mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/praktik">Praktik</a> / <span>Lab SQL</span></div>
      <section class="lab-head card">
        <div><span class="pill" style="--c:#2563eb">Lab interaktif · SQLite di browser</span>
        <h1>Lab SQL: Database TokoKita</h1>
        <p class="muted">${SQLX.length} soal dari SELECT dasar sampai window function & cohort. Tulis query, tekan <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, dan hasilnya langsung dicek. Berjalan offline.</p></div>
        <div class="lab-prog"><b id="sqlDone">${done()}</b><span>/ ${SQLX.length} selesai</span><div class="bar"><i style="width:${(done() / SQLX.length) * 100}%;background:#2563eb" id="sqlBar"></i></div></div>
      </section>
      <nav class="seg" id="sqlSeg"><button data-m="soal" class="${mode === "soal" ? "on" : ""}">📝 Soal</button><button data-m="skema" class="${mode === "skema" ? "on" : ""}">🗂️ Skema & data</button><button data-m="bebas" class="${mode === "bebas" ? "on" : ""}">🧪 Mode bebas</button></nav>
      <div id="sqlBody"></div>`);
    A().renderSide(null);

    const body = $("#sqlBody");
    const status = (t) => { const el = $("#sqlStatus"); if (el) el.textContent = t; };
    $$("#sqlSeg button").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.m; $$("#sqlSeg button").forEach((x) => x.classList.toggle("on", x === b)); draw(); }));

    function listHTML() {
      return tags.map((t) => `<div class="ex-group"><div class="ex-tag">${t} <small>${SQLX.filter((x) => x.tag === t && S.sql[x.id]).length}/${SQLX.filter((x) => x.tag === t).length}</small></div>
        ${SQLX.filter((x) => x.tag === t).map((x) => `<button class="ex-item ${x.id === cur.id ? "on" : ""} ${S.sql[x.id] ? "ok" : ""}" data-id="${x.id}"><span class="dot"></span>${esc(x.t)}</button>`).join("")}</div>`).join("");
    }

    function draw() {
      if (mode === "skema") return drawSchema();
      if (mode === "bebas") return drawFree();
      const idx = SQLX.indexOf(cur);
      body.innerHTML = `
        <div class="lab">
          <aside class="ex-list card">${listHTML()}</aside>
          <section class="lab-main">
            <select class="ex-select" id="exSelect">${SQLX.map((x) => `<option value="${x.id}" ${x.id === cur.id ? "selected" : ""}>${S.sql[x.id] ? "✅" : "○"} [${x.tag}] ${esc(x.t)}</option>`).join("")}</select>
            <div class="card ex-card">
              <div class="ex-top"><span class="pill" style="--c:#2563eb">${cur.tag} · ${idx + 1}/${SQLX.length}</span>${S.sql[cur.id] ? '<span class="ok-tag">✅ Selesai</span>' : ""}</div>
              <h3>${esc(cur.t)}</h3>
              <p class="ex-prompt">${cur.p}</p>
              <textarea class="code" id="code" spellcheck="false" placeholder="-- tulis query di sini">${esc(S.drafts[cur.id] ?? "SELECT \n")}</textarea>
              <div class="ex-actions">
                <button class="btn" id="run">▶ Jalankan & cek <kbd>Ctrl</kbd>+<kbd>↵</kbd></button>
                <button class="btn ghost" id="hint">💡 Petunjuk</button>
                <button class="btn ghost" id="sol">🔑 Solusi</button>
                <span class="status" id="sqlStatus"></span>
              </div>
              <div id="hintBox"></div>
              <div id="out"></div>
            </div>
            <div class="pager">
              ${SQLX[idx - 1] ? `<a class="card prev" href="#/lab/sql/${SQLX[idx - 1].id}"><small>← Sebelumnya</small>${esc(SQLX[idx - 1].t)}</a>` : "<span></span>"}
              ${SQLX[idx + 1] ? `<a class="card next" href="#/lab/sql/${SQLX[idx + 1].id}"><small>Berikutnya →</small>${esc(SQLX[idx + 1].t)}</a>` : "<span></span>"}
            </div>
          </section>
        </div>`;
      const ta = $("#code");
      editor(ta, run);
      ta.addEventListener("input", () => { S.drafts[cur.id] = ta.value; A().save(); });
      $$(".ex-item", body).forEach((b) => b.addEventListener("click", () => { location.hash = "#/lab/sql/" + b.dataset.id; }));
      $("#exSelect").addEventListener("change", (e) => { location.hash = "#/lab/sql/" + e.target.value; });
      $("#run").addEventListener("click", run);
      $("#hint").addEventListener("click", () => { $("#hintBox").innerHTML = `<div class="tip">💡 ${esc(cur.h)}</div>`; });
      $("#sol").addEventListener("click", (e) => {
        const b = e.currentTarget;
        if (!b.dataset.c) { b.dataset.c = 1; b.textContent = "Yakin? Klik lagi"; setTimeout(() => { delete b.dataset.c; b.textContent = "🔑 Solusi"; }, 2500); return; }
        $("#hintBox").innerHTML = `<div class="formula" data-lang="SOLUSI">${esc(cur.s.replace(/ (FROM|WHERE|GROUP BY|ORDER BY|HAVING|JOIN|LEFT JOIN|LIMIT|SELECT|WITH|UNION) /g, "\n$1 "))}</div>`;
        A().enhance($("#hintBox"));
      });
      ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length);
      getDB(status).then(() => status("Database siap ✓")).catch((e) => status("⚠️ " + e.message));

      async function run() {
        const out = $("#out");
        let db;
        try { db = await getDB(status); } catch (e) { out.innerHTML = `<div class="warn">⚠️ ${esc(e.message)}</div>`; return; }
        const t0 = performance.now();
        let r;
        try { r = runSQL(db, ta.value); }
        catch (e) { out.innerHTML = `<div class="warn sql-err">❌ Error SQL: ${esc(e.message)}</div>`; $("#code").classList.add("shake"); setTimeout(() => $("#code").classList.remove("shake"), 450); return; }
        const ms = Math.round(performance.now() - t0);
        const key = runSQL(db, cur.s);
        const cmp = sameResult(r, key, cur.order);
        A().addMin(0.5);
        if (cmp.ok) {
          const first = !S.sql[cur.id];
          S.sql[cur.id] = A().dkey(); A().save();
          out.innerHTML = `<div class="verdict ok">✅ Benar! Hasil query cocok dengan kunci. <small>${ms} ms</small>${SQLX[idx + 1] ? ` <a href="#/lab/sql/${SQLX[idx + 1].id}" class="btn sm-inline">Soal berikutnya →</a>` : ""}</div>` + tableHTML(r.columns, r.values);
          if (first) { A().confetti(90, $("#run")); A().toast(`🧠 Soal SQL “${cur.t}” selesai`); }
          $("#sqlDone").textContent = done(); $("#sqlBar").style.width = (done() / SQLX.length) * 100 + "%";
          $$(".ex-item", body).forEach((b) => b.classList.toggle("ok", !!S.sql[b.dataset.id]));
          A().checkBadges(); A().renderSide(null);
        } else {
          out.innerHTML = `<div class="verdict no">❌ Belum tepat. ${cmp.why} <small>${ms} ms</small></div>` + tableHTML(r.columns, r.values);
        }
      }
    }

    function drawSchema() {
      body.innerHTML = `<div class="card"><p class="muted" id="sqlStatus">Memuat…</p></div>`;
      loadScript("data/dataset.js").then(() => {
        const D = window.DATASET;
        body.innerHTML = `<div class="schema">${Object.entries(D.tables).map(([t, x]) => `
          <div class="card tcard"><div class="thead"><b>🗂️ ${t}</b><small>${x.rows.length.toLocaleString("id-ID")} baris</small></div>
          <p class="muted">${esc(D.desc[t])}</p>
          <table class="tbl"><tr><th>Kolom</th><th>Tipe</th><th>Contoh</th></tr>${x.cols.map((c, i) => `<tr><td><code>${c}</code>${D.pk[t] === c ? ' <span class="k">PK</span>' : ""}${(D.fk[t] || []).some((f) => f[0] === c) ? ` <span class="k fk">FK → ${(D.fk[t].find((f) => f[0] === c) || [])[1]}</span>` : ""}</td><td>${x.types[i]}</td><td>${fmtCell(x.rows[0][i])}</td></tr>`).join("")}</table>
          <button class="btn ghost sm-inline" data-peek="${t}">Lihat 10 baris di mode bebas →</button></div>`).join("")}</div>
          <div class="card er"><b>Relasi:</b> customers (1) ── (∞) orders (1) ── (∞) order_items (∞) ── (1) products · marketing & web_events berdiri sendiri (gabungkan lewat channel/sumber & tanggal).</div>`;
        $$("[data-peek]", body).forEach((b) => b.addEventListener("click", () => { S.drafts.__free = `SELECT * FROM ${b.dataset.peek} LIMIT 10;`; mode = "bebas"; $$("#sqlSeg button").forEach((x) => x.classList.toggle("on", x.dataset.m === "bebas")); draw(); }));
      });
    }

    function drawFree() {
      body.innerHTML = `<div class="card ex-card">
        <h3>Mode bebas</h3><p class="muted">Tulis query apa pun untuk bereksplorasi. Perubahan data (INSERT/UPDATE/DELETE) otomatis dibatalkan setelah dijalankan.</p>
        <textarea class="code" id="code" spellcheck="false">${esc(S.drafts.__free ?? "SELECT kategori, COUNT(*) AS jumlah_produk, ROUND(AVG(harga)) AS rata_harga\nFROM products\nGROUP BY kategori\nORDER BY rata_harga DESC;")}</textarea>
        <div class="ex-actions"><button class="btn" id="run">▶ Jalankan <kbd>Ctrl</kbd>+<kbd>↵</kbd></button><button class="btn ghost" id="csv">⬇️ Salin hasil (CSV)</button><span class="status" id="sqlStatus"></span></div>
        <div id="out"></div></div>`;
      const ta = $("#code");
      let last = null;
      editor(ta, run);
      ta.addEventListener("input", () => { S.drafts.__free = ta.value; A().save(); });
      $("#run").addEventListener("click", run);
      $("#csv").addEventListener("click", async () => {
        if (!last) return A().toast("Jalankan query dulu");
        const csv = [last.columns].concat(last.values).map((r) => r.map((v) => (v === null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v)).join(",")).join("\n");
        try { await navigator.clipboard.writeText(csv); A().toast("📋 Hasil disalin sebagai CSV, siap ditempel ke Excel/Sheets"); } catch { A().toast("⚠️ Browser menolak akses clipboard"); }
      });
      getDB(status).then(() => status("Database siap ✓")).catch((e) => status("⚠️ " + e.message));
      async function run() {
        const out = $("#out");
        try { const db = await getDB(status); const t0 = performance.now(); last = runSQL(db, ta.value); out.innerHTML = `<div class="verdict info">✓ ${Math.round(performance.now() - t0)} ms</div>` + tableHTML(last.columns, last.values, 500); A().addMin(0.25); }
        catch (e) { out.innerHTML = `<div class="warn sql-err">❌ Error SQL: ${esc(e.message)}</div>`; }
      }
    }
    draw();
  }

  // =========================================================
  //                      LAB PYTHON
  // =========================================================
  const PYODIDE = ["v0.27.7", "v0.27.5", "v0.26.4"];
  let pyPromise = null;
  function getPy(status) {
    if (pyPromise) return pyPromise;
    pyPromise = (async () => {
      let lastErr;
      for (const v of PYODIDE) {
        const base = `https://cdn.jsdelivr.net/pyodide/${v}/full/`;
        try {
          status(`Mengunduh Python (Pyodide ${v})… ±10 MB, hanya sekali`);
          await loadScript(base + "pyodide.js");
          const py = await window.loadPyodide({ indexURL: base });
          status("Memasang pandas & numpy…");
          await py.loadPackage(["pandas", "numpy"]);
          status("Memuat dataset TokoKita…");
          await loadScript("data/dataset.js");
          py.globals.set("_raw", JSON.stringify(window.DATASET));
          await py.runPythonAsync(window.LAB_PY.setup + "\n" + window.LAB_PY.check + `
def _show(x):
    if isinstance(x, (pd.DataFrame, pd.Series)):
        d = x.to_frame() if isinstance(x, pd.Series) else x
        return ["html", f"<div class='res-meta'>{type(x).__name__} · {d.shape[0]} baris × {d.shape[1]} kolom</div>" + d.head(30).to_html(classes="tbl res-tbl", border=0, float_format=lambda v: f"{v:,.2f}")]
    if x is Ellipsis:
        return ["empty", ""]
    return ["text", repr(x)]
`);
          return py;
        } catch (e) { lastErr = e; }
      }
      throw new Error("Python gagal dimuat. Lab Python butuh koneksi internet saat pertama kali (mengunduh Pyodide dari cdn.jsdelivr.net). " + (lastErr ? lastErr.message : ""));
    })();
    pyPromise.catch(() => (pyPromise = null));
    return pyPromise;
  }
  async function runPy(py, code, ex) {
    const out = [];
    py.setStdout({ batched: (s) => out.push(s) });
    py.setStderr({ batched: (s) => out.push(s) });
    py.globals.set("_user_code", code);
    py.globals.set("_sol_code", ex ? ex.s : "");
    py.globals.set("_ordered", ex ? !!ex.order : false);
    try {
      await py.runPythonAsync(`
_nsu = _ns()
exec(_user_code, _nsu)
_res_show = _show(_nsu.get("jawaban", Ellipsis))
_res_ok = None
if _sol_code:
    _nss = _ns()
    exec(_sol_code, _nss)
    _uj = _nsu.get("jawaban", Ellipsis)
    _res_ok = (_uj is not Ellipsis) and _same(_uj, _nss["jawaban"], _ordered)
`);
      const show = py.globals.get("_res_show").toJs();
      return { out: out.join("\n"), show, ok: py.globals.get("_res_ok") };
    } catch (e) {
      const msg = String(e.message || e).split("\n").filter((l) => l.trim()).slice(-3).join("\n");
      return { out: out.join("\n"), err: msg };
    }
  }

  function renderPy(view, arg) {
    const S = A().S;
    S.py = S.py || {}; S.drafts = S.drafts || {};
    const tags = tagsOf(PYX);
    let cur = PYX.find((x) => x.id === arg) || PYX.find((x) => x.tag === decodeURIComponent(arg || "") && !S.py[x.id]) || PYX.find((x) => x.tag === decodeURIComponent(arg || "")) || PYX.find((x) => !S.py[x.id]) || PYX[0];
    const done = () => PYX.filter((x) => S.py[x.id]).length;
    const idx = PYX.indexOf(cur);
    A().mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/praktik">Praktik</a> / <span>Lab Python</span></div>
      <section class="lab-head card">
        <div><span class="pill" style="--c:#ca8a04">Lab interaktif · Python + pandas di browser</span>
        <h1>Lab Python: Analisis TokoKita</h1>
        <p class="muted">${PYX.length} soal Python & pandas. Simpan hasil akhir di variabel <code>jawaban</code>, lalu jalankan. DataFrame <code>customers, products, orders, order_items, marketing, web_events</code> sudah tersedia. <b>Butuh internet</b> saat pertama memuat Python (±10–20 detik).</p></div>
        <div class="lab-prog"><b id="pyDone">${done()}</b><span>/ ${PYX.length} selesai</span><div class="bar"><i style="width:${(done() / PYX.length) * 100}%;background:#ca8a04" id="pyBar"></i></div></div>
      </section>
      <div class="lab">
        <aside class="ex-list card">${tags.map((t) => `<div class="ex-group"><div class="ex-tag">${t} <small>${PYX.filter((x) => x.tag === t && S.py[x.id]).length}/${PYX.filter((x) => x.tag === t).length}</small></div>
          ${PYX.filter((x) => x.tag === t).map((x) => `<a class="ex-item ${x.id === cur.id ? "on" : ""} ${S.py[x.id] ? "ok" : ""}" href="#/lab/python/${x.id}"><span class="dot"></span>${esc(x.t)}</a>`).join("")}</div>`).join("")}</aside>
        <section class="lab-main">
          <select class="ex-select" id="exSelect">${PYX.map((x) => `<option value="${x.id}" ${x.id === cur.id ? "selected" : ""}>${S.py[x.id] ? "✅" : "○"} [${x.tag}] ${esc(x.t)}</option>`).join("")}</select>
          <div class="card ex-card">
            <div class="ex-top"><span class="pill" style="--c:#ca8a04">${cur.tag} · ${idx + 1}/${PYX.length}</span>${S.py[cur.id] ? '<span class="ok-tag">✅ Selesai</span>' : ""}</div>
            <h3>${esc(cur.t)}</h3>
            <p class="ex-prompt">${cur.p}</p>
            <textarea class="code py" id="code" spellcheck="false">${esc(S.drafts[cur.id] ?? cur.start)}</textarea>
            <div class="ex-actions">
              <button class="btn" id="run" style="--accent:#ca8a04">▶ Jalankan & cek <kbd>Ctrl</kbd>+<kbd>↵</kbd></button>
              <button class="btn ghost" id="hint">💡 Petunjuk</button>
              <button class="btn ghost" id="sol">🔑 Solusi</button>
              <button class="btn ghost" id="reset" title="Kembalikan kode awal">↺</button>
              <span class="status" id="pyStatus">Python dimuat saat pertama kali dijalankan.</span>
            </div>
            <div id="hintBox"></div>
            <div id="out"></div>
          </div>
          <div class="pager">
            ${PYX[idx - 1] ? `<a class="card prev" href="#/lab/python/${PYX[idx - 1].id}"><small>← Sebelumnya</small>${esc(PYX[idx - 1].t)}</a>` : "<span></span>"}
            ${PYX[idx + 1] ? `<a class="card next" href="#/lab/python/${PYX[idx + 1].id}"><small>Berikutnya →</small>${esc(PYX[idx + 1].t)}</a>` : "<span></span>"}
          </div>
        </section>
      </div>`);
    A().renderSide(null);
    const ta = $("#code");
    const status = (t) => { const el = $("#pyStatus"); if (el) el.textContent = t; };
    editor(ta, run);
    ta.addEventListener("input", () => { S.drafts[cur.id] = ta.value; A().save(); });
    $("#exSelect").addEventListener("change", (e) => { location.hash = "#/lab/python/" + e.target.value; });
    $("#run").addEventListener("click", run);
    $("#reset").addEventListener("click", () => { ta.value = cur.start; delete S.drafts[cur.id]; A().save(); ta.dispatchEvent(new Event("input")); });
    $("#hint").addEventListener("click", () => { $("#hintBox").innerHTML = `<div class="tip">💡 <code>${esc(cur.h)}</code></div>`; });
    $("#sol").addEventListener("click", (e) => {
      const b = e.currentTarget;
      if (!b.dataset.c) { b.dataset.c = 1; b.textContent = "Yakin? Klik lagi"; setTimeout(() => { delete b.dataset.c; b.textContent = "🔑 Solusi"; }, 2500); return; }
      $("#hintBox").innerHTML = `<div class="formula" data-lang="SOLUSI">${esc(cur.s)}</div>`; A().enhance($("#hintBox"));
    });
    if (pyPromise) pyPromise.then(() => status("Python siap ✓")).catch(() => {});

    async function run() {
      const out = $("#out"), btn = $("#run");
      btn.disabled = true; btn.classList.add("loading");
      out.innerHTML = `<div class="verdict info"><span class="spin"></span> <span id="pyMsg">Menjalankan…</span></div>`;
      let py;
      try { py = await getPy((t) => { status(t); const m = $("#pyMsg"); if (m) m.textContent = t; }); status("Python siap ✓"); }
      catch (e) { out.innerHTML = `<div class="warn">⚠️ ${esc(e.message)}</div>`; btn.disabled = false; btn.classList.remove("loading"); return; }
      const r = await runPy(py, ta.value, cur);
      btn.disabled = false; btn.classList.remove("loading");
      A().addMin(0.5);
      const stdout = r.out ? `<pre class="stdout">${esc(r.out)}</pre>` : "";
      if (r.err) { out.innerHTML = `<div class="warn sql-err">❌ Error Python:\n<pre>${esc(r.err)}</pre></div>` + stdout; return; }
      const [kind, val] = r.show;
      const shown = kind === "html" ? `<div class="res-wrap">${val}</div>` : kind === "text" ? `<pre class="stdout">jawaban = ${esc(val)}</pre>` : "";
      if (r.ok) {
        const first = !S.py[cur.id];
        S.py[cur.id] = A().dkey(); A().save();
        out.innerHTML = `<div class="verdict ok">✅ Benar! <code>jawaban</code> cocok dengan kunci.${PYX[idx + 1] ? ` <a href="#/lab/python/${PYX[idx + 1].id}" class="btn sm-inline">Soal berikutnya →</a>` : ""}</div>` + stdout + shown;
        if (first) { A().confetti(90, btn); A().toast(`🐍 Soal Python “${cur.t}” selesai`); }
        $("#pyDone").textContent = done(); $("#pyBar").style.width = (done() / PYX.length) * 100 + "%";
        A().checkBadges(); A().renderSide(null);
      } else {
        out.innerHTML = `<div class="verdict no">${kind === "empty" ? "⚠️ Variabel <code>jawaban</code> belum diisi." : "❌ Belum tepat. Bandingkan hasilmu dengan yang diminta soal (kolom, urutan, pembulatan)."}</div>` + stdout + shown;
      }
    }
  }

  // =========================================================
  //                       PROYEK BI
  // =========================================================
  const BI = [
    {
      id: "pbi", tool: "Power BI", icon: "📊", color: "#ca8a04", title: "Dashboard Penjualan TokoKita",
      brief: "Direktur ingin satu laporan Power BI untuk memantau performa penjualan bulanan: berapa revenue, dari kategori & kota mana, dan apakah tumbuh.",
      data: ["orders.csv", "order_items.csv", "products.csv", "customers.csv"],
      steps: ["Get Data → Text/CSV: impor 4 file, cek tipe data di Power Query (tanggal = Date, angka = Whole/Decimal).",
        "Buat tabel Kalender: Modeling → New table → Kalender = CALENDAR(DATE(2025,1,1), DATE(2026,12,31)) + kolom Bulan. Tandai sebagai Date Table.",
        "Model view: relasikan customers→orders (customer_id), orders→order_items (order_id), products→order_items (product_id), Kalender→orders (tgl_order).",
        "Buat measure: Revenue Selesai, Jumlah Order, AOV, Gross Margin %, Revenue LM, Growth MoM % (lihat pelajaran Power BI).",
        "Halaman 1 (Ringkasan): 4 KPI card, line chart revenue per bulan, bar revenue per kategori (terurut), slicer tanggal & kota.",
        "Halaman 2 (Detail produk): tabel/matrix produk dengan revenue, unit, margin; aktifkan drill-through dari halaman 1.",
        "Tulis 3 insight sebagai text box/judul visual. Ekspor ke PDF atau ambil screenshot untuk portofolio."],
      check: [["Revenue order selesai", "Rp 482.878.400"], ["Jumlah order selesai", "1.160"], ["AOV", "± Rp 416.274"], ["Gross margin", "32,7%"], ["Revenue Okt 2026 vs Sep 2026", "+48,8%"]],
      lesson: "v-3",
    },
    {
      id: "tab", tool: "Tableau", icon: "📈", color: "#2563eb", title: "Analisis Pelanggan: Cohort & Repeat Order",
      brief: "Tim CRM ingin memahami perilaku pelanggan: berapa yang kembali belanja, bagaimana retensi tiap cohort, dan channel akuisisi mana yang menghasilkan pelanggan paling loyal.",
      data: ["customers.csv", "orders.csv", "order_items.csv"],
      steps: ["Tableau Public Desktop → Connect → Text file: customers.csv, lalu tambahkan orders.csv dan order_items.csv sebagai relationship.",
        "Filter data source: status = 'selesai'. Buat calculated field Revenue = [Qty]*[Harga Satuan]*(1-[Diskon]).",
        "LOD: First Order = { FIXED [Customer Id] : MIN([Tgl Order]) }; Cohort = DATETRUNC('month',[First Order]); Bulan Ke = DATEDIFF('month',[Cohort],DATETRUNC('month',[Tgl Order])).",
        "Sheet Cohort: Rows = Cohort, Columns = Bulan Ke, Text & Color = COUNTD(Customer Id) → Quick Table Calc Percent of Total (atau bagi dengan ukuran cohort). Jadikan heatmap.",
        "Sheet Repeat: Order per pelanggan = { FIXED [Customer Id] : COUNTD([Order Id]) }; buat bar % pelanggan 2+ order per Channel Akuisisi.",
        "Sheet Kota: revenue per kota (bar terurut) & AOV per kota.",
        "Dashboard: gabungkan 3 sheet, tambahkan filter action (klik channel → filter cohort). Publish ke Tableau Public & simpan link-nya."],
      check: [["Pelanggan dengan order selesai", "564"], ["Repeat rate (≥ 2 order)", "52,84%"], ["Kota revenue terbesar", "Jakarta"]],
      lesson: "v-4",
    },
    {
      id: "lks", tool: "Looker Studio", icon: "📉", color: "#16a34a", title: "Dashboard Marketing & Funnel",
      brief: "Tim marketing butuh dashboard yang bisa dibuka siapa saja lewat link: efisiensi biaya iklan per channel (CAC) dan di langkah funnel mana pengunjung paling banyak hilang.",
      data: ["marketing.csv", "web_events.csv"],
      steps: ["Upload marketing.csv dan web_events.csv ke Google Sheets (1 file, 2 tab) atau ke Google Drive lalu buka dengan Sheets.",
        "Looker Studio → Create → Report → Add data → Google Sheets (tab marketing). Ulangi untuk tab web_events.",
        "Calculated field di sumber marketing: CAC = SUM(biaya)/SUM(signup); CTR = SUM(klik)/SUM(impressions).",
        "Halaman Marketing: scorecard total biaya, signup, CAC; time series biaya & signup mingguan (breakdown channel); tabel CAC per channel.",
        "Halaman Funnel: buat field Step Order (CASE event WHEN 'view_product' THEN 1 …); bar chart COUNT_DISTINCT(session_id) per event (urut step), breakdown device.",
        "Tambahkan date range control & drop-down sumber/channel. Atur tema & warna konsisten.",
        "Share → Anyone with the link can view. Simpan link untuk portofolio."],
      check: [["Total biaya iklan", "Rp 121.810.000"], ["Total signup berbayar", "365"], ["CAC termurah", "TikTok ± Rp 265.976"], ["Conversion desktop vs mobile", "19,81% vs 11,02%"]],
      lesson: "v-5",
    },
  ];
  function renderBI() {
    const S = A().S; S.bi = S.bi || {};
    A().mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/praktik">Praktik</a> / <span>Proyek BI</span></div>
      <section class="lab-head card"><div><span class="pill" style="--c:#db2777">Proyek portofolio</span>
        <h1>Proyek BI: Power BI · Tableau · Looker Studio</h1>
        <p class="muted">Tiga proyek dengan dataset TokoKita. Ikuti langkahnya, centang progresmu, lalu cocokkan hasil dengan <b>angka acuan</b> untuk memastikan perhitunganmu benar.</p></div></section>
      <div class="bi-grid">${BI.map((p) => {
        const st = S.bi[p.id] || {}; const n = p.steps.filter((_, i) => st[i]).length;
        return `<article class="card bi-card" style="--c:${p.color}">
          <div class="bi-top"><span class="bi-ico">${p.icon}</span><div><span class="pill">${p.tool}</span><h3>${p.title}</h3></div><span class="bi-n" data-n="${p.id}">${n}/${p.steps.length}</span></div>
          <p>${p.brief}</p>
          <div class="chips">${p.data.map((d) => `<a href="latihan/data/${d}" download>⬇️ ${d}</a>`).join("")}</div>
          <div class="practice">${p.steps.map((s, i) => `<div class="task ${st[i] ? "on" : ""}" data-p="${p.id}" data-i="${i}" role="checkbox" tabindex="0"><span class="box"></span><span class="txt">${s}</span></div>`).join("")}</div>
          <details class="refnum"><summary>🎯 Angka acuan (cek setelah selesai)</summary><table class="tbl">${p.check.map(([a, b]) => `<tr><td>${a}</td><td><b>${b}</b></td></tr>`).join("")}</table></details>
          <a class="muted small" href="#/lesson/${p.lesson}">📖 Pelajari dulu: materi ${p.tool} →</a>
        </article>`; }).join("")}</div>`);
    A().renderSide(null);
    $$(".bi-card .task").forEach((el) => {
      const tog = () => {
        const p = BI.find((x) => x.id === el.dataset.p), i = +el.dataset.i;
        S.bi[p.id] = S.bi[p.id] || {}; S.bi[p.id][i] = !S.bi[p.id][i]; A().save();
        el.classList.toggle("on", S.bi[p.id][i]);
        const n = p.steps.filter((_, k) => S.bi[p.id][k]).length;
        $(`[data-n="${p.id}"]`).textContent = `${n}/${p.steps.length}`;
        if (S.bi[p.id][i]) A().addMin(3);
        if (n === p.steps.length && S.bi[p.id][i]) { A().confetti(160, el); A().toast(`🏁 Proyek ${p.tool} selesai! Tambahkan ke portofolio.`); }
        A().checkBadges(); A().renderSide(null);
      };
      el.addEventListener("click", tog);
      el.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); tog(); } });
    });
  }
  const biDone = (S) => BI.filter((p) => S.bi && S.bi[p.id] && p.steps.every((_, i) => S.bi[p.id][i])).length;

  // =========================================================
  //                       UNDUHAN
  // =========================================================
  const DL = [
    { h: "🗄️ SQL: database & soal", d: "Buka di DB Browser for SQLite / DBeaver, atau jalankan .sql di PostgreSQL/MySQL.", f: [
      ["latihan/sql/tokokita.db", "Database SQLite siap pakai"], ["latihan/sql/tokokita.sql", "Skrip CREATE + INSERT (SQLite/PostgreSQL/MySQL)"],
      ["latihan/sql/soal-sql.sql", `${SQLX.length} soal (sama dengan Lab SQL)`], ["latihan/sql/kunci-sql.sql", "Kunci jawaban"]] },
    { h: "🐍 Python: notebook Jupyter / Google Colab", d: "Colab → File → Upload notebook. Upload juga CSV dari folder data (instruksi ada di sel pertama).", f: [
      ["latihan/python/01-pandas-dasar-soal.ipynb", "Membaca, filter, groupby, merge"], ["latihan/python/01-pandas-dasar-kunci.ipynb", "Kunci"],
      ["latihan/python/02-eda-tokokita-soal.ipynb", "EDA lengkap + visualisasi"], ["latihan/python/02-eda-tokokita-kunci.ipynb", "Kunci"],
      ["latihan/python/03-cohort-rfm-abtest-soal.ipynb", "Cohort, RFM, uji A/B"], ["latihan/python/03-cohort-rfm-abtest-kunci.ipynb", "Kunci"]] },
    { h: "📁 Dataset CSV TokoKita", d: "Untuk Power BI, Tableau, Looker Studio, Excel, dan Python.", f: [
      ["latihan/data/customers.csv", "600 pelanggan"], ["latihan/data/products.csv", "40 produk"], ["latihan/data/orders.csv", "1.332 order"],
      ["latihan/data/order_items.csv", "2.217 item"], ["latihan/data/marketing.csv", "Biaya iklan mingguan"], ["latihan/data/web_events.csv", "Event funnel website"]] },
  ];
  function renderDL() {
    const FILES = window.LATIHAN || [];
    A().mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/praktik">Praktik</a> / <span>Unduhan</span></div>
      <section class="lab-head card"><div><span class="pill">Semua file latihan</span><h1>Unduhan</h1>
      <p class="muted">Semua file ada di folder <code>latihan/</code> di dalam folder website ini. Tombol unduh berfungsi saat website dibuka dari folder (file index.html).</p></div></section>
      ${DL.map((g) => `<div class="section-head"><h2>${g.h}</h2></div><p class="muted">${g.d}</p>
        <div class="res-list">${g.f.map(([p, n]) => `<a class="res" href="${p}" download><span class="ri doc">${p.endsWith(".ipynb") ? "📓" : p.endsWith(".csv") ? "📄" : "🗄️"}</span><div><b>${p.split("/").pop()}</b><small>${n}</small></div><span class="ext">⬇️</span></a>`).join("")}</div>`).join("")}
      <div class="section-head"><h2>📗 Excel: ${FILES.length} studi kasus</h2><a href="#/latihan">Buka halaman File Excel →</a></div>
      <div class="res-list">${FILES.map((x) => `<a class="res" href="latihan/${x.file}" download><span class="ri course">📗</span><div><b>${x.file.split("/").pop()}</b><small>${esc(x.title)}</small></div><span class="ext">⬇️</span></a>`).join("")}</div>`);
    A().renderSide(null);
  }

  // =========================================================
  //                   HUB PRAKTIK
  // =========================================================
  function renderHub() {
    const S = A().S, FILES = window.LATIHAN || [];
    const sqlN = SQLX.filter((x) => (S.sql || {})[x.id]).length, pyN = PYX.filter((x) => (S.py || {})[x.id]).length;
    const xlN = FILES.filter((x) => (S.files[x.file] || {}).done).length;
    const card = (href, ico, title, desc, n, tot, c) => `<a class="card hub-card" href="${href}" style="--c:${c}"><span class="hub-ico">${ico}</span><h3>${title}</h3><p>${desc}</p>
      <div class="bar"><i style="width:${tot ? (n / tot) * 100 : 0}%;background:${c}"></i></div><div class="lv-foot"><span>${n}/${tot}</span><span>Buka →</span></div></a>`;
    A().mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <span>Praktik</span></div>
      <section class="lab-head card"><div><span class="pill">Belajar dengan mengerjakan</span><h1>Praktik</h1>
      <p class="muted">Semua latihan memakai studi kasus nyata. SQL & Python bisa dikerjakan langsung di browser; Excel dan BI dikerjakan di aplikasinya masing-masing.</p></div></section>
      <div class="hub">
        ${card("#/lab/sql", "🗄️", "Lab SQL", `${SQLX.length} soal interaktif, dicek otomatis, berjalan offline.`, sqlN, SQLX.length, "#2563eb")}
        ${card("#/lab/python", "🐍", "Lab Python", `${PYX.length} soal Python & pandas, dicek otomatis (butuh internet).`, pyN, PYX.length, "#ca8a04")}
        ${card("#/latihan", "📗", "File Excel", `${FILES.length} studi kasus .xlsx dengan kolom Cek otomatis.`, xlN, FILES.length, "#16a34a")}
        ${card("#/proyek-bi", "📊", "Proyek BI", "Power BI, Tableau & Looker Studio dengan angka acuan.", biDone(S), BI.length, "#db2777")}
        ${card("#/unduhan", "⬇️", "Unduhan", "Database .db/.sql, notebook .ipynb, dataset CSV.", 0, 0, "#475569")}
      </div>`);
    A().renderSide(null);
  }

  window.LABS = { renderSQL, renderPy, renderBI, renderDL, renderHub, BI, biDone, SQLX, PYX };
})();
