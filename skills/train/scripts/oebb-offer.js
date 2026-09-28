// oebb-offer.js - read-only reader for the ÖBB offer page (shop.oebbtickets.at/de/ticket/offer, German UI).
// Status: [verified live 2026-09-28 on two offer pages (Hamburg Hbf -> Kitzbühel Bahnhof, -> Puch b.Hallein): prices,
// fares, fixed trains, validity, route line and TEILSTRECKE all parsed]. If the output is empty, fall back to get_page_text.
// HOW TO RUN: open the offer page in the skill's OWN tab (click a connection's price button on the list).
// Read this file and paste its WHOLE text as the `text` of mcp__claude-in-chrome__javascript_tool (action
// 'javascript_exec', tabId = the skill's tab). Only comments come before the code; the last expression is the
// returned string. It NEVER clicks: it reads innerText of <main> (or document.body) for the offers and of
// document.body for the route line and flags. Go back with navigate 'back'. Never click 'Angebot wählen'
// (choose offer): the ÖBB cart is shared by every tab of the browser.
// OUTPUT, one item per line: title and path; '2. Klasse ab € X' / '1. Klasse ab € Y' (lowest price per class);
//   'N Angebote für K. Klasse' (the class the offers are for; the class tab switches it); per offer: NON-FLEX /
//   SEMI-FLEX / FLEX, price, fare ('Sparschiene', 'Sparschiene Komfort', 'Standard-Ticket'), first refund line
//   ('Nicht stornierbar' = not refundable, 'Stornierbar bis' = refundable until, 'Kostenlos stornierbar bis' =
//   free cancellation until), seat add-on ('Sitzplatzreservierung + € 3,00'), validity ('Gültig ...') and
//   'Verkehrsmittel sind fix: ...' (fixed trains; FLEX: 'Freie Wahl der möglichen Verkehrsmittel' = any train);
//   route: lines containing '›', e.g. 'Berlin Hbf (Tiefgeschoß) › Kitzbühel Bahnhof'; TEILSTRECKE=yes|no
//   ('Teilstrecke' anywhere = partial ticket, discard); NUR-SITZPLATZ=yes|no ('Nur Sitzplatz reservieren
//   (kein Ticket)' = reservation-only offered). No '2. Klasse ab' line usually means 2nd class is sold out.
const T = (s) => s.replace(/\u200b/g, '').replace(/\u00a0/g, ' ');
const main = T((document.querySelector('main') || document.body).innerText);
const all = T(document.body.innerText);
const P = '€\\s?([\\d.]*\\d,\\d\\d)';
const out = [document.title + ' | ' + location.pathname];
for (const k of ['2', '1']) {
  const m = main.match(new RegExp(k + '\\. Klasse\\s*ab\\s*' + P));
  if (m) out.push(k + '. Klasse ab € ' + m[1]);
}
const hdr = main.match(/\d+ Angebote? für [12]\. Klasse/);
if (hdr) out.push(hdr[0]);
const re = new RegExp('(?<![\\w-])(NON-FLEX|SEMI-FLEX|FLEX)\\s*' + P, 'g');
const offers = [];
for (const m of main.matchAll(re)) {
  if (!offers.some((o) => o.label === m[1] && o.price === m[2])) offers.push({ label: m[1], price: m[2], at: m.index });
}
offers.forEach((o, i) => {
  let b = main.slice(o.at, i + 1 < offers.length ? offers[i + 1].at : undefined);
  const end = b.indexOf('Angebotsdetails');
  if (end > 0) b = b.slice(0, end);
  const fare = ((b.match(/Angebot wählen\s*\n\s*([^\n€]+)/) || [])[1] || (b.match(/Sparschiene Komfort|Sparschiene|Standard-Ticket/) || [])[0] || '?').trim();
  const cond = (b.match(/^(?:Nicht stornierbar|Kostenlos stornierbar|Stornierbar|Nicht erstattbar|Erstattung)[^\n]*/m) || [])[0];
  const seat = b.match(new RegExp('Sitzplatzreservierung\\s*(\\+?\\s*)' + P));
  const valid = (b.match(/Gültig[^\n]*/) || [])[0];
  const fix = (b.match(/Verkehrsmittel sind fix:[^\n]*|Freie Wahl der möglichen Verkehrsmittel/) || [])[0];
  out.push([o.label + ' € ' + o.price + ' ' + fare, cond, seat && 'Sitzplatzreservierung ' + (seat[1].trim() ? '+ ' : '') + '€ ' + seat[2], valid, fix].filter(Boolean).join(' | '));
});
if (!offers.length) {
  const fix = all.match(/Verkehrsmittel sind fix:[^\n]*/);
  if (fix) out.push(fix[0]);
}
const route = [...new Set(all.split('\n').map((s) => s.trim()).filter((s) => /\S\s*›\s*\S/.test(s) && !/€/.test(s) && s.length < 150))].slice(0, 3);
out.push('route: ' + (route.length ? route.join(' || ') : 'not found (open Reisedetails or use get_page_text)'));
const teil = all.match(/[^\n]*Teilstrecke[^\n]*/);
out.push('TEILSTRECKE=' + (teil ? 'yes (' + teil[0].trim().slice(0, 120) + ')' : 'no'));
out.push('NUR-SITZPLATZ=' + (/Nur Sitzplatz reservieren\s*\(kein Ticket\)/.test(all) ? 'yes' : 'no'));
const warn = all.match(/ACHTUNG[^\n]*/);
if (warn) out.push(warn[0].trim());
if (!offers.length && !out.some((l) => /Klasse ab/.test(l))) out.push('EMPTY: offer labels not found - fall back to get_page_text');
out.join('\n')
