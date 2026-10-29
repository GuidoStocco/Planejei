import {useEffect } from "react";
import { View, ActivityIndicator} from "react-native";
import { router } from "expo-router";
import { supabase } from "../services/supabase";



export default function Index() {

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {

            if(session){
                router.replace('/(painel)/home/page')
                return
            }else{
                router.replace('/(auth)/welcome/page')           
            }
        })
    }, [])

   return(
    <ActivityIndicator size='large'  color='orange'/>
   )
}