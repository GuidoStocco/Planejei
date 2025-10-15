import colors from '@/src/constants/colors';
import { TravelFormData } from '@/src/hooks/useCreateTravel';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NewTravelScreenProps{
    control: Control<TravelFormData>;
    handleSubmit: UseFormHandleSubmit<TravelFormData>
    errors: FieldErrors<TravelFormData>;
    isSubmitting: boolean;
    createNewTravel: (data: TravelFormData) => Promise<void>;
}

export default function NewTravelScreen({control, handleSubmit, errors, isSubmitting, createNewTravel}: NewTravelScreenProps) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Link href='/(painel)/home/page'>
                        <Feather name='arrow-left' size={40} color={colors.white} />
                    </Link>

                    <Text style={styles.text}>Planejei</Text>
                </View>

                <Text style={styles.subTitle}>Vamos cadastrar sua próxima viagem</Text>

            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.zinc,
        paddingTop: Platform.OS === 'ios' ? 16 : 0
    },
    container: {
        flex: 1,
        padding: 16,
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
    subTitle:{
        color: colors.white,
        marginTop: 14,
        fontSize: 28,
        marginBottom: 14,
        fontWeight: '500'
    },
});