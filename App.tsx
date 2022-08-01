import React, { useEffect, useState } from 'react'
import { StyleSheet, Platform, Image, Text, View, ActivityIndicator } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { createAppContainer } from 'react-navigation'
import SignUp from './components/SignUp'
import Login from './components/Login'
import MainScreen from './components/MainScreen'
import TestApi from './TestFunc/TestApi'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginMain from "./components/LoginMain"

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if ( isLoading) {
    return (
      <View style = {styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return(
        <LoginMain/>
  )
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

