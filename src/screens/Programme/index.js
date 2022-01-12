import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, RefreshControl, ScrollView, Image, } from 'react-native';
import estyle from "./style"

import Api from "../../Api";
import ProgrammeItem from "../../components/ProgrammeItem";
import ProgrammeInfos from "../../components/ProgramInfos";
import PrgrammeImage from "../../../assets/masse.jpg"


import PlanIgm from "../../../assets/plan.jpg";


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
          <Image style={estyle.fakeSwiperImg} source={PlanIgm} />
        </View>
        <View style={estyle.programme}>
          <ProgrammeInfos name="Programmes" description="Tu trouveras ici la liste de tous tes programmes. Les programmes à venir ainsi que les programmes finis." />
          {programmes.map((item, k) => (
            <ProgrammeItem key={k} data={item} description="En cours" redirect="Weeks" image={PrgrammeImage} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};