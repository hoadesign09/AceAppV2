
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Platform, Image, Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LoginMain from "./components/LoginMain"
import { AuthContext, AuthProvider } from './context/AuthContext'
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
    <AuthProvider>
      < LoginMain/>
    </AuthProvider>
  )
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

