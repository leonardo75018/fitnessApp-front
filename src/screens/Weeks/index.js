import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const programmeId = route.params.id

  const getSeances = async () => {
    let response = await Api.getSeancesProgramme(programmeId);
    if (!response.message) {
      console.log(response)
    } else {
      console.log(response.message)
    }

  }

  useEffect(() => {
    getSeances()
  }, [])









  return <SafeAreaView >
    <Text>Weeks</Text>
  </SafeAreaView>
};