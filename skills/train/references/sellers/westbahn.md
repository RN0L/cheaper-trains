# WESTbahn

Terms (O, D, W, T, K, key train, ticket ends, the record schema) are defined in [../method.md](../method.md). Confidence tags: [verified YYYY-MM-DD] = seen on the seller's own offer page; [seen YYYY-MM-DD] = list view or a single observation; [reported] = third-party source; [unverified]; [hypothesis]. Every price here is an observation with a date, never a promise.

## Status

- **An alternative train, not the same-train trick** [reported]. WESTbahn is a separate Austrian operator with its own trains and its own tariff. A WESTbahn ticket does not put the user on a DB key train; it puts them on a different, WESTbahn-run train.
- So it is compared **on its own speed**. It enters the result only as a separate-train anchor (see [../method.md](../method.md)): shown when it beats the best fast option, with its own departure, arrival and travel time.
- It was **not searched in the reference session**. Nothing here is first-hand.

## What it sells

- WESTbahn's own tariffs. The tariff menu on westbahn.at lists 'West Superpreis', 'West Vorteilspreis', 'West VorteilspreisDE', 'DeutschlandPlusTicket', 'West Seniorenpreis' and 'West Flexpreis' [reported, westbahn.at].
- **Domestic German trips.** WESTbahn does sell trips within Germany. Its DeutschlandPlusTicket is only for holders of a valid, personalised Deutschland-Ticket and promises "besonders günstige Onlinetarife für Reisen innerhalb Deutschlands sowie von und nach Österreich" (especially cheap online fares for trips within Germany and to and from Austria). Examples on its page: Stuttgart-Salzburg 34,90 €, München-Linz 59,90 €, München-Wien 74,90 € [reported, westbahn.at, read 2026-09-28].
- **Who else sells it.** SBB does not sell WESTbahn tickets, and DB cannot sell them affordably [reported, SBB help page and seat61].

## Fares and conditions

DeutschlandPlusTicket, as stated on westbahn.at [reported, read 2026-09-28]:

- Needs a valid, personalised Deutschland-Ticket.
- Online only; "nicht im Zug erhältlich" (not sold on the train).
- Free cancellation until one day before the chosen travel day.
- 'West Fixplatz': a free reserved seat in Standard Class with every online booking.
- Children under 6 travel free on a lap; children under 15 pay 3 € per child and route.

Other points:

- **BahnCard holders.** Holders of a DB BahnCard 25/50/100 have had up to 50 % off WESTbahn tickets since 27.05.2024, and Deutschland-Ticket holders get further discounts [reported, de.wikipedia citing LOK Report 27.05.2024]. Whether this is the 'West VorteilspreisDE' tariff is unverified.
- **DB tickets on WESTbahn:** unverified. Treat DB tickets as **not valid** on WESTbahn trains, and WESTbahn tickets as not valid on DB trains.

## Where the lever is

The German stops [reported, de.wikipedia]:

- **Rosenheim, München Ost and München Hbf** on the line Wien-Salzburg-München.
- **München Ost is a restricted stop, and the sources disagree on the direction.**
  - The research brief read it as boarding only toward Wien.
  - The footnote in the German Wikipedia line table reads "Halt in Fahrtrichtung München nur zum Einsteigen, in Fahrtrichtung Wien Westbahnhof nur zum Aussteigen" (toward München: boarding only; toward Wien: alighting only).
  - Check the direction on westbahn.at before planning to board or leave there [unverified].
- **Augsburg-Günzburg-Ulm-Stuttgart:** two train pairs have continued there from Wien via München since December 2024.
- **Lindau-Insel:** since December 2025, seven pairs Wien-Innsbruck-Bregenz-Lindau-Insel, a two-hourly service.

Uses for a German trip:

- **Stuttgart, Ulm, Günzburg, Augsburg, München and Rosenheim** (in any combination the stop rules allow) are domestic legs on a WESTbahn train. Compare them with the DB key trains on the same pair, on price **and** travel time.
- **München or Rosenheim toward Salzburg or Wien**, when the user's trip itself goes to Austria.
- **Lindau-Insel toward Bregenz and Innsbruck**, the same.
- **Not for** trips that need a DB key train, or Berlin-München: WESTbahn does not run there.

## How to search

The flow is unverified.

1. Open https://westbahn.at in the skill's own tab.
2. Use the 'Fahrplanauskunft' (timetable search) or 'Ticket buchen' (book a ticket) for the pair.
3. Check that the right tariff is shown. The DeutschlandPlusTicket applies only if the user has a Deutschland-Ticket; without one, record the regular fare.
4. Record rows with `seller` = 'WESTbahn' and `key_train` = the WESTbahn train. Mark them as separate-train anchors, not same-train rows.
5. Stop before any booking step. Never enter names or Deutschland-Ticket details.

## Deep link

None verified. The German Wikipedia article cites a 2023 timetable URL of the form `https://westbahn.at/timetable/lookup/from/innsbruck/to/wien-westbahnhof/date/2023-06-11` [unverified; may be outdated]. Test it once before building on it.

## Reading results and the offer page

Unverified. Read the results with [../../scripts/page-text.js](../../scripts/page-text.js). Quote the exact labels in the final table's 'Not checked / unverified' part, so the user sees that this seller's page was read for the first time.

## Limits and bot protection

- The binding rules are in [../automation-rules.md](../automation-rules.md): one tab, human pace, read-only, no personal data.
- No block or challenge has been observed, because the site was not driven in the reference session.

## Seen in the reference session

Not searched. The reference trip (Berlin → München) has no WESTbahn leg. The only first-hand content is the tariff page text read on 2026-09-28, quoted above.

## Unverified: test before relying on it

- The 2026 timetable details: which trains run to Stuttgart and to Lindau-Insel, and at what times.
- Prices without a Deutschland-Ticket, and what 'West VorteilspreisDE' covers.
- Youth rules and ages.
- Whether DB tickets are valid on WESTbahn (assume not).
- The direction rule at München Ost.
- The search flow and any deep-link format.

## Sources

- WESTbahn, DeutschlandPlusTicket: https://westbahn.at/tarife/deutschlandplusticket/
- de.wikipedia, 'Westbahn (Unternehmen)': https://de.wikipedia.org/wiki/Westbahn_(Unternehmen)
- SBB help page on European tickets (which operators SBB cannot sell): https://www.sbb.ch/de/hilfe-und-kontakt/produkte-services/billette/europa/billette.html
- seat61, bahn.de guide (what DB cannot sell affordably): https://www.seat61.com/websites/bahn-de.htm
