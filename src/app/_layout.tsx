import { Stack, useSegments, router } from "expo-router";
import { StatusBar } from "react-native";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { supabase } from "../services/supabase";


const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 1000 * 60 * 5,
            retry: 1
        }
    }
});

export default function RootLayout() {

    const {session, isLoading, setAuth} = useAuthStore();
    const segments = useSegments();
    // const session = useAuthStore((state) => state.session);
    // const isLoading = useAuthStore((state) => state.isLoading);
    // const setAuth = useAuthStore((state) => state.setAuth);

    useEffect(() => {

        const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
            setAuth(session)

            if(event === 'SIGNED_OUT'){
                queryClient.clear();
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    },[])

    //Redirecionamento automático
    useEffect(() => {

        if(isLoading) return;

        const inPainelGroup = segments[0] === "(painel)";
        const inAuthGroup = segments[0] === "(auth)";

        if (session && !inPainelGroup) {
            // Logado e fora do painel (seja no index ou em auth) -> vai pra Home
            router.replace("/(painel)/home/page");
          } else if (!session && !inAuthGroup) {
            // Deslogado e fora do auth (seja no index ou no painel) -> vai pro Welcome
            router.replace("/(auth)/welcome/page");
          }

    }, [isLoading, session, setAuth])



    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent/>
            <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
    );
}