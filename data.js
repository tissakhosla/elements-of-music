
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
    pulse: ["Phrasing", "Breaks"],
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
    sound: ["Dynamics", "Voicings"],
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

const ENSEMBLE_TIERS = [
  new Tier(9, 20, "dark", {
    both: ["Band"],
  }),
  new Tier(8, 28, "dark", {
    both: ["Freedom", "Trust"],
  }),
  new Tier(7, 36, "dark", {
    both: ["Risk", "Innovation"],
  }),
  new Tier(6, 48, "dark", {
    pulse: ["Abstraction"],
    both: ["Games", "Follow the Leader"],
    sound: ["Identity"],
  }),
  new Tier(5, 60, "dark", {
    pulse: ["Flexible Beat", "Polyrhythm"],
    both: ["Emulation", "Collective Improvisation"],
    sound: ["Texture", "Doubles"],
  }),
  new Tier(4, 72, "dark", {
    pulse: ["Comping", "Riffs", "Swing Variations"],
    both: ["Syncopation", "Community", "Listening"],
    sound: ["Vibrato", "Blend", "Generosity"],
  }),
  new Tier(3, 82, "light", {
    pulse: ["Articulation", "Accents"],
    both: ["Call and Response", "Form/Arrangment", "Note Duration"],
    sound: ["Dynamics", "Balance"],
  }),
  new Tier(2, 90, "light", {
    pulse: ["Bass/Cymbal", "Attack"],
    both: ["Quarter Notes", "2 + 4"],
    sound: ["Unison", "Intonation"],
  }),
  new Tier(1, 96, "light", {
    pulse: ["Pulse"],
    sound: ["Sound"],
    bigText: true,
  }),
  new Tier(0, 100, "light", {
    both: ["Agreement", "Professionalism"],
    thin: true,
  }),
];
