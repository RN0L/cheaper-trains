# cheaper-trains

Same ICE. A sixth of the price.

Oktoberfest Monday, ICE 1507 Berlin → München. bahn.de: 2nd class sold out, 1st class **337,50 €**. An ÖBB ticket Berlin → Kitzbühel on the very same train: **54,00 €**. You get off in München and the ticket rides on to Tirol without you.

`/train` is a Claude Code skill that runs this trick, and a few others, for any long-distance trip in or through Germany. It searches in your own browser. You click buy.

## That Monday

Mon 28.09.2026, Berlin Hbf → München Hbf, one traveller aged 19, 2nd class, direct ICEs only. Prices seen 26–27 Sep 2026. Not a price list.

| Train | Berlin → München | bahn.de | cheaper-trains | Ticket to buy (ÖBB Sparschiene) |
|---|---|---|---|---|
| ICE 1003 | 06:36 → 10:45 | sold out (1st 187,99 €) | **54,00 €** | Berlin Hbf → Puch b. Hallein |
| ICE 1503 | 07:36 → 11:43 | sold out (1st 224,99 €) | **62,60 €** | Berlin Hbf → Schwarzach-St. Veit, via "Bernau a Chiemsee" |
| ICE 1505 | 09:36 → 13:43 | sold out (1st 337,50 €) | **62,60 €** | same as ICE 1503 |
| ICE 1507 | 11:36 → 15:43 | sold out (1st 337,50 €) | **54,00 €** | Berlin Hbf → Kitzbühel |
| ICE 1509 | 13:36 → 17:43 | sold out (1st 187,99 €) | **54,00 €** | Berlin Hbf → Puch b. Hallein |
| ICE 1601 | 15:36 → 19:43 | – | **54,00 €** | Berlin Hbf → Puch b. Hallein |

Way back on Thursday: ticket Puch b. Hallein → Berlin, 54,00 € on five different ICEs, board in München. DB wanted 68,99 €.

## How it works

Railways sell whole journeys from their own fare quotas. ÖBB prices a Berlin → Austria trip from its own Sparschiene contingent, even though the first four hours are a DB ICE. So a ticket that runs past your stop can be cheaper than DB's ticket to your stop, as long as it ends beyond DB's tariff border. Salzburg Hbf and Kufstein still cost DB prices. A few stops further, they don't.

The skill:

1. gets DB's real baseline, including the slower ICEs the app hides behind "Schnellste Verbindungen" and Young fares,
2. lists the fast trains in your window and where they (or their connections) run on across a border,
3. asks the railways on the other side (ÖBB, ČD, PKP, DSB, NS, SNCF, SBB and co.) for longer through-tickets on the same train,
4. tries neighbouring stations and feeder tricks, checks which trains still have seats, re-checks the winners,
5. prints one table with exact booking steps.

ÖBB is the proven lever. The other corridors are in there as playbooks, labelled as untested where they are. When a route has no trick, the skill says so. From the test runs:

- Hamburg → München (Fri): 62,60 € on every direct ICE, via an ÖBB ticket to Kitzbühel or Puch.
- Berlin → Dresden: a few euros less via a ČD ticket to Ústí.
- Köln → Frankfurt, Hannover → Leipzig: nothing beats DB's own Young fare.

## You need

- [Claude Code](https://claude.com/claude-code)
- The [Claude in Chrome](https://claude.ai/chrome) extension, connected to the same Claude account. The skill reads the booking sites in your own Chrome. Without it you get links-only mode: it tells you what to search, you open the links.

## Install

```sh
claude plugin marketplace add RN0L/cheaper-trains
claude plugin install cheaper-trains@cheaper-trains
```

Then, in Claude Code:

```
/cheaper-trains:train Berlin -> München Mo 28.09., an bis 16 Uhr, 1x 19 J., 2. Klasse
```

Want plain `/train`? Copy `skills/train` into `~/.claude/skills/`.

German or English, free text. It asks once for whatever is missing: ages, discount cards, direct only, seat, how deep to dig, and whether it may read bahn.de itself.

## Read before you buy

- Prices move by the hour and cheap quotas vanish. ÖBB 1st class on ICE 1507 went from 94,60 € to 130,00 € within one hour.
- Sparschiene NON-FLEX is train-bound, not refundable and carries your name. Bring ID.
- Getting off early or boarding later: no tariff we read forbids it, and none promises it either.
- **Seat reservation is highly recommended.** Without one you might stand, and on peak days you might not get on. The skill checks on bahn.de which trains still have seats. If the cheap ticket's seller can't add one, book a seat-only reservation at DB ("Nur Sitzplatz buchen", about 5,50 €). It is valid with any ticket.
- bahn.de blocks browsers and IPs that look like bots ("Fehler 751"). The skill paces itself, stops at the first block and falls back to links.
- It never books and never touches payment data.

## Auf Deutsch

Gleicher ICE, ein Sechstel vom Preis. Oktoberfest-Montag, ICE 1507 Berlin → München: bei der DB gab es nur noch 1. Klasse für 337,50 €. Ein ÖBB-Ticket Berlin → Kitzbühel im selben Zug kostete 54,00 € in der 2. Klasse. In München aussteigen, fertig.

`/train` macht das für jede lange Zugfahrt in oder durch Deutschland: DB-Preis holen, durchgehende Tickets anderer Bahnen auf demselben Zug suchen, Sitzplätze prüfen, eine Tabelle mit Buchungsschritten ausgeben. Du brauchst Claude Code und die Chrome-Erweiterung „Claude in Chrome“. Sitzplatzreservierung dringend empfohlen, notfalls einzeln bei der DB („Nur Sitzplatz buchen“). Gebucht wird nie automatisch, den Kauf-Button klickst du.

## Legal

Not affiliated with DB, ÖBB or any other railway. Personal use only; the sites' terms allow nothing else. Not legal advice. The prices above were seen once and are not offers.

MIT, (c) 2026 Leonard Arnold. See [LICENSE](LICENSE).
