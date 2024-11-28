input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Eu amo vocês mamães ")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Legal ")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # . # . #
        # . . . #
        `)
})
basic.showString("Olá ")
