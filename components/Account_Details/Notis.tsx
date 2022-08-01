import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Notis ( ) {
    return(
        <View style = {styles.container}>
            <Text>
                Test "Notifications" the example
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