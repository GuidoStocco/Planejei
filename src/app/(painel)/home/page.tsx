import useProfile from "@/src/hooks/useProfile";
import { Button, Text, View } from "react-native";

export  default function Home() {

    const {logoOut} = useProfile();

    return(
        <View>
            <Text>pagina HOME</Text>
            <Button title="Sair" onPress={logoOut} />
        </View>
    )
}