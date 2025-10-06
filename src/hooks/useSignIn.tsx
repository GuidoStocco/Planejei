import { authService } from "../services/auth-service"; 
import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";


 const signInSchema = z.object({
        email: z.string().min(1, 'O e-mail é obrigatório').email('Digite um e-mail inválido'),
        password: z.string().min(1, 'A senha é obrigatória')
    })


    export type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
     
        const {
            control,
            handleSubmit,
            formState: {errors, isSubmitting}
        } = useForm<SignInFormData>({
            resolver: zodResolver(signInSchema)
        })
    

    const onSubmit = async (data: SignInFormData) => {

        try {
            
            await authService.signIn(data.email, data.password);

            router.replace('/(painel)/home/page')

        } catch (error) {
            console.log(error);
        }

    }

    return{
        onSubmit,
        control,
        handleSubmit,
        errors,
        isSubmitting
    };
}


export default useSignIn;