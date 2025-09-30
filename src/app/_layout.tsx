import { Stack, router} from "expo-router";
import { useEffect } from "react";
import { supabase } from "../config/supabase";

export default function RootLayout() {

  useEffect(() => {

    supabase.auth.onAuthStateChange((event, session) => {

    if(session){
      console.log('session exists')
      router.replace('/(painel)/home/page')
      return;
    }

    console.log('no session')
    router.replace('/(auth)/signin/page')

  });

  }, []);


  return(
    <Stack>
      <Stack.Screen name="index" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name='(auth)'
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='(painel)'
        options={{ headerShown: false }}
      />

    </Stack>
  );
}
