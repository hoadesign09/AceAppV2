import React, {useState} from "react";
import SearchBar from 'react-native-platform-searchbar';
import {Text, View, StyleSheet, ScrollView} from "react-native";

export default function Categories(){
    const [value, setValue] = useState('');
    return(
        <><View style = {styles.SearchBar}>
            <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="Search"
            />
        </View>
        
        <View style ={styles.hrline}></View>

        <ScrollView style={styles.container}>


        </ScrollView></>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
    // searchtop: {
    //     paddingTop: 40,
    //     marginRight: 30,
    //     marginLeft: 30,
    // },
    SearchBar: {
        backgroundColor: "#FFFFFF",
        paddingTop: 50,
        paddingRight: 10,
        paddingLeft: 10    
    },
    hrline: {
        borderBottomColor: "#f0f2f5",
        borderBottomWidth: 2,
        paddingTop: 10,
        backgroundColor: "#FFFFFF"
      },
})