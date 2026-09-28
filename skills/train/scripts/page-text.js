// page-text.js - compact page reader for sellers without a dedicated extractor; returns less text than get_page_text.
// Paste rules: Read this file, set the constants, and paste the WHOLE text as the `text` of
// mcp__claude-in-chrome__javascript_tool (action 'javascript_exec', tabId = the skill's OWN tab). Only comments
// come before the code; the last expression is the returned string. It never clicks and never fetches.
// LIMIT: javascript_tool returns only about 1,200 characters and cuts the rest ('[TRUNCATED]'; 1,100-2,500 seen on
// 2026-09-28). So page through with START / END / SKIP instead of raising MAX: when the text is cut, the last line
// of the output names the SKIP value for the next call.
// START: a marker string to start from (e.g. the first result's label, or the date header), or '' for none.
// SKIP: lines to skip after START and DROP (paging); 0 on the first call.
// END: a marker string to stop before (Trainline: 'Mehr über unsere Suchergebnisse'), or '' for none.
// MAX: characters returned in total, header included. Keep it at 1200.
// ROOT: CSS selector of the container to read; falls back to document.body when it does not exist (Trainline has
//   no <main>, so it reads the body).
// DROP: lines to leave out (accessibility duplicates, amenities), as a regex; null keeps every line.
// JOIN: the separator between lines in the output.
// SHADOW: 'auto' walks shadow roots when the page has any (SBB result cards live in shadow DOM, where innerText and
//   get_page_text see nothing); true always walks; false uses innerText only. The walk is [unverified live]: it was
//   tested offline on a mock DOM only.
// The header shows host + path only: query strings and hashes can hold session data, so they are never printed.
const START = '';
const SKIP = 0;
const END = '';
const MAX = 1200;
const ROOT = 'main';
const DROP = /^(Dies ist ein Ticket|Abfahrt in|Ankunft in|\d+ Stunden?( \d+ Minuten?)?$|\d+ Minuten?$|Zu den Service|Empfehlung|WLAN|Ruhebereich)/;
const JOIN = ' ¦ ';
const SHADOW = 'auto';
const el = document.querySelector(ROOT) || document.body;
const hasShadow = SHADOW === true || (SHADOW === 'auto' && [...el.querySelectorAll('*')].some((e) => e.shadowRoot));
const deepText = (root) => {
  const out = [];
  const BLOCK = /^(block|flex|grid|list-item|table|table-row|table-cell|table-caption|flow-root)$/;
  const walk = (n) => {
    if (n.nodeType === 3) { out.push(n.textContent.replace(/\s+/g, ' ')); return; }
    if (n.nodeType !== 1) return;
    if (/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|SVG)$/i.test(n.tagName)) return;
    const cs = getComputedStyle(n);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const block = BLOCK.test(cs.display) || n.tagName === 'BR';
    if (block) out.push('\n');
    if (n.tagName === 'SLOT' && n.assignedNodes) {
      const a = n.assignedNodes({ flatten: true });
      (a.length ? a : [...n.childNodes]).forEach(walk);
    } else {
      [...(n.shadowRoot || n).childNodes].forEach(walk);
    }
    if (block) out.push('\n');
  };
  [...root.childNodes].forEach(walk);
  return out.join('');
};
let txt = (hasShadow ? deepText(el) : el.innerText).replace(/\u200b/g, '').replace(/[ \t\u00a0]+/g, ' ').replace(/ ?\n ?/g, '\n').replace(/\n{2,}/g, '\n').trim();
const at = START ? txt.indexOf(START) : 0;
if (at > 0) txt = txt.slice(at);
const endAt = END ? txt.indexOf(END) : -1;
if (endAt >= 0) txt = txt.slice(0, endAt);
const lines = txt.split('\n').filter((l) => l && !(DROP && DROP.test(l)));
const head = document.title.slice(0, 80) + '\n' + location.host + location.pathname + (el === document.body && ROOT ? ' (' + ROOT + ' not found, read body)' : '') + (hasShadow ? ' (shadow DOM walked)' : '') + '\n---\n' + (START && at < 0 ? '[START not found; showing the text from the top]\n' : '');
const room = MAX - head.length - 80;
let body = '';
let next = -1;
for (let i = SKIP; i < lines.length; i++) {
  const add = (body ? JOIN : '') + lines[i];
  if (body.length + add.length <= room) { body += add; continue; }
  if (!body) { body = lines[i].slice(0, room) + ' …'; if (i + 1 < lines.length) next = i + 1; } else next = i;
  break;
}
head + (SKIP ? '[lines from ' + SKIP + ' of ' + lines.length + ']\n' : '') + body + (next >= 0 ? '\n[cut: ' + (lines.length - next) + ' more lines; next call: SKIP = ' + next + ']' : '')
