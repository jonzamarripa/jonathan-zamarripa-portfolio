// Builds the static Cinematic Learning Systems journal: /journal/ (hub) and /journal/<slug>/ (one page per on-site article).
// Data: content/journal.js. Article text: content/journal/<slug>.md (verbatim editions only). No dependencies.
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const SITE = 'https://jonathanzamarripa.com';
const J = require('./content/journal.js');

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const TAGS = ['Established', 'Emerging', 'Extrapolated', 'Hypothesis'];

// ---- Minimal Markdown → HTML (headings, paragraphs, lists, quotes, code, rules, ::: asides; links, bold, italic, code, evidence tags)
function inline(t) {
  let s = esc(t);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*|\.\.?\/[^\s)]*|#[^\s)]*)\)/g, (m, txt, url) => {
    const ext = /^https?:/.test(url);
    return '<a href="' + url + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + txt + (ext ? '<span class="vh"> (opens in a new tab)</span>' : '') + '</a>';
  });
  s = s.replace(/\[(Established|Emerging|Extrapolated|Hypothesis)\]/g, (m, tag) => '<span class="ev ev-' + tag.toLowerCase() + '">[' + tag + ']</span>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  return s;
}
function markdown(src) {
  const lines = src.replace(/\r/g, '').split('\n');
  const out = []; let i = 0;
  const ASIDES = { takeaway: 'Try this Monday', ledger: 'Process Ledger', note: 'Note', corrections: 'Corrections' };
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (/^```/.test(l)) { const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]); i++; out.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>'); continue; }
    let m = l.match(/^:::\s*(figure|pending|study|inquiry|sources|status)\b(.*)$/);
    if (m) { const buf = []; i++; while (i < lines.length && !/^:::\s*$/.test(lines[i])) buf.push(lines[i++]); i++; out.push(COMPONENTS[m[1]](kv(buf), m[2].trim(), buf)); continue; }
    m = l.match(/^:::\s*(\w+)\s*$/);
    if (m) { const buf = []; i++; while (i < lines.length && !/^:::\s*$/.test(lines[i])) buf.push(lines[i++]); i++; const k = m[1]; out.push('<aside class="box box-' + k + '"><p class="box-label">' + esc(ASIDES[k] || k) + '</p>' + markdown(buf.join('\n')) + '</aside>'); continue; }
    m = l.match(/^(#{2,4})\s+(.*)$/);
    if (m) { const n = m[1].length; const id = m[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); out.push('<h' + n + ' id="' + id + '">' + inline(m[2]) + '</h' + n + '>'); i++; continue; }
    if (/^---+\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    if (/^>\s?/.test(l)) { const buf = []; while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, '')); out.push('<blockquote>' + markdown(buf.join('\n')) + '</blockquote>'); continue; }
    if (/^[-*]\s+/.test(l)) { const buf = []; while (i < lines.length && /^[-*]\s+/.test(lines[i])) buf.push('<li>' + inline(lines[i++].replace(/^[-*]\s+/, '')) + '</li>'); out.push('<ul>' + buf.join('') + '</ul>'); continue; }
    if (/^\d+\.\s+/.test(l)) { const buf = []; while (i < lines.length && /^\d+\.\s+/.test(lines[i])) buf.push('<li>' + inline(lines[i++].replace(/^\d+\.\s+/, '')) + '</li>'); out.push('<ol>' + buf.join('') + '</ol>'); continue; }
    const buf = []; while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|>|[-*]\s|\d+\.\s|```|:::|---+\s*$)/.test(lines[i])) buf.push(lines[i++]);
    out.push('<p>' + inline(buf.join(' ')) + '</p>');
  }
  return out.join('\n');
}
// ---- Reusable editorial components (article pages). Blocks are `::: name options` … `:::` with `key: value` lines.
let FIG = 0; let ASSET_BASE = 'assets/'; let CURRENT = null;
function kv(buf) {
  const o = { _notes: [], _items: [], _body: [] };
  buf.forEach((l) => {
    let m = l.match(/^(\d+):\s*(.*)$/); if (m) { o._notes.push(m[2]); return; }
    m = l.match(/^-\s+(.*)$/); if (m) { o._items.push(m[1]); return; }
    m = l.match(/^(\w+):\s*(.*)$/); if (m) { o[m[1]] = m[2]; return; }
    if (l.trim()) o._body.push(l);
  });
  return o;
}
const COMPONENTS = {
  // Figure: layout = wide | column | artifact (image + numbered annotations) | diagram (scrollable on small screens, full-size link)
  figure(o, opts) {
    const layout = (opts.match(/\b(wide|column|artifact|diagram|pair)\b/) || [0, 'column'])[1];
    const n = ++FIG;
    // Responsive image: `widths: 1024,2048` (photography) or the default 1600/2800 (screens and diagrams); `pos` sets the crop focus.
    const pic = (src, alt, cls) => {
      if (!src) return `<div class="dx-missing" role="img" aria-label="Image pending: ${esc(alt)}"><span>Asset pending</span>${esc(alt)}</div>`;
      const base = ASSET_BASE + src; const ws = (o.widths || '1600,2800').split(',').map((x) => x.trim());
      return `<img class="${cls || ''}" src="${base}-${ws[0]}.webp" srcset="${ws.map((w) => base + '-' + w + '.webp ' + w + 'w').join(', ')}" sizes="${layout === 'pair' ? '(min-width: 1320px) 630px, (min-width: 760px) 50vw, 100vw' : '(min-width: 1320px) 1280px, 100vw'}" alt="${esc(alt)}" loading="lazy" decoding="async" width="${esc(o.w || 3200)}" height="${esc(o.h || 2000)}"${o.pos ? ' style="object-position:' + esc(o.pos) + '"' : ''}>`;
    };
    const fullExt = o.ext || 'png';
    const img = pic(o.src, o.alt);
    const media = layout === 'diagram'
      ? `<div class="dx-scroll" tabindex="0" role="region" aria-label="Figure ${n}, scrollable diagram">${img}</div>`
      : layout === 'pair'
        ? `<div class="dx-pair"><div class="dx-media">${img}${o.label ? '<p class="dx-pair-l">' + esc(o.label) + '</p>' : ''}</div><div class="dx-media">${pic(o.src2, o.alt2)}${o.label2 ? '<p class="dx-pair-l">' + esc(o.label2) + '</p>' : ''}</div></div>`
        : `<div class="dx-media">${img}</div>`;
    const notes = o._notes.length ? `<ol class="dx-notes">${o._notes.map((t) => '<li>' + inline(t) + '</li>').join('')}</ol>` : '';
    const full = o.src ? ` <a class="dx-full" href="${ASSET_BASE + o.src}.${fullExt}" target="_blank" rel="noopener noreferrer">Open full size<span class="vh"> (Figure ${n}, opens in a new tab)</span></a>` + (o.src2 ? ` <a class="dx-full" href="${ASSET_BASE + o.src2}.${fullExt}" target="_blank" rel="noopener noreferrer">Second image<span class="vh"> (Figure ${n}, opens in a new tab)</span></a>` : '') : '';
    return `<figure class="dx-fig dx-fig--${layout}" id="fig-${n}">
  ${media}${layout === 'artifact' ? notes : ''}
  <figcaption><span class="dx-fig-n">Fig. ${n}</span>${o.status ? ' <span class="dx-status">' + esc(o.status) + '</span>' : ''} ${inline(o.caption || '')}${o.note ? ' <span class="dx-fig-note">' + inline(o.note) + '</span>' : ''}${full}</figcaption>
  ${layout !== 'artifact' ? notes : ''}
</figure>`;
  },
  // Pending: a visible editorial slot for verified published text that has not been supplied yet (preview builds only)
  pending(o, opts, buf) {
    if (CURRENT && CURRENT.dossier && !CURRENT.onSite) return `<aside class="dx-pending dx-pending--orig" aria-label="In the original issue"><p class="box-label">In the original issue</p><p>${inline(buf.join(' '))} <a href="${esc(CURRENT.url)}" target="_blank" rel="noopener noreferrer">Read it on LinkedIn<span class="vh"> (opens in a new tab)</span></a>.</p></aside>`;
    return `<aside class="dx-pending" aria-label="Pending content"><p class="box-label">Awaiting verified published text</p><p>${inline(buf.join(' '))}</p></aside>`;
  },
  // Proposed study: name, status, summary, measures
  study(o) {
    return `<section class="dx-study" aria-labelledby="study-${esc((o.title || '').replace(/\W+/g, '-').toLowerCase())}"><p class="box-label">Proposed study · ${esc(o.status || '')}</p><h3 id="study-${esc((o.title || '').replace(/\W+/g, '-').toLowerCase())}">${inline(o.title || '')}</h3>${o.summary ? '<p>' + inline(o.summary) + '</p>' : ''}${o._items.length ? '<ul>' + o._items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</ul>' : ''}</section>`;
  },
  // Closing inquiry / CTA: headline, body, primary action, secondary links
  inquiry(o) {
    return `<section class="dx-inquiry" aria-labelledby="dx-inq"><h2 id="dx-inq">${inline(o.headline || '')}</h2>${o.body ? '<p>' + inline(o.body) + '</p>' : ''}${o.button ? `<p><a class="dx-btn" href="${esc(o.href || '#')}">${esc(o.button)} <span aria-hidden="true">→</span></a></p>` : ''}${o._items.length ? '<ul class="dx-secondary">' + o._items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</ul>' : ''}</section>`;
  },
  // Source references (verbatim from the published issue)
  sources(o, opts, buf) {
    return `<section class="dx-sources" aria-labelledby="dx-src"><h2 id="dx-src">Sources</h2>${o._items.length ? '<ol>' + o._items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</ol>' : COMPONENTS.pending(o, opts, ['The published source list for this issue.'])}</section>`;
  },
  // Status ledger: what each artifact is (and is not)
  status(o) {
    return `<dl class="dx-ledger">${o._items.map((t) => { const m = t.match(/^\*\*(.+?)\*\*\s*(.*)$/); return m ? '<dt>' + esc(m[1]) + '</dt><dd>' + inline(m[2]) + '</dd>' : '<dd>' + inline(t) + '</dd>'; }).join('')}</dl>`;
  }
};
function chapters(src) {
  // `@chapter 01 Title` lines open numbered chapters; returns HTML + table of contents
  const parts = src.split(/^@chapter\s+(\d+)\s+(.+)$/m);
  let html = markdown(parts[0]); const toc = [];
  for (let k = 1; k < parts.length; k += 3) {
    const n = parts[k], title = parts[k + 1].trim(), id = 'ch-' + n;
    toc.push(`<li><a href="#${id}"><span>${esc(n)}</span> ${esc(title)}</a></li>`);
    html += `\n<section class="dx-ch" id="${id}" aria-labelledby="${id}-t"><header class="dx-ch-head"><p class="dx-ch-n">Chapter ${esc(n)}</p><h2 id="${id}-t">${esc(title)}</h2></header>\n${markdown(parts[k + 2])}\n</section>`;
  }
  return { html, toc };
}
function frontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: src };
  const meta = {};
  m[1].split('\n').forEach((l) => { const k = l.match(/^(\w+):\s*(.*)$/); if (k) meta[k[1]] = k[2].replace(/^["']|["']$/g, ''); });
  return { meta, body: src.slice(m[0].length) };
}

// ---- Page shell
function page({ title, description, canonical, depth, body, type, noindex, image }) {
  const up = depth === 2 ? '../../' : '../';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="${type || 'website'}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${image || SITE + '/assets/og-image.jpg'}">${noindex ? '\n<meta name="robots" content="noindex, nofollow">' : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="author" content="${esc(J.author)}">
<meta name="theme-color" content="#0E1114">
<link rel="icon" href="${up}assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${up}styles.css">
<link rel="stylesheet" href="${up}journal/journal.css">${depth === 2 ? '\n<link rel="stylesheet" href="' + up + 'journal/dossier.css">' : ''}
</head>
<body class="jr">
<a class="skip" href="#main">Skip to content</a>
<header class="jr-top">
  <a class="jr-home" href="${up}"><img src="${up}assets/logo/jiz-logo-white.svg" alt="" width="28" height="28"> <span>Jonathan Iker Zamarripa</span></a>
  <nav aria-label="Journal">
    <a href="${up}journal/">${esc(J.name)}</a>
    <a href="${esc(J.newsletter)}" target="_blank" rel="noopener noreferrer">Newsletter <span aria-hidden="true">↗</span><span class="vh"> on LinkedIn (opens in a new tab)</span></a>
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="jr-foot">
  <p>${esc(J.disclosures.join(' '))}</p>
  <p>© 2026 ${esc(J.author)} · <a href="${up}">Portfolio</a> · <a href="${esc(J.newsletter)}" target="_blank" rel="noopener noreferrer">LinkedIn newsletter<span class="vh"> (opens in a new tab)</span></a></p>
</footer>
</body>
</html>
`;
}

const readLink = (a, up) => (a.onSite || a.dossier
  ? `<a class="jr-read" href="${up}journal/${esc(a.slug)}/">${a.onSite ? 'Read on this site' : 'Read the dossier'} <span aria-hidden="true">→</span><span class="vh">: ${esc(a.title)}</span></a>${a.onSite ? '' : ` <a class="jr-read jr-orig" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">Original on LinkedIn <span aria-hidden="true">↗</span><span class="vh"> (opens in a new tab)</span></a>`}`
  : `<a class="jr-read" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">Read in the newsletter <span aria-hidden="true">↗</span><span class="vh">: ${esc(a.title)} (LinkedIn, opens in a new tab)</span></a>`);

// ---- Hub
function hub() {
  const F = J.framework, M = J.method, E = J.evidence;
  const published = J.articles.filter((a) => a.status === 'published');
  const body = `
<section class="jr-mast" aria-labelledby="jr-title">
  <p class="jr-kicker">Independent journal · by ${esc(J.author)}</p>
  <h1 id="jr-title">${esc(J.name)}</h1>
  <p class="jr-sub">${esc(J.subtitle)}</p>
  <blockquote class="jr-anchor">${J.anchor.map((l) => '<span>' + esc(l) + '</span>').join(' ')}</blockquote>
  <nav class="jr-pillars" aria-label="Sections">
    <a href="#journal"><span>01</span> The Journal</a><a href="#framework"><span>02</span> The Framework</a><a href="#studio"><span>03</span> The Studio</a><a href="#evidence"><span>04</span> The Evidence</a>
  </nav>
</section>

<section id="journal" class="jr-sec" aria-labelledby="jr-journal">
  <p class="jr-kicker">01 · The Journal</p>
  <h2 id="jr-journal">Published essays and editorial series</h2>
  <p class="jr-lede">Full issues will be readable here, with no LinkedIn account needed, as verified editions are added. Until then, each issue links to its original publication.</p>
  <ol class="jr-issues">
    ${published.map((a) => `<li><p class="jr-meta">${esc(a.type)} · Issue ${esc(a.issue)}</p><h3>${esc(a.title)}</h3><p>${esc(a.standfirst)}</p>${a.note ? `<p class="jr-note">${esc(a.note)}</p>` : ''}${readLink(a, '../')}</li>`).join('\n    ')}
  </ol>
  <div class="jr-method">
    <div><h3>How each issue is built</h3><ol>${M.spine.map((s) => '<li>' + esc(s) + '</li>').join('')}</ol></div>
    <div><h3>The Inquiry Ladder</h3><ol class="jr-ladder">${M.ladder.map((s) => '<li>' + esc(s) + '</li>').join('')}</ol></div>
    <div><h3>Evidence tags</h3><dl class="jr-tags">${M.tags.map((t) => `<dt><span class="ev ev-${t.tag.toLowerCase()}">[${esc(t.tag)}]</span></dt><dd>${esc(t.def)}</dd>`).join('')}</dl><p class="jr-note">Tags are the author’s own assessment of evidence strength, not independent peer review.</p></div>
  </div>
</section>

<section id="framework" class="jr-sec" aria-labelledby="jr-fw">
  <p class="jr-kicker">02 · The Framework</p>
  <h2 id="jr-fw">${esc(F.name)}</h2>
  <p class="jr-status"><span class="pill pill-ok">${esc(F.version)} · Published</span> ${esc(F.released)}</p>
  <p class="jr-lede">${esc(F.scope)}</p>
  <h3>Four systems</h3>
  <ol class="jr-systems">${F.systems.map((s) => '<li>' + esc(s) + '</li>').join('')}</ol>
  <h3>Eight governing axioms (${esc(F.version)})</h3>
  <div class="jr-table" role="region" aria-label="Axioms" tabindex="0"><table>
    <thead><tr><th scope="col">No.</th><th scope="col">Axiom</th><th scope="col">Status, October 2026</th></tr></thead>
    <tbody>${F.axioms.map((a) => `<tr><td>${esc(a.n)}</td><td><strong>${esc(a.name)}</strong>${a.def ? '<br><span>' + esc(a.def) + '</span>' : ''}</td><td>${a.flag ? '<span class="pill pill-warn">' + esc(a.status) + '</span>' : esc(a.status)}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="jr-note">Status reflects the author’s own review of each axiom.</p>
  <h3>Named gaps</h3>
  <ul class="jr-gaps">${F.gaps.map((g, i) => `<li><span>Gap ${i + 1}</span> ${esc(g.name)} <em>${esc(g.level)}</em></li>`).join('')}</ul>
  <aside class="box box-proposed" aria-labelledby="jr-prop">
    <p class="box-label" id="jr-prop">Proposed for ${esc(F.nextRelease.version)} · not released</p>
    <p>${esc(F.nextRelease.when)}. These changes are not part of CLPF until ${esc(F.nextRelease.version)} is released.</p>
    <ul>${F.proposed.map((p) => '<li>' + esc(p) + '</li>').join('')}</ul>
  </aside>
  <h3>The Master Question</h3>
  <blockquote class="jr-quote">${esc(F.masterQuestion)}</blockquote>
</section>

<section id="studio" class="jr-sec" aria-labelledby="jr-studio">
  <p class="jr-kicker">03 · The Studio</p>
  <h2 id="jr-studio">${esc(J.studio.title)}</h2>
  <p class="jr-lede">${esc(J.studio.about)}</p>
  <ul class="jr-plain">${J.studio.published.map((p) => `<li><span class="jr-meta">${esc(p.label)}</span> ${esc(p.title)} <em>${esc(p.also)}</em></li>`).join('')}</ul>
</section>

<section id="evidence" class="jr-sec" aria-labelledby="jr-ev">
  <p class="jr-kicker">04 · The Evidence</p>
  <h2 id="jr-ev">Field logs, versions, and corrections</h2>
  <h3>Field logs</h3>
  <ul class="jr-plain">${E.fieldLogs.map((f) => `<li><strong>${esc(f.id)}</strong> <span class="pill pill-warn">${esc(f.status)}</span><br>${esc(f.summary)}</li>`).join('')}</ul>
  <p><a class="jr-read" href="../?intent=other">Propose a pilot partnership <span aria-hidden="true">→</span></a></p>
  <h3>Version history</h3>
  <div class="jr-table" role="region" aria-label="Version history" tabindex="0"><table>
    <thead><tr><th scope="col">Version</th><th scope="col">Status</th><th scope="col">Notes</th></tr></thead>
    <tbody>${E.versions.map((v) => `<tr><td>${esc(v.version)}</td><td>${v.status === 'Published' ? '<span class="pill pill-ok">Published</span>' : '<span class="pill pill-warn">' + esc(v.status) + '</span>'}</td><td>${esc(v.note)}</td></tr>`).join('')}</tbody>
  </table></div>
  <h3>Corrections log</h3>
  <div class="jr-table" role="region" aria-label="Corrections log" tabindex="0"><table>
    <thead><tr><th scope="col">Issue</th><th scope="col">Correction</th><th scope="col">Corrected in</th></tr></thead>
    <tbody>${E.corrections.map((c) => `<tr><td>${esc(c.issue)}</td><td>${esc(c.correction)}</td><td>${esc(c.where)}</td></tr>`).join('')}</tbody>
  </table></div>
</section>

<section class="jr-sec jr-talk" aria-labelledby="jr-talk">
  <p class="jr-kicker">Speaking · ${esc(J.talk.status)}</p>
  <h2 id="jr-talk">${esc(J.talk.title)}</h2>
  <p class="jr-lede">${esc(J.talk.about)} ${esc(J.talk.formats)}.</p>
  <p><a class="jr-cta" href="../?intent=speaking">Invite me to speak <span aria-hidden="true">→</span></a></p>
</section>`;
  return page({ title: J.name + ' — ' + J.author, description: J.subtitle + ' ' + J.anchor.join(' '), canonical: SITE + '/journal/', depth: 1, body });
}

// ---- Article pages (articles marked onSite, or `preview` drafts that are built but hidden and noindexed)
function article(a) {
  const file = path.join('content', 'journal', a.slug + '.md');
  if (!existsSync(file)) throw new Error('article without text: ' + file);
  const { meta, body } = frontMatter(readFileSync(file, 'utf8'));
  FIG = 0; ASSET_BASE = 'assets/'; CURRENT = a;
  const { html, toc } = chapters(body);
  const preview = !a.onSite;
  const out = `
${preview && a.dossier ? `<p class="dx-preview" role="note">This dossier presents the issue’s scenes, concept screens, and diagrams. The complete text is in <a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">the original issue on LinkedIn<span class="vh"> (opens in a new tab)</span></a>.</p>` : preview ? '<p class="dx-preview" role="note"><strong>Preview.</strong> Not published or listed. Text from the published issue is still to be added; slots marked “Awaiting verified published text” show where.</p>' : ''}
<article class="dx" aria-labelledby="jr-a-title">
  <header class="dx-mast">
    <p class="jr-kicker">${esc(J.name)} · ${esc(a.type)} · Issue ${esc(a.issue)}${meta.date ? ' · <time datetime="' + esc(meta.date) + '">' + esc(meta.dateLabel || meta.date) + '</time>' : ''}</p>
    <h1 id="jr-a-title">${esc(a.title)}</h1>
    ${a.standfirst ? '<p class="jr-sub">' + esc(a.standfirst) + '</p>' : ''}
    <p class="dx-byline">By ${esc(J.author)} · <a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">Originally published in the newsletter<span class="vh"> on LinkedIn (opens in a new tab)</span></a></p>
    ${a.note ? '<p class="jr-note">' + esc(a.note) + '</p>' : ''}
    ${toc.length ? '<nav class="dx-toc" aria-label="Chapters"><ol>' + toc.join('') + '</ol></nav>' : ''}
  </header>
  <div class="dx-body">
${html}
  </div>
  <p class="jr-back"><a href="../">← ${esc(J.name)}</a> · <a href="../#evidence">Corrections log</a></p>
</article>`;
  return page({ title: a.title + ' — ' + J.name, description: a.standfirst || J.subtitle, canonical: SITE + '/journal/' + a.slug + '/', depth: 2, body: out, type: 'article', noindex: preview, image: a.image ? SITE + '/journal/' + a.slug + '/assets/' + a.image : null });
}

mkdirSync('journal', { recursive: true });
writeFileSync('journal/index.html', hub());
let n = 0;
J.articles.filter((a) => a.status === 'published' && (a.onSite || a.preview)).forEach((a) => {
  mkdirSync(path.join('journal', a.slug), { recursive: true });
  writeFileSync(path.join('journal', a.slug, 'index.html'), article(a));
  n++;
});
console.log('built journal/index.html + ' + n + ' article page(s)');
module.exports = { markdown, frontMatter, article };
