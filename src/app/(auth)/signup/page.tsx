import { Text, View } from "react-native";
import { SignUpScreen } from "@/src/screens/signup";
import useSignUp from "@/src/hooks/useSignUp";


export  default function SignUp() {

    const {onSubmit, control, handleSubmit, errors, isSubmitting} = useSignUp();

    return(
        <SignUpScreen
            onSubmit={onSubmit}
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
        />
    )
}