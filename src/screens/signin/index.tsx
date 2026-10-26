import { View, Text, StatusBar, KeyboardAvoidingView, Platform, Pressable} from "react-native";
import { styles } from "@/src/styles/signinStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import InputAuth from "@/src/components/inputAuth";
import { SigninFormData } from "@/src/hooks/useSignin";

interface SigninScreenProps {
    control: Control<SigninFormData>;
    handleSubmit: UseFormHandleSubmit<SigninFormData>;
    errors: FieldErrors<SigninFormData>;
    isSubmitting: boolean;
    handleSignup: () => void;
}



export default function SigninScreen({control, errors, handleSubmit, isSubmitting, handleSignup}: SigninScreenProps){
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <LinearGradient
                    colors={['#4DB6AC', 'transparent']} 
                    start={{ x: 1, y: 0.3 }} // Começa na ponta extrema direita (1, 0)
                    end={{ x: 0, y: 1 }}   // Termina no canto inferior esquerdo do quadrado (0, 1)
                    style={styles.topRightGradient}
                />

                <LinearGradient
                    colors={['rgba(23, 131, 120, 0.8)', 'transparent']} 
                    start={{ x: 0, y: 1 }} // Começa na ponta extrema esquerda em baixo (0, 1)
                    end={{ x: 1, y: 0.2 }}   // Termina no canto superior direito do quadrado (1, 0)
                    style={styles.bottomLeftGradient}
                />

                <View style={styles.box1}>
                    <View style={styles.containerIcon}>
                        <Ionicons name='airplane-outline' size={26}/>
                    </View>
                    <Text style={styles.box1Title}>Continue sua Jornada</Text>
                    <Text style={styles.box1SubTitle}>Sua próxima aventura está esperando por você</Text>
                </View>

                <View style={styles.box2}>
                    <View style={styles.containerBox2}>
                        <View style={{paddingTop: 40, paddingBottom: 20}}>
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

                        <View >
                            <Controller
                                control={control}
                                name="password"
                                render={({field:{onBlur, onChange, value}}) => (
                                    <InputAuth
                                        label="SENHA"
                                        placeholder="**********"
                                        icon='lock-closed'
                                        autoCapitalize="none"
                                        keyboardType="email-address"         
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry
                                        error={errors.password?.message}
                                    />
                                )}
                            />    
                        </View>

                        <Pressable style={styles.forgotPassword}>
                                <Text style={styles.textPassword}>Esqueceu a senha?</Text>
                        </Pressable>  

                        <Pressable style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin}>ENTRAR</Text>
                                <Ionicons name="arrow-forward-outline" size={22} style={{color: 'white'}}/>
                        </Pressable> 

                        <View style={styles.containerContinue}>
                            <View style={styles.continueBox1}/>
                            <Text style={styles.titleContinue}>OU CONTINUE COM</Text>
                            <View style={styles.continueBox1}/>
                        </View>

                    </View>
                </View>

                <View style={styles.box3}>
                        <View style={styles.containerGoogle}>
                            <Ionicons name="person" size={20} style={styles.iconGoogle}/>
                            <Text style={styles.textGoogle}>Google</Text>    
                        </View>      

                        <View style={styles.containerCriarConta}>
                            <Text style={styles.titleCriarConta}>Não tem uma conta?</Text>
                            <Pressable style={styles.btnCriarConta} onPress={handleSignup}>
                                <Text style={styles.textBtnCriarConta}>Criar conta</Text>
                            </Pressable>
                        </View>  
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}