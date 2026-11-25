import { Tabs } from 'expo-router';
import { CustomTabBar } from '../../components/customTabBar';

export default function PainelLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="home/page" options={{ title: 'Início' }} />
      <Tabs.Screen name="map/page" options={{ title: 'Roteiro IA' }} />
      <Tabs.Screen name="perfil/page" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}