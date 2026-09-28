// trainline-results.js - one line per result row on a Trainline results page (www.thetrainline.com/book/results, lang=de).
// Status: [unverified draft, 2026-09-28]. Built from the labels the 2026-09-28 test runs reported ('Abfahrt in',
// 'Ankunft in', 'N Std. M Min.', 'N Umst.', 'Dies ist ein Ticket für die zweite Klasse', 'Nicht verfügbar',
// 'Ausgewählte Verbindung', 'Flexibilität und Ticketbedingungen'), checked offline on a mock page only, never live.
// If the rows look wrong or empty, fall back to page-text.js (ROOT 'main' falls back to body; END 'Mehr über unsere
// Suchergebnisse') and say so.
// Paste rules: Read this file, set the constants, and paste the WHOLE text as the `text` of
// mcp__claude-in-chrome__javascript_tool (action 'javascript_exec', tabId = the skill's OWN tab). Only comments
// come before the code; the last expression is the returned string. It never clicks and never fetches.
// LIMIT: javascript_tool returns only about 1,200 characters; use FROM / TO to page instead of raising MAX.
// FROM / TO: keep rows departing from FROM to TO ('HH:MM'); '' = no limit.
// OUTPUT: the page title, then one line per row:
//   dep HH:MM | arr HH:MM | H:MM | N Umst. | 2nd <price> | 1st <price> | trains if printed | Nicht verfügbar
//   The list shows no train numbers. The last line, 'panel:', summarises the 'Ausgewählte Verbindung' panel of the
//   selected row: train numbers, the number of legs ('Teilstrecke N' numbers the legs; it is NOT a partial ticket)
//   and the fare names under 'Flexibilität und Ticketbedingungen'. Select a row by clicking its 2nd-class price and
//   expand the ChevronDown first (references/sellers/trainline.md, step 5). Prices exclude the booking fee.
const FROM = '';
const TO = '';
const MAX = 1200;
const END = 'Mehr über unsere Suchergebnisse';
const PANEL = 'Ausgewählte Verbindung';
let txt = (document.querySelector('main') || document.body).innerText.replace(/\u200b/g, '').replace(/[ \t\u00a0]+/g, ' ').replace(/ ?\n ?/g, '\n').replace(/\n{2,}/g, '\n');
const endAt = txt.indexOf(END);
if (endAt >= 0) txt = txt.slice(0, endAt);
let panel = '';
const pAt = txt.indexOf(PANEL);
if (pAt >= 0) {
  const w = txt.slice(pAt).search(/\nWeiter(\n|$)/);
  const pEnd = w > 0 ? pAt + w : Math.min(txt.length, pAt + 1500);
  panel = txt.slice(pAt, pEnd);
  txt = txt.slice(0, pAt) + '\n' + txt.slice(pEnd);
}
const TRAIN = /\b(ICE|ECE|EC|IC|RJX|RJ|NJ|EN|TGV|FLX|IRE|RE|RB)\s?\d{1,5}\b/g;
const HM = /\b(\d{1,2}:\d{2})\b/;
const dur = (s) => {
  const a = s.match(/(\d+)\s*Std\.?\s*(\d+)\s*Min/) || s.match(/(\d+) Stunden? (\d+) Minuten?/);
  if (a) return a[1] + ':' + a[2].padStart(2, '0');
  const h = s.match(/\b(\d+)\s*Std\./); if (h) return h[1] + ':00';
  const m = s.match(/\b(\d+)\s*Min\./); return m ? '0:' + m[1].padStart(2, '0') : '?';
};
const rows = txt.split(/\n?Abfahrt in /).slice(1).map((c) => {
  const dep = (c.match(HM) || [])[1] || '?';
  const ai = c.indexOf('Ankunft in');
  const arr = ai >= 0 ? ((c.slice(ai).match(HM) || [])[1] || '?') : '?';
  const um = (c.match(/(\d+)\s*Umst/) || [])[1];
  const ch = um ? um + ' Umst.' : (/Direkt/.test(c) ? '0 Umst.' : '? Umst.');
  const prices = { 2: '', 1: '' };
  const order = [];
  for (const m of c.matchAll(/(\d{1,3}(?:\.\d{3})*,\d{2})\s?€/g)) {
    const before = c.slice(Math.max(0, m.index - 120), m.index);
    const k2 = before.lastIndexOf('zweite Klasse'), k1 = Math.max(before.lastIndexOf('erste Klasse'), before.lastIndexOf('ersten Klasse'));
    const k = k2 > k1 ? 2 : k1 > k2 ? 1 : 0;
    if (k && !prices[k]) prices[k] = m[1] + ' €'; else if (!k && !order.includes(m[1])) order.push(m[1]);
  }
  for (const p of order) { if (!prices[2]) prices[2] = p + ' €'; else if (!prices[1] && prices[2] !== p + ' €') prices[1] = p + ' €'; }
  const trains = [...new Set((c.match(TRAIN) || []).map((t) => t.replace(/\s+/, ' ')))].join(', ');
  const na = /Nicht verfügbar/.test(c) ? 'Nicht verfügbar' : '';
  return { dep, line: ['dep ' + dep, 'arr ' + arr, dur(c), ch, '2nd ' + (prices[2] || '-'), '1st ' + (prices[1] || '-'), trains, na].filter(Boolean).join(' | ') };
}).filter((r) => r.dep === '?' || ((!FROM || r.dep.padStart(5, '0') >= FROM.padStart(5, '0')) && (!TO || r.dep.padStart(5, '0') <= TO.padStart(5, '0'))));
const pTrains = [...new Set((panel.match(TRAIN) || []).map((t) => t.replace(/\s+/, ' ')))].join(', ');
const legs = (panel.match(/Teilstrecke \d+/g) || []).length;
const fi = panel.indexOf('Flexibilität und Ticketbedingungen');
const fares = fi >= 0 ? [...new Set(panel.slice(fi).match(/(Super Sparpreis|Sparpreis|Flexpreis|Sparschiene)( Europa)?( Komfort)?( Young| Senior)?|Semi-Flex[^\n]{0,12}|Flex [+][^\n]{0,10}/g) || [])].slice(0, 4).join(', ') : '';
const pLine = panel ? 'panel: ' + [pTrains || 'no train numbers (expand the ChevronDown)', legs ? legs + ' leg(s)' : '', fares].filter(Boolean).join(' | ') : 'panel: none (no row selected)';
let out = document.title.slice(0, 80) + '\n' + (rows.length ? rows.map((r) => r.line).join('\n') : 'no rows found: fall back to page-text.js') + '\n' + pLine;
if (out.length > MAX) out = out.slice(0, MAX - 60) + '\n[cut: set FROM to the last departure shown]';
out
