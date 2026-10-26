import { View, Text, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/src/styles/signupStyles";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputAuth from "@/src/components/inputAuth";
import { SignupFormData } from "@/src/hooks/useSignup";
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from "react-hook-form";


interface SignupScreenProps {
    control: Control<SignupFormData>;
    handleSubmit: UseFormHandleSubmit<SignupFormData>;
    errors: FieldErrors<SignupFormData>;
    isSubmitting: boolean;
    handleSignin: () => void;
}





export default function SignupScreen({control, errors, handleSubmit, isSubmitting, handleSignin}: SignupScreenProps){
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <LinearGradient
                    colors={['#4DB6AC', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.topLeftGradient}
                />

                <LinearGradient
                    colors={['#02534B', 'transparent']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.2 }}
                    style={styles.bottomRightGradient}
                />

                

                <View style={styles.box2}>
                    <View style={styles.box1}>
                        <View style={styles.containerIcon}>
                            <Ionicons name='aperture-outline' size={26}/>
                        </View>
                        <Text style={styles.box1Title}>Comece sua Jornada</Text>
                        <Text style={styles.box1SubTitle}>Crie sua conta para começar seu plano de viagem</Text>
                    </View>

                    <View style={styles.containerBox2}>

                        <View style={{paddingTop: 30}}>
                            <Controller
                                control={control}
                                name="name"
                                render={({field:{onBlur, onChange, value}}) => (
                                    <InputAuth
                                        label="NOME"
                                        placeholder="Guido Stocco"
                                        icon='person'
                                        autoCapitalize="words"
                                        keyboardType="default"         
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        error={errors.name?.message}
                                    />
                                )}
                            />
                        </View>

                        <View style={{paddingTop: 20, paddingBottom: 20}}>
                            <Controller
                                control={control}
                                name="email"
                                render={({field:{onBlur, onChange, value}}) => (
                                    <InputAuth
                                        label="EMAIL"
                                        placeholder="planejei@travel.com"
                                        icon='mail'
                                        autoCapitalize="none"
                                        keyboardType="email-address"         
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        error={errors.email?.message}
                                    />
                                )}
                            />
                        </View>

                        <View>
                            <Controller
                                control={control}
                                name="password"
                                render={({field:{onBlur, onChange, value}}) => (
                                    <InputAuth
                                        label="SENHA"
                                        placeholder="**********"
                                        icon='lock-closed'
                                        autoCapitalize="none"
                                        keyboardType="default"         
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry
                                        error={errors.password?.message}
                                    />
                                )}
                            />    
                        </View>

                        <View style={{paddingTop: 20, paddingBottom: 20}}>
                            <Controller
                                control={control}
                                name="confirmPassword"
                                render={({field:{onBlur, onChange, value}}) => (
                                    <InputAuth
                                        label="CONFIRME SUA SENHA"
                                        placeholder="**********"
                                        icon='lock-closed'
                                        autoCapitalize="none"
                                        keyboardType="default"         
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry
                                        error={errors.confirmPassword?.message}
                                    />
                                )}
                            />    
                        </View> 

                        <Pressable style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin}>CADASTRAR</Text>
                                <Ionicons name="arrow-forward-outline" size={22} style={{color: 'white'}}/>
                        </Pressable> 
                        
                        <View style={styles.containerCriarConta}>
                            <Text style={styles.titleCriarConta}>Já tem uma conta?</Text>
                            <Pressable style={styles.btnCriarConta} onPress={handleSignin}>
                                <Text style={styles.textBtnCriarConta}>Entrar</Text>
                            </Pressable>
                        </View>  
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}