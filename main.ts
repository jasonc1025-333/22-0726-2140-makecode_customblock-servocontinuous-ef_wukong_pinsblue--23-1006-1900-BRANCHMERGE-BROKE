basic.forever(function () {
    quest_Basic.rq_Show_String_For_Oled_SmallFont_Fn(
    convertToText(randint(1000, 1999)),
    0,
    0
    )
    quest_Basic.rq_ShowString_For_Oled_BigFont_Fn(
    convertToText(randint(2000, 2999)),
    0,
    1
    )
    quest_Note.rq_Show_String_For_Note_Big_Fn(
    "Big"
    )
    quest_Note.rq_Show_String_For_Note_Small_Fn(
    "Small"
    )
    quest_Robo.rq_Set_PowerMotorsViaBlueRedBlackPins_Fn(
    rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
})
