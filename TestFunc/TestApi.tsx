import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";

export default function TestApi() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const apitest =  () => {
        fetch("https://hoadesign.net/data.json")
        .then((response) => response.json())
        .then ((json) => setData(json.posts))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    // const apitest = async () => {
    //     try {
    //      const response = await fetch("https://hoadesign.net/data.json");
    //      const json = await response.json();
    //      setData(json.posts);
    //    } catch (error) {
    //      console.error(error);
    //    } finally {
    //      setLoading(false);
    //    }
    //  }

    useEffect(() => {
        apitest();
    },[]);

    return(
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({id}, index) => id}
            renderItem = {({item}) => (
            <><Text>  {item.title}, {item.description}</Text>
            <Image source={item.url}/></>
                
            )}
            />
            )}
        </View>
    );
}