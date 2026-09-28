Prices seen 26-27 Sep 2026. Observations, not promises.

# Worked example: Berlin Hbf -> München Hbf, Monday 28.09.2026

This is the real session the skill was built from. Use it as the pattern for how the method finds a fare, checks it, and reports it honestly. The numbers belong to one date, one traveller and one set of contingents; they will not repeat. The method is in [../method.md](../method.md), the corridor data in [../corridors.md](../corridors.md).

Tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or one observation; [reported] = third-party source; [unverified]; [hypothesis]. "Sprinter" means the fast ICE 10xx/15xx trains (and ICE 1101 on this date) with few stops; ICE 1601/1603 were not Sprinters.

## 1. The request

- **Date:** Monday 28.09.2026, during the Oktoberfest.
- **Route:** O = Berlin Hbf, D = München Hbf.
- **Window:** arrive about 15:00; up to about 16:30 acceptable.
- **Traveller:** T = one person aged 19, no discount card. On bahn.de that means Young fares (ages 15-26); in the ÖBB shop the box must read '1 x Jugendliche:r ohne Ermäßigungen' ('1 young person, no discounts').
- **Class:** K = 2nd class.
- **Constraint:** direct ICE only, i.e. one train from Berlin to München with no change.
- **Return:** Thursday 01.10.2026, afternoon.
- **Starting point:** the DB app first showed about 200 €.

## 2. The DB baseline (Phase 1)

Read on bahn.de on Saturday 26.09, with the key trains re-checked on Sunday 27.09 at about 14:30. 'Sold out' means DB showed no 2nd-class fare on that train.

| Train | Berlin -> München | DB 2nd class | DB 1st class | Tag |
|---|---|---|---|---|
| ICE 1501 | 05:36 -> 09:41 | Flexpreis Young 145,90 € (no saver left) | - | [seen 2026-09-26] |
| ICE 503 | 06:29 -> 11:07 | Super Sparpreis Young 74,99 € | - | [verified 2026-09-26] |
| ICE 1003 | 06:36 -> 10:45 | sold out | 187,99 € | [seen 2026-09-26] |
| ICE 1503 | 07:36 -> 11:43 | sold out | 224,99 € | [seen 2026-09-26] |
| ICE 1005 | 08:36 -> 12:46 | 'Zug ausgebucht' (train fully booked) | - | [seen 2026-09-26] |
| ICE 1505 | 09:36 -> 13:43 | sold out | 337,50 € | [seen 2026-09-26] |
| ICE 507 | 10:29 -> 15:08 | Super Sparpreis Young 64,99 € on Sat (struck-through 99,99 €), 74,99 € on Sun; Sparpreis Young 73,99 € Sat / 83,99 € Sun; Flexpreis Young 145,90 € | - | [verified 2026-09-26, 2026-09-27] |
| ICE 1007 | 10:37 -> 14:46 | sold out | 337,50 € | [seen 2026-09-26, 2026-09-27] |
| ICE 1507 | 11:36 -> 15:43 | sold out | 337,50 € | [seen 2026-09-26, 2026-09-27] |
| ICE 509 | 12:29 -> 17:09 | Super Sparpreis Young 64,99 € (Sat) | - | [verified 2026-09-26] |
| ICE 1009 | 12:37 -> 16:45 | sold out | 337,50 € | [seen 2026-09-27] |
| ICE 1509 | 13:36 -> 17:43 | sold out | 187,99 € | [seen 2026-09-26] |

What the baseline taught:
- **The ~350 € usually quoted for this trip is DB's 337,50 € for 1st class on the Sprinters.** 2nd class was gone on every Sprinter in the window.
- **DB's cheapest 2nd-class ticket on any train in the window was on ICE 507**, a slower non-Sprinter via Leipzig and Erfurt. bahn.de shows it only with 'Schnellste Verbindungen anzeigen' ('show fastest connections') switched **off** (`s=false`). Trainline never showed ICE 503-509 at all.
- **Trap:** bahn.de also showed Super Sparpreis Young 'ab 48,74 €' [seen 2026-09-26, once, not re-checked]. That price only exists bundled with buying a BahnCard, so the real total was higher. Ignore 'ab' prices that bundle a BahnCard purchase.
- **DB's own international fares via München were no help:** Innsbruck 139,99 €, Salzburg 148,40 €, Villach 227,55 € [seen 2026-09-26].

## 3. Result per key train, outbound (Phases 2-6)

All rows are ÖBB Sparschiene NON-FLEX, 2nd class, youth 19, bought in the ÖBB shop as a through-ticket from Berlin to Austria. **The traveller gets off in München** and does not ride the rest.

| Train | Berlin -> München | DB same train | Found | Ticket to buy (ÖBB shop) | Tag |
|---|---|---|---|---|---|
| ICE 1003 | 06:36 -> 10:45 | 2nd sold out (1st 187,99 €) | **54,00 €** | Berlin Hbf -> Puch b.Hallein, Via München Hbf (fixed trains ICE 1003, RJX 65, S 3) | [verified 2026-09-26] |
| ICE 1503 | 07:36 -> 11:43 | 2nd sold out (1st 224,99 €) | **62,60 €** | Berlin Hbf -> Schwarzach-St. Veit, Via 'Bernau a Chiemsee' (ICE 1503, RE5, IC 797) | [verified 2026-09-26] |
| ICE 1505 | 09:36 -> 13:43 | 2nd sold out (1st 337,50 €) | **62,60 €** | same as ICE 1503 (ICE 1505, RE5, IC 799) | [verified 2026-09-26] |
| ICE 1507 | 11:36 -> 15:43 | 2nd sold out (1st 337,50 €) | **54,00 €** | Berlin Hbf -> Kitzbühel Bahnhof, Via München Hbf (ICE 1507, RB54, CJX 1, IR 811) | [verified 2026-09-26] |
| ICE 1509 | 13:36 -> 17:43 | 2nd sold out (1st 187,99 €) | **54,00 €** | Berlin Hbf -> Puch b.Hallein (ICE 1509, EC 213, S3) | [seen 2026-09-27] |
| ICE 1101 | 14:37 -> 18:43 | not recorded | **54,00 €** | Berlin Hbf -> Puch b.Hallein (ICE 1101, RJ 1293, S3) | [seen 2026-09-27] |
| ICE 1601 | 15:36 -> 19:43 | not recorded | **54,00 €** | Berlin Hbf -> Puch b.Hallein (ICE 1601, RJ 215, S3) | [seen 2026-09-27] |

More rows on the same trains:
- **ICE 1507, 54,00 €** also to Hopfgarten im Brixental, Westendorf in Tirol, Brixen im Thale, Kirchberg in Tirol, Kitzbühel Hahnenkamm, St. Johann in Tirol, Fieberbrunn and Hochfilzen [verified 2026-09-26]. Zell am See on the same train cost 62,60 € [verified 2026-09-26].
- **Via-feeder rows.** ICE 1503 and ICE 1505 showed only 1st class with the default routing. Via 'Bernau a Chiemsee' forces the RE5 Meridian feeder to the Salzburg line, and 62,60 € appeared to Bischofshofen, Schwarzach-St. Veit, Villach and Zell am See [verified 2026-09-26]. On ICE 1003, Via 'Oberaudorf' forces the RB54 feeder to Kufstein and gave 62,60 € to Kitzbühel, Zell am See and Innsbruck [verified 2026-09-26].
- **Partial-ticket trap.** One ICE 1601 row showed 'ab € 4,70' flagged as a partial ticket ('Teilstrecke') [seen 2026-09-27, once]. Such a price does not cover the ICE. Discard those rows (see [../pitfalls.md](../pitfalls.md)).

The line to print next to the table:
- **DB's cheapest 2nd class on any train in the window:** ICE 507, 10:29 -> 15:08, Super Sparpreis Young 64,99 € (Sat) / 74,99 € (Sun).

## 4. Result per key train, return Thursday 01.10.2026

The ticket starts in Austria. **The traveller boards in München.** ÖBB Sparschiene NON-FLEX, 2nd class.

| Train | München -> Berlin | Found | Ticket to buy (ÖBB shop, Via München Hbf) | Tag |
|---|---|---|---|---|
| ICE 1508 | 12:21 -> 16:22 | **54,00 €** | Kitzbühel Bahnhof -> Berlin Hbf (fixed trains IR 612, REX 2, RB54, ICE 1508) | [verified 2026-09-26] |
| ICE 1006 | 13:17 -> 17:36 | **54,00 €** | Puch b.Hallein -> Berlin Hbf (S 3, RJX 262, ICE 1006) | [verified 2026-09-26] |
| ICE 1506 | 14:21 -> 18:22 | **54,00 €** | Puch b.Hallein -> Berlin Hbf (S 3, ICE 118, ICE 1506) | [verified 2026-09-26] |
| ICE 504 | 14:48 -> 19:29 | **54,00 €** | Puch b.Hallein -> Berlin Hbf (S 3, ICE 118, ICE 504) | [verified 2026-09-26] |
| ICE 504 | 14:48 -> 19:29 | 62,60 € | Wörgl Hbf or Jenbach -> Berlin Hbf (RJ 88, ICE 504) | [verified 2026-09-26] |
| ICE 1004 | 15:17 -> 19:33 | **54,00 €** | Puch b.Hallein -> Berlin Hbf (S 3, RJX 60, ICE 1004) | [verified 2026-09-26] |
| ICE 1002 | 17:19 -> 21:26 | **54,00 €** | Puch b.Hallein -> Berlin Hbf (S 3, RJX 62, ICE 1002) | [seen 2026-09-26] |
| ICE 1002 | 17:19 -> 21:26 | 62,60 € | Wörgl Hbf or Jenbach -> Berlin Hbf (RJ 86, ICE 1002) | [verified 2026-09-26] |

- The Kitzbühel -> Berlin 54,00 € on ICE 1508 also held from Hopfgarten, Westendorf, Brixen im Thale, Kirchberg, Kitzbühel Hahnenkamm, St. Johann and Fieberbrunn [verified 2026-09-26].
- **DB's own return:** München -> Berlin Super Sparpreis Young 68,99 € on ICE 504 and also on ICE 508, 1008, 1508, 506, 706, 1006, 1506 and 1004 [seen 2026-09-26].

## 5. The headline verification (Phase 8)

The finalist, ICE 1507 Berlin -> Kitzbühel, was re-opened on the ÖBB offer page and checked field by field [verified 2026-09-26]:

- **Passenger box before the search:** '1 x Jugendliche:r ohne Ermäßigungen'.
- **Result row:** 11:36 departure, 'ICE 1507, DPN RB54, CJX 1, IR 811 | 3 Umstiege | Sparschiene ab € 54,00' ('3 changes', 'saver fare from'), with no partial-ticket note.
- **Prices on the offer page:**
  - '2. Klasse ab € 54,00'.
  - Offer 1, NON-FLEX 54,00 € Sparschiene: not refundable; seat reservation optional, +3,00 €.
  - Offer 2, SEMI-FLEX 71,20 € (Sparschiene Komfort).
  - Offer 3, FLEX 225,00 € (Standard-Ticket).
  - '1. Klasse ab € 94,60'. It rose to 130,00 € within one hour on Sunday.
- **Route line:** 'Berlin Hbf (Tiefgeschoß) › Kitzbühel Bahnhof'. The word 'Teilstrecke' (partial route) appears nowhere, so the ticket covers the whole route.
- **Fixed trains:** 'Verkehrsmittel sind fix: ICE 1507, RB54, CJX 1, IR 811' ('the trains are fixed'), valid Mon 28 Sep 11:36-18:24.
- **Directness ('Reisedetails'):** ICE 1507 leaves Berlin Hbf (Tiefgeschoß) at 11:36 and reaches München Hbf at 15:43 with no change, 4 h 07 min.
- **The rest of the ticket, which the traveller does not ride:** München Hbf (Gl.5-10) 16:05 RB54 -> Kufstein, CJX 1 -> Wörgl, IR 811 -> Kitzbühel, arriving 18:24.

How the traveller would buy it (the user clicks buy; nothing was bought in the session):
1. Open shop.oebbtickets.at/de/ticket. Close the login pop-up.
2. Set the traveller: remove '1 x Erwachsene:r', add '+ KIND / JUGEND', age 19, confirm both OK buttons. The box must read '1 x Jugendliche:r ohne Ermäßigungen'.
3. Von 'Berlin Hbf', Nach 'Kitzbühel Bahnhof', '+ Via hinzufügen' 'München Hbf'. Date Mon 28.09.2026, a time shortly before 11:36, 'ab' (departure). Suchen.
4. Pick 11:36-18:24, ICE 1507, RB54, CJX 1, IR 811, 'Sparschiene ab € 54,00'. Open the price.
5. 2. Klasse, offer 1, 'NON-FLEX € 54,00 Sparschiene'. The seat option is +3,00 €, but on this train it failed at the cart step (section 8).
6. Carry photo ID. Leave the ICE at München Hbf at 15:43.

## 6. The honest comparison, both ways

- **Against the same train:** 54,00 € against DB's 337,50 € is -84 %, about one sixth. **But that is 2nd class against 1st class**, because DB had no 2nd class left on ICE 1507. Say so every time the number is quoted.
- **Against DB's cheapest 2nd class on any train in the window:** 54,00 € against 64,99 € (Sat) or 74,99 € (Sun) on ICE 507. That is 11-21 € cheaper (-17 % to -28 %), **and 32 minutes faster**: ICE 1507 takes 4 h 07 min, ICE 507 takes 4 h 39 min.
- **Return:** 54,00 € against DB's 68,99 €, about 15 € cheaper (derived from the two observed prices).
- **The traveller category moves the baseline.** The DB comparison prices are Young fares. For an adult the DB baseline would be higher; the ÖBB adult price for the same tickets was not checked [unverified].

## 7. What drove the price

- **Tariff points.** DB's international conditions count Salzburg Hbf and Kufstein as DB-domestic stations (SCIC-NRT, Stand 01.08.2026, Glossar 'Binnenverkehr' c). The ÖBB shop sold tickets to them only at DB tariff, as 'Ticket nicht verfügbar', or as partial tickets. The cheapest ends were a few stations further: Puch b.Hallein and the Kitzbühel line. Reutte and Ehrwald on the Außerfernbahn (also DB tariff) came back as 'DB-Tarif' rows at 81,99-367,20 €. Details: [../corridors.md](../corridors.md).
- **Prices do not rise with distance.** On identical trains Kitzbühel cost 54,00 €, Zell am See 62,60 € and Salzburg Süd 77,20 €. With the default routing (e.g. on ICE 1507), Wörgl, Jenbach and Innsbruck got no Sparschiene (217-342 €); Innsbruck reached 62,60 € only with Via 'Oberaudorf' on ICE 1003. The destination has to be scanned, not guessed.
- **Feeder trains and the via decide the contingent.** The fare depends on the destination **and** the feeder trains **and** the via. 'Bernau a Chiemsee' unlocked 62,60 € on ICE 1503/1505, which otherwise showed only 1st class; 'Oberaudorf' unlocked 62,60 € to Kitzbühel, Zell am See and Innsbruck on ICE 1003.
- **Tiers are contingent levels, not times of day.** ÖBB Sparschiene steps seen: 54,00 / 62,60 / 77,20 / 86,90 / 96,20 / 105,70 / 115,40 (often labelled '1. Klasse' when 2nd was gone) / 130,00 / 144,30 €. Standard (FLEX) was about 218-236 € depending on the destination (225,00 € for Kitzbühel).
- **Prices move within an hour.** ICE 1507 1st class went from 94,60 € to 130,00 € within one hour on Sunday. DB's Super Sparpreis Young on ICE 507 rose 10 € between Saturday and Sunday. Contingents vanish near departure.

## 8. Seat reality (Phase 7)

- **DB check.** bahn.de 'Nur Sitzplatz buchen' ('book seat only', `ar=true`) for Monday showed:
  - 'Zug ausgebucht' with 'Außergewöhnlich hohe Auslastung erwartet' ('exceptionally high occupancy expected') on every Sprinter: ICE 1003, 1503, 1005, 1505, 1007, 1507, 1009, 1509, and on ICE 1101.
  - Seats left (5,50 €) on the non-Sprinter ICEs 503, 505, 507, 509, 601, 1601, 603, 1103 and 1603.
- **ÖBB sold tickets for the sold-out Sprinters anyway** from its own contingent. It also warned 'ACHTUNG: Starker Reisetag/Mitfahrt nur mit Sitzplatzreservierung gesichert' ('busy travel day, travel guaranteed only with a seat reservation').
- **The ÖBB seat reservation for ICE 1507 failed at the cart step**, even in 1st class, with errors 11149 ('gewünschter Sitzplatz ... nicht verfügbar', 'requested seat not available') and 11154 ('... Platzlage ...'). The cheapest ticket may mean standing for four hours, or not being let on when the train is overfull (ÖBB Handbuch Österreich A.3.1.4.2).
- **The seat-safe cheap combination was ICE 1601:** ÖBB 54,00 € plus a DB reservation-only ticket at 5,50 €, about 59,50 €. It arrives at 19:43. This is a **derived** combination; it was not purchased in the session. A DB reservation works with any valid ticket. A DB reservation lapses if the seat is not taken within 15 minutes after the train leaves the station the reservation starts from (DB BB Nr. 5.1), so book it from the station where you board.

## 9. Dead ends (so nobody repeats them)

- **Italy, Switzerland, Slovenia, Croatia, Hungary, Serbia, Montenegro** from Berlin via ÖBB: mostly 'Teilstrecke', a ticket that covers only the part from München or from a border station. Budapest as a full ticket: 135 € in 1st class or 327,60 € in 2nd.
- **Trenitalia** priced only from München and refused the sale: 'Diese Lösung kann nicht über diesen Verkaufskanal gekauft werden' ('this solution cannot be bought through this sales channel'). See [../sellers/trenitalia.md](../sellers/trenitalia.md).
- **SBB** via München: 1st class only, CHF 379 and more. See [../sellers/sbb.md](../sellers/sbb.md).
- **ČD**: 3-4 times ÖBB (Berlin -> Villach 6531 Kč, Berlin -> Innsbruck 5845 Kč). See [../sellers/cd.md](../sellers/cd.md).
- **MÁV**: HTTP 500 for any Berlin origin. See [../sellers/mav.md](../sellers/mav.md).
- **SŽ, HŽ, ŽPCG**: no online international sales.
- **Longer German ends**: tickets starting in Hamburg, Rostock or Berlin Gesundbrunnen, or ending in Hamburg-Altona or Spandau, never beat the Berlin-origin fares.
- **DB's own international fares via München**: expensive (see section 2).

## 10. How it was found

- **Setup:** the DB baseline in the main session, then a 9-agent parallel browser sweep of foreign sellers. It took about 2.7 hours.
- **ÖBB overload:** the parallel ÖBB tabs triggered HTTP 429 (too many requests), which also slowed the user's own booking in the same browser. Symptoms were a silent 'Keine Reise gefunden' ('no journey found') and empty price buttons. Several agents shared one ÖBB server session, which corrupted some results ('Ticket nicht verfügbar' that later loaded fine, and rows for the opposite direction).
- **bahn.de block:** after about 25 calm UI searches at least 10 seconds apart, bahn.de returned 'Fehler 751' (bot suspicion) while the agent paged 'Spätere Verbindungen' ('later connections'). It worked again the next day.
- **Hidden-API reads (now forbidden):** two DB offer checks read bahn.de's internal offer data instead of the page, and bahn.de then answered HTTP 403. An earlier direct fetch of a bahn.de API returned OPS_BLOCKED, and the browser was blocked with 'Fehler 751'. The skill no longer does any of this ([../automation-rules.md](../automation-rules.md)).
- **Station-ID lookup while writing the skill:** on Mon 28.09.2026 scripted curl calls from the author's machine to bahn.de's station API (/web/api/reiseloesung/orte) first answered normally; about 20 min later, at about 01:40, that IP got an Akamai 'Access Denied' page, and later checks from the same machine were denied too. The station IDs now come from the trainline-eu CSV and Wikidata instead ([../stations.md](../stations.md) §7).
- **The cheapest ends came late:** the Kitzbühel line and Puch b.Hallein turned up **only in the gap-fill round**. A completeness critic asked for neighbouring stations and forced feeders after the first pass.
- **Nothing was bought:** the skill booked nothing. Every result stopped at the offer page.

## 11. Method lessons, generalised

1. **Baseline first**, including `s=false` (slower non-Sprinter trains) and the fares for the traveller's exact age. The honest comparison point came from a train the default view hid.
2. **List the direct fast trains in the window** and give each its own row. Contingents are per train.
3. **Sweep ticket-end families and via-feeders** per corridor: first the stations just past the tariff point, then along the lines and branches, then forced feeders.
4. **Always gap-fill.** The best answers came from neighbours of cheap ends and from forced feeders, after the first pass.
5. **Check seats before recommending.** A cheap ticket on a sold-out train can mean standing.
6. **Verify finalists right before presenting**, on the seller's offer page: price, fare, fixed trains, full route, directness, class, reservation.
7. **Present a table per train** with the exact ticket to buy and numbered booking steps. The user clicks buy.
8. **Stay read-only and polite:** one search per tab, no hidden APIs, stop at the first block page.
9. **Prefer 3-4 agents** in deep mode, at most 2-3 on ÖBB. Nine agents cost 2.7 hours and a rate limit.

## 12. Caveats the traveller must read

- **Train-bound and non-refundable.** Sparschiene NON-FLEX is valid only on the fixed trains and cannot be refunded.
- **Getting off early (outbound) and boarding late (return).** The plan leaves the ticket in München outbound and joins it in München on the return. The ÖBB offer text seen in the session does not state that getting off early or boarding late is tolerated. Both rely on not breaking any written rule, not on a written permission. Read [../tariff-rules.md](../tariff-rules.md) before buying.
- **ID required.** The ticket is personal. Carry photo ID that also proves the age for the youth category.
- **Delays count to the ticket's destination**, not to München. Do not claim compensation for a delay you did not experience.
- **Prices are observations from 26-27 Sep 2026.** They will differ on any other day.
