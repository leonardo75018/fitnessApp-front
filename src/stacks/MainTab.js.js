import React from "react";
import { createBottomTabNavigator, NavigationContainer } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home/"
import Programme from "../screens/Programme/"
import Profile from "../screens/Profile/"

import CustomTabBar from "../components/CustomTabBar"


const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Programme"
        component={Programme}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}
