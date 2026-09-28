# Pitfalls

These are UI and technical traps seen first-hand in the reference session (2026-09-26 to 2026-09-28), written as symptom -> cause -> fix. The rules behind the fixes are in [automation-rules.md](automation-rules.md). Rows marked [reported] come from third-party write-ups, not from our own session.

## ÖBB shop (shop.oebbtickets.at)

| Symptom | Cause | Fix |
|---|---|---|
| 'Sicherheitsüberprüfung' (security check) page on first load | Cloudflare check | Wait; it passes by itself in about 10 s. If it has not cleared after about 20 s, hand over to the user. |
| 'Anmelden / Neu? Starten Sie hier' (log in / new? start here) popup after every load | login prompt | Close it with X. If a coordinate click is ignored, click the button found by its aria-label (`find`, then the ref). |
| Traveller box shows '1 x Erwachsene:r' (adult) again | the box resets between loads and sessions | Set the travellers again ([sellers/oebb.md](sellers/oebb.md)) and read the box text before EVERY search, e.g. '1 x Jugendliche:r ohne Ermäßigungen' for a 19-year-old. |
| A search in one tab disturbs another tab's search | all tabs share one server session; search state is per tab (sessionStorage), but login and cart (localStorage) are shared by every tab of the browser | At most 2-3 ÖBB tabs; never go past the offer page, because the cart is the user's real cart. |
| 'Ticket nur für Teilstrecke' (ticket for part of the route only) attached to the wrong row | the note sits BEFORE its connection in the DOM, so a naive split gave it to the previous row | Use [../scripts/oebb-results.js](../scripts/oebb-results.js), which reads the note from the tail of the previous chunk. |
| 'Reisedetails' (journey details) dialog opens empty; timers crawl | Chrome throttles background tabs | Take a small screenshot to force a render, then read the dialog; keep awaited loops short. |
| 'Suchen' (search) does nothing, or 'Keine Reise gefunden' (no journey found) after 'Spätere Verbindungen', or empty price buttons, or slow dialogs showing an earlier request | HTTP 429 on /api/offer/v2/travelActions (too many parallel searches from one browser and IP) | Wait 40-60 s, re-confirm the travellers ('ändern', then OK) and search again. A second 429 means 1 tab only. |
| 'Mit Ihren Angaben konnten keine Tickets gefunden werden' (no tickets found for your input) or a blank list after paging | backend 502/503 on the timetable or on connection details (seen once) | Retry once after 20-60 s. Instead of paging, change the time on the results page. |
| 'Das Laden der Seite dauert ungewöhnlich lang' (the page is taking unusually long) | slow backend | Choose 'Warten' (wait). |
| 'Ticket nicht verfügbar' (ticket not available) on a row | ÖBB sells no ticket for that end and train, often because the end is a DB tariff point | Try stations further along the line. |
| Price button labelled '1. Klasse' (e.g. 'Sparschiene 1. Klasse ab € 115,40') | 2nd class is gone at saver prices on that connection (it may still exist at the Standard price) | Record the row as 1st class; never compare it as 2nd. |
| Seat reservation errors 11149 ('gewünschter Sitzplatz ... nicht verfügbar', requested seat not available) or 11154 ('... Platzlage ...', seat position) | train fully reserved; the error shows only at the cart step, after names are entered | Never test it. Report 'seat not guaranteed' and check bahn.de 'Nur Sitzplatz buchen' (`ar=true`). |
| 'ACHTUNG: Starker Reisetag/Mitfahrt nur mit Sitzplatzreservierung gesichert' (heavy travel day; travel guaranteed only with a seat reservation) | peak day | Pass the warning on; recommend a seat, e.g. a DB reservation-only if ÖBB's fails. |
| Row or offer page says 'DB-Tarif' or 'Vertragspartner DB (getrennte Beförderungsverträge)' (contract partner DB, separate contracts of carriage) | the ticket end is inside DB's domestic tariff, so ÖBB resells the DB fare (seen for Kufstein, Salzburg, Reutte, Ehrwald) | Not a Sparschiene; move past the tariff point ([corridors.md](corridors.md)). |
| Salzburg Hbf or Kufstein returns 'Ticket nicht verfügbar' or a partial ticket | both are DB tariff points ([tariff-rules.md](tariff-rules.md), SCIC-NRT glossary) | Go one station further, e.g. Puch b. Hallein or the Kitzbühel line. |
| A fast ICE never appears on a routing (ICE 1501/1503/1505 on the Tyrol routings via München) | the default routing picks other feeders | Force a feeder with a Via ('Bernau a Chiemsee', 'Oberaudorf'). |
| An origin never lists a train that others do | the timetable search does not list every routing per origin | Absence is not proof: vary the Via and the time before ruling it out. |
| Results are for arrival instead of departure | the 'ab/an' toggle flipped on a stray click | Check 'ab' before every search. |

## bahn.de

| Symptom | Cause | Fix |
|---|---|---|
| Deep link opens with an error | `soid`/`zoid` missing | Always include them ([../scripts/deeplinks.js](../scripts/deeplinks.js)). |
| Slower ICEs (e.g. ICE 507, 503) missing from the list | 'Schnellste Verbindungen anzeigen' (show fastest connections) is on (`s=true`) | Search again with `s=false`. |
| Young traveller sees adult prices | wrong `r=` code (`13:16` is the default adult) | Use `r=9:16:KLASSENLOS:1` for 15-26 (observed); for other ages set the travellers in the UI. |
| 'Super Sparpreis Young 48,74 €' ('ab 48,74') | a BahnCard bundle: it requires buying My BahnCard 25 for 39,90 €, 88,64 € in total | A trap: ignore every offer bundled with a BahnCard purchase. |
| 'Teilstreckenpreis' (part-route price) | the price covers only part of the route [reported] | Discard the row. |
| 'Preis ermitteln' (determine price) | part of the journey uses trains DB cannot price directly [reported] | Not a price; skip it or price that part at its own seller. |
| Struck-through price with 'Inkl. Aktionsrabatt' (incl. promotional discount) | temporary promo (ICE 507: 64,99 € over 99,99 € on 26.09, 74,99 € on 27.09) | Record it as a promo and re-check before recommending. |
| 'Zug ausgebucht' (train fully booked) vs 'nur 1. Kl' (1st class only) | in the normal search: DB sells no ticket on that train vs only 1st class is left; in 'Nur Sitzplatz buchen' mode 'Zug ausgebucht' means no seat reservation left | Record the DB price and `db_seat` separately. |
| 'Fehler 751' after paging 'Spätere Verbindungen' | bot detection on a paging burst | Never page in loops; open a new deep link with a later `hd` time. Never open parallel bahn.de tabs. Stop at the first error page. |
| DB shows 'Zug ausgebucht' but ÖBB still sells tickets for the same train | ÖBB sells from its own contingent | Check ÖBB anyway, but expect no seat reservation. |
| 'Außergewöhnlich hohe Auslastung erwartet' (exceptionally high occupancy expected) | peak day | Run the seat check (Phase 7) before recommending. |
| List shows only 'ab' prices, no fare names | fare names appear only on the offer page | Open it with the card's 'Weiter' for the 1-3 cheapest; go back with 'Zurück'; never go further. |

## Trainline

| Symptom | Cause | Fix |
|---|---|---|
| Non-Sprinter ICEs (503/505/507/509) missing, even with a via | Trainline hides slower trains that faster ones dominate | Get them from bahn.de with `s=false`. |
| Total rises at payment | the booking fee is added only at checkout | Record the shown 'Gesamt' (total) and note 'fee not included'. |
| No train numbers in the row | the list never shows them; they are in the right-hand panel | Click the row's 2nd-class price (it only selects the row; never 'Weiter'), check that `selectedOutward` in the URL changed, then expand the ChevronDown under 'Ausgewählte Verbindung' ([sellers/trainline.md](sellers/trainline.md), step 5). Only if that fails, infer the number from the times and mark it '(inferred)'. |
| 'Teilstrecke 1', 'Teilstrecke 2' in 'Ausgewählte Verbindung' | Trainline's label for the legs of one journey | Not a partial ticket. The discard applies only to 'Ticket nur für Teilstrecke' / 'Teilstreckenpreis' (ÖBB, bahn.de). |
| A `find` ref click on a price button does not select the row; the panel shows another row | the page pre-selects its own cheapest ('Günstig') row | Click the price by coordinate and check that `selectedOutward` in the URL changed [seen 2026-09-28]. |
| The chevron shows '2 Services verfügbar' instead of a train number, or closes the legs | the ChevronDown is a toggle and keeps its state across selections | Read before you click; click it once more [seen 2026-09-28]. |
| `get_page_text` returns 'No text content found' on the results page | the page has no `<main>` and much of it is accessibility text | Use [../scripts/trainline-results.js](../scripts/trainline-results.js) or [../scripts/page-text.js](../scripts/page-text.js) [seen 2026-09-28]. |
| The fastest key train is missing from the list | one load shows about 4-8 rows, starting about 30 min before `outwardDate` | Open a second link with `outwardDate` = the last row's departure + 1 min [seen 2026-09-28]. |
| No ÖBB row for an Austrian end | Trainline listed only DB Europa fares on Hamburg -> Kitzbühel while ÖBB sold 62,60 € | A missing ÖBB row is not evidence; ask the ÖBB shop [seen 2026-09-28]. |

## Trenitalia (lefrecce.it)

| Symptom | Cause | Fix |
|---|---|---|
| NOT_SALEABLE when searching from 'Berlin Hbf' | its timetable names the station 'Berlin Hbf (tief)' | Search from 'Berlin Hbf (tief)'. |
| 'Diese Lösung kann nicht über diesen Verkaufskanal gekauft werden' (cannot be bought through this sales channel); 'ab' prices equal the München-only price | Trenitalia does not sell the German leg | Dead end for German legs ([sellers/trenitalia.md](sellers/trenitalia.md)). |
| 'Gesamtpreis' (total price) fills after one row click | the site puts the row's default offer into the session total | Read list prices without clicking rows. |

## ČD (cd.cz)

| Symptom | Cause | Fix |
|---|---|---|
| A results URL does not reopen for the user | session-bound URLs (.../spojeni-tam/<GUID>) | Give the user the form values, not the link. |
| 'Zjistit cenu' (find out price) leads to 'na vybrané spojení neumíme prodat jízdenku v e-shopu' (we cannot sell a ticket for this connection in the e-shop) | the fare is not sold online | Record `price_eur` -1 with 'not sold online'. |
| No 'Berlin Hbf (tief)' in the suggestions | the suggestion is 'Berlin Hbf (stanice, Německo, vlaky)'; only the results say '(tief)' | Pick that entry, never '(Europaplatz)' or '(S-Bahn)' ([sellers/cd.md](sellers/cd.md)) [seen 2026-09-28]. |
| Prices for an adult although a junior was set | the passenger form resets to 'Dospělý 26—64 let' after every new search | Set the passenger before EVERY search ([sellers/cd.md](sellers/cd.md), step 4) [seen 2026-09-28]. |
| The fare name is nowhere to be read | ČD shows it only after 'koupit' (buy) | Record fare 'unknown (not shown before koupit)', `offer_page_checked` false; read the trains in 'Detail' [seen 2026-09-28]. |

## SBB (sbb.ch)

| Symptom | Cause | Fix |
|---|---|---|
| The page says '5 Verbindungen gefunden' but no cards come back | the result cards are in shadow DOM, invisible to innerText and `get_page_text` | Use [../scripts/page-text.js](../scripts/page-text.js), which walks shadow roots, and keep the lines starting 'Abfahrt: ' ([sellers/sbb.md](sellers/sbb.md)) [seen 2026-09-28]. |

## MÁV and SNCF Connect

| Symptom | Cause | Fix |
|---|---|---|
| MÁV: HTTP 500 for any Berlin origin (Wien -> Budapest worked) | server error | Dead end for German legs ([sellers/mav.md](sellers/mav.md)). |
| SNCF Connect: HTTP 403 | bot protection against non-browser fetches | Real browser only, at human pace; treat results as unverified ([sellers/sncf-connect.md](sellers/sncf-connect.md)). |

## Generic

| Symptom | Cause | Fix |
|---|---|---|
| `javascript_tool` call fails after about 45 s | CDP timeout | Keep awaited loops under it: at most N = 3 x 9 s in the ÖBB extractor. |
| A `javascript_tool` result ends in '[TRUNCATED]' | returns are cut after about 1,200 characters (1,100-2,500 seen) [seen 2026-09-28] | Page through: START/END/SKIP in page-text.js, FROM/TO in oebb-results.js and trainline-results.js. Do not raise the scripts' MAX. |
| A coordinate click right after a page load is ignored | the page is still starting up | Use `find` plus the ref, or wait and retry once. |
| Prices in CHF or CZK | foreign seller | Convert them and state the rate and date (26.09.2026 used about 1.07 EUR/CHF and about 25 CZK/EUR). Take the day's rate from one named public source (for example the ECB reference rate), or use those rates and list them under 'Not checked'. When a saving is under about 5 % of the price or under 2 €, whichever is larger, say it is within the currency and fee noise. |
| Wrong or empty results for a big station | sub-station IDs, e.g. 'Berlin Hbf (tief)', shown by ÖBB as 'Berlin Hbf (Tiefgeschoß)' | Use the IDs and spellings in [stations.md](stations.md). |
| A price differs from an hour ago | contingents move: ICE 1507 1st class went 94,60 -> 130,00 € within an hour | Re-verify finalists just before presenting (Phase 8) and stamp `seen_at`. |
| A fare seen yesterday is gone | contingents vanish near departure | Treat every price as an observation; say so to the user. |
| All Sprinters show 2nd class sold out | peak days (Oktoberfest) sell out Sprinter 2nd class | Check non-Sprinter ICEs and foreign contingents, and run the seat check. |
| Cookie banner blocks the page | consent prompt | Choose the minimal option ('Alle ablehnen', 'necessary only'). |
