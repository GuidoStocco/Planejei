import { View, Text } from "react-native";
import SigninScreen from "../../../screens/signin";
import { useSignin } from "@/src/hooks/useSignin";



export default function SignIn(){

    const {control, errors, handleSubmit, isSubmitting} = useSignin();

    return(
        <SigninScreen
            control={control} errors={errors} handleSubmit={handleSubmit} isSubmitting={isSubmitting}
        />
    )
}