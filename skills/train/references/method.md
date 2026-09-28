# Method

The operational detail behind every phase in [../SKILL.md](../SKILL.md). Sections 0-9 match the phases; 10 and 11 cover budgets and links-only mode. Site-specific click sequences live in the seller playbooks ([sellers/db-bahn-de.md](sellers/db-bahn-de.md), [sellers/oebb.md](sellers/oebb.md) and the others), not here.

Trip terms: O = the station where the user boards, D = the station where the user gets off, W = the time window (departure or arrival), T = the travellers (exact ages and discount cards), K = the class. A key train carries the user from O to D without a change. Ticket ends are the ticket's own from/to stations; they can lie before O or beyond D.

## Record schema

One row per priced option. The same fields are used here, in [../workflows/sweep.js](../workflows/sweep.js) and in the final table.

| Field | Values | Meaning |
|---|---|---|
| `direction` | `out` \| `ret` | outbound or return |
| `key_train` | e.g. `ICE 1507` | the train that carries the user from O to D |
| `user_from` | station | where the user actually boards |
| `user_dep` | ISO local time | departure at `user_from` |
| `user_to` | station | where the user actually gets off |
| `user_arr` | ISO local time | arrival at `user_to` |
| `seller` | e.g. `DB`, `ÖBB`, `Trainline`, `SBB`, `ČD` | whose shop priced the row |
| `ticket_from` | station, spelled as the seller shows it | the ticket's own origin |
| `ticket_to` | station, spelled as the seller shows it | the ticket's own destination |
| `via` | station or empty | the via entered in the search |
| `all_trains` | list as shown | every train on the ticket, in order |
| `changes` | as printed | the change count and stations, e.g. `2 Umstiege: München Hbf, Salzburg Hbf` |
| `direct_on_user_leg` | bool | passes the directness test (§2) |
| `partial_ticket` | bool | the row or offer says 'Teilstrecke', 'Teilstreckenpreis' or 'Ticket nur für Teilstrecke' (not Trainline's leg labels 'Teilstrecke 1/2/…', §5) |
| `class` | `1` \| `2` | the class of the priced offer |
| `fare` | fare name plus `NON-FLEX`/`SEMI-FLEX`/`FLEX`, or the DB fare name | e.g. `Sparschiene NON-FLEX`, `Super Sparpreis Young` |
| `price_eur` | number; `-1` = none | the price in euro; foreign currency converted, with rate and date in `warnings` |
| `price_raw` | label as shown, original currency | e.g. `Sparschiene ab € 54,00`, `6531 Kč`, `Ticket nicht verfügbar` |
| `offer_page_checked` | bool | the price was read on the seller's offer page, not only in the list |
| `db_seat` | `'reservable'` \| `'Zug ausgebucht'` \| `'unknown'` | DB's reservation-only check for the key train (§7) |
| `warnings` | text | peak warnings, reservation failures, currency conversions, anything odd |
| `seen_at` | ISO local time | when the price was read |

Example row, from the worked example ([examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md)):

```json
{
  "direction": "out",
  "key_train": "ICE 1507",
  "user_from": "Berlin Hbf",
  "user_dep": "2026-09-28T11:36",
  "user_to": "München Hbf",
  "user_arr": "2026-09-28T15:43",
  "seller": "ÖBB",
  "ticket_from": "Berlin Hbf",
  "ticket_to": "Kitzbühel Bahnhof",
  "via": "München Hbf",
  "all_trains": "ICE 1507, RB54, CJX 1, IR 811",
  "changes": "3 Umstiege, the first at München Hbf (the other stations were not recorded)",
  "direct_on_user_leg": true,
  "partial_ticket": false,
  "class": 2,
  "fare": "Sparschiene NON-FLEX",
  "price_eur": 54.00,
  "price_raw": "Sparschiene ab € 54,00",
  "offer_page_checked": true,
  "db_seat": "Zug ausgebucht",
  "warnings": "ACHTUNG: Starker Reisetag/Mitfahrt nur mit Sitzplatzreservierung gesichert; ÖBB seat reservation failed at the cart (11149/11154)",
  "seen_at": "2026-09-26"
}
```

The time of day of that reading was not recorded, so `seen_at` carries the date only. Always record the time.

Confidence tags, used on every price and claim in the output and in these references:

- `[verified YYYY-MM-DD]`: seen on the seller's own offer page.
- `[seen YYYY-MM-DD]`: seen in a list view, or a single observation.
- `[reported]`: a third-party source (forum, blog, press).
- `[unverified]`: plausible, not checked.
- `[hypothesis]`: an idea to test.

Prices keep the site's format (54,00 €). Convert foreign currency and state the rate and the date.

## 0. Intake

Parse the request into O, D, date(s), W (departure or arrival), return date and window, T, K, direct-only, seat must-have, refundability and depth mode. Map station names to the spellings the sites expect with [stations.md](stations.md) (bahn.de writes 'Frankfurt(Main)Hbf' with no space). When the user names a city, use its Hbf and say so. Before the DB baseline, read [corridors.md](corridors.md) 'Timetable caveats 2026'. If a caveat moves trains to another station of the user's city (e.g. Berlin Gesundbrunnen, EVA 8011102, for the Polish ECs June-December 2026), run the baseline from that station too and say so.

Ask ONE compact block, only for items that are missing and change the result. For example:

> Before I search: (1) exact age of each traveller? (2) any BahnCard 25/50/100, Deutschlandticket, ÖBB Vorteilscard, Swiss Halbtax/GA or Interrail/Eurail pass? (3) direct trains only? (4) is a reserved seat a must? (5) must the ticket be refundable? (6) quick, standard or deep search? (7) what time window, and is it for departure or arrival? (8) the bahn.de notice from SKILL.md, always last.

Wait for the answer to the bahn.de notice; no answer, or an unclear one, means links-only for bahn.de. If nobody can answer at all (subagent, workflow or scheduled run), see §11, 'Unattended runs'.

Defaults when the user skips a question: 2nd class; one-way unless a return date is given; direct only when T* (§2) is 2 h or more; no cards; seat and refund not required; standard mode. Print them in one line, e.g. `Defaults used: 2nd class · one-way · direct only (T* over 2 h) · no cards (assumed) · standard mode`. Also:

- **Direct-only under 2 h:** changes are allowed, but the direct trains stay the key trains whenever W holds at least one; connections with changes become key connections only when W has no direct train (§2).
- **Cards and passes:** none unless the user names one; show 'no cards (assumed)' in the header, also when the ages are known.
- **Dates:** resolve weekday names and heute/morgen/übermorgen against today (run `date`); always print the absolute date, e.g. Fr 02.10.2026.
- **Window:** "ab HH" = departures HH:00 to HH:00 + 4 h; "früh/morgens" = departures 05:00-09:59; "vormittags" = 08:00-11:59; "nachmittags" = 12:00-17:59; "an bis HH" = arrivals from HH - 3 h to HH.
- **Arrival windows:** `hza=A` is unverified, so search with `hza=D` from (the arrival limit minus the longest direct trip time) and keep only arrivals in W.
- **Travellers:** if ages are still unknown after the one question block, assume 1 adult aged 27-64 without cards, and show that in the header.

What each answer changes:

- **Exact age.** DB Young fares (Super Sparpreis Young, Sparpreis Young, Flexpreis Young) are for travellers up to and including 26, counted on the day travel starts; they are 2nd class only. Children aged 6-14 travel free on DB with a person aged 15 or older. Senior fares follow DB's current terms. Trainline encodes the date of birth. The ÖBB shop asks for the age: a 19-year-old showed as '1 x Jugendliche:r ohne Ermäßigungen' ('1 x youth without discounts'), and the 54,00 € fares were seen for that profile. Whether an adult (27+) pays the same ÖBB price is [unverified].
- **Cards.** A BahnCard 25/50 lowers DB prices, so it moves the baseline; on DB Sparpreis Europa it gives only 25 % off the German part. A BahnCard 100 already covers DB trains in Germany, so ask what the user wants (usually only the seat check). A Deutschlandticket matters for regional legs, splits and WESTbahn's DeutschlandPlusTicket, which is sold only to its holders. The effect of an ÖBB Vorteilscard on Sparschiene fares is [unverified]; set it where the ÖBB shop asks.
- **Interrail/Eurail pass.** Skip Phases 3-6; run only the seat check and reservation prices.
- **Swiss Halbtax/GA.** Set the SBB reduction accordingly and note that Sparbillette cannot be combined with it ([sellers/sbb.md](sellers/sbb.md)).
- **Direct-only** switches the directness test (§2) on.
- **Seat must-have** turns §7 from a column into a filter.
- **Refundability** removes train-bound, non-refundable fares (ÖBB Sparschiene NON-FLEX, DB Super Sparpreis) from the recommendations; they stay in the table as information.
- **Depth mode** sets the budget (§10).

Then record the bahn.de choice, load the Chrome tools with the single ToolSearch (`max_results` 9), call `tabs_context_mcp` once with `createIfEmpty: true`, and use the empty tab it created (SKILL.md, 'Before the first page load') or create your own tab(s). No Chrome (no `mcp__claude-in-chrome__` tools, or `tabs_context_mcp` errors): go to §11 for every seller.

## 1. DB baseline

bahn.de, one tab, 10 s or more between searches, about 20 searches per session at most. Click sequences: [sellers/db-bahn-de.md](sellers/db-bahn-de.md).

1. **Build the deep links** with [../scripts/deeplinks.js](../scripts/deeplinks.js) (Read it first; it runs in node or pasted into `javascript_tool`). The verified compact form, Berlin Hbf -> München Hbf, one traveller aged 19, 2nd class, departing after 10:00, 'Schnellste Verbindungen' off:

   ```
   https://www.bahn.de/buchung/fahrplan/suche#sts=true&so=Berlin%20Hbf&zo=M%C3%BCnchen%20Hbf&kl=2&r=9:16:KLASSENLOS:1&soid=A%3D1%40O%3DBerlin%20Hbf%40L%3D8011160%40&zoid=A%3D1%40O%3DM%C3%BCnchen%20Hbf%40L%3D8000261%40&sot=ST&zot=ST&soei=8011160&zoei=8000261&hd=2026-09-28T10:00:00&hza=D&hz=%5B%5D&ar=false&s=false&d=false&fm=false&bp=false&dlt=false&nfv=false&dltv=false
   ```

   | Parameter | Observed meaning |
   |---|---|
   | `so`, `zo` | origin and destination names |
   | `soid`, `zoid` | station IDs; required, the page errors without them |
   | `soei`, `zoei` | EVA numbers (Berlin Hbf 8011160, München Hbf 8000261; others in [stations.md](stations.md)) |
   | `kl` | class, `1` or `2` |
   | `r` | travellers. `r=9:16:KLASSENLOS:1` appeared when a 19-year-old was set (9 = youth 15-26 and 16 = no discount card, both likely). `r=13:16:KLASSENLOS:1` is the default adult. All other codes are [unverified] |
   | `hd` | date and time, ISO |
   | `hza` | `D` = departure. `A` for arrival is [unverified] |
   | `ar` | `true` = 'Nur Sitzplatz buchen' (reservation only, §7) |
   | `s` | `true` = 'Schnellste Verbindungen anzeigen' on; `false` = off |

   Where no verified traveller code exists (children, seniors, cards, groups), set the travellers in the UI once and reuse the URL the site writes.

2. **Search twice**: first `s=true`, then `s=false`. With the fastest-only filter on, bahn.de hides slower non-Sprinter trains. In the worked example DB's cheapest 2nd class, ICE 507 at 64,99 €, appeared only with `s=false` [seen 2026-09-26].
3. **Read the list** with [../scripts/db-results.js](../scripts/db-results.js). List labels to note: an 'ab' price, 'nur 1. Kl' (1st class only), 'Zug ausgebucht' (train fully booked), 'Ticket nicht verfügbar', 'Teilstreckenpreis' (the price covers only part of the route), 'Preis ermitteln' (part of the route uses trains DB cannot price directly), 'Außergewöhnlich hohe Auslastung erwartet' (exceptionally high load expected).
4. **Open the offer page** ('Angebotsauswahl') for the 1-3 cheapest trains to read the fare names and conditions, then go back. Example, ICE 507: Super Sparpreis Young 74,99 € (Zugbindung, Stornierung ausgeschlossen, kein City-Ticket: train-bound, no cancellation, no city ticket), Sparpreis Young 83,99 €, Flexpreis Young 145,90 € [verified 2026-09-27]. Do not go past the offer page.
5. **Ignore 'ab' prices bundled with a BahnCard purchase.** On Berlin -> München bahn.de showed 'ab 48,74'; that price assumed buying a BahnCard at the same time.
6. **Later trains:** open a new deep link with a later `hd`. Never page with 'Spätere Verbindungen' in a loop: paging after about 25 calm searches triggered 'Fehler 751' ('your browser behaves like a bot') and blocked every further search that day.
7. **Record** two things, as rows with `seller: DB`:
   - For each key train in W: DB's same-train price per class, or 'Zug ausgebucht' / 'nur 1. Kl' with the 1st-class price.
   - The cheapest DB 2nd-class fare on ANY train or connection in W, fast or slow; flag a connection with changes when direct-only is on. This is the honest comparison point.
8. At the first error page ('Fehler 751', 'Access Denied'), stop using bahn.de for this session and switch it to links-only mode (§11). Never retry, never clear cookies, never call `/web/api` or any other endpoint: one direct call to `/web/api` returned OPS_BLOCKED and got the browser blocked.
9. **Unattended links-only run** (§11): no bahn.de read at all. Build the links for Not checked and take the same-train prices from Trainline (seller 'Trainline (DB)', fare name from the fare panel, [sellers/trainline.md](sellers/trainline.md)). Its cheapest DB fare is an upper bound for DB's cheapest 2nd class, because Trainline hides some slower trains.

## 2. Key trains and the fast set

**Key trains** run O -> D with no change. If the user explicitly allows changes, use the DB connections in W as key connections too; a seller row then must use the same trains between O and D and may change only where that connection changes. Under the default for trips under 2 h (§0), the direct trains stay the key trains whenever W holds one.

**No DB list** (links-only, nobody pasted one): take the key trains from the Trainline (DB) list, with train numbers from its 'Ausgewählte Verbindung' panel ([sellers/trainline.md](sellers/trainline.md)), or from the first ÖBB O -> far-end search: rows whose first train is a direct ICE/IC and whose first change is at D. Read the arrival at D from 'Reisedetails', or from Trainline by departure time. Mark the list 'not from bahn.de'.

**No direct train in W.** Say so, list the nearest direct trains before and after W with their times, and ask once: widen W to them, or allow one change. With one change, the key connection is O -> X -> D and a seller row must use the same two trains. Without an answer, use the nearest direct trains and flag them 'outside window'.

**Regional-only pairs.** If every fast-set train between O and D is regional (RE/RB/S, product class C): report the regional fare and whether the Deutschlandticket (or a Länderticket) covers the trip. Mark it 'no contingent fares, no through-ticket lever' and skip Phases 3-6. If regional and long-distance trains mix, price only the long-distance key trains through Phases 3-6 and list the regional options as anchors.

**Fast set.** T* = the fastest O -> D duration in W. The fast set is every key train with duration <= T* + max(15 min, 10 % of T*).

Worked example: in the arrival window up to about 16:30, T* = 4:07 (ICE 1507, 11:36 -> 15:43). The limit is 4:07 + max(15, 24.7) min = 4:31. ICE 507 (10:29 -> 15:08, 4:39) is outside the fast set; it appears only as DB's cheapest 2nd class and in a 'slower but cheaper' line when it beats the best fast option.

**Directness test** for every seller row: between the user's boarding station and exit station for that direction, the user rides exactly one long-distance train, the key train. The ticket may change trains at the boarding station or anywhere before it, and at the exit station or anywhere after it, but never strictly between them. On the return the boarding station is the outbound D (e.g. München Hbf) and the exit station is the outbound O. When changes are allowed and the key connection has changes, the key connection is the DB connection with its change(s): a seller row qualifies if it uses the same trains between O and D and changes only where that connection changes. The rule depends on the ticket's shape, not on the trip direction: it also covers an outbound ticket that starts before O (boarding late) and a return ticket that runs past the exit station.

Real rows from the ÖBB list for Berlin -> Austria:

- `ICE1003, RJX65, IC795 | 2 Umstiege: München Hbf, Salzburg Hbf` is direct: the user rides ICE 1003 from Berlin to München and gets off at the first change.
- `ICE1005, ICE505, RJ87 | 2 Umstiege: Nürnberg Hbf, München Hbf` is NOT direct: it changes in Nürnberg, before München.
- A ticket starting before O, e.g. Arnhem -> Berlin with its only change at Köln Hbf, passes for O = Köln: the change is at the boarding station [hypothesis, shape example].

Return example: Kitzbühel -> Berlin Hbf with fixed trains 'IR 612, REX 2, RB54, ICE 1508' [verified 2026-09-26]. The user boards ICE 1508 in München; the row passes only if the change list shows ICE 1508 being boarded at München Hbf or earlier and no change after München.

When the change stations are not printed, open 'Reisedetails' (journey details). Record them in `changes`.

## 3. Where the key trains go

1. **Find each key train's full run**, from any of:
   - (a) bahn.de connection details or the train's stop list (the exact UI label is [unverified]);
   - (b) the per-station times in ÖBB 'Reisedetails' (in background tabs the dialog can render empty until a screenshot forces a render);
   - (c) the line tables in [corridors.md](corridors.md);
   - (d) a confirmation search O -> candidate terminus that shows the same train number with 0 changes;
   - (e) the SBB timetable list: one via search O -> Basel SBB via D shows each train's number and 'Richtung <terminus>' per card, e.g. 'ICE 79 11, Richtung Frankfurt (Main) Hbf' = ICE 11 on line 79, ending at D [seen 2026-09-28] ([sellers/sbb.md](sellers/sbb.md));
   - (f) on ČD, the train labels in a result card's 'Detail', e.g. 'rj 173 railjet (Kiel Hbf – Dresden Hbf)' [seen 2026-09-28] ([sellers/cd.md](sellers/cd.md)).
2. **List the continuations the ticket can use**: (a) the key train itself running past D, or a train leaving D in the direction AWAY from O that reaches a carrier-change point from [corridors.md](corridors.md) within about 3 h of travel after D; (b) for the return or for boarding late, a train that comes from abroad and reaches O within about 3 h of travel before O. Either must be a train the seller can combine with the key train on the same day. A border near O or D that the trip moves away from does not count. From München these were the Salzburg line, the Kufstein line, Lindau, Garmisch/Außerfern and, via Regensburg, Furth im Wald.
3. **Key insight: no border on the key train is needed.** Sellers price whole through-journeys, including purely domestic feeder trains. ICE 1507 runs only Berlin -> München, yet ÖBB sold it inside a Berlin Hbf -> Kitzbühel through-ticket (ICE 1507, RB54, CJX 1, IR 811) at 54,00 € [verified 2026-09-26]. So the candidate set is every train that can feed a journey some foreign seller prices, not only cross-border trains.
4. **List origins before O** as well: for the return (a ticket from beyond the border via D to O, boarding at D), and for boarding later on the outbound trip when the key train comes from abroad (e.g. a ticket from Basel SBB for an ICE the user boards in Frankfurt) [hypothesis].
5. **Map each continuation to its tariff and carrier-change point** with [corridors.md](corridors.md). DB's international conditions count Salzburg Hbf, Kufstein, Basel Bad Bf with the Hochrheinbahn, and the Außerfernbahn as DB-domestic stations, so a ticket to them is priced at DB fares or refused. The ticket must end beyond those points and beyond the point where one railway hands over to the next. In the worked example, Reutte and Ehrwald (Außerfernbahn) came back as 'DB-Tarif' rows at 81,99-367,20 € [seen 2026-09-26].

## 4. Hypothesis generation

A hypothesis = seller + ticket_from + ticket_to + via (+ traveller setting). Build 3-8 per corridor.

**Ticket-end families**, in this order:

1. The 2-3 stations just past the tariff point.
2. Stations along the line and its branches.
3. Hubs.

München -> Salzburg line: Salzburg-area stations other than Salzburg Hbf, i.e. Salzburg Mülln-Altstadt [reported] and Salzburg Süd, then Puch b. Hallein and Hallein; along the line Bischofshofen, Schwarzach-St. Veit, Zell am See, Villach; hubs Linz, Wien, Graz. München -> Kufstein line: past Kufstein come Wörgl, then the Kitzbühel line (Hopfgarten, Westendorf, Brixen im Thale, Kirchberg, Kitzbühel, St. Johann, Fieberbrunn, Hochfilzen), Jenbach, Innsbruck.

**Via** = D on outbound tickets, so the route passes through the user's station; on return tickets set it to D (the user boards there) and, if the routing still misses O, add O.

**Via-feeder technique.** Put the via at a small station on a regional line out of D that the seller's default routing does not use. This forces a different feeder train, and the seller then combines different contingents (why the price changes is [unverified]; that it changes was seen). Session results [seen 2026-09-26]:

- Via 'Bernau a Chiemsee' (on the München-Salzburg regional line) gave 62,60 € to Bischofshofen / Schwarzach-St. Veit / Villach / Zell am See on ICE 1503 and ICE 1505, where default routing had only 1st class.
- Via 'Oberaudorf' (on the München-Rosenheim-Kufstein regional line) gave 62,60 € to Kitzbühel / Zell am See / Innsbruck on ICE 1003.

Pick 1-2 such stations per line out of D: a regional stop between D and the tariff point that the long-distance trains skip. Via-feeders are evidenced only on ÖBB; elsewhere run them only in deep mode or when budget remains.

**Reverse-direction tickets.** For the return, price a ticket from an origin beyond the border to O via D; the user boards at D. Worked example: Puch b. Hallein -> Berlin Hbf, 54,00 € on ICE 1006, 1506, 504 and 1004 [verified 2026-09-26] and ICE 1002 [seen 2026-09-26], boarding in München.

**Seller-independent levers**, always on the list:

| Lever | Prior | Evidence |
|---|---|---|
| DB with 'Schnellste Verbindungen' off (`s=false`) | high | the only way DB's cheapest 2nd class (ICE 507) showed up [seen 2026-09-26] |
| Young (up to and including 26) or Senior fare, by exact age | high when the age fits | changes the baseline; Young is 2nd class only |
| DB Sparpreis Europa to the first station past the border, same train | medium | floor prices in DB's international conditions (01.08.2026) run from 14,99 € (CZ) to 28,99 € (DK); via München on 28.09 DB asked 139,99 € (Innsbruck), 148,40 € (Salzburg), 227,55 € (Villach) [seen 2026-09-26]. Needs at least one ICE/IC/EC leg in Germany; not offered for transit through Germany |
| Split ticket at 1-2 major intermediate stops | low; try only when the same-train price is high | Stiftung Warentest (testing 23-24.09.2025) found only 7 of 30 splits cheaper, each by a few euros; splits lose through-ticket passenger rights at the split point. Procedure: [sellers/db-bahn-de.md](sellers/db-bahn-de.md), 'Domestic-only playbook' |
| One station beyond D on DB | low [hypothesis] | not tested in the session. Procedure: [sellers/db-bahn-de.md](sellers/db-bahn-de.md), 'Domestic-only playbook' |
| Other stations in the same city (e.g. Berlin Gesundbrunnen, Spandau) | low | for the Berlin -> München trip, making the German end longer (a ticket starting in Hamburg, Rostock or Gesundbrunnen, or ending in Hamburg-Altona or Spandau) never beat the Berlin-origin fare. That says nothing about trips that really start elsewhere: for Hamburg -> München, price Hamburg Hbf -> Puch b.Hallein / Kitzbühel Bahnhof, Via München Hbf, as in the Berlin case |
| Separate-train anchors: WESTbahn, Nightjet, FlixTrain | route-dependent | a different train, so compare it on its own speed; see [sellers/westbahn.md](sellers/westbahn.md), [sellers/oebb.md](sellers/oebb.md), [sellers/other-sellers.md](sellers/other-sellers.md) |

**Screen DB Sparpreis Europa ends on Trainline first** (deep link O -> foreign end, loc id from [stations.md](stations.md); rows labelled with the DB Europa fare name; seller 'Trainline (DB)'). Spend bahn.de searches only to confirm finalists. NS International is a second screen for NL/BE ends. Note the Trainline booking fee.

**Economic gate** (same rule as SKILL.md Decision rules): before sweeping a corridor whose only same-train sellers resell DB fares or have no seen or verified undercut (DB Sparpreis Europa, NS, SNCB, SNCF, DSB, PKP, ČD from German origins), compare DB's same-train 2nd-class price on the key train with that country's Super Sparpreis Europa floor ([corridors.md](corridors.md); Young column for age 26 or under). If DB same-train <= floor + 5 € and the train is not 'Zug ausgebucht' / 'nur 1. Kl', skip that corridor for that train and print 'skipped: DB already at or below the Europa floor'. ÖBB corridors and corridors with [seen]/[verified] undercuts are exempt. If DB same-train is unknown (bahn.de links-only), use the Trainline (DB) price for the gate and tag the decision [gate on Trainline price].

**Ranking score** (a heuristic, not measured): seller prior x extension x evidence.

- Seller prior: ÖBB 5, DB Sparpreis Europa 4, SBB 3, ČD 2, NS 1 (it resells DB Europa fares, so it adds nothing once DB Europa is checked), SNCF / DSB / PKP 1 [unverified].
- Extension: one of the 2-3 stations just past the tariff point 3; further along the line 2; hub 1.
- Evidence: seen or verified on this corridor 3; reported 2; hypothesis 1.

Run the highest scores first.

**Cost rule.** One seller search, plus at most 3 'Spätere Verbindungen' clicks, covers about 3-4 h of departures. Start at the beginning of W (not 04:00) and run one more search per further 3-4 h of W. Cost = ticket ends x vias x ceil(W length / 4 h), not x trains: 5 ticket ends x 2 vias over a 4 h window = 10 searches for every key train in it.

Worked examples for other routes: [examples/route-hypotheses.md](examples/route-hypotheses.md).

## 5. Sweep loop

For each search, in one tab:

1. **Set the travellers.** ÖBB resets them between sessions, so check them before EVERY search; the box must read the right category (e.g. '1 x Jugendliche:r ohne Ermäßigungen' for a 19-year-old). On ÖBB the passenger box appears only after From/To are filled and the age counts on the date in the form, so there set the travellers after steps 2-3 ([sellers/oebb.md](sellers/oebb.md)). ČD resets its passenger form after every new search too ([sellers/cd.md](sellers/cd.md)).
2. **From / To / Via.** Pick the exact suggestion entry, not the first near match ([stations.md](stations.md) has the spellings).
3. **Date / time.** Start of W, with the right departure/arrival toggle.
4. **Search.**
5. **Wait** for the list. A security check that passes by itself (ÖBB's took about 10 s) is fine; one that has not cleared within about 20 s goes to the user.
6. **Run the extractor.** ÖBB: [../scripts/oebb-results.js](../scripts/oebb-results.js). Trainline: [../scripts/trainline-results.js](../scripts/trainline-results.js). Sellers without one: [../scripts/page-text.js](../scripts/page-text.js). Read the file first. Keep awaited loops short: `javascript_tool` calls time out after about 45 s, so ÖBB takes at most 3 'Spätere Verbindungen' clicks per call. Keep returns short too: `javascript_tool` cuts a result after about 1,200 characters ('[TRUNCATED]') [seen 2026-09-28], so page with the scripts' START/END/SKIP or FROM/TO settings.
7. **Record** one row per connection in the schema. 'Ticket nicht verfügbar' or no price = `price_eur: -1`.
8. **Next.** bahn.de: 10 s or more between searches. ÖBB: one search at a time per tab, at most 2-3 ÖBB tabs across everything.

Click sequences per site: the seller's playbook under `sellers/` (e.g. [sellers/oebb.md](sellers/oebb.md)). Traps: [pitfalls.md](pitfalls.md), notably the ÖBB 'Teilstrecke' note that precedes its connection in the page and was once assigned to the wrong row.

**Discard:**

- partial tickets ('Teilstreckenpreis', 'Ticket nur für Teilstrecke', or an ÖBB/DB 'Teilstrecke' note). On Trainline, 'Teilstrecke 1/2/…' numbers the legs of a journey and is not a partial ticket;
- rows that fail the directness test;
- the wrong class. On ÖBB a list button labelled '1. Klasse' usually meant 2nd class was gone for that combination.

Keep rows that only offer Standard / FLEX (about 218-236 € on ÖBB in the session) as information, unless nothing cheaper exists.

**Price tiers are contingent levels, not time-of-day effects.** The same ticket end costs the same on trains hours apart when the same tier is open. ÖBB Sparschiene tiers seen on 26-27.09.2026: 54,00 / 62,60 / 77,20 / 86,90 / 96,20 / 105,70 / 115,40 / 130,00 / 144,30 €. A row at 54,00 € is at the lowest tier seen; the gap-fill (§6) hunts for more rows at the lowest tier.

**Corridor stop rule.** After 3 ticket ends in a row that return no saver fare, only DB tariff, or no price below DB's same-train price, move on to the next corridor. On a resold-fare corridor (DB Europa, NS), also move on after the first end whose price exceeds DB's same-train price by more than 10 €: on 28.09.2026 every Europa end tried from Berlin, Köln and Hannover cost more than the domestic fare on the same train (36,99-151,70 € against 30,99-48,99 €) [seen 2026-09-28]. 'Prices do not rise with distance' (§6) is evidenced only for ÖBB contingents. After HTTP 429, a search click that does nothing, or a sudden 'Keine Reise gefunden' ('no journey found'), wait 40-60 s, re-confirm the travellers and search once more. The first block page ends that site.

## 6. Gap-fill (completeness critic)

After the first pass, list the gaps and run ONE targeted round. Run a second round only if the first found a new lower tier.

- [ ] **Neighbours on both sides** of every cheap ticket end. Prices do not rise with distance. On the same trains: Kitzbühel 54,00 €, Zell am See 62,60 €, Salzburg Süd 77,20 €, and outbound Wörgl had no Sparschiene on those trains [seen 2026-09-26].
- [ ] **Each cheap end on every other key train.** Puch b. Hallein gave 54,00 € on ICE 1003 [verified 2026-09-26] and on ICE 1509, 1101 and 1601 [seen 2026-09-27].
- [ ] **Via-feeders** for key trains that still have no cheap 2nd-class option (§4).
- [ ] **The opposite direction** (reverse tickets for the return, §4).
- [ ] **Windows not yet covered**, including the edges of W.
- [ ] **One retry** for each target that errored (429, empty list, timeout).

In the reference session the cheapest ends, the Kitzbühel line and Puch b. Hallein, turned up only in this round.

## 7. Seat reality

1. **Check on bahn.de without buying.** Build the O -> D deep link with `ar=true` ('Nur Sitzplatz buchen', 'book seat only') and read it with [../scripts/db-results.js](../scripts/db-results.js) in reservation mode. Each train shows either '5,50 € Sitzplatzreservierung' (seats left) or 'Zug ausgebucht'. Fill `db_seat` for every key train.
2. **A DB reservation** costs 5,50 € (2nd class) or 6,90 € (1st) per person and direction. It is a separate product that works with any valid ticket, including a foreign seller's through-ticket. Book it from the station where the user actually boards: a DB reservation lapses if the seat is not taken within 15 minutes after the train leaves the station the reservation starts from (DB BB Nr. 5.1). Its fee is refunded only if the seat could not be provided, or could not be used because of a delay.
3. **A seller's own reservation** (ÖBB: +3,00 € checkbox on NON-FLEX; included in SEMI-FLEX where available) can fail only at the cart, after the passenger name is entered: ÖBB errors 11149 ('gewünschter Sitzplatz ... nicht verfügbar', 'requested seat not available') and 11154 ('... Platzlage ...', 'seat position'), even in 1st class. Never test that in automation. Report 'seat not guaranteed'.
4. **Foreign-operated key trains** (ČD railjet, DSB ECE, SBB ECE, TGV): DB's `ar=true` result is [unverified]; check the operator's own seat map where its playbook shows one. Where a reservation is compulsory for the ticket (ČD EC/RJ in summer, DSB 26.06-16.08, cross-border TGV, ECE to Italy), add it to `price_eur`.
5. **Peak warnings**: 'Außergewöhnlich hohe Auslastung erwartet' (DB) and 'ACHTUNG: Starker Reisetag/Mitfahrt nur mit Sitzplatzreservierung gesichert' (ÖBB: 'heavy travel day, a place on the train is assured only with a seat reservation'). Put them in `warnings` and in the output.

Worked example [seen 26-27.09.2026]: on the Oktoberfest Monday every Sprinter (ICE 1003, 1503, 1005, 1505, 1007, 1507, 1009, 1509) and ICE 1101 showed 'Zug ausgebucht'; the non-Sprinter ICEs 503, 505, 507, 509, 601, 1601, 603, 1103 and 1603 were still reservable. The seat-safe cheap combination was ICE 1601: ÖBB 54,00 € + DB reservation-only 5,50 €, a derived combination that was not purchased.

## 8. Verify the finalists

For the top 3-5 rows per direction, just before presenting. Try to refute each one: assume it is wrong and look for the reason.

1. Open a fresh search for exactly that ticket (travellers set again), not a tab left over from the sweep.
2. Open the offer page (ÖBB: read it with [../scripts/oebb-offer.js](../scripts/oebb-offer.js)) and confirm:
   - [ ] the price, within 1 €;
   - [ ] the fare and its flexibility level (NON-FLEX / SEMI-FLEX / FLEX, or the DB fare name);
   - [ ] the ticket's fixed trains include the key train;
   - [ ] the seller's offer or fare detail shows the ticket's full origin and destination, with no 'Teilstrecke';
   - [ ] directness and class;
   - [ ] the traveller category;
   - [ ] the reservation option, and the DB seat check from §7.
   Where each seller shows the trains and the route: ÖBB, 'Verkehrsmittel sind fix: ...' and the route line 'X › Y'; DB and NS, the train list on the offer page; SBB, the trip details; ČD, the expanded 'Detail' train list (the fare name is not shown before 'koupit', so it stays unavailable read-only); DSB, the departure the Orange fare is bound to. A check the seller page cannot show is listed as unavailable, not failed.
3. Stamp `seen_at` and set `offer_page_checked: true`.
4. If the price moved by more than 1 €, re-price and re-rank. If the offer is gone, drop the row and say so.

Never click 'Angebot wählen' or anything past the offer page. A price is final only if read on the offer page within about 60 min: on 27.09.2026 ÖBB's 1st-class price for ICE 1507 went from 94,60 € to 130,00 € within an hour.

## 9. Present: table assembly

Use the output format in [../SKILL.md](../SKILL.md).

- **Rows:** one row per key train in W, sorted by departure; plus, flagged in the Train cell, (a) the train carrying DB's cheapest 2nd class in W when it is outside the fast set ('slower'), (b) any train outside W that a recommendation uses ('outside window'), and (c) when direct-only is on, the cheapest DB connection with changes in W if it is cheaper than every key train ('<n> change(s)'). No other extra rows.
- **DB same train (source):** DB's price in class K, or 'Zug ausgebucht', or '2nd sold out; 1st <price>', with its source: bahn.de, Trainline (DB) or user. The header says 'bahn.de: read', 'links-only' or 'unattended: Trainline (DB) proxy'.
- **Seat left (DB):** from §7; 'not read (links-only)' when nobody opened the `ar=true` link.
- **Slower but cheaper:** one line under 'Cheapest DB 2nd class', only when a seller row or DB fare on a slower, non-key connection beats the best fast-set row: trains, dep -> arr, duration, changes, seller, ticket, price.
- **Cheapest found:** the cheapest qualifying row for that train, with its tag.
- **Ticket to buy:** seller, fare, ticket_from -> ticket_to, via, and where to get off or board.
- **Savings both ways**, in € and %: against DB on the same train, and against the cheapest DB 2nd class on any train in W. Worked example: 54,00 € vs 337,50 € (-84 %, but 2nd class against DB's 1st, because DB had no 2nd class left), and 54,00 € vs 64,99-74,99 € (-17 % to -28 %). Name every class mismatch. A saving under about 5 % of the price or under 2 €, whichever is larger, is within the currency and fee noise: say so.
- **Slower rows:** the 'slower' row carries its extra travel time in the Time cell.
- **Levers tried and Verdict:** one line per lever (seller, ticket ends, via, outcome, number of searches), including 'no saver fare', 'DB tariff', 'blocked' and 'skipped: economic gate'; then one Verdict line. When no seller row beats DB, Cheapest found = DB's fare and How to book uses the bahn.de deep link.
- **Recommendations:** best price; best with a seat (a seller ticket plus DB reservation-only counts, if §7 shows seats); most flexible.
- **How to book:** numbered steps from the seller's playbook, ending with 'You click buy; I don't.'
- **Read before you buy:** the items from [tariff-rules.md](tariff-rules.md) that apply to the recommended tickets, always including train binding, early exit / late boarding, named ticket and ID, and delay rights counting at the ticket's destination.
- **Not checked / unverified:** every price not read on an offer page in the last ~60 min, every [hypothesis] or [unverified] item used, and every combination that was derived rather than seen.

## 10. Budgets and modes

| Mode | Scope | Searches | Time |
|---|---|---|---|
| quick | DB baseline plus the best 1-2 corridors x 3 ticket ends; no gap-fill | about 15 | roughly 20 min (estimate, not measured) |
| standard | every corridor in the SKILL.md seller table for the key trains, one gap-fill round, the seat check and verification | about 40 | roughly 1 h (estimate, not measured) |
| deep | [../workflows/sweep.js](../workflows/sweep.js) through the Workflow tool, only after the user explicitly opts in | per task list | hours |

Count every submitted search and every loaded deep link. bahn.de stays at about 20 searches per session in every mode. In deep mode the default is 3 agents, at most 2 of them on ÖBB; the reference sweep used 9 agents, took about 2.7 h (the only measured run) and triggered HTTP 429 that also slowed the user's own booking. Everything on bahn.de always stays in the main session.

**bahn.de budget** (about 20 searches per session, split up front):

| Use | Searches |
|---|---|
| Baseline: `s=true` / `s=false` x outbound / return | 4 |
| Offer pages for fare names | up to 3 |
| Seat check (`ar=true`, outbound and return) | 2 |
| DB Sparpreis Europa finalists (screened on Trainline first; one search per ticket end covers about 3-4 h of W) | up to 8 |
| Domestic levers (extended ends, split) | up to 3 |
| Total | up to 20 |

## 11. Links-only mode

Used when the user chose it for bahn.de, when Chrome is not connected, or when a site blocked the browser.

1. Build the links with [../scripts/deeplinks.js](../scripts/deeplinks.js): bahn.de (`s=true`, `s=false`, and `ar=true` for the seat check), Trainline and SBB. These formats were verified first-hand on 26.09.2026.
2. For sellers without a verified shareable link (ÖBB; ČD results are session-bound URLs), give exact manual steps from the playbook: site, traveller setting, from / to / via, date and time, what to look for.
3. Batch the links and steps in one message, numbered, one line each.
4. Ask the user either to paste the visible results list (select the list, copy, paste), or to allow ONE read of a tab they opened themselves. That read is the only exception to 'never read a tab you did not create', and it needs their explicit yes each time.
5. Parse what comes back with the same rules (§5 discard, §2 directness), tag it `[seen <date>]` with the user as the source, and continue with the other sellers.

At human pace this is slower, so trim the hypothesis list to the top scores (§4) and say which were skipped.

**Unattended runs** (subagent, workflow or scheduled run: nobody can answer the notice or open a link). bahn.de stays links-only. Take DB prices from Trainline fare panels as seller 'Trainline (DB)', tag the header and every DB cell 'proxy, not bahn.de', and use that proxy for the fast set, the economic gate (tag [gate on Trainline price]) and both comparisons. List the unopened bahn.de links (`s=true`, `s=false`, `ar=true`) under 'Not checked', and say that slower DB trains may be missing and that DB fare names and seats were not read. In the output: Seat left (DB) = 'not read (links-only)'; Cheapest DB 2nd class = 'at most <price> (Trainline (DB); slower DB trains not checked)', or 'not determined' when Trainline showed no DB fare. The domestic-only levers (extended ends, split) can be screened on Trainline the same way ([sellers/db-bahn-de.md](sellers/db-bahn-de.md), 'Domestic-only playbook' step 7). Other sellers run as usual in the skill's own tab.
