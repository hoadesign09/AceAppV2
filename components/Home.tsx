import { getStateFromPath } from "@react-navigation/native";
import SearchBar from 'react-native-platform-searchbar';
import React , {useState} from "react";
import {Text, View, ScrollView, StyleSheet, Image, Dimensions} from "react-native";
import Swiper from "react-native-swiper";
const {width} = Dimensions.get("window");

export default function Home() {
    const [value, setValue] = useState('');
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

            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
            </ScrollView>
        </View>

        <View style = {styles.container_2}>

            <Text style = {styles.headingText}>Nổi bật</Text>

            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
            </ScrollView>
        </View>

        <View style = {styles.container_2}>

            <Text style = {styles.headingText}>Có thể bạn quan tâm</Text>

            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
                <View style = {styles.hozalSlide}>
                    <Image
                    style = {styles.imageSlideList}
                    source = {require("../assets/image4.png")}
                    />
                    <Text>ACECOOK VIỆT NAM TÀI TRỢ CHO CÁC</Text>
                    <Text>ĐƠN VỊ BÁO ĐÀI...</Text>
                </View>
            </ScrollView>
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
      headingText:{
        fontSize: 20,
        fontWeight: "500"
      }
})