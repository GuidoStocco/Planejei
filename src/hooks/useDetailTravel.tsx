import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router"
import { Travel, travelService } from "../services/travel-service";
import { ca } from "zod/v4/locales";
import { Alert } from "react-native";




export default function useDetailTravel() {
    const [travel, setTravel] = useState<null | Travel>(null);
    const {id} = useLocalSearchParams<{id: string}>()   
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {

        const fetchData = async () => {
            try{        
                setLoading(true);

                const data = await travelService.getTravelById(id);
                setTravel(data);
                setLoading(false);

            }catch(error){
                console.log("Error fetching travel details:", error);
                setLoading(false);
            }
        }

        fetchData();

    }, [id]);

    const onDelete = async (travel_id: string) => {
        try{
            await travelService.deleteTravel(travel_id);
            router.replace("/(painel)/home/page");
        }catch(error){
            console.log("Error deleting travel:", error);
        }
    }

    const handleDelete = async () => {
        Alert.alert("Excluir viagem", "Tem certeza que deseja excluir esta viagem?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Excluir", onPress: async () => onDelete(id) , style: "destructive" }
        ]);
    }

    
    return{
        loading,
        travel,
        handleDelete
    }
}