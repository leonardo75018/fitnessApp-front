import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"


import estyle from "./style"
import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem"
import SessionsInfons from "../../components/ProgramInfos"


import ProgrammeIgm from "../../../assets/programme.jpg"
import BackIcon from "../../../assets/back.svg";



export default () => {
  const navigation = useNavigation();

  const route = useRoute();

  const weekId = route.params.id
  const [seances, SetSeances] = useState([])


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

  const handleBackBtn = () => {
    navigation.goBack()
  }


  return (
    <SafeAreaView style={estyle.container}>
      <ScrollView>
        <View style={estyle.fakeSwiper}>
          <Image style={estyle.fakeSwiperImg} source={ProgrammeIgm} />
        </View>
        <View style={estyle.programme}  >
          <SessionsInfons name="Séances" description="" />
          {seances.map((item, k) => (
            <ProgrammeItem key={k} data={item} description="Voir tous les détails" redirect="Exercices" />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={estyle.back} onPress={handleBackBtn}>
        <BackIcon width="44" height="44" fill="#ffffff" />
      </TouchableOpacity>

    </SafeAreaView>
  )
};