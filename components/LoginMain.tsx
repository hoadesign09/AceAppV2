import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './Login'
import SignUp from './SignUp'
import MainScreen from './MainScreen'
import { AuthProvider } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
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

// const AppStack = createStackNavigator({ Home: MainScreen, Resgister: SignUp });
// const AuthStack = createStackNavigator({ LogIn: Login});

// const map = createSwitchNavigator(
    
//     {
//       App: AppStack,
//       Auth: AuthStack,
//     }, 
//     {
//       initialRouteName: "Auth",
//     }
// )
// const LoginMain = createAppContainer (map);
// export default LoginMain