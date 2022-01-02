import React from "react";
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from "../screens/Preload/index";
import SingIn from "../screens/SignIn/index";
import SignUp from "../screens/SignUp/index";

import MainTab from "./MainTab.js";
import Weeks from "../screens/Weeks/";



const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SingIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Weeks" component={Weeks} />


  </Stack.Navigator>
);

