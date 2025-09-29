import { Stack } from "expo-router";

export default function PainelLayout() {
    return(
        <Stack>
            <Stack.Screen 
                name="home/page"
                options={{ headerShown: false }}
            />               
        </Stack>
    )
}