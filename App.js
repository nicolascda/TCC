import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"grey"} barStyle={"light-content"} translucent={true}/>
      <Routes/>
    </NavigationContainer>
  );
}


