// Hypnotic 140 F min - YASYNTHA - PHONE version
// Your real Ableton stems (all plugins), rendered at 140 BPM, merged into 4 groups
// and cut into 2-bar pieces. Same 16 sections, same bars as the Live arrangement.
// The 4-bar silent count-in downloads the audio (~22 MB). If anything sounds
// out of time on the very first play, press stop and play again (it's cached).

samples('github:christiandimitri/hypnotic-140-strudel')
setcpm(140/4) // 140 BPM, 1 cycle = 1 bar

// 0 = mute, 1 = as mixed in Live
const level = {
  drums: 1,  // kick, perc loop, hats, loop drum 9, Toru perc, percussion 6
  low: 1,    // LOW (TNR) rumble
  music: 1,  // dub chord, atmos x2, vox, 13-Audio FX, vocoder textures
  space: 1,  // reverb + delay returns
}
const master = 1.4 // overall volume (stems are pre-mastering)

// one 2-bar piece of a group; piece n starts at bar 2n+1
const piece = (g, n) => s('q_' + g + '_' + String(n).padStart(3, '0'))

// a section = the group's 2-bar pieces played back to back from its first bar
const section = (startBar, bars, groups) => [bars, stack(...groups.map(g =>
  cat(...Array.from({ length: bars / 2 }, (_, j) => piece(g, (startBar - 1) / 2 + j)))
    .slow(2).gain(level[g] * master)))]

// silent 4-bar count-in that downloads every piece, intro first
const load = (from, to) => s(Array.from({ length: to - from }, (_, j) =>
  ['drums', 'low', 'music', 'space'].map(g => 'q_' + g + '_' + String(from + j).padStart(3, '0')).join(' ')).join(' ')).gain(0)
const countIn = cat(load(0, 24), load(24, 48), load(48, 72), load(72, 96))

arrange(
  [4, countIn],                                                   // count-in: loading
  section(  1,  4, ['drums', 'low', 'music', 'space']),  // Intro
  section(  5,  4, ['drums', 'low', 'music', 'space']),  // Perc in
  section(  9,  8, ['drums', 'low', 'music', 'space']),  // Low + hats in
  section( 17,  6, ['drums', 'low', 'music', 'space']),  // Groove build
  section( 23,  2, ['drums', 'low', 'music', 'space']),  // Break 1 (synth intro)
  section( 25, 32, ['drums', 'low', 'music', 'space']),  // Main A
  section( 57, 16, ['drums', 'low', 'music', 'space']),  // Groove (DJ space)
  section( 73, 24, ['drums', 'low', 'music', 'space']),  // Main B (vocal)
  section( 97,  4, ['drums', 'music', 'space']),         // Break 2 (drone)
  section(101,  4, ['drums', 'music', 'space']),         // Build (riser)
  section(105,  8, ['drums', 'low', 'music', 'space']),  // Peak
  section(113, 32, ['drums', 'low', 'music', 'space']),  // Peak (full)
  section(145, 24, ['drums', 'low', 'music', 'space']),  // Wind down
  section(169,  4, ['drums', 'low', 'music', 'space']),  // Outro
  section(173, 16, ['drums', 'low', 'music', 'space']),  // Outro (DJ mix-out)
  section(189,  4, ['drums', 'low', 'music', 'space'])   // Kick only
)
