/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NOTES ***
//
// * Naming Scheme
//   ** global_Variable_Etc_Quest_Global
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
// * TYJ 1 sec spin ~ 45 deg, 2 sec spin ~ 90 deg, 2 sec spin ~ 180, 4 sec spin ~ 360, thus sufficient to max 5 sec spin
// * x2 '//' = '////jwc y' is better comment-out than standard x3 '//////jwc y', since latter too long to add and delete
// * Successive two '_' special formatting to italics, so use '\\_' to deactivate special character processing
// * To force Front_End UX to update from Back_End Code, good to use Browser_Refresh and will not lose Back_End Code 
//   (even though not 'github-ed' yet) 
// * Colors
//   ** http://www.baskent.edu.tr/~tkaracay/etudio/agora/nnn/html_colors.htm#:~:text=aqua%2C%20black%2C%20blue%2C%20fuchsia,for%20the%20same%20color%20name.
//   ** https://www.rapidtables.com/web/color/RGB_Color.html
//   ** https://www.indezine.com/products/powerpoint/learn/color/color-rgb.html


// enum MyEnum {
//    //% block="one"
//    One,
//    //% block="two"
//    Two
// }

enum quest_PortGroup_BlueRedBlack_PortIds_Enum {
    //% block="S1_MotorLeft__S0_MotorRight"
    S1_MotorLeft__S0_MotorRight,
    //% block="S3_MotorLeft__S2_MotorRight"
    S3_MotorLeft__S2_MotorRight,
}

enum quest_Time_Units_Enum {
    //% block="seconds"
    Seconds,
    //% block="milliseconds"
    Milliseconds,
}

enum quest_Motion_Direction_Enum {
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

enum turn_Duration_Enum {
    //% block="20 msec"
    msec_20,
    //% block="40 msec"
    msec_40,
    //% block="60 msec"
    msec_60,
    //% block="80 msec"
    msec_80,
    //% block="100 msec"
    msec_100,
    //% block="200 msec"
    msec_200,
    //% block="400 msec"
    msec_400,
    //% block="600 msec"
    msec_600,
    //% block="800 msec"
    msec_800,
    //% block="1000 msec(1 sec)"
    msec_1000,
    //% block="2000 msec(2 sec)"
    msec_2000,
    //% block="3000 msec(3 sec)"
    msec_3000,
    //% block="4000 msec(4 sec)"
    msec_4000,
    //% block="5000 msec(5 sec)"
    msec_5000,
}

////jwc yy ////jwc y // 'Spin' as default since is more bi-directional (left and right capable)
////jwc yy // 'Pivot' as default since is slower for more accurate turns
////jwc yy enum turn_Type_03_Enum {
////jwc yy     //% block="Pivot(One Wheel Rotates While Other Wheel Rotates_Not)"
////jwc yy     Pivot,
////jwc yy     //% block="Spin(Both Wheels Rotate in Opposite Directions)"
////jwc yy     Spin,
////jwc yy }
////jwc y // 'Spin' as default since is more bi-directional (left and right capable)
// 'Pivot' as default since is slower for more accurate turns
enum turn_Type_Enum {
    //% block="Pivot(One Wheel Rotates While Other Wheel Rotates_Not)"
    Pivot,
    //% block="Spin(Both Wheels Rotate in Opposite Directions)"
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
///y let deviceType_Bot_Bool_QuestGlobal = false
///y let deviceType_Controller_Bool_QuestGlobal = true
// * Go ahead and define here, since multiple 'namespaces'
//
// * Global Variables & Constants
//
// * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller: Autonomous)
//
//////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': let deviceType_Bot_Bool = true
//////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': let deviceType_Controller_Bool = false
let deviceType_Bot_Bool_QuestGlobal = true
let deviceType_Controller_Bool_QuestGlobal = false
//
let _debug_Serial_Print_Bool_QuestGlobal = false
//
let motor_Power_No_QuestGlobal = 0
let motor_Power_Lo_QuestGlobal = 30
let motor_Power_Mi_QuestGlobal = 65
let motor_Power_Hi_QuestGlobal = 100

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
// Brown #7f3f00 rgb(127, 63, 0)
//
/**
 * quest_Dashboard blocks
 */
//% weight=65 color=#7f3f00 icon="Q"
namespace quest_Dashboard {
    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()
 
    /**
    * quest_Show_Oled_Cleared_Fn
    */
    //% block="show oled cleared"
    //% weight=53 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Oled_Cleared_Fn() {
        OLED12864_I2C.clear()
    }
    /**
    * quest_Show_String_For_Oled_BigFont_Fn
    * @param textStrIn string
    * @param xColBase0In number
    * @param yRowBase0In number
    */
    ////jwc y //% block="show oled big_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In[0..11]: $xColBase0In|yRowBase0In[0..3]: $yRowBase0In"
    //% '\\' escape character to deactivate special character processing
    //% block="show oled big_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|text\\_Str\\_In: $textStrIn|x\\_Col\\_Base0\\_In[0..11]: $xColBase0In|y\\_Row\\_Base0\\_In[0..3]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=11
    //% yRowBase0In.min=0 yRowBase0In.max=3
    //% weight=52 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Oled_BigFont_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
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
     * quest_Show_String_For_Oled_SmallFont_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     */
    //% '\\' escape character to deactivate special character processing
    //% block="show oled small_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|text\\_Str\\_In: $textStrIn|x\\_Col\\_Base0\\_In[0..24]: $xColBase0In|y\\_Row\\_Base0\\_In[0..7]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=24
    //% yRowBase0In.min=0 yRowBase0In.max=7
    //% weight=50 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Oled_SmallFont_Fn(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
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
}

//////jwc y //% weight=67 color=#ff7f00 icon="Q"
//////jwc y //% weight=56 color=#7f7f00 icon="Q"
//////jwc y brown: //% weight=67 color=#7f3f00 icon="Q"
//
// Orange #ff7f00 rgb(255, 127, 0)
//
/**
 * quest_Timer blocks
 */
//% weight=67 color=#7f7f00 icon="Q"
namespace quest_Timer {
    /**
     * quest_Set_ContinueCurrentState_CountdownTimer_Fn
     * @param countdownTimer number
     * @param timeUnits quest_Time_Units_Enum
     */
    //% block="set current_state to continue for: $countdownTimer $timeUnits"
    //% weight=70 blockGap=8
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function quest_Set_ContinueCurrentState_CountdownTimer_Fn(countdownTimer: number, timeUnits: quest_Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == quest_Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
        } else if (timeUnits == quest_Time_Units_Enum.Milliseconds) {
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
 * quest_General blocks
 */
//% weight=63 color=#3f3f3f icon="Q"
namespace quest_General {
    /**
    * quest_Get_Number_WithColumnPadding_AsStringOut_Fn
    * @param number_in number
    * @param string_len_max_in number
    * @param decimal_places_in number
    */
    ////jwc m //% block="get number with_column_padding as_string_out|number_in: $number_in|string_len_max_in: $string_len_max_in|decimal_places_in  $decimal_places_in"
    // '\\' escape character to deactivate special character processing
    //% block="get number w/ column\\_padding as string\\_out|number_in: $number_in|string\\_len\\_max\\_in: $string_len_max_in|decimal\\_places\\_in  $decimal_places_in"
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_Number_WithColumnPadding_AsStringOut_Fn(number_in: number, string_len_max_in: number, decimal_places_in: number = 0) {
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
// 4: Yellow #FFFF00 rgb(255, 255, 0)
// 5: Red #FF0000 rgb(255,0,0)
//
//

/**
 * quest_Note_1 blocks
 */
//% weight=55 color=#C0C0C0 icon="Q"
namespace quest_Note_1 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Fn(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Fn(textStrIn: string) {
    }
}

/**
 * quest_Note_2 blocks
 */
//% weight=54 color=#00FF00 icon="Q"
namespace quest_Note_2 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Fn(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Fn(textStrIn: string) {
    }
}

/**
 * quest_Note_3 blocks
 */
//% weight=53 color=#00FFFF icon="Q"
namespace quest_Note_3 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Fn(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Fn(textStrIn: string) {
    }
}

//////jwc y //% weight=56 color=#FFFF00 icon="Q"
//////jwc y //% weight=56 color=#7F7F00 icon="Q"
/**
 * quest_Note_4 blocks
 */
//% weight=52 color=#ffff00 icon="Q"
namespace quest_Note_4 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Fn(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Fn(textStrIn: string) {
    }
}

//////jwc y //% weight=55 color=#FF0000 icon="Q"
/**
 * quest_Note_5 blocks
 */
///jwc n below Quest_Note_1 //% weight=55 color=#ff7f00 icon="Q"
///jwc y //% weight=51 color=#ff7f00 icon="Q"
///jwc y //% weight=51 below Note_4 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=49 color=#ff7f00 icon="Q"
///jwc n same //% weight=45 color=#ff7f00 icon="Q"
///jwc n below 'wuKong' //% weight=40 color=#ff7f00 icon="Q"
///jwc below oled //% weight=20 c'olor=#ff7f00 icon="Q"
///jwc //% weight=50.5 color=#ff7f00 icon="Q"
// jwc 21,22,30,40,45,50, 50.5: below 'wuKong'
// jwc 51 below 'Quest_Note_4'
//% weight=51 color=#ff7f00 icon="Q"
namespace quest_Note_5 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Fn(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Fn(textStrIn: string) {
    }
}

////jwc y //% weight=51 color=#7f7fff icon="Q"
// dark blue #0000ff TOO DARK, CANNOT SEE BLACK BOUNDARY LINES
// light blue rgb(127, 190, 255) #7fbeff TOO LIGHT
// less_light blue rgb(0, 127, 255) ##007fff to dark that matches other groups
// rgb(127,127,255)  #7f7fff Good Purple to not drown out blue_borderlines
// rgb(191,191,255)  #bfbfff Good Purple to not drown out blue_borderlines
// * not too dark since would cover thin-black-boundaries
/**
 * quest_Motors blocks
 */
//% weight=69 color=#7f7fff icon="Q"
namespace quest_Motors {
    /// //
    /// // * Global Variables Q Constants
    /// //
    /// // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    /// //
    /// let deviceType_Bot_Bool_QuestGlobal = true
    /// let deviceType_Controller_Bool_QuestGlobal = false
    /// //
    /// let _debug_Serial_Print_Bool_QuestGlobal = false

    ////jwc y export function quest_Show_MotionDirection_Fn(motionDirectionIn: quest_Motion_Direction_Enum): void {
    ////jwc no longer an external block: /**
    ////jwc no longer an external block:  * quest_Show_MotionDirection_Fn
    ////jwc no longer an external block:  * @param motionDirectionIn quest_Motion_Direction_Enum
    ////jwc no longer an external block:  */
    ////jwc no longer an external block: //% block="show motion_direction: $motionDirectionIn"
    ////jwc no longer an external block: //% weight=81 blockGap=8
    function quest_Show_MotionDirection_Fn(motionDirectionIn: quest_Motion_Direction_Enum): void {
        switch (motionDirectionIn) {
            // * if on 'bot', then 5x5LED is upside-down - so Yes_Flip graphics
            // * if on 'controller', then 5x5 is rightside-up - so No_Flip graphics
            //
            case quest_Motion_Direction_Enum.Forward:
                if (deviceType_Bot_Bool_QuestGlobal) {
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
                else if (deviceType_Controller_Bool_QuestGlobal) {
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
            case quest_Motion_Direction_Enum.Backward:
                if (deviceType_Bot_Bool_QuestGlobal) {
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
                else if (deviceType_Controller_Bool_QuestGlobal) {
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
            case quest_Motion_Direction_Enum.Left:
                if (deviceType_Bot_Bool_QuestGlobal) {
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
                else if (deviceType_Controller_Bool_QuestGlobal) {
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
            case quest_Motion_Direction_Enum.Right:
                if (deviceType_Bot_Bool_QuestGlobal) {
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
                else if (deviceType_Controller_Bool_QuestGlobal) {
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
            case quest_Motion_Direction_Enum.Stop:
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
     * quest_Set_PowerMotorsViaBlueRedBlackPins_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    ////jwc yy //% block="set manual:servo_motors:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn"
    // '\\' = escape character to deactivate following special character
    //% block="set manual\\_servo\\_motors:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number): void {

        // Motor-Left Conversion: Same Rotational Direction
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }
    }

    /**
     * quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     * @param turn_Duration_In turn_Duration_Enum
     */
    ////jwc o //% block="set servo_motors w/ timer: $portIdsIn|@ left motor power: $powerLeftIn|@ right motor power: $powerRightIn|turn_Duration_In $turn_Duration_In"
    ////jwc y //% block="set servo_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc //% block="set manual'_servo\\_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    // '\\' = escape character to deactivate following special character
    //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=78 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number, turn_Duration_In: turn_Duration_Enum): void {

        basic.showIcon(IconNames.SmallHeart)

        // Motor-Left Conversion: Same Rotational Direction
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        let turn_Duration = 0

        switch (turn_Duration_In) {
            case turn_Duration_Enum.msec_20:
                turn_Duration = 20
                break  // out of these case statements
            case turn_Duration_Enum.msec_40:
                turn_Duration = 40
                break  // out of these case statements
            case turn_Duration_Enum.msec_60:
                turn_Duration = 60
                break  // out of these case statements
            case turn_Duration_Enum.msec_80:
                turn_Duration = 80
                break  // out of these case statements
            case turn_Duration_Enum.msec_100:
                turn_Duration = 100
                break  // out of these case statements
            case turn_Duration_Enum.msec_200:
                turn_Duration = 200
                break  // out of these case statements
            case turn_Duration_Enum.msec_400:
                turn_Duration = 400
                break  // out of these case statements
            case turn_Duration_Enum.msec_600:
                turn_Duration = 600
                break  // out of these case statements
            case turn_Duration_Enum.msec_800:
                turn_Duration = 800
                break  // out of these case statements
            case turn_Duration_Enum.msec_1000:
                turn_Duration = 1000
                break  // out of these case statements
            case turn_Duration_Enum.msec_2000:
                turn_Duration = 2000
                break  // out of these case statements
            case turn_Duration_Enum.msec_3000:
                turn_Duration = 3000
                break  // out of these case statements
            case turn_Duration_Enum.msec_4000:
                turn_Duration = 4000
                break  // out of these case statements
            case turn_Duration_Enum.msec_5000:
                turn_Duration = 5000
                break  // out of these case statements
        }

        switch (portIdsIn) {
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }

        // diagnostics
        quest_Dashboard.quest_Show_Oled_Cleared_Fn
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Fn(convertToText(motor_Power_L) + " " + convertToText(motor_Power_R) + " " + convertToText(turn_Duration), 0, 0)

        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(turn_Duration, quest_Time_Units_Enum.Milliseconds)

        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(portIdsIn, 0, 0)

        // diagnostics
        basic.showIcon(IconNames.Heart)
    }

    /**
    * quest_Set_Turn_WithTimer_Fn
    * @param port_Ids_In quest_PortGroup_BlueRedBlack_PortIds_Enum
    * @param turn_Type_In turn_Type_Enum
    * @param turn_Direction_In turn_Direction_Enum
    * @param turn_Power_In turn_Power_Enum
    * @param turn_Duration_In turn_Duration_Enum
    */
    //% block="set auto_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In"
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_Turn_WithTimer_Fn(port_Ids_In: quest_PortGroup_BlueRedBlack_PortIds_Enum, turn_Type_In: turn_Type_Enum, turn_Direction_In: turn_Direction_Enum, turn_Power_In: turn_Power_Enum, turn_Duration_In: turn_Duration_Enum): void {

        basic.showIcon(IconNames.SmallHeart)

        let motor_Power_L = 0
        let motor_Power_R = 0

        let turn_Duration = 0

        switch (turn_Type_In) {
            //////jwc y case turn_Type_Enum.Pivot:
            ////jwc n case turn_Type_02_Enum.Pivot:
            case turn_Type_Enum.Pivot:

                switch (turn_Direction_In) {
                    case turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Lo_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Mi_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Hi_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        //////jwc n this.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        break  // out of these case statements

                    case turn_Direction_Enum.right:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        //////jwc n this.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        break  // out of these case statements
                }
                break  // out of these case statements

            ////jwc y TODO case turn_Type_Enum.Spin:
            ////jwc n case turn_Type_02_Enum.Spin:
            case turn_Type_Enum.Spin:


                switch (turn_Direction_In) {
                    case turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Lo_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Mi_QuestGlobal
                                break  // out of these case statements
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Hi_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        //////jwc n this.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Left)
                        break  // out of these case statements

                    case turn_Direction_Enum.right:

                        switch (turn_Power_In) {
                            case turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal
                                motor_Power_R = motor_Power_Lo_QuestGlobal * (-1)
                                break  // out of these case statements
                            case turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal
                                motor_Power_R = motor_Power_Mi_QuestGlobal * (-1)
                                break  // out of these case statements
                            case turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal
                                motor_Power_R = motor_Power_Hi_QuestGlobal * (-1)
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        //////jwc n this.quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        quest_Show_MotionDirection_Fn(quest_Motion_Direction_Enum.Right)
                        break  // out of these case statements
                }
                break  // out of these case statements
        }

        switch (turn_Duration_In) {
            case turn_Duration_Enum.msec_20:
                turn_Duration = 20
                break  // out of these case statements
            case turn_Duration_Enum.msec_40:
                turn_Duration = 40
                break  // out of these case statements
            case turn_Duration_Enum.msec_60:
                turn_Duration = 60
                break  // out of these case statements
            case turn_Duration_Enum.msec_80:
                turn_Duration = 80
                break  // out of these case statements
            case turn_Duration_Enum.msec_100:
                turn_Duration = 100
                break  // out of these case statements
            case turn_Duration_Enum.msec_200:
                turn_Duration = 200
                break  // out of these case statements
            case turn_Duration_Enum.msec_400:
                turn_Duration = 400
                break  // out of these case statements
            case turn_Duration_Enum.msec_600:
                turn_Duration = 600
                break  // out of these case statements
            case turn_Duration_Enum.msec_800:
                turn_Duration = 800
                break  // out of these case statements
            case turn_Duration_Enum.msec_1000:
                turn_Duration = 1000
                break  // out of these case statements
            case turn_Duration_Enum.msec_2000:
                turn_Duration = 2000
                break  // out of these case statements
            case turn_Duration_Enum.msec_3000:
                turn_Duration = 3000
                break  // out of these case statements
            case turn_Duration_Enum.msec_4000:
                turn_Duration = 4000
                break  // out of these case statements
            case turn_Duration_Enum.msec_5000:
                turn_Duration = 5000
                break  // out of these case statements
        }

        // diagnostics
        quest_Dashboard.quest_Show_Oled_Cleared_Fn
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Fn(convertToText(motor_Power_L) + " " + convertToText(motor_Power_R) + " " + convertToText(turn_Duration), 0, 0)

        // turn
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(port_Ids_In, motor_Power_L, motor_Power_R)

        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(turn_Duration, quest_Time_Units_Enum.Milliseconds)

        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(port_Ids_In, 0, 0)

        // diagnostics
        basic.showIcon(IconNames.Heart)
    }

    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': /**
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * set_Settings_Fn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * @param deviceTypeBotBoolIn boolean
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * @param deviceTypeControllerBoolIn boolean
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  */
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% block="set settings(required in 'on start' stack):|* 'deviceType_Bot_Bool': $deviceTypeBotBoolIn|'deviceType_Controller_Bool': $deviceTypeControllerBoolIn"
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% weight=100 blockGap=8
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% inlineInputMode=external
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': export function set_Settings_Fn(deviceTypeBotBoolIn: boolean, deviceTypeControllerBoolIn: boolean): void {
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': 
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     deviceType_Bot_Bool = deviceTypeBotBoolIn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     deviceType_Controller_Bool = deviceTypeControllerBoolIn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': 
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     OLED12864_I2C.showString(
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         0,
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         1,
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         "B:" + convertToText(deviceType_Bot_Bool) + ", C:" + convertToText(deviceType_Controller_Bool),
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         1
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     )
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': }

}

// dark blue #0000ff TOO DARK, CANNOT SEE BLACK BOUNDARY LINES
// light blue rgb(127, 190, 255) #7fbeff TOO LIGHT
// less_light blue rgb(0, 127, 255) ##007fff to dark that matches other groups
// rgb(127,127,255)  #7f7fff Good Purple to not drown out blue_borderlines
// rgb(191,191,255)  #bfbfff Good Purple to not drown out blue_borderlines
// * not too dark since would cover thin-black-boundaries
/**
 * quest_Sensors blocks
 */
//% weight=68 color=#bfbfff icon="Q"
namespace quest_Sensors {
    /// //
    /// // * Global Variables Q Constants
    /// //
    /// // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    /// //
    /// let deviceType_Bot_Bool_QuestGlobal = true
    /// let deviceType_Controller_Bool_QuestGlobal = false
    /// //
    /// let _debug_Serial_Print_Bool_QuestGlobal = false

    /**
     * quest_Show_Magnet_Sensor_Fn
     * @param rawSensorReadMaxIn number, eg: 2000
     */
    // '\\' = escape character to deactivate following special character
    //% block="show magnet\\_sensor\\_value:|* rawSensorReadMaxIn: $rawSensorReadMaxIn"
    //% rawSensorReadMaxIn.min=0 rawSensorReadMaxIn.max=2000
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Magnet_Sensor_Fn(rawSensorReadMaxIn: number=2000): void {
        led.plotBarGraph(input.magneticForce(Dimension.Strength), rawSensorReadMaxIn)
    }

    /**
     * quest_Show_Light_Sensor_Fn
     * @param rawSensorReadMaxIn number, eg: 255
     */
    // '\\' = escape character to deactivate following special character
    //% block="show light\\_sensor\\_value:|* rawSensorReadMaxIn: $rawSensorReadMaxIn"
    //% rawSensorReadMaxIn.min=0 rawSensorReadMaxIn.max=255
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Light_Sensor_Fn(rawSensorReadMaxIn: number=255): void {
        led.plotBarGraph(input.lightLevel(), rawSensorReadMaxIn)
    }
}

