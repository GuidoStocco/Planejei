import { supabase } from "../config/supabase";

interface CreateReminderPayload {
    travel_id: string;
    description: string;
}


export const remindersService = {
    create: async (payload: CreateReminderPayload) =>{
        const {data, error} = await supabase.from('reminders').insert([payload])

        if(error){
            throw error;
        }
    }
}