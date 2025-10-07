import { Text, View, ScrollView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import colors from './../../constants/colors';
import {Link} from 'expo-router';
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from "react-hook-form";
import { SignUpFormData } from "@/src/hooks/useSignUp";


interface SignUpScreenProps{
    control: Control<SignUpFormData>,
    handleSubmit: UseFormHandleSubmit<SignUpFormData>,
    onSubmit: (data: SignUpFormData) => Promise<void>,
    isSubmitting: boolean,
    errors: FieldErrors<SignUpFormData>
};


export function SignUpScreen({control, handleSubmit, onSubmit, isSubmitting, errors}: 
    SignUpScreenProps) {
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
                    <Controller
                        control={control}
                        name='username'
                        defaultValue=""
                        render={({field: {onChange, onBlur, value}}) => (
                            <View>
                            <TextInput
                                placeholder="Nome completo"
                                autoCapitalize="none"
                                placeholderTextColor={colors.gray}
                                style={styles.input}    
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.username && <Text style={styles.textError}>{errors.username.message}</Text>}
                           </View> 
                        )}
                    />

                    <Controller
                        control={control}
                        name='email'
                        defaultValue=""
                        render={({field: {onChange, onBlur, value}}) => (
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
                        render={({field: {onChange, onBlur, value}}) => (    
                            <View>    
                                <TextInput
                                placeholder="Digite sua senha"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                placeholderTextColor={colors.gray}
                                style={styles.input}    
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                                {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
                            </View>    
                        )}
                    />

                    <Controller
                        control={control}
                        name='confirmPassword'
                        defaultValue=""
                        render={({field: {onChange, onBlur, value}}) => (        
                            <View>
                                <TextInput
                                placeholder="Digite sua senha novamente"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                placeholderTextColor={colors.gray}
                                style={styles.input}    
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                                {errors.confirmPassword && <Text style={styles.textError}>{errors.confirmPassword.message}</Text>}
                            </View>    
                        )}
                    />
                   

                </View>    

                <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
                    {isSubmitting ? (
                        <Text style={styles.btnText}>Cadastrando...</Text>
                    ) : (
                        <Text style={styles.btnText}>Cadastrar</Text>
                    )}
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
    },
    textError:{
        color: colors.red,
        marginBottom: 8
    }
})