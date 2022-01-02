import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, RefreshControl, ScrollView, Image } from 'react-native';
import estyle from "./style"

import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem";
import ProgrammeIgm from "../../../assets/programme.jpg"



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
        <View style={estyle.fakeSwiper}>
          <Image style={estyle.fakeSwiperImg} source={ProgrammeIgm} />
        </View>

        <View style={estyle.programme}>
          <View style={estyle.programmeInfos}>
            <Text style={estyle.programmeInfosTitle}>Programmes</Text>
            <Text style={estyle.programmeInfosDescriptions}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>

          {programmes.map((item, k) => (
            <ProgrammeItem key={k} data={item} description="En cours" redirect="Weeks" />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};