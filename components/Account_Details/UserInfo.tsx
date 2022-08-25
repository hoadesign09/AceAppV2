import React, { useEffect, useState } from "react";
import {View, Text,FlatList,Image, StyleSheet, RefreshControl, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "react-native-platform-searchbar";
import axios from "axios";

export default function UserInfo () {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState()
    const [onRefresh, setOnRefresh] = useState(false);


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

    const Call_RefreshControl = () => {
 
        setData([]);
     
        getUserDetail();
     
      }



    return(
        <><Text style = {styles.h1}> User Detail Check Information and Edit</Text>
            
            <FlatList 
                style = {styles.container}
                showsVerticalScrollIndicator = {false}
                data={data}
                keyExtractor = {item => `key-${item.id}`}
                refreshControl={
                    <RefreshControl 
                        refreshing= {onRefresh}
                        onRefresh = {Call_RefreshControl}
                    />
                }
                renderItem = {({item}) => (
                    <View style = {styles.userContainer}>
                        <Text style = {styles.textContent}>{item.full_name}</Text>
                        <Image style = {styles.avt} source={{uri: item.avt}}/>
                        <Button 
                            title="Đổi Avatar"
                            onPress={() => console.log("change avt")}
                        /> 
                        
                    </View>
                )}     
            />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingRight: 20,
        paddingLeft: 20
    },
    // textContent: {
    //     flex: 1,
    //     flexDirection: "row"
    // },
    // avt: {
    //     flex: 1,
    //     flexDirection: "row"
    // },    
    SearchBar: {
        backgroundColor: "#FFFFFF",
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 15
      },
      hrline: {
        borderBottomColor: "#f0f2f5",
        borderBottomWidth: 2,
        paddingTop: 10,
        backgroundColor: "#FFFFFF"
      },
      userContainer: {
        flexDirection: "row",
        paddingTop: 20,
      },
      textContent: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center"
    },
    avt :{
        height: 50,
        width: 50
    },
    h1: {
        backgroundColor: "#FFFFFF", 
        paddingTop: 20, 
        fontWeight: "500", 
        fontSize: 20, 
        textAlign: "center"
    }
})