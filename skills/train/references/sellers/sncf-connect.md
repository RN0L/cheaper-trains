# SNCF Connect playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- Low confidence [unverified, as of 2026-09-28]. No first-hand search. The site returned HTTP 403 to non-browser fetches, so expect bot protection: work only in the real browser, at human pace, and hand any challenge to the user.
- Seller prior (see [../method.md](../method.md), Phase 4): lowest group, together with DSB and PKP.

## When to use

- A key train is one of the TGV/ICE trains below and a French ticket end is acceptable: get off early in Germany, or board late on the return.
- Typical shapes [hypothesis]: Stuttgart -> Strasbourg, get off in Karlsruhe; München -> Strasbourg, get off in Stuttgart or Ulm; Frankfurt -> Forbach, get off in Saarbrücken or Kaiserslautern; Berlin -> Strasbourg on ICE 9590, get off in Frankfurt.
- Price the same French end on bahn.de first as DB Sparpreis Europa FR ([db-bahn-de.md](db-bahn-de.md)); SNCF is the second opinion, because it sometimes sells its own Prem's fares on these trains.

## Trains and corridors

A DB-SNCF cooperation (formerly Alleo) [reported]:

- **Line 82**: Frankfurt - Mannheim - Kaiserslautern - Saarbrücken - (Forbach) - Paris Est, every 4 h, plus two Frankfurt - Karlsruhe - Strasbourg - Paris pairs.
- **Line 83**: five pairs Stuttgart - Karlsruhe - Strasbourg - Paris, one of them from München - Augsburg - Ulm.
- **Line 84**: TGV 9580/9583 Frankfurt - Mannheim - Karlsruhe - Baden-Baden - Strasbourg - Lyon - Marseille, plus summer-Saturday TGV 9594/9599 to Bordeaux.
- **ICE 9590/9591**: Berlin - Südkreuz - Halle - Erfurt - Frankfurt - Mannheim - Karlsruhe - Strasbourg - Paris, one a day.
- Carrier changes at Kehl and Forbach.
- Reservation is compulsory only for cross-border use, not on the German-only part.

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- TGV INOUI / ICE France <-> Germany to about ten German cities, including München, Frankfurt, Stuttgart, Berlin, Hamburg, Karlsruhe, Mannheim and Saarbrücken [reported].
- Its /en-en/deutsche-bahn page claims you can book DB train tickets in Germany there (search snippet only). Verify live whether a pure German pair gets a price.

## Fares and conditions

- SNCF sells Prem's fares on some of these trains. seat61 saw Paris-Frankfurt at 39 € refundable (minus 15 €) on SNCF vs 44,90 € non-refundable on int.bahn.de [reported].
- SNCF can hold a fare unpaid for about a week [reported]. That is a booking step: the skill never creates a hold; mention it to the user as an option.
- 1st class has a seat map [reported].
- French age rules apply: under 4 free, under 12 child. DB's are under 6 free and 6-14 child. Youth 12-27 on DB-SNCF tickets is unverified; record exactly which passenger types the form offers.
- DB Sparpreis Europa FR from 19,99 €, sold until 1 day before travel [reported].

## How to search

No verified deep link. Every step is [unverified].

1. Open https://www.sncf-connect.com in the skill's own tab.
2. The home page has a single search field. For English, scroll to 'Other regions and countries'.
3. Type the German station and pick the suggestion that contains 'Hbf'. SNCF station codes, which may help the autocomplete, are in [../stations.md](../stations.md).
4. Set the passengers from exact ages.
5. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md).
6. Stop before passenger details, the 'hold' option and payment.
7. At the first challenge or block page, stop using the site and hand over to the user ([../automation-rules.md](../automation-rules.md)).

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Stuttgart or München -> Karlsruhe, Stuttgart, Ulm | O -> Strasbourg | get off at D |
| Frankfurt or Mannheim -> Saarbrücken, Kaiserslautern | O -> Forbach | get off at D |
| any of these, return | Strasbourg or Forbach -> D | board at O |
| Berlin, Erfurt, Frankfurt on ICE 9590/9591 | O -> Strasbourg or Paris Est | get off at D |

Paris Est is the far end; the extension is long, so try it last. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- No first-hand SNCF search. The 2026-09 Berlin-München session did not touch France.
- WebFetch of several sncf-connect.com pages returned 403 on 2026-09-28.

## Pitfalls

- Bot protection: 403 outside a real browser. Never retry in a loop.
- Different age bands from DB's; the same traveller may be priced in a different category.
- Prem's fares are limited and move fast.

## Verdict

Low priority. Use bahn.de's Sparpreis Europa FR to the same French end first, then SNCF Connect as a cross-check on the TGV/ICE trains for its Prem's fares.

## Unverified: test before relying on it

- Whether SNCF Connect prices a pure German pair.
- Youth 12-27 handling on DB-SNCF tickets.
- A search deep link format.
- Whether SNCF conditions tolerate getting off early or boarding late in Germany.
- Current prices of any kind.

## Sources

- https://www.seat61.com/websites/sncf-connect.htm
- https://www.seat61.com/trains-and-routes/paris-to-germany-by-tgv-or-ice.htm
- https://www.sncf-connect.com/en-en/deutsche-bahn (search snippet only)
- de.wikipedia 'Liste der Intercity-Express-Linien' (lines 15, 82, 83, 84) and 'Alleo'
