# Hypnotic 145 A min (YASYNTHA) in Strudel

This is a new track written directly in [Strudel](https://strudel.cc): 145 BPM, A minor, 224 bars (about 6:11). It's elegant, groovy hypnotic techno. Unlike *Hypnotic 140*, it isn't a playback of Ableton stems. Strudel plays the one-shots and loops live.

## Play it

Open [strudel.cc](https://strudel.cc), paste in `hypnotic-145-amin.strudel.js` and press play. It works on a phone or a laptop and downloads about 14 MB. The first play needs a few seconds to load. If the very start sounds late, stop and press play again, because everything is cached after the first load.

To mute or rebalance a part, edit the `mix` table at the top of the code. To move a part in the arrangement, edit its 11-digit lane string at the bottom (one digit per section, 1 = on).

## Sounds

- **Riemann – Fast Minimal Grooves 1.** All of its loops are already 145 BPM. The track uses the A-minor material: Kick 11 (tuned to A, 55 Hz), bass loops 4/5/8/12, synth loops 4/9/11, atmos 9/11, and the hat, top, ride, perc, noise and FX loops.
- **SoC Vocals:** "from the shadow of my mins", "im lost into sound", "lost inside" and "the dna".

Every sample was prepped with the same mastering approach as *Hypnotic 140*:
- 25–30 Hz low cut.
- Kick and bass summed to mono.
- Tops high-passed at 150–300 Hz, with a −1.5 dB shelf at 10 kHz on the hats so they stay silky.
- Loudness matched by role.
- Loops trimmed sample-exact to whole bars and stored as FLAC, so they loop without gaps.

## What the code does

- **Pump.** The kick ducks the bass orbit hard (depth 0.7) and the music orbit lightly (0.3). That's the "wouwou" after each kick.
- **Hats.** 16ths with accents and a light 56% swing. A high-pass filter opens and closes over 32 bars, and the hats drift slowly in the stereo field.
- **Perc.** Euclidean rhythms that change every bar (5/7/9 of 16), a 3-in-8 figure, and a 3-step line on the 16th grid that drifts against the bar (the dotted-8th polyrhythm). Everything goes through a 3/16 delay.
- **Music.** The synth filters move on slow sines (32–64 bars), so the loops never sit still.
- **Vocals.** One phrase every 8 bars, washed in reverb and delay.

| # | Bar | Section |
|---|-----|---------|
| 0 | 1 | Intro |
| 1 | 17 | Groove in (sub roll) |
| 2 | 33 | Build (clap, synth A) |
| 3 | 49 | Main A |
| 4 | 81 | Break 1 |
| 5 | 89 | Main B (groove bass, ride, synth B) |
| 6 | 121 | DJ groove |
| 7 | 137 | Break 2 |
| 8 | 145 | Peak (synth B + C) |
| 9 | 177 | Wind down |
| 10 | 193 | Outro (DJ mix-out) |

## Master

`hypnotic-145-amin.strudel.js` can't be mastered inside the browser. Instead, it was rendered offline from the same pattern events and run through the club chain:

1. −4 dB trim.
2. 25 Hz low cut.
3. −1.5 dB at 250 Hz and +2 dB air shelf at 8 kHz.
4. Glue compression at 2:1, keyed above 150 Hz so the sub doesn't pump the master.
5. Mono below 120 Hz.
6. Soft clip.
7. 4× oversampled limiter.

The result is **−8.1 LUFS and −1.2 dBTP**. The audio files aren't in this repo.
