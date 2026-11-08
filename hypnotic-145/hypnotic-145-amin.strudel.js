// HYPNOTIC 145 · A minor · YASYNTHA
// Elegant hypnotic groove techno, live-coded from one-shots and loops
// (Riemann "Fast Minimal Grooves 1" + SoC vocals, all prepped with the mastering chain:
// low cut, mono low end, matched loudness, sample-exact 145 BPM loops).
// First play: give it a few seconds to load (~14 MB). If the very start is late, stop and play again.

samples('https://raw.githubusercontent.com/christiandimitri/hypnotic-140-strudel/main/hypnotic-145/strudel.json')
setcpm(145 / 4) // 145 BPM, 1 cycle = 1 bar

// ── mix: 0 mutes a part ──────────────────────────────────────────
const mix = {
  kick: 1, bass: 0.7, clap: 0.72, hats: 0.42, perc: 0.5,
  loops: 0.4, ride: 0.28, synth: 0.6, atmo: 0.56, vox: 0.62, fx: 0.45,
}
const master = 0.55 // keeps peaks under 0 dBFS in the browser

// ── arrangement (224 bars ≈ 6:11) ────────────────────────────────
//   intro groove build mainA break1 mainB  dj  break2 peak wind outro
const BARS = [16, 16, 16, 32, 8, 32, 16, 8, 32, 16, 32]
const lane = (flags) => arrange(...flags.split('').map((f, i) => [BARS[i], pure(f === '1' ? 1 : 0)]))
const sect = (flags, pat) => pat.mask(lane(flags))
const loopBars = (name, bars, n = 0) => s(name).n(n).slow(bars) // loops are already exactly 145 BPM

// ── drums ────────────────────────────────────────────────────────
// kick on A (55 Hz). It ducks the bass hard and the music lightly: the "wouwou" pump.
const kick = s("<kick*4!15 [kick kick kick [kick ~ ~ kick]]>")
  .gain(mix.kick * master).orbit(1)
  .duckorbit("2:3").duckattack("0.17:0.25").duckdepth("0.7:0.3")

const clap = stack(
  s("~ clap:0 ~ clap:0"),
  s("<~!3 [~ ~ ~ [~ ~ ~ clap:1]]>").velocity(0.45), // ghost clap, end of every 4 bars
).gain(mix.clap * master).hpf(250).room(0.22).roomsize(2.5).orbit(6)

// silky 16ths: accented, a touch of swing, slowly opening
const hats = s("hh*16").n("<0!3 1>")
  .velocity("[0.45 0.8 0.6 1]*4")
  .swingBy(0.12, 8)
  .hpf(sine.range(450, 1400).slow(32))
  .pan(sine.range(0.38, 0.62).slow(7))
  .gain(mix.hats * master).orbit(4)
const openhat = s("[~ oh]*4").n("<0 1>").velocity(0.7).hpf(700).gain(mix.hats * master).orbit(4)

// hypnotic perc: evolving euclids + a 3-step line that drifts against the bar
const perc = stack(
  s("perc:0").struct("x(<5 7 5 9>,16,<0 2>)").velocity(perlin.range(0.55, 1)).pan(perlin.range(0.3, 0.7).fast(2)),
  s("perc:2").struct("x(3,8,3)").velocity(0.75).pan(0.68),
  s("{perc:4 ~ ~}%16").velocity(0.6).pan(0.3),
  s("<~ [~ ~ perc:3 ~]>").velocity(0.8).pan(0.55),
).hpf(280).gain(mix.perc * master).delay(0.22).delayfeedback(0.35).orbit(5)

// ── loops ────────────────────────────────────────────────────────
const hatloop  = loopBars("hatloop", 4, "<0 1>").gain(mix.loops * master).orbit(8)
const top      = loopBars("top", 4, "<0!3 1>").gain(mix.loops * master).orbit(8)
const ride     = loopBars("ride", 4).gain(mix.ride * master).orbit(8)
const percloop = loopBars("percloop", 8, 1).gain(mix.loops * master).orbit(8)
const hiss    = loopBars("hiss", 2, "<0 1>").gain(0.22 * master).room(0.35).orbit(9)

// ── low end: rolling sub, then the groovier line in the mains ────
const subroll = loopBars("bass", 2, "<0!3 2>").gain(mix.bass * master).orbit(2)
const groove  = loopBars("bass", 2, "<1!3 3>").gain(mix.bass * master).orbit(2)

// ── music: filters breathe slowly, so it never sits still ────────
const synthA = loopBars("synth", 8, 0).lpf(sine.range(600, 4500).slow(48)).lpq(3)
  .gain(mix.synth * master).delay(0.2).room(0.25).orbit(3)
const synthB = loopBars("synth", 8, 1).lpf(sine.range(900, 6000).slow(32)).lpq(2)
  .gain(mix.synth * master).delay(0.2).room(0.25).orbit(3)
const synthC = loopBars("synth", 16, 2).lpf(sine.range(500, 7000).slow(64))
  .gain(mix.synth * master).delay(0.2).room(0.25).orbit(3)
const atmoA = loopBars("atmo", 8, 0).gain(mix.atmo * master).room(0.25).orbit(3)
const atmoB = loopBars("atmo", 8, 1).gain(mix.atmo * master).room(0.25).orbit(3)

// the sexy part: one whispered phrase every 8 bars, washed in space
const vox = s("<~!4 vox:0 ~!3 ~!4 vox:1 ~!3 ~!4 vox:2 ~!3 ~!4 vox:3 ~!3>")
  .hpf(250).gain(mix.vox * master).room(0.5).roomsize(4).delay(0.35).delayfeedback(0.45).orbit(7)
const riser = loopBars("fx", 8, 0).gain(mix.fx * master).orbit(9)
const sweep = s("<~!14 fx:1 ~>").gain(mix.fx * master).orbit(9) // 2-bar fx into each 16

// ── play ─────────────────────────────────────────────────────────
//              intro groove build mainA break1 mainB dj break2 peak wind outro
stack(
  sect("11110110111", kick),
  sect("00110110110", clap),
  sect("01111111111", hats),
  sect("00010100110", openhat),
  sect("01110111110", perc),
  sect("10010010001", hatloop),
  sect("00010100100", top),
  sect("00000100100", ride),
  sect("00000010100", percloop),
  sect("10001001001", hiss),
  sect("01100010011", subroll),
  sect("00010100100", groove),
  sect("00111000010", synthA),
  sect("00000100100", synthB),
  sect("00000000100", synthC),
  sect("11001011001", atmoA),
  sect("00010100100", atmoB),
  sect("00011101100", vox),
  sect("00001001000", riser),
  sect("00100100010", sweep),
)
