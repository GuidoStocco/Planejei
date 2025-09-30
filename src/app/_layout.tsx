import { Stack, router} from "expo-router";
import { useEffect } from "react";


export default function RootLayout() {

  

  useEffect(() => {
      const signed = false;

      if(!signed){
        router.replace('/(auth)/signin/page')
        return;
      }

      // router.replace('/(painel)/home/page')

  }, [])


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
