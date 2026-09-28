# Trainline

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- **A cross-check, not a source of its own** [seen 2026-09-26]. Trainline resells other railways' fares. It shows DB and ÖBB fares side by side, which makes it a quick way to confirm an ÖBB tier or to keep working while shop.oebbtickets.at is rate-limited.
- **Never the final DB baseline.** It hides slower trains (in the reference session the ones that carried DB's cheapest 2nd-class fare) and cannot run the seat check. The final baseline comes from bahn.de (see [db-bahn-de.md](db-bahn-de.md)).
- **Links-only fallback.** In a links-only run with nobody to open the links (subagent, workflow or scheduled run), Trainline is the provisional same-train DB price for the fast-set trains: seller 'Trainline (DB)', tagged [seen Trainline list, fee excluded] or, after reading the fare panel, with the fare name. Keep the `s=false` gap, the seat check and the bahn.de fare names under Not checked. Its cheapest DB fare in W is only an upper bound ('at most') for DB's cheapest 2nd class, because slower trains may be hidden ([../method.md](../method.md) §11).
- **A missing ÖBB row is not evidence.** Hamburg -> Kitzbühel on ICE 1185 (seen 2026-09-28 for Fr 02.10.2026) listed only DB fares (Super Sparpreis Europa 139,99 €), while the ÖBB shop sold 62,60 € on the same train. When Trainline shows no ÖBB fare, the ÖBB shop may still have one.

## What it sells

- **DB fares** (domestic and Europa) and **ÖBB fares** in one list, each labelled with the carrier's fare name. Other European carriers too; this playbook covers the DB/ÖBB use, including screening DB Sparpreis Europa ends.
- **ÖBB through-fares from German origins.** Examples seen on 26.09.2026 for travel on 28.09 and 01.10.2026:
  - ÖBB Sparschiene 62,60 € Villach → Berlin, riding ICE 1002 from München (17:19) to Berlin (21:26). That is the same price as the ÖBB shop.
  - ÖBB Sparschiene 105,70 € Berlin → Innsbruck on ICE 1007.
- **Two-ticket splits** now and then. For example it offered Innsbruck → Berlin as a regional single ticket to Kufstein plus a DB Super Sparpreis Young, split at Kufstein [seen 2026-09-26]. A split loses through-ticket rights at the split point (see [db-bahn-de.md](db-bahn-de.md)).

## Fares and conditions

- The underlying carrier's conditions apply: ÖBB Sparschiene rules for ÖBB rows (see [oebb.md](oebb.md)), DB rules for DB rows. Trainline shows the base fare and the upgrades as add-ons, for example 'Semi-Flex +22,10' and 'Flex +191,40' on an ÖBB row [seen 2026-09-26].
- **Booking fee.** It appears only at checkout. The displayed 'Gesamt' (total) may rise at payment. The amount is unverified, so say so whenever a Trainline price is compared with another seller.
- **Travellers.** The deep link encodes each traveller by date of birth, so the age is exact. The /de form shows '1 Erwachsene/r (26-59)' (one adult, 26-59) by default. It accepts discount cards: 'Wir akzeptieren Rabattkarten für SNCF, Trenitalia, Eurostar, Renfe, DB ...' (we accept discount cards for ...).
- **Youth band 0-25.** Trainline labels travellers up to 25 '1 Jugendliche/r (0-25)'; age 25 got DB 'Super Sparpreis Young' [seen 2026-09-28]. DB Young runs up to and including 26. For a traveller aged 26, Trainline may show 'Erwachsene/r (26-59)': check that the fare panel reads '... Young'; if it does not, the Trainline price is not DB's Young price. Compare an adult search or confirm on bahn.de [unverified].
- **Youth on ÖBB rows.** For a traveller aged 19, set by date of birth, the fare panel of an ÖBB row read '1 x Erwachsene/r Sparschiene' (one adult, Sparschiene) [seen 2026-09-26]. That matches the ÖBB tariff, which knows only children and adults for Sparschiene to Germany. Whether a youth price exists on ÖBB fares is unverified.

## Where the lever is

- **Confirming ÖBB tiers.** When the ÖBB shop shows a price, the same connection on Trainline should show the same ÖBB fare. A match raises confidence; a mismatch means one of the two moved, so re-check the offer page.
- **Fallback when ÖBB is rate-limited.** If shop.oebbtickets.at returns HTTP 429 symptoms (see [oebb.md](oebb.md)), Trainline can price the same ÖBB through-ticket from a German origin while the ÖBB tabs rest.
- **Spotting ÖBB fares on routes you had not planned.** Its mixed list can surface an ÖBB fare that the DB list does not show.
- **Screening DB Sparpreis Europa ends.** Screen DB Sparpreis Europa ends here first: deep link O -> foreign end (loc id from [../stations.md](../stations.md) §1b), rows labelled with the DB Europa fare name, `seller` = 'Trainline (DB)'. Spend bahn.de searches only to confirm finalists ([db-bahn-de.md](db-bahn-de.md)). NS International is a second screen for NL/BE ends. Note the booking fee. In deep mode, pass such tasks with seller 'Trainline (DB Europa)'.
- **Not for:** the final DB baseline, slower DB trains, or anything that needs the DB seat check (for the links-only fallback see Status).

## How to search

1. Build the deep link from the verified format below, with [../../scripts/deeplinks.js](../../scripts/deeplinks.js). Look up origin and destination loc ids in [../stations.md](../stations.md). Encode every traveller as `YYYY-MM-DD|pid-N` from the exact date of birth. Where only the age is known, pick a date of birth that gives that age on the travel day.
2. Open it in the skill's own tab, one search at a time.
3. Read the list with [../../scripts/trainline-results.js](../../scripts/trainline-results.js) (one line per row), or with [../../scripts/page-text.js](../../scripts/page-text.js). Not with `get_page_text`: it returned 'No text content found' on the results page [seen 2026-09-28].
4. **Cover W.** One load shows about 4-8 rows, starting about 30 min before `outwardDate` [seen 2026-09-28: about 4 on Köln -> Frankfurt, 8 on Hamburg -> München]. Check that the last row reaches the end of W. For more, open a new deep link with `outwardDate` = the last row's departure + 1 min, or click 'Später' ('Spätere Verbindungen suchen'), which adds about 6 rows. Count each click as a search: at most 3 per search, at least 10 s apart.
5. **Train numbers and fare name.** The list shows no train numbers. Click the row's 2nd-class price: it only selects the row; never press 'Weiter'. Check that `selectedOutward` in the URL changed; if not, click the price by coordinate (a `find` ref click did not select the row twice). Then expand the ChevronDown under 'Ausgewählte Verbindung': the legs read 'Teilstrecke N | dep | station | IC 2445 | arr | station'. 'Teilstrecke 1/2/…' numbers the legs of the journey; it is not a partial ticket. The chevron is a toggle and keeps its state across selections: read before you click it again, and if the panel shows '2 Services verfügbar' instead of a train number, click it once more. Read the fare name under 'Flexibilität und Ticketbedingungen'. The page pre-selects its own cheapest ('Günstig') row, which may not be the one you want [seen 2026-09-28]. Stop there: never click through to checkout or payment, and never log in.
6. If the panel cannot be read, match the row to the DB or ÖBB train by the departure at O and the arrival at D and note `(inferred)` in `warnings`. One SBB via search also prints every key train's number with 'Richtung <terminus>' ([sbb.md](sbb.md)).
7. Record rows in the schema from [../method.md](../method.md) with `seller` = 'Trainline (ÖBB)' or 'Trainline (DB)', so the underlying carrier stays visible. `offer_page_checked` = true means the fare panel was read, not the carrier's own offer page.

## Deep link

Verified format [verified 2026-09-26]. Berlin Hbf (loc 7630) → München Hbf (loc 7480), single, departing after 2026-09-28 04:00, one traveller born 2007-09-26:

```
https://www.thetrainline.com/book/results?origin=urn%3Atrainline%3Ageneric%3Aloc%3A7630&destination=urn%3Atrainline%3Ageneric%3Aloc%3A7480&outwardDate=2026-09-28T04%3A00%3A00&outwardDateType=departAfter&journeySearchType=single&passengers%5B%5D=2007-09-26%7Cpid-0&directSearch=false&transportModes%5B%5D=mixed&lang=de
```

| Parameter | Meaning | Confidence |
|---|---|---|
| `origin`, `destination` | `urn:trainline:generic:loc:<id>`, URL-encoded. Ids are the `id` column of the trainline-eu stations.csv; take rows with `is_suggestable=t`. Table in [../stations.md](../stations.md). | Berlin 7630 and München 7480 [verified 2026-09-26]; Köln Hbf 7561, Frankfurt (Main) Hbf 7604, Arnhem Centraal 8659, Liège-Guillemins 5995, Basel SBB 5878, Strasbourg 153 [verified in live URLs 2026-09-28]; other ids from the CSV [unverified] |
| `outwardDate` | ISO local date-time, URL-encoded | [verified 2026-09-26] |
| `outwardDateType` | `departAfter` | [verified 2026-09-26]; an arrival variant [unverified] |
| `journeySearchType` | `single` | [verified 2026-09-26]; return searches [unverified] |
| `passengers[]` | `YYYY-MM-DD|pid-0`: date of birth plus a passenger index; repeat for more travellers | one traveller [verified 2026-09-26]; several [unverified] |
| `directSearch` | `false` in the verified link | meaning of `true` [unverified] |
| `transportModes[]` | `mixed` | [verified 2026-09-26] |
| `lang` | `de` | [verified 2026-09-26] |
| `splitSave` | `true` was seen in some URLs | meaning [unverified] |

## Reading results and the offer page

- **Each row names the carrier and fare**, for example 'ÖBB Sparschiene' or 'Super Sparpreis Young', in the fare panel of the selected row. Record the carrier in `seller`.
- **No train numbers in the list.** Read them in the 'Ausgewählte Verbindung' panel (How to search, step 5); otherwise match by time and mark `(inferred)`.
- **The first load starts about 30 min before `outwardDate`** and shows about 4-8 rows. On Hamburg -> München the fastest key train, ICE 1185 at 09:21, was not among the first 8 rows (05:34-09:01) [seen 2026-09-28]: open a second link with `outwardDate` = last row + 1 min.
- **'Gesamt' excludes the booking fee.** Treat every Trainline total as "plus an unknown fee".
- **Semi-Flex and Flex appear as surcharges on the base fare**, not as separate rows.
- **Slower trains are hidden.** On Berlin → München it listed only the Sprinters and hid ICE 503, 505, 507 and 509 behind them. Adding a via did not bring them back [seen 2026-09-26]. Never conclude from Trainline that a slower, cheaper DB train does not exist.
- **Class labels.** Some rows are 1st class only. On several ÖBB rows the 1st-class fare was cheaper than the 2nd-class one, which was only Standard [seen 2026-09-26]. Read the class on every row.

## Limits and bot protection

- The binding rules are in [../automation-rules.md](../automation-rules.md): one tab, human pace, read-only, no checkout.
- No bot challenge was seen in the 2026-09-26 browser session, and a WebFetch of https://www.thetrainline.com/de on 2026-09-28 loaded without one. That is no licence to hurry.
- Trainline pulls prices from the carriers. Heavy use here may still add load on DB or ÖBB systems [hypothesis], so count Trainline searches in the same budget.

## Seen in the reference session

Searches on Sat 26.09.2026 for Mon 28.09 (outbound) and Thu 01.10.2026 (return), one traveller aged 19. The full story is in [../examples/berlin-muenchen-2026-09.md](../examples/berlin-muenchen-2026-09.md).

- **Berlin → München.** Only the Sprinters were listed: ICE 1501 Flexpreis Young 145,90 €, the others 1st class only or not available. ICE 503, 505, 507 and 509 were hidden even with a via. So DB's 64,99 € Super Sparpreis Young on ICE 507 was visible only on bahn.de.
- **München → Berlin.** Super Sparpreis Young 68,99 € on most ICEs, the same as bahn.de.
- **ÖBB through-fares from Berlin** matched the ÖBB shop. Villach → Berlin 62,60 € via ICE 1002 was confirmed in the shop as well.
- **Berlin → Innsbruck:** ÖBB 105,70 € on ICE 1007.
- **The 54,00 € tickets** (Berlin → Kitzbühel, Puch b. Hallein → Berlin) were found in the ÖBB shop, not on Trainline. Whether Trainline shows them was not checked.

## Unverified: test before relying on it

- The booking fee amounts.
- Youth handling for ÖBB fares: whether any youth price exists, or the traveller is always priced as an adult.
- The meaning of `splitSave=true`, and whether Trainline's own split suggestions keep the user on the key train.
- Loc ids other than those seen in live URLs (Berlin Hbf 7630, München Hbf 7480, and the 2026-09-28 ids in the parameter table).
- Whether Trainline prices a 26-year-old with DB Young fares.
- The exact text layout that [../../scripts/trainline-results.js](../../scripts/trainline-results.js) expects; it was built from labels the 2026-09-28 test runs reported, not run live.
- Return searches and several travellers in one link.
- Whether every ÖBB ticket end found in the ÖBB shop (for example the Kitzbühel line) can also be bought on Trainline at the same price.

## Sources

- Trainline, German site: https://www.thetrainline.com/de (loaded 2026-09-28)
- Trainline on ÖBB Sparschiene: https://www.thetrainline.com/de-at/bahnunternehmen/oebb/sparschiene
- trainline-eu stations.csv (loc ids, `id` column): https://raw.githubusercontent.com/trainline-eu/stations/master/stations.csv
- Reference session, 26.09.2026: own observations on Trainline (see [../examples/berlin-muenchen-2026-09.md](../examples/berlin-muenchen-2026-09.md)).
