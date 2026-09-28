# European Sleeper playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- A separate night train, compared on its own timing, not the same-train trick [unverified]. Whether it sells journeys inside Germany is unclear. No first-hand search.
- Seller prior (see [../method.md](../method.md), Phase 4): not ranked; it is a separate-train anchor like WESTbahn, Nightjet or FlixTrain.

## When to use

- The user's window W is at night or early morning and the user's pair lies on one of the routes below.
- Record it as its own option with its own departure, arrival and duration. It never replaces the DB key train in the same-train comparison.
- Skip it for daytime windows.

## Trains and corridors

- **Brussels - Antwerpen - Rotterdam - Den Haag - Amsterdam - Amersfoort - Deventer - Bad Bentheim (operational stop only) - Berlin - Dresden - Bad Schandau - Praha**, 3 a week [reported]. At Bad Bentheim nobody can board or get off.
- **Paris - Mons - Brussels - Liège - Berlin**, since 26.03.2026, 3 a week; stops at Hamburg-Harburg since 13.07.2026 [reported]. Other German stops are unverified.
- **Brussels - Liège - Aachen - Köln - Zürich - Lugano - Como - Milano**, since 09.09.2026, 3 a week [reported]. German stops between Köln and Switzerland are unverified. Wikipedia reports a planned change from 14.12.2026 to a route via Breda and Eindhoven to Köln, on which Aachen is not listed [reported].

German pairs these trains could serve: Berlin - Dresden, Dresden - Bad Schandau, Hamburg-Harburg - Berlin, Aachen - Köln.

## What it sells

- Its site states: 'You cannot book domestic journeys within the Netherlands, Belgium, France, Italy, Switzerland and Czechia with us.' Germany is not on that list. So Berlin-Dresden, Hamburg-Harburg-Berlin or Aachen-Köln may be bookable, but this is unconfirmed.
- If the German pair is refused, the fallback is a ticket across the border (for example Berlin -> Praha, getting off in Dresden) [hypothesis]. That is a hidden-city use of a night train; carry the warnings in [../tariff-rules.md](../tariff-rules.md).
- SBB cannot sell European Sleeper tickets.

## Fares and conditions

- Fares from 49,99 € [reported]. Which berth type that price buys is unverified.
- Its conditions were not read. Treat train binding, refunds and early exit as unknown.

## How to search

No verified deep link and no session. Every step is [unverified].

1. Open https://www.europeansleeper.eu in the skill's own tab.
2. Search the user's German pair first, on a date the train runs (3 a week).
3. If it is refused, record price_eur = -1 with the warning 'domestic not sold' and try one cross-border end.
4. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md).
5. Stop before passenger details and payment.

## Ticket ends to test

| User's trip | Ticket to price first | Fallback [hypothesis] |
|---|---|---|
| Berlin -> Dresden | Berlin -> Dresden | Berlin -> Praha, get off in Dresden |
| Hamburg-Harburg <-> Berlin | Hamburg-Harburg -> Berlin (or back) | Liège -> Berlin, board in Hamburg-Harburg; or Berlin -> Liège, get off in Hamburg-Harburg |
| Aachen -> Köln or back | Aachen -> Köln | Liège -> Köln, board in Aachen |

## Evidence

- No first-hand search. The 2026-09 Berlin-München session did not touch European Sleeper.

## Pitfalls

- It runs 3 days a week; a missing train on the date is not a sold-out train.
- Bad Bentheim is an operational stop only.
- Night timing: compare against the user's W honestly; a cheap night train that arrives at 06:00 is a different product from a 15:00 ICE.

## Verdict

Only a separate-train anchor for night windows. Try the German pair once; if refused, move on.

## Unverified: test before relying on it

- Whether domestic German pairs are sold.
- All German stops apart from Berlin, Dresden, Bad Schandau, Hamburg-Harburg, Aachen and Köln.
- Fares above the 'from' price; conditions on binding and refunds.

## Sources

- https://www.europeansleeper.eu/night-train-germany
- https://de.wikipedia.org/wiki/European_Sleeper
- https://en.wikipedia.org/wiki/European_Sleeper
