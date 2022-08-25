import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, ScrollView, Image, Dimensions, RefreshControl, TouchableOpacity} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchBar from 'react-native-platform-searchbar';

const {width} = Dimensions.get("window");


export default function Categories() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [onRefresh, setOnRefresh] = useState(false);


    const getCate = () => {
        fetch("https://hoadesign.net/API/categories.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log("error: ", error);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() =>{
        getCate();
    }, [])

    const Call_RefreshControl = () => {
 
        setData([]);
     
        getCate();
     
      }

    return(
        <><View style={styles.SearchBar}>
                    <SearchBar
                        value={value}
                        onChangeText={setValue}
                        placeholder="Search" />

            </View><View style={styles.hrline}></View>

            <FlatList 
                style = {styles.container_2}
                showsVerticalScrollIndicator = {false}
                data = {data}
                keyExtractor = {item => `key-${item.id}` }
                refreshControl={
                    <RefreshControl 
                        refreshing= {onRefresh}
                        onRefresh = {Call_RefreshControl}
                    />
                }
                renderItem = {({item}) => (
                    <>
                    <TouchableOpacity 
                        style={styles.imagelist} 
                        onPress = {() => console.log (item.info)}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Image style={styles.image} source={{ uri: item.url }} />                    
                    </TouchableOpacity>
                    </>
                )}/>
            </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
    container_2: {
        backgroundColor: "#FFFFFF",
        paddingLeft: 10,
        paddingRight: 10
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
    image:{
        height: 150,
        width,
        borderRadius: 10,

    },
    imagelist: {
        paddingTop: 10,
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        textDecorationColor: "line-through"
    },
    titletext: {
        backgroundColor: "#C4C4C49C",
        width: "90%",
    }

})