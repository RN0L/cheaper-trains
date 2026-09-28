# NS International playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- A reseller of DB's 'Europa' fares, with no contingent of its own. Use it as a cross-check or when bahn.de is blocked, not as a separate lever. Nothing here was checked live [unverified]; the fare facts are [reported].
- Seller prior 1 ([../method.md](../method.md) §4): it sells the same fares as DB Sparpreis Europa, so check it only when bahn.de is blocked, or as a second screen for NL/BE ends.

## When to use

- bahn.de has blocked the browser ('Fehler 751') and a Dutch ticket end is being tested on ICE 78, ICE 224/225 or ICE 77.
- As a cross-check of a DB Sparpreis Europa NL row found on bahn.de.
- The idea behind a Dutch ticket end: for a German pair on these ICEs (Frankfurt <-> Düsseldorf/Duisburg/Oberhausen, Stuttgart/München <-> Köln, Berlin <-> Hannover/Osnabrück/Rheine), a ticket that ends in the Netherlands draws on the Sparpreis Europa contingents, which may be cheaper than the domestic Sparpreis on the same train [hypothesis]. Price that on bahn.de first ([db-bahn-de.md](db-bahn-de.md)); NS gives the same number.

## Trains and corridors

- **ICE 78**: Amsterdam - Utrecht - Arnhem - Oberhausen - Duisburg - Düsseldorf - Köln - Siegburg/Bonn - Montabaur - Frankfurt Flughafen - Frankfurt, every 2 h [reported].
- **ICE 224/225**: Amsterdam - ... - Köln - Frankfurt Flughafen - Mannheim - Stuttgart - Ulm - Augsburg - München; it leaves München at 14:20 in 2026 [reported].
- **ICE 77** (formerly IC Berlin-Amsterdam, all ICE 3neo since Nov 2025): Amsterdam - Hilversum - Amersfoort - Apeldoorn - Deventer - Hengelo - Bad Bentheim - Rheine - Osnabrück - Bünde - Hannover - Berlin-Spandau - Berlin Hbf - Berlin Ostbahnhof [reported].
- Carrier changes: Emmerich(Gr) on ICE 78 / 224/225 and Bad Bentheim(Gr) on ICE 77. The ticket must end at a Dutch station to get the Europa contingents. Bad Bentheim itself is German and does not count.

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- DB 'Europa' fares:
  - Supersparpreis Europa: valid only on the ICE/IC/EC trains in the booking, no changes.
  - Sparpreis Europa: changes for a 19 € fee.
  - Flexpreis Europa: includes the City-Ticket.
  - Normalpreis Europa: for regional trains.
- seat61: prices equal DB's for the same train, but NS offers no seat choice [reported].
- Its terms have a section 'Within Germany and from Germany to other countries', so NS appears to sell German domestic and German-origin trips. Test 'Berlin Hbf -> Amsterdam Centraal' and one pure German pair live before relying on that.

## Fares and conditions

- NS pages quote from 20 € to Köln and from 38 € to Frankfurt (also given for Berlin), and about 60 € one week ahead [reported]. These are Amsterdam-origin marketing prices.
- The DB side: Sparpreis Europa NL from 19,99 € on bahn.de [reported].
- Youth: youth fares are sold only on the website. In the form, click 'Traveller 1 - Adult (26 to 59 years old)' and pick 'Young person'.
- The fare rules are DB's; see [../tariff-rules.md](../tariff-rules.md) for train binding, refunds and what to tell the user.

## How to search

1. Open https://www.nsinternational.com/en in the skill's own tab.
2. The home form has no date field: enter From / To first, the date comes on the next step. The calendar shows two months first.
3. Set the traveller type as described above.
4. There is no direct-only filter. Check the change stations of each result yourself (directness test in [../method.md](../method.md)).
5. No bot challenge was seen when the page was loaded.
6. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md). Stop before passenger details and payment.

## Ticket ends to test

| Key train | User's pair (examples) | Ticket end |
|---|---|---|
| ICE 78, ICE 224/225 | Frankfurt, Stuttgart, München <-> Köln, Düsseldorf, Duisburg, Oberhausen | Arnhem Centraal, then Utrecht Centraal, Amsterdam Centraal |
| ICE 77 | Berlin <-> Hannover, Osnabrück, Rheine | Hengelo, then Deventer, Amersfoort, Amsterdam Centraal |

Arnhem and Hengelo are the first Dutch stops of these ICEs. Zevenaar and Oldenzaal lie closer to the border, but the ICE may not stop there, so a ticket to them may be routed onto a regional train and fail the directness test; check the train list. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- No first-hand NS search. The 2026-09 Berlin-München session did not touch the Netherlands.

## Pitfalls

- No seat choice; the seat check still runs on bahn.de ([../method.md](../method.md), Phase 7).
- No direct-only filter.
- Its marketing prices start in Amsterdam; German-origin prices may differ.
- If an NS price is lower than bahn.de for the same train and the same ticket ends, re-check both before calling it a find: they should be equal.

## Verdict

bahn.de Sparpreis Europa NL gives the same fares. Use NS only when bahn.de is blocked or as a cross-check.

## Unverified: test before relying on it

- Everything above, live.
- Whether NS actually sells a pure German pair.
- Whether a Dutch ticket end beats the domestic Sparpreis on these ICEs [hypothesis].

## Sources

- https://www.nsinternational.com/en/terms-and-conditions/germany
- https://www.nsinternational.com/en/germany/frankfurt-by-train
- https://www.nsinternational.com/en/germany/train-cologne
- https://www.nsinternational.com/en/promotions/discount-for-youth-travelling-by-train
- https://www.seat61.com/trains-and-routes/amsterdam-to-berlin-by-train.htm
- de.wikipedia 'Liste der Intercity-Express-Linien' (lines 77, 78)
