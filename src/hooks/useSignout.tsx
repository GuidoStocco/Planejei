import { useState } from "react";
import { authService } from "../services/authServices";
import { Alert } from "react-native";




export const useSignout = () => {
    const [isLoading, setIsLoading] = useState(false)

    const executeSignout = async () => {
        try{
            setIsLoading(true);
            await authService.signOut();
        }catch(error){
            const message = error instanceof Error ? error.message : 'Error ao sair da conta';
            Alert.alert('Error', message);
        }finally{   
            setIsLoading(false)
        }
    }

    const handleSignout = () => {
        Alert.alert(
            'Sair do Planejei',
            'Tem certeza que deseja encerrar sua sessão?',
            [
                {text:'Cancelar', style: 'cancel'},
                {text: 'Sair', style: 'destructive', onPress: executeSignout},
                
            ]
        );
    };

    return{
        handleSignout,
        isLoading
    }

}