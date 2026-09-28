As of 2026-09-28 (2026 timetable); re-check before relying on it.

# Corridors out of Germany

This file is the lookup table for Phase 3 of the method ([method.md](method.md)). For every key train, find where it continues after D (or where it comes from before O), open the section for that border, and take four things from it:

1. The **tariff point** and the **carrier-change point**. The ticket must end beyond both.
2. The **sellers** that can price the whole trip, and whether they may sell it at all.
3. The **ticket-end families** to sweep: stations just past the point first, then stations along the line and its branches, then hubs.
4. The **via-feeders** that force a different feeder train.

Sellers price whole through-journeys, including purely domestic DB feeder trains. The key train does not have to cross a border itself. In the worked example ÖBB priced the DB Sprinter ICE 1507 Berlin -> München inside a ticket Berlin Hbf -> Kitzbühel ([examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md)).

Tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or one observation; [reported] = third-party source; [unverified]; [hypothesis]. Line routes come from the de.wikipedia line lists read on 2026-09-28 and count as [reported] unless tagged otherwise. German stops are listed in running order; "(...)" marks stops served only by some trains.

## The DB tariff points (read this first)

DB's international conditions, *Besondere Internationale Beförderungsbedingungen (SCIC-NRT)*, Stand 01.08.2026, Glossar 'Binnenverkehr', count some foreign stations as DB-domestic:

> "Allerdings zählt zum Binnenverkehr der DB auch der Verkehr von und zu denjenigen Bahnhöfen im Ausland, die in das innerdeutsche Tarifsystem einbezogen sind. Es handelt sich dabei insbesondere um a) die Bahnhöfe an den deutschen Strecken auf Schweizer Staatsgebiet (Basel Badischer Bahnhof und Kursbuchstrecke 730 'Hochrheinbahn'); b) die Bahnhöfe im österreichischen Außerferntal (Kursbuchstrecke 976, 'Außerfernbahn'). c) die österreichischen Bahnhöfe Salzburg und Kufstein."

Gloss: DB-domestic traffic also covers the foreign stations that are part of the German tariff: (a) Basel Badischer Bahnhof and the Hochrheinbahn (timetable line 730), (b) the Außerfernbahn stations in Austria (timetable line 976), (c) Salzburg and Kufstein.

**Tickets to these stations are DB-priced.** A foreign seller then shows a DB fare (ÖBB labels it 'DB-Tarif' or names DB as 'Vertragspartner', the contract partner), shows 'Ticket nicht verfügbar' (ticket not available), or sells only a partial ticket ('Teilstrecke'). In the reference session the ÖBB shop did exactly that for Berlin -> Salzburg Hbf and Berlin -> Kufstein, and for Reutte and Ehrwald on the Außerfernbahn ('DB-Tarif' rows 81,99-367,20 €) [verified 2026-09-26]. Always end the ticket at least one station further.

## Carrier-change points (SCIC-NRT Teil B, Stand 01.08.2026)

The carrier change ('Befördererwechsel') is where one railway hands over to the next. A foreign seller's own fare only applies beyond it.

| Border | Long-distance trains | Regional trains | Section |
|---|---|---|---|
| AT | Passau Hbf, Kufstein, Salzburg Hbf; via CZ: Schöna(Gr), Břeclav | Lindau-Reutin, Mittenwald(Gr), Simbach(Inn) | B.13.1 |
| IT via Brenner | Kufstein (DB/ÖBB), Brenner (ÖBB/DB Italia) | - | B.6.1 |
| IT via CH | Basel Bad Bf (DB/SBB), Chiasso or Domodossola | - | B.7.1 |
| CZ | Schöna(Gr); via AT: Passau, Kufstein, Salzburg, Břeclav | Selb-Plößberg(Gr) | B.20.1 |
| PL | Frankfurt (Oder)(Gr) | Forst (Lausitz)(Gr), Grambow(Gr), Gubin(Gr), Horka(Gr), Kostrzyn nad Odrą(Gr), Tantow(Gr), Zgorzelec(Gr) | B.14.1 |
| DK | Flensburg(Gr) | Tønder(Gr) | B.2.1 |
| NL | Bad Bentheim(Gr) or Emmerich(Gr); Venlo(Gr) on diversions | Herzogenrath(Gr), Gronau(Westf)(Gr), Venlo(Gr), Weener(Gr) | B.11.1 |
| BE | ICE: at the Belgian station where the traveller boards, alights or changes (Liège, Leuven, Brussels Airport-Zaventem, Brussels, Antwerpen) | SNCB line S 41: Aachen Hbf, if changing there | B.1.1 |
| FR | Kehl(Gr), Forbach(fr) | Apach(fr), Hanweiler(Gr), Kehl(Gr), Lauterbourg(fr), Neuenburg(Baden)(Gr), Wissembourg(fr) | B.3.1, B.4.1 |
| CH | Waldshut, Basel Bad Bf, Schaffhausen; via AT: Lindau-Reutin, St. Margrethen | - | B.17.1 |
| LU | Igel(Gr) (train); Saarbrücken (express bus) | - | B.10.1 |

"(Gr)" is the border point on the line, not necessarily a passenger stop. Two rules from the same text matter for sellers: Eurostar trains are outside this tariff with no mutual recognition of tickets (B.1.1, B.3), and the TGV Freiburg-Paris is sold only on SNCF's own terms (B.3).

---

## AT Salzburg

**Trains and German stops**
- Line 62 (ICE 4, Railjet). Since the Koralmbahn opened (December 2025) the line is split at München, except three ICE 4 pairs that run through: Frankfurt - Darmstadt - Bensheim - Weinheim - Heidelberg - Stuttgart - Ulm - Günzburg - Augsburg - München - München Ost - Rosenheim - Prien - Traunstein - Freilassing - Salzburg - Golling-Abtenau - Bischofshofen - St. Johann im Pongau - Schwarzach-St. Veit - Bad Gastein - Spittal-Millstättersee - Villach - Klagenfurt - Graz (Austrian stops abridged). ICE 118/119 starts in Münster and runs via Köln Messe/Deutz, Frankfurt Flughafen, Mannheim and Vaihingen. The southern section München - Graz runs mostly as Railjet; two Railjet pairs continue from Graz to Wien.
- Line 90 (Railjet, every 2 h): München - Salzburg - Linz - St. Pölten - Wien Meidling - Wien - Győr - Budapest Keleti. The only German stop is München.
- EC München - (Villach) - Ljubljana - Zagreb, new in 2026, leaving München at 10:16 [reported, DB Bayern 2026 press release]. German stop: München.
- WESTbahn Wien - Salzburg - Rosenheim - München Ost - München Hbf, two pairs continuing to Augsburg - Günzburg - Ulm - Stuttgart. München Ost is a restricted stop; the sources disagree on the direction [unverified], see [sellers/westbahn.md](sellers/westbahn.md). A separate operator and a separate train, not the same-train lever ([sellers/westbahn.md](sellers/westbahn.md)).
- Regional feeders from München: RE5 Meridian to Salzburg via Rosenheim and Bernau a Chiemsee; RJX and ICE 118 also run Salzburg <-> München in the session's ÖBB results [verified 2026-09-26].
- Night trains via Salzburg: see [night trains](#night-trains).

**Tariff point and carrier change.** Salzburg Hbf is a DB tariff point (Glossar c) and a carrier-change point (B.13.1). The ticket must end beyond Salzburg Hbf.

**Sellers**
- ÖBB shop or app ([sellers/oebb.md](sellers/oebb.md)): the proven lever. It sells Sparschiene (ÖBB's saver fare) from German stations through München, including the DB feeder. Yes, it may sell the trip.
- Trainline ([sellers/trainline.md](sellers/trainline.md)) resells ÖBB fares at the same price; it showed ÖBB Sparschiene through-fares from German stations next to DB fares in the session [seen 2026-09-26].
- DB Sparpreis Europa Austria on bahn.de ([sellers/db-bahn-de.md](sellers/db-bahn-de.md)): from 19,99 € direct. DB's own fares via München were expensive in the session (Salzburg 148,40 €, Villach 227,55 €) [seen 2026-09-26].
- WESTbahn DeutschlandPlusTicket, for Deutschland-Ticket holders only, e.g. Stuttgart - Salzburg 34,90 €, München - Wien 74,90 € [reported, westbahn.at].
- ČD and SBB: dead ends here, 3-4 times the ÖBB price in the session ([sellers/cd.md](sellers/cd.md), [sellers/sbb.md](sellers/sbb.md)).

**Ticket-end families** (Salzburg Hbf itself is out)
1. Just past the point: Salzburg Süd, Puch b.Hallein, Hallein, Golling-Abtenau, Werfen. Salzburg city stations other than the Hbf, e.g. Salzburg Mülln-Altstadt [reported].
2. Along the Tauern line: Bischofshofen, St. Johann im Pongau, Schwarzach-St. Veit, Bad Gastein, Spittal-Millstättersee, Villach, Klagenfurt, Graz. Branch from Schwarzach: Zell am See, Saalfelden, Leogang.
3. Along the Westbahn: Attnang-Puchheim, Wels, Linz, St. Pölten, Wien.
Prices do not rise with distance. On identical trains in the session: Puch b.Hallein and the Kitzbühel line 54,00 €, Zell am See 62,60 €, Salzburg Süd 77,20 € [verified and seen 2026-09-26].

**Via-feeders.** Via 'Bernau a Chiemsee' forces the RE5 Meridian feeder to the Salzburg line. It gave 62,60 € to Bischofshofen, Schwarzach-St. Veit, Villach and Zell am See on ICE 1503 and ICE 1505, where the default routing showed only 1st class [verified 2026-09-26]. From Hamburg: Hamburg Hbf -> Schwarzach im Pongau-St.Veit Bahnhof via 'Bernau a Chiemsee' 62,60 € on ICE 785, where the default routing via München cost 77,20 € [seen 2026-09-28, list price]. Other small RE5 stations are untested [hypothesis].

**German domestic pairs on foreign-priced trains.** Any DB long-distance train into München can be the key train (Berlin, Hamburg, Frankfurt, Köln, Essen, Stuttgart, Ulm feeders). On the trains themselves: München - Rosenheim - Prien - Traunstein - Freilassing; on the line-62 through pairs also Frankfurt - Stuttgart - Ulm - Augsburg - München.

**Evidence**
- Session results: ICE 1003 Berlin -> Puch b.Hallein 54,00 € [verified 2026-09-26]; return Puch b.Hallein -> Berlin 54,00 € on ICE 1006, 1506, 504 and 1004 [verified 2026-09-26]. Full table: [examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md).
- appgefahren, 23.09.2025: Essen -> Salzburg Mülln via ÖBB Sparschiene 62,60 € against DB Essen -> München 139,99 € on the same connection; also names Ulm, Stuttgart and Memmingen as origins [reported].
- ÖBB excludes Innsbruck - Garmisch - München from Sparschiene [reported, oebb.at Sparschiene Europa page].
- Corridor rule, SCIC-NRT B.13.7 'Korridorverkehre' (checked in the Stand 01.08.2026 text): ÖBB corridor trains over the German section Salzburg - Rosenheim - Kufstein accept tickets that include the Austrian route Wörgl - Zell am See - Bischofshofen - Salzburg, but not tickets that include the DB route Kufstein - Rosenheim - Salzburg.

## AT Kufstein/Tirol

**Trains and German stops**
- Line 24 (ICE, weekend reinforcements; seen on a Friday too, see Evidence): Hamburg-Altona - Hamburg Dammtor - Hamburg - Hamburg-Harburg - Lüneburg - Bad Bevensen - Uelzen - Celle - Langenhagen Mitte - Hannover - Göttingen - Kassel-Wilhelmshöhe - Fulda - Würzburg - Steinach - Ansbach - Treuchtlingen - Donauwörth - Augsburg - München-Pasing - München - München Ost - Rosenheim - Kufstein - Wörgl, then either Jenbach - Innsbruck or Hopfgarten - Kirchberg - Kitzbühel Hahnenkamm - Kitzbühel - St. Johann - Fieberbrunn - Hochfilzen - Saalfelden - Zell am See - Schwarzach-St. Veit.
- Line 89 (DB-ÖBB EC/Railjet): München - München Ost - Rosenheim - Kufstein - Wörgl - Jenbach - Innsbruck, then Brenner - Bozen - Trento - Verona and on to Venezia or Bologna - Ancona; one seasonal Saturday pair to Feldkirch. German domestic pair: München - Rosenheim.
- ICE 218/219 (line 62 branch) reaches Innsbruck via Lindau and the Arlberg, not via Kufstein: see [AT Lindau-Bregenz](#at-lindau-bregenz).
- Regional feeder: RB54 München - Rosenheim - Oberaudorf - Kufstein.
- Night: NJ 40491/40420 Hamburg - München - Innsbruck, see [night trains](#night-trains).

**Tariff point and carrier change.** Kufstein is a DB tariff point (Glossar c) and the carrier change DB/ÖBB (B.13.1; for the Brenner trains B.6.1, with a second change at Brenner). The ticket must end beyond Kufstein.

**Sellers**
- ÖBB ([sellers/oebb.md](sellers/oebb.md)): yes, the proven lever.
- DB Sparpreis Europa Austria (from 19,99 €) and Italy via the Brenner (from 19,99 €). For Italy, SCIC-NRT B.6.11 says train binding also applies in Austria and Italy and "Alle auf der Fahrkarte angegebenen Züge sind zu nutzen" ('all trains shown on the ticket are to be used'). The sentence refers to the group-fare sections, so whether it binds individual tickets is [unverified]. Treat getting off early on a DB ticket to Italy as a risk.
- Trenitalia: a dead end. It priced only the leg from München and refused the Berlin sale ('Diese Lösung kann nicht über diesen Verkaufskanal gekauft werden', 'this solution cannot be bought through this sales channel') [seen 2026-09-26] ([sellers/trenitalia.md](sellers/trenitalia.md)).

**Ticket-end families** (Kufstein itself is out)
1. Just past the point: Kirchbichl, Wörgl Hbf.
2. The Kitzbühel line: Hopfgarten im Brixental, Westendorf in Tirol, Brixen im Thale, Kirchberg in Tirol, Kitzbühel Hahnenkamm, Kitzbühel, St. Johann in Tirol, Fieberbrunn, Hochfilzen, Leogang, Saalfelden, Zell am See.
3. The Inn valley: Brixlegg, Jenbach, Schwaz, Hall in Tirol, Innsbruck; the Arlberg: Landeck-Zams, St. Anton, Bludenz, Feldkirch.
4. Italy via the Brenner: mostly 'Teilstrecke' from Berlin in the session, so low prior.
Non-monotonic again: on ICE 1507 Kitzbühel and the whole Kitzbühel line to Hochfilzen cost 54,00 €, Zell am See 62,60 €. With the default routing (e.g. on ICE 1507), Wörgl, Jenbach and Innsbruck got no Sparschiene (217-342 €); Innsbruck reached 62,60 € only with Via 'Oberaudorf' on ICE 1003 [verified 2026-09-26]. On the return, Wörgl Hbf and Jenbach -> Berlin cost 62,60 € on ICE 504 and ICE 1002 [verified 2026-09-26].

**Via-feeders.** Via 'Oberaudorf' forces the RB54 feeder to Kufstein. It gave 62,60 € to Kitzbühel, Zell am See and Innsbruck on ICE 1003 [verified 2026-09-26].

**German domestic pairs on foreign-priced trains.** Line 24: Hamburg - Hannover - Würzburg - Augsburg - München - Rosenheim, almost the whole run. Line 89: München - Rosenheim. Plus any DB train that feeds München.

**Evidence**
- Session: ICE 1507 Berlin Hbf -> Kitzbühel Bahnhof 54,00 € and the return Kitzbühel -> Berlin 54,00 € on ICE 1508 [verified 2026-09-26]; see [examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md).
- Line 24 [seen 2026-09-28]: ICE 1185 Hamburg Hbf 09:21 -> München Hbf 15:05 -> Kitzbühel 17:32 (-> Schwarzach) on Fr 02.10.2026. ÖBB Hamburg Hbf -> Kitzbühel Bahnhof 62,60 € NON-FLEX, 0 changes [verified 2026-09-28]; the same departure also appeared as a separate RJ 89 routing via München at 227,60 €. When a key train runs past D itself, price ends on its own run first.
- mydealz, 16.06.2025: Köln -> Innsbruck via ÖBB, getting off in München, saving "über 130 €"; "funktioniert nicht auf allen Strecken" ('does not work on all routes') [reported].

## AT Außerfern (DB tariff)

**Trains.** The Außerfernbahn (timetable line 976) through Ehrwald and Reutte has regional trains only. The Mittenwaldbahn from Garmisch-Partenkirchen to Innsbruck changes carrier at Mittenwald(Gr) (B.13.1, regional trains).

**Tariff point.** All Außerfernbahn stations are DB tariff points (Glossar b). A ticket to Reutte or Ehrwald is a DB ticket, whoever sells it.

**Sellers.** ÖBB returned 'DB-Tarif' rows only for Reutte and Ehrwald, 81,99-367,20 € in both directions [verified and seen 2026-09-26]. ÖBB excludes Innsbruck - Garmisch - München from Sparschiene [reported].

**Ticket-end families.** None on the Außerfernbahn. Seefeld in Tirol (Mittenwaldbahn, Austria) was priced by ÖBB via München in both directions, with nothing below the Kitzbühel and Salzburg lines [verified 2026-09-26].

**Verdict.** Treat as a dead end. Skip it in quick mode.

## AT Lindau-Bregenz

**Trains and German stops**
- ICE 218/219 (line 62): Dortmund - Bochum - Essen - Duisburg - Düsseldorf - Köln Messe/Deutz - Siegburg/Bonn - Frankfurt Flughafen - Mannheim - Stuttgart - Ulm - Biberach (Riß) - Ravensburg - Friedrichshafen Stadt - Lindau-Reutin - Bregenz - Dornbirn - Feldkirch - Bludenz - St. Anton - Landeck-Zams - Innsbruck (Austrian stops abridged).
- ECE 88 München - Buchloe - Memmingen - Lindau-Reutin - Bregenz - St. Gallen - Zürich: see [CH Lindau-St. Gallen](#ch-lindau-st-gallen).
- WESTbahn: since December 2025, 7 pairs Wien - Innsbruck - Bregenz - Lindau-Insel every 2 hours. The German station is Lindau-Insel ([sellers/westbahn.md](sellers/westbahn.md)).

**Tariff point and carrier change.** SCIC-NRT B.13.1 lists Lindau-Reutin as the carrier change for regional trains. For long-distance trains into Austria it names only Passau, Kufstein and Salzburg, so the point for ICE 218/219 is not stated [unverified]. For Switzerland via Austria: Lindau-Reutin and St. Margrethen (B.17.1). End the ticket at Bregenz or beyond.

**Sellers.** ÖBB, DB Sparpreis Europa Austria, WESTbahn (separate train).

**Ticket-end families.** Bregenz, Dornbirn, Feldkirch, Bludenz; then the Arlberg towards Innsbruck.

**German domestic pairs on foreign-priced trains.** ICE 218/219: Köln - Frankfurt Flughafen - Mannheim - Stuttgart - Ulm - Friedrichshafen - Lindau. ECE 88: München - Buchloe - Memmingen - Lindau-Reutin.

**Evidence.** From Berlin via München, ÖBB offered Bregenz only as Standard (222,40 €) on every direct Sprinter in the window: offer page read for ICE 1501 and ICE 1507 [verified 2026-09-26], the others in the list [seen 2026-09-26]. Outside the window it showed Sparschiene 96,20 € on ICE 1509 and 62,60 € on ICE 1601 [seen 2026-09-26, list view]. The Lindau corridor may still work from Stuttgart, Ulm or Memmingen; appgefahren names Memmingen as an origin for the ÖBB trick [reported]. Otherwise untested [hypothesis].

## AT Passau-Linz-Wien

**Trains and German stops**
- Line 91 (ICE T, every 2 h): Dortmund - (Bochum - Essen - Duisburg - Düsseldorf, or Hagen - Wuppertal - Solingen) - Köln - Bonn - Koblenz - Mainz - Frankfurt Flughafen - Frankfurt - Hanau - Aschaffenburg - Würzburg - Nürnberg - Regensburg - Plattling - Passau - Schärding - Wels - Linz - Amstetten - St. Pölten - Tullnerfeld - Wien Meidling - Wien. One pair runs from Hamburg-Altona - Hamburg Dammtor - Hamburg - Hamburg-Harburg - Hannover - Göttingen - Kassel-Wilhelmshöhe - Fulda - Würzburg instead. Since 2025 only two trains per direction run through between Dortmund and Wien.
- ICE 92/93 and ICE 94/95: Hamburg-Altona - Hamburg - Berlin-Spandau - Berlin - Berlin Südkreuz - Halle - Erfurt - Coburg - Nürnberg - Regensburg - Straubing (92/93) or Plattling - Passau - Wels - Linz - St. Pölten - Wien Meidling - Wien. ICE 94/95 runs coupled with ICE 1694/1695 between Berlin and Nürnberg.
- The IC 17 section Berlin - Leipzig - Jena - Nürnberg - Regensburg - Passau - Wien ended in December 2025.
- Night: NJ 490/491 Hamburg - Wien, see [night trains](#night-trains).

**Tariff point and carrier change.** Carrier change at Passau Hbf (B.13.1). Passau is in Germany and is not a foreign DB tariff point. The ticket must end in Austria: Schärding is the first stop past the border on line 91.

**Sellers.** ÖBB (Sparschiene through-tickets from German origins), DB Sparpreis Europa Austria (from 19,99 €), Trainline as a cross-check. Whether ÖBB offers the same saver pattern on this corridor as via München is [unverified].

**Ticket-end families.** Schärding; then Wels, Linz, Amstetten, St. Pölten, Wien. The session's Linz and Wien rows were routed via München, not Passau, so they say nothing about this corridor.

**German domestic pairs on foreign-priced trains.** Köln - Koblenz - Mainz - Frankfurt; Frankfurt - Würzburg - Nürnberg; Nürnberg - Regensburg - Plattling - Passau; on ICE 92-95 also Hamburg - Berlin and Berlin - Halle - Erfurt - Nürnberg.

**Evidence.** No priced sample on this corridor yet [hypothesis]. See [examples/route-hypotheses.md](examples/route-hypotheses.md), example 2.

**Caveat: works 14.06.-13.12.2026.** The Regensburg - Passau corridor renovation leaves only limited service between Regensburg and Wien. Steps:
1. In Phase 1, open the key train's connection details on bahn.de for the travel date and check whether it runs through Passau to Linz, ends early, or shows a bus replacement.
2. If it runs through, sweep ÖBB O -> Schärding / Linz via D as planned.
3. If it does not, run one ÖBB search O -> Linz/Donau Hbf via D. If ÖBB routes via München or a bus, the row fails the directness test: record 'Passau corridor closed by works 14.06-13.12.2026' and go to the München corridors (for Regensburg or Passau as D, a München-routed ticket works only if the user accepts the change) or to the domestic-only playbook ([sellers/db-bahn-de.md](sellers/db-bahn-de.md)).

## Night trains

**Seller rule.** Since 10 June 2018 Nightjets are sold only at the ÖBB tariff, and DB-tariff through-tickets are no longer accepted on them (de.wikipedia 'ÖBB Nightjet', section Tarife). So domestic Nightjet legs, e.g. Hamburg -> München, are ÖBB-priced even when bought on bahn.de. bahn.de markets Hamburg - München as an international offer from 34,90 € [reported]; seats from 29,90 € and booking Hamburg -> Innsbruck to get off in München are described by bahndampf [reported].

**Nightjet lines with German stations** (de.wikipedia table; German intermediate stops [unverified] where not named)
- NJ 40491 Hamburg - München - Innsbruck; NJ 40420 back.
- NJ 490/491 Hamburg - Wien.
- NJ 470/471 Hamburg - Zürich.
- NJ 408/409 Berlin - Zürich, via Leipzig since December 2022.
- NJ 402/403 Amsterdam - Köln - Zürich.
- NJ 420 Innsbruck - Amsterdam; NJ 40490 Wien - Amsterdam.
- NJ 456 Graz - Wien - Praha - Berlin.
- NJ 294/295 München - Roma.
- NJ 40468 Wien - Brussels is still in the de.wikipedia table; whether it runs after the Paris end is [unverified].
- seat61 lists Düsseldorf, Köln and Koblenz - München as bookable Nightjet legs [reported].

**Other night trains**
- European Sleeper, 3 trains a week per line ([sellers/european-sleeper.md](sellers/european-sleeper.md)): Brussels - Antwerpen - Rotterdam - Den Haag - Amsterdam - Amersfoort - Deventer - Bad Bentheim (operational stop only) - Berlin - Dresden - Bad Schandau - Praha (since 25.05.2023, to Praha since 25.03.2024); Paris - Mons - Brussels - Liège - Berlin (since 26.03.2026), via Hamburg-Harburg since 13.07.2026; Brussels - Liège - Aachen - Köln - Zürich - Lugano - Como - Milano (since 09.09.2026). Its site says "You cannot book domestic journeys within the Netherlands, Belgium, France, Italy, Switzerland and Czechia with us". Germany is not on that list, so Berlin - Dresden, Hamburg-Harburg - Berlin or Aachen - Köln may be bookable [unconfirmed].
- Snälltåget: night train Stockholm/Malmö - København - Padborg - Hamburg - Berlin, extended on some dates in 2025 to Dresden and Chemnitz; day train IC 306/307 Stockholm - Malmö - København - Hamburg since 04.05.2026, photographed at Rendsburg on its first day [reported]. Domestic German sales policy [unverified]. SBB cannot sell Snälltåget tickets [reported].
- EuroNight Praha - Dresden - Leipzig - Erfurt - Frankfurt Süd - Mannheim - Karlsruhe - (Basel -) Zürich [reported, en.wikipedia 'EuroNight'; current running days unverified].
- EuroNight München - Wien - Warszawa (since 2024), and a new night train München - Przemyśl leaving München Hbf at 18:35 with sleeper, couchette and seats [reported, DB Bayern 2026 press release]. German stop: München only.

**Ticket-end families.** For Nightjets the ticket can end in Germany (ÖBB tariff anyway). For the others, end beyond the carrier-change point of the border the train crosses.

**Verdict.** Useful as a separate-train anchor ("slower but cheaper"), rarely as the same-train lever for a day trip. Compare on its own speed (SKILL.md Phase 4 step 5; [method.md](method.md) §4, row 'Separate-train anchors').

## CZ Bad Schandau-Děčín

**Trains and German stops**
- Line 27, ČD ComfortJet / railjet, no longer EC: Berlin Hbf (tief) - Berlin Südkreuz - Elsterwerda - Dresden-Neustadt - Dresden Hbf - Bad Schandau - Děčín - Ústí nad Labem - Praha-Holešovice - Praha - Pardubice - Česká Třebová - Brno - Břeclav - Wien (RJ/RJX 250/251/244, RJ 177; RJ 251 runs through to Villach). The stop at Doberlug-Kirchhain was dropped for 2026. Co-operated by ČD and ÖBB on the Wien and Villach runs. On Fr 02.10.2026 the Berlin RJs ended in Dresden (see [Timetable caveats 2026](#timetable-caveats-2026)).
- IC 2173/2175 Rostock Hbf - Flughafen BER - Terminal 1-2 - Dresden Hbf, every 2 h: domestic, and it does not call at Berlin Hbf. From Berlin Hbf, ČD and Trainline route it with an R to Flughafen BER (08:21 -> 10:28, 10:19 -> 12:28 on Fr 02.10.2026) [seen 2026-09-28]; a key connection only when changes are allowed.
- IC 2443/2445 (line number unverified): Hannover - Magdeburg - Leipzig - Dresden-Neustadt - Dresden Hbf. IC 2445 on Fr 02.10.2026: Hannover 08:37, Magdeburg 10:07/10:14 (inferred), Leipzig 11:31, Dresden-Neustadt 12:43, Dresden Hbf 12:50 [seen 2026-09-28, Trainline]. It feeds this corridor from Hannover, Magdeburg and Leipzig.
- ICE 872/873 Hamburg-Altona - Hamburg Dammtor - Hamburg - Berlin-Spandau - Berlin Hbf / Berlin Gesundbrunnen: the DB part of line 27.
- RJ 384/385 København - Padborg - Hamburg - Berlin - Dresden - Praha, since 01.05.2026 (ČD ComfortJet). Sold by ČD, DSB and DB [reported].
- ICE 1970 Dresden Hbf - Berlin Gesundbrunnen since 11.07.2026: DB, domestic.
- Night: European Sleeper Berlin - Dresden - Bad Schandau - Praha; EuroNight Praha - Dresden - Leipzig - Frankfurt - Zürich ([night trains](#night-trains)).

**Tariff point and carrier change.** Schöna(Gr), the border point between Bad Schandau and Děčín (B.20.1). The ticket must end at Děčín hl.n. or beyond.

**Sellers**
- ČD ([sellers/cd.md](sellers/cd.md)): its cheap fare 'Včasná jízdenka Evropa' requires "povinnou vazbou na přeshraniční vlak" (a mandatory cross-border train). ČD does not sell purely German legs such as Berlin - Dresden. The cd.cz summary says the cheap fare does not apply to trips starting in Germany [reported]; from Berlin Hbf a cheap fare was seen, but only on routings through ČD's own cross-border train (Evidence) [seen 2026-09-28].
- DB Sparpreis Europa Czech Republic: from 14,99 € (Sparpreis Europa 17,99 €), sold until the day before travel (B.20.9).
- European Sleeper: see above, domestic sale [unconfirmed].

**Ticket-end families.** Ústí nad Labem hl.n., Děčín hl.n. and Praha hl.n. On ČD price all three: the end decides whether ČD routes through its own cross-border train (Evidence).

**German domestic pairs on foreign-priced trains.** Hamburg - Berlin, Berlin - Elsterwerda - Dresden, Dresden - Bad Schandau.

**Feeder shapes.** ČD or DB Europa CZ: O (any German station) -> Děčín hl.n. via D, get off at D; Děčín hl.n. -> D via O, board at O. Evidence: [sellers/cd.md](sellers/cd.md) (the Včasná fare runs from any ČD fare point to any DB fare point) [hypothesis].

**Via-feeders.** None tested. Via support: ČD via in 'More options' [seen]; bahn.de stopover [reported]. Candidate regional stops between Dresden and the border: Pirna, Königstein [hypothesis], low priority.

**Evidence**
- travel-dealz, 31.03.2025: Berlin - Děčín with ČD about 17 € against DB 13,99 € [reported].
- [seen 2026-09-28] Travel Fr 02.10.2026, age 25 (ČD 'Junior 18—25 let'), 2nd class: ČD Berlin Hbf -> Ústí n.L.hl.n. 689 Kč on rj 173/175 + rj 10175/10177; -> Děčín 1948 Kč on the same RJs (S-Bahn + Os routing); -> Praha 861 Kč. DB on the same RJs 30,99-32,99 € and DB Sparpreis Europa Young to Ústí 36,99-40,99 €, Děčín 43,99-47,99 €, Praha from 42,94 € (both via Trainline). Price Ústí, Děčín and Praha: the end decides whether ČD routes through its own cross-border train.
- [seen 2026-09-28] Hannover Hbf -> Děčín hl.n. on IC 2445, DB Super Sparpreis Europa Young 59,99 € against DB Hannover -> Leipzig 34,99 € on the same train (Trainline).
- Session: ČD priced Berlin -> Villach at 6531 Kč and Berlin -> Innsbruck at 5845 Kč via München, 3-4 times ÖBB [seen 2026-09-26].
- The 2024 trick of free train choice within Germany on ČD tickets looks closed; readers reported re-binding in 2024 [reported, dealdoktor 28.02.2024].

## CZ Furth im Wald-Plzeň

**Trains and German stops.** RE 25, run by alex (Die Länderbahn): München - Landshut - Regensburg - Schwandorf - Furth im Wald - Plzeň - Praha. ČD markets the München - Praha trains as EuroCity every two hours and sells them with 'Včasná jízdenka Evropa', Praha - München from about 459 CZK [reported, cd.cz]. In Germany the service has been a Bavaria-ordered regional train since 2002, without DB long-distance trains [reported, de.wikipedia 'Bahnstrecke München-Regensburg']. Its 2026 tariff class in Germany is [unverified].

**Tariff point and carrier change.** SCIC-NRT B.20.1 names only Schöna(Gr) (long-distance) and Selb-Plößberg(Gr) (regional). The point for Furth im Wald is not stated [unverified].

**Sellers.** ČD. DB Sparpreis Europa Czech Republic is **not valid** on alex (Länderbahn) or Vogtlandbahn trains (B.20.9).

**Ticket-end families.** Domažlice [unverified as a stop], Plzeň hl.n., Praha hl.n.

**German domestic pairs.** München - Landshut - Regensburg - Schwandorf - Furth im Wald, regional-priced.

**Feeder shapes.** ČD: Plzeň hl.n. -> D via München, board in München; O -> Plzeň hl.n. via München, get off in München. Evidence: none [hypothesis].

**Via-feeders.** None tested; the German section is regional, so a via adds nothing.

**Nürnberg - Praha.** No through long-distance train was found for 2026. Nürnberg - Marktredwitz - Cheb is not electrified, and DB closed the Hersbruck - Pegnitz section until further notice from 19.09.2025 [unverified: paraphrase, not re-read].

**Verdict.** No same-train lever for a German long-distance key train. Useful only for trips to Czechia.

## PL Frankfurt (Oder)

**Trains and German stops**
- Berlin-Warszawa-Express, EC 40-49 and 246-249 (PKP Intercity and DB): Berlin Hbf - Berlin Ostbahnhof - Frankfurt (Oder) - Poznań - Warszawa. Six pairs Mon-Fri, five on Sat and Sun.
- Berlin-Gdynia-Express, one pair a day via Poznań and Gdańsk. en.wikipedia says it runs as EC 'Gedania' 230/231 since 2025 [reported].
- EC Wawel and the other EC Berlin - Wrocław - Kraków trains: Berlin Hbf - Berlin Ostbahnhof - Frankfurt (Oder) - Rzepin - Zielona Góra - Legnica - Wrocław - Opole - Katowice - Kraków - Tarnów - Rzeszów - Przemyśl (Polish stops abridged). en.wikipedia counts three Berlin - Kraków - Przemyśl pairs (EC 54-59) by 2025 [reported].

**Tariff point and carrier change.** Frankfurt (Oder)(Gr), between Frankfurt (Oder) Oderbrücke and Słubice (B.14.1).

**Sellers**
- PKP Intercity ([sellers/pkp-intercity.md](sellers/pkp-intercity.md)): 'Berlin-Warsaw/Gdynia-Special' from 29/39 € (Warszawa/Gdynia - Berlin), 16/19 € (Poznań - Berlin), 12 € (Poznań - Frankfurt (Oder)); every relation starts in Poland; bought at least 3 days ahead, non-refundable [reported; the special-offer page is dated 2017].
- DB Sparpreis Europa Poland: from 18,99 € (Sparpreis Europa 22,99 €). PKP e-IC sells only 60 days ahead; bahn.de may open the same trains up to 6 months ahead [reported, seat61].

**Ticket-end families.** Rzepin (Wawel line only), Poznań Gł., Warszawa; Gdańsk and Gdynia; Wrocław, Kraków.

**German domestic pairs on foreign-priced trains.** Berlin Hbf - Berlin Ostbahnhof - Frankfurt (Oder) only. No reservation is needed for this domestic section.

**Feeder shapes.** DB Europa PL: O (any German station) -> Poznań Gł. via Berlin, get off in Berlin; Poznań Gł. -> D via Berlin, board in Berlin. PKP e-IC knows only Berlin and Frankfurt (Oder) online, so it has no feeder shapes. Evidence: none [hypothesis].

**Via-feeders.** None tested. Via support: bahn.de stopover [reported]; PKP none known. Candidate regional stops on RE1: Erkner, Fürstenwalde [hypothesis], low priority.

**Verdict.** The German leg is short and regional trains or the Deutschland-Ticket usually win. PKP matters only for trips to Poznań or beyond, or for the return from Poland.

**Caveat.** June to December 2026 the EC trains use Berlin Gesundbrunnen instead of Berlin Hbf [reported].

## PL Leipzig-Wrocław

**Trains and German stops.** New since 14.12.2025: EC Leipzig - Wrocław - Kraków, two pairs a day, DB and PKP Intercity. German stops: Leipzig - Riesa - Elsterwerda - Ruhland - Hoyerswerda; then Wrocław - Kraków; the morning train continues to Przemyśl [reported, DB press release].

**Tariff point and carrier change.** B.14.1 names only Frankfurt (Oder)(Gr) for long-distance trains. The border point of this new EC is not stated in the 01.08.2026 text; probably Horka(Gr) (B.14.1 regional list), route Hoyerswerda - Horka - Węgliniec [hypothesis].

**Sellers.** PKP Intercity [unverified for this line], DB Sparpreis Europa Poland (from 18,99 €).

**Ticket-end families.** First try Węgliniec (EVA 5100068), then Legnica, Wrocław Główny, Opole, Katowice, Kraków.

**German domestic pairs.** Leipzig - Riesa - Elsterwerda - Ruhland - Hoyerswerda.

**Feeder shapes.** DB Europa PL: O -> Węgliniec or Wrocław Główny via Leipzig, get off in Leipzig; the reverse, board in Leipzig. Evidence: none [hypothesis].

**Via-feeders.** None tested; bahn.de stopover [reported].

**Evidence.** Hannover -> Węgliniec 58,99 € Super Sparpreis Europa Young on IC 2445, routed Dresden-Neustadt - Görlitz - Zgorzelec, partly by bus, not via the EC; DB Hannover -> Leipzig was 34,99 € on the same train [seen 2026-09-28, travel 02.10.2026]. The EC route itself is still unpriced [hypothesis].

## DK Flensburg-Padborg

**Trains and German stops**
- ECE Hamburg - Padborg - København via Jutland and Funen: DSB Talgo sets ('DSB EC') since November 2025, branded ECE since 26.01.2026, ICE tariff in Germany. Some pairs still ran with DB IC1 coaches or DSB MF units in April 2026. Up to four extra trains a day Hamburg - København since May 2026. The German intermediate stops are [unverified]; commonly given are Neumünster, Rendsburg, Schleswig and Flensburg.
- RJ 384/385 Praha - Dresden - Berlin - Hamburg - Padborg - København (ČD ComfortJet), since 01.05.2026.
- ICE line 4 (Sprinter), partly extended: (Padborg/Flensburg -) Hamburg - Hannover - Frankfurt.
- IC 76 (DSB): Flensburg - Padborg - Tinglev - Rødekro - Vojens - Vamdrup - Lunderskov - Kolding - Fredericia, every 2 hours.
- Snälltåget day train IC 306/307 and night train, see [night trains](#night-trains).

**Tariff point and carrier change.** Flensburg(Gr) for long-distance trains (B.2.1). Padborg is the first station past the border.

**Sellers**
- DSB ([sellers/dsb.md](sellers/dsb.md)): tickets must start or end in Denmark, so no Germany-only trips; a German origin with a Danish end should work. Cheapest fare 'DSB Orange Europa', train-bound, no change or refund; København - Hamburg from 221-289 kr [reported].
- DB Sparpreis Europa Denmark: from 28,99 € (Sparpreis Europa 33,99 €; Super Sparpreis Europa Young 24,99 €).

**Ticket-end families.** Padborg, then Kolding, Fredericia, Odense, København H, Aarhus H.

**German domestic pairs on foreign-priced trains.** Hamburg - Flensburg on the ECE and RJ; Hamburg - Berlin on RJ 384/385.

**Feeder shapes.** DSB: Padborg St. -> D via Hamburg (e.g. D = Berlin, Hannover, Frankfurt, Köln, München), board in Hamburg; O -> Padborg St. via Hamburg, get off in Hamburg. Evidence: [sellers/dsb.md](sellers/dsb.md) (DSB sells to München, Frankfurt, Köln, Leipzig, Nürnberg and Stuttgart) [hypothesis].

**Via-feeders.** None tested. Via support: DSB none. Candidate regional stops between Hamburg and the border: Neumünster, Rendsburg, Schleswig [hypothesis], low priority.

**Verdict.** The German leg is short and the Europa floor is 28,99 €, so it is rarely worth it for domestic pairs.

**Caveat.** DSB's Hamburg departures at 07:04 and 08:53, and København departures at 16:22 and 18:22, do not run from 31.08. to 31.10.2026 [reported, dsb.dk].

## NL Bad Bentheim

**Trains and German stops**
- Line 77, all ICE 3neo since November 2025 (formerly IC Berlin - Amsterdam): Amsterdam - Hilversum - Amersfoort - Apeldoorn - Deventer - Hengelo - Bad Bentheim - Rheine - Osnabrück - Bünde - Hannover - Berlin-Spandau - Berlin - Berlin Ostbahnhof. The first train of the day starts in Münster (ICE 4).
- European Sleeper stops at Bad Bentheim for operational reasons only ([night trains](#night-trains)).

**Tariff point and carrier change.** Bad Bentheim(Gr) (B.11.1).

**Sellers**
- NS International ([sellers/ns-international.md](sellers/ns-international.md)): resells DB 'Europa' fares, including trips within Germany, at DB prices, not NS-priced contingents [reported, NS terms 'Within Germany and from Germany to other countries'].
- DB Sparpreis Europa Netherlands: from 19,99 € (Sparpreis Europa 24,99 €).

**Ticket-end families.** Hengelo (first stop past the border on line 77), Deventer, Apeldoorn, Amersfoort, Amsterdam.

**German domestic pairs on foreign-priced trains.** Bad Bentheim - Rheine - Osnabrück - Hannover - Berlin.

**Feeder shapes.** DB Europa NL or NS: O (any German station) -> Hengelo via D, get off at D; Hengelo -> D via O, board at O. Evidence: none (NS resells DB Europa fares) [hypothesis].

**Via-feeders.** None tested. Via support: bahn.de stopover [reported]; NS none. Candidate regional stops: Salzbergen, Schüttorf [hypothesis], low priority.

**Verdict.** Same fares as DB, so it helps only when a domestic contingent is sold out and a Europa contingent is not [hypothesis].

## NL Emmerich

**Trains and German stops**
- Line 78 (ICE 3neo, every 2 h): Amsterdam - Utrecht - Arnhem - Oberhausen - Duisburg - Düsseldorf - Köln - Siegburg/Bonn - Frankfurt Flughafen - Frankfurt.
- ICE 224/225 Amsterdam - Utrecht - Arnhem - Duisburg - Düsseldorf - Köln Messe/Deutz - Siegburg/Bonn - Frankfurt Flughafen - Mannheim - Stuttgart - Ulm - Augsburg - München-Pasing - München (leaves München at 14:20 in 2026 [reported]).
- Do not confuse line 78 with the train numbers ICE 78/79: a single line-20 train Hamburg - Wiesbaden.

**Tariff point and carrier change.** Emmerich(Gr) (B.11.1).

**Sellers.** NS International (DB Europa fares), DB Sparpreis Europa Netherlands (from 19,99 €).

**Ticket-end families.** Arnhem (first station past the border), Utrecht, Amsterdam. Zevenaar is not an ICE 78 stop: a ticket to it may be routed off the key train, so check the train list.

**German domestic pairs on foreign-priced trains.** Oberhausen - Duisburg - Düsseldorf - Köln - Frankfurt; on ICE 224/225 also Frankfurt Flughafen - Mannheim - Stuttgart - Ulm - Augsburg - München.

**Feeder shapes.** DB Europa NL or NS: O (any German station) -> Arnhem Centraal via D, get off at D; Arnhem Centraal -> D via O, board at O. Evidence: none [hypothesis].

**Via-feeders.** None tested. Via support: bahn.de stopover [reported]; NS none. Candidate regional stops between Oberhausen and the border: Wesel, Emmerich [hypothesis], low priority.

**Verdict.** As for Bad Bentheim. Example 4 in [examples/route-hypotheses.md](examples/route-hypotheses.md).

## BE Aachen

**Trains and German stops**
- Line 79 (ICE 3neo, every 2 h): Bruxelles-Midi - Bruxelles-Nord - Liège-Guillemins - Aachen - Köln - Frankfurt Flughafen - Frankfurt. Some trains at the edges of the day also stop at Limburg Süd, Montabaur, Siegburg/Bonn or Köln/Bonn Flughafen.
- New from 07.09.2026: two Mon-Fri pairs Köln - Aachen - Liège - Leuven - Brussels Airport-Zaventem - Antwerpen Centraal, and one daily pair Köln - Aachen - Liège - Bruxelles - Gent - Brugge - Oostende.
- Eurostar (ex-Thalys): five pairs Dortmund/Essen - Duisburg - Düsseldorf Flughafen - Düsseldorf - Köln - Aachen - Liège - Bruxelles - Paris Nord. The German section is run by SNCF Voyages Deutschland GmbH [reported].
- European Sleeper Brussels - Liège - Aachen - Köln - Zürich - Milano ([night trains](#night-trains)).

**Tariff point and carrier change.** For ICE travel, at the Belgian station where the traveller boards, alights or changes (B.1.1). End the ticket at Liège-Guillemins or beyond.

**Sellers**
- DB Sparpreis Europa Belgium: from 19,99 € (Sparpreis Europa 24,99 €).
- SNCB (b-europe) ([sellers/eurostar-sncb.md](sellers/eurostar-sncb.md)): sells the ICE; prices for German origins [unverified].
- Eurostar: outside the DB tariff with no mutual recognition (B.1.1). DB tickets have not been valid on the Thalys Aachen - Köln since March 2012. A forum post quotes Eurostar that domestic German traffic has been "no longer part of our offer as of 04/15/2024" [reported]. So a Eurostar ticket needs a Belgian or French end.

**Ticket-end families.** Liège-Guillemins first, then Leuven, Brussels Airport-Zaventem, Bruxelles-Nord/Midi, Antwerpen, Gent, Brugge, Oostende.

**German domestic pairs on foreign-priced trains.** Frankfurt - Frankfurt Flughafen - Köln - Aachen (ICE 79); Dortmund - Essen - Duisburg - Düsseldorf - Köln - Aachen (Eurostar, not sold domestically).

**Feeder shapes.** DB Europa BE: O (any German station) -> Liège-Guillemins via D, get off at D; Liège-Guillemins -> D via O, board at O. Evidence: none [hypothesis].

**Via-feeders.** None tested. Via support: bahn.de stopover [reported]; SNCB unknown. Candidate regional stops between Köln and Aachen: Düren, Eschweiler [hypothesis], low priority.

**Verdict.** DB Europa fares, so it helps only when the domestic contingent is gone [hypothesis].

## FR Kehl-Strasbourg

**Trains and German stops**
- Line 83 (TGV/ICE): five pairs Stuttgart - Karlsruhe - Strasbourg - Paris Est; one of them starts in München: München - Augsburg - Ulm - Stuttgart - Karlsruhe - Strasbourg - Paris Est.
- Line 84: TGV 9580/9583 Frankfurt - Mannheim - Karlsruhe - Baden-Baden - Strasbourg - Mulhouse - Lyon - Marseille, once a day; TGV 9594/9599 Frankfurt - Mannheim - Karlsruhe - Strasbourg - Bordeaux on summer Saturdays.
- Line 82 via Strasbourg: two pairs Frankfurt - Mannheim - Karlsruhe - Strasbourg - Paris Est.
- ICE 9590/9591 Berlin - Berlin Südkreuz - Halle - Erfurt - Frankfurt - Mannheim - Karlsruhe - Strasbourg - Paris Est, one pair a day, in line 15 since 2026.
- The TGV Freiburg - Paris is sold only on SNCF terms (B.3).

**Tariff point and carrier change.** Kehl(Gr) (B.3.1, B.4.1). Strasbourg is the first stop past it.

**Sellers**
- DB Sparpreis Europa France: from 19,99 € (Sparpreis Europa 24,99 €), to all stops of the Germany-France high-speed trains, sold at the latest one day before the first travel day. A booking over the whole Germany-France route includes a free reservation for the reservation-required train (B.4.9). No Young variant is listed for France. Reservation is compulsory only in cross-border use, not in DB-domestic use [reported].
- SNCF Connect ([sellers/sncf-connect.md](sellers/sncf-connect.md)): sells these trains; whether it prices purely German legs is [unverified]. Its site refused non-browser fetches (HTTP 403).

**Ticket-end families.** Strasbourg first; then Paris Est, Mulhouse, Lyon.

**German domestic pairs on foreign-priced trains.** München - Augsburg - Ulm - Stuttgart - Karlsruhe (line 83); Frankfurt - Mannheim - Karlsruhe (lines 82, 84); Berlin - Halle - Erfurt - Frankfurt - Mannheim - Karlsruhe (ICE 9590/9591).

**Feeder shapes.** DB Europa FR: O -> Strasbourg via D, get off at D; Strasbourg -> D via O, board at O; not sold on the travel day. SNCF [unverified]. Evidence: none [hypothesis].

**Via-feeders.** None tested. Via support: bahn.de stopover [reported]; SNCF none. Candidate regional stops between Karlsruhe or Offenburg and the border: Appenweier, Kehl [hypothesis], low priority.

**Evidence.** None priced for German legs [hypothesis]. Example 1 in [examples/route-hypotheses.md](examples/route-hypotheses.md).

## FR Forbach

**Trains and German stops.** Line 82 (TGV 2N2 / ICE 3), every 4 hours: Frankfurt - Mannheim - Kaiserslautern - Saarbrücken - Forbach - Paris Est. Forbach is served only once a day.

**Tariff point and carrier change.** Forbach(fr) (B.3.1, B.4.1).

**Sellers.** DB Sparpreis Europa France (from 19,99 €), SNCF Connect [unverified for German legs].

**Ticket-end families.** Forbach (on the one train that stops there), then Paris Est; stations in between [unverified].

**German domestic pairs on foreign-priced trains.** Frankfurt - Mannheim - Kaiserslautern - Saarbrücken.

**Feeder shapes.** DB Europa FR: O -> Forbach (France, not Forbach in Baden) via D on the one train that stops there, get off at D; the reverse, board at O. Evidence: none [hypothesis].

**Via-feeders.** None tested; SNCF none.

**Evidence.** None priced [hypothesis].

## CH Basel

**Trains and German stops**
- Line 12 (ICE 4, every 2 h): Berlin Ostbahnhof - Berlin - Berlin-Spandau - Wolfsburg - Braunschweig - Hildesheim - Göttingen - Kassel-Wilhelmshöhe - Fulda - Hanau - Frankfurt - Mannheim - Karlsruhe - Baden-Baden - Offenburg - Freiburg - Basel Bad - Basel SBB; single trains on to Interlaken, or Zürich - Chur; Brig new in 2026.
- Line 20 (ICE 4, every 2 h): Hamburg-Altona - Hamburg Dammtor - Hamburg - Uelzen - Hannover - Göttingen - Kassel-Wilhelmshöhe - Frankfurt - Mannheim - Karlsruhe - Offenburg - Freiburg - Basel Bad - Basel SBB. **Ends in Basel since 2026.** Two pairs run as **ECE 4/5 and ECE 8/9** with SBB Giruno sets (on some Saturdays ECE 75/76), ICE tariff in Germany.
- Line 43 (ICE 4, every 2 h): Hamburg-Altona - Hamburg Dammtor - Hamburg - Hamburg-Harburg - Bremen - Osnabrück - Münster - Dortmund - Bochum - Essen - Duisburg - Düsseldorf - Köln - Frankfurt Flughafen - Mannheim - Karlsruhe - Baden-Baden - Freiburg - Basel Bad - Basel SBB; ICE 105/109 on to Zürich - Chur, ICE 107 to Brig. Night ICE 100/101 from Berlin via Potsdam - Magdeburg - Hannover - Bielefeld - Hamm - Dortmund - Essen - Düsseldorf.
- Line 60 (ICE 3): two pairs Basel SBB - Basel Bad Bf - Weil am Rhein - Müllheim - Freiburg - Lahr - Offenburg - Baden-Baden - Karlsruhe - Karlsruhe-Durlach - Bruchsal - Stuttgart - Ulm - Günzburg - Augsburg - München-Pasing - München.
- **ECE/EC 150/151** (line 85, SBB Giruno), one pair a day: Frankfurt - Mannheim - Karlsruhe - Ringsheim - Freiburg - Basel Bad - Basel SBB - Zürich - Arth-Goldau - Bellinzona - Lugano - Chiasso - Como - Milano. Reservation is compulsory to Italy, not in DB-domestic use (B.7.2).
- Night: NJ 470/471 Hamburg - Zürich, NJ 408/409 Berlin - Zürich, NJ 402/403 Amsterdam - Köln - Zürich, European Sleeper via Köln ([night trains](#night-trains)).

**Tariff point and carrier change.** Basel Badischer Bahnhof is a DB tariff point (Glossar a) and the carrier change DB/SBB (B.17.1, B.7.1). **Start or end the ticket at Basel SBB or beyond, never at Basel Bad Bf.** The Hochrheinbahn stations (timetable line 730) are DB-domestic too.

**Sellers**
- SBB ([sellers/sbb.md](sellers/sbb.md)): Sparbillette / Supersparpreis Europa to Germany, from about CHF 26 (Zürich - Stuttgart/München) and CHF 48 (Berlin/Hamburg) [reported]. Train-bound, no refund, online international tickets only for passengers aged 16 or over. SBB reportedly sells only journeys that involve Switzerland [reported]. In the session SBB via München cost CHF 379+ in 1st class only [seen 2026-09-26].
- DB Sparpreis Europa Switzerland: from 19,99 € (Sparpreis Europa 24,99 €).

**Ticket-end families.** Basel SBB first; then Liestal, Olten, Zürich HB; on the Interlaken, Chur and Brig branches further.

**German domestic pairs on foreign-priced trains.** Freiburg - Offenburg - Karlsruhe - Mannheim - Frankfurt (lines 12, 20, 43, ECE 150/151); Frankfurt - Kassel - Hannover - Hamburg (line 20, including the SBB-run ECE 4/5 and 8/9); Frankfurt Flughafen - Köln - Dortmund - Bremen - Hamburg (line 43); Karlsruhe - Stuttgart - Ulm - Augsburg - München (line 60).

**Feeder shapes.** SBB or DB Europa CH: O (any German station) -> Basel SBB via D, get off at D; Basel SBB -> D via O, board at O. Evidence: [sellers/sbb.md](sellers/sbb.md) (without a via, SBB routed Berlin -> Zürich over Nürnberg/Stuttgart or Mannheim at CHF 114-158, so it prices domestic ICEs) [hypothesis].

**Via-feeders.** None tested. Via support: SBB via=1 [seen 2026-09-28]; bahn.de stopover [reported]. Candidate regional stops between Freiburg and Basel: Müllheim, Weil am Rhein (lines 12, 20 and 43 skip them; line 60 stops there) [hypothesis], low priority.

**Evidence.** None priced for German legs [hypothesis]. Example 5 in [examples/route-hypotheses.md](examples/route-hypotheses.md).

## CH Singen-Schaffhausen

**Trains and German stops.** IC 87 (IC2, every 2 hours): Stuttgart - Böblingen - (Herrenberg - Gäufelden - Bondorf -) Horb - (Sulz - Oberndorf -) Rottweil - (Spaichingen -) Tuttlingen - (Engen -) Singen - Schaffhausen - Zürich; single trains from Frankfurt - Darmstadt - Heidelberg. Stops in brackets are served every second hour only. **Local tickets are accepted on the IC up to and including Singen**, so the German part is already regional-priced.

**Tariff point and carrier change.** Carrier change at Schaffhausen (B.17.1); Waldshut is another one. The stations of the Hochrheinbahn on Swiss territory (timetable line 730) are DB-domestic (Glossar a). Whether that makes Schaffhausen itself DB-priced is [unverified], so end the ticket beyond it.

**Sellers.** SBB, DB Sparpreis Europa Switzerland.

**Ticket-end families.** Zürich HB and stations between Schaffhausen and Zürich (pick from the SBB suggestion list); Schaffhausen only if a test shows it is not DB-priced.

**German domestic pairs.** Stuttgart - Böblingen - Horb - Rottweil - Tuttlingen - Singen.

**Feeder shapes.** SBB: O -> Zürich HB via D, get off at D; the reverse, board at O. Evidence: none [hypothesis].

**Via-feeders.** None tested; local tickets already cover the IC up to Singen.

**Verdict.** With local tickets valid up to Singen, a foreign fare rarely beats a regional ticket or the Deutschland-Ticket [hypothesis].

## CH Lindau-St. Gallen

**Trains and German stops.** Line 88, ECE (SBB Astoro, with ÖBB): up to eight pairs a day, every 2 hours, München - Buchloe - Memmingen - Lindau-Reutin - Bregenz - St. Margrethen - St. Gallen - Winterthur - Zürich Flughafen - Zürich. Runs as ECE to Lindau, then as EC. ICE tariff in Germany.

**Tariff point and carrier change.** Via Austria: Lindau-Reutin and St. Margrethen (B.17.1). The train passes through Austria (Bregenz) before Switzerland.

**Sellers.** SBB, ÖBB (to Bregenz), DB Sparpreis Europa Switzerland or Austria.

**Ticket-end families.** Bregenz (Austria), St. Margrethen, St. Gallen, Winterthur, Zürich.

**German domestic pairs on foreign-priced trains.** München - Buchloe - Memmingen - Lindau-Reutin.

**Feeder shapes.** SBB: O -> St. Gallen via D (e.g. München or Memmingen), get off at D; ÖBB: O -> Bregenz via D. Evidence: via München only 1st class from Berlin (below) [seen 2026-09-26]; other origins [hypothesis].

**Via-feeders.** None tested. Via support: SBB via=1 [seen 2026-09-28], ÖBB via [verified]. Candidate regional stops between Memmingen and Lindau that the ECE skips: Kißlegg, Hergatz [hypothesis], low priority.

**Evidence.** From Berlin via München, SBB to St. Gallen or Zürich showed 1st class only, CHF 379 and more [seen 2026-09-26]. From München, Buchloe or Memmingen untested [hypothesis].

## LU Trier

**Trains and German stops.** IC 37, one pair a day: Düsseldorf - Köln - Bonn - Remagen - Andernach - Koblenz - Kobern-Gondorf - Treis-Karden - Cochem - Bullay - Wittlich - Schweich - Trier - Trier Süd - Konz - Igel - Wasserbillig - Luxembourg. Operated by DB Regio with CFL Stadler KISS units; runs as RE on the Mosel line, as IC between Koblenz and Düsseldorf.

**Tariff point and carrier change.** Igel(Gr) (B.10.1).

**Sellers.** CFL; DB Sparpreis Europa Luxembourg from 19,99 € (Sparpreis Europa 24,99 €). All 2nd-class rail travel inside Luxembourg is free (B.10.2).

**Ticket-end families.** Wasserbillig, Luxembourg.

**German domestic pairs.** Düsseldorf - Köln - Bonn - Koblenz (IC section), Koblenz - Trier (RE section, regional-priced).

**Feeder shapes.** DB Europa LU: O -> Luxembourg via D, get off at D; the reverse, board at O. Evidence: none [hypothesis].

**Via-feeders.** None tested; the Mosel section is regional.

**Caveat.** Koblenz - Düsseldorf is suspended from 10.07. to 12.12.2026 for the renovation of the right-bank Rhine line.

**Verdict.** Mostly regional-priced; no lever expected [hypothesis].

## CH Konstanz-Kreuzlingen

**Trains and German stops.** German key trains end in Konstanz (from Karlsruhe, Offenburg and Singen), and Swiss trains run on from Konstanz into Switzerland [unverified: not read from a line list].

**Tariff point and carrier change.** Not in the SCIC-NRT carrier-change table above [unverified]; Kreuzlingen is the first Swiss station.

**Sellers.** SBB (sells journeys involving Switzerland); DB Sparpreis Europa Switzerland.

**Ticket-end families.** Kreuzlingen (EVA 8506131), Weinfelden, Zürich HB.

**Feeder shapes.** SBB: O -> Kreuzlingen via Konstanz, get off in Konstanz; the reverse, board in Konstanz. Evidence: none [hypothesis].

**Verdict.** [hypothesis]; low prior, the German legs into Konstanz are partly regional.

## FR Neuenburg-Mulhouse

**Trains and German stops.** TGV Freiburg - Müllheim - Mulhouse - Paris, sold only on SNCF terms (B.3). Regional trains cross at Neuenburg(Baden)(Gr) (B.3.1, B.4.1).

**Tariff point and carrier change.** Neuenburg(Baden)(Gr) for regional trains; the TGV is outside the DB tariff.

**Sellers.** SNCF Connect only for the TGV ([sellers/sncf-connect.md](sellers/sncf-connect.md)).

**Ticket-end families.** Mulhouse (EVA 8700031).

**German domestic pairs on foreign-priced trains.** Freiburg - Müllheim only.

**Verdict.** No lever for German pairs.

## Regional-only crossings (no contingent lever)

These border crossings have regional trains only (per the carrier-change table above and the line lists; each [unverified] for 2026 service). The German part is regional tariff or Deutschlandticket up to the border, so there is no through-ticket lever. Skip them and say why.

| Border | Crossings |
|---|---|
| NL | Venlo; Herzogenrath - Heerlen; Gronau - Enschede; Weener - Groningen |
| CZ | Marktredwitz - Cheb; Plauen / Bad Brambach - Cheb; Selb - Aš; Zittau - Liberec |
| PL | Görlitz - Zgorzelec; Forst; Guben; Kostrzyn; Tantow / Grambow - Szczecin |
| DK | Niebüll - Tønder |
| AT | Simbach(Inn) - Braunau |
| FR | Lauterbourg; Wissembourg; Saarbrücken - Sarreguemines |

---

## Structural findings

- **Foreign sellers price whole through-journeys, including domestic DB feeders.** So the candidate key trains are every DB train that feeds a journey a foreign seller prices, not only trains that cross a border.
- **Only WESTbahn is confirmed to sell pure-domestic German trips on its own**: the DeutschlandPlusTicket, for Deutschland-Ticket holders, "besonders günstige Onlinetarife für Reisen innerhalb Deutschlands sowie von und nach Österreich" ('especially cheap online fares within Germany and to and from Austria') [reported, westbahn.at].
- **Since 10.06.2018 Nightjets are sold only at ÖBB tariff**, so domestic Nightjet legs are ÖBB-priced.
- **NS sells DB 'Europa' fares within Germany**, not its own contingents.
- **ČD requires a cross-border train** ('povinnou vazbou na přeshraniční vlak').
- **PKP specials start in Poland.**
- **SBB sells only journeys that involve Switzerland** [reported].
- **Eurostar has sold no domestic German journeys since 15.04.2024** [reported].
- **European Sleeper's list of countries without domestic sales leaves out Germany** [unconfirmed].
- For the sellers that need a foreign end, the lever means buying through to the first station past the carrier-change point and getting off early, or boarding late on the return. The risks are in [tariff-rules.md](tariff-rules.md).

## DB Sparpreis Europa

DB's own cross-border saver, bookable on bahn.de to a foreign station on the same train. Minimum prices in 2nd class from SCIC-NRT Stand 01.08.2026, Teil B. Young means age up to and including 26, 2nd class only.

| Country | Super Sparpreis Europa | Sparpreis Europa | Young (Super / Spar) | SCIC-NRT |
|---|---|---|---|---|
| AT direct | 19,99 € | 23,99 € | 18,99 / 22,99 € | B.13.11 |
| AT via CZ | 27,99 € | 33,99 € | 27,99 / 33,99 € | B.13.11 |
| CZ | 14,99 € | 17,99 € | 13,99 / 16,99 € | B.20.10 |
| PL | 18,99 € | 22,99 € | 18,99 / 22,99 € | B.14 |
| NL | 19,99 € | 24,99 € | 18,99 / 23,99 € | B.11 |
| BE | 19,99 € | 24,99 € | 18,99 / 23,99 € | B.1.11 |
| CH | 19,99 € | 24,99 € | 18,99 / 23,99 € | B.17 |
| FR | 19,99 € | 24,99 € | none listed | B.4.9 |
| DK | 28,99 € | 33,99 € | 24,99 € / none listed | B.2.7 |
| IT via AT (Brenner) | 19,99 € | 23,99 € | 18,99 / 22,99 € | B.6.11 |
| LU | 19,99 € | 24,99 € | 18,99 / 23,99 € | B.10 |

Rules (SCIC-NRT A.5.2.3, A.5.2.4 and the country sections):
- Young is usually about 1 € lower. Exceptions: no difference for PL and AT via CZ; 4 € lower for Super Sparpreis Europa DK; no Young fare listed for FR.
- At least one leg in an ICE or IC/EC in Germany is required.
- The Young variants are not offered for transit through Germany. The adult Sparpreis Europa and Super Sparpreis Europa **are** also sold between two neighbouring countries with Germany in transit.
- Train-bound in the DB trains and the named cross-border train; otherwise valid 2 days.
- BahnCard 25 or 50: 25 % off the German part only.
- France: sold at the latest one day before the first travel day. Czech Republic: the same, and not valid on alex or Vogtlandbahn trains.
- Italy via the Brenner: see the caveat under [AT Kufstein/Tirol](#at-kufsteintirol).
- bahn.de advertises Austria from 37,99 € from Hamburg, Köln or Berlin to Tirol, the Salzburg region or Wien [reported, bahn.de offer page].

**Domestic floors to compare against** (DB Beförderungsbedingungen, Stand 24.09.2026, Nr. 3.3.2, 2nd class): Super Sparpreis 17,99 €, Sparpreis 21,99 €, Super Sparpreis Young 4,99 €, Sparpreis Young 16,99 €. Do not use the 12,99 € figure some blogs give for Super Sparpreis Young.

A Europa floor above the domestic floor means the Europa lever only helps when the domestic contingent on that train is sold out. This is the economic gate in SKILL.md, Decision rules: skip a resold-fare corridor when DB's same-train price is already at or below the floor + 5 €.

## Timetable caveats 2026

- ICE 91 Regensburg - Wien: limited service from 14.06. to 13.12.2026 (Regensburg - Passau corridor renovation).
- PKP ECs Berlin - Poland use Berlin Gesundbrunnen instead of Berlin Hbf from June to December 2026 [reported].
- IC 37 Koblenz - Düsseldorf suspended from 10.07. to 12.12.2026.
- DSB: the Hamburg departures at 07:04 and 08:53, and the København departures at 16:22 and 18:22, do not run from 31.08. to 31.10.2026 [reported].
- Line 62 has been split at München since the Koralmbahn opened (December 2025), except three ICE 4 pairs.
- New ICE pairs Köln - Antwerpen (Mon-Fri, two) and Köln - Oostende (daily, one) from 07.09.2026.
- Line 27: on Fr 02.10.2026 the Berlin RJs (rj 173, 175) ran Kiel Hbf – Dresden Hbf only; Dresden – Ústí n.L.hl.n. ran as rj 101xx replacement buses ('náhradní autobusová doprava') [seen 2026-09-28]. The period is unknown: check the train label on the ČD result cards ('Detail') in Phase 3.

## Dropped / does not exist

- **Hamburg - Puttgarden - Rødby**: the train ferry ended on 14.12.2019. All Hamburg - København trains run via Flensburg and Jutland until the Fehmarnbelt link opens.
- **A long-distance Berlin - Szczecin train**: the EC ended in December 2012. A regional service is planned from December 2026 [reported].
- **RegioJet trains in Germany**: none. RegioJet runs only buses Berlin - Dresden - Praha.
- **Nightjet to Paris**: ended 14.12.2025. European Sleeper has run Paris - Berlin since 26.03.2026.
- **NJ Berlin - Brussels**: ended in March 2025.
- **A Nürnberg - Praha long-distance train**: none found for 2026.
- **Hamburg - Kiel**: no foreign-priced train. ICE 22 Kiel - Stuttgart is domestic.
- **Hamburg - Lübeck - København**: no through train since 14.12.2019 (the København trains run via Flensburg); the Fehmarnbelt link is not open. Hamburg - Lübeck is DB/regional only.
- **Line 20 beyond Basel**: line 20 has ended in Basel since 2026; Zürich, Chur and Interlaken are served by lines 12 and 43.
- **IC Berlin - Amsterdam**: has been ICE line 77 since November 2025.
- **Line 27 as EC**: it is a ČD/ÖBB railjet/ComfortJet line now, not EC.
- **IC Nürnberg - Passau - Wien**: ended in December 2025.

## Sources

Line data (read 2026-09-28):
- https://de.wikipedia.org/wiki/Liste_der_Intercity-Express-Linien
- https://de.wikipedia.org/wiki/Liste_der_Intercity-Linien_(Deutschland)
- https://de.wikipedia.org/wiki/EuroCity-Express
- https://de.wikipedia.org/wiki/ÖBB_Nightjet
- https://de.wikipedia.org/wiki/European_Sleeper
- https://de.wikipedia.org/wiki/Snälltåget
- https://de.wikipedia.org/wiki/Westbahn_(Unternehmen)
- https://de.wikipedia.org/wiki/Berlin-Warszawa-Express and https://en.wikipedia.org/wiki/Berlin–Warsaw_Express
- https://en.wikipedia.org/wiki/Wawel_(train)
- https://en.wikipedia.org/wiki/EuroNight
- https://de.wikipedia.org/wiki/Eurostar_Continental_Route_Services
- https://de.wikipedia.org/wiki/Vogelfluglinie
- https://de.wikipedia.org/wiki/Bahnstrecke_München–Regensburg
- https://de.wikipedia.org/wiki/Bahnstrecke_Nürnberg–Cheb
- https://de.wikipedia.org/wiki/Regiojet

DB press releases on the 2026 timetable:
- https://www.deutschebahn.com/de/presse/pressestart_zentrales_uebersicht/Fahrplan-2026-Halbstundentakt-jetzt-fuer-21-Staedte-13563846
- https://www.deutschebahn.com/de/presse/presse-regional/pr-muenchen-de/aktuell/presseinformationen/Fahrplan-2026-Das-sind-die-Neuerungen-fuer-den-Fernverkehr-in-Bayern--13564962
- https://www.deutschebahn.com/de/presse/pressestart_zentrales_uebersicht/Neue-Eurocity-Linie-verbindet-Deutschland-und-Polen-bis-an-die-ukrainische-Grenze-13701074

Tariffs:
- DB SCIC-NRT, Besondere Internationale Beförderungsbedingungen, Stand 01.08.2026: https://assets.static-bahn.de/dam/jcr:e85e0ded-c7b8-4653-8dee-c56be74b86d5/
- DB Beförderungsbedingungen, Stand 24.09.2026: https://assets.static-bahn.de/dam/jcr:41e78667-8704-4597-a5e3-ab9bff890923/Bef%C3%B6rderungsbedingungen%20der%20DB%20AG%20-%20Stand%2024.09.2026.26e14bfb1285d62bfa4d59401622795e.pdf
- Current versions: https://www.bahn.de/agb

Seller pages:
- https://www.oebb.at/en/tickets-kundenkarten/oesterreich-europa/sparschiene/sparschiene-europa
- https://www.bahn.de/angebot/sparpreis-flexpreis/super-sparpreis-europa-oesterreich
- https://www.bahn.de/angebot/international/nachtzug-hamburg-muenchen
- https://westbahn.at/tarife/deutschlandplusticket/
- https://www.cd.cz/typy-jizdenek/mezinarodni-jizdenky/-26754/ and https://www.cd.cz/typy-jizdenek/jedu-do-zahranici/nemecko/-38202/
- https://www.intercity.pl/en/for-enterprises1/special-offers/berlin-warszawa/gdynia-specjal.html
- https://www.dsb.dk/find-produkter-og-services/dsb-udland/
- https://www.nsinternational.com/en/terms-and-conditions/germany
- https://www.sbb.ch/de/hilfe-und-kontakt/produkte-services/billette/europa/billette.html
- https://www.europeansleeper.eu/night-train-germany

Reported evidence:
- appgefahren, 23.09.2025: https://www.appgefahren.de/guenstiger-und-spontan-bahnfahren-dank-der-oebb-sparschiene-386859.html
- mydealz, 16.06.2025: https://www.mydealz.de/magazin/db-ticket-trick-so-spart-ihr-richtig-geld-bei-eurer-naechsten-bahnfahrt-35786
- travel-dealz, 31.03.2025: https://travel-dealz.de/deal/tschechien-ceske-drahy-angebot/
- dealdoktor: https://www.dealdoktor.de/magazin/db-tickets-tschechische-bahn/
- ICE-Treff forum, Eurostar domestic sales: https://www.ice-treff.de/index.php?mode=thread&id=703934
- bahndampf, Nightjet Hamburg - München: https://www.bahndampf.de/nachtzug/hamburg-muenchen-innsbruck
