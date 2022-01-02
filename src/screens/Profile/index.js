import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import estyle from "./style"

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    Api.logout();
    navigation.reset({
      routes: [{ name: "SignIn" }]
    });
  }



  return <SafeAreaView >
    <TouchableOpacity onPress={handleLogout}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  </SafeAreaView>
};