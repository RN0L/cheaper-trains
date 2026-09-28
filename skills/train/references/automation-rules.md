# Automation rules

These rules bind every browser action the skill takes. They rest on two things: the sites' own terms, quoted below, and the blocks we actually hit between 2026-09-26 and 2026-09-28. A block lands on the user's browser or IP, not on the skill, so the user pays for every shortcut. When a rule here conflicts with convenience, the rule wins.

Not legal advice.

## 1. What the sites say

### bahn.de: Nutzungsbedingungen für Webseiten und Apps der DB Fernverkehr AG (Stand September 2025, as the page itself states)

The section 'Zulässige Nutzung' (permitted use) allows three things: viewing the pages and their information, making lawful bookings and reservations, and using the functions the site offers (paraphrase). "Jede andere Nutzung der Webseiten / Apps ohne vorherige schriftliche Zustimmung der DB Fernverkehr AG ist untersagt." (Any other use without DB's prior written consent is forbidden.)

The key sentences, verbatim:

> "Ebenso untersagt ist die Verwendung automatisierter Systeme oder automatisierter Software zur Extraktion von Inhalten der Webseiten / Apps. Auch ist jeder Zugriff auf Inhalte der Webseiten / Apps unzulässig, der nicht über die Benutzeroberfläche der Webseiten / Apps erfolgt."

English gloss: using automated systems or automated software to extract content from the websites or apps is forbidden. Any access to their content that does not go through the user interface is also not allowed.

- **Commercial use is forbidden:** "Die Vervielfältigung, Bearbeitung, Verbreitung, öffentliche Wiedergabe oder jede sonstige Form der Nutzung von Inhalten der Webseiten / Apps zu gewerblichen Zwecken ist unzulässig."
- **Load:** anything that can cause "eine übermäßige oder unzumutbare Belastung der Webseiten / Apps und/oder der dahinterliegenden Infrastruktur" (excessive or unreasonable load on the sites or their infrastructure) must be avoided.
- **Blocking:** DB "behält sich [...] vor, den Zugang zu ihren Webseiten / Apps jederzeit zu sperren, wenn gegen diese Nutzungsbedingungen verstoßen wird" (DB may block access at any time if the terms are broken).
- **robots.txt** (read 2026-09-28): for all user agents it has `Disallow: /.rest/` and `Disallow: /web/`. That only Googlebot, Bingbot and Slurp get `Allow: /` is [unverified: paraphrase, not re-read]. The booking API lives under /web/api, for example /web/api/angebote/fahrplan and /web/api/reiseloesung/orte. The search page itself (/buchung/fahrplan/suche) is not disallowed.

**The consequence, plainly:** automated price extraction on bahn.de breaks DB's terms, even through the normal UI and even at a slow pace. Going slowly lowers the load and the block risk, but it does not make the extraction permitted. The user decides. Before the first bahn.de page load, show the notice below and record the answer. It is the same text as in SKILL.md, so keep the two identical. Links-only mode (section 6) is always available.

> Heads-up: bahn.de's terms of use forbid automated extraction of their content. I can read it slowly through the normal website in my own tab, one search at a time, but DB can still block your browser or your IP address for a while (error 751). Or I switch bahn.de to links-only mode: I build the searches, you open them and tell me what you see. Which one?

> Hinweis: Die Nutzungsbedingungen von bahn.de verbieten das automatisierte Auslesen ihrer Inhalte. Ich kann die Seite langsam über die normale Website in meinem eigenen Tab lesen, eine Suche nach der anderen, aber die DB kann deinen Browser oder deine IP-Adresse trotzdem eine Zeit lang sperren (Fehler 751). Oder ich schalte bahn.de in den Nur-Links-Modus: Ich baue die Suchen, du öffnest sie und sagst mir, was du siehst. Was ist dir lieber?

The notice is the last item of the one question block. Wait for the answer; no answer, or an unclear one, means links-only for bahn.de. In an unattended run (subagent, workflow or scheduled run) nobody can answer, so bahn.de stays links-only and the DB prices come from Trainline as a tagged proxy ([method.md](method.md) §11, 'Unattended runs').

### ÖBB: Allgemeine Nutzungsbedingungen der ÖBB-PV AG (oebb.at, no date on the page)

- **No explicit anti-bot clause.** The terms do not mention automated access.
- **Nr. 3, purpose:** without a separate agreement, use is "in dem Umfang zulässig, als die Nutzung durch Sie dem mit der Bereitstellung und Überlassung verfolgten Zweck entspricht" (only as far as it matches the purpose for which the content is provided).
- **Nr. 3, no passing on:** "Informationen und Applikationen dürfen zu keinem Zeitpunkt an Dritte vertrieben, vermietet oder in sonstiger Weise überlassen werden." (They may never be sold, rented or otherwise handed to third parties.)
- **Nr. 3, no exploitation:** without written permission, content may not be "verändert, kopiert, vervielfältigt, verkauft, vermietet, ergänzt oder in einer sonstigen Art und Weise verwertet werden" (changed, copied, sold, rented, supplemented or otherwise exploited).
- **Nr. 4, blocking:** "Wir sind berechtigt, den Zugang zu unseren Websites jederzeit zu sperren, insbesondere dann, wenn Sie als Nutzer gegen die gegenständlichen Allgemeinen Nutzungsbedingungen [...] verstoßen." (ÖBB may block access at any time, in particular on a breach.)
- **Our reading, not legal advice:** comparing prices for the user's own booking is close to the purpose the shop is provided for. Storing, passing on or republishing the prices is not.
- **shop.oebbtickets.at robots.txt** (read 2026-09-28): the only allowed paths are `/` (the start page itself), `/de/ticket*`, `/en/ticket*`, `/it/ticket*`, `/de/shop*`, `/en/shop*`, `/it/shop*`, `/sitemap.xml` and `/static/favicon*`. After those comes `Disallow: /`. The shop pages the skill reads, such as the offer page /de/ticket/offer, are inside the allowed paths. The API behind them (/api/offer/..., /api/order/...) is not. robots.txt is a crawler convention, not a contract, but the skill follows it anyway.

### Other sellers

The terms of Trainline, SBB, ČD, PKP Intercity, DSB, NS International, SNCF Connect, Trenitalia, MÁV and WESTbahn were not read for this skill. Apply the limits in section 3 to them anyway, and read no more than one person's comparison needs.

## 2. What we observed (2026-09-26 to 2026-09-28)

| Site | What happened | What triggered it | What followed |
|---|---|---|---|
| bahn.de | A direct fetch to /web/api/angebote/fahrplan returned `OPS_BLOCKED`, then the browser showed 'Fehler 751' | a scripted in-page call to the hidden booking API | the browser was blocked |
| bahn.de | 'Fehler 751 – Das Verhalten Ihres Browsers ähnelt dem eines Bots' (error 751: your browser behaves like a bot), 26.09.2026 20:22 | after about 25 calm UI searches, at least 10 s apart, the agent paged through 'Spätere Verbindungen' (later connections) | every further search was blocked; we stopped at once, with no retry and no cookie clearing; the next day bahn.de worked again |
| bahn.de station API | Akamai 'Access Denied' for the IP [seen 2026-09-28, reference session] | scripted calls to /web/api/reiseloesung/orte, which had answered normally at first | an IP-level block within about 20 min. It concerns the machine that made those calls, not every user; the timeline is in [examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md) §10 |
| v6.db.transport.rest | HTTP 503 | a third-party DB API | unusable |
| shop.oebbtickets.at | HTTP 429 (too many requests) on /api/offer/v2/travelActions | about 9 parallel agent tabs in one browser, sharing one server session and one IP | 'Suchen' (search) silently did nothing; 'Keine Reise gefunden' (no journey found); empty price buttons; slow dialogs; the user's own booking in another tab slowed down; recovery after 40-60 s |
| SNCF Connect | HTTP 403 | non-browser fetches of its pages | no data; the site is usable only in a real browser, and nothing there is verified |
| MÁV | HTTP 500 | any search from a Berlin origin (Wien -> Budapest worked) | a dead end for German legs |

Both bahn.de browser blocks came from access patterns, not from volume alone: one hidden-API call, and one paging burst.

## 3. Operating limits

| Site | Tabs | Pace | Per session | On trouble |
|---|---|---|---|---|
| bahn.de | 1, never in parallel, including across agents | at least 10 s between result loads | at most about 20 searches | No paging loops: for later trains open a new deep link with a later time. Stop at the first error page ('Fehler 751', 'Access Denied', HTTP 403), with no retry and no cookie clearing, and switch to links-only mode. |
| shop.oebbtickets.at | at most 2-3 across all agents | one search at a time per tab; at most 3 'Spätere Verbindungen' clicks per extractor call, 9 s apart | as the hypotheses need | After a 429 symptom, wait 40-60 s, re-confirm the travellers and search again. A second 429 means dropping to 1 tab. |
| Trainline, SBB, NS International, ČD and all others | 1 each | human pace: one search at a time, about 10 s or more between result loads | as few as the hypotheses need | Stop that site at its first block page. |
| Everywhere | only tabs the skill opened | no bursts | deep mode: 3 agents by default, at most 2 on ÖBB; bahn.de stays in the main session | Stop and hand over to the user on a CAPTCHA, or on a challenge that does not clear by itself within about 20 s. ÖBB's Cloudflare 'Sicherheitsüberprüfung' (security check) normally clears in about 10 s: wait, don't click. |

## 4. Never

- Call hidden APIs or endpoints: no fetch, XHR or curl to /web/api, /.rest/, /api/offer, /api/order or any other seller API, whether from the page or from the shell.
- Solve CAPTCHAs, use stealth, spoof headers or user agents, or use any other anti-bot evasion.
- Clear cookies, change the IP (VPN, proxy) or open a fresh profile to get around a block.
- Log in, create an account, or enter personal data such as names, e-mail, address, ID or payment details. An age, or a date of birth derived from the age where a search form or link needs one (Trainline), is fine.
- Add to the cart, attempt a reservation, click 'Angebot wählen' (choose offer) and continue, click 'Weiter zur Reservierung' (continue to reservation), or reach any payment step.
- Touch tabs the skill did not open: no reading, navigating, reloading or closing them.
- Run bahn.de in parallel: never more than one tab, and never in more than one agent.
- Store or republish prices beyond the user's own comparison: no price databases, feeds, shared lists or scheduled posting. The dated worked example in this skill's documentation is an illustration from one session, not a price list.

Personal, non-commercial use only.

## 5. Why read-only matters technically

- **ÖBB shares the cart across tabs.** The ÖBB shop keeps search state per tab (sessionStorage), so two tabs can search different routes. The login and cart session (localStorage) is shared by every tab of the same browser. An automated 'Angebot wählen' -> cart step would land in the user's real cart, possibly while they are booking.
- **The seat is only tried at the cart.** ÖBB attempts the seat reservation at the cart step, after passenger names are entered (POST /api/order/v5/shoppingCart). Its errors 11149 and 11154 therefore cannot be tested read-only. Report 'seat not guaranteed' and check DB's reservation-only search instead.
- **Parallel tabs interfere.** ÖBB tabs share one server session and one rate limit, so parallel tabs disturbed each other and slowed the user's own booking.
- **Trenitalia fills a total on click.** A first click on a result row put its default offer into the anonymous session total ('Gesamtpreis 73,80'). Read list prices without clicking rows.

## 6. Links-only mode

Use links-only mode when the user chose it for bahn.de at the notice, when Chrome is not connected (then for every seller), or when a site has blocked the browser.

1. **Build the links** with [../scripts/deeplinks.js](../scripts/deeplinks.js):
   - bahn.de O -> D in W, once with `s=true` and once with `s=false`, plus `ar=true` for the seat check;
   - Trainline and SBB where they apply.
   For sellers without a verified deep link (the ÖBB shop; ČD results are session-bound), write out the form values instead: From, To, Via, date, time, 'ab' or 'an' (departure or arrival), and the travellers exactly as the site words them.
2. **Send a short numbered list**, one line per search, and say what to read from each: train number, departure and arrival, price label, class, fare name, and any 'Zug ausgebucht', 'nur 1. Kl' or 'Teilstrecke'. Keep to the top hypotheses from Phase 4 so the user does not have to open 40 links.
3. **Ask the user to paste back** the visible text of the results, or a screenshot. For finalists, ask for the offer page too.
4. **Record rows from the report** in the usual schema. Tag them [seen YYYY-MM-DD] from a results list or [verified YYYY-MM-DD] from an offer page, and add 'reported by user' to warnings.
5. **Run the rest of the method unchanged:** fast set, directness test, gap-fill, seat check, verification.
6. **Nobody to open the links** (unattended run): keep the links under 'Not checked' and use the Trainline (DB) proxy described in [method.md](method.md) §11.

## Sources

- bahn.de terms of use: https://www.bahn.de/nutzungsbedingungen
- bahn.de robots.txt: https://www.bahn.de/robots.txt
- ÖBB terms of use: https://www.oebb.at/de/rechtliches/nutzungsbedingungen
- ÖBB shop robots.txt: https://shop.oebbtickets.at/robots.txt
- Observations: the reference session of 2026-09-26 to 2026-09-28, see [examples/berlin-muenchen-2026-09.md](examples/berlin-muenchen-2026-09.md).
