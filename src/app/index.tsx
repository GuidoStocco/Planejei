import { useState, useEffect } from "react";
import { View, ActivityIndicator} from "react-native";
import { router } from "expo-router";



export default function Index() {

    let loading = true;
    let singed = false;

    useEffect(() => {
        if(!singed){
            router.replace("/(auth)/signin/page");
            loading = false;
        }else{
           (   <View>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
    }, []);   
}