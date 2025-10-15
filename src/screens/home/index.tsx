import colors from '@/src/constants/colors';
import { Link } from 'expo-router';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function HomeScreen() {
 return (
   <View style={styles.safeAreaView}>
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.zinc}/>
        
        <View style={styles.row}>
            <Text style={styles.rowText}>Planejei</Text>

            <View style={styles.contentLink}>
                <Link
                    href="/"
                    style={styles.link}
                >
                    <Feather name="home" size={30} color={colors.white}/>
                </Link>
            </View>
        </View>

    </View>
   </View>
  );
}



const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        backgroundColor: colors.zinc,
        paddingTop: Platform.OS === 'ios' ? 16 : 0
    },
    container:{
        flex:1,
        padding:16,
    },
    row:{

    },
    rowText:{

    },
    contentLink:{

    },
    link:{
        
    }
})