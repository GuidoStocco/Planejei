import { StyleSheet } from "react-native";
import { COLORS } from "../constants/COLORS";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A'
    },
    img:{
        ...StyleSheet.absoluteFill,
        width: '100%',
        height: '100%'
    },
    overlay:{
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    containerTitle:{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    title:{
        fontSize: 48,
        fontWeight: '900',
        color: COLORS.white,
        marginBottom: 12,
    },
    subtitle:{
        fontSize: 18,
        color: COLORS.subtitle,
        lineHeight: 26,
        marginBottom: 48,
    },
    containerButton:{
        flexDirection: 'row',
        height: 56,
        backgroundColor: COLORS.second,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBtn:{
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.white,
        paddingRight: 5
    },
    icon:{
        color: COLORS.white
    }
});

