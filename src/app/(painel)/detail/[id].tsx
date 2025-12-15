import useDetailTravel from "@/src/hooks/useDetailTravel"
import DetailScreen from "@/src/screens/travel/detail"



export default function DetailTravel(){
    const {loading, travel, handleDelete} = useDetailTravel();

    return(
        <DetailScreen loading={loading} travel={travel} handleDelete={handleDelete}/>
    )
}