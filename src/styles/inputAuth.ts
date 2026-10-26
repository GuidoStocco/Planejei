import { StyleSheet } from "react-native";
import { COLORS } from "../constants/COLORS";

export const styles = StyleSheet.create({
    container:{
        // paddingTop: 10,
        // backgroundColor: 'red'
    },
    title:{
        fontSize:15,
        fontWeight: '700',
        color: COLORS.subtext,
        marginBottom: 10,
    },
    containerInput:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderColor: COLORS.subtitle
    },
    containerInputError:{
        borderColor: '#EF4444',
        backgroundColor: '#3F1616',
    },
    input:{
        paddingLeft: 10,
        height: 50,
        flex: 1
    },
    btnVisible:{
        marginRight: 10,
        padding: 5,
    },
    
})