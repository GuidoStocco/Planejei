import { useLocalSearchParams } from "expo-router";
import {useState} from "react";
import { remindersService } from "../services/reminders-service";



const useReminders = () => {

    const {id} = useLocalSearchParams<{id: string}>() 
    const [reminders, setReminders] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const addReminder = async () => {
        // lógica para adicionar lembrete
        if(!reminders.trim()) return;

        try{
            await remindersService.create({
                travel_id: id,
                description: reminders.trim()
            })


        }catch(error){
            console.log("Erro ao adicionar lembrete:", error);
        }
    }

    return{
        reminders,
        setReminders,
        loading,
        addReminder
    }
}


export default useReminders;