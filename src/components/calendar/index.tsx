import colors from "@/src/constants/colors";
import { useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import {Calendar} from 'react-native-calendars';


interface DatePickerInputProps{
    label: string;
    minDate?: string;
    value: string;
    onChange: (date: string) => void;
}

export default function DatePickerInput({label, minDate, value, onChange}: DatePickerInputProps){

    const [modalVisible, setModalVisible] = useState(false);

    function handleDayPress(day: {dateString: string}){
        onChange(day.dateString);
        setModalVisible(false);
    }

    const date = new Date(value);

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.field} onPress={() => setModalVisible(true)}>
                <Text style={{color: value ? colors.orange : colors.gray50}}>{value ? new Intl.DateTimeFormat("pt-BR").format(date) : 'Selecione uma data'}</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Calendar
                            onDayPress={handleDayPress}    
                            minDate={minDate ?? new Date().toISOString().split('T')[0]}     
                            markedDates={
                                value ? {
                                    [value]: {selected: true, selectedColor: colors.green, marked: true}
                                } : {}
                            }            
                        />

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btn}>
                            <Text style={{fontWeight: '500', color: colors.red}}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>      
                </View>
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        marginBottom: 14
    },
    label:{
        color: colors.white,
        marginBottom: 4,
    },
    field:{
        backgroundColor: colors.white,
        borderRadius: 4,
        padding: 12,
        justifyContent: 'center',
    },
    modalOverlay:{
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        padding: 24,
    },
    modalContent:{
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: 16,
    },
    btn:{
        marginTop: 12,
        alignItems: 'center',
    }
})