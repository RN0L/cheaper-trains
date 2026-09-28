# bahn.de (Deutsche Bahn)

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- **The baseline for every trip.** Phase 1 always runs here first, in the main session, in one tab. [verified 2026-09-26/27]
- **The only seller when no border lever exists**, i.e. when no key train continues toward a border within reach (check [../corridors.md](../corridors.md)). Then the job is DB's own levers: slower non-Sprinter trains, Young or Senior fares, Sparpreis Europa, rarely a split ticket.
- **The seat check lives here too** ('Nur Sitzplatz buchen', reservation only), even when the ticket comes from another seller.
- **DB's terms of use forbid automated extraction.** Tell the user before touching the site and offer links-only mode (see Limits).

## What it sells

- All DB domestic long-distance fares: Flexpreis, Sparpreis, Super Sparpreis, and their Young and Senior variants.
- Seat reservations as a separate product ('Nur Sitzplatz buchen', "book a seat only"), usable with any valid ticket.
- International through-tickets: Flexpreis Europa, Sparpreis Europa, Super Sparpreis Europa.
- International coverage according to seat61 [reported]: DB can sell trips to AT, CZ, CH, DK, PL, HU, SK, BE, NL, and IT via München-Verona. It cannot sell France, Eurostar (Köln-Brüssel-Paris), WESTbahn or FlixTrain affordably.
- Booking opens about 12 months ahead, up to the end of the timetable year [reported, seat61]. BB Nr. 5.1: "Reisende können je nach Verfügbarkeit frühestens 12 Monate im Voraus Sitzplätze in den Zügen der Produktklassen ICE und/oder IC/EC reservieren" (seats can be reserved at most 12 months ahead; checked in the Stand 24.09.2026 text).
- int.bahn.de (the international version of the site) allows free cancellation within 3 h of booking [reported, seat61].

## Fares and conditions

Domestic rules, DB BB Personenverkehr, Stand 24.09.2026 (re-check the current version at https://www.bahn.de/agb before relying on it; the BB changed five times in 2026):

- **Train binding (Zugbindung).** Sparpreis, Super Sparpreis and the Young and Senior variants are valid only on the travel day, in the ICE/IC/EC trains and the class printed on the ticket. Regional trains (product class C) before and after the booked trains are allowed on the travel day and until 10:00 the next day (Nr. 3.3.1.2). Zugbindung is lifted when a delay of 20 min or more at the ticket's destination is expected (Nr. 9.1.1). The reference point is the ticket's destination, not the station where the user gets off.
- **Contingents.** Once DB's contingent is used up, the fare cannot be bought (Nr. 3.3.1.3). This is why prices move in steps.
- **Floor prices (Nr. 3.3.2, all six checked in the Stand 24.09.2026 text):**

  | Fare | 2nd class from | 1st class from |
  |---|---|---|
  | Super Sparpreis | 17,99 € | 23,99 € |
  | Sparpreis | 21,99 € | 29,99 € |
  | Super Sparpreis Young | 4,99 € | not offered |
  | Sparpreis Young | 16,99 € | not offered |
  | Super Sparpreis Senior | 15,99 € | not offered |
  | Sparpreis Senior | 19,99 € | not offered |

- **Young fares** are for persons "bis einschließlich 26 Jahre" (up to and including age 26), 2nd class only. The age on the day travel starts counts (for a return, the outward day). Staff may ask for official photo ID as proof of age (Nr. 3.3.1.1). Children aged 6-14 travel free with a person aged 15 or over (Nr. 3.7.2), which is why the practical Young range is 15-26. **Senior fares** start at the 65th birthday: "für Personen ab Vollendung des 65. Lebensjahres" (Nr. 3.3.1.1, checked in the Stand 24.09.2026 text).
- **Refunds.** Super Sparpreis: "Erstattung und Umtausch ... ausgeschlossen" (no refund or exchange, Nr. 4.3.2). Sparpreis: only before the first travel day, as a voucher, minus 10 € (Nr. 4.3.1). Flexpreis includes a free City-Ticket (Nr. 3.5.1); Sparpreis fares can add one for a fee (Nr. 3.5.2).
- **Seat reservation (Nr. 5.1-5.4).** 5,50 € in 2nd class and 6,90 € in 1st class, per person and direction. "Der Anspruch auf den reservierten Sitzplatz erlischt, wenn er nicht durch den Reisenden 15 Minuten nach Abfahrt des Zuges von dem Bahnhof, ab dem die Reservierung erfolgt ist, eingenommen wurde" (the claim lapses if the seat is not taken within 15 minutes after the train leaves the station the reservation starts from). Refund only if the seat could not be provided or used because of a delay. So book it from the station where the user actually boards.
- **The offer page for ICE 507** (Berlin 10:29 → München 15:08, Mon 28.09.2026), read on Sun 27.09.2026 [verified 2026-09-27]:

  | Fare | Price | Conditions shown |
  |---|---|---|
  | Super Sparpreis Young | 74,99 € | Zugbindung (train-bound), 'Stornierung ausgeschlossen' (no cancellation), no City-Ticket |
  | Sparpreis Young | 83,99 € | 'Stornierung vor 1. Geltungstag kostenpflichtig' (cancellation before the first validity day costs a fee) |
  | Flexpreis Young | 145,90 € | City-Ticket included |

  On Sat 26.09.2026 the same page showed 64,99 € / 73,99 € / 145,90 € [verified 2026-09-26]. The 64,99 € carried a struck-through 99,99 € and 'Inkl. Aktionsrabatt' (includes a promotional discount).
- **The BahnCard trap.** An 'ab 48,74' ("from 48,74") price appeared only when the fare was bundled with buying a BahnCard [seen 2026-09-26]. Ignore any price that requires buying a card, unless the user wants the card anyway.

**Sparpreis Europa and Super Sparpreis Europa** (DB Besondere Internationale Beförderungsbedingungen, SCIC-NRT, Stand 15.09.2026, Nr. 5.2.3-5.2.4):

- Train-bound in the DB trains named on the ticket for the German part, and in the named cross-border train abroad. Outside that binding the ticket is valid for two days, "bei der DB jeweils am eingetragenen Geltungstag bis 03:00 Uhr des Folgetages" (at DB until 03:00 the day after the printed validity day).
- BahnCard 25 or 50 gives 25 % off the German part only. "Auch Inhaber einer BahnCard 100 erhalten 25% Rabatt auf den deutschen Streckenteil, außer für Reisen nach Frankreich" (BahnCard 100 also 25 % off the German part, except to France). Both quotes: SCIC-NRT Teil A Nr. 5.2.3, checked in the Stand 01.08.2026 text.
- Booked only if at least one leg runs in an ICE, IC or EC in Germany. Contingent, while stocks last.
- The Young variants (up to and including 26, 2nd class) are **not offered for connections that only transit Germany**. The adult fares are.
- City-Ticket costs extra.
- The minimum prices per country are in [../corridors.md](../corridors.md). Tickets to Salzburg Hbf, Kufstein, Basel Bad Bf and the Außerfernbahn are priced as DB-domestic (see [../tariff-rules.md](../tariff-rules.md)), so a Europa fare needs a ticket end beyond those points.

## Where the lever is

1. **'Schnellste Verbindungen anzeigen' off (s=false).** With the default "show fastest connections" on, bahn.de hides slower trains. Switching it off revealed the non-Sprinter ICEs Berlin-München (ICE 503, 505, 507, 509), about 4 h 30-4 h 40 instead of about 4 h 07 for the Sprinters. In the reference session DB's cheapest 2nd-class fare in the window (ICE 507) was visible only this way [verified 2026-09-26]. These trains are usually slower than the fast set allows, so they go into the "slower but cheaper" line (see [../method.md](../method.md)).
2. **Young or Senior fares by exact age.** Ask for the age; a 26-year-old and a 27-year-old see different prices.
3. **Sparpreis Europa to the first station past the border, on the same train.** Screen the ends on Trainline first ([trainline.md](trainline.md)), then confirm finalists here; procedure below ('How to search Sparpreis Europa to a foreign ticket end'). Test it rather than assume it: via München on 28.09.2026 DB's international fares were expensive (Berlin → Innsbruck 139,99 €, Salzburg 148,40 €, Villach 227,55 €) [seen 2026-09-26], while ÖBB sold the same ICEs for 54,00-62,60 € (see [oebb.md](oebb.md)).
4. **Split tickets.** Try one or two major intermediate stops, and only when the same-train price is high. It rarely wins:
   - Stiftung Warentest (test run 23-24.09.2025, 10 routes x 3 booking times) found splits cheaper in only 7 of 30 cases, each by a few euros, and sometimes twice as expensive [reported].
   - Through-ticket passenger rights are lost at the split point: a delay on the first ticket does not protect the connection on the second [reported].
   - BetterBahn (betterbahn.eu, open source) is one tool that searches DB splits. DB refused it API access [reported]. It is a site the user can run; the skill does not script it.
   - DB's own Bestpreissuche replaced the Sparpreis-Finder at the end of 2021. It shows prices by time window but does not cover same-day travel [reported].
5. **Forced routing.** In the search form, up to 2 stopovers with a stay of 00:00 force the route through those stations [reported, seat61]. Use this to keep a Europa fare on the user's key train (for example via München). The `hz` URL parameter is probably the stopover list [hypothesis].
6. **Low-prior DB variants.** A ticket one station beyond D on DB, or from another station in the same city. Test only when the corridor offers nothing better; procedure below ('Domestic-only playbook').
7. **The seat check (ar=true).** It shows which trains still have seats to reserve. A cheap foreign ticket without a seat plus a DB reservation (5,50 € in 2nd class) can beat a DB ticket with a seat.

## How to search

1. **Tell the user first** that DB's terms forbid automated extraction and that DB may block the browser ('Fehler 751'). Offer links-only mode for bahn.de and record the choice.
2. **Build the deep link** with [../../scripts/deeplinks.js](../../scripts/deeplinks.js): O, D, date and time, class, traveller code, `s` and `ar`. EVA numbers and station spellings are in [../stations.md](../stations.md). Open it in the skill's own single bahn.de tab.
3. **Travellers.** For one traveller aged 15-26 without a card use `r=9:16:KLASSENLOS:1`. For one adult aged 27-64 (neither Young nor Senior) without a card use `r=13:16:KLASSENLOS:1`. For anything else (children, seniors, BahnCard, several travellers) open the link with the default adult, then set the travellers in the search form by hand and check the summary before searching. The site then writes its own `r=` code into the URL. You may reuse that code in the same session, but do not treat it as verified.
4. **Two passes per direction:** first with `s=true` (fastest connections), then with `s=false` to reveal the slower non-Sprinter trains.
5. **Read the list** by pasting [../../scripts/db-results.js](../../scripts/db-results.js) into `mcp__claude-in-chrome__javascript_tool`. It also parses the reservation-only view.
6. **Open the offer page for the 1-3 cheapest trains.** Click the connection card's 'Weiter' ("continue") button, read the fare names and conditions, then leave with 'Zurück' ("back"). Never go past the offer page.
7. **Later trains:** open a new deep link with a later `hd`. Do not page with 'Spätere Verbindungen' ("later connections") in a loop; that is what triggered the block.
8. **Pace:** one search at a time, at least 10 s apart. Stop using bahn.de at the first error page.
9. **Seat check (Phase 7):** the same link with `ar=true`, for O → D in W.
10. **Europa test:** open O → foreign end with deeplinks.js (next section). If the list does not contain the key train, type D as a stopover with 0 min stay in the search form of the same tab (form label [unverified]), search once, and reuse the URL the site writes.
11. **Record** one row per train in the schema from [../method.md](../method.md): `seller` = 'DB (bahn.de)', `fare` = the DB fare name (or 'nur 1. Kl' / 'Zug ausgebucht'), `price_raw` as shown, `offer_page_checked`, and `db_seat` from the `ar=true` pass. Also record DB's cheapest 2nd-class fare on ANY train or connection in W (flag a connection with changes when direct-only is on). That is the honest comparison point.

**Links-only mode.** Build the same links (s=true, s=false, ar=true, return) and hand them to the user. Ask them to paste back the price list or a screenshot. The rest of the method is unchanged. With nobody to open them (unattended run), the links go under 'Not checked' and Trainline supplies a tagged proxy ([../method.md](../method.md) §11).

## How to search Sparpreis Europa to a foreign ticket end

DB Sparpreis Europa is the first check on the CZ, PL, NL, BE, FR, CH and DK corridors. Screen the ends on Trainline first ([trainline.md](trainline.md)); spend bahn.de searches only on finalists. Every search here counts toward the bahn.de budget ([../method.md](../method.md) §10).

1. Take the end's name and EVA from [../stations.md](../stations.md) §1b (e.g. Děčín hl.n. 5400003, Arnhem Centraal 8400071, Basel SBB 8500010, Liège-Guillemins 8800012, Strasbourg 8700023, Padborg St. 8601899, Schärding 8100024; CSV values, [unverified] in a live link). Confirm the name in the bahn.de suggestion list.
2. Build `dbSearchUrl` O → end with `hd` = start of W and `s=true`.
3. Read the list with db-results.js. Keep only rows whose train list contains the key train and shows no change before D.
4. If the routing avoids D, add D as a stopover in the search form (seat61: up to 2 stopovers with a 00:00 stay [reported]; the form label is [unverified]), search again, and reuse the URL the site writes.
5. On the offer page the fare must read 'Super Sparpreis Europa' or 'Sparpreis Europa' (a Young variant for age 26 or under, except FR). Record the train list.
6. FR and CZ Europa fares are not sold on the travel day (sold until the day before). For PL, PKP sells only 60 days ahead and bahn.de may open earlier [reported, seat61]. A missing fare there is not 'sold out'.
7. Record `seller` = 'DB (Europa)'.

## Domestic-only playbook (no through-ticket lever)

For trips where the seller table in SKILL.md finds no continuation, or every corridor fails the economic gate. About 10-14 bahn.de searches in total, inside the budget.

1. O → D with `s=true` and `s=false` for each direction, traveller code by exact age (4 searches).
2. For each fast key train, open its connection details and note the 1-2 stops after D and the 1-2 stops before O. In links-only mode a Trainline Europa search O -> a foreign end usually prints the key train's run past D in its 'Ausgewählte Verbindung' panel.
3. **Extended ends.** Deep link O → (stop after D) and (stop before O) → D, with `hd` = the key train's departure at that ticket's origin. Keep only rows with the same train number and no change between O and D. Compare with the same-train O → D price (2-4 searches).
4. **Split.** Only when the same-train price is above about 2x the Super Sparpreis floor, i.e. about 36 € (2 x 17,99 €), for every age. Do not use the Super Sparpreis Young floor of 4,99 €: it is far below the Young prices seen (28,99-74,99 € in the 2026-09 sessions), so 2x it would fire on every trip. Trainline ids for the usual split stops are in [../stations.md](../stations.md) §1b; for any other stop, look it up there (§7) or run the split on bahn.de only. Take 1-2 major stops X of that train and price O → X and X → D at the key train's times at O and X. A split qualifies only if both parts show the same train number and the sum is below O → D. Warn that through-ticket rights end at X (2-4 searches).
5. **FlixTrain anchor** if the pair is on a route listed in [other-sellers.md](other-sellers.md).
6. If W is flexible and travel is not today, suggest the user opens DB Bestpreissuche themselves.
7. In links-only mode, screen steps 3-4 on Trainline: seller 'Trainline (DB)', list prices, train numbers from the 'Ausgewählte Verbindung' panel or matched by time and marked (inferred) ([trainline.md](trainline.md)). Hand only a combination that beats O -> D to the user, as a bahn.de link. Seen 2026-09-28 (Hannover -> Leipzig, Fr 02.10.2026, age 25): extended end to Dresden Hbf 46,99 € and a split at Magdeburg 19,99 + 20,99 = 40,98 €, both above DB's 34,99 € on IC 2445.

Print each lever's outcome, including 'no saving', under 'Levers tried' in the output. Attach tariff-rules items 2 and 5 to extended-end rows ([../tariff-rules.md](../tariff-rules.md)).

## Deep link

Verified compact format [verified 2026-09-26/27]. Berlin Hbf → München Hbf, one traveller aged 19, 2nd class, departure after 2026-09-28 10:00, 'Schnellste Verbindungen' off, not reservation-only:

```
https://www.bahn.de/buchung/fahrplan/suche#sts=true&so=Berlin%20Hbf&zo=M%C3%BCnchen%20Hbf&kl=2&r=9:16:KLASSENLOS:1&soid=A%3D1%40O%3DBerlin%20Hbf%40L%3D8011160%40&zoid=A%3D1%40O%3DM%C3%BCnchen%20Hbf%40L%3D8000261%40&sot=ST&zot=ST&soei=8011160&zoei=8000261&hd=2026-09-28T10:00:00&hza=D&hz=%5B%5D&ar=false&s=false&d=false&fm=false&bp=false&dlt=false&nfv=false&dltv=false
```

Full format, as the site itself writes it [seen 2026-09-26] (youth search, `s=true`). It adds coordinates (X, Y), `p` and `i=U×00<UIC>` inside `soid`/`zoid`, plus `vm`:

```
https://www.bahn.de/buchung/fahrplan/suche#sts=true&so=Berlin%20Hbf&zo=M%C3%BCnchen%20Hbf&kl=2&r=9:16:KLASSENLOS:1&soid=A%3D1%40O%3DBerlin%20Hbf%40X%3D13369549%40Y%3D52525589%40U%3D80%40L%3D8011160%40p%3D1790185785%40i%3DU%C3%97008065969%40&zoid=A%3D1%40O%3DM%C3%BCnchen%20Hbf%40X%3D11558339%40Y%3D48140229%40U%3D80%40L%3D8000261%40p%3D1790185785%40i%3DU%C3%97008020347%40&sot=ST&zot=ST&soei=8011160&zoei=8000261&hd=2026-09-28T04:00:52&hza=D&hz=%5B%5D&ar=false&s=true&d=false&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false&dlt=false&nfv=false&dltv=false
```

A minimal form was reported by ICE-Treff and not re-tested: `https://www.bahn.de/buchung/fahrplan/suche#soid=O%3DBerlin%20Hbf&zoid=O%3DM%C3%BCnchen%20Hbf` [reported].

| Parameter | Meaning | Confidence |
|---|---|---|
| `so`, `zo` | Origin and destination display names | [verified 2026-09-26] |
| `soid`, `zoid` | Station ids, `A=1@O=<name>@L=<EVA>@` URL-encoded. **Required**; without them the page shows an error. | [verified 2026-09-26] |
| `soei`, `zoei` | EVA numbers of origin and destination | [verified 2026-09-26] |
| `kl` | Class: `2` = 2nd class; `1` = 1st class | `2` [verified 2026-09-26]; `1` [unverified] |
| `r` | Travellers. `13:16:KLASSENLOS:1` = the default adult. `9:16:KLASSENLOS:1` appeared when a 19-year-old was set, so `9` is most likely youth 15-26. `16` most likely means no discount card. Every other code is unverified: set travellers in the UI instead. | adult [seen 2026-09-26]; youth and card [likely] |
| `hd` | Date and time, ISO local, e.g. `2026-09-28T10:00:00` | [verified 2026-09-26] |
| `hza` | `D` = the time is a departure time; `A` = arrival time | `D` [verified 2026-09-26]; `A` [unverified] |
| `ar` | `true` = 'Nur Sitzplatz buchen' (reservation only) | [verified 2026-09-26/27] |
| `s` | `false` = 'Schnellste Verbindungen anzeigen' off | [verified 2026-09-26] |
| `sts`, `sot`, `zot`, `hz`, `d`, `vm`, `fm`, `bp`, `dlt`, `nfv`, `dltv` | Copy as in the verified link | meanings [unverified] |

Build links with [../../scripts/deeplinks.js](../../scripts/deeplinks.js). Its self-test must reproduce the compact link above byte for byte (`node deeplinks.js --self-test`); the full format is for reference only and is not built by the script. If the self-test fails, use the links here as the template.

## Reading results and the offer page

**List view labels** (read by [../../scripts/db-results.js](../../scripts/db-results.js)):

| Label | Meaning | What to do |
|---|---|---|
| 'ab X €' | "from X €", the cheapest fare on that connection. A struck-through price beside it means a promotion ('Inkl. Aktionsrabatt'). | An 'ab' price is only a list price. Confirm the fare name on the offer page. |
| 'nur 1. Kl' | Only 1st class left | Record it as 1st class; 2nd class is sold out on DB. |
| 'Zug ausgebucht' | Train fully booked | No DB ticket for this train. A foreign seller may still have its own contingent. |
| 'Ticket nicht verfügbar' | No ticket available | Record `price_eur` = -1. |
| 'Preis ermitteln' | "Determine price": part of the trip runs on trains DB cannot price directly | Treat it as not bookable here [unverified]. |
| 'Teilstreckenpreis' | "Section price": the price covers only part of the trip | Avoid. Set `partial_ticket` = true and discard. |
| 'Es liegen Meldungen vor' | "There are service notices" | Open and read them (cancellations, construction). |
| 'Außergewöhnlich hohe Auslastung erwartet' | "Exceptionally high occupancy expected" | Run the seat check before recommending anything on this train. |

**Reservation-only view (`ar=true`).** Each train shows either '5,50 € Sitzplatzreservierung' (seats left to reserve) or 'Zug ausgebucht'. Record `db_seat` = 'reservable' or 'Zug ausgebucht'.

**Offer page.** Only the offer page reached with the connection card's 'Weiter' button shows fare names (for example Super Sparpreis Young / Sparpreis Young / Flexpreis Young) and their conditions. Read it, set `offer_page_checked` = true, and leave with 'Zurück'. Nothing is selected or carted.

## Limits and bot protection

The binding rules are in [../automation-rules.md](../automation-rules.md). For bahn.de specifically:

- **Terms.** The bahn.de Nutzungsbedingungen forbid "die Verwendung automatisierter Systeme oder automatisierter Software zur Extraktion von Inhalten" (the use of automated systems or software to extract content) and any access that does not go through the user interface. robots.txt disallows `/web/` and `/.rest/`. So even slow, UI-only automation breaks DB's terms. Say this plainly to the user and offer links-only mode.
- **Observed block.** 'Fehler 751 – Das Verhalten Ihres Browsers ähnelt dem eines Bots' (error 751: your browser behaves like a bot) appeared after about 25 calm UI searches at least 10 s apart, while paging 'Spätere Verbindungen' (26.09.2026, 20:22). It had also appeared earlier after a direct fetch to `/web/api/angebote/fahrplan` returned `OPS_BLOCKED`. After that every search was blocked. The next day bahn.de worked again [seen 2026-09-26/27].
- **Server side.** Scripted calls to the station API `/web/api/reiseloesung/orte` led to an IP-level Akamai 'Access Denied' block within about 20 minutes [seen 2026-09-28, reference session; timeline in [../examples/berlin-muenchen-2026-09.md](../examples/berlin-muenchen-2026-09.md) §10].
- **Rules that follow:**
  - One bahn.de tab, never parallel.
  - At least 10 s between searches.
  - New deep links instead of paging loops.
  - Never call anything under `/web/api` from a script, not even the station lookup that works inside the page.
  - Stop at the first error page. Do not retry, do not clear cookies, do not change browsers. Hand over to the user and switch to links-only mode.
- **No public API to lean on.** The public `v6.db.transport.rest` answered HTTP 503. Do not depend on it.

## Seen in the reference session

Mon 28.09.2026, Berlin Hbf → München Hbf, one traveller aged 19 (Young fares), 2nd class wanted. Read on Sat 26.09.2026 unless marked Sun (27.09.2026). Full story: [../examples/berlin-muenchen-2026-09.md](../examples/berlin-muenchen-2026-09.md).

| Train | Berlin → München | bahn.de |
|---|---|---|
| ICE 1501 | 05:36 → 09:41 | Flexpreis Young 145,90 € (no saver fare left) |
| ICE 503 | 06:29 → 11:07 | 74,99 € [seen 2026-09-26] |
| ICE 1003 | 06:36 → 10:45 | 2nd class sold out; 1st class 187,99 € |
| ICE 1503 | 07:36 → 11:43 | 2nd class sold out; 1st class 224,99 € |
| ICE 1005 | 08:36 → 12:46 | 'Zug ausgebucht' |
| ICE 1505 | 09:36 → 13:43 | 2nd class sold out; 1st class 337,50 € |
| ICE 507 | 10:29 → 15:08 | Super Sparpreis Young 64,99 € (Sat, promo, struck-through 99,99 €) / 74,99 € (Sun) [verified] |
| ICE 1507 | 11:36 → 15:43 | 2nd class sold out; 1st class 337,50 € (Sat and Sun about 14:30) |
| ICE 509 | 12:29 → 17:09 | Super Sparpreis Young 64,99 € (Sat) |
| ICE 1509 | 13:36 → 17:43 | 2nd class sold out; 1st class 187,99 € |

On Sunday ICE 1007 and ICE 1009 also showed 1st class only at 337,50 €.

- **Return, Thu 01.10.2026, München → Berlin:** Super Sparpreis Young 68,99 € on ICE 508, 1008, 1508, 506, 706, 1006, 1506 and 1004 [seen 2026-09-26].
- **Seat check for Monday (`ar=true`):** every Sprinter (ICE 1003, 1503, 1005, 1505, 1007, 1507, 1009, 1509) and ICE 1101 showed 'Zug ausgebucht' with 'Außergewöhnlich hohe Auslastung erwartet'. The non-Sprinter ICE 503, 505, 507, 509, 601, 1601, 603, 1103 and 1603 were still reservable at 5,50 € [seen 2026-09-26/27].
- **DB's international fares via München** were expensive: Innsbruck 139,99 €, Salzburg 148,40 €, Villach 227,55 € [seen 2026-09-26].
- **The block:** 'Fehler 751' at 20:22 on Sat 26.09 while paging 'Spätere Verbindungen' on the return. bahn.de worked again on Sunday.
- **What the baseline meant for the result.** ÖBB sold ICE 1507 in 2nd class for 54,00 € (see [oebb.md](oebb.md)). Against DB on the same train (337,50 €) that is about one sixth, **but it compares 2nd class with 1st class**, because DB had no 2nd class left. Against DB's cheapest 2nd class on any train in the window (ICE 507, 64,99-74,99 €) it is 11-21 € cheaper and 32 minutes faster. Always print both comparisons.

## Unverified: test before relying on it

- Every traveller code other than `13:16:KLASSENLOS:1` (default adult) and `9:16:KLASSENLOS:1` (youth, likely): children, several travellers, BahnCard 25/50/100 codes, and all Senior codes.
- `hza=A` for an arrival-time search, and `kl=1`.
- Whether rows labelled 'Preis ermitteln' can be bought on bahn.de, and at what price.
- The minimal ICE-Treff link.
- The meanings of `sts`, `hz`, `d`, `vm`, `fm`, `bp`, `dlt`, `nfv`, `dltv`.
- seat61's country coverage list, the 12-month booking horizon, the 00:00 stopover trick and the 3 h free cancellation on int.bahn.de.
- Whether Sparpreis Europa beats a foreign seller on any corridor other than via München; test it per trip.

## Sources

- DB, Beförderungsbedingungen Personenverkehr, Stand 24.09.2026 (Nr. 3.3.1-3.3.2, 3.5, 3.7.2, 4.3, 5.1-5.4, 9.1.1): https://assets.static-bahn.de/dam/jcr:41e78667-8704-4597-a5e3-ab9bff890923/Bef%C3%B6rderungsbedingungen%20der%20DB%20AG%20-%20Stand%2024.09.2026.26e14bfb1285d62bfa4d59401622795e.pdf
- DB, Besondere Internationale Beförderungsbedingungen (SCIC-NRT), Stand 15.09.2026 (Nr. 5.2.3-5.2.4): https://assets.static-bahn.de/dam/jcr:014e140f-e52a-42af-926b-b15e052f6250/Besondere%20Internationale%20Bef%C3%B6rderungsbinguungen%20der%20DB%20AG%20-%20Stand%2015.09.2026.66f973b63d4285d058cf48a95e159e52.pdf
- Current document list: https://www.bahn.de/agb
- DB FAQ, Zugbindung aufgehoben: https://www.bahn.de/faq/zugbindung-aufgehoben-bedeutung
- bahn.de Nutzungsbedingungen: https://www.bahn.de/nutzungsbedingungen ; robots.txt: https://www.bahn.de/robots.txt
- bahn.de Super Sparpreis Europa Österreich: https://www.bahn.de/angebot/sparpreis-flexpreis/super-sparpreis-europa-oesterreich
- DB Bestpreissuche: https://www.bahn.de/service/informationen-buchung/bestpreissuche
- seat61, bahn.de guide: https://www.seat61.com/websites/bahn-de.htm
- ICE-Treff thread on the minimal link: https://www.ice-treff.de/index.php?mode=thread&id=691468
- BetterBahn: https://betterbahn.eu/en ; Business Punk, 16.09.2025: https://www.business-punk.com/drive/bahn-hack-wie-ein-entwickler-die-bahn-austrickst-84-spart-und-eine-app-plant/
- Stiftung Warentest on ticket splitting: https://www.test.de/Bahnfahren-Ticket-Splitting-lohnt-sich-nicht-6249182-0/ ; Tagesspiegel, 10.10.2025: https://www.tagesspiegel.de/wirtschaft/spartipps-und-risiken-lohnt-sich-ticket-splitting-beim-bahnfahren-14526644.html
- Reference session, 26-28.09.2026: own observations on bahn.de (see [../examples/berlin-muenchen-2026-09.md](../examples/berlin-muenchen-2026-09.md)).
