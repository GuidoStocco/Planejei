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
        flex:1,
        alignItems: 'center'
    },
    containerIcon:{
        backgroundColor: COLORS.primary,
        height: 55,
        width: 55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
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
     containerBox2:{
        flex:1,
        // backgroundColor: 'red'
     },
     forgotPassword:{
        marginTop: 10,
        alignItems: 'flex-end'
     },
     textPassword:{
        fontWeight: '500',
        color: COLORS.subtext
     },
     btnLogin:{
        backgroundColor:COLORS.second,
        height: 55,
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
     },
     textBtnLogin:{
        fontSize: 19,
        fontWeight: '700',
        color: COLORS.white
     },
     containerContinue:{
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center'
     },
     continueBox1:{
        borderWidth: 0.6,
        flex: 1,
        borderColor: COLORS.text
     },
     titleContinue:{
        paddingHorizontal: 10,
        fontWeight: '400',
        fontSize: 13
     },
     containerGoogle:{
        width: '50%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 8,
        gap: 8,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.subtitle
     },
     iconGoogle:{
        color: COLORS.title
     },
     textGoogle:{
        fontSize: 16,
        fontWeight: '500'
    },
    containerCriarConta:{
        flexDirection: 'row',
        marginTop: 30,
        gap: 5,
        flex: 1,
        alignItems: 'flex-end',
        paddingBottom: 5
    },
    titleCriarConta:{
        color:COLORS.subtext
    },
    btnCriarConta:{

    },
    textBtnCriarConta:{
        color:COLORS.second,
        fontWeight: '500'
    }

})