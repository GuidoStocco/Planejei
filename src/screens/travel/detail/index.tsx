import colors from '@/src/constants/colors';
import { Travel } from '@/src/services/travel-service';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Link } from 'expo-router';
import {View, Text, StyleSheet, Platform, ActivityIndicator, ScrollView, Pressable, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DetailScreenProps {
    loading: boolean;
    travel: Travel | null;
    handleDelete: () => Promise<void>;
}



export default function DetailScreen({loading, travel, handleDelete}: DetailScreenProps) {

    if(loading || !travel){
        return(
            <View style={styles.center}>
                <ActivityIndicator size="large" color={colors.orange} />
            </View>
        )
    }

    const formatedStartDate = format(parseISO(travel?.start_date), "dd MMMM yyyy", {locale: ptBR});
    const formatedEndDate = format(parseISO(travel?.end_date), "dd MMMM yyyy", {locale: ptBR});

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Link href='/(painel)/home/page'>
                        <Feather name='arrow-left' size={40} color={colors.white} />
                    </Link>

                    <Text style={styles.text}>Planejei</Text>
                </View>

                <View>
                    <Text style={[styles.heading, {marginTop:14}]}>Detalhes da sua viagem para</Text>
                    <Text style={[styles.heading, {fontWeight: '600', marginBottom: 14}]}>{travel?.city}</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="airplane-takeoff" size={24} color={colors.white} />
                        <Text style={styles.textFormat}>{formatedStartDate}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="airplane-landing" size={24} color={colors.white} />
                        <Text style={styles.textFormat}>{formatedEndDate}</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.label}>Cidade:</Text>
                        <Text style={styles.value}>{travel?.city}</Text>

                        <Text style={styles.label}>Hotel:</Text>
                        <Text style={styles.value}>{travel?.hotel_address}</Text>

                        <Pressable style={styles.deleteButton} onPress={handleDelete}>
                            <Text style={styles.textBtn}>Excluir viagem</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.sectionReminder}>Lembretes</Text>

                    <View style={styles.reminderInputContainer}>
                        <TextInput
                            style={styles.reminderInput}
                            placeholder="Adicione um lembrete"
                            placeholderTextColor={colors.white}
                        />
                        <Pressable style={styles.addButton}>
                            <Text style={{color: colors.white}}>+</Text>
                        </Pressable>
                    </View>

                    <View style={styles.spacingVertical}>
                        <View style={styles.reminderItem}>
                            <Text style={styles.reminderText}>Lembrete 1</Text>

                            <Pressable>
                                <Feather name="trash-2" size={20} color={colors.red} />
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
            flex: 1,
            backgroundColor: colors.zinc,
            paddingTop: Platform.OS === 'ios' ? 16 : 0
        },
     row: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
        },
        text: {
            color: colors.orange,
            fontSize: 30,
            fontWeight: '600'
        },
        container:{
            flex: 1,
            padding: 16,
        },
        center:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        heading:{
            color: colors.white,
            fontSize:24
        },
        infoRow:{
            flexDirection: 'row',
            alignItems: 'center',
        },
        textFormat:{
            color: colors.white,
            fontSize:18,
            marginLeft: 8,
        },
        card:{
            backgroundColor: colors.white,
            padding:16,
            borderRadius: 4,
            marginTop: 16,
            marginBottom:16
        },
        label:{
            color: colors.zinc,
            marginBottom:4
        },
        value:{
            color: colors.black,
            fontSize:16,
            fontWeight: '500',
            marginBottom:8
        },
        deleteButton:{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.red,
            padding:8,
            borderRadius:4,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textBtn:{
            color: colors.red,
            fontWeight: '500',
        },
        sectionReminder:{
            color: colors.white,
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 8,
        },
        reminderInputContainer:{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop:8,
            paddingBottom:8,
            backgroundColor: colors.gray200,
            borderRadius: 8,
            marginBottom:14,
            paddingHorizontal:8,
        },
        reminderInput:{
            flex: 1,
            color:colors.white
        },
        addButton:{
            backgroundColor: colors.orange,
            paddingHorizontal:12,
            paddingVertical:8,
            borderRadius:4,
        },
        spacingVertical:{
            marginBottom: 14,
        },
        reminderItem:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.gray200,
            padding: 10,
            borderRadius:8,
            marginBottom:8,
        },
        reminderText:{
            color: colors.white,
            flex:1
        }
})