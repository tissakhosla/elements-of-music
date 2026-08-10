// Elements of Music — tier data
//
// Tiers run from simplest (0, the foundations) to most complex (9, the apex).
// Within each tier, items are grouped by which base they draw on:
//   pulse  — builds on Pulse (time/rhythm side)
//   sound  — builds on Sound (pitch/tone side)
//   both   — a fusion of the two
//
// Tier number = 1 + (the highest tier of whatever it strictly requires to
// exist). A few load-bearing dependency chains, spelled out:
//   Pitch(2) -> Interval(3) -> Key(4) -> Chord/Chord Quality/Mode(5)
//   Pitch(2)+Rhythm(2) -> Melody(4, via Interval[3])
//   Consonance/Dissonance(3) -> Harmony(4, the general phenomenon)
//   Key(4)+Harmony(4) -> Chord(5, a specific, key-built harmony)
//   Chord(5) -> Chord Quality(5, taught alongside Chord in practice)
// Items are grouped thematically once their minimum tier is satisfied
// (e.g. Texture/Counterpoint/Cadence/Polyrhythm/Instrumentation all land
// together as "things built by combining multiple lines/layers at once"),
// but nothing is ever placed before something it depends on.
//
// `n` selects the color via the --tier-N / --tier-N-ink CSS custom properties
// defined in styles.css. `mode` picks the light/dark chip-text treatment.
// `width` is the tier band's width as a percentage, giving the pyramid taper.
// `thin` renders a shallower band (used for Tier 0, a foundation beneath
// Pulse/Sound). `bigText` scales that tier's chip text up (used for Tier 1,
// Pulse/Sound themselves).
//
// Edit the TIERS list below to add, remove, rename, or re-sort items and
// tiers — script.js re-renders the whole pyramid (and the Y axis) from
// whatever is here.

class Tier {
  constructor(n, width, mode, { pulse = [], both = [], sound = [], thin = false, bigText = false } = {}) {
    this.n = n;
    this.width = width;
    this.mode = mode;
    this.pulse = pulse;
    this.both = both;
    this.sound = sound;
    this.thin = thin;
    this.bigText = bigText;
  }
}

const TIERS = [
  new Tier(9, 20, "dark", {
    both: ["Music", "Expression"],
  }),
  new Tier(8, 28, "dark", {
    both: ["Reflexes", "Velocity"]
  }),
  new Tier(7, 36, "dark", {
    pulse: ["Riffs"],
    both: ["Hearing", "Math"],
    sound: ["Turnarounds"]
  }),
  new Tier(6, 48, "dark", {
    pulse: ["Phrasing"],
    both: ["Harmonic Rhythm", "Syncopation"],
    sound: ["Consonance", "Dissonance"],
  }),
  new Tier(5, 60, "dark", {
    pulse: ["Rhythm"],
    both: ["Blues", "Harmony"],
    sound: ["Melody"],
  }),
  new Tier(4, 72, "dark", {
    pulse: ["Call", "Response"],
    both: ["Interaction", "Form"],
    sound: ["Dynamics"],
  }),
  new Tier(3, 82, "light", {
    pulse: ["Tempos", "Groove(s)", "Ride", "Swing"],
    both: ["Repertoire"],
    sound: ["Keys", "Intervals", "Chords", "Scales"],
  }),
  new Tier(2, 90, "light", {
    pulse: ["Space", "Meter"],
    both: ["Articulation", "Accents"],
    sound: ["Pitch", "Timbre", "Intonation"],
  }),
  new Tier(1, 96, "light", {
    pulse: ["Pulse"],
    sound: ["Sound"],
    bigText: true,
  }),
  new Tier(0, 100, "light", {
    both: ["Action", "Intention", "Understanding"],
    thin: true,
  }),
];
