# Station IDs and spellings

Each site identifies stations differently. bahn.de uses the EVA number (also called IBNR), foreign sellers often use the UIC code, Trainline uses its own location id, and SNCF uses a five-letter code. A wrong or near-miss ID gives different results, or none. This file lists the IDs for the 20 largest German long-distance stations, secondary German stations and the border-area and foreign ticket ends the corridors use (§1b), the sub-station traps, and the spellings each site expects.

Rule: **pick the exact entry from the site's own suggestion list.** Never trust the first near match, and never type an ID the site did not offer.

## 1. EVA numbers (bahn.de)

Names in bahn.de spelling. Three sources agree on every number: the bahn.de station API (read once on 2026-09-28, see section 7 for why not again), Wikidata property P954 (IBNR), and the `db_id` column of the trainline-eu stations.csv.

| Station (bahn.de spelling) | EVA |
|---|---|
| Berlin Hbf | 8011160 |
| München Hbf | 8000261 |
| Hamburg Hbf | 8002549 |
| Frankfurt(Main)Hbf | 8000105 |
| Köln Hbf | 8000207 |
| Stuttgart Hbf | 8000096 |
| Düsseldorf Hbf | 8000085 |
| Hannover Hbf | 8000152 |
| Nürnberg Hbf | 8000284 |
| Leipzig Hbf | 8010205 |
| Dresden Hbf | 8010085 |
| Bremen Hbf | 8000050 |
| Mannheim Hbf | 8000244 |
| Karlsruhe Hbf | 8000191 |
| Dortmund Hbf | 8000080 |
| Essen Hbf | 8000098 |
| Augsburg Hbf | 8000013 |
| Freiburg(Breisgau) Hbf | 8000107 |
| Kiel Hbf | 8000199 |
| Rostock Hbf | 8010304 |

Berlin Hbf and München Hbf are also verified in live bahn.de deep links (2026-09-26). The EVA goes into the `soei`/`zoei` parameters and into the `L=` part of `soid`/`zoid`; see [../scripts/deeplinks.js](../scripts/deeplinks.js).

## 1b. Secondary, border-area and foreign ticket ends

Values from the trainline-eu stations.csv (rows with `is_suggestable=t`, read 2026-09-28): EVA = `db_id`, UIC = `uic`, Trainline = `id`. Unless marked 'live 2026-09-28' (used in a live Trainline or SBB link that day), none was tested in a live link [unverified]: confirm each name in the site's own suggestion list before using its ID. '-' = no value in the CSV. Elsterwerda and Dresden-Neustadt are here as split stops on the Berlin-Dresden line ([sellers/db-bahn-de.md](sellers/db-bahn-de.md), 'Domestic-only playbook').

| Station (CSV name) | EVA | UIC | Trainline id |
|---|---|---|---|
| Hamburg-Altona | 8002553 | 8001093 | 7625 |
| Hamburg Dammtor | 8002548 | 8001089 | 7627 |
| Hamburg-Harburg | 8000147 | 8001134 | 7628 |
| Berlin Gesundbrunnen | 8011102 | 8007799 | 14564 |
| Berlin Südkreuz | 8011113 | 8065971 | 7528 |
| Berlin Ostbahnhof | 8010255 | 8003004 | 7540 |
| Berlin-Spandau | 8010404 | 8003025 | 7550 |
| Köln Messe/Deutz | 8003368 | 8015561 | 7560 |
| München-Pasing | 8004158 | 8020286 | 7684 |
| München Ost | 8000262 | 8020234 | 7683 |
| Flensburg | 8000103 | 8001427 | 6903 |
| Lübeck Hbf | 8000237 | - | 7676 |
| Frankfurt (Oder) (bahn.de probably 'Frankfurt(Oder)' [unverified]) | 8010113 | - | 7730 |
| Regensburg Hbf | 8000309 | 8026294 | 7233 |
| Passau Hbf | 8000298 | 8026506 | 6992 |
| Bad Schandau | 8010022 | 8006006 | 7502 |
| Neumünster | 8000271 | 8001295 | 7137 |
| Magdeburg Hbf | 8010224 | 8024001 | 7740 |
| Halle (Saale) Hbf | 8010159 | 8023002 | 7736 |
| Elsterwerda | 8010099 | 8004348 | 14290 |
| Dresden-Neustadt | 8010089 | 8006216 | 7510 |
| Kitzbühel | 8100055 | 8101160 | 17549 |
| Schärding | 8100024 | 8101740 | 17605 |
| Bregenz | 8100090 | - | 17544 |
| Děčín hl.n. | 5400003 | 5455659 | 17505 |
| Ústí nad Labem hl.n. | 5400019 | 5453179 | 17511 |
| Praha hl.n. | 5400014 | 5457076 | 17509 |
| Basel SBB | 8500010 | 8500010 (live 2026-09-28, SBB) | 5878 (live 2026-09-28) |
| Schaffhausen | 8503424 | 8503424 | 6395 |
| Kreuzlingen | 8506131 | 8506131 | 18565 |
| Arnhem Centraal | 8400071 | 8400071 | 8659 (live 2026-09-28) |
| Utrecht Centraal | 8400621 | 8400621 | 8673 |
| Hengelo | 8400316 | 8400316 | 19063 |
| Oldenzaal | 8400483 | 8400483 | 8632 |
| Liège-Guillemins | 8800012 | 8841004 | 5995 (live 2026-09-28) |
| Strasbourg | 8700023 | 8721202 | 153 (live 2026-09-28) |
| Forbach (France) | 8700271 | 8719300 | 117 |
| Mulhouse | 8700031 | 8718206 | 158 |
| Padborg St. | 8601899 | 8600100 | 18786 |
| Kolding St. | 8601318 | 8600083 | 17514 |
| Rzepin | 5100082 | 5102580 | 19082 |
| Węgliniec | 5100068 | 5105180 | 28587 |
| Wrocław Główny | 5100069 | 5106010 | 19080 |

Traps in the CSV:
- **Two Forbach rows are suggestable:** Forbach in France (above) and Forbach in Baden, Germany (EVA 8002022). Pick the French one.
- **Linz:** 'Linz/Donau Hbf' has `db_id` 8183231, while a row named 'Linz' has 8100013; 'Linz (Rhein)' (8003708) is in Germany. Check the bahn.de suggestion list.
- **Poznań:** the CSV has 'Poznan Gl' (EVA 5100081) and 'Poznań' (EVA 5196002). Check the bahn.de suggestion list.
- **Hengelo, Oldenzaal, Hamburg-Altona and others** have a second, non-suggestable row; use the row above.
- **Elsterwerda** has a second, non-suggestable row (EVA 8096010) and a separate stop 'Elsterwerda-Biehla'; **Dresden-Neustadt Gleis 10** (EVA 8098089) is a sub-station. Use the rows above.

## 2. UIC codes (foreign sellers)

Foreign sellers such as SBB use the UIC code, which is **not** the EVA number. bahn.de itself embeds the UIC in the full `soid`/`zoid` value as `i=U×00<UIC>`; for Berlin Hbf it writes `i=U×008065969`. Source: stations.csv `uic` column.

| Station | UIC |
|---|---|
| Berlin Hbf | 8065969 |
| München Hbf | 8020347 |
| Hamburg Hbf | 8001071 |
| Frankfurt (Main) Hbf | 8011068 |
| Köln Hbf | 8015458 |
| Stuttgart Hbf | 8029034 |
| Düsseldorf Hbf | 8008094 |
| Hannover Hbf | 8013552 |
| Nürnberg Hbf | 8022193 |
| Leipzig Hbf | 8023179 |
| Dresden Hbf | 8006050 |
| Bremen Hbf | 8013751 |
| Mannheim Hbf | 8014008 |
| Karlsruhe Hbf | 8014228 |
| Dortmund Hbf | 8010053 |
| Essen Hbf | 8010184 |
| Augsburg Hbf | 8002140 |
| Freiburg (Breisgau) Hbf | 8014350 |
| Kiel Hbf | 8001304 |
| Rostock Hbf | 8027089 |
| Zürich HB | 8503000 |

Berlin Hbf 8065969 and Zürich HB 8503000 are verified in a live SBB link (2026-09-26). Köln Hbf 8015458, Frankfurt (Main) Hbf 8011068 and Basel SBB 8500010 (§1b) were verified in a live SBB link on 2026-09-28, a via search Köln~Frankfurt~Basel with `via=1`. SBB writes stops as `Name_I<UIC>` joined by `~` ([sellers/sbb.md](sellers/sbb.md)).

## 3. Trainline location ids

The `id` column of stations.csv, using rows with `is_suggestable=t`. Trainline encodes them as `urn:trainline:generic:loc:<id>` ([sellers/trainline.md](sellers/trainline.md)).

| Station | Trainline id | Status |
|---|---|---|
| Berlin Hbf | 7630 | verified in live URLs, 2026-09-26 |
| München Hbf | 7480 | verified in live URLs, 2026-09-26 |
| Hamburg Hbf | 7474 | from the CSV |
| Frankfurt (Main) Hbf | 7604 | verified in a live Trainline URL, 2026-09-28 |
| Köln Hbf | 7561 | verified in a live Trainline URL, 2026-09-28 |
| Stuttgart Hbf | 7710 | from the CSV |
| Düsseldorf Hbf | 7475 | from the CSV |
| Hannover Hbf | 6921 | from the CSV |
| Nürnberg Hbf | 7691 | from the CSV |
| Leipzig Hbf | 7678 | from the CSV |
| Dresden Hbf | 7519 | from the CSV |
| Bremen Hbf | 7548 | from the CSV |
| Mannheim Hbf | 7479 | from the CSV |
| Karlsruhe Hbf | 7666 | from the CSV |
| Dortmund Hbf | 7573 | from the CSV |
| Essen Hbf | 7591 | from the CSV |
| Augsburg Hbf | 6850 | from the CSV |
| Freiburg (Breisgau) Hbf | 7597 | from the CSV |
| Kiel Hbf | 7663 | from the CSV |
| Rostock Hbf | 7749 | from the CSV |
| Zürich HB | 6245 | from the CSV |
| Kitzbühel | 17549 | from the CSV |

## 4. SNCF codes

The `sncf_id` column of stations.csv. **Not verified in live use**: SNCF Connect refused non-browser fetches (HTTP 403), so treat these as autocomplete hints only ([sellers/sncf-connect.md](sellers/sncf-connect.md)).

| Station | SNCF code |
|---|---|
| Berlin Hbf | DEHBF |
| München Hbf | DEBEG |
| Frankfurt (Main) Hbf | DEFRH |
| Stuttgart Hbf | DESGT |
| Karlsruhe Hbf | DEQKA |
| Mannheim Hbf | DEMHG |

## 5. Sub-station traps

Several main stations have second IDs for a lower level or a platform group. They appear in suggestion lists next to the main entry and give different results, or none.

| Sub-station | EVA | What happened |
|---|---|---|
| Berlin Hbf (tief) | 8098160 | The ÖBB shop shows it as 'Berlin Hbf (Tiefgeschoß)' (lower level) in routes and offer pages. Trenitalia accepts only 'Berlin Hbf (tief)': plain 'Berlin Hbf' returned NOT_SALEABLE [seen 2026-09-26]. |
| Hamburg Hbf (S-Bahn) | 8098549 | Local S-Bahn platforms; do not pick it for long-distance searches. |
| Leipzig Hbf (tief) | 8098205 | Lower-level S-Bahn station. |
| Frankfurt Hbf (tief) | 8098105 | Lower-level S-Bahn station. |
| Stuttgart Hbf (tief) | 8098096 | Lower-level S-Bahn station. |
| München Hbf Gleis 5-10 | 8098262 | Separate platform group; ÖBB routes the RB54 and RJ feeders from here ('München Hbf Gl.5-10'), with a walk of about 10 minutes to the main platforms [verified 2026-09-26]. |
| München Hbf Gleis 27-36 | 8098261 | Separate platform group. |

Source for the IDs: Wikidata P954 returned these next to the main IDs; the stations.csv rows list them with the main station as parent.

## 6. Spellings the sites expect

| Site | Spelling | Note |
|---|---|---|
| bahn.de | 'Frankfurt(Main)Hbf' | no space before the parenthesis and none after it |
| bahn.de | 'Freiburg(Breisgau) Hbf' | no space before the parenthesis, one space before 'Hbf' |
| ÖBB shop | 'Puch b.Hallein' | type 'Puch' and pick the entry that reads exactly 'Puch b.Hallein' (first on 2026-09-26, second on 2026-09-28), never 'Puch b.Hallein Urstein Bahnhst'; the offer route then reads 'Puch b.Hallein Bahnhst' |
| ÖBB shop | 'Schwarzach im Pongau-St.Veit Bahnhof' | the shop's name for Schwarzach-St. Veit; first suggestion for 'Schwarzach' [seen 2026-09-28]; not 'Schwarzach im Vlbg' |
| ÖBB shop | 'Kitzbühel Bahnhof' | not 'Kitzbühel Hahnenkamm Bahnhof', which is a different stop |
| ÖBB shop | 'Bernau a Chiemsee' | the via-feeder station for the Salzburg line |
| ÖBB shop | 'St.Johann in Tirol Bahnhof' | no space after 'St.'; not 'St.Johann im Pongau' (Salzburg line) |
| ÖBB shop | 'Brixen im Thale Bahnhst' | 'Bahnhst' = Bahnhaltestelle (halt); not Brixen/Bressanone in Italy |
| ČD eShop | 'Berlin Hbf (stanice, Německo, vlaky)' | type 'Berlin Hbf' and pick this entry; results then show 'Berlin Hbf (tief)'. Never pick '(Europaplatz)' or '(S-Bahn)' [seen 2026-09-28] |

Pattern: the ÖBB shop appends 'Bahnhof', 'Bahnhst' or 'Hbf' and abbreviates 'bei' to 'b.' and 'am' to 'a'. Other sources spell the same stop in full: stations.csv has 'Puch bei Hallein Bahnhof'. Many towns have a second stop (Kitzbühel and Kitzbühel Hahnenkamm; Salzburg Hbf and Salzburg Süd; St. Johann in Tirol and St. Johann im Pongau; Puch bei Hallein and Puch bei Hallein Urstein). The price can differ between neighbouring stops, so the exact entry matters.

## 7. Looking up other stations

- **Use the site's suggestion list.** Type the name, wait for the list, and pick the exact entry. This is the only method that works on every site.
- **Or read the public trainline-eu stations.csv**: https://raw.githubusercontent.com/trainline-eu/stations/master/stations.csv. Ask the user before downloading it (about 16 MB); for a single station, use Wikidata P954 instead. It is semicolon-separated. Useful columns: `id` (Trainline), `uic`, `db_id` (EVA), `sncf_id`, `is_suggestable` (use `t` rows), `parent_station_id` (flags sub-stations). The file is about 16 MB; download it once and filter locally, for example:
  ```
  awk -F';' '$2=="Karlsruhe Hbf" {print $1, $4, $18, $23, $15}' stations.csv
  ```
  (columns 1 id, 4 uic, 18 sncf_id, 23 db_id, 15 is_suggestable)
- **Wikidata P954** gives the EVA/IBNR for a station item and is a good second source.
- **Never script bahn.de's station API** (`/web/api/reiseloesung/orte`). Scripted calls from one machine worked at first and then got the IP an Akamai 'Access Denied' page [seen 2026-09-28]. bahn.de's robots.txt disallows `/web/`, and its terms forbid access outside the user interface ([automation-rules.md](automation-rules.md)).

---
As of 2026-09-28. Sources: trainline-eu stations.csv on GitHub (https://github.com/trainline-eu/stations), Wikidata property P954 (https://www.wikidata.org/wiki/Property:P954), the bahn.de station suggestions seen in the browser, and live deep links verified on 2026-09-26.
