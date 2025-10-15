import useProfile from "@/src/hooks/useProfile";
import HomeScreen from "@/src/screens/home";
import { Button, Text, View } from "react-native";

export  default function Home() {

    const {logoOut} = useProfile();

    return(
        <HomeScreen/>
    )
}