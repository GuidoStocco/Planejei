import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { View, Text } from 'react-native';
import { use } from 'react';
import { supabase } from '../config/supabase';
import { useEffect, useState } from 'react';

const travelSchema = z.object({
    title: z.string().min(1, 'O objetivo da viagem é obrigatório'),
    city: z.string().min(1, 'A cidade é obrigatória'),
    hotel_address: z.string().min(1, 'O endereço do hotel é obrigatório'),
    start_date: z.string().min(1, 'A data de início é obrigatória'),
    end_date: z.string().min(1, 'A data de término é obrigatória'),
})

export type TravelFormData = z.infer<typeof travelSchema>;

const useCreateTravel = () => {

    const [userId, setUserId] = useState<string | null>(null);

    const {control, handleSubmit, formState:{errors, isSubmitting}} = useForm<TravelFormData>({
        resolver: zodResolver(travelSchema)
    })

    useEffect(() => {

        const fetchUser = async () => {
            const {data} = await supabase.auth.getUser();
            
            setUserId(data?.user?.id || null);
        }

        fetchUser();

    }, [])

    const createNewTravel = async (data: TravelFormData) => {



    }

    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        createNewTravel
    };

}



export default useCreateTravel;