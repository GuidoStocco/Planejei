import {z} from 'zod';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router';


const SignupSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z.string().email('Email precisa ser válido'),
    password: z.string().min(6, 'A senha precisa ter 6 caracteres'),
    confirmPassword: z.string().nonempty('Confirme a senha'),
}).refine((data) => data.password === data.confirmPassword,{
    path: ['confirmPassword'],
    message: 'As senhas não coincidem'
});



export type SignupFormData = z.infer<typeof SignupSchema>


export const useSignup = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{errors, isSubmitting}} = useForm<SignupFormData>({
        resolver: zodResolver(SignupSchema)
    })


    const onSubmit = () => {

    }


    const handleSignin = () => {
        router.push('/(auth)/signin/page');
    };

    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        handleSignin,
    }
}