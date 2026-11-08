// Hypnotic 140 F min - YASYNTHA - PHONE version
// Your real Ableton stems (with all plugins), merged into 4 groups so it fits in
// a phone browser's memory. Same 16 sections, same bars as the Live arrangement.
// First play: it loads ~21 MB during the 2-bar count-in. If the start is out of
// sync, press stop and play again - it's cached after the first load.

samples('github:christiandimitri/hypnotic-140-strudel')
setcpm(140/4) // 1 cycle = 1 bar at 140 BPM

// 0 = mute, 1 = as mixed in Live
const level = {
  drums: 1,  // kick, perc loop, hats, loop drum 9, Toru perc, percussion 6
  low: 1,    // LOW (TNR) rumble
  music: 1,  // dub chord, atmos x2, vox, 13-Audio FX, vocoder textures
  space: 1,  // reverb + delay returns
}
const master = 1.4 // overall volume (stems are pre-mastering, so a bit quiet)

const cut = (group, sec, bars) =>
  s('p_' + group + '_' + String(sec).padStart(2, '0')).slow(bars).gain(level[group] * master)

const section = (sec, bars, groups) => [bars, stack(...groups.map(g => cut(g, sec, bars)))]

// silent count-in that starts downloading every cut
const warmup = s("[p_drums_00 p_drums_01 p_drums_02 p_drums_03 p_drums_04 p_drums_05 p_drums_06 p_drums_07 p_drums_08 p_drums_09 p_drums_10 p_drums_11 p_drums_12 p_drums_13 p_drums_14 p_drums_15 p_low_00 p_low_01 p_low_02 p_low_03 p_low_04 p_low_05 p_low_06 p_low_07 p_low_10 p_low_11 p_low_12 p_low_13 p_low_14 p_low_15 p_music_00 p_music_01 p_music_02 p_music_03 p_music_04 p_music_05 p_music_06 p_music_07 p_music_08 p_music_09 p_music_10 p_music_11 p_music_12 p_music_13 p_music_14 p_music_15 p_space_00 p_space_01 p_space_02 p_space_03 p_space_04 p_space_05 p_space_06 p_space_07 p_space_08 p_space_09 p_space_10 p_space_11 p_space_12 p_space_13 p_space_14 p_space_15]").gain(0)

arrange(
  [2, warmup],                                        // count-in: loading
  section( 0,  4, ['drums', 'low', 'music', 'space']),          // bar   1  Intro
  section( 1,  4, ['drums', 'low', 'music', 'space']),          // bar   5  Perc in
  section( 2,  8, ['drums', 'low', 'music', 'space']),          // bar   9  Low + hats in
  section( 3,  6, ['drums', 'low', 'music', 'space']),          // bar  17  Groove build
  section( 4,  2, ['drums', 'low', 'music', 'space']),          // bar  23  Break 1 (synth intro)
  section( 5, 32, ['drums', 'low', 'music', 'space']),          // bar  25  Main A
  section( 6, 16, ['drums', 'low', 'music', 'space']),          // bar  57  Groove (DJ space)
  section( 7, 24, ['drums', 'low', 'music', 'space']),          // bar  73  Main B (vocal)
  section( 8,  4, ['drums', 'music', 'space']),                 // bar  97  Break 2 (drone)
  section( 9,  4, ['drums', 'music', 'space']),                 // bar 101  Build (riser)
  section(10,  8, ['drums', 'low', 'music', 'space']),          // bar 105  Peak
  section(11, 32, ['drums', 'low', 'music', 'space']),          // bar 113  Peak (full)
  section(12, 24, ['drums', 'low', 'music', 'space']),          // bar 145  Wind down
  section(13,  4, ['drums', 'low', 'music', 'space']),          // bar 169  Outro
  section(14, 16, ['drums', 'low', 'music', 'space']),          // bar 173  Outro (DJ mix-out)
  section(15,  4, ['drums', 'low', 'music', 'space'])           // bar 189  Kick only
)
