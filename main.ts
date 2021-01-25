let a = 0
basic.forever(function () {
    a = Math.abs(input.acceleration(Dimension.Z))
    if (a > 80) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        serial.writeLine("VARNING " + a)
        basic.pause(500)
    }
    led.plotBarGraph(
    a,
    0
    )
})
