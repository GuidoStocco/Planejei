
import { Text, View, } from "react-native";
import {SignInScreen} from "../../../screens/signin/index";
import useSignIn from "@/src/hooks/useSignIn";



export  default function SignIn() {

    const {control, 
        handleSubmit,
        errors,
        isSubmitting, onSubmit} = useSignIn();

    return(     
        <SignInScreen 
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
        />
    )
}