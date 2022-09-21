
import * as React from 'react'
import { StyleSheet, Platform, Image, Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LoginMain from "./components/LoginMain"
import { AuthContext, AuthProvider } from './context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { checkVersion } from "react-native-check-version";

export default async function App() {

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

  const version = await checkVersion();
  console.log("Got version info:", version);

  if (version.needsUpdate) {
    console.log(`App has a ${version.updateType} update pending.`);
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

