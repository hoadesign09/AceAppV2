import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Reply () {
    return(
        <View style = {styles.container}>
            <Text>
                Test "Phản hồi"
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