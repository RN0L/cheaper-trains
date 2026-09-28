# SBB playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- A second-tier lever for the ICE, EC and ECE trains between Germany and Basel/Zürich, used to board later or get off early on a ticket that touches Switzerland. The deep link is verified [verified 2026-09-26]; the Sparbillette fares are [reported]; for Berlin-München SBB cost 3-4x ÖBB [seen 2026-09-26].
- Seller prior (see [../method.md](../method.md), Phase 4): after ÖBB and DB Sparpreis Europa, before ČD.

## When to use

- A key train runs on one of the Basel or Zürich corridors below, and a Swiss ticket end is acceptable.
- Typical shapes:
  - boarding later: a ticket Basel SBB -> Hamburg while the user boards at Frankfurt or Freiburg;
  - getting off early: Hamburg -> Basel SBB while the user gets off at Freiburg or Karlsruhe.
- Price the same Swiss end on bahn.de first as DB Sparpreis Europa CH (from 19,99 € [reported]; see [db-bahn-de.md](db-bahn-de.md)). SBB has its own Sparbillette contingents, so it is a real second source, unlike NS.
- Not for trips that reach Switzerland only via München to Austria-bound feeders. There SBB offered only 1st class (evidence below); ÖBB is the lever ([oebb.md](oebb.md)).

## Trains and corridors

- **ICE lines 12 / 20 / 43**: Basel SBB - Freiburg - Karlsruhe - Mannheim - Frankfurt - Kassel - Hannover - Hamburg or Berlin, and Köln on line 43. Line 20 ends in Basel; lines 12 and 43 continue into Switzerland (Zürich, Chur, Interlaken, Brig). [reported]
- **ICE 60**: Basel - Karlsruhe - Stuttgart - Ulm - Augsburg - München, two pairs [reported].
- **ECE 4/5 and 8/9**: Hamburg - Frankfurt - Basel on SBB Giruno sets [reported].
- **ECE/EC 150/151**: Frankfurt - Basel - Zürich - Milano, one a day [reported].
- **ECE 88**: München - Buchloe - Memmingen - Lindau-Reutin - Bregenz - St. Gallen - Zürich, up to 8 pairs [reported]. The first stop past the German border is Bregenz in Austria, so ÖBB is a candidate on this line too.
- **IC 87**: Stuttgart - Singen - Zürich. Local tickets are recognised as far as Singen, so the German part is already regionally priced.
- **NJ Zürich - Hamburg / Berlin**: ÖBB Nightjets, see [oebb.md](oebb.md).
- All ECE trains use the ICE tariff inside Germany.

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- SBB sells only journeys that involve Switzerland. This comes from the help page as summarised by a fetch tool, not quoted verbatim. German origins work in the form [seen 2026-09-26].
- SBB cannot sell European Sleeper, FlixTrain, WESTbahn or Snälltåget tickets.
- Basel Bad Bf is a DB-domestic station, so a ticket that ends there is priced like a DB ticket. The ticket must end at Basel SBB or further into Switzerland.

## Fares and conditions

- **Sparbillette** (saver tickets) to Germany: from CHF 26 (Zürich-Stuttgart / München) and CHF 48 (Berlin / Hamburg); Zürich-Hamburg from CHF 76 [reported].
- Contingent-based and bound to one train; no exchange, no refund.
- Presale up to 365 days; Supersparpreis Europa 180 days.
- Cannot be combined with Halbtax or GA (Swiss discount cards). Seat reservation costs extra.
- International tickets are sold online only to passengers aged 16 or older. A child under 16 travelling alone has to buy at the counter.
- Convert CHF at about 1.07 EUR per CHF and state the rate and date.

## How to search

1. Build the link with the SBB builder in [../../scripts/deeplinks.js](../../scripts/deeplinks.js). Verified format [verified 2026-09-26]:

   `https://www.sbb.ch/de?stops=Berlin+Hbf_I8065969~Z%C3%BCrich+HB_I8503000&day=2026-09-28&time=06_00&moment=dep&reduction=none`

   - Stops are 'Name_I<UIC>' joined by '~'. The UIC code is not the EVA number: München Hbf = 8020347, Berlin Hbf = 8065969. UIC codes are in [../stations.md](../stations.md). If one is missing, type the station in the form and read the stops= value from the address bar.
   - A via is a middle stop plus &via=1 [seen 2026-09-28, Köln~Frankfurt~Basel: Köln Hbf 8015458, Frankfurt (Main) Hbf 8011068, Basel SBB 8500010]. Example built from that format, not itself tested as a string: `stops=Berlin+Hbf_I8065969~M%C3%BCnchen+Hbf_I8020347~Z%C3%BCrich+HB_I8503000&via=1`.
   - &trip=0_1 opens a trip.
   - reduction=none gives the full fare; on the page the toggle reads 'Vollpreis / Halbtax' (full fare / half fare).
2. Open it in the skill's own tab. The cookie banner's 'Alle ablehnen' (reject all) works.
3. Read the list. The result cards are in shadow DOM: plain innerText and `get_page_text` see none of them, only the frame ('5 Verbindungen gefunden'). [../../scripts/page-text.js](../../scripts/page-text.js) walks shadow roots when the page has any (SHADOW = 'auto'); keep the lines that start with 'Abfahrt: '. Each one holds the time, the train, 'Richtung <terminus>', 'Sparbillette ab CHF x', the arrival, the duration and the changes [seen 2026-09-28]. Record rows in the schema from [../method.md](../method.md). Note the class: SBB showed some connections in 1st class only.
4. Open a trip to confirm the trains and the class split, then stop. Never continue to passenger details, login or payment.

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Frankfurt, Mannheim, Karlsruhe, Freiburg -> Hamburg, Hannover, Kassel, Köln, Berlin | Basel SBB -> D | board at O |
| Hamburg, Hannover, Köln, Frankfurt -> Karlsruhe, Freiburg | O -> Basel SBB | get off at D |
| Stuttgart, Ulm, Augsburg -> München (ICE 60) | Basel SBB -> München | board at O |
| München -> Memmingen, Lindau (ECE 88) | München -> St. Gallen or Zürich HB | get off at D |
| any O -> D on a line toward Basel | O -> Basel SBB via D [hypothesis] | get off at D |

Further Swiss ends: Schaffhausen, Zürich HB, St. Gallen, Chur. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md). When the user boards late, book the seat reservation from the user's own station ([../method.md](../method.md), Phase 7).

## Evidence

Berlin-München session, travel Mon 28.09.2026, prices seen 2026-09-26, one traveller aged 19:

- Berlin Hbf -> Zürich HB or St. Gallen via München (ICE 1503, 1505, 1507): 1st class only, CHF 379-426 (about 406-456 €).
- Without a via, SBB routed via Nürnberg/Stuttgart or Mannheim, at CHF 114-158.
- Zürich HB -> Berlin Hbf via München: Sparbillett CHF 133 (about 142 €) on ICE 1504, CHF 152 on ICE 1506.
- ÖBB sold the same Berlin-München ICEs at 54,00-62,60 € ([oebb.md](oebb.md)), so SBB was 3-4x ÖBB there. [seen 2026-09-26]

Köln -> Frankfurt, travel Fr 02.10.2026, age 25, seen 2026-09-28:

- Köln Hbf -> Basel SBB via Frankfurt (Main) Hbf: Sparbillette CHF 86-128 (about 92-137 € at 1.07), against DB's domestic Köln -> Frankfurt Super Sparpreis Young at 38,99-48,99 € [seen 2026-09-28].
- The list is also a quick timetable: each card prints the train number and 'Richtung <terminus>', e.g. 'ICE 79 11, Richtung Frankfurt (Main) Hbf' = ICE 11 on line 79, ending at Frankfurt ([../method.md](../method.md) §3).

## Pitfalls

- UIC vs EVA: an EVA number in stops= finds nothing or the wrong station.
- Shadow DOM: result cards are invisible to innerText and `get_page_text`; use page-text.js with its shadow walk.
- Without a via SBB picks its own routing, often not over the user's stations.
- Basel Bad Bf as a ticket end gives a DB-priced ticket.
- The online age limit of 16.
- Some help pages returned 403 to non-browser fetches; the main site loaded normally.

## Verdict

Worth 2-4 searches when a key train runs to Basel or Zürich. Skip it for Austria-bound feeders via München.

## Unverified: test before relying on it

- The Sparbillette prices above, live, for German origins.
- The exact wording of SBB's 'journeys involving Switzerland' rule.
- Whether SBB's conditions tolerate getting off early or boarding late in Germany.

## Sources

- https://www.sbb.ch/de/hilfe-und-kontakt/produkte-services/billette/europa/billette.html
- https://www.germany.travel/de/kampagne/sbb/sbb-zugangebot.html
- https://www.sbb.ch/en/travelcards-and-tickets/tickets-for-switzerland/tickets-europe/conditions.html
- de.wikipedia 'Liste der Intercity-Express-Linien' (lines 12, 20, 43, 60), 'EuroCity-Express', 'Liste der Intercity-Linien (Deutschland)' (line 87)
- First-hand browser session, 2026-09-26 (deep link format and Berlin-München prices)
