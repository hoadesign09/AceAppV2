import React, { useEffect, useState } from "react";
import {View, Text,FlatList,Image, StyleSheet, RefreshControl, Button, TouchableOpacity, Alert} from "react-native";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";

export default function UserInfo () {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState()
    const [onRefresh, setOnRefresh] = useState(false);
    const [password, setPassword] = useState()
    const [repassword, resetPassword] = useState()


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
        <>
            
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
                    <><View style = {styles.userContainer}>
                        <Image style = {styles.avt} source={{uri: item.avt}}/>
                        <View style = {styles.detail}>
                            <Text style = {styles.textContent}>{item.full_name}</Text>
                            <TouchableOpacity
                                style = {styles.buttonlink}
                                onPress={() => console.log("change avt")}
                            >
                                <Text style = {{fontSize: 18, color: "#fff"}}>Đổi Avata</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    <Text style = {styles.h2}>Thay đổi mật khẩu</Text>
                    <View>
                        <TextInput
                            style = {styles.input}
                            value = {password}
                            placeholder = "TYPE YOUR NEW PASSWORD"
                            onChangeText={(password) => setPassword(password)}
                        />
                        <TextInput
                            style = {styles.input}
                            value = {repassword}
                            placeholder = "RE-TYPE YOUR NEW PASSWORD"
                            onChangeText={(repassword) => resetPassword(repassword)}
                        />
                        <TouchableOpacity
                            style={styles.buttonlink}
                            onPress={() => Alert.alert("Your infomation saved!")}>
                            <Text style={styles.linkText}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </>
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
        paddingTop: 50,
      },
      textContent: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center", 
        fontSize: 18
    },
    avt :{
        height: 60,
        width: 60
    },
    detail: {
        paddingLeft: 20
    },
    h2: {
        backgroundColor: "#FFFFFF", 
        paddingTop: 100, 
        fontWeight: "500", 
        fontSize: 18,
        paddingBottom: 20
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        height: 50
    },
    buttonlink: {
        borderWidth: 1,
        borderColor: "#bbb",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#094A96",
        borderRadius: 5,
        width: 120,
    },
    linkText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20
    },
})