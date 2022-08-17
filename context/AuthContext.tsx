import React, { Component, createContext, useEffect, useState } from "react";
import { Text } from "react-native";

 export const AuthContext = createContext();


 export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    const getInfo = (email: any, password: any) => {
        fetch(("https://hoadesign.net/API/userdetail.json"), {email, password})
        .then( response => {
            let userInfo = response.json();
            console.log(userInfo)
            setUserInfo( userInfo);
        }).catch((error) => {
            console.log("error:", error)
        })
     }
    
     const createInfo = (full_name: any, email: any, password: any) => {
        fetch(("https://hoadesign.net/API/userdetail.json"), {full_name, email, password})
        .then(async response => {
            let userInfo = response.json();
            setUserInfo(await userInfo);
            console.log(userInfo);
        })
        .catch((error) => {
            console.log("sign up error:", error)
        })
     }

    return(
        <AuthContext.Provider value={{isLoading,createInfo,getInfo}}>
        {children}
        </AuthContext.Provider>
    )

 }
