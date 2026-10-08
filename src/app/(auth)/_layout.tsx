import { Stack } from "expo-router";





export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="screen/page" options={{ headerShown: false }} />
            <Stack.Screen name="signin/page" options={{ headerShown: false }} />
            <Stack.Screen name="signup/page" options={{ headerShown: false }} />
        </Stack>
    );
}