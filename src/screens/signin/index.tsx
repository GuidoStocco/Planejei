import { Text, View, ScrollView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import colors from './../../constants/colors';
import { Link } from 'expo-router';
import { SignInFormData } from "@/src/hooks/useSignIn";
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from "react-hook-form";


interface SignInScreenProps {
    control: Control<SignInFormData>,
    handleSubmit: UseFormHandleSubmit<SignInFormData>,
    onSubmit: (data: SignInFormData) => Promise<void>,
    isSubmitting: boolean,
    errors: FieldErrors<SignInFormData>
}


export function SignInScreen({ control, handleSubmit, onSubmit, isSubmitting, errors }: SignInScreenProps) {


    return (
        <ScrollView
            style={{ backgroundColor: colors.zinc }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={colors.zinc} />
                <Image
                    source={require('./../../assets/logo.png')}
                    style={styles.logo}
                />

                <View>

                    <Controller
                        control={control}
                        name='email'
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    placeholder="Digite seu e-mail"
                                    autoCapitalize="none"
                                    placeholderTextColor={colors.gray}
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.email && <Text style={styles.textError}>{errors.email.message}</Text>}
                            </View>
                        )}
                    />


                    <Controller
                        control={control}
                        name='password'
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    placeholder="Digite sua senha"
                                    autoCapitalize="none"
                                    placeholderTextColor={colors.gray}
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                />
                                {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
                            </View>
                        )}
                    />
                </View>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.btnText}>{isSubmitting ? 'Carregando...' : 'Acessar Conta'}</Text>
                </TouchableOpacity>

                <Link href={"/(auth)/signup/page"}>
                    <Text style={styles.linkText}>Ainda não possui uma conta? Cadastre-se</Text>
                </Link>
            </View>


        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: colors.zinc
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 34
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.zinc,
        borderRadius: 4,
        marginBottom: 12,
        padding: 12
    },
    btn: {
        backgroundColor: colors.orange,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 12
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    linkText: {
        color: colors.gray,
        textAlign: 'center',
        marginTop: 16
    },
    textError: {
        color: colors.red,
        marginBottom: 8
    }
})