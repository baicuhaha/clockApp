import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Countdown from "./Countdown"
import CustomTimer from "./CustomTimer"
import Home from "./Home"
import StartTimer from "./StartTimer"
const AppNavigator = createStackNavigator({
    Home:{
        screen:Home
    },
  Countdown: {
    screen: Countdown
  },
  CustomTimer:{
      screen:CustomTimer
  },
  StartTimer:{
      screen:StartTimer
  }
},
{
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);