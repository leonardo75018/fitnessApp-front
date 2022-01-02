import { StyleSheet, Text, View, } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default function App() {
  return (
    <UserContextProvider >
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}



