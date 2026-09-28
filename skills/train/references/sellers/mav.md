# MÁV (Hungarian State Railways)

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- **A dead end for German legs** [seen 2026-09-26]. The MÁV shop could not price any journey from a German origin: every Berlin search failed with a server error.
- Use it only for trips that themselves end in Hungary, and even then compare it with ÖBB and DB (see Seen below).

## What it sells

- Hungarian domestic and international tickets on its web shop (jegy.mav.hu).
- **Its only German link is the Railjet line Budapest-Győr-Wien-Linz-Salzburg-München** (ICE/RJ line 90, run by ÖBB) [reported, de.wikipedia]. The German section is only München-Freilassing, and München is its only German stop. So there is no domestic German pair on it that MÁV could price.

## Fares and conditions

Not researched. MÁV's fares were never shown for a German origin.

## Where the lever is

- **None for German legs.**
- **For a trip that ends in Hungary**, compare:
  1. ÖBB through-tickets from the German origin (see [oebb.md](oebb.md));
  2. DB Europa fares on bahn.de (see [db-bahn-de.md](db-bahn-de.md));
  3. a separate MÁV ticket from Wien onward, combined with a separate ticket to Wien. That is a split: through-ticket rights are lost at Wien [hypothesis: never priced as a combination]. Wien Hbf → Budapest alone cost 45-57,90 € in the MÁV shop on 26.09.2026 [seen].

## How to search

1. Open https://jegy.mav.hu in the skill's own tab. Choose the minimal cookie option ('Acknowledge', functional cookies only). Do not hide or alter page elements.
2. A German origin such as 'Berlin Hbf' appears in the station list.
3. Search. If the result is 'An error occurred while loading the offers' (HTTP 500), stop after one retry and record `price_eur` = -1 with the error in `warnings`.
4. Read any result with [../../scripts/page-text.js](../../scripts/page-text.js). Enter no personal data.

## Deep link

None verified.

## Reading results and the offer page

- 'An error occurred while loading the offers' (HTTP 500 on the offer request) = no price from this origin. This is what every Berlin search returned [seen 2026-09-26].
- A Wien → Budapest search returned normal offers, so the shop itself was working [seen 2026-09-26].

## Limits and bot protection

- The binding rules are in [../automation-rules.md](../automation-rules.md).
- No bot challenge was seen; the failures were server errors, not blocks. Still, do not loop: one retry, then stop.

## Seen in the reference session

Sat 26.09.2026, for travel on Mon 28.09.2026, one traveller aged 19:

- **MÁV shop:** Berlin Hbf → Budapest-Keleti returned HTTP 500 three times, with and without a via München, with the youth passenger type (18-25). Wien Hbf → Budapest worked normally (45-57,90 €).
- **ÖBB shop:** Berlin Hbf → Budapest-Keleti as a full through-ticket cost 135,00 € in 1st class (Sparschiene NON-FLEX, on ICE 1507, offer page checked) or 327,60 € in 2nd class (Standard only).
- **bahn.de:** Berlin Hbf → Budapest-Keleti 302,05 € (DB Europa, 2nd class, on ICE 1501 at 05:36). The 06:36 and 07:36 departures were 1st class only (211,99 € and 235,99 €).
- **Trainline:** 261,20 € in 2nd class for a routing with the same ICE 1501 (Budapest arrival 18:29).

Nothing here came near the 54,00-62,60 € ÖBB tickets to Austria (see [oebb.md](oebb.md)).

## Unverified: test before relying on it

- Whether MÁV sells from any German origin at all. The HTTP 500 may have been temporary, but three attempts failed the same way.
- MÁV's fare types, youth rules and prices for Hungary-bound trips from Germany.
- Whether a split at Wien (a separate ticket to Wien plus MÁV Wien → Budapest) beats ÖBB or DB for a Hungary trip.

## Sources

- MÁV web shop: https://jegy.mav.hu
- de.wikipedia, Liste der Intercity-Express-Linien (line 90): https://de.wikipedia.org/wiki/Liste_der_Intercity-Express-Linien
- Reference session, 26.09.2026: own observations on jegy.mav.hu, the ÖBB shop, bahn.de and Trainline.
