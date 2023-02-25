/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NEWS ***
//
// * Functions Listed First_In (Here BackEnd): Listed Last_Out (There FrontEnd)
// * Move all test code from 'maint.blocks/.ts' to 'test.ts' for final publish
//

// enum MyEnum {
//    //% block="one"
//    One,
//    //% block="two"
//    Two
// }

enum rq_PortGroup_BlueRedBlack_PortIds_Enum {
    //% block="S1_MotorLeft__S0_MotorRight"
    S1_MotorLeft__S0_MotorRight,
    //% block="S3_MotorLeft__S2_MotorRight"
    S3_MotorLeft__S2_MotorRight,
}

enum rq_Time_Units_Enum {
    //% block="seconds"
    Seconds,
    //% block="milliseconds"
    Milliseconds,
}

enum rq_Motion_Direction_Enum {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward,
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Stop"
    Stop,
}

// * Though it seems that can define global vars here, but not advised 
// ** since memory storage would be safer within 'namespace'
//
///y let deviceType_Bot_Bool = false
///y let deviceType_Controller_Bool = true

///y //% weight=100 color=#0fbc11 icon=""
///y //% weight=100 color=#0000ff icon="\uf5b8"
///y //% weight=100 color=#0000ff icon="\uf005"
/// was 90


///n //% weight=99 color=#808080 icon=""
///y //% weight=99 color=#808080 icon="uf005"
/// 91

// color=#808080 = Gray: rgb(128, 128, 128)
/// Teal #008080 rgb(0, 128, 128)
//
/**
 * Quest_Basic blocks
 */
//% weight=84 color=#008080 icon="Q"
namespace quest_Basic {

    //
    // * Global Variables & Constants
    //
    // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    //
    let deviceType_Bot_Bool = true
    let deviceType_Controller_Bool = false
    //
    let _debug_Serial_Print_Bool = false

    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()


    /**
     * rq_Set_ContinueCurrentState_CountdownTimer_Fn
     * @param countdownTimer number
     * @param timeUnits rq_Time_Units_Enum
     */
    //% block="set continue current state for: $countdownTimer $timeUnits"
    //% weight=70 blockGap=8
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function rq_Set_ContinueCurrentState_CountdownTimer_Fn(countdownTimer: number, timeUnits: rq_Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == rq_Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
            if (_debug_Serial_Print_Bool) {
                serial.writeLine("* rq_continueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
            }
        } else if (timeUnits == rq_Time_Units_Enum.Milliseconds) {
            countdownTimerNew = countdownTimer
            basic.pause(countdownTimerNew)
            if (_debug_Serial_Print_Bool) {
                serial.writeLine("* rq_ContinueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
            }
        } else {
            if (_debug_Serial_Print_Bool) {
                serial.writeLine("* ERROR:rq_continueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
            }
        }
    }


    /**
    * rq_ShowString_For_Oled_BigFont_Fn
    * @param textStrIn string
    * @param xColBase0In number
    * @param yRowBase0In number
    */
    //% block="show oled big_font (AutoSetup I2cAddress=60, 12ColMax, 4RowMax ~ SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In: $xColBase0In|yRowBase0In: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=12
    //% yRowBase0In.min=0 yRowBase0In.max=4
    //% weight=62 blockGap=8
    //% inlineInputMode=external
    export function rq_ShowString_For_Oled_BigFont_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {

        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 12  // Char Max with Zoom:Off

        let textStrInLen = textStrIn.length

        // Override Manually
        OLED12864_I2C.zoom(true)

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )

        // Restore Default
        OLED12864_I2C.zoom(false)

    }

    /**
     * rq_Show_String_For_Oled_SmallFont_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     */
    //% block="show oled small_font (AutoSetup I2cAddress=60, 25ColMax, 8RowMax ~ SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In: $xColBase0In|yRowBase0In: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=24
    //% yRowBase0In.min=0 yRowBase0In.max=6
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Oled_SmallFont_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {

        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 25  // Char Max with Zoom:Off

        let textStrInLen = textStrIn.length

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )

    }

    /**
     * rq_Show_String_For_Oled_SmallFont_02_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     */
    //% block="show oled small_font 02 (AutoSetup I2cAddress=60, 25ColMax, 8RowMax ~ SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In: $xColBase0In|yRowBase0In: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=24
    //% yRowBase0In.min=0 yRowBase0In.max=6
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Oled_SmallFont_02_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {

        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 25  // Char Max with Zoom:Off

        let textStrInLen = textStrIn.length

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
    }

}


///n //% weight=99 color=#808080 icon=""
///y //% weight=99 color=#808080 icon="uf005"
/// 91

// color=#808080 = Gray: rgb(128, 128, 128)
/// Aqua #00FFFF rgb(0, 255, 255)
//
/**
 * quest_Note blocks
 */
//% weight=82 color=#00FFFF icon="Q"
namespace quest_Note {

    //
    // * Global Variables & Constants
    //
    // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    //
    let deviceType_Bot_Bool = true
    let deviceType_Controller_Bool = false
    //
    let _debug_Serial_Print_Bool = false

    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()

    /**
     * rq_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    //% block="note small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Note_Small_Fn(textStrIn: string) {

    }

    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * rq_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    //% block=" |note big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Note_Big_Fn(textStrIn: string) {

    }

}


/**
 * Quest_Robo blocks
 */
//% weight=80 color=#0000ff icon="Q"
namespace quest_Robo {


    //
    // * Global Variables & Constants
    //
    // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    //
    let deviceType_Bot_Bool = true
    let deviceType_Controller_Bool = false
    //
    let _debug_Serial_Print_Bool = false

    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    // Default: Small Font, Override Manually to Big Font as needed
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()


    /**
     * rq_Set_PowerMotorsViaBlueRedBlackPins_Fn
     * @param portIdsIn rq_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    //% block="set motors power: $portIdsIn|for left motor power: $powerLeftIn|right motor power: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function rq_Set_PowerMotorsViaBlueRedBlackPins_Fn(portIdsIn: rq_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number): void {
        // Motor-Left Conversion: Same Rotational Direction
        let powerLeftNew = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let powerRightNew = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, powerRightNew)
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                }
                break
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, powerRightNew)
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                }
                break
            default:
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* ERROR: rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                }
                break
        }
    }

    /**
     * rq_show_MotionDirection_Fn
     * @param motionDirectionIn rq_Motion_Direction_Enum
     */
    //% block="show motion_direction: $motionDirectionIn"
    //% weight=81 blockGap=8
    export function rq_show_MotionDirection_Fn(motionDirectionIn: rq_Motion_Direction_Enum): void {

        switch (motionDirectionIn) {
            // * if on 'bot', then 5x5LED is upside-down - so Yes_Flip graphics
            // * if on 'controller', then 5x5 is rightside-up - so No_Flip graphics
            //
            case rq_Motion_Direction_Enum.Forward:  
                if (deviceType_Bot_Bool) {
                    led.plot(2, 4)
                    /*basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool) {
                    led.plot(2, 0)                 
                    /*basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "^",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Backward:
                if (deviceType_Bot_Bool) {
                    led.plot(2, 0)
                    /*basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool) {
                    led.plot(2, 4)
                    /*basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "v",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Left:
                if (deviceType_Bot_Bool) {
                    led.plot(4, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool) {
                    led.plot(0, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "<",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Right:
                if (deviceType_Bot_Bool) {
                    led.plot(0, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool) {
                    led.plot(4, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    ">",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Stop:
                led.plot(2, 2)
                /*basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                */
                OLED12864_I2C.showString(
                    0,
                    0,
                    ".",
                    1
                )
                break
            default:
                basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
                OLED12864_I2C.showString(
                    0,
                    0,
                    "?",
                    1
                )
                break
        }
    }

    /**
     * set_Settings_Fn
     * @param deviceTypeBotBoolIn boolean
     * @param deviceTypeControllerBoolIn boolean
     */
    //% block="set settings: 'deviceType_Bot_Bool': $deviceTypeBotBoolIn|'deviceType_Controller_Bool': $deviceTypeControllerBoolIn"
    //% weight=100 blockGap=8
    //% inlineInputMode=external
    export function set_Settings_Fn(deviceTypeBotBoolIn: boolean, deviceTypeControllerBoolIn: boolean): void {

        deviceType_Bot_Bool = deviceTypeBotBoolIn
        deviceType_Controller_Bool = deviceTypeControllerBoolIn

        OLED12864_I2C.showString(
            0,
            1,
            "B:" + convertToText(deviceType_Bot_Bool) + ", C:" + convertToText(deviceType_Controller_Bool),
            1
        )

    }

    // OBSOLETE BUT ARCHIVE FOR REFERENCE
    // OBSOLETE BUT ARCHIVE FOR REFERENCE
    // OBSOLETE BUT ARCHIVE FOR REFERENCE
    //
    /**
     * rq_Show_String_For_Oled_And_Serial_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     * @param colorIntIn number; eg: 1
     * @param borderTopBoolIn boolean
     * @param borderBottomBoolIn boolean
     * ; eg: 150, 100, 200, -100
    */
    //% block="show oled & serial|textStrIn: $textStrIn|xColBase0In: $xColBase0In|yRowBase0In: $yRowBase0In|colorIntIn: $colorIntIn|borderTopBoolIn: $borderTopBoolIn|borderBottomBoolIn: $borderBottomBoolIn"
    //% xColBase0In.min=0 xColBase0In.max=4
    //% yRowBase0In.min=0 yRowBase0In.max=4
    //% weight=40 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Oled_And_Serial_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number, colorIntIn: number = 1, borderTopBoolIn: boolean, borderBottomBoolIn: boolean) {
        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
        if (_debug_Serial_Print_Bool) {
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
}