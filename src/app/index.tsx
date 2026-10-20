import { useState, useEffect } from "react";
import { View, ActivityIndicator} from "react-native";
import { router } from "expo-router";



export default function Index() {
    let singed = false;
    useEffect(() => {
        if(!singed){
            router.replace("/(auth)/welcome/page");
        }else{
           (   <View>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
    }, []);   
}