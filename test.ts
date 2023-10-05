basic.forever(function() {
    
    basic.showIcon(IconNames.SmallHeart)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(2, quest_Time_Units_Enum.Seconds)
    basic.showIcon(IconNames.Heart)
    quest_Dashboard.quest_Show_Oled_Cleared_Fn()
    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Fn(convertToText(randint(0, 10)), 0, 0)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(2, quest_Time_Units_Enum.Seconds)

})