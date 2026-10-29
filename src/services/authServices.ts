import { supabase } from "./supabase";
import { SignupFormData } from "../hooks/useSignup";
import { SigninFormData } from "../hooks/useSignin";




export const authService = {

    signin: async({email, password}: SigninFormData) => {
        const {} = await supabase.auth.signInWithPassword({email, password})
    },


    signup: async({name, email, password}: SignupFormData) => {
        const {data, error} = await supabase.auth.signUp({email, password})

        if(error){
            throw error;
        }

        return data;
    },


    logout: () => {
        
    }
}