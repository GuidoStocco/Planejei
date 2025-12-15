import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router"
import { Travel, travelService } from "../services/travel-service";




export default function useDetailTravel() {
    const [travel, setTravel] = useState<null | Travel>(null);
    const {id} = useLocalSearchParams<{id: string}>()   
    const [loading, setLoading] = useState(true);

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

    
    return{
        loading,
        travel
    }
}