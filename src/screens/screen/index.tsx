import { styles } from "@/src/styles/welcomeStyle";
import { Text, View, Image, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router'





export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('./../../assets/imagemscreen2.jpg')}
                resizeMode="cover"
            />

            <View style={styles.overlay}/>
            
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Planejei</Text>
                <Text style={styles.subtitle}>
                transformando seu destino em um roteiro perfeito e inesquecível.
                </Text>

                <Pressable 
                    onPress={() => router.push('/(auth)/signin/page')}
                    style={styles.containerButton}
                    accessibilityLabel="Continuar para a tela de login"
                    accessibilityRole="button"
                >
                    <Text style={styles.titleBtn}>Começar Aventura</Text>
                    <Ionicons name="arrow-forward-outline" size={24} style={styles.icon}/>
                </Pressable>
            </View>
        </View>
    )
}