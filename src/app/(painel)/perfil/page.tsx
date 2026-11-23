import PerfilScreen from "../../../screens/perfil";
import { useSignout } from "@/src/hooks/useSignout";

export default function Perfil(){

    const {handleSignout, isLoading} = useSignout();

    return(
        <PerfilScreen 
            handleSignout={handleSignout}
            isLoading={isLoading}
        />
    )
}