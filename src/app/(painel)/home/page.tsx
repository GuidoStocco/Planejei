import HomeScreen from "@/src/screens/home";
import useTravelList from "@/src/hooks/useTravelList";

export  default function Home() {

    const {travels, loading} = useTravelList()

    return(
        <HomeScreen/>
    )
}