import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"

import NextIcon from "../../assets/next.png"


export default ({ data, description, redirect }) => {

  const navigation = useNavigation()

  const handleClik = () => {
    navigation.navigate(`${redirect}`, {
      id: data.id
    })

  }



  return (
    <>
      <TouchableOpacity style={estyle.area} onPress={handleClik}>
        <View style={estyle.backDrop}></View>
        <View style={estyle.infoArea}>
          <Text style={estyle.infoText}>{data.name}</Text>
          <Text>{description}</Text>
          <View style={estyle.goWeekBtn}>
            <View style={estyle.weekBtnText}></View>
          </View>
        </View>
        <View style={estyle.nextIconContainer}>
          <Image source={NextIcon} style={estyle.nextIcon} />
        </View>
      </TouchableOpacity>

    </>

  )

}

const estyle = StyleSheet.create({
  area: {
    width: "100%",
    height: "auto",
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20

  },
  backDrop: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#C4C4C4"
  },
  infoArea: {
    marginRight: 105,
  },
  infoText: {
    fontWeight: "500",
    fontSize: 17

  },
  goWeekBtn: {

  },
  weekBtnText: {

  },
  nextIconContainer: {
    width: 30,
    height: 30,

  },
  nextIcon: {
    width: "100%",
    height: "100%",

  }

})