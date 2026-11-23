import {z} from 'zod';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { authService } from '../services/authServices';


const SigninSchema = z.object({
    email: z.string().nonempty('Email precisa ser válido'),
    password: z.string().min(6, 'A senha precisa ter 6 caracteres')
});



export type SigninFormData = z.infer<typeof SigninSchema>


export const useSignin = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{errors, isSubmitting}} = useForm<SigninFormData>({
        resolver: zodResolver(SigninSchema)
    })


    const onSubmit = async( data: SigninFormData) => {
        try {
            await authService.signin({
                email: data.email,
                password: data.password,
            });
            router.replace('/(painel)/home/page');
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Erro ao fazer login';
            Alert.alert('Erro', message);
        }
    }


    const handleSignup = () => {
        router.push('/(auth)/signup/page');
    };

    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        handleSignup,
        onSubmit
    }
}