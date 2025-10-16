import colors from "@/src/constants/colors";
import { useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import {Calendar} from 'react-native-calendars';


interface DatePickerInputProps{
    label: string;
}

export default function DatePickerInput({label}: DatePickerInputProps){

    const [modalVisible, setModalVisible] = useState(false);

    function handleDayPress(day: {dateString: string}){
        console.log(day.dateString);
        setModalVisible(false);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.field} onPress={() => setModalVisible(true)}>
                <Text style={styles.txt}>Selecionar data de ida</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Calendar
                            onDayPress={handleDayPress}    
                            minDate={new Date().toISOString().split('T')[0]}                 
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
    txt:{
        color: colors.gray50,
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