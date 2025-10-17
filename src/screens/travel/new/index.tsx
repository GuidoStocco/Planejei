import colors from '@/src/constants/colors';
import { TravelFormData } from '@/src/hooks/useCreateTravel';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Control, FieldErrors, UseFormHandleSubmit, Controller, useWatch } from 'react-hook-form';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Platform, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePickerInput from '@/src/components/calendar';

interface NewTravelScreenProps{
    control: Control<TravelFormData>;
    handleSubmit: UseFormHandleSubmit<TravelFormData>
    errors: FieldErrors<TravelFormData>;
    isSubmitting: boolean;
    createNewTravel: (data: TravelFormData) => Promise<void>;
}

export default function NewTravelScreen({control, handleSubmit, errors, isSubmitting, createNewTravel}: NewTravelScreenProps) {
    
    const startDate = useWatch({
        control,
        name: 'start_date'
    })

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

                <Controller
                    control={control}
                    name='title'
                    render={({field: {value, onBlur, onChange}}) => (
                        <View style={styles.field}>
                            <Text style={styles.txt}>Objetivo da viagem</Text>
                            <TextInput
                                placeholder='Ex: Viagem para a praia'
                                placeholderTextColor={colors.gray50}
                                style={styles.textInput}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            {errors.title && <Text style={styles.textError}>{errors.title?.message}</Text>}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name='city'
                    render={({field: {value, onBlur, onChange}}) => (
                        <View style={styles.field}>
                            <Text style={styles.txt}>Cidade e estado</Text>
                            <TextInput
                                placeholder='Ex: Bahia, Salvador'
                                placeholderTextColor={colors.gray50}
                                style={styles.textInput}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            {errors.city && <Text style={styles.textError}>{errors.city?.message}</Text>}
                        </View>
                    )}
                />

                <Text style={styles.detalhesViagem}>Detalhes da viagem</Text>


                <Controller
                    control={control}
                    name='hotel_address'
                    render={({field: {value, onBlur, onChange}}) => (
                        <View style={styles.field}>
                            <Text style={styles.txt}>Endereço do hotel</Text>
                            <TextInput
                                placeholder='Digite o endereço do hotel'
                                placeholderTextColor={colors.gray50}
                                style={styles.textInput}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            {errors.hotel_address && <Text style={styles.textError}>{errors.hotel_address?.message}</Text>}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name='start_date'
                    render={({field: {value, onBlur, onChange}}) => (
                    <>
                        <DatePickerInput label='Data de início da viagem'
                            value={value}
                            onChange={onChange}
                        />          
                        {errors.start_date && <Text style={styles.textError}>{errors.start_date?.message}</Text>}

                    </>  
                                       
                    )}
                />

                {startDate && (
                    <Controller
                    control={control}
                    name='end_date'
                    render={({field: {value, onBlur, onChange}}) => (
                    <> 
                        <DatePickerInput label='Data de volta da viagem'
                            value={value}
                            onChange={onChange}
                            minDate={startDate}
                        />  
                        {errors.end_date && <Text style={styles.textError}>{errors.end_date?.message}</Text>}
                    </>                           
                    )}
                />
                )}

                <TouchableOpacity style={styles.btn} onPress={handleSubmit(createNewTravel)}>
                    <Text style={styles.btnText}>{isSubmitting ? 'Carregando...' : 'Cadastrar Viagem'}</Text>
                </TouchableOpacity>

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
        fontWeight: '500',
    },
    textInput:{
        backgroundColor: colors.white,
        borderRadius: 4,
        padding: 12,
    },
    field:{
        marginBottom: 12,
    },
    txt:{
        color: colors.white,
        marginBottom: 6,
        fontWeight: '500',
    },
    detalhesViagem:{
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',  
        marginTop: 14,
        marginBottom: 14
    },
    btn:{
        backgroundColor: colors.orange,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 14,
    },
    btnText:{
        color: colors.white,
        fontSize: 15,
        fontWeight: '600',
    },
    textError:{
        color: colors.red,
        marginTop: 4,
    }
});