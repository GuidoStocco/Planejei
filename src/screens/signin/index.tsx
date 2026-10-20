import { View, Text, StatusBar, } from "react-native";
import { styles } from "@/src/styles/signinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from 'expo-linear-gradient';




export default function SigninScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgba(25, 77, 51, 0.4)', 'transparent']} 
                start={{ x: 1, y: 0.3 }} // Começa na ponta extrema direita (1, 0)
                end={{ x: 0, y: 1 }}   // Termina no canto inferior esquerdo do quadrado (0, 1)
                style={styles.topRightGradient}
            />

            <LinearGradient
                colors={['rgba(2, 83, 75, 0.8)', 'transparent']} 
                start={{ x: 0, y: 1 }} // Começa na ponta extrema esquerda em baixo (0, 1)
                end={{ x: 1, y: 0.2 }}   // Termina no canto superior direito do quadrado (1, 0)
                style={styles.bottomLeftGradient}
            />

            <View style={styles.box1}>
                <View style={styles.containerIcon}>
                    <Ionicons name='airplane-outline' size={25}/>
                </View>
                <Text style={styles.box1Title}>Continue sua Jornada</Text>
                <Text style={styles.box1SubTitle}>Sua próxima aventura está esperando por você</Text>
            </View>

            <View style={styles.box2}>

            </View>

            <View style={styles.box3}>

            </View>
        </SafeAreaView>
    )
}