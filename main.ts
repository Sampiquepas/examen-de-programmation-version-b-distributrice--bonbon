let IR = 0
servos.P0.setRange(10, 170)
servos.P0.setAngle(150)
basic.forever(function () {
    IR = pins.digitalReadPin(DigitalPin.P16)
    if (IR == 1) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    } else if (IR == 0) {
        servos.P0.setAngle(150)
    }
})
