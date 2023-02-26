/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NOTES ***
//
// * Naming Scheme
//   ** global_Variable_Etc
//   ** local_variable_etc
//   ** name_Space_Etc (since treated like an class/object, so like a 'global_Variable')
//
// * Functions Listed First_In (Here BackEnd): Listed Last_Out (There FrontEnd)
// * Move all test code from 'maint.blocks/.ts' to 'test.ts' for final publish
// * Quest will use namespace weight of 51 (50 bad) to 69 to below Standard Namespace 'LED' 
//   ** but above any 3rd Party Namespaces to avoid competinbg confusion
// * Proactive approach to Commenting:
//   ** With more upfront transperency w/ 3 note levels: gray, green, blue, 
//   ** less need for debugging/troubleshooting notes - thus 1 level: yellow
// * For full/complete upload to Github, press 'Github' button 
//   ** while in any file within JavaScript mode, not 'Blocks' mode
// * Note any edits is saved real-time since a cloud-editor, even before Github upload
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

enum turn_Duration_Small_Enum {
    //% block="020msec"
    msec_020,
    //% block="040msec"
    msec_040,
    //% block="060msec"
    msec_060,
    //% block="080msec"
    msec_080,
    //% block="100msec"
    msec_100,
}
enum turn_Duration_Big_Enum {
    //% block="01sec"
    sec_01,
    //% block="02sec"
    sec_02,
    //% block="03sec"
    sec_03,
    //% block="04sec"
    sec_04,
    //% block="05sec"
    sec_05,
}
enum turn_Type_Enum {
    //% block="Pivot(One Wheel Rotates While Other Not Rotates)"
    Pivot,
    //% block="Spin(Both Wheels Rotate in Opposite Direction)"
    Spin,
}
enum turn_Direction_Enum {
    //% block="right"
    right,
    //% block="left"
    left,
}
enum turn_Power_Enum {
    //% block="Lo(30%)"
    Lo,
    //% block="Mi(65%)"
    Mi,
    //% block="Hi(100%)"
    Hi,
}


// * Though it seems that can define global vars here, but not advised 
// ** since memory storage would be safer within 'namespace'
//
///y let deviceType_Bot_Bool = false
///y let deviceType_Controller_Bool = true


// * Go ahead and define here, since multiple 'namespaces'
//
// * Global Variables & Constants
//
// * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
//
let deviceType_Bot_Bool = true
let deviceType_Controller_Bool = false
//
let _debug_Serial_Print_Bool = false
//
let motor_Power_No = 0
let motor_Power_Lo = 30
let motor_Power_Mi = 65
let motor_Power_Hi = 100


///y //% weight=100 color=#0fbc11 icon=""
///y //% weight=100 color=#0000ff icon="\uf5b8"
///y //% weight=100 color=#0000ff icon="\uf005"
/// was 90
///n //% weight=99 color=#808080 icon=""
///y //% weight=99 color=#808080 icon="uf005"
/// 91


//
// Teal #008080 rgb(0, 128, 128)
// Green #008000 rgb(0, 128, 0)
//
/**
 * quest_Dashboard blocks
 */
//% weight=69 color=#008000 icon="Q"
namespace quest_Dashboard {
    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()
 
    /**
    * rq_Show_Oled_Cleared_Fn
    */
    //% block="show oled cleared"
    //% weight=53 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_Oled_Cleared_Fn() {
        OLED12864_I2C.clear()
    }
    /**
    * rq_Show_String_For_Oled_BigFont_Fn
    * @param textStrIn string
    * @param xColBase0In number
    * @param yRowBase0In number
    */
    //% block="show oled big_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In[0..11]: $xColBase0In|yRowBase0In[0..3]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=11
    //% yRowBase0In.min=0 yRowBase0In.max=3
    //% weight=52 blockGap=8
    //% inlineInputMode=external
    export function rq_Show_String_For_Oled_BigFont_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 12  // Char Max with Zoom:On

        let textStrInLen = textStrIn.length

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        // always setup 'zoom'_in appropriately
        OLED12864_I2C.zoom(true)

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
    }
    /**
     * rq_Show_String_For_Oled_SmallFont_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     */
    //% block="show oled small_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In[0..24]: $xColBase0In|yRowBase0In[0..7]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=24
    //% yRowBase0In.min=0 yRowBase0In.max=7
    //% weight=50 blockGap=8
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

        // always setup 'zoom'_in appropriately
        OLED12864_I2C.zoom(false)

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
    }

    /**
     * rq_Show_MotionDirection_Fn
     * @param motionDirectionIn rq_Motion_Direction_Enum
     */
    //% block="show motion_direction: $motionDirectionIn"
    //% weight=81 blockGap=8
    export function rq_Show_MotionDirection_Fn(motionDirectionIn: rq_Motion_Direction_Enum): void {
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
}


//
// Orange #ff7f00 rgb(255, 127, 0)
//
/**
 * quest_Timer blocks
 */
//% weight=67 color=#ff7f00 icon="Q"
namespace quest_Timer {
    /**
     * rq_Set_ContinueCurrentState_CountdownTimer_Fn
     * @param countdownTimer number
     * @param timeUnits rq_Time_Units_Enum
     */
    //% block="set current state to continue for: $countdownTimer $timeUnits"
    //% weight=70 blockGap=8
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function rq_Set_ContinueCurrentState_CountdownTimer_Fn(countdownTimer: number, timeUnits: rq_Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == rq_Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
        } else if (timeUnits == rq_Time_Units_Enum.Milliseconds) {
            countdownTimerNew = countdownTimer
            basic.pause(countdownTimerNew)
        }
    }
}


//
// color=#808080 = Gray: rgb(128, 128, 128)
// color=#3f3f3f = Dark Gray: rgb(63, 63, 63)
// ** to better differentiate vs. Silver Note
// * Gray like a 'black/gray box' which needs more transparency
//
/**
 * quest_Algorithm blocks
 */
//% weight=65 color=#3f3f3f icon="Q"
namespace quest_Algorithm {
    /**
    * rq_Get_Number_WithColumnPadding_AsStringOut_Fn
    * @param number_in number
    * @param string_len_max_in number
    * @param decimal_places_in number
    */
    //% block="get number with_column_padding as_string_out|number_in: $number_in|string_len_max_in: $string_len_max_in|decimal_places_in  $decimal_places_in"
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function rq_Get_Number_WithColumnPadding_AsStringOut_Fn(number_in: number, string_len_max_in: number, decimal_places_in: number = 0) {
        let local_number_with_fixed_decimal_deci = Math.round(number_in * 10 ** decimal_places_in) / 10 ** decimal_places_in

        let local_string_out = convertToText(local_number_with_fixed_decimal_deci)

        let local_loop_count_max = string_len_max_in - local_string_out.length

        for (let index = 0; index < local_loop_count_max; index++) {
            local_string_out = " " + local_string_out
        }
        return local_string_out
    }

}


//
//
// 1: Silver #C0C0C0 rgb(192, 192, 192)
// 2: Lime #00FF00 rgb(0, 255, 0)
// 3: Aqua #00FFFF rgb(0, 255, 255)
// 4L Yellow #FFFF00	rgb(255, 255, 0)
//
//

/**
 * quest_Note_1 blocks
 */
//% weight=59 color=#C0C0C0 icon="Q"
namespace quest_Note_1 {
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
 * quest_Note_2 blocks
 */
//% weight=58 color=#00FF00 icon="Q"
namespace quest_Note_2 {
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
 * quest_Note_3 blocks
 */
//% weight=57 color=#00FFFF icon="Q"
namespace quest_Note_3 {
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
 * quest_Note_4 blocks
 */
//% weight=56 color=#FFFF00 icon="Q"
namespace quest_Note_4 {
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
 * quest_Hardware blocks
 */
//% weight=51 color=#0000FF icon="Q"
namespace quest_Hardware {
    //
    // * Global Variables Q Constants
    //
    // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    //
    let deviceType_Bot_Bool = true
    let deviceType_Controller_Bool = false
    //
    let _debug_Serial_Print_Bool = false

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
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            default:
                if (_debug_Serial_Print_Bool) {
                    serial.writeLine("* ERROR: rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }
    }


    /**
     * rq_Set_Turn_Fn
     * @param portIdsIn rq_PortGroup_BlueRedBlack_PortIds_Enum
     * @param turnTypeIn rq_Turn_Type_Enum
     * @param turnTypeIn rq_Turn_Type_Enum
     * @param turnDurationIn rq_Turn_Duration_Small_Enum
     */
    //% block="set motors power: $portIdsIn|for left motor power: $powerLeftIn|right motor power: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function rq_Set_Turn_Fn(port_Ids_In: rq_PortGroup_BlueRedBlack_PortIds_Enum, turn_Type_In: turn_Type_Enum, turn_Direction_In: turn_Direction_Enum, turn_Power_In: turn_Power_Enum, turn_Duration_In: turn_Duration_Small_Enum): void {
        
        let motor_Power_L = 0
        let motor_Power_R = 0

        let turn_Duration = 0
        
        switch (turn_Type_In) {
            case turn_Type_Enum.Pivot:

                switch (turn_Direction_In){                   
                    case turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_No
                                motor_Power_R = motor_Power_Lo
                                break
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_No
                                motor_Power_R = motor_Power_Mi
                                break
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_No
                                motor_Power_R = motor_Power_Hi
                                break
                        }
                        quest_Dashboard.rq_Show_MotionDirection_Fn( rq_Motion_Direction_Enum.Left )
                        break

                    case turn_Direction_Enum.right:

                        switch (turn_Power_In){
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo
                                motor_Power_R = motor_Power_No
                                break
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi
                                motor_Power_R = motor_Power_No
                                break
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi
                                motor_Power_R = motor_Power_No
                                break
                        }
                        quest_Dashboard.rq_Show_MotionDirection_Fn(rq_Motion_Direction_Enum.Right)
                        break
                }

            case turn_Type_Enum.Spin: 

                switch (turn_Direction_In) {
                    case turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo * (-1)
                                motor_Power_R = motor_Power_Lo
                                break
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi * (-1)
                                motor_Power_R = motor_Power_Mi
                                break
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi * (-1)
                                motor_Power_R = motor_Power_Hi
                                break
                        }
                        quest_Dashboard.rq_Show_MotionDirection_Fn(rq_Motion_Direction_Enum.Left)
                        break

                    case turn_Direction_Enum.right:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo
                                motor_Power_R = motor_Power_Lo * (-1)
                                break
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi
                                motor_Power_R = motor_Power_Mi * (-1)
                                break
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi
                                motor_Power_R = motor_Power_Hi * (-1)
                                break
                        }
                        quest_Dashboard.rq_Show_MotionDirection_Fn(rq_Motion_Direction_Enum.Right)
                        break
                }
        }
    
        // Motor-Left Conversion: Same Rotational Direction
        motor_Power_L = Math.map(motor_Power_L, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        motor_Power_R = Math.map(motor_Power_R, -100, 100, 360, 0)

        switch (port_Ids_In) {
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                break
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                break
        }

        switch (turn_Duration_In) {
            case turn_Duration_Small_Enum.msec_020:
                turn_Duration = 20    
                break
            case turn_Duration_Small_Enum.msec_040:
                turn_Duration = 40
                break
            case turn_Duration_Small_Enum.msec_060:
                turn_Duration = 60
                break
            case turn_Duration_Small_Enum.msec_080:
                turn_Duration = 80
                break
            case turn_Duration_Small_Enum.msec_100:
                turn_Duration = 100
                break
        }

        quest_Hardware.rq_Set_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, motor_Power_L, motor_Power_R)
        quest_Timer.rq_Set_ContinueCurrentState_CountdownTimer_Fn(turn_Duration, rq_Time_Units_Enum.Milliseconds)
        
        quest_Hardware.rq_Set_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        quest_Timer.rq_Set_ContinueCurrentState_CountdownTimer_Fn(0, rq_Time_Units_Enum.Seconds)

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
}