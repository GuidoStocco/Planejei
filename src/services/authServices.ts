import { supabase } from "./supabase";


type SigninInput = {
    email: string;
    password: string;
}

type SignupInput = {
    name: string;
    email: string;
    password: string;
}



export const authService = {

    signin: async({email, password}: SigninInput) => {
        const {data, error} = await supabase.auth.signInWithPassword({email, password})

        if(error){
            throw error;
        }

        return data;
    },


    signup: async({name, email, password}: SignupInput) => {
        const {data, error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name },
            },
        })

        if(error){
            throw error;
        }

        return data;
    },


    signOut: async() => {
        const {error} = await supabase.auth.signOut()

        if(error){
            throw error;
        }

    }
}