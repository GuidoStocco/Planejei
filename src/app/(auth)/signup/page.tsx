import { useSignup } from "@/src/hooks/useSignup";
import SignupScreen from "../../../screens/signup";



export default function Signup(){

    const {control, errors, handleSignin, handleSubmit, isSubmitting, onSubmit} = useSignup();

    return(
        <SignupScreen 
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            handleSignin={handleSignin}
            onSubmit={onSubmit}
        />
    )
}