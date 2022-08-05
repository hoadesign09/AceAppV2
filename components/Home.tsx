import { getStateFromPath } from "@react-navigation/native";
import SearchBar from 'react-native-platform-searchbar';
import React , {useEffect, useState} from "react";
import {Text, View, ScrollView, StyleSheet, Image, Dimensions, FlatList, RefreshControl} from "react-native";
import Swiper from "react-native-swiper";
const {width} = Dimensions.get("window");

export default function Home() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   // const [onRefresh, setOnRefresh] = useState(false)
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])



    const getPost = () => {
        fetch("https://hoadesign.net/API/Posts.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log("error: ", error)
        }).finally(() => setIsLoading(false))
    }
    const getOuts = () => {
        fetch("https://hoadesign.net/API/outstanding.json")
        .then((response) => response.json())
        .then((json) => setData2(json))
        .catch((error) => {
            console.log("error:", error)
        }).finally(() => setIsLoading(false))
    }
    const getRecomPost = () => {
        fetch("https://hoadesign.net/API/recompost.json")
        .then((response) => response.json())
        .then((json) => setData3(json))
        .catch((error) =>{
            console.log("error:", error)
        }).finally(() => setIsLoading(false))
    }

    useEffect(() =>{
        getPost();
    }, [])
    useEffect(() => {
        getOuts();
    }, [])
    useEffect(() =>{
        getRecomPost();
    }, [])

    // const Call_RefreshControl = () => {
 
    //     setData([]);
     
    //     getPost();
     
    //   }



    return(
        <><View style = {styles.SearchBar}>
            <SearchBar
                value={value}
                onChangeText = {setValue}
                placeholder="Search"
                inputStyle = {{margin:0}}
                style={styles.searchtop}
                 />
        </View>

        <View style ={styles.hrline}></View>
        
        <ScrollView style={styles.container}>
            <View style={styles.hellostyle}>
                <Text style={styles.hellotext}>
                    Xin Chào,
                </Text>
                <Text style={styles.helloname}>
                    Thương, Trần Công
                    {/* {userInfo.user.name} */}
                </Text>
            </View>

            <Swiper
            style = {styles.swapper}
            height = {480}
            autoplay>
                <View style = {styles.slide}>
                    <Image
                    style = {styles.image} 
                    source={require("../assets/image3.png")} />
                </View>
                <View style = {styles.slide}>
                    <Image
                    style = {styles.image} 
                    source={require("../assets/image3.png")} />
                </View>
                <View style = {styles.slide}>
                    <Image
                    style = {styles.image} 
                    source={require("../assets/image3.png")} />
                </View>
            </Swiper>

        <View style = {styles.container_2}>

            <Text style = {styles.headingText}>Mới nhất</Text>

            <FlatList
                //style = {styles.hozalSlide2} 
                showsHorizontalScrollIndicator = {false}
                horizontal = {true}
                data={data}
                keyExtractor = {item => `key-${item.id}`}
                // refreshControl = {
                //     <RefreshControl
                //         refreshing = {onRefresh}
                //         onRefresh = {Call_RefreshControl}
                //     />
                // }
                renderItem ={({item}) => (
                    <View style = {styles.flatListItem}>
                    <Image style = {styles.imageSlideList2} source={{ uri: item.url }} />
                    <Text style ={styles.textPost}>{item.title}</Text>
                    </View>
                )}
            />
        </View>

        <View style = {styles.container_2}>

            <Text style = {styles.headingText}>Nổi bật</Text>
            
            <FlatList 
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data={data2}
                keyExtractor = {item => `key-${item.id}`}
                renderItem = {({item}) => (
                    <View style= {styles.flatListItem}>
                        <Image style = {styles.imageSlideList2} source={{uri: item.url}}/>
                        <Text style = {styles.textPost}>{item.title}</Text>
                    </View>
                )}
            />
        </View>

        <View style = {styles.container_2}>

            <Text style = {styles.headingText}>Có thể bạn quan tâm</Text>
            <FlatList 
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {data3}
                keyExtractor = {item => `key-${item.id}`}
                renderItem = {({item}) => (
                    <View style = {styles.flatListItem}>
                        <Image style = {styles.imageSlideList2} source={{uri: item.url}} />
                        <Text style = {styles.textPost}>{item.title}</Text>
                    </View>
                )}
            
            />
            
        </View>            

        </ScrollView></>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
    container_2: {
        paddingTop: 20,
        paddingLeft: 20
    },
    hellotext :{
        fontWeight: "400",
        fontSize: 18,
        paddingTop: 15,
        fontFamily: "Arial"
    },
    hellostyle:{
        alignItems: "center"
    },
    helloname: {
        fontWeight: "400",
        fontSize: 18,
        paddingTop: 10,
    },
      searchtop: {
        // // paddingTop: 40,
        // // marginRight: 5,
        // // marginLeft: 5,
        // backgroundColor: ""
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
      image: {
        flex: 1,
        width,
      },
      slide: {
        flex: 1,
        justifyContent: "center"
      },
      swapper: {
        paddingTop: 10
      },
      hozalSlide: {
        flex: 1,
        paddingRight: 20,
        paddingTop: 10
      },
      imageSlideList:{
        width: "100%",
        borderRadius: 10,
      },
      imageSlideList2:{
        width: 260,
        height: 160,
        borderRadius: 10,
      },
      headingText:{
        fontSize: 20,
        fontWeight: "500"
      },
      flatListItem: {
        flexDirection: "column",
        paddingTop: 5,
        paddingRight: 20
      },
      textPost: {
        width: 260,
        flex: 1,
        flexDirection: "column",
        paddingTop: 10
      }
})