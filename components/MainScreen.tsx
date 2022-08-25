import  React, {useState, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
import Home from "./Home";
import Categories from "./Categories";
import Activity from "./Activity";
import Account from "./Account";
import LoginMain from "./LoginMain";
import QRCodeTest from "../TestFunc/QRCodeTest";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();
  

export default function MainScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  if (  isLoading) {
  return(
    <View style = {styles.loading}>
      <ActivityIndicator size="large"/>
    </View>
  );
  };
    return(
      <NavigationContainer>
            <Tab.Navigator  
            screenOptions={{ headerShown: false }}
            initialRouteName = "Home"
            >
                <Tab.Screen 
                name = "Home" 
                component = {Home}
                options={{
                  tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={size}/>)
                } }
                  />
                <Tab.Screen 
                name = "Categories" 
                component = {Categories}
                options={{
                  tabBarIcon: ({size, color}) => (<Icon name={"bars"} color={color} size={size} />)
              }}
                />
                <Tab.Screen 
                name = "Activity" 
                component = {Activity}
                options={{
                  tabBarIcon: ({size, color}) => (<Icon name={"bell"} color={color} size={size} />)
              }}
                />
                <Tab.Screen 
                name = "Account" 
                component = {Account}
                options={{
                  tabBarIcon: ({size, color}) => (<Icon name={"user"} color={color} size={size} />)
              }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})