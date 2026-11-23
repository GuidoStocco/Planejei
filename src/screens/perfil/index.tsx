import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useAuthStore } from "@/src/store/useAuthStore";


interface PerfilScreenProps{
    handleSignout:() => void;
    isLoading:boolean;
}


export default function PerfilScreen({handleSignout, isLoading}:PerfilScreenProps){

    const user = useAuthStore((state) => state.user);

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Text>Olá, {user?.user_metadata?.name ?? 'Viajante'}</Text>
            <Pressable
                onPress={handleSignout}
                disabled={isLoading}
                style={{
                backgroundColor: '#EF4444',
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderRadius: 8,
                opacity: isLoading ? 0.6 : 1,
                }}
            >
                {isLoading ? (
                <ActivityIndicator color="#FFF" />
                ) : (
                <Text style={{ color: '#FFF', fontWeight: '700' }}>Sair da conta</Text>
                )}
            </Pressable>
    </View>
    )
}