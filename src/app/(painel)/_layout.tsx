import {Tabs} from "expo-router";



export default function PainelLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home/page" options={{ headerShown: false }} />
        </Tabs>
    )
}