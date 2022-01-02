import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"


import estyle from "./style"
import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem"
import ProgrammeIgm from "../../../assets/programme.jpg"


export default () => {
  const navigation = useNavigation();

  const route = useRoute();

  const weekId = route.params.id
  const [seances, SetSeances] = useState([])
  console.log(seances)


  const getSeances = async () => {
    let response = await Api.getSeancesProgramme(weekId);
    if (!response.message) {
      SetSeances(response)
    } else {
      console.log(response.message)
    }
  }

  useEffect(() => {
    getSeances()
  }, [])

  return (
    <SafeAreaView style={estyle.container}>
      <ScrollView>
        <View style={estyle.fakeSwiper}>
          <Image style={estyle.fakeSwiperImg} source={ProgrammeIgm} />
        </View>
        <View style={estyle.programme}  >

          {seances.map((item, k) => (
            <ProgrammeItem key={k} data={item} description="Voir tous les détails" redirect="" />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};