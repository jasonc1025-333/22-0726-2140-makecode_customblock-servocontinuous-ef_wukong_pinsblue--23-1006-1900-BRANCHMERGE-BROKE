
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

enum PortGroup_BlueRedBlack__PortIds__Enum {
    //% block="S1_MotorLeft__S0_MotorRight"
    S1_MotorLeft__S0_MotorRight,
    //% block="S3_MotorLeft__S2_MotorRight"
    S3_MotorLeft__S2_MotorRight,
}

enum Time_Units_Enum {
    //% block="seconds"
    Seconds,
    //% block="milliseconds"
    Milliseconds,
}


/**
 * RoboQuest blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace roboQuest {
    
    // OLED12864_I2C: Initialize Address: 60
    OLED12864_I2C.init(60)
        
    /**
     * TODO: describe your function here
     * @param n1 describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n1: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
        * TODO: describe your function here
        * @param n2 describe parameter here, eg: 5
        * @param s2 describe parameter here, eg: "Hello"
        * @param e2 describe parameter here
        */
    //% block
    export function foo2(n2: number, s2: string, e2: MyEnum): void {
        // Add code here
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

    /**
     * powerMotorsViaBlueRedBlackPins
     * @param portIdsIn PortGroup_BlueRedBlack__PortIds__Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    //% block="power motors @ $portIdsIn for left motor power: $powerLeftIn right motor power: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    export function powerMotorsViaBlueRedBlackPins(portIdsIn: PortGroup_BlueRedBlack__PortIds__Enum, powerLeftIn: number, powerRightIn: number): void {
        // Motor-Left Conversion: Same Rotational Direction
        let powerLeftNew = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let powerRightNew = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, powerRightNew)
                serial.writeLine("* powerMotorsViaBlueRedBlackPins: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                break
            case PortGroup_BlueRedBlack__PortIds__Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, powerRightNew)
                serial.writeLine("* powerMotorsViaBlueRedBlackPins: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                break
            default:
                serial.writeLine("* ERROR: powerMotorsViaBlueRedBlackPins: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                break
        }

    }

    /**
     * continueCurrentState_CountdownTimer_Set
     * @param countdownTimer number
     * @param timeUnits Time_Units_Enum
     */
    //% block="continue current state for: $countdownTimer $timeUnits"
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function continueCurrentState_CountdownTimer_Set(countdownTimer: number, timeUnits: Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
            serial.writeLine("* continueCurrentState_CountdownTimer_Set: " + countdownTimer + " " + countdownTimerNew)
        } else if (timeUnits == Time_Units_Enum.Milliseconds) {
            countdownTimerNew = countdownTimer
            basic.pause(countdownTimerNew)
            serial.writeLine("* continueCurrentState_CountdownTimer_Set: " + countdownTimer + " " + countdownTimerNew)
        } else {
            serial.writeLine("* ERROR: continueCurrentState_CountdownTimer_Set: " + countdownTimer + " " + countdownTimerNew)
        }
    }

    // export  forward
    // export reverse
    // export stop

    /**
     * rq_PrintString_Oled_Serial_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     * @param colorIntIn number
     * @param borderTopBoolIn boolean
     * @param borderBottomBoolIn boolean
     */
    //% block="print OLED & Serial  textStrIn: $textStrIn xColBase0In: $xColBase0In yRowBase0In: $yRowBase0In colorIntIn: $colorIntIn borderTopBoolIn: $borderTopBoolIn borderBottomBoolIn: $borderBottomBoolIn"
    //% xColBase0In.min=0 xColBase0In.max=4
    //% yRowBase0In.min=0 yRowBase0In.max=4
    //% colorIntIn=1
    export function rq_PrintString_Oled_Serial_Fn (textStrIn: string, xColBase0In: number, yRowBase0In: number, colorIntIn: number, borderTopBoolIn: boolean, borderBottomBoolIn: boolean) {
        OLED12864_I2C.showString(
        xColBase0In,
        yRowBase0In,
        textStrIn,
        colorIntIn
        )
        if (borderTopBoolIn) {
            serial.writeLine("")
        }
        serial.writeString(textStrIn)
        serial.writeString(",")
        if (borderBottomBoolIn) {
            serial.writeLine("")
        }
    }
    
}
