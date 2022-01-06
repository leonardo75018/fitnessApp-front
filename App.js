import { StyleSheet, Text, View, } from 'react-native';
import "react-native-gesture-handler";
import { Provider } from "react-redux"
import { NavigationContainer } from '@react-navigation/native';


import generateStore from "./src/redux/store"

import MainStack from './src/stacks/MainStack';

export default function App() {
  const store = generateStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>

  );
}



