import useDetailTravel from "@/src/hooks/useDetailTravel"
import DetailScreen from "@/src/screens/travel/detail"



export default function DetailTravel(){
    const {loading, travel} = useDetailTravel();

    return(
        <DetailScreen loading={loading} travel={travel}/>
    )
}