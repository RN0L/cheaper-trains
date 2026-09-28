# Trenitalia (and a note on Italo)

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- **A dead end for German legs** [seen 2026-09-26]. Trenitalia's shop did not price the German ICE leg of a Berlin → Italy trip, and it refused to sell the through-journey online.
- **Italo** has no service in Germany. It is irrelevant for German legs.
- Try Trenitalia only if the user's trip itself ends in Italy, and even then compare it with the DB and ÖBB options listed below.

## What it sells

- Trenitalia's own Italian fares on lefrecce.it, including the Italian part of the DB-ÖBB Brenner EuroCity/Railjet trains.
- **The Brenner trains (line 89):** München - München Ost - Rosenheim - Kufstein - Wörgl - Jenbach - Innsbruck - Brenner - Bozen - Trento - Verona, then to Venezia, or to Bologna (seasonally Rimini and Ancona) [reported, de.wikipedia]. In Germany they call only at München, München Ost and Rosenheim, then reach Kufstein, the Austrian station that DB prices as domestic. The carrier changes at Kufstein (DB/ÖBB) and at the Brenner (ÖBB/DB Italia) (SCIC-NRT B.6.1). The only domestic German pair on these trains is München-Rosenheim.
- No German domestic sales were found.

## Fares and conditions

- The shop showed a 'Standard' 2nd-class adult fare, labelled for example 'RJ 89: Preis Adult/standard/2a Classe' [seen 2026-09-26]. Other Trenitalia fare types and conditions were not researched.
- **For comparison, DB's own fares to Italy via Austria** (SCIC-NRT, Stand 15.09.2026, B.6.11). These are through-tickets on the DB-ÖBB Brenner trains, and Zugbindung (train binding) applies in Austria and Italy too:

  | DB fare, Italy via Austria | 2nd class from | 1st class from |
  |---|---|---|
  | Super Sparpreis Europa | 19,99 € | 29,99 € |
  | Sparpreis Europa | 23,99 € | 33,99 € |
  | Super Sparpreis Europa Young | 18,99 € | not offered |
  | Sparpreis Europa Young | 22,99 € | not offered |

  These are floors of a contingent, not typical prices. See [db-bahn-de.md](db-bahn-de.md) for how to search them.

## Where the lever is

- **None for German legs.** The 'ab' price for Berlin → an Italian station equalled the price for München → the same station. So the ICE leg was not in the price, and the Berlin solution could not be bought.
- **If the user's trip itself ends in Italy**, compare three options:
  1. DB Sparpreis Europa to Italy via Austria (from 19,99 €), on bahn.de.
  2. ÖBB through-tickets. From Berlin in the reference session these were partial tickets or Standard only (see Seen below).
  3. A separate Trenitalia ticket from München or the Brenner onward, combined with a separate German ticket to München. This is a split, so through-ticket rights are lost at the split point [hypothesis: price not compared].

## How to search

1. Open lefrecce.it (Trenitalia's shop) in the skill's own tab. Choose the minimal cookie option.
2. Search from **'Berlin Hbf (tief)'**. Plain 'Berlin Hbf' returned every solution as NOT_SALEABLE; only 'Berlin Hbf (tief)' was accepted [seen 2026-09-26]. For other German origins, expect the same sub-station trap and check [../stations.md](../stations.md).
3. **Run the München control search.** Run the same destination and date from München Hbf. If the 'ab' prices are identical, the German leg is not priced; stop there.
4. Read the page with [../../scripts/page-text.js](../../scripts/page-text.js) or `get_page_text`.
5. Read list prices only. Never click a solution row: the first click puts its offer into the session total (see Limits). Enter no personal data.
6. Record rows with `seller` = 'Trenitalia'. If the price equals the München-only price, set `partial_ticket` = true, whatever the header says.

## Deep link

None verified.

## Reading results and the offer page

- **'ab' prices** (from) per solution. Compare them with the München-only search; equality means only the leg from München is priced.
- **'Diese Lösung kann nicht über diesen Verkaufskanal gekauft werden'** (this solution cannot be bought through this sales channel): a modal that appeared when a Berlin solution was selected [seen 2026-09-26]. The through-journey is not sold online.
- **NOT_SALEABLE**: a solution the shop will not sell at all. Seen for every solution from plain 'Berlin Hbf', and for some return trains even from 'Berlin Hbf (tief)'.

## Limits and bot protection

- The binding rules are in [../automation-rules.md](../automation-rules.md).
- **Selecting a solution row changes the session.** The first click on a solution row put its default offer into the anonymous session total ('Gesamtpreis 73,80'); the total went back to 0,00 right after [seen 2026-09-26]. Never click a solution row and never enter data.
- No bot challenge was recorded.

## Seen in the reference session

Searches on Sat 26.09.2026 for Mon 28.09.2026, from 'Berlin Hbf (tief)' via the Berlin-München ICEs and the Brenner trains (RJ 85, 87, 89). Where the München-only price was checked, the 'ab' price was identical, so it did not include the ICE leg:

| Destination | 'ab' price shown | Same as München → destination alone? |
|---|---|---|
| Brennero/Brenner | 73,80 € | yes |
| Bolzano/Bozen | 87,20 € | yes |
| Verona Porta Nuova | 97,30 € (ICE 1007 + RJ 89) / 113,80 € (ICE 1003 or 1005 + RJ 85/87) | yes |
| Bologna Centrale | 97,90 € (ICE 1007 + RJ 89) | yes |
| Venezia Santa Lucia | 125,30 € (ICE 1007 connection) | not compared row by row; same pattern, not purchasable |

- **Return.** In the user's time window, Brennero → Berlin 73,80 € was offered only with ICE 1002 (München 17:19). ICE 1004 and ICE 1006 were NOT_SALEABLE.
- **The other sellers for Berlin → Italy the same day:**
  - ÖBB offered either partial tickets ('Teilstrecke', covering only München onward) or a full ticket at Standard fare only: Berlin Hbf → Bolzano/Bozen 256,40 € (2nd class, on ICE 1507).
  - DB (bahn.de) had only 1st class to Verona, Bologna and Venezia, 235,99-535,20 €, or 'Zug ausgebucht' (sold out).

## Unverified: test before relying on it

- Whether Trenitalia sells any German leg (for example München-Rosenheim) on its own.
- Trenitalia fare types other than 'Standard' for these trains, and Italian youth fares.
- Whether a Trenitalia ticket from München or the Brenner onward, plus a separate German ticket, ever beats DB Sparpreis Europa to Italy. Not compared.
- Whether other German origins need a '(tief)'-style name on lefrecce.it.

## Sources

- Trenitalia shop: https://www.lefrecce.it
- de.wikipedia, Liste der Intercity-Express-Linien (line 89): https://de.wikipedia.org/wiki/Liste_der_Intercity-Express-Linien
- DB, Besondere Internationale Beförderungsbedingungen (SCIC-NRT), Stand 15.09.2026, B.6 (Italien mit DB-ÖBB Kooperationszügen über den Brenner): https://assets.static-bahn.de/dam/jcr:014e140f-e52a-42af-926b-b15e052f6250/Besondere%20Internationale%20Bef%C3%B6rderungsbinguungen%20der%20DB%20AG%20-%20Stand%2015.09.2026.66f973b63d4285d058cf48a95e159e52.pdf
- Reference session, 26.09.2026: own observations on lefrecce.it, bahn.de and the ÖBB shop.
