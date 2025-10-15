import { Text, View, Button} from "react-native";
import useProfile from "@/src/hooks/useProfile";




export default function Profile() {

    const { logoOut } = useProfile()

    return(
        <View>
            <Text>Profile</Text>
            <Button title="Sair" onPress={logoOut} />
        </View>
    )
}