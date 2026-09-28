// deeplinks.js - dependency-free builders for the verified deep-link formats of bahn.de, Trainline and SBB.
// It only builds strings: nothing is fetched, nothing is clicked.
//
// USE IN NODE:  node "${CLAUDE_SKILL_DIR}/scripts/deeplinks.js" --self-test      (must print 'self-test passed')
//               node -e "const d=require(process.argv[1]); console.log(d.dbSearchUrl({...}))" "${CLAUDE_SKILL_DIR}/scripts/deeplinks.js"
//               Always pass the absolute path; never cd into the skill folder.
// USE IN CHROME: Read this file, append one line with your call (e.g. dbSearchUrl({...})) and paste the whole
//   text as the `text` of mcp__claude-in-chrome__javascript_tool; the last expression is returned. Pasted
//   without an extra line, it returns the usage text. Station ids: ../references/stations.md
//
// CONFIDENCE TAGS: [verified 2026-09-26/27] = the link was opened in the reference session and showed the
// expected search; [seen] = observed once; [unverified] / [hypothesis] = not tested.
//
// bahn.de - dbSearchUrl({from:{name,eva}, to:{name,eva}, when, arrive, klass, travellers, reservationOnly, fastestOnly})
//   Builds the compact form [verified 2026-09-26/27]. The site itself writes a longer form with coordinates
//   (X, Y) and extra ids (p, i) in soid/zoid; the compact form 'A=1@O=<name>@L=<eva>@' works without them.
//   so / zo            from / to station name as bahn.de spells it (e.g. 'Frankfurt(Main)Hbf').
//   soid / zoid        'A=1@O=<name>@L=<eva>@', URL-encoded. Required: without them the page shows an error.
//   sot / zot = ST     station type; soei / zoei = EVA numbers (7 digits, NOT the UIC code).
//   kl                 class. kl=2 [verified]; kl=1 [hypothesis: 1st class].
//   r                  traveller code. 13:16:KLASSENLOS:1 = one adult, no discount card (the site default) [seen];
//                      9:16:KLASSENLOS:1 appeared when a 19-year-old was set in the UI, so 9 = youth 15-26 [seen,
//                      likely] and 16 = no discount card [likely]. Other codes (children, seniors, BahnCard) and
//                      the joined format for several travellers are [unverified]: set those in the bahn.de UI.
//   hd                 date-time 'YYYY-MM-DDTHH:MM:SS'. hza=D = depart after [verified]; hza=A = arrive by [unverified].
//   hz=%5B%5D          empty stop-over list ('[]').
//   ar                 true = 'Nur Sitzplatz buchen' (reservation only; each train shows a seat price or
//                      'Zug ausgebucht') [verified]; false = normal ticket search.
//   s                  'Schnellste Verbindungen anzeigen' (show fastest connections only). s=false is needed to
//                      see slower non-Sprinter trains [verified]; s=true is the site default.
//   d, fm, bp, dlt, nfv, dltv = false: copied from the site's own links; meanings unknown. d=true was seen once
//                      together with the 'Nur Direktverbindungen' (direct only) option [seen]; not wired in here.
//
// Trainline - trainlineUrl({originLoc, destinationLoc, when, dobs, lang}) [verified 2026-09-26, one passenger]
//   origin / destination 'urn:trainline:generic:loc:<id>'; <id> = Trainline's own station id (stations.md).
//   outwardDate 'YYYY-MM-DDTHH:MM:SS', outwardDateType=departAfter, journeySearchType=single (one way).
//   passengers[]       '<date of birth>|pid-<n>': Trainline prices by exact age. The verified link carried a date
//                      exactly 19 years before the search day, so a date that gives the right age on the travel
//                      day is enough; do not put a real birthday in a URL. Several passengers [unverified].
//   directSearch=false, transportModes[]=mixed, lang (default 'de').
//
// SBB - sbbUrl({stops:[{name,uic}], day, time, moment, via}) [verified 2026-09-26]
//   stops              'Name_I<UIC>' joined by '~'; spaces become '+'. UIC is not EVA: München Hbf is UIC
//                      8020347 but EVA 8000261. day 'YYYY-MM-DD'; time 'HH_MM'; moment=dep (departure)
//                      [verified]; other values [unverified]. reduction=none = full fare (no Halbtax).
//   via:true           a middle stop plus &via=1 [seen]. &trip=0_1 opens a trip [seen]; not built here.

const DB_TRAVELLER = { adult: '13:16:KLASSENLOS:1', youth: '9:16:KLASSENLOS:1' };
const WHEN_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;

function dbSearchUrl(opts) {
  const { from, to, when, arrive = false, klass = 2, travellers = ['adult'], reservationOnly = false, fastestOnly = true } = opts || {};
  for (const [k, s] of [['from', from], ['to', to]]) {
    if (!s || !s.name || !/^\d{7}$/.test(String(s.eva))) throw new Error(k + ' needs {name, eva} with a 7-digit EVA number');
  }
  if (!WHEN_RE.test(when || '')) throw new Error("when must be 'YYYY-MM-DDTHH:MM:SS'");
  if (klass !== 1 && klass !== 2) throw new Error('klass must be 1 or 2');
  if (!Array.isArray(travellers) || travellers.length === 0) throw new Error("travellers must be a non-empty array of 'adult' | 'youth'");
  const codes = travellers.map((t) => {
    if (!Object.prototype.hasOwnProperty.call(DB_TRAVELLER, t)) throw new Error('unverified traveller type: set travellers in the bahn.de UI');
    return DB_TRAVELLER[t];
  });
  if (codes.length > 1) throw new Error('several travellers: the joined r= format is unverified; set travellers in the bahn.de UI');
  if (arrive) console.warn('dbSearchUrl: hza=A (arrive by) is unverified; check that the page searched by arrival time');
  const loc = (s) => encodeURIComponent('A=1@O=' + s.name + '@L=' + s.eva + '@');
  const tf = (x) => (x ? 'true' : 'false');
  return 'https://www.bahn.de/buchung/fahrplan/suche#' + [
    'sts=true', 'so=' + encodeURIComponent(from.name), 'zo=' + encodeURIComponent(to.name), 'kl=' + klass, 'r=' + codes[0],
    'soid=' + loc(from), 'zoid=' + loc(to), 'sot=ST', 'zot=ST', 'soei=' + from.eva, 'zoei=' + to.eva,
    'hd=' + when, 'hza=' + (arrive ? 'A' : 'D'), 'hz=%5B%5D', 'ar=' + tf(reservationOnly), 's=' + tf(fastestOnly),
    'd=false', 'fm=false', 'bp=false', 'dlt=false', 'nfv=false', 'dltv=false',
  ].join('&');
}

function trainlineUrl(opts) {
  const { originLoc, destinationLoc, when, dobs, lang = 'de' } = opts || {};
  if (!/^\d+$/.test(String(originLoc)) || !/^\d+$/.test(String(destinationLoc))) throw new Error('originLoc and destinationLoc must be numeric Trainline station ids');
  if (!WHEN_RE.test(when || '')) throw new Error("when must be 'YYYY-MM-DDTHH:MM:SS'");
  if (!Array.isArray(dobs) || dobs.length === 0 || dobs.some((d) => !/^\d{4}-\d{2}-\d{2}$/.test(d))) throw new Error("dobs must be a non-empty array of 'YYYY-MM-DD'");
  if (dobs.length > 1) console.warn('trainlineUrl: several passengers (pid-0, pid-1, ...) is unverified; check the passenger list on the page');
  const urn = (id) => encodeURIComponent('urn:trainline:generic:loc:' + id);
  return 'https://www.thetrainline.com/book/results?' + [
    'origin=' + urn(originLoc), 'destination=' + urn(destinationLoc), 'outwardDate=' + encodeURIComponent(when),
    'outwardDateType=departAfter', 'journeySearchType=single',
    ...dobs.map((d, i) => 'passengers%5B%5D=' + encodeURIComponent(d + '|pid-' + i)),
    'directSearch=false', 'transportModes%5B%5D=mixed', 'lang=' + encodeURIComponent(lang),
  ].join('&');
}

function sbbUrl(opts) {
  const { stops, day, time, moment = 'dep', via = false } = opts || {};
  if (!Array.isArray(stops) || stops.length < 2 || stops.some((s) => !s || !s.name || !/^\d{7}$/.test(String(s.uic)))) throw new Error('stops must be at least 2 {name, uic} with 7-digit UIC codes');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day || '')) throw new Error("day must be 'YYYY-MM-DD'");
  if (!/^\d{2}_\d{2}$/.test(time || '')) throw new Error("time must be 'HH_MM'");
  if (moment !== 'dep') console.warn("sbbUrl: moment other than 'dep' is unverified");
  if (via && stops.length < 3) throw new Error('via:true needs a middle stop');
  if (!via && stops.length > 2) console.warn('sbbUrl: a middle stop without via:true is unverified');
  const stop = (s) => encodeURIComponent(s.name).replace(/%20/g, '+') + '_I' + s.uic;
  return 'https://www.sbb.ch/de?stops=' + stops.map(stop).join('~') + '&day=' + day + '&time=' + time +
    '&moment=' + encodeURIComponent(moment) + '&reduction=none' + (via ? '&via=1' : '');
}

// The three links verified first-hand on 2026-09-26/27; selfTest() must reproduce them byte for byte.
const EXPECTED = {
  db: 'https://www.bahn.de/buchung/fahrplan/suche#sts=true&so=Berlin%20Hbf&zo=M%C3%BCnchen%20Hbf&kl=2&r=9:16:KLASSENLOS:1&soid=A%3D1%40O%3DBerlin%20Hbf%40L%3D8011160%40&zoid=A%3D1%40O%3DM%C3%BCnchen%20Hbf%40L%3D8000261%40&sot=ST&zot=ST&soei=8011160&zoei=8000261&hd=2026-09-28T10:00:00&hza=D&hz=%5B%5D&ar=false&s=false&d=false&fm=false&bp=false&dlt=false&nfv=false&dltv=false',
  trainline: 'https://www.thetrainline.com/book/results?origin=urn%3Atrainline%3Ageneric%3Aloc%3A7630&destination=urn%3Atrainline%3Ageneric%3Aloc%3A7480&outwardDate=2026-09-28T04%3A00%3A00&outwardDateType=departAfter&journeySearchType=single&passengers%5B%5D=2007-09-26%7Cpid-0&directSearch=false&transportModes%5B%5D=mixed&lang=de',
  sbb: 'https://www.sbb.ch/de?stops=Berlin+Hbf_I8065969~Z%C3%BCrich+HB_I8503000&day=2026-09-28&time=06_00&moment=dep&reduction=none',
};

function selfTest() {
  const got = {
    db: dbSearchUrl({ from: { name: 'Berlin Hbf', eva: 8011160 }, to: { name: 'München Hbf', eva: 8000261 }, when: '2026-09-28T10:00:00', arrive: false, klass: 2, travellers: ['youth'], reservationOnly: false, fastestOnly: false }),
    trainline: trainlineUrl({ originLoc: 7630, destinationLoc: 7480, when: '2026-09-28T04:00:00', dobs: ['2007-09-26'], lang: 'de' }),
    sbb: sbbUrl({ stops: [{ name: 'Berlin Hbf', uic: 8065969 }, { name: 'Zürich HB', uic: 8503000 }], day: '2026-09-28', time: '06_00', moment: 'dep', via: false }),
  };
  const failures = Object.keys(EXPECTED).filter((k) => got[k] !== EXPECTED[k]).map((k) => k + '\n  expected ' + EXPECTED[k] + '\n  got      ' + got[k]);
  return { pass: failures.length === 0, checked: Object.keys(EXPECTED).length, failures };
}

const USAGE = [
  'deeplinks.js builds search links; nothing is fetched.',
  "dbSearchUrl({from:{name:'Berlin Hbf',eva:8011160}, to:{name:'München Hbf',eva:8000261}, when:'2026-09-28T10:00:00', klass:2, travellers:['youth'], reservationOnly:false, fastestOnly:false})",
  "trainlineUrl({originLoc:7630, destinationLoc:7480, when:'2026-09-28T04:00:00', dobs:['2007-09-26'], lang:'de'})",
  "sbbUrl({stops:[{name:'Berlin Hbf',uic:8065969},{name:'Zürich HB',uic:8503000}], day:'2026-09-28', time:'06_00', moment:'dep', via:false})",
  'selfTest() -> {pass, checked, failures}. In node: node deeplinks.js --self-test',
].join('\n');

const IS_NODE = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
if (IS_NODE && typeof module !== 'undefined' && module.exports) module.exports = { dbSearchUrl, trainlineUrl, sbbUrl, selfTest, EXPECTED };
if (IS_NODE && typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
  if (process.argv.includes('--self-test')) {
    const r = selfTest();
    console.log(r.pass ? 'self-test passed (' + r.checked + '/' + r.checked + ' URLs match)' : 'self-test FAILED\n' + r.failures.join('\n'));
    process.exitCode = r.pass ? 0 : 1;
  } else {
    console.log(USAGE);
  }
}
USAGE
