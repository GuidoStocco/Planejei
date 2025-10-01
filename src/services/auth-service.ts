import { supabase } from "./../config/supabase";


export const authService ={

    signUp: async(email: string, password: string, username: string) => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if(error){
            throw error;
        }

        return data;

    }

}