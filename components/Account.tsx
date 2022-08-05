import React from "react";
import {Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNavigationContainer, createSwitchNavigator } from "react-navigation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import UserInfo from "./Account_Details/UserInfo";
import GeneralInfo from "./Account_Details/GeneralInfo";
import Notis from "./Account_Details/Notis";
import WishList from "./Account_Details/WishList";
import YourTicket from "./Account_Details/YourTicket";
import FindSup from "./Account_Details/FindSup";
import Reply from "./Account_Details/Reply";

 function AccountHome( {navigation} ) {
    return(
        <>
    <ScrollView style = {styles.headBar}>
        
        <View style={styles.user}>
            <Icon name="user" size={50} color="#156ebf" />
            <View style={{paddingLeft:20, justifyContent: "center"}}>
                <Text >Tran Cong Thuong</Text>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation . navigate ("UserInfo")}>
                    <Text style = {{color: "#0A3BB8"}}>Xem chi tiết</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.hrline}></View>

        <View style={styles.listAccount}>
            <Text style = {styles.textHeading}>
                ACCOUNT SETTINGS
            </Text>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate('General')}>
                    <Text>Thông tin chung</Text>
                </TouchableOpacity>
                <Icon style = {styles.iconStyles} name= "user" size ={25} color = "#156ebf" />
            </View>

            <View style={styles.hrline}></View>

            <View style={styles.genarel} >
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate("Notis")}>
                    <Text>
                         Notifications
                    </Text>
                </TouchableOpacity>
                <Icon style={styles.iconStyles} name= "bell" size ={20} color = "#156ebf" />
                <View style={styles.hrline}></View>
            </View>
        </View>
        
        <View style={styles.listAccount}>
            <Text style = {styles.textHeading}>
                MY LISTS
            </Text>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate("Wish")}>
                    <Text> Danh sách bài viết yêu thích</Text>
                </TouchableOpacity>
                <Icon style ={styles.iconStyles} name= "heart" size ={20} color = "#156ebf" />
            </View>
            <View style={styles.hrline}></View>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate("Ticket")}>
                    <Text> Điểm tích luỹ</Text>
                </TouchableOpacity>
                <Icon style ={styles.iconStyles} name= "ticket" size ={20} color = "#156ebf" />
                <View style={styles.hrline}></View>
            </View>
        </View>

        <View style={styles.listAccount}> 
            <Text style = {styles.textHeading}>
                HỖ TRỢ
            </Text>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate("Sup")}>
                    <Text> Tìm kiếm hỗ trợ</Text>
                </TouchableOpacity>
                <Icon style ={styles.iconStyles} name= "question" size ={25} color = "#156ebf" />
            </View>
            <View style={styles.hrline}></View>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => navigation.navigate("Rep")}>
                    <Text> Phản hồi</Text>
                </TouchableOpacity>
                <Icon style ={styles.iconStyles} name= "comment" size ={20} color = "#156ebf" />
            </View>
            <View style={styles.hrline}></View>
            <View style={styles.genarel}>
                <TouchableOpacity
                style = {styles.buttonlink}
                onPress = {() => Alert.alert("We so sorry for that! But it doesn't work! Please try again later!")}>
                    <Text> Đăng xuất</Text>
                </TouchableOpacity>
                <Icon style ={styles.iconStyles} name = "power-off" size={20} color = "#156ebf"/>
            </View>
        </View>
        </ScrollView>
        </>

    )
}

    const tab = createNativeStackNavigator();

    function Account () {
        return(
            <><tab.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="Home">
                <tab.Screen name="Home" component={AccountHome} />
                <tab.Screen name="UserInfo" component={UserInfo} />
                <tab.Screen name="General" component={GeneralInfo} />
                <tab.Screen name="Notis" component={Notis} />
                <tab.Screen name="Wish" component={WishList} />
                <tab.Screen name="Ticket" component={YourTicket} />
                <tab.Screen name="Sup" component={FindSup} />
                <tab.Screen name="Rep" component={Reply} />
            </tab.Navigator>
            </>

        )
    }

    export default Account;

    
const styles = StyleSheet.create({

    headBar: {
        paddingTop: 60,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: "#FFFFFF",

    },
    hrline: {
        borderBottomColor: '#f0f2f5',
        borderBottomWidth: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 10
    },
    listAccount: {
        paddingTop: 30,
    },
    detailsInfo: {
        
    },
    buttonlink:{
        paddingTop: 5
    },
    user: {
        flexDirection: "row",
    },
    genarel: {
        flexDirection: "row",
        paddingTop: 10,
    },
    iconStyles: {
        position: "absolute",
        right: 0,
        paddingTop: 10
    },
    textHeading: {
        fontWeight: "500",
        fontSize: 18
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

})