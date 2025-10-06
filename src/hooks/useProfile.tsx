import { router } from "expo-router";
import { authService } from "../services/auth-service"


export const useProfile = () => {

    const logoOut = async () => {
        await authService.signOut();

        router.replace("/(auth)/signin/page");
    }

    return{
        logoOut
    }

}


export default useProfile;