import { supabase } from "../config/supabase";

interface CreateReminderPayload {
    travel_id: string;
    description: string;
}

export type Reminder = {
    id: string;
    travel_id: string;
    description: string;
    created_at: string;
}


export const remindersService = {

    getReminders: async (travel_id: string): Promise<Reminder[]> => {
        const {data, error} = await supabase.from('reminders').select('*')
        .eq('travel_id', travel_id).order('created_at', {ascending: true});

        if(error){
            throw error;
        }

        return data;
    },


    create: async (payload: CreateReminderPayload) =>{
        const {data, error} = await supabase.from('reminders').insert([payload])

        if(error){
            throw error;
        }
    },


    delete: async (remenders_id: string) => {
        const {data, error} = await supabase.from('reminders').delete().eq('id', remenders_id);

        if(error){
            throw error;
        }
    }
}