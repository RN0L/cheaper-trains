# PKP Intercity playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- Marginal for German city pairs. Its German legs are short (Berlin-Frankfurt (Oder), Leipzig-Hoyerswerda) and its special fares start in Poland. No PKP search was run first-hand; the fare pages found are dated 2015-2018 [reported].
- Seller prior (see [../method.md](../method.md), Phase 4): lowest group, together with SNCF and DSB.

## When to use

- A key train runs on Berlin-Frankfurt (Oder) or Leipzig-Hoyerswerda AND regional trains or the Deutschlandticket do not already cover the user's pair cheaply. That is rare.
- The return direction from Poland: the special fares start at Polish stations, so a ticket from Poznań to Berlin with the user boarding in Frankfurt (Oder) is the only shape where PKP can undercut. For a trip that is only Frankfurt (Oder) -> Berlin, the regional train usually wins anyway.
- Do not expect PKP to price long German feeder trains the way ÖBB does: online, e-IC knows only Berlin and Frankfurt (Oder) as German stations [reported].
- For a German origin with a Polish ticket end, check DB Sparpreis Europa PL on bahn.de first ([db-bahn-de.md](db-bahn-de.md)).

## Trains and corridors

- **Berlin-Warszawa-Express**: Berlin Hbf - Berlin Ostbahnhof - Frankfurt (Oder) - Poznań - Warszawa. Wikipedia: six pairs Mo-Fr, five on Sa/Su; run by DB and PKP IC. [reported]
- **Berlin-Gdynia-Express**: one a day [reported].
- **EC 'Wawel'**: Berlin - Frankfurt (Oder) - Rzepin - Wrocław - Katowice - Kraków - Przemyśl [reported].
- **EC Leipzig - Riesa - Elsterwerda - Ruhland - Hoyerswerda - Wrocław - Kraków**: new since 14.12.2025, two pairs a day, DB and PKP IC; the morning train continues to Przemyśl [reported].
- **Berlin Gesundbrunnen**: from June to December 2026 the ECs use Berlin Gesundbrunnen instead of Berlin Hbf [reported]. Check the Berlin station for the travel date before searching.
- German domestic pairs on these trains: Berlin - Frankfurt (Oder), and Leipzig - Riesa - Elsterwerda - Ruhland - Hoyerswerda. Both are short and also served by regional trains.
- There is no long-distance Berlin-Szczecin train; that leg is regional only [reported].

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- e-IC (the online shop on intercity.pl) sells international tickets online only on the Warszawa/Gdynia/Kraków/Przemyśl - Berlin trains. Its German stations are Berlin and Frankfurt (Oder) [reported]. Whether the Leipzig EC is sold online is unverified.
- The e-IC manual says international prices are calculated by reserving a seat, so a login may be needed. A guest flow ('Buy ticket without registering') exists at least for domestic tickets. Test both. If the price appears only behind a login, stop: the skill never logs in ([../automation-rules.md](../automation-rules.md)). Record price_eur = -1 with the warning 'login required' and tell the user.
- An older page said Germany -> Poland tickets could be booked only inside one 'Tam i Powrót' (there and back) transaction [reported, older page].
- Presale up to 60 days (e-IC FAQ). seat61 says bahn.de may open the same trains earlier, up to 6 months [reported].
- International e-tickets must be printed: the FAQ says 'you must always print it out!'.
- One discount type per transaction. Children do not travel free, unlike on DB.

## Fares and conditions

- **'Berlin-Warszawa/Gdynia-Special'**: 2nd class from 29 € Warszawa/Gdynia -> Berlin, 16-19 € Poznań -> Berlin, 12 € Poznań -> Frankfurt (Oder). Limited contingent, buy at least 3 days ahead, non-refundable. The page is dated 2017, so recheck it before relying on any number [reported].
- Every relation of the special starts in Poland. There is no Berlin-Frankfurt (Oder) domestic sale, and the special helps only in the return direction from Poland.
- The German-origin comparison is DB Super Sparpreis Europa PL: from about 19 € Berlin-Poznań and 29,99 € Berlin-Warszawa [reported, int.bahn.de].
- Prices in PLN: convert to EUR and state the rate and date.

## How to search

Not driven in a session; treat every step as [unverified].

1. Open intercity.pl in the skill's own tab and go to the e-IC ticket search. English UI exists.
2. From / To: Berlin Hbf or Berlin Gesundbrunnen (by date), or Frankfurt (Oder), and the Polish end from the table below. Spellings: [../stations.md](../stations.md).
3. Set exactly one discount type, from the exact age.
4. If the site asks for a seat reservation or a login before it shows a price, stop at that point (see above).
5. Read the result with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md).
6. Never press the buy or pay button, never enter passenger names.

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Frankfurt (Oder) -> Berlin | Poznań Gł. -> Berlin (special) | board in Frankfurt (Oder) |
| Berlin -> Frankfurt (Oder) | Berlin -> Rzepin [hypothesis] or Poznań Gł. | get off in Frankfurt (Oder) |
| Leipzig -> Hoyerswerda and stops between | Leipzig -> Wrocław Gł. | get off at D |

Further ends along the lines: Warszawa Centralna, Gdańsk Gł. / Gdynia Gł., Kraków Gł. They only make sense as return-direction starts for the special. Rzepin is the first Polish stop of the Wawel on the line list; whether e-IC sells a ticket ending there is untested. Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- No first-hand PKP search. The 2026-09 Berlin-München session did not touch Poland.
- dealdoktor (04/2025) claims 'München-Berlin-Warschau' via the Polish railway for 59 € vs DB 129 € [unverified]. Given the e-IC station list above, such a ticket would most likely come from DB's own Sparpreis Europa PL rather than from PKP.

## Pitfalls

- The Berlin station changes from Hbf to Gesundbrunnen for June-December 2026.
- International pricing may sit behind a login.
- The e-ticket must be printed.
- The fare pages are years old; the specials may have changed or ended.
- The Polish ends are far from the German stations, so the extension beyond D is long, which lowers the rank in [../method.md](../method.md).

## Verdict

Marginal. For Berlin-Frankfurt (Oder) regional trains or the Deutschlandticket usually win. Try PKP only for a return leg that can start in Poland, and only after DB Sparpreis Europa PL.

## Unverified: test before relying on it

- Current e-IC fares (the pages found are dated 2015-2018).
- Whether international prices need a login.
- Whether the Leipzig-Wrocław EC is sold on e-IC.
- dealdoktor's 'München-Berlin-Warschau 59 € vs DB 129 €'.
- Whether PKP conditions tolerate getting off early or boarding late.

## Sources

- intercity.pl FAQ: https://www.intercity.pl/en/site/travelers-essentials/where-to-buy-the-ticket/internet/faq.html
- e-IC instruction: https://www.intercity.pl/en/site/travelers-essentials/where-to-buy-the-ticket/internet/e-ic-instruction.html
- https://www.intercity.pl/en/site/for-passengers/offers/special-offers-for-international-transport/berlin-warszawa/gdynia-special.html
- https://www.seat61.com/trains-and-routes/berlin-to-warsaw-by-train.htm
- https://int.bahn.de/en/offers/saver-fare-flexible-fare/super-saver-fare-europe-poland
- de.wikipedia 'Berlin-Warszawa-Express'; en.wikipedia 'Wawel (train)'; DB press release on the Leipzig-Wrocław-Kraków EC (14.12.2025)
