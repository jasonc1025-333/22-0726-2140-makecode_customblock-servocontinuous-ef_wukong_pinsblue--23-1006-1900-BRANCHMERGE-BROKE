basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    roboQuest_A.rq_Show_String_Oled_Small_Fn(
    convertToText(randint(0, 9)),
    0,
    0
    )
    basic.pause(5000)
    roboQuest_A.rq_ShowString_Oled_Big_Fn(
    convertToText(randint(0, 9)),
    0,
    1
    )
    basic.pause(5000)
})

