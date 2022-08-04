// * Keep in mind that the micro:bit is 'updside-down' when using the LED 5x5 Matrix.
input.onButtonPressed(Button.A, function () {
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, -100, -100)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 100, -100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, -100, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
    }
})
basic.showIcon(IconNames.SmallHeart)
roboQuest.continueCurrentState_CountdownTimer_Set(3, Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Heart)
roboQuest.continueCurrentState_CountdownTimer_Set(3000, Time_Units_Enum.Milliseconds)
basic.showIcon(IconNames.Happy)
