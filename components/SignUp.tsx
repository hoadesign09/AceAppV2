import React, {useContext, useState} from "react";
import { Button, TextInput, Image, View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native" 
//import { AuthContext } from "../context/AuthContext";

export default function SignUp ({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={(name) => setName(name)} />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(email) => setEmail(email)} />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry />

        <Button
          title="Sign Up"
          onPress={ () => {
            Alert.alert("We haven't Data in this App! So sorry! Please try again later!")
          } } />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
});
