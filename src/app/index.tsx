import { View, ActivityIndicator } from 'react-native';

export default function Index() {
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F172A' }}>
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
}