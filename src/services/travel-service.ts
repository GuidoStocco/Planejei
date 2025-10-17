import { supabase } from "../config/supabase"


export type CreateTravelPayload = {
    title: string;
    city: string;
    hotel_address: string;
    start_date: string;
    end_date: string;
}


export const travelService = {

    createTravel: async (payload: CreateTravelPayload, user_id: string) => {
        const {data, error} = await supabase.from('travels').insert([{
            ...payload,
            user_id
        }])

        if (error) {
            throw error
        }
        return data
    }

}


