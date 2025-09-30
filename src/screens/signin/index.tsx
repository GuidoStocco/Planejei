import { Text, View, ScrollView, StatusBar, StyleSheet, Image, TextInput } from "react-native";
import colors from './../../constants/colors';

export function SignInScreen() {
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
            </View>

            <View>
                <TextInput
                    placeholder="Digite seu e-mail"
                    autoCapitalize="none"
                    placeholderTextColor={colors.gray}
                    style={styles.input}    
                />
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
    }
})