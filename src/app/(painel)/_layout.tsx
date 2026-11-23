import {Tabs} from "expo-router";



export default function PainelLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home/page" options={{ headerShown: false }} />
            <Tabs.Screen name="map/page" options={{ headerShown: false }} />
            <Tabs.Screen name="perfil/page" options={{ headerShown: false }} />
        </Tabs>
    )
}