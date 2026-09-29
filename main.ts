input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("5B")
    basic.showNumber(6)
    basic.showIcon(IconNames.Asleep)
    basic.showLeds(`
        # # . # #
        # . . # .
        # # . # #
        . # . # .
        # # . # #
        `)
    music.play(music.stringPlayable("F E D E F G A B ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
