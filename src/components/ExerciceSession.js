import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"

import NextIcon from "../../assets/next.png"


export default ({ data, handleChangeExercice }) => {



  const handleClik = (videoUrl) => {
    handleChangeExercice(videoUrl)

  }

  return (
    <>
      <TouchableOpacity style={estyle.area} onPress={() => handleClik(data.videoUrl)}>
        <View style={estyle.backDrop}></View>
        <View style={estyle.infoArea}>
          <Text style={estyle.infoText}>{data.name}</Text>
          <Text style={estyle.infoTextDetail} >Réries: 4 Répetitions: 10</Text>
        </View>
      </TouchableOpacity>

    </>
  )

}

const estyle = StyleSheet.create({
  area: {
    width: "100%",
    height: "auto",
    backgroundColor: "#4F1F77",
    borderRadius: 5,
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
    fontSize: 17,
    color: "white"

  },
  infoTextDetail: {
    color: "white"

  }


})