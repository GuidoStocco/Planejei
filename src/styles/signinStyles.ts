import { StyleSheet, Dimensions  } from "react-native";
import { COLORS } from "../constants/COLORS";


const { width } = Dimensions.get('window');
const gradientSize = width * 0.7; // Ocupa 70% da largura da tela para criar um brilho amplo

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    
    },
    box1:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    box2:{
        // backgroundColor:'white',
        flex:2,
        paddingHorizontal: 20,
    },
    box3:{
        // backgroundColor:'green',
        flex:1
    },
    containerIcon:{
        backgroundColor: COLORS.primary,
        height: 55,
        width: 55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 15,
    },
    box1Title:{
        fontSize: 30,
        fontWeight: '700',
        paddingTop: 20,
        paddingBottom: 10
    },
    box1SubTitle:{
        fontSize: 15,
        color: COLORS.subtext
    },
    topRightGradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: gradientSize,
        height: gradientSize,
        borderBottomLeftRadius: gradientSize, // Arredonda a ponta que "vaza" pro centro da tela
      },
      bottomLeftGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: gradientSize,
        height: gradientSize,
        borderTopRightRadius: gradientSize, // Arredonda a ponta que "vaza" pro centro da tela
      },
     
})