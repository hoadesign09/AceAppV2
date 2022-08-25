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
        fetch("https://hoadesign.net/API/wishlist.json")
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
                <Icon style={styles.iconStyle} name="trash" color="#156ebf" size={30} />
            </View><View style={styles.hrline}></View>
            </>

        )}
        
        />
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
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
    List: {
        flexDirection: "row",
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50, 
        paddingBottom: 30 
    },
    listItem: {
        paddingRight: 20
    },
    iconStyle: {

    }
})