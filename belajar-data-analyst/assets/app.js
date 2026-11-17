/* =========================================================
   Jalur Data Analyst — logika aplikasi
   Tanpa database: progres disimpan di localStorage browser.
   ========================================================= */
(() => {
  "use strict";

  const LEVELS = window.MATERI || [];
  const KEY = "jalur-da-v1";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // ---------- Flat index ----------
  const ALL = [];
  LEVELS.forEach((lv) => lv.lessons.forEach((l, i) => ALL.push({ ...l, level: lv, idx: i })));
  const byId = Object.fromEntries(ALL.map((l) => [l.id, l]));
  const TOTAL_MIN = ALL.reduce((a, l) => a + l.dur, 0);
  const FILES = window.LATIHAN || [];
  const lvColor = (id) => (LEVELS.find((x) => x.id === id) || {}).color || "#16a34a";

  // ---------- State ----------
  const blank = () => ({ v: 1, name: "", goal: 20, done: {}, tasks: {}, quiz: {}, notes: {}, activity: {}, badges: {}, files: {}, sql: {}, py: {}, bi: {}, drafts: {}, last: null, theme: null, v: 2 });
  let S = load();
  migrate();
  function migrate() {
    const M = window.MIGRASI || {};
    if (S.v >= 2) return;
    const cnt = {};
    Object.values(M).forEach((n) => (cnt[n] = (cnt[n] || 0) + 1));
    const done = {}, notes = {}, tasks = {}, quiz = {};
    Object.entries(S.done || {}).forEach(([k, v]) => { const n = M[k] || k; if (!done[n] || v > done[n]) done[n] = v; });
    Object.entries(S.notes || {}).forEach(([k, v]) => { if (!v) return; const n = M[k] || k; notes[n] = notes[n] ? notes[n] + "\n\n" + v : v; });
    const one = (k) => { const n = M[k] || k; return cnt[n] > 1 ? null : n; };
    Object.entries(S.tasks || {}).forEach(([k, v]) => { const [id, i] = k.split(":"); const n = one(id); if (n) tasks[n + ":" + i] = v; });
    Object.entries(S.quiz || {}).forEach(([k, v]) => { const [id, i] = k.split(":"); const n = one(id); if (n) quiz[n + ":" + i] = v; });
    const files = {};
    Object.entries(S.files || {}).forEach(([k, v]) => (files[k.startsWith("excel/") ? k : "excel/" + k] = v));
    Object.assign(S, { done, notes, tasks, quiz, files, last: S.last ? M[S.last] || S.last : null, v: 2 });
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {}
  }
  function load() {
    try { const o = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); o.files = o.files || {}; o.sql = o.sql || {}; o.py = o.py || {}; o.bi = o.bi || {}; o.drafts = o.drafts || {}; return o; }
    catch { return blank(); }
  }
  let saveT;
  function save() {
    clearTimeout(saveT);
    saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} }, 120);
  }

  // ---------- Date helpers (local time) ----------
  const dkey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const addMin = (m) => { const k = dkey(); S.activity[k] = +((S.activity[k] || 0) + m).toFixed(2); save(); };
  function streak() {
    let n = 0; const d = new Date();
    if (!(S.activity[dkey(d)] > 0)) d.setDate(d.getDate() - 1); // hari ini belum belajar → hitung sampai kemarin
    while (S.activity[dkey(d)] > 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const todayMin = () => Math.round(S.activity[dkey()] || 0);
  const totalMin = () => Math.round(Object.values(S.activity).reduce((a, b) => a + b, 0));

  // ---------- Progress helpers ----------
  const isDone = (id) => !!S.done[id];
  const doneCount = (list = ALL) => list.filter((l) => isDone(l.id)).length;
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const levelPct = (lv) => pct(doneCount(lv.lessons), lv.lessons.length);
  const quizCorrect = () => Object.entries(S.quiz).filter(([k, v]) => { const [id, qi] = k.split(":"); const l = byId[id]; return l && l.quiz[qi] && l.quiz[qi].a === v; }).length;
  const sqlDone = () => (window.LAB_SQL || []).filter((x) => S.sql && S.sql[x.id]).length;
  const pyDone = () => ((window.LAB_PY || {}).ex || []).filter((x) => S.py && S.py[x.id]).length;
  const filesDone = () => FILES.filter((x) => S.files[x.file] && S.files[x.file].done).length;
  const nextLesson = () => (S.last && !isDone(S.last) ? byId[S.last] : null) || ALL.find((l) => !isDone(l.id)) || null;

  // ---------- Badges ----------
  const BADGES = [
    { id: "first", em: "🌱", t: "Langkah Pertama", d: "Selesaikan 1 pelajaran", ok: () => doneCount() >= 1 },
    ...LEVELS.map((lv) => ({ id: "lv" + lv.id, em: ["🧭", "📗", "📐", "🗄️", "🧹", "📊", "🐍", "💼", "🎓"][lv.id - 1] || "🏅", t: "Tamat " + lv.title, d: "Selesaikan semua pelajaran Level " + lv.id, ok: () => levelPct(lv) === 100 })),
    { id: "s3", em: "🔥", t: "Konsisten", d: "Streak 3 hari", ok: () => streak() >= 3 },
    { id: "s7", em: "⚡", t: "Seminggu Penuh", d: "Streak 7 hari", ok: () => streak() >= 7 },
    { id: "q10", em: "🧠", t: "Jago Kuis", d: "10 jawaban kuis benar", ok: () => quizCorrect() >= 10 },
    { id: "t20", em: "🛠️", t: "Tukang Praktik", d: "20 tugas latihan dicentang", ok: () => Object.values(S.tasks).filter(Boolean).length >= 20 },
    { id: "n5", em: "📝", t: "Pencatat Rajin", d: "Catatan di 5 pelajaran", ok: () => Object.values(S.notes).filter((n) => n && n.trim().length > 10).length >= 5 },
    { id: "sql10", em: "🗄️", t: "Penulis Query", d: "10 soal Lab SQL benar", ok: () => sqlDone() >= 10 },
    { id: "sqlall", em: "🧙", t: "SQL Master", d: "Semua soal Lab SQL benar", ok: () => sqlDone() === (window.LAB_SQL || []).length },
    { id: "py10", em: "🐍", t: "Pythonista", d: "10 soal Lab Python benar", ok: () => pyDone() >= 10 },
    { id: "bi1", em: "📊", t: "BI Builder", d: "Selesaikan 1 proyek BI", ok: () => window.LABS && window.LABS.biDone(S) >= 1 },
    { id: "f3", em: "📗", t: "Praktisi Excel", d: "Selesaikan 3 file latihan", ok: () => filesDone() >= 3 },
    { id: "fall", em: "💼", t: "Jagoan Studi Kasus", d: "Selesaikan semua file latihan", ok: () => FILES.length > 0 && filesDone() === FILES.length },
    { id: "all", em: "🏆", t: "Siap Kerja", d: "Semua pelajaran selesai", ok: () => doneCount() === ALL.length },
  ];
  function checkBadges(silent) {
    BADGES.forEach((b) => {
      if (!S.badges[b.id] && b.ok()) {
        S.badges[b.id] = dkey();
        if (!silent) { setTimeout(() => { toast(`${b.em} Lencana baru: <b>${b.t}</b>`); confetti(140); }, 500); }
      }
    });
    save();
  }

  // ---------- Theme ----------
  function applyTheme() {
    const t = S.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = t;
    $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
  }
  $("#themeBtn").addEventListener("click", (e) => {
    S.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; save(); applyTheme();
    e.currentTarget.animate([{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }], { duration: 500, easing: "cubic-bezier(.34,1.56,.64,1)" });
  });

  // ---------- Sidebar ----------
  function renderSide(activeId) {
    const activeLv = activeId ? byId[activeId]?.level.id : (location.hash.match(/level\/(\d+)/) || [])[1];
    $("#sideNav").innerHTML = LEVELS.map((lv) => {
      const open = String(activeLv) === String(lv.id) ? "open" : "";
      return `<div class="side-level ${open}" data-lv="${lv.id}">
        <button class="side-level-btn" data-toggle="${lv.id}">
          <span class="dot" style="background:${lv.color}">${lv.id}</span>
          <span>${lv.title}</span>
          <span class="count">${doneCount(lv.lessons)}/${lv.lessons.length}</span>
          <span class="chev">▶</span>
        </button>
        <div class="side-lessons"><div>
          ${lv.lessons.map((l) => `<a href="#/lesson/${l.id}" class="side-lesson ${isDone(l.id) ? "done" : ""} ${l.id === activeId ? "active" : ""}"><span class="chk"></span><span>${l.title}</span></a>`).join("")}
        </div></div></div>`;
    }).join("");
    const h = location.hash;
    const items = [["#/lab/sql", "🗄️", "Lab SQL", `${sqlDone()}/${(window.LAB_SQL || []).length}`], ["#/lab/python", "🐍", "Lab Python", `${pyDone()}/${((window.LAB_PY || {}).ex || []).length}`],
      ["#/latihan", "📗", "File Excel", `${filesDone()}/${FILES.length}`], ["#/proyek-bi", "📊", "Proyek BI", `${window.LABS ? window.LABS.biDone(S) : 0}/3`], ["#/unduhan", "⬇️", "Unduhan", ""]];
    $("#sidePractice").innerHTML = `<a href="#/praktik" class="side-label link ${h === "#/praktik" ? "active" : ""}">Praktik</a>` + items.map(([href, ic, t, c]) => `<a href="${href}" class="side-prac ${h.startsWith(href) ? "active" : ""}">${ic} <span>${t}</span><b>${c}</b></a>`).join("");
    const p = pct(doneCount(), ALL.length);
    $("#sideProgPct").textContent = p + "%";
    requestAnimationFrame(() => ($("#sideProgBar").style.width = p + "%"));
    const sc = streak();
    const chip = $("#streakChip b");
    if (chip.textContent !== String(sc)) { chip.textContent = sc; $("#streakChip").classList.remove("bump"); void chip.offsetWidth; $("#streakChip").classList.add("bump"); }
  }
  $("#sideNav").addEventListener("click", (e) => {
    const t = e.target.closest("[data-toggle]");
    if (t) t.parentElement.classList.toggle("open");
    if (e.target.closest(".side-lesson")) closeDrawer();
  });
  $("#sidePractice").addEventListener("click", (e) => { if (e.target.closest("a")) closeDrawer(); });
  const closeDrawer = () => { $("#sidebar").classList.remove("open"); $("#scrim").classList.remove("open"); };
  $("#menuBtn").addEventListener("click", () => { $("#sidebar").classList.add("open"); $("#scrim").classList.add("open"); });
  $("#scrim").addEventListener("click", closeDrawer);

  // ---------- Views ----------
  const view = $("#view");
  function mount(html) {
    view.classList.remove("enter"); void view.offsetWidth;
    view.innerHTML = html; view.classList.add("enter");
    window.scrollTo({ top: 0, behavior: "instant" });
    enhance(view);
  }

  const greet = () => { const h = new Date().getHours(); return h < 11 ? "Selamat pagi" : h < 15 ? "Selamat siang" : h < 19 ? "Selamat sore" : "Selamat malam"; };
  const icon = (t) => ({ yt: "▶️", course: "🎓", doc: "📄" }[t] || "🔗");
  const resHTML = (list) => `<div class="res-list">${list.map((r) => `<a class="res" href="${r.url}" target="_blank" rel="noopener"><span class="ri ${r.type}">${icon(r.type)}</span><div><b>${r.title}</b>${r.note ? `<small>${r.note}</small>` : `<small>${{ yt: "YouTube", course: "Kursus / Platform", doc: "Dokumentasi" }[r.type] || ""}</small>`}</div><span class="ext">↗</span></a>`).join("")}</div>`;

  function fileCard(x, i = 0) {
    const st = S.files[x.file] || {};
    const c = lvColor(x.level);
    return `<div class="card file-card ${st.done ? "done" : ""}" style="--c:${c};animation-delay:${i * 50}ms" data-file="${x.file}">
      <div class="fc-top"><span class="xl-ico">X<small>${x.num}</small></span>
        <div class="fc-head"><span class="pill">Level ${x.level}</span><h3>${x.title}</h3>
        <div class="fc-meta"><span>⏱️ ${x.dur} mnt</span><span>❓ ${x.questions} soal</span><span>🧾 ${x.rows ? x.rows.toLocaleString("id-ID") + " baris data" : "model"}</span></div></div></div>
      <p>${x.story}</p>
      <div class="chips">${x.skills.map((k) => `<span>${k}</span>`).join("")}</div>
      <div class="fc-actions">
        <a class="btn" href="latihan/${x.file}" download data-dl="${x.file}">⬇️ Unduh .xlsx</a>
        <label class="score">Skor <input type="number" min="0" max="${x.questions}" value="${st.score ?? ""}" placeholder="–" data-score="${x.file}"> / ${x.questions}</label>
        <button class="btn ghost fc-done" data-fdone="${x.file}">${st.done ? "✓ Selesai" : "Tandai selesai"}</button>
      </div></div>`;
  }
  function bindFiles(root) {
    $$("[data-dl]", root).forEach((a) => a.addEventListener("click", () => {
      const f = a.dataset.dl; S.files[f] = Object.assign({}, S.files[f], { opened: dkey() }); save();
      toast("📥 Membuka file… kerjakan di Excel / Google Sheets");
    }));
    $$("[data-score]", root).forEach((inp) => inp.addEventListener("change", () => {
      const f = inp.dataset.score, x = FILES.find((y) => y.file === f);
      const v = inp.value === "" ? null : Math.max(0, Math.min(x.questions, +inp.value));
      inp.value = v ?? ""; S.files[f] = Object.assign({}, S.files[f], { score: v }); save();
      if (v === x.questions && !(S.files[f] || {}).done) { inp.closest(".file-card").querySelector("[data-fdone]").click(); }
      else if (v != null) toast(`📝 Skor ${v}/${x.questions} tersimpan`);
    }));
    $$("[data-fdone]", root).forEach((b) => b.addEventListener("click", () => {
      const f = b.dataset.fdone, x = FILES.find((y) => y.file === f), st = Object.assign({}, S.files[f]);
      st.done = !st.done; if (st.done) { st.doneAt = dkey(); addMin(x.dur); }
      S.files[f] = st; save();
      const card = b.closest(".file-card"); card.classList.toggle("done", st.done);
      b.textContent = st.done ? "✓ Selesai" : "Tandai selesai";
      if (st.done) { confetti(150, b); toast(`💼 Studi kasus "${x.title.split(":")[0]}" selesai!`); }
      checkBadges(); renderSide(currentLesson ? currentLesson.id : null);
      const pc = $("#filesPct"); if (pc) pc.textContent = `${filesDone()}/${FILES.length} selesai`;
    }));
  }

  function renderFiles() {
    mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/praktik">Praktik</a> / <span>File Excel</span></div>
      <section class="card level-head" style="--c:#16a34a">
        <span class="pill">Praktik langsung</span>
        <h1 style="margin-top:10px">File Latihan Excel: ${FILES.length} Studi Kasus</h1>
        <p class="muted" style="margin:0 0 12px">Setiap file berisi data realistis, soal bertahap, dan <b>kolom Cek otomatis</b> yang langsung memberi ✅ / ❌ saat kamu mengerjakan. Kunci jawaban ada di tab merah.</p>
        <div class="how">
          <div><b>1</b> Unduh file, buka di Excel atau Google Sheets</div>
          <div><b>2</b> Baca sheet <i>Petunjuk</i>, isi sel kuning dengan rumus</div>
          <div><b>3</b> Pantau skor di sheet <i>Soal</i></div>
          <div><b>4</b> Catat skor di sini, lalu tandai selesai</div>
        </div>
        <div class="lv-foot" style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink-3);margin-top:12px"><span id="filesPct">${filesDone()}/${FILES.length} selesai</span><span>Mulai dari 01 lalu naik bertahap</span></div>
      </section>
      <div class="file-grid">${FILES.map((x, i) => fileCard(x, i)).join("")}</div>
      <p class="muted" style="font-size:13px;margin-top:16px">💡 Rumus kunci memakai fungsi yang kompatibel dengan Excel 2010+ dan Google Sheets. Di Excel 365 kamu boleh memakai XLOOKUP, FILTER, atau UNIQUE; Cek tetap menilai hasilnya.</p>`);
    bindFiles(view);
    renderSide(null);
  }

  function renderHome() {
    const done = doneCount(), p = pct(done, ALL.length), nx = nextLesson();
    const r = 64, C = 2 * Math.PI * r;
    const minsDoneContent = ALL.filter((l) => isDone(l.id)).reduce((a, l) => a + l.dur, 0);
    mount(`
      <section class="card hero">
        <div>
          <div class="eyebrow">${greet()}${S.name ? ", " + esc(S.name) : ""} 👋</div>
          <h1>${done === 0 ? "Mulai perjalanan jadi Data Analyst" : p === 100 ? "Luar biasa, semua materi tamat! 🎉" : "Lanjutkan, kamu sudah " + p + "% jalan"}</h1>
          <p>${ALL.length} pelajaran dalam ${LEVELS.length} level: fondasi analisis, Excel, statistik, SQL, data cleaning, Power BI/Tableau/Looker Studio, Python, analisis bisnis, hingga karier. Plus ${(window.LAB_SQL || []).length} soal SQL & ${((window.LAB_PY || {}).ex || []).length} soal Python interaktif. ±${Math.round(TOTAL_MIN / 60)} jam materi inti.</p>
          ${nx ? `<a class="btn lg" href="#/lesson/${nx.id}">${done ? "Lanjut belajar" : "Mulai dari pelajaran 1"} →</a>` : `<a class="btn lg" href="#/level/1">Ulas kembali materi</a>`}
        </div>
        <div class="ring">
          <svg width="150" height="150" viewBox="0 0 150 150"><circle class="track" cx="75" cy="75" r="${r}"/><circle class="val" cx="75" cy="75" r="${r}" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - p / 100)}"/></svg>
          <div class="lbl"><div><b data-count="${p}">0</b><small>% selesai</small></div></div>
        </div>
      </section>

      <section class="stats">
        <div class="card stat"><span class="ico">✅</span><b data-count="${done}">0</b><span>dari ${ALL.length} pelajaran</span></div>
        <div class="card stat"><span class="ico">⏱️</span><b data-count="${totalMin()}">0</b><span>menit belajar tercatat</span></div>
        <div class="card stat"><span class="ico">🔥</span><b data-count="${streak()}">0</b><span>hari streak</span></div>
        <div class="card stat"><span class="ico">🎯</span><b><span data-count="${todayMin()}">0</span><small style="font-size:14px;color:var(--ink-3)">/${S.goal}m</small></b><span>target hari ini</span>
          <div class="bar goal-bar"><i data-w="${Math.min(100, pct(todayMin(), S.goal))}"></i></div></div>
      </section>

      ${nx ? `<a class="card continue" href="#/lesson/${nx.id}"><span class="play">▶</span><div><small>Level ${nx.level.id} · ${nx.level.title} · ${nx.dur} menit</small><b>${nx.title}</b></div><span class="arrow">→</span></a>` : ""}

      <div class="section-head"><h2>Jalur belajar</h2><span class="muted">${minsDoneContent}/${TOTAL_MIN} menit materi</span></div>
      <section class="levels">
        ${LEVELS.map((lv) => { const lp = levelPct(lv); return `
          <a class="card level-card" href="#/level/${lv.id}" style="--c:${lv.color}">
            <div class="lv-top"><span class="pill">Level ${lv.id} · ${lv.tag}</span><span>${lp === 100 ? "🏅" : ""}</span></div>
            <h3>${lv.title}</h3><p>${lv.desc}</p>
            <div class="bar"><i data-w="${lp}"></i></div>
            <div class="lv-foot"><span>${doneCount(lv.lessons)}/${lv.lessons.length} pelajaran · <b>${lp}%</b></span></div>
            <span class="lv-num">0${lv.id}</span>
          </a>`; }).join("")}
      </section>

      <div class="section-head"><h2>Praktik langsung</h2><a href="#/praktik">Semua latihan →</a></div>
      <section class="hub mini">
        ${[["#/lab/sql", "🗄️", "Lab SQL", sqlDone(), (window.LAB_SQL || []).length, "#2563eb"], ["#/lab/python", "🐍", "Lab Python", pyDone(), ((window.LAB_PY || {}).ex || []).length, "#ca8a04"],
           ["#/latihan", "📗", "File Excel", filesDone(), FILES.length, "#16a34a"], ["#/proyek-bi", "📊", "Proyek BI", window.LABS ? window.LABS.biDone(S) : 0, 3, "#db2777"]]
          .map(([href, ic, t, n, tot, c]) => `<a class="card hub-card" href="${href}" style="--c:${c}"><span class="hub-ico">${ic}</span><h3>${t}</h3><div class="bar"><i data-w="${tot ? Math.round((n / tot) * 100) : 0}" style="background:${c}"></i></div><div class="lv-foot"><span>${n}/${tot} selesai</span><span>→</span></div></a>`).join("")}
      </section>

      <div class="section-head"><h2>Aktivitas belajar</h2><span class="muted">16 minggu terakhir</span></div>
      <section class="card">${heatmap()}</section>

      <div class="section-head"><h2>Lencana</h2><span class="muted">${Object.keys(S.badges).length}/${BADGES.length} terkumpul</span></div>
      <section class="badges">${BADGES.map((b) => `<div class="card badge ${S.badges[b.id] ? "got" : ""}" title="${S.badges[b.id] ? "Didapat " + S.badges[b.id] : "Belum didapat"}"><span class="em">${b.em}</span><b>${b.t}</b><small>${b.d}</small></div>`).join("")}</section>

      <div class="section-head"><h2>Sumber belajar utama</h2><span class="muted">gratis / bisa diaudit</span></div>
      ${resHTML(window.SUMBER_UMUM || [])}
    `);
    renderSide(null);
    // animate ring
    requestAnimationFrame(() => setTimeout(() => { const c = $(".ring .val"); if (c) c.style.strokeDashoffset = c.dataset.off; }, 80));
  }

  function heatmap() {
    const weeks = 16, end = new Date(); end.setHours(0, 0, 0, 0);
    const start = new Date(end); start.setDate(end.getDate() - (weeks * 7 - 1) - ((end.getDay() + 6) % 7 === 6 ? 0 : 0));
    // align start to Monday
    while ((start.getDay() + 6) % 7 !== 0) start.setDate(start.getDate() - 1);
    let cells = "";
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const m = S.activity[dkey(d)] || 0;
      const lvl = m <= 0 ? "" : m < 10 ? "l1" : m < 30 ? "l2" : "l3";
      cells += `<i class="${lvl}" title="${d.toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short" })}: ${Math.round(m)} menit"></i>`;
    }
    return `<div class="heat-wrap"><div class="heat">${cells}</div></div>
      <div class="heat-legend">Sedikit <i style="background:var(--surface-2);border:1px solid var(--line)"></i><i style="background:color-mix(in srgb,var(--accent) 35%,var(--surface))"></i><i style="background:color-mix(in srgb,var(--accent) 65%,var(--surface))"></i><i style="background:var(--accent)"></i> Banyak</div>`;
  }

  function renderLevel(id) {
    const lv = LEVELS.find((x) => String(x.id) === String(id));
    if (!lv) return go("#/");
    const lp = levelPct(lv);
    mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <span>Level ${lv.id}</span></div>
      <section class="card level-head" style="--c:${lv.color}">
        <span class="pill" style="--c:${lv.color}">Level ${lv.id} · ${lv.tag}</span>
        <h1 style="margin-top:10px">${lv.title}</h1>
        <p class="muted" style="margin:0 0 14px">${lv.desc}</p>
        <div class="bar" style="--c:${lv.color}"><i data-w="${lp}" style="background:${lv.color}"></i></div>
        <div class="lv-foot" style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink-3);margin-top:8px"><span>${doneCount(lv.lessons)}/${lv.lessons.length} selesai · ${lv.lessons.reduce((a, l) => a + l.dur, 0)} menit</span><b style="color:${lv.color}">${lp}%</b></div>
      </section>
      <div class="lesson-list" style="--c:${lv.color}">
        ${lv.lessons.map((l, i) => `
          <a class="card lesson-row ${isDone(l.id) ? "done" : ""}" href="#/lesson/${l.id}" style="animation-delay:${i * 45}ms">
            <span class="num">${isDone(l.id) ? "✓" : i + 1}</span>
            <div><h3>${l.title}</h3><p>${l.summary}</p></div>
            <span class="meta">${l.dur} mnt<br>${l.quiz.length} kuis</span>
          </a>`).join("")}
      </div>`);
    renderSide(null);
    $$(".side-level").forEach((el) => el.classList.toggle("open", el.dataset.lv === String(lv.id)));
  }

  let readTimer = null, currentLesson = null;
  function renderLesson(id) {
    const l = byId[id];
    if (!l) return go("#/");
    currentLesson = l; S.last = id; save();
    const gi = ALL.indexOf(l), prev = ALL[gi - 1], next = ALL[gi + 1];
    const tasksDone = l.practice.filter((_, i) => S.tasks[`${id}:${i}`]).length;
    mount(`
      <div class="crumbs"><a href="#/">Beranda</a> / <a href="#/level/${l.level.id}">Level ${l.level.id} · ${l.level.title}</a> / <span>${l.idx + 1}</span></div>
      <header class="lesson-head">
        <span class="pill" style="--c:${l.level.color}">Pelajaran ${l.idx + 1} dari ${l.level.lessons.length}</span>
        <h1>${l.title}</h1>
        <div class="lesson-meta"><span>⏱️ ${l.dur} menit</span><span>🧩 ${l.practice.length} latihan</span><span>❓ ${l.quiz.length} kuis</span>${isDone(id) ? `<span class="done-tag">✓ Selesai ${fmtDate(S.done[id])}</span>` : ""}</div>
      </header>

      <nav class="tabs" role="tablist">
        <span class="tab-ink"></span>
        <button class="tab active" data-tab="materi">📖 Materi</button>
        <button class="tab" data-tab="latihan">🧩 Latihan${l.sqltag || l.pytag || FILES.some((x) => x.lessons.includes(id)) ? " + 🧪" : ""} <span class="tcount" id="taskCount">${tasksDone}/${l.practice.length}</span></button>
        <button class="tab" data-tab="kuis">❓ Kuis <span class="tcount" id="quizCount">${quizScore(l)}</span></button>
        <button class="tab" data-tab="catatan">📝 Catatan</button>
        <button class="tab" data-tab="sumber">🔗 Sumber <span class="tcount">${l.res.length}</span></button>
      </nav>

      <section class="panel active prose card" data-panel="materi">${l.content}</section>

      <section class="panel" data-panel="latihan">
        <p class="muted">Kerjakan di Excel / Google Sheets, lalu centang. Buat data contoh sendiri atau gunakan dataset dari tab Sumber.</p>
        ${(() => {
          const out = [];
          if (l.sqltag) { const n = (window.LAB_SQL || []).filter((x) => x.tag === l.sqltag); out.push(`<a class="card lab-link" href="#/lab/sql/${encodeURIComponent(l.sqltag)}" style="--c:#2563eb"><span class="hub-ico">🗄️</span><div><b>Lab SQL: ${l.sqltag}</b><small>${n.filter((x) => S.sql[x.id]).length}/${n.length} soal selesai · dikerjakan di browser, dicek otomatis</small></div><span class="arrow">→</span></a>`); }
          if (l.pytag) { const n = ((window.LAB_PY || {}).ex || []).filter((x) => x.tag === l.pytag); out.push(`<a class="card lab-link" href="#/lab/python/${encodeURIComponent(l.pytag)}" style="--c:#ca8a04"><span class="hub-ico">🐍</span><div><b>Lab Python: ${l.pytag}</b><small>${n.filter((x) => S.py[x.id]).length}/${n.length} soal selesai · Python & pandas di browser</small></div><span class="arrow">→</span></a>`); }
          if (/^v-[345]$/.test(id)) out.push(`<a class="card lab-link" href="#/proyek-bi" style="--c:#db2777"><span class="hub-ico">📊</span><div><b>Proyek BI dengan dataset TokoKita</b><small>Langkah demi langkah + angka acuan</small></div><span class="arrow">→</span></a>`);
          return out.length ? `<h4 class="fl-title">🧪 Latihan interaktif</h4>${out.join("")}` : "";
        })()}
        ${(() => { const fs = FILES.filter((x) => x.lessons.includes(id)); return fs.length ? `<h4 class="fl-title">📥 File latihan Excel untuk topik ini</h4><div class="file-grid compact">${fs.map((x, i) => fileCard(x, i)).join("")}</div><h4 class="fl-title">🧩 Latihan mandiri</h4>` : ""; })()}
        <div class="practice">${l.practice.map((t, i) => `<div class="task ${S.tasks[`${id}:${i}`] ? "on" : ""}" data-task="${i}" role="checkbox" tabindex="0" aria-checked="${!!S.tasks[`${id}:${i}`]}"><span class="box"></span><span class="txt">${t}</span></div>`).join("")}</div>
      </section>

      <section class="panel" data-panel="kuis"><div id="quizWrap"></div></section>

      <section class="panel notes" data-panel="catatan">
        <p class="muted">Tulis ringkasan dengan kata-katamu sendiri; cara ini terbukti membantu mengingat. Tersimpan otomatis.</p>
        <textarea id="noteArea" placeholder="Contoh: XLOOKUP default exact match, bisa cari dari bawah pakai -1…">${esc(S.notes[id] || "")}</textarea>
        <div class="save-state" id="saveState"></div>
      </section>

      <section class="panel" data-panel="sumber">
        <p class="muted">Video & dokumentasi pilihan untuk memperdalam topik ini.</p>
        ${resHTML(l.res)}
      </section>

      <div class="card complete-bar">
        <div class="cb-text"><b id="cbTitle">${isDone(id) ? "Pelajaran ini sudah selesai 🎉" : "Sudah paham materinya?"}</b><small id="cbSub">${isDone(id) ? "Klik lagi untuk membatalkan." : "Tandai selesai untuk mencatat progres. Shortcut: D"}</small></div>
        <button class="btn lg ${isDone(id) ? "is-done" : ""}" id="doneBtn"><span class="chk-anim">${isDone(id) ? "✓" : "○"}</span> <span>${isDone(id) ? "Selesai" : "Tandai selesai"}</span></button>
      </div>

      <nav class="pager">
        ${prev ? `<a class="card prev" href="#/lesson/${prev.id}"><small>← Sebelumnya</small>${prev.title}</a>` : "<span></span>"}
        ${next ? `<a class="card next" href="#/lesson/${next.id}"><small>Berikutnya →</small>${next.title}</a>` : `<a class="card next" href="#/"><small>Selesai →</small>Kembali ke beranda</a>`}
      </nav>
    `);
    renderSide(id);
    setupTabs();
    renderQuiz(l);
    bindFiles(view);

    // tasks
    $$(".task").forEach((el) => {
      const toggle = () => {
        const k = `${id}:${el.dataset.task}`; S.tasks[k] = !S.tasks[k]; save();
        el.classList.toggle("on", S.tasks[k]); el.setAttribute("aria-checked", S.tasks[k]);
        if (S.tasks[k]) { addMin(0.5); burst(el.querySelector(".box")); }
        const n = l.practice.filter((_, i) => S.tasks[`${id}:${i}`]).length;
        $("#taskCount").textContent = `${n}/${l.practice.length}`;
        if (S.tasks[k] && n === l.practice.length) toast("🧩 Semua latihan selesai, mantap!");
        checkBadges(); renderSide(id);
      };
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } });
    });

    // notes autosave
    let nt; const ta = $("#noteArea"), ss = $("#saveState");
    ta.addEventListener("input", () => {
      ss.textContent = "Menyimpan…"; ss.classList.remove("saved");
      clearTimeout(nt); nt = setTimeout(() => { S.notes[id] = ta.value; save(); ss.textContent = "✓ Tersimpan " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); ss.classList.add("saved"); checkBadges(); }, 500);
    });

    $("#doneBtn").addEventListener("click", (e) => toggleDone(id, e.currentTarget));

    // active reading timer (only when tab visible)
    clearInterval(readTimer);
    readTimer = setInterval(() => { if (document.visibilityState === "visible" && currentLesson) { addMin(0.25); } }, 15000);
  }

  function toggleDone(id, btn) {
    const l = byId[id];
    const wasLevelDone = levelPct(l.level) === 100;
    if (S.done[id]) { delete S.done[id]; toast("↩️ Ditandai belum selesai"); }
    else {
      S.done[id] = dkey(); addMin(1);
      const lvDone = levelPct(l.level) === 100 && !wasLevelDone;
      confetti(lvDone ? 260 : 110, btn);
      toast(lvDone ? `🏅 Level ${l.level.id} tamat! Hebat!` : `✅ "${l.title}" selesai`);
    }
    save();
    const d = isDone(id);
    btn.classList.toggle("is-done", d);
    btn.innerHTML = `<span class="chk-anim">${d ? "✓" : "○"}</span> <span>${d ? "Selesai" : "Tandai selesai"}</span>`;
    $("#cbTitle").textContent = d ? "Pelajaran ini sudah selesai 🎉" : "Sudah paham materinya?";
    $("#cbSub").textContent = d ? "Klik lagi untuk membatalkan." : "Tandai selesai untuk mencatat progres. Shortcut: D";
    const meta = $(".lesson-meta"); const tag = $(".done-tag", meta);
    if (d && !tag) meta.insertAdjacentHTML("beforeend", `<span class="done-tag">✓ Selesai ${fmtDate(S.done[id])}</span>`);
    if (!d && tag) tag.remove();
    renderSide(id); checkBadges();
  }

  function quizScore(l) {
    const ans = l.quiz.filter((_, i) => S.quiz[`${l.id}:${i}`] !== undefined).length;
    const ok = l.quiz.filter((q, i) => S.quiz[`${l.id}:${i}`] === q.a).length;
    return ans ? `${ok}/${l.quiz.length}` : l.quiz.length;
  }
  function renderQuiz(l) {
    const wrap = $("#quizWrap"); const K = "ABCD";
    const answered = l.quiz.filter((_, i) => S.quiz[`${l.id}:${i}`] !== undefined).length;
    const ok = l.quiz.filter((q, i) => S.quiz[`${l.id}:${i}`] === q.a).length;
    wrap.innerHTML = `
      ${answered === l.quiz.length ? `<div class="card quiz-score"><span style="font-size:26px">${ok === l.quiz.length ? "🏆" : "💪"}</span><div style="flex:1"><b>Skor: ${ok}/${l.quiz.length}</b><br><small class="muted">${ok === l.quiz.length ? "Sempurna! Kamu siap lanjut." : "Baca ulang bagian materi yang terlewat, lalu coba lagi."}</small></div><button class="btn ghost" id="retryQuiz">↻ Ulangi</button></div>` : ""}
      ${l.quiz.map((q, i) => { const k = `${l.id}:${i}`, ch = S.quiz[k], has = ch !== undefined; return `
        <div class="card q" data-q="${i}">
          <div class="qn">SOAL ${i + 1}</div><h4>${q.q}</h4>
          <div class="opts">${q.o.map((o, j) => `<button class="opt ${has && j === q.a ? "right" : ""} ${has && j === ch && ch !== q.a ? "wrong" : ""}" data-o="${j}" ${has ? "disabled" : ""}><span class="k">${K[j]}</span>${o}</button>`).join("")}</div>
          ${has ? `<div class="why">${ch === q.a ? "✅ Benar! " : "❌ Kurang tepat. "}${q.why}</div>` : ""}
        </div>`; }).join("")}`;
    $$(".opt", wrap).forEach((b) => b.addEventListener("click", () => {
      const qi = +b.closest(".q").dataset.q, j = +b.dataset.o, q = l.quiz[qi];
      S.quiz[`${l.id}:${qi}`] = j; addMin(0.5); save();
      if (j === q.a) { confetti(50, b); }
      renderQuiz(l);
      const card = $(`.q[data-q="${qi}"]`, wrap);
      const target = card.querySelector(j === q.a ? ".opt.right" : ".opt.wrong");
      if (target) { target.style.animation = "none"; void target.offsetWidth; target.style.animation = ""; }
      $("#quizCount").textContent = quizScore(l);
      checkBadges();
    }));
    const r = $("#retryQuiz", wrap);
    if (r) r.addEventListener("click", () => { l.quiz.forEach((_, i) => delete S.quiz[`${l.id}:${i}`]); save(); renderQuiz(l); $("#quizCount").textContent = quizScore(l); });
  }

  let tabMover = null;
  addEventListener("resize", () => tabMover && tabMover());
  function setupTabs() {
    const tabs = $$(".tab"), ink = $(".tab-ink");
    const move = (t) => { ink.style.width = t.offsetWidth + "px"; ink.style.transform = `translateX(${t.offsetLeft}px)`; };
    tabs.forEach((t) => t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.toggle("active", x === t));
      $$(".panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === t.dataset.tab));
      move(t);
      const top = $(".tabs").getBoundingClientRect().top + scrollY - 70;
      if (scrollY > top) scrollTo({ top, behavior: "smooth" });
    }));
    requestAnimationFrame(() => move($(".tab.active")));
    tabMover = () => { const a = $(".tab.active"); if (a) move(a); };
  }

  // ---------- Enhancers (copy, counters, bars) ----------
  function enhance(root) {
    $$(".formula", root).forEach((f) => {
      const b = document.createElement("button"); b.className = "copy-btn"; b.textContent = "Salin";
      b.addEventListener("click", async () => {
        const txt = f.childNodes[0] ? [...f.childNodes].filter((n) => n !== b).map((n) => n.textContent).join("") : "";
        try { await navigator.clipboard.writeText(txt.trim()); } catch { const t = document.createElement("textarea"); t.value = txt.trim(); document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); }
        b.textContent = "✓ Tersalin"; b.classList.add("ok"); setTimeout(() => { b.textContent = "Salin"; b.classList.remove("ok"); }, 1400);
      });
      f.append(b);
    });
    $$("[data-count]", root).forEach((el) => countUp(el, +el.dataset.count));
    requestAnimationFrame(() => setTimeout(() => $$("[data-w]", root).forEach((el) => (el.style.width = el.dataset.w + "%")), 60));
  }
  function countUp(el, to) {
    if (!to) { el.textContent = 0; return; }
    const dur = 900, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  // ---------- Search palette ----------
  const sm = $("#searchModal"), si = $("#searchInput"), sl = $("#searchList");
  let sel = 0, results = [];
  const strip = (h) => h.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const INDEX = ALL.map((l) => ({ l, hay: (l.title + " " + l.summary + " " + strip(l.content) + " " + l.level.title).toLowerCase() }));
  function openSearch() { sm.classList.add("open"); sm.setAttribute("aria-hidden", "false"); si.value = ""; doSearch(); si.focus(); setTimeout(() => si.focus(), 60); }
  function closeModal(m) { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); }
  function doSearch() {
    const q = si.value.trim().toLowerCase();
    results = q ? INDEX.filter((x) => q.split(/\s+/).every((w) => x.hay.includes(w))).sort((a, b) => (b.l.title.toLowerCase().includes(q) ? 1 : 0) - (a.l.title.toLowerCase().includes(q) ? 1 : 0)).map((x) => x.l) : (nextLesson() ? [nextLesson()] : []).concat(ALL.filter((l) => !isDone(l.id)).slice(1, 6));
    sel = 0;
    const hl = (s) => (q ? s.replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>") : s);
    sl.innerHTML = results.length ? (q ? "" : `<div class="muted" style="font-size:12px;padding:6px 12px">Saran untukmu</div>`) + results.map((l, i) => `<div class="p-item ${i === 0 ? "sel" : ""}" data-i="${i}"><span class="pd" style="background:${l.level.color}"></span><div><b>${hl(l.title)}</b><small>Level ${l.level.id} · ${l.level.title} · ${l.dur} mnt</small></div>${isDone(l.id) ? '<span class="pm">✓ selesai</span>' : ""}</div>`).join("") : `<div class="p-empty">Tidak ditemukan untuk “${esc(si.value)}”.<br><small>Coba: lookup, pivot, tanggal, sql</small></div>`;
  }
  si.addEventListener("input", doSearch);
  si.addEventListener("keydown", (e) => {
    const items = $$(".p-item", sl);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach((x, i) => x.classList.toggle("sel", i === sel)); items[sel]?.scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter" && results[sel]) { closeModal(sm); go("#/lesson/" + results[sel].id); }
  });
  sl.addEventListener("click", (e) => { const it = e.target.closest(".p-item"); if (it) { closeModal(sm); go("#/lesson/" + results[+it.dataset.i].id); } });
  sl.addEventListener("mousemove", (e) => { const it = e.target.closest(".p-item"); if (it) { sel = +it.dataset.i; $$(".p-item", sl).forEach((x, i) => x.classList.toggle("sel", i === sel)); } });

  // ---------- Settings ----------
  const stm = $("#settingsModal");
  function openSettings() { $("#nameInput").value = S.name || ""; $("#goalInput").value = S.goal; stm.classList.add("open"); stm.setAttribute("aria-hidden", "false"); }
  $("#nameInput").addEventListener("input", (e) => { S.name = e.target.value.trim(); save(); });
  $("#goalInput").addEventListener("change", (e) => { S.goal = Math.max(5, Math.min(300, +e.target.value || 20)); save(); });
  $("#importFile").addEventListener("change", async (e) => {
    const f = e.target.files[0]; if (!f) return;
    try { const d = JSON.parse(await f.text()); if (!d || typeof d.done !== "object") throw 0; S = Object.assign(blank(), d); save(); applyTheme(); closeModal(stm); route(); toast("⬆️ Progres berhasil diimpor"); confetti(80); }
    catch { toast("⚠️ File tidak valid"); }
    e.target.value = "";
  });
  $$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target === m || e.target.closest("[data-close]")) closeModal(m); }));

  // ---------- Global actions ----------
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-action]"); if (!a) return;
    const act = a.dataset.action;
    if (act === "search") openSearch();
    if (act === "settings") { closeDrawer(); openSettings(); }
    if (act === "export") {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      const u = URL.createObjectURL(blob), link = Object.assign(document.createElement("a"), { href: u, download: `progres-data-analyst-${dkey()}.json` });
      document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000); toast("⬇️ Backup diunduh");
    }
    if (act === "reset") {
      if (a.dataset.confirm) { const th = S.theme; S = blank(); S.theme = th; save(); closeModal(stm); route(); toast("🗑️ Progres direset"); delete a.dataset.confirm; a.textContent = "🗑️ Reset semua"; }
      else { a.dataset.confirm = 1; a.textContent = "Yakin? Klik sekali lagi"; setTimeout(() => { delete a.dataset.confirm; a.textContent = "🗑️ Reset semua"; }, 3000); }
    }
  });

  // Ripple on buttons
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".btn"); if (!b) return;
    const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height);
    const sp = Object.assign(document.createElement("span"), { className: "ripple" });
    Object.assign(sp.style, { width: s + "px", height: s + "px", left: e.clientX - r.left - s / 2 + "px", top: e.clientY - r.top - s / 2 + "px" });
    b.append(sp); setTimeout(() => sp.remove(), 650);
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); return; }
    if (e.key === "Escape") { $$(".modal.open").forEach(closeModal); closeDrawer(); return; }
    if (typing || e.ctrlKey || e.metaKey || e.altKey || $(".modal.open")) return;
    if (e.key === "/") { e.preventDefault(); openSearch(); }
    if (e.key.toLowerCase() === "h") go("#/");
    if (currentLesson && location.hash.startsWith("#/lesson/")) {
      const gi = ALL.indexOf(currentLesson);
      if (e.key.toLowerCase() === "d") $("#doneBtn")?.click();
      if (e.key.toLowerCase() === "n" && ALL[gi + 1]) go("#/lesson/" + ALL[gi + 1].id);
      if (e.key.toLowerCase() === "p" && ALL[gi - 1]) go("#/lesson/" + ALL[gi - 1].id);
    }
  });

  // Scroll effects
  addEventListener("scroll", () => {
    $(".topbar").classList.toggle("scrolled", scrollY > 8);
    const rp = $("#readProgress");
    if (location.hash.startsWith("#/lesson/")) { const h = document.documentElement.scrollHeight - innerHeight; rp.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%"; }
    else rp.style.width = 0;
  }, { passive: true });

  // ---------- Toast ----------
  function toast(html) {
    const t = Object.assign(document.createElement("div"), { className: "toast", innerHTML: html });
    $("#toasts").append(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 320); }, 2600);
  }

  // ---------- Confetti ----------
  const cv = $("#confetti"), cx = cv.getContext("2d"); let parts = [], raf = null;
  const fit = () => { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); };
  fit(); addEventListener("resize", fit);
  function confetti(n = 100, from) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = innerWidth / 2, y = innerHeight * 0.6;
    if (from) { const r = from.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
    const cols = ["#16a34a", "#22c55e", "#0891b2", "#7c3aed", "#db2777", "#ea580c", "#facc15"];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = 4 + Math.random() * 9;
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6, s: 5 + Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: cols[i % cols.length], life: 0, sh: Math.random() > 0.5 });
    }
    if (!raf) tick();
  }
  function tick() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life < 130 && p.y < innerHeight + 30);
    parts.forEach((p) => {
      p.life++; p.vy += 0.28; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.globalAlpha = Math.max(0, 1 - p.life / 130); cx.fillStyle = p.c;
      if (p.sh) cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); else { cx.beginPath(); cx.arc(0, 0, p.s / 3, 0, 7); cx.fill(); }
      cx.restore();
    });
    raf = parts.length ? requestAnimationFrame(tick) : (cx.clearRect(0, 0, innerWidth, innerHeight), null);
  }
  function burst(el) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; parts.push({ x: r.left + r.width / 2, y: r.top + r.height / 2, vx: Math.cos(a) * 3.2, vy: Math.sin(a) * 3.2 - 1, s: 5, r: 0, vr: 0.2, c: "#22c55e", life: 70, sh: false }); }
    if (!raf) tick();
  }

  // ---------- Utils ----------
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function fmtDate(k) { if (!k) return ""; const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }); }
  function go(h) { if (location.hash === h) route(); else location.hash = h; }

  // ---------- Router ----------
  function route() {
    const h = location.hash || "#/";
    clearInterval(readTimer); currentLesson = null;
    let m;
    if ((m = h.match(/^#\/lesson\/(.+)$/))) renderLesson(decodeURIComponent(m[1]));
    else if ((m = h.match(/^#\/level\/(\d+)$/))) renderLevel(m[1]);
    else if (h === "#/latihan") renderFiles();
    else if (h === "#/praktik") window.LABS.renderHub(view);
    else if ((m = h.match(/^#\/lab\/sql(?:\/(.+))?$/))) window.LABS.renderSQL(view, m[1]);
    else if ((m = h.match(/^#\/lab\/python(?:\/(.+))?$/))) window.LABS.renderPy(view, m[1]);
    else if (h === "#/proyek-bi") window.LABS.renderBI(view);
    else if (h === "#/unduhan") window.LABS.renderDL(view);
    else renderHome();
    $("#readProgress").style.width = 0;
  }
  addEventListener("hashchange", route);

  // ---------- API untuk labs.js ----------
  window.APP = { save, mount, toast, confetti, addMin, dkey, checkBadges, renderSide, enhance, esc };
  Object.defineProperty(window.APP, "S", { get: () => S });

  // ---------- Boot ----------
  applyTheme();
  checkBadges(true);
  route();
})();
