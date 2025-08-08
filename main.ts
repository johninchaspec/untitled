basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    if (led.point(0, 0) == true) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        led.unplot(0, 0)
        radio.sendNumber(0)
    }
})
