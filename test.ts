// tests go here; this will not be compiled when this package is used as an extension.
////basic.showIcon(IconNames.Silly)
////basic.pause(100)
////basic.showIcon(IconNames.Meh)


// * Keep in mind that the micro:bit is 'updside-down' when using the LED 5x5 Matrix.
input.onButtonPressed(Button.A, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, -100, -100)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, -100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, -100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    roboQuest.rq_PrintString_Oled_Serial_Fn(
        "testJesus",
        0,
        0,
        1,
        false,
        false
    )
})
basic.showIcon(IconNames.SmallHeart)
roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Heart)
roboQuest.rq_ContinueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
basic.showIcon(IconNames.Happy)
roboQuest.rq_PrintString_Oled_Serial_Fn("", 0, 0, 0, false, false)