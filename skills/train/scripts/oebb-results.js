// oebb-results.js - extractor for the ÖBB ticket shop results list (shop.oebbtickets.at/de, German UI).
// Status: adapted from the extractor verified 2026-09-26/27 on shop.oebbtickets.at/de. Changes since:
// (1) the ACHTUNG capture (`const w=...` and `(w?' | '+w:'')`), [unverified]: the warning may sit before its
// connection in the DOM, like the Teilstrecke note, and then land on the previous row. If a warning appears on
// the wrong row, drop it and use get_page_text. (2) Added 2026-09-28, only as post-processing of the returned
// text (`const out=...` onward; the parsing is unchanged): short train names and a FROM/TO departure filter,
// because javascript_tool cuts results after about 1,200 characters and spelled-out names cut the list after
// about 7 rows [seen 2026-09-28]. Do not refactor the rest; if the page changes, fall back to get_page_text.
// If the output ends in '[TRUNCATED]', rerun with N=0 and a FROM filter (e.g. FROM='09:00').
//
// HOW TO RUN
// 1. In the skill's OWN tab, run a search on https://shop.oebbtickets.at/de/ticket and wait until the price
//    buttons ('ab € 54,00 ›') have loaded, about 15 s after 'Suchen' (search).
// 2. Read this file and paste its WHOLE text as the `text` of mcp__claude-in-chrome__javascript_tool
//    (action 'javascript_exec', tabId = the skill's tab). The comments are harmless: only comments come
//    before the code, top-level await is used, and the last expression is the returned string.
// 3. N (the first statement of the code) = how many times it clicks 'Spätere Verbindungen' (later
//    connections), waiting 9 s after each click. Keep N at most 3: javascript_tool calls time out after
//    about 45 s. To page further, call it again; each call re-prints the whole list loaded so far.
//    That click is the only one it makes. It never touches a price button or 'Angebot wählen'.
// 4. FROM / TO (the next two statements): keep only connections departing from FROM to TO, as 'HH:MM';
//    '' = no limit. Use them to page through a long list without hitting the ~1,200-character cut.
//
// OUTPUT (the returned string)
//   Line 1: the page title '<Von> › <Nach>' (from › to). Check it is the pair you meant to search.
//   Then one line per connection:
//     HH:MM , Ankunft HH:MM ... | trains | N Umstiege: stations | price label | ACHTUNG ... [TEILSTRECKE]
//   Example seen 2026-09-27:
//     11:36 , Ankunft 18:24 1 | Intercity Express 1507, Fußweg, Nahreisezug RB54, Cityjet Xpress 1, Interregio 811 | 3 Umstiege | Sparschiene ab € 54,00
//   which now prints as: 11:36 , Ankunft 18:24 1 | ICE 1507, Fußweg, RB54, CJX 1, IR 811 | 3 Umstiege | Sparschiene ab € 54,00
//   - The times are the TICKET's first departure and final arrival ('Ankunft' = arrival), not the times at
//     the user's stations. The 24-character slice can end in a stray character after the arrival time;
//     ignore it. Train names are shortened: Intercity Express -> ICE, Railjet Xpress -> RJX, Railjet -> RJ,
//     Cityjet Xpress -> CJX, Interregio -> IR, Intercity -> IC, EuroCity -> EC, 'Nahreisezug ' dropped; any
//     other name stays spelled out.
//   - 'N Umstiege: A, B' = N changes at stations A, B. When no stations are printed ('3 Umstiege'), open
//     that connection's 'Reisedetails' (trip details) before judging directness.
//   - Price label: 'Sparschiene ab € X' = cheapest saver fare; '1. Klasse ab € X' = no 2nd-class saver
//     left, the cheapest offer is 1st class; 'ab € X' with no fare name = a normal fare (Standard/FLEX or
//     DB tariff); 'Ticket nicht verfügbar' = ticket not available; 'kein Preis' = no price was read.
//   - 'ACHTUNG ...' = the connection's warning, e.g. 'ACHTUNG: Starker Reisetag/Mitfahrt nur mit
//     Sitzplatzreservierung gesichert' (busy travel day; a place is guaranteed only with a reservation),
//     printed short as 'ACHTUNG-peak'.
//     [unverified] row assignment, see Status.
//   - [TEILSTRECKE] = the shop showed 'Ticket nur für Teilstrecke' (the ticket covers only part of the
//     route). Record partial_ticket=true and discard the row. In the DOM this note comes BEFORE its
//     connection, so the code reads it from the PREVIOUS chunk's tail, after that chunk's last
//     'Reisedetails'. That is the fix for the off-by-one bug hit in the reference session.
//
// GERMAN UI LABELS IT DEPENDS ON
//   a <main> element; 'Spätere Verbindungen'; 'Verbindung Abfahrt' (the per-connection split marker);
//   'Reisedetails'; 'Verbindungsdetails'; 'Umstieg' / 'Umstiege'; 'Sparschiene'; '1. Klasse'; 'ab €';
//   'Ticket nicht verfügbar'; 'ACHTUNG'; 'Teilstrecke'. It does not work on the English shop (/en/).
//
// IF EVERY LINE SAYS 'kein Preis'
//   Most likely HTTP 429 (too many requests), usually because several tabs searched the ÖBB shop at once.
//   Wait 40-60 s, re-confirm the travellers in the passenger box (the shop resets them to
//   '1 x Erwachsene:r'), search again, then rerun this file. If the list itself is empty or says
//   'Keine Reise gefunden' (no journey found), treat it the same way. If the prices simply had not loaded
//   yet, wait 5-10 s and rerun with N=0 (edit only N).
const N=3; const FROM=''; const TO=''; const L=()=>[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Spätere Verbindungen'); for(let n=0;n<N;n++){const b=L(); if(!b)break; b.click(); await new Promise(r=>setTimeout(r,9000));} const parts=document.querySelector('main').innerText.split('Verbindung Abfahrt'); const out=document.title+'\n'+parts.slice(1).map((s,i)=>{const prev=parts[i]; const k=prev.lastIndexOf('Reisedetails'); const tail=prev.slice(k>=0?k:0); const t=s.slice(0,24).replace(/\n/g,' '); const tr=((s.match(/Verbindungsdetails ([^\n]+)/)||[])[1]||''); const um=((s.match(/\n(\d+ Umstieg[^\n]*)/)||[])[1]||'0 Umstiege'); const w=((s.match(/ACHTUNG[^\n]*/)||[])[0]||''); const p=((s.match(/(Sparschiene\n)?(1\. Klasse\n)?(ab € [\d,]+|Ticket nicht verfügbar)/)||[])[0]||'kein Preis').replace(/\n/g,' '); return t+' | '+tr+' | '+um+' | '+p+(w?' | '+w:'')+(tail.includes('Teilstrecke')?' [TEILSTRECKE]':'');}).join('\n'); const SHORT=(x)=>x.replace(/Intercity Express /g,'ICE ').replace(/Railjet Xpress /g,'RJX ').replace(/Railjet /g,'RJ ').replace(/Cityjet Xpress /g,'CJX ').replace(/Interregio /g,'IR ').replace(/Intercity /g,'IC ').replace(/Euro[Cc]ity /g,'EC ').replace(/Nahreisezug /g,'').replace(/ACHTUNG: Starker Reisetag\/Mitfahrt nur mit Sitzplatzreservierung gesichert/g,'ACHTUNG-peak'); const dep=(l)=>((l.match(/^\s*(\d\d:\d\d)/)||[])[1]||''); const rows=out.split('\n'); [rows[0],...rows.slice(1).filter((l)=>{const d=dep(l); return !d||((!FROM||d>=FROM)&&(!TO||d<=TO));})].map(SHORT).join('\n')
