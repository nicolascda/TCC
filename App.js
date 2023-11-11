import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"grey"} barStyle={"light-content"} translucent={true}/>
    </NavigationContainer>
  );
}


