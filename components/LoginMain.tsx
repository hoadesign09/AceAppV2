import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import the different screens
import Login from './Login'
import SignUp from './SignUp'
import MainScreen from './MainScreen'
// create our app's navigation stack

const map = createSwitchNavigator(
  {
    Login,
    SignUp,
    MainScreen
  },
  {
    initialRouteName: 'Login'
  }
)
const LoginMain = createAppContainer (map)
export default LoginMain