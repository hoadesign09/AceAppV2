import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Dimensions, SafeAreaView} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchBar from "react-native-platform-searchbar";
import  Icon  from "react-native-vector-icons/FontAwesome";

const {width} = Dimensions.get("window");

export default function WishList ( ) {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getWishList = () => {
        fetch("https://hoadesign.net/API/support.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log("error: ", error);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() =>{
        getWishList();
    }, [])



    return(
        <><View style={styles.SearchBar}>
            <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="Search" />

        </View>
        
        <View style={styles.hrline}></View>

        <FlatList
        style = {styles.container} 
        data = {data}
        keyExtractor = {item =>`key-${item.id}` }
        renderItem = {({item,}) => (
            <>
            <View style={styles.List}>
                <Text style={styles.listItem}>{item.title}</Text>
                <Icon style={styles.iconStyle} name="angle-right" color="#156ebf" size={30} />
            </View>
            </>

        )}
        
        />
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30, 
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
    List: {
        flexDirection: "row",
        paddingTop: 10,
    },
    iconStyle:{
        position: "absolute",
        right: 0,
        paddingTop: 10
    },
    listItem: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10

    }
})