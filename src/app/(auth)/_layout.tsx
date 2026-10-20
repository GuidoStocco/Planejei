import { Stack } from "expo-router";





export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="welcome/page" options={{ headerShown: false }} />
            <Stack.Screen name="signin/page" options={{ headerShown: false }} />
            <Stack.Screen name="signup/page" options={{ headerShown: false }} />
        </Stack>
    );
}