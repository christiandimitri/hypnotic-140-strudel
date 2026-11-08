# Hypnotic 140 F min (YASYNTHA) in Strudel

This repo rebuilds the Ableton arrangement of *Hypnotic 140 F min* (140 BPM, F minor, 192 bars) as live code in [Strudel](https://strudel.cc).

The audio isn't synthesized. Each track was exported from Ableton Live with its own plugin chain (Decapitator, Portal, Timeless, EQ, and the reverb and delay returns). Each export was then cut at the 16 section locators, and Strudel plays those cuts back in the arrangement.

## Play it

- **Phone:** use `hypnotic-140-fmin-phone.strudel.js`. It merges the 16 stems into 4 groups (drums, low, music, space) so it fits in a phone browser's memory. It downloads about 21 MB.
- **Laptop:** use `hypnotic-140-fmin.strudel.js`, with all 16 tracks separate. It downloads about 62 MB.


Open [strudel.cc](https://strudel.cc), paste in `hypnotic-140-fmin.strudel.js` and press play. The first play needs a few seconds to download the audio. If the start sounds out of sync, stop and press play again, because everything is cached after the first load.

To mute or rebalance a track, edit the `level` table at the top of the code. `1` is the level as mixed in Live and `0` mutes the track.

## Contents

- `samples-phone/<group>/<section>.mp3`: the 4-group cuts used by the phone version.
- `samples/<track>/<section>.mp3`: one cut per track per section, MP3 at 128 kbps. Silent sections were left out.
- `strudel.json`: the sample map that Strudel loads with `samples('github:christiandimitri/hypnotic-140-strudel')`.
- `hypnotic-140-fmin.strudel.js`: the arrangement.

| # | Bar | Section |
|---|-----|---------|
| 0 | 1 | Intro |
| 1 | 5 | Perc in |
| 2 | 9 | Low + hats in |
| 3 | 17 | Groove build |
| 4 | 23 | Break 1 (synth intro) |
| 5 | 25 | Main A |
| 6 | 57 | Groove (DJ space) |
| 7 | 73 | Main B (vocal) |
| 8 | 97 | Break 2 (drone) |
| 9 | 101 | Build (riser) |
| 10 | 105 | Peak |
| 11 | 113 | Peak (full) |
| 12 | 145 | Wind down |
| 13 | 169 | Outro |
| 14 | 173 | Outro (DJ mix-out) |
| 15 | 189 | Kick only |

The stems come from before the master chain, so the Ozone mastering isn't included. This version plays quieter than the released master.
