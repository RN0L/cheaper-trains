# ČD (České dráhy) playbook

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- A lever only on ČD's own cross-border trains (the line 27 railjets Hamburg/Berlin-Dresden-Praha and the EC München-Regensburg-Plzeň-Praha), and only with a ticket that crosses into Czechia. The documented cheap fare starts in Czechia. For Austria ČD is not a lever at all: it priced the Berlin-München ICEs at 3-4x ÖBB [seen 2026-09-26]. Confidence: medium on scope. Fares from German origins: cheap only on routings through a ČD cross-border train, seen once (Berlin Hbf -> Ústí 689 Kč, see Evidence) [seen 2026-09-28].
- Seller prior (see [../method.md](../method.md), Phase 4): below ÖBB, DB Sparpreis Europa and SBB.

## When to use

Try ČD when a key train is one of these and a Czech ticket end is acceptable:

- a line 27 railjet between Hamburg, Berlin and Dresden (the train itself normally continues to Děčín and Praha; on Fr 02.10.2026 the Berlin RJs ended in Dresden, see [../corridors.md](../corridors.md) 'Timetable caveats 2026');
- RJ 384/385 on its Hamburg-Berlin-Dresden section;
- the EC between München and Regensburg (it continues to Plzeň and Praha);
- the return direction on those trains: a ticket that starts in Czechia while the user boards at D. That is the direction ČD's early-booking fare is documented for.

Skip ČD for any continuation into Austria, Switzerland or Italy. Evidence below.

## Trains and corridors

- **RJ/ICE line 27**: Hamburg-Altona - Hamburg Dammtor - Hamburg Hbf - Berlin-Spandau - Berlin Hbf - Berlin Südkreuz - Elsterwerda - Dresden-Neustadt - Dresden Hbf - Bad Schandau - Děčín - Praha (- Brno - Wien / Graz / Villach). Roughly every 2 h. Run by ČD, and by ÖBB on the Wien/Villach runs. The Doberlug-Kirchhain stop was dropped in the 2026 timetable. German pairs on it: Hamburg-Berlin, Berlin-Elsterwerda-Dresden, Dresden-Bad Schandau. [reported, de.wikipedia line list] On Fr 02.10.2026 ČD labelled rj 173 and rj 175 'Kiel Hbf – Dresden Hbf', and Dresden – Ústí ran as rj 10173/10175/10177 replacement buses ('náhradní autobusová doprava') [seen 2026-09-28]: read the train labels in each card's 'Detail' before assuming the through run.
- **RJ 384/385** Praha - Dresden - Berlin - Hamburg - Padborg - København since 01.05.2026, on the Jutland route. Sold by ČD, DSB and DB; for the Danish end see [dsb.md](dsb.md). Wikipedia gives one or two daily pairs in different articles; check the timetable. [reported]
- **EC Praha - Plzeň - Regensburg - München**, every 2 h [reported, cd.cz]. Historically the German section (München - Landshut - Regensburg - Schwandorf - Furth im Wald) was a regional service ordered by Bavaria, so it may carry regional tariff and Deutschlandticket validity today [unverified]. If it does, a regional fare beats any ČD ticket for German pairs on it. The border point is Furth im Wald; the EC's first Czech stop is probably Domažlice [unverified].
- **EN Praha - Leipzig - Frankfurt - Zürich**, a night train [reported].
- No through long-distance train Nürnberg-Praha was found for 2026 [reported].

The line tables for all borders are in [../corridors.md](../corridors.md).

## What it sells

- Only journeys with a cross-border train. The conditions demand 'povinnou vazbou na přeshraniční vlak' (a mandatory tie to a cross-border train). So ČD does not sell pure German legs such as Berlin-Dresden: buy through to Czechia and get off early, or start in Czechia and board late. [reported, cd.cz]
- Train binding: current conditions bind the cross-border train 'a dále všechny vlaky v zahraničí' ('and further all trains abroad'), i.e. the German trains in the ticket as well. The 2024 trick of free train choice inside Germany (Köln-Berlin via Praha 36,29 € vs DB 76,40 €, dealdoktor 28.02.2024) therefore looks closed; readers reported the re-binding in 2024. [reported]
- German origins are accepted by the e-shop form (Berlin Hbf, München Hbf) [seen 2026-09-26]. What they cost is the open question (next section).

## Fares and conditions

- **'Včasná jízdenka Evropa do Německa'** (early ticket Europe to Germany): from any ČD fare point to any DB fare point, priced in EUR, valid 2 days with travel starting on day 1. From 459-461 Kč Praha-München and 642 Kč Praha-Hamburg [reported, cd.cz]. The cd.cz summary says it does NOT apply to trips starting in Germany [reported]. Seen 2026-09-28 from Berlin Hbf ('Junior 18—25 let'): 541-689 Kč on routings through ČD's own cross-border rj 101xx, but 1948-2293 Kč on routings via S-Bahn and Os. So cheap fares from German origins exist, but only on routings through a ČD cross-border train, and the ticket end changes the routing (Evidence). Their fare name could not be read (How to search, step 7).
- Refund until midnight the day before travel, for 3 € per person [reported].
- **Junior stops at 25.** The e-shop form offers 'Junior 15—17 let', 'Junior 18—25 let' (each with 'Bez slevového průkazu', no discount card) and 'Dospělý 26—64 let' (adult) [seen 2026-09-28]. DB Young runs up to and including 26, so a 26-year-old is Young at DB but an adult at ČD. cd.cz pages mention Junior up to 26, in some cases 28 [reported]; the form's category is what prices the ticket. On the full fares seen for Berlin-Villach, Junior 18-25 and adult cost the same [seen 2026-09-26].
- Seat reservation is compulsory on EC/RJ Germany-Czechia in summer. A seat costs about 3 € and comes with a seat map [reported]. When it is compulsory, add it to price_eur.
- Presale: sources say 60, 90 or 180 days. Check the calendar live; a missing fare far ahead may be the presale window, not a sold-out train.
- The e-shop shows prices in Kč. Convert to EUR and state the rate and date; the 2026-09-26 session used about 25 Kč per EUR. Take the day's rate from one named public source (for example the ECB reference rate), or use 25 Kč/EUR and list it under 'Not checked'. When a saving is under about 5 % of the price or under 2 €, whichever is larger, say it is within the currency and fee noise.

## How to search

1. Open https://www.cd.cz/spojeni-a-jizdenka/ in the skill's own tab. Accept 'necessary only' cookies. English and German UI exist.
2. From / To: pick the suggestion exactly. Type 'Berlin Hbf' and pick 'Berlin Hbf (stanice, Německo, vlaky)'; the results then show 'Berlin Hbf (tief)'. Never pick '(Europaplatz)' or '(S-Bahn)' [seen 2026-09-28]. München is 'München Hbf'. Other spellings: [../stations.md](../stations.md).
3. Direct trains only: More options -> Connection parameters -> 'Direct connections only'. Use it when the key train itself crosses the border (line 27, the Plzeň EC).
4. Passenger: pencil icon -> 'Přidat' (add) on 'Junior 18—25 let, Bez slevového průkazu' (ages 18-25) or 'Junior 15—17 let'; keep 'Dospělý 26—64 let' from 26; remove the default adult with '−'; 'Hotovo' (done). The form resets to 'Dospělý 26—64 let' after each new search from the start page: set it before EVERY search [seen 2026-09-28]. Add a via only when the default routing avoids D.
5. Results land on a session URL (.../spojeni-tam/<GUID>). It cannot be shared or reopened later, so ČD has no deep link. In links-only mode give the user the search page and the exact inputs.
6. Each result card shows the trains, a disruption label and either a price button ('541 Kč koupit', i.e. buy: read the price from the label, never click it) or a 'Zjistit cenu' (find out the price) button. 'OMEZENÍ NA TRASE' / 'BEZ OMEZENÍ NA TRASE' = service disruption on the route yes / no (works, delays; click it to read 'Omezení provozu na trase spojení', e.g. 'R 690 Labe, Úsek Nelahozeves - Kralupy nad Vltavou, Zpoždění vlaku'). It says nothing about the fare: cheap and full fares carry either label [seen 2026-09-28]. 'Zjistit cenu' only prices the connection. If it answers 'na vybrané spojení neumíme prodat jízdenku v e-shopu' (we cannot sell a ticket for the selected connection in the e-shop), that connection is phone or counter only: record price_eur = -1 with that warning and move on.
7. Read the list with [../../scripts/page-text.js](../../scripts/page-text.js) and record rows in the schema from [../method.md](../method.md). Read the trains and times from 'Detail' (Rozbalit detail): per-train names such as 'rj 173 railjet (Kiel Hbf – Dresden Hbf)', times, and the carrier and 'náhradní autobusová doprava' (replacement bus) notes. The fare name is not shown before 'koupit': 'Další možnosti' (more options) offers only 'Koupit jízdenku' and 'Koupit pouze místenky' (buy ticket, buy reservations only). Record fare 'unknown (not shown before koupit)' with offer_page_checked=false [seen 2026-09-28].
8. Stop there. Never press 'Koupit' (buy), never continue to passenger names, login or payment. Pacing and tab limits: [../automation-rules.md](../automation-rules.md).

## Ticket ends to test

| User's trip | Ticket to price | User's action |
|---|---|---|
| Hamburg or Berlin -> Dresden | O -> Ústí nad Labem hl.n., Děčín hl.n., Praha hl.n. (price all three: the end decides whether ČD routes through its own cross-border train) | get off in Dresden |
| Hamburg -> Berlin | Hamburg -> Děčín hl.n. or Praha hl.n. | get off in Berlin |
| Dresden -> Berlin or Hamburg; Berlin -> Hamburg | Děčín hl.n. / Ústí nad Labem hl.n. / Praha hl.n. -> D | board at O (Dresden or Berlin) |
| München <-> Regensburg | Domažlice [hypothesis] or Plzeň hl.n. -> München, or München -> Domažlice / Plzeň hl.n. | board or get off in Regensburg |
| Hamburg or Berlin -> any D reachable from Dresden | Děčín hl.n. -> D via O [hypothesis] | board at O |

- Bad Schandau is a German station, so it cannot be the ticket end.
- The Včasná fare is documented for the Czech-origin rows (3 and 4). From a German origin a cheap fare was seen only on routings through a ČD cross-border train (Evidence), so price rows 1 and 2 on all three ends.
- Before trusting a ČD row, price the same Czech end on bahn.de as DB Sparpreis Europa CZ (from 14,99 € [reported]; see [db-bahn-de.md](db-bahn-de.md)).
- Every row that relies on getting off early or boarding late carries the warnings in [../tariff-rules.md](../tariff-rules.md).

## Evidence

- Berlin-München is not a ČD corridor, but ČD was tried there (travel Mon 28.09.2026, prices seen 2026-09-26, one traveller aged 19, 2nd class):
  - Berlin Hbf (tief) -> Villach Hbf via München on ICE 1003, 1503, 1005 and 1505: 6531 Kč (about 261 €), the same for Junior 18-25 and adult.
  - Berlin -> Innsbruck Hbf on ICE 1507 plus Meridian and RJX: 5845 Kč (about 234 €).
  - ICE 1003/1005/1007 plus RJ to Innsbruck, and every Berlin -> Salzburg Hbf option: 'Zjistit cenu', then not sold online.
  - ÖBB sold the same ICEs at 54,00-62,60 € (see [oebb.md](oebb.md)). Do not use ČD for Austria. [seen 2026-09-26]
- Berlin Hbf -> Dresden, travel Fr 02.10.2026, 'Junior 18—25 let', 2nd class [seen 2026-09-28]:
  - Berlin Hbf -> Ústí n.L.hl.n. 689 Kč (about 27,56 € at 25 Kč/EUR) on rj 173 / rj 175 + rj 10175 / rj 10177 (Dresden - Ústí as replacement bus); the user gets off in Dresden Hbf, the first change, so the directness test passes. DB on the same RJs: 30,99-32,99 € (Trainline proxy, fee excluded).
  - -> Děčín hl.n. 1948 Kč on the same RJs (routed via S-Bahn and Os); 541 Kč only on the slower R 21841 + IC 2173 with a change at Flughafen BER (2:07, outside the fast set).
  - -> Praha hl.n. 861 Kč.
  - Price Ústí, Děčín and Praha: the end decides whether ČD routes through its own cross-border train.
- travel-dealz (31.03.2025): ČD is cheap only on direct trains; Berlin-Děčín about 17 € on ČD vs 13,99 € on DB [reported]. That report starts in Germany, which contradicts the cd.cz summary above, so test both directions.
- seat61: German and Czech fares can differ for exactly the same train [reported].

## Pitfalls

- Session URLs expire and cannot be shared.
- 'Zjistit cenu' often ends in "phone or counter only".
- In summer a price without a seat is not bookable; include the compulsory reservation.
- The binding now covers the German trains in the ticket; there is no free train choice inside Germany.
- If the Plzeň EC's German section is regional, the Deutschlandticket or a Bavarian regional fare wins. Check that first.
- Kč amounts look large; convert before comparing and state the rate.
- The price button reads '<price> Kč koupit' (buy). Read the price from its label; clicking it starts the purchase.
- The passenger form resets to one adult after every new search.

## Verdict

Worth 2-4 searches when the key train is a line 27 railjet, RJ 384/385 or the Plzeň EC, starting with the Czech-origin direction. Skip ČD otherwise, and always for Austria.

## Unverified: test before relying on it

- Fares from German origins beyond the one 2026-09-28 observation (Evidence), and the fare name behind them, which is not shown before 'koupit'.
- The current tariff class of the German section of the München-Praha EC.
- Whether ČD's conditions tolerate getting off early or boarding late; no clause was read either way.
- The presale window (60, 90 or 180 days).
- Whether the 2024 free-train-choice trick is fully closed.

## Sources

- https://www.cd.cz/typy-jizdenek/mezinarodni-jizdenky/-26754/
- https://www.cd.cz/typy-jizdenek/jedu-do-zahranici/nemecko/-38202/
- https://www.cd.cz/en/typy-jizdenek/pro-juniory/do-zahranici/
- https://travel-dealz.de/deal/tschechien-ceske-drahy-angebot/
- https://www.seat61.com/websites/cd-eshop.htm
- de.wikipedia 'Liste der Intercity-Express-Linien' (line 27) and 'EuroCity-Express' (Hamburg-Padborg-København)
- First-hand browser session, 2026-09-26 (Berlin-München sweep)
