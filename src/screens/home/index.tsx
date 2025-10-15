import colors from '@/src/constants/colors';
import { Link } from 'expo-router';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function HomeScreen() {
 return (
   <View style={styles.safeAreaView}>
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.zinc}/>
        
        <View style={styles.row}>
            <Text style={styles.rowText}>Planejei</Text>

            <View style={styles.contentLink}>
                <Link
                    href="/(painel)/profile/page"
                    style={styles.link}
                >
                    <Feather name="home" size={30} color={colors.white}/>
                </Link>

                <Link
                    href="/(painel)/travel/new/page"
                    style={[styles.link, {backgroundColor: colors.orange}]}
                >
                    <Feather name="plus" size={30} color={colors.white}/>
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 16,
        marginTop: 30
    },
    rowText:{
        fontSize:30,
        fontWeight:'600',
        color: colors.orange
    },
    contentLink:{
        flexDirection:'row',
        gap: 8,
        alignItems:'center',
        justifyContent:'center'
    },
    link:{
        borderRadius: 99,
        padding: 8
    }
})