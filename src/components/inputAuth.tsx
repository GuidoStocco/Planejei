import {useState} from 'react';
import { Text, View, TextInput, TextInputProps, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/inputAuth";


type InputAuthProps = TextInputProps & {
    label: string;
    error?: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
}


export default function InputAuth({label, error,icon, secureTextEntry, ...rest}: InputAuthProps){

    const [visible, setVisible] = useState(secureTextEntry)

    const handleTogglePassword = () => {
        setVisible(!visible)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>

            <View style={[styles.containerInput, error && styles.containerInputError]}>
                <Ionicons name={icon} size={25} color='#666768'/>
                <TextInput 
                    placeholderTextColor='#918f8f'
                    style={styles.input}
                    {...rest} 
                />

                {secureTextEntry && (
                    <Pressable onPress={handleTogglePassword} style={styles.btnVisible} >
                        <Ionicons
                            name={visible ? 'eye-off' : 'eye'} 
                            size={22} 
                            color='#666768'
                        />
                    </Pressable>
                )}
            </View>

            {error && <Text>{error}</Text>}
        </View>
    )
}