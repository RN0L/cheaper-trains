// db-results.js - read-only parser for a bahn.de results list (www.bahn.de/buchung/fahrplan/suche, German UI),
// in normal mode and in 'Nur Sitzplatz buchen' (reservation only, deep link ar=true) mode.
// Status: [draft based on labels observed 2026-09-26/27; check its output against get_page_text on first use]
//
// WARNING: bahn.de's terms of use forbid automated extraction of its content. The skill reads bahn.de only
// because the user chose assisted mode after being told so; in links-only mode, do not run this file at all.
// Rules and the blocks seen behind them: ../references/automation-rules.md
//
// HOW TO RUN: open a results list in the skill's OWN bahn.de tab with a deep link (scripts/deeplinks.js), wait
// until the prices show, then Read this file and paste its WHOLE text as the `text` of
// mcp__claude-in-chrome__javascript_tool (action 'javascript_exec', tabId = the skill's tab). Only comments
// come before the code; the last expression is the returned string.
// It NEVER clicks anything, including 'Spätere Verbindungen' (later connections): paging that button got the
// browser blocked with 'Fehler 751' in the reference session. For later trains, open a new deep link with a
// later time instead. Stop using bahn.de at the first error page.
//
// OUTPUT: 3 header lines (page title and date; route and travellers; the s/ar/kl link flags), then one line
// per connection, pipe-separated:
//   dep-arr | duration | N Umst. (changes) | trains | price label | notes
// Trains: ICE, ECE, IC, EC, TGV, EST (Eurostar), RJ/RJX, NJ, EN, FLX, IRE, IR, RE, RB and S numbers. The longer
// label is listed first in the pattern (ICE before IC, ECE before EC, IRE before IR), so 'ECE 88' is not read as 'EC'.
// Price labels: 'ab X €' (from price); '(struck-through Y €)' = promo, old price crossed out; 'nur 1. Kl'
// (only 1st class left); 'Zug ausgebucht' (train fully booked); 'Ticket nicht verfügbar'; 'Teilstreckenpreis'
// (price covers only part of the route: discard); 'Preis ermitteln' / 'Preisauskunft nicht möglich' (no price
// in the list). In reservation-only mode: 'Sitzplatzreservierung 5,50 €' (seats left) or 'Zug ausgebucht'.
// Notes: the 'Auslastung' (expected load) line, e.g. 'Außergewöhnlich hohe Auslastung erwartet'; 'Es liegen
// Meldungen vor' (service notices exist); 'Sitzplätze ausgebucht (1. Klasse)'.
// The list price is an 'ab' price; fare names (Super Sparpreis, Sparpreis, Flexpreis) are on the offer page.
// 'ab' prices that include buying a BahnCard are a trap: check the offer page before recording them.
const TXT = (document.querySelector('main') || document.body).innerText.replace(/\u00a0/g, ' ').replace(/\u200b/g, '');
const H = new URLSearchParams(location.hash.slice(1));
const EUR = '([\\d.]*\\d,\\d\\d) ?€';
const head = [
  document.title + ' | ' + ((TXT.match(/(?:Mo|Di|Mi|Do|Fr|Sa|So)\. \d{1,2}\. [^\n]{3,5} \d{4}/) || [])[0] || 'date ?'),
  ((TXT.match(/\n([^\n]+)\n\s*[–-]\s*\n([^\n]+)\n(?=\d+ Person)/) || []).slice(1).join(' - ') || 'route ?') + ' | ' + ((TXT.match(/\d+ Person(?:en)?[^\n]*\n[^\n]*/) || [])[0] || 'travellers ?').replace(/\n/, ', '),
  's=' + H.get('s') + ' (true = only fastest shown) | ar=' + H.get('ar') + ' (true = reservation only) | kl=' + H.get('kl'),
];
const PAIR = /(?:^|\n)[ \t|]*(\d{1,2}:\d{2})[\s|]*[–\-|][\s|]*(\d{1,2}:\d{2})/g;
const hits = [...TXT.matchAll(PAIR)];
const rows = hits.map((m, i) => {
  let b = TXT.slice(m.index, i + 1 < hits.length ? hits[i + 1].index : undefined);
  const stop = b.search(/\n(?:Druckansicht|Spätere Verbindungen|Legende)\n/);
  if (stop > 0) b = b.slice(0, stop);
  const dur = (b.match(/\d+h(?: ?\d+min)?|\d+ ?min\b/) || [])[0] || '?';
  const chg = (b.match(/(\d+) ?Umstieg/) || [])[1] || '0';
  const trains = [...new Set((b.match(/\b(?:ICE|ECE|IC|EC|TGV|EST|RJX?|NJ|EN|FLX|IRE|IR|RE|RB|S)\s?\d+/g) || []).map((s) => s.replace(/\s+/, ' ')))];
  const p = [];
  const res = b.match(new RegExp(EUR + '\\s*Sitzplatzreservierung'));
  if (res) p.push('Sitzplatzreservierung ' + res[1] + ' €');
  const promo = b.match(new RegExp('Alter Preis ' + EUR + ' durchgestrichen, neuer Preis ab ' + EUR));
  const ab = b.match(new RegExp('\\bab ?' + EUR));
  if (promo) p.push('ab ' + promo[2] + ' € (struck-through ' + promo[1] + ' €)');
  else if (ab) p.push('ab ' + ab[1] + ' €');
  if (/nur 1\. Kl/.test(b)) p.push('nur 1. Kl');
  for (const k of ['Inkl. Aktionsrabatt', 'Zug ausgebucht', 'Ticket nicht verfügbar', 'Teilstreckenpreis', 'Preis ermitteln', 'Preisauskunft nicht möglich']) if (b.includes(k)) p.push(k);
  const notes = [(b.match(/(?:Außergewöhnlich hohe|Hohe|Mittlere|Geringe) Auslastung erwartet/) || [])[0], /Es liegen Meldungen vor/.test(b) && 'Es liegen Meldungen vor', (b.match(/Sitzplätze (?:teilweise )?ausgebucht \([^)]*\)/) || [])[0]].filter(Boolean);
  return [m[1] + '-' + m[2], dur, chg + ' Umst.', trains.join(' ') || '?', p.join(', ') || 'kein Preis', notes.join('; ')].join(' | ');
});
head.concat(rows.length ? rows : ['no connections parsed - compare with get_page_text']).join('\n')
