import { useLocalSearchParams } from "expo-router";
import {useState, useEffect} from "react";
import { Reminder, remindersService } from "../services/reminders-service";
import { set } from "date-fns";
import { ca } from "zod/v4/locales";



const useReminders = () => {

    const {id} = useLocalSearchParams<{id: string}>() 
    const [reminders, setReminders] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [remindersList, setRemindersList] = useState<Reminder[]>([])

    const fetchReminders = async (travel_id: string) => {
        setLoading(true);
        try{
            const data = await remindersService.getReminders(travel_id)
            setRemindersList(data);
            setLoading(false);
        }catch(error){
            setLoading(false);
            console.log("Erro ao buscar lembretes:", error);
        }
    }


    const addReminder = async () => {
        // lógica para adicionar lembrete
        if(!reminders.trim()) return;

        try{
            await remindersService.create({
                travel_id: id,
                description: reminders
            })
            setReminders("")
            fetchReminders(id)

        }catch(error){
            console.log("Erro ao adicionar lembrete:", error);
        }
    }

    useEffect(() => {
        if(!id) return;
        fetchReminders(id)

    },[id])

    const deleteReminder = async (reminder_id:string) => {
        try{
            if(!reminder_id) return;

            await remindersService.delete(reminder_id);
            await fetchReminders(id);
            

        }catch(err){
            console.log("Erro ao deletar lembrete:", err);
        }
    }

    return{
        reminders,
        setReminders,
        loading,
        addReminder,
        remindersList,
        deleteReminder
    }
}


export default useReminders;