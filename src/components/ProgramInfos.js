import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default ({ name, description }) => {
  return (
    <View style={estyle.programmeInfos}>
      <Text style={estyle.programmeInfosTitle}>{name}</Text>
      <Text style={estyle.programmeInfosDescriptions}>{description}</Text>
    </View>
  )
}


const estyle = StyleSheet.create({
  programmeInfos: {
    marginBottom: 30,
  },
  programmeInfosTitle: {
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 10
  },
  programmeInfosDescriptions: {
    fontWeight: "500",
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.52)"
  },
})