import { View, Text, StatusBar, KeyboardAvoidingView, Platform} from "react-native";
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
}



export default function SigninScreen({control, errors, handleSubmit, isSubmitting}: SigninScreenProps){
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <LinearGradient
                    colors={['rgba(25, 77, 51, 0.4)', 'transparent']} 
                    start={{ x: 1, y: 0.3 }} // Começa na ponta extrema direita (1, 0)
                    end={{ x: 0, y: 1 }}   // Termina no canto inferior esquerdo do quadrado (0, 1)
                    style={styles.topRightGradient}
                />

                <LinearGradient
                    colors={['rgba(2, 83, 75, 0.8)', 'transparent']} 
                    start={{ x: 0, y: 1 }} // Começa na ponta extrema esquerda em baixo (0, 1)
                    end={{ x: 1, y: 0.2 }}   // Termina no canto superior direito do quadrado (1, 0)
                    style={styles.bottomLeftGradient}
                />

                <View style={styles.box1}>
                    <View style={styles.containerIcon}>
                        <Ionicons name='airplane-outline' size={24}/>
                    </View>
                    <Text style={styles.box1Title}>Continue sua Jornada</Text>
                    <Text style={styles.box1SubTitle}>Sua próxima aventura está esperando por você</Text>
                </View>

                <View style={styles.box2}>
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

                <View style={styles.box3}>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}