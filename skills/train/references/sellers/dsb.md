# DSB playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- Marginal for German city pairs. DSB's international tickets must start or end in Denmark, and the German leg on the Denmark trains is short (Hamburg-Flensburg). No DSB search was run first-hand [reported].
- Seller prior (see [../method.md](../method.md), Phase 4): lowest group, together with SNCF and PKP.

## When to use

- A key train runs Hamburg - Neumünster - Rendsburg - Schleswig - Flensburg toward Padborg, and a Danish ticket end is acceptable (get off early), or a Danish start is acceptable on the return (board late).
- A long German trip that ends near the Danish border, where a DSB through-ticket from a German origin to Padborg might price the German feeder trains, as ÖBB does for Austria [hypothesis]. DSB offers German destinations as far as München and Stuttgart (below), so this is worth one test on an expensive trip toward Hamburg or Flensburg. Nothing confirms it yet.
- Not for Hamburg-Kiel: no foreign-priced train runs there (ICE 22 Kiel-Stuttgart is domestic).

## Trains and corridors

- **ECE Hamburg - Padborg - København** via Jutland and Funen. DSB Talgo sets since Nov 2025, branded ECE since 26.01.2026, on the ICE tariff inside Germany. Up to four extra trains a day Hamburg-København since May 2026. [reported]
- **RJ 384/385** from Praha: Praha - Dresden - Berlin - Hamburg - Padborg - København since 01.05.2026, ČD railjet sets, sold by ČD, DSB and DB. See [cd.md](cd.md). [reported]
- **IC 76**, run by DSB: Flensburg - Padborg - Kolding - Fredericia, every 2 h [reported].
- **ICE Sprinter line 4**: partly extended to Padborg / Flensburg - Hamburg - Hannover - Frankfurt [reported].
- The German leg: Hamburg - Neumünster - Rendsburg - Schleswig - Flensburg. Which of these the ECE serves is unverified.
- Timetable gaps: the 07:04 and 08:53 from Hamburg (and the 16:22 and 18:22 from København) do not run 31.08-31.10.2026 [reported].
- The ferry route Hamburg - Puttgarden - Rødby ended on 14.12.2019; all trains now run via Flensburg.

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- DSB Netbutik Udland (DSB's international web shop) sells print-at-home international tickets.
- They must start or end in Denmark, so a German origin with a Danish destination should work. Germany-only trips such as Hamburg-Berlin are not sold. [reported, dsb.dk]
- German destinations offered include Hamburg, Berlin, Lübeck, München, Frankfurt, Köln, Kiel, Leipzig, Nürnberg and Stuttgart [reported].
- Whether DSB sells a pure German leg in any other form (for example Hamburg-Flensburg) is unverified; the start-or-end rule suggests not.

## Fares and conditions

- **'DSB Orange Europa'** (DSB's cheapest international fare): valid only on the chosen departure, no change, no refund. København-Hamburg from 221-289 kr, Berlin from 380 kr, München from 433 kr [reported]. Germany to third countries is sold as 'Sparpreis Europa'.
- Convert DKK to EUR and state the rate and date. DKK is pegged at about 7.46 per EUR.
- On sale 180 days ahead, but seat inventory is loaded only about 2 months ahead; a booking further out with a reservation can fail [reported]. A missing fare 3 months out is therefore not proof of a sold-out train.
- Seat reservation is compulsory 26.06-16.08.2026 [reported].
- Children under 15 travel free with a paying adult, at most 4 per adult. The FAQ defines no youth band, so open the passenger dropdown live and record what it offers.
- Groups of more than 5 book by phone.
- Payment uses 3-D Secure. The skill never reaches the payment step anyway.
- The DB comparison: Sparpreis Europa DK on bahn.de from 28,99 € [reported]; see [db-bahn-de.md](db-bahn-de.md).

## How to search

Not driven in a session; treat every step as [unverified]. There is no verified deep link.

1. Open https://www.dsb.dk/find-produkter-og-services/dsb-udland/ in the skill's own tab and follow it to the Netbutik Udland search.
2. From / To: a German origin and a Danish end from the table below (or the reverse for a return).
3. Set the passengers from exact ages; note whether a youth type exists.
4. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md). Note which trains the ticket names; Orange Europa is bound to them.
5. Stop before passenger names, login and payment.

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Hamburg -> Flensburg (or Neumünster, Rendsburg, Schleswig) | Hamburg -> Padborg | get off at D |
| Flensburg area -> Hamburg | Padborg -> Hamburg | board at O |
| long trip ending in Hamburg | O -> Padborg or Kolding via Hamburg [hypothesis] | get off in Hamburg |
| Hamburg or Neumünster -> any D south (Berlin, Hannover, Frankfurt, Köln, München) | Padborg St. -> D via O [hypothesis] | board at O |

Further Danish ends: Kolding, Odense, København H, Aarhus H. Padborg is the first station past the border. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- No first-hand DSB search. The 2026-09 Berlin-München session did not touch Denmark.
- All prices above come from dsb.dk pages and seat61 [reported].

## Pitfalls

- The start-or-end-in-Denmark rule: a Germany-only query returns nothing, which says nothing about fares.
- Inventory loads about 2 months ahead, later than the 180-day presale suggests.
- The 31.08-31.10.2026 timetable gaps can make a key train simply absent.
- Compulsory reservation in the summer period.

## Verdict

Marginal for German pairs. The only test worth a search is a DSB through-ticket to Padborg that might price a long German feeder [hypothesis]. Otherwise use DB Sparpreis Europa DK or domestic DB fares.

## Unverified: test before relying on it

- Whether DSB sells pure German legs.
- Youth fares.
- The ECE's German stops.
- Whether DSB prices German feeder ICEs inside a through-ticket to Denmark, and at what fare.
- Whether DSB conditions tolerate getting off early or boarding late.

## Sources

- https://www.dsb.dk/find-produkter-og-services/dsb-udland/
- https://www.dsb.dk/find-produkter-og-services/dsb-udland/tyskland/
- https://www.dsb.dk/find-produkter-og-services/dsb-udland/tyskland/hamborg/
- https://www.dsb.dk/find-produkter-og-services/orange/
- https://www.dsb.dk/en/tickets-and-services/rejsebetingelser-udland/
- https://www.seat61.com/trains-and-routes/hamburg-to-copenhagen-by-train.htm
- de.wikipedia 'EuroCity-Express', 'Liste der Intercity-Linien (Deutschland)' (line 76), 'Vogelfluglinie'
