import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"

import estyle from "./style"
import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem"
import ProgrammeIgm from "../../../assets/programme.jpg"
import BackIcon from "../../../assets/back.svg";

export default () => {
  const navigation = useNavigation();

  const route = useRoute();

  const programmeId = route.params.id

  const [Weeks, SetWeeks] = useState([])

  const getWeeks = async () => {
    let response = await Api.getProgrammeWeeks(programmeId);
    if (!response.message) {
      SetWeeks(response)
    } else {
      console.log(response.message)
    }
  }

  useEffect(() => {
    getWeeks()
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

        <View style={estyle.programme}>
          {Weeks.map((item, k) => (
            <ProgrammeItem key={k} data={item} description="Voir tous les détails" redirect="Sessions" />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={estyle.back} onPress={handleBackBtn}>
        <BackIcon width="44" height="44" fill="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
};