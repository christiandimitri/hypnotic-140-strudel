// Hypnotic 140 F min - YASYNTHA
// Strudel rebuild of the Ableton arrangement using the REAL rendered stems
// (each track exported from Live with its own plugin chain, cut per section).
// First play: give it a few seconds to load the audio. If the start is out of sync,
// press stop and play again - everything is cached after the first load.

samples('github:christiandimitri/hypnotic-140-strudel')
setcpm(140/4) // 1 cycle = 1 bar at 140 BPM

// Mute a track by setting its level to 0. 1 = as mixed in Live.
const level = {
  kick: 1,    // KICK
  low: 1,     // LOW (TNR)
  perc: 1,    // PERC LOOP
  hats: 1,    // HATS LOOP
  loop9: 1,   // LOOP DRUM 9
  chord: 1,   // DUB CHORD
  atmos1: 1,  // ATMOS 1
  atmos2: 1,  // ATMOS 2
  vox: 1,     // VOX
  toru: 1,    // Toru Ikemoto perc
  perc6: 1,   // Percussion 6
  fx: 1,      // 13-Audio FX
  tex20: 1,   // Vocoder texture 20
  tex21: 1,   // Vocoder texture 21
  reverb: 1,  // A-Reverb return
  delay: 1,   // B-Delay return
}

// play one section-long stem cut, exactly in time
const cut = (track, sec, bars) =>
  s(`${track}_${String(sec).padStart(2,'0')}`).slow(bars).gain(level[track])

// silent warm-up bar: starts downloading every cut before the music begins
const warmup = s("[atmos1_03 atmos1_06 atmos1_08 atmos1_09 atmos1_10 atmos1_11 atmos1_12 atmos1_14 atmos2_03 atmos2_06 atmos2_08 atmos2_09 atmos2_11 atmos2_12 atmos2_13 atmos2_14 chord_04 chord_05 chord_07 chord_08 chord_09 chord_10 chord_11 chord_12 chord_13 delay_00 delay_01 delay_02 delay_03 delay_04 delay_05 delay_06 delay_07 delay_08 delay_09 delay_10 delay_11 delay_12 delay_13 delay_14 delay_15 fx_05 fx_06 fx_07 fx_08 fx_09 fx_10 fx_11 fx_12 fx_13 hats_02 hats_03 hats_04 hats_05 hats_06 hats_07 hats_11 hats_12 hats_13 kick_00 kick_01 kick_02 kick_03 kick_04 kick_05 kick_06 kick_07 kick_10 kick_11 kick_12 kick_13 kick_14 kick_15 loop9_05 loop9_07 loop9_11 low_00 low_01 low_02 low_03 low_04 low_05 low_06 low_07 low_10 low_11 low_12 low_13 low_14 low_15 perc_01 perc_02 perc_03 perc_04 perc_05 perc_06 perc_07 perc_10 perc_11 perc_12 perc_13 perc_14 perc_15 perc6_06 perc6_07 perc6_10 perc6_11 perc6_12 perc6_13 reverb_03 reverb_04 reverb_05 reverb_06 reverb_07 reverb_08 reverb_09 reverb_10 reverb_11 reverb_12 reverb_13 reverb_14 reverb_15 tex20_00 tex20_01 tex20_02 tex20_03 tex20_04 tex20_05 tex20_06 tex20_07 tex20_08 tex20_09 tex20_10 tex20_11 tex20_12 tex20_13 tex20_14 tex20_15 tex21_00 tex21_01 tex21_02 tex21_03 tex21_04 tex21_05 tex21_06 tex21_07 tex21_08 tex21_09 tex21_10 tex21_11 tex21_12 tex21_13 tex21_14 tex21_15 toru_07 toru_08 toru_09 toru_10 toru_12 toru_13 vox_04 vox_05 vox_07 vox_08 vox_10 vox_11]").gain(0)

const section = (sec, bars, tracks) => [bars, stack(...tracks.map(t => cut(t, sec, bars)))]

arrange(
  [2, warmup],                                     // count-in: loading
  section( 0,  4, ["kick", "low", "tex20", "tex21", "delay"]), // bar   1  Intro
  section( 1,  4, ["kick", "low", "perc", "tex20", "tex21", "delay"]), // bar   5  Perc in
  section( 2,  8, ["kick", "low", "perc", "hats", "tex20", "tex21", "delay"]), // bar   9  Low + hats in
  section( 3,  6, ["kick", "low", "perc", "hats", "atmos1", "atmos2", "tex20", "tex21", "reverb", "delay"]), // bar  17  Groove build
  section( 4,  2, ["kick", "low", "perc", "hats", "chord", "vox", "tex20", "tex21", "reverb", "delay"]), // bar  23  Break 1 (synth intro)
  section( 5, 32, ["kick", "low", "perc", "hats", "loop9", "chord", "vox", "fx", "tex20", "tex21", "reverb", "delay"]), // bar  25  Main A
  section( 6, 16, ["kick", "low", "perc", "hats", "atmos1", "atmos2", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar  57  Groove (DJ space)
  section( 7, 24, ["kick", "low", "perc", "hats", "loop9", "chord", "vox", "toru", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar  73  Main B (vocal)
  section( 8,  4, ["chord", "atmos1", "atmos2", "vox", "toru", "fx", "tex20", "tex21", "reverb", "delay"]), // bar  97  Break 2 (drone)
  section( 9,  4, ["chord", "atmos1", "atmos2", "toru", "fx", "tex20", "tex21", "reverb", "delay"]), // bar 101  Build (riser)
  section(10,  8, ["kick", "low", "perc", "chord", "atmos1", "vox", "toru", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar 105  Peak
  section(11, 32, ["kick", "low", "perc", "hats", "loop9", "chord", "atmos1", "atmos2", "vox", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar 113  Peak (full)
  section(12, 24, ["kick", "low", "perc", "hats", "chord", "atmos1", "atmos2", "toru", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar 145  Wind down
  section(13,  4, ["kick", "low", "perc", "hats", "chord", "atmos2", "toru", "perc6", "fx", "tex20", "tex21", "reverb", "delay"]), // bar 169  Outro
  section(14, 16, ["kick", "low", "perc", "atmos1", "atmos2", "tex20", "tex21", "reverb", "delay"]), // bar 173  Outro (DJ mix-out)
  section(15,  4, ["kick", "low", "perc", "tex20", "tex21", "reverb", "delay"])  // bar 189  Kick only
)
