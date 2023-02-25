basic.showIcon(IconNames.Happy)
basic.pause(2000)
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
    quest_Basic.rq_Show_String_For_Comment_Big_Fn(
    "big"
    )
    quest_Basic.rq_Show_String_For_Comment_Small_Fn(
    "adsfasdf"
    )
    basic.pause(2000)
})
