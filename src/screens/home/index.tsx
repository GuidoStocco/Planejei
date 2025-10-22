import colors from '@/src/constants/colors';
import { Travel } from '@/src/services/travel-service';
import { Feather } from '@expo/vector-icons';
import { differenceInCalendarDays, isBefore, parseISO, isWithinInterval } from 'date-fns';
import { Link } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HomeScreenProps{
    loading: boolean;
    travels: Travel[];
}

export default function HomeScreen({travels, loading}: HomeScreenProps) {
    if (!travels || travels.length === 0) {
        return (
            <View style={styles.safeAreaView}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor={colors.zinc}/>
                    <Text style={{color: colors.white, fontSize: 16}}>Nenhuma viagem encontrada.</Text>
                </View>
            </View>
        )
    }

    const [nexTravel, ...otherTravels] = travels;

    const today = new Date();
    // Protegendo parseISO caso as datas não existam
    const startDate = nexTravel?.start_date ? parseISO(nexTravel.start_date) : today;
    const endDate = nexTravel?.end_date ? parseISO(nexTravel.end_date) : today;

    let statusMessage = '';
    if (nexTravel?.start_date && isBefore(today, startDate)) {
       let daysLeft = differenceInCalendarDays(startDate, today)

       statusMessage = `Falta ${daysLeft} para sua viagem`
    }else if (
        isWithinInterval(today, {start: startDate, end: endDate})
    ){
        statusMessage = 'Sua viagem está em andamento';
    }


    const formatDateRange = (start: string, end: string) => {

    }

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

        {nexTravel && (
            <View style={styles.highLightCard}>
                <Text style={styles.lightText}>{statusMessage}</Text>
                <Text style={styles.rangeText}>20 de outubro de 2025</Text>
                <Text style={styles.city}>{nexTravel.city}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Acessar viagem</Text>
                </TouchableOpacity>
            </View>
        )}

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
    },
    highLightCard:{
        backgroundColor: colors.white,
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 10
    },
    lightText:{
        color: colors.zinc,
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4
    },
    rangeText:{
        color: colors.gray50
    },
    city:{
        fontSize: 18,
        marginTop: 12,
        marginBottom: 12,
        fontWeight: '600',
        color: colors.zinc
    },
    btn:{
        backgroundColor: colors.orange,
        padding: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        color: colors.white,
        fontSize: 16,
        fontWeight: '600'
    }
})