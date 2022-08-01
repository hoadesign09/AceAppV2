import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function UserInfo () {
    return(
        <View style = {styles.container}>
            <Text style = {styles.test}>
                Test "Xem chi tiết" - Navigation
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    test: {

    }
})