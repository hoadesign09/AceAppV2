import React, {useContext, useState} from "react";
import {  Button, TextInput, Image, View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native" 
import MainScreen from "./MainScreen";
import { AuthContext } from "../context/AuthContext";
export default function Login ({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {getInfo, isLoading} = useContext(AuthContext);

  
  return (
    <View style={styles.container}>
        <Image 
          style = {styles.logo}
          source={require("../assets/logo.png")} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() =>  
            {
              navigation.navigate("MainScreen")
              //getInfo(email, password);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50
  },
  link: {
    color: 'blue',
  },
  logo: {
    width: "90%",
    height: "20%",

  }
});