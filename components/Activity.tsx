import React, {useEffect, useState} from "react";
import SearchBar from 'react-native-platform-searchbar';
import {Text, View, StyleSheet, ScrollView, RefreshControl} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Categories() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ onRefresh, setOnRefresh] = useState(false)

    const getActi = () => {
        fetch("https://hoadesign.net/API/activities.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => 
            {console.log("error:", error);
        }).finally(() => setIsLoading(false))
    }

    useEffect (() => {
        getActi();
    },[])

    const Call_RefreshControl = () => {
 
        setData([]);
     
        getActi();
     
      }
    return(

      <><View style={styles.SearchBar}>
            <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="Search" />
        </View>
        <View style={styles.hrline}></View>
        <FlatList 
            data= {data}
            style = {styles.container_2}
            keyExtractor = {item => `key-${item.id}` }
            refreshControl = {
                <RefreshControl
                    refreshing = {onRefresh}
                    onRefresh = {Call_RefreshControl}
                />
            }
            renderItem = {({item}) => (
                <View style = {styles.itemList}>
                    <Text style = {styles.itemID}>{item.title}</Text>
                </View>
            )}
            /> 
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
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
    container_2:{
        backgroundColor: "#FFFFFF",
        paddingTop: 10,
        paddingRight: 30,
        paddingLeft: 30, 
    },
    itemList: {
        flexDirection: "row"
    },
    itemID:{
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,
    },
    h1: {
        backgroundColor: "#FFFFFF",
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 18
    }
})