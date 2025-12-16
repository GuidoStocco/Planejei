import useDetailTravel from "@/src/hooks/useDetailTravel"
import useReminders from "@/src/hooks/useReminders";
import DetailScreen from "@/src/screens/travel/detail"



export default function DetailTravel(){
    const {loading, travel, handleDelete} = useDetailTravel();
    const remindersHook = useReminders();

    return(
        <DetailScreen loading={loading} travel={travel} handleDelete={handleDelete} 
        remindersHook={remindersHook}
        />
    )
}