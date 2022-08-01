import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Alert, FlatList, ActivityIndicator} from "react-native";
import ScanScreen from "../../TestFunc/QRCodeTest";

export default function GeneralInfo () {
    
    const [email, updateEmail] = useState("");
    const [name, updateName] = useState("");
    const [numberphone, updateNumberPhone] = useState("");
    const [intro, updateIntro] = useState("");
    const [branch, updateBranch] =  useState("");
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);


    const UserApi =  () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then ((json) => setData(json))
        .catch((error) => {
            console.log("error: ", error);
        })
        .finally(() => setLoading(false));
    };

    useEffect(() => {
        UserApi();
    }, []);


    return(
            <><View style={styles.ButtonSave}>
            <TouchableOpacity
                style={styles.buttonlink}
                onPress={() => Alert.alert("Your infomation saved!")}>
                <Text style={styles.linkText}>Lưu</Text>
            </TouchableOpacity>
        </View><View style={styles.hrline}></View><View style={styles.container}>
                <View style={styles.viewInput}>
                    <Text>Họ và tên</Text>
                    <TextInput
                        style={styles.inputText}
                        value={name}
                        onChangeText={(name) => updateName(name)}
                        placeholder="Trần Công Thưong" />
                </View>

                <View style={styles.viewInput}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.inputText}
                        value={email}
                        onChangeText={(email) => updateEmail(email)}
                        placeholder="user1@gmail.com" />
                </View>

                <View style={styles.viewInput}>
                    <Text>Số điện thoại</Text>
                    <TextInput
                        style={styles.inputText}
                        value={numberphone}
                        onChangeText={(numberphone) => updateNumberPhone(numberphone)}
                        placeholder="0357790324" />
                </View>
                <View style={styles.viewInput}>
                    <Text>Về tôi</Text>
                    <TextInput
                        style={styles.inputText}
                        value={intro}
                        onChangeText={(intro) => updateIntro(intro)}
                        placeholder="Tôi là gã co bồi lang thang trên đường đời bất tận. Đường về nhà còn xa, xa lắm, xa lắm..." />
                </View>
                <View style={styles.viewInput}>
                    <Text>Chi nhánh /Branch</Text>
                    <TextInput
                        style={styles.inputText}
                        value={branch}
                        onChangeText={(branch) => updateBranch(branch)}
                        placeholder="Ho Chi Minh" />
                </View>



            </View></>
            
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingTop: 25
    },

    inputText: {
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        width: 300,
        height: 50
    },
    ButtonSave: {
        backgroundColor: "#FFFFFF",
        paddingTop: 60,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 15
    },
    buttonlink: {
        borderWidth: 1,
        borderColor: "#bbb",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#094A96",
        borderRadius: 5
    },
    linkText: {
        color: "#ffffff"
    },
    hrline: {
        borderBottomColor: '#f0f2f5',
        borderBottomWidth: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 10
    },
    viewInput:{
        paddingTop: 10
    }
})