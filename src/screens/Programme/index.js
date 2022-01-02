import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, RefreshControl, ScrollView } from 'react-native';
import estyle from "./style"

import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem";



export default () => {

  const [programmes, setProgramme] = useState([])



  const getProgramme = async () => {
    let response = await Api.getUserProgramme();
    if (!response.message) {
      setProgramme(response)
    } else {
      console.log(response.message)
    }

  }

  useEffect(() => {
    getProgramme()
  }, [])



  return (
    <SafeAreaView style={estyle.container}>
      <ScrollView>
        <View style={estyle.listArea}>
          {programmes.map((item, k) => (
            <ProgrammeItem key={k} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};