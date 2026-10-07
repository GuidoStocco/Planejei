import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";




export default function RootLayout() {
    return (
        <SafeAreaProvider>
                <StatusBar backgroundColor="#0000ff" barStyle="light-content" />
                <Stack screenOptions={{ headerShown: false }}/>      
        </SafeAreaProvider>
    );
}