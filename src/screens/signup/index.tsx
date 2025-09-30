import { Text, View, ScrollView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import colors from './../../constants/colors';
import {Link} from 'expo-router';

export function SignUpScreen() {
    return(
        <ScrollView
            style={{backgroundColor: colors.zinc}}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={colors.zinc} />
                <Image
                    source={require('./../../assets/logo.png')}
                    style={styles.logo}    
                />

                <View>
                    <TextInput
                    placeholder="Nome completo"
                    autoCapitalize="none"
                    placeholderTextColor={colors.gray}
                    style={styles.input}    
                    />

                    <TextInput
                    placeholder="Digite seu e-mail"
                    autoCapitalize="none"
                    placeholderTextColor={colors.gray}
                    style={styles.input}    
                    />

                    <TextInput
                    placeholder="**********"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor={colors.gray}
                    style={styles.input}    
                    />
                </View>    

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Criar conta</Text>
                </TouchableOpacity>

                <Link href={"/(auth)/signin/page"}>
                    <Text style={styles.linkText}>Já possui uma conta? Faça login</Text>
                </Link>
            </View>

            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: colors.zinc
    },
    logo:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 34
    },
    input:{
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.zinc,
        borderRadius: 4,
        marginBottom: 12,
        padding: 12
    },
    btn:{
        backgroundColor: colors.orange,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 12
    },
    btnText:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    linkText:{
        color: colors.gray,
        textAlign: 'center',
        marginTop: 16
    }
})