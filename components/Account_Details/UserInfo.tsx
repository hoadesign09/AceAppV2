import React, { useEffect, useState } from "react";
import {View, Text,FlatList,Image, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "react-native-platform-searchbar";

export default function UserInfo () {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState()

    const getUserDetail = () => {
        fetch("https://hoadesign.net/API/userdetail.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log("error", error)
        }).finally(() => setIsLoading(false))
    }
    useEffect(() => {
        getUserDetail();
    }, [])

    return(
        <><View style={styles.SearchBar}>
            <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="Search"
                inputStyle={{ margin: 0 }} />
        </View>
        <View style={styles.hrline}></View>

        <View style ={styles.container}>
            
            <Text> User Detail Check Information and Edit</Text>
            
            <FlatList 
                showsVerticalScrollIndicator = {false}
                data={data}
                keyExtractor = {item => `key-${item.id}`}
                renderItem = {({item}) => (
                    <View style = {styles.userContainer}>
                        <Text style = {styles.textContent}>{item.full_name}</Text>
                        <Image style = {styles.avt} source={{uri: item.avt}}/> 
                    </View>
                )}     
            />
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
    textContent: {
        flex: 1,
        flexDirection: "row"
    },
    avt: {
        flex: 1,
        flexDirection: "row"
    },    
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
      userContainer: {
        flexDirection: "row"
      }
})