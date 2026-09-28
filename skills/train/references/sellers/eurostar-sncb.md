# Belgium playbook: Eurostar (ex-Thalys) and SNCB (b-europe)

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- Low confidence. Two different things share this corridor: Eurostar, a separate operator whose trains DB tickets do not cover, and ICE 79, a DB-SNCB train that both DB and SNCB sell. No first-hand search on either site [unverified]; the facts below are [reported].
- Seller prior (see [../method.md](../method.md), Phase 4): SNCB for ICE 79 ranks with DB Sparpreis Europa BE; Eurostar is a separate-train anchor, not a same-train lever.

## When to use

- **ICE 79** (same-train lever): a key train runs Frankfurt - Köln - Aachen and a Belgian ticket end is acceptable. Also a long trip that ends in Köln or Aachen, where a Belgian through-ticket might price the German feeder trains. dealdoktor gives the example of booking Hamburg -> Brussels with the Belgian railway and getting off in Köln, without a price [reported]. Test it as a hypothesis.
- **Eurostar** (separate train): the user travels between Dortmund, Essen, Duisburg, Düsseldorf, Köln and Aachen and a Eurostar departure fits W. Compare it on its own speed and price, like FlixTrain or WESTbahn.
- Price the Belgian end on bahn.de first as DB Sparpreis Europa BE (from 19,99 € [reported]; see [db-bahn-de.md](db-bahn-de.md)).

## Trains and corridors

- **Eurostar (ex-Thalys)**: Dortmund / Essen - Duisburg - Düsseldorf Flughafen - Düsseldorf - Köln - Aachen - Liège - Bruxelles - Paris Nord, five pairs a day. The German section is run by SNCF Voyages Deutschland. [reported]
- **ICE 79**: Bruxelles - Liège - Aachen - Köln - Frankfurt Flughafen - Frankfurt, every 2 h, sold by DB and SNCB (b-europe). From 07.09.2026 also two Mo-Fr pairs Köln - Aachen - Liège - Leuven - Brussels Airport - Antwerpen, and one daily Köln - Oostende pair. [reported]
- On both, Liège-Guillemins is the first stop past the border.

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- **Eurostar**: DB tickets have not been valid on these trains between Aachen and Köln since March 2012. A Eurostar statement quoted in a forum says domestic German journeys have not been sold since 15.04.2024, and the Eurostar site rejects Köln-Aachen [reported]. So a Eurostar ticket must cross into Belgium: Liège at the least.
- **SNCB (b-europe)**: sells ICE 79 journeys to and from Belgium. Whether it prices German legs, and at what fare, is unverified.

## Fares and conditions

- DB Sparpreis Europa BE from 19,99 € [reported].
- No SNCB or Eurostar fare for a German leg was found or seen.
- The DB fare rules for Europa fares are in [../tariff-rules.md](../tariff-rules.md). Eurostar's own conditions were not read.

## How to search

No verified deep link and no session on either site. Every step is [unverified].

1. Open the seller's site in the skill's own tab: eurostar.com for Eurostar, b-europe.com for SNCB.
2. From: the German station (or the Belgian end for a return). To: the Belgian end from the table below.
3. Set the passengers from exact ages.
4. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md). For Eurostar rows set key_train to the Eurostar train and treat it as a separate train, not the user's DB key train.
5. Stop before passenger details and payment. At the first challenge page, stop and hand over to the user.

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Frankfurt or Köln -> Aachen (ICE 79) | O -> Liège-Guillemins | get off in Aachen |
| Aachen or Köln -> Frankfurt (ICE 79) | Liège-Guillemins -> D | board at O |
| long trip ending in Köln | O -> Bruxelles via Köln [hypothesis] | get off in Köln |
| Dortmund, Essen, Düsseldorf, Köln -> Aachen (Eurostar) | O -> Liège-Guillemins | get off in Aachen |

Further ends: Bruxelles-Midi / Bruxelles-Nord. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- No first-hand search. The 2026-09 Berlin-München session did not touch Belgium.

## Pitfalls

- A DB ticket or BahnCard 100 is not valid on Eurostar; a Eurostar ticket is not valid on the ICE.
- Eurostar refuses German domestic pairs; an empty result for Köln-Aachen is expected, not a block.
- The new ICE 79 variants from 07.09.2026 run on some days only (Mo-Fr).

## Verdict

Low priority. Try ICE 79 via DB Sparpreis Europa BE first, then b-europe as a second opinion. Use Eurostar only as a separate-train price anchor for Rhine-Ruhr <-> Aachen trips.

## Unverified: test before relying on it

- SNCB prices for German legs.
- The current Eurostar domestic policy (the 15.04.2024 statement is second-hand).
- Deep links for both sites.
- Whether a Belgian through-ticket prices a long German feeder (the dealdoktor example gave no price).

## Sources

- https://de.wikipedia.org/wiki/Eurostar_Continental_Route_Services
- https://www.ice-treff.de/index.php?mode=thread&id=703934
- https://www.dealdoktor.de/magazin/deutsche-bahn-tickets-trick/
- de.wikipedia 'Liste der Intercity-Express-Linien' (line 79)
