import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from "react-native"

import ex1 from "../../assets/ex1.jpg"
import ex2 from "../../assets/ex2.jpg"
import ex3 from "../../assets/ex3.jpg"
import ex4 from "../../assets/ex4.jpg"


export default function RandomExercice() {
  return <>
    <Text style={estyle.title}>Les plus populiares</Text>
    <View style={estyle.boxContainer}>
      <View style={estyle.box} >
        <View style={estyle.inner} >
          <Image source={ex1} style={estyle.image} />
          <View style={estyle.exerciceNameContainer}>
            <Text style={estyle.exerciceName}>Lower body</Text>
            <Text style={estyle.exerciceName}>Exercice</Text>
          </View>
        </View>
      </View>

      <View style={estyle.box} >
        <View style={estyle.inner} >
          <Image source={ex2} style={estyle.image} />
          <View style={estyle.exerciceNameContainer}>
            <Text style={estyle.exerciceName}>Aerodinamika</Text>
            <Text style={estyle.exerciceName}>Fitness</Text>
          </View>
        </View>
      </View>

      <View style={estyle.box} >
        <View style={estyle.inner} >
          <Image source={ex3} style={estyle.image} />
          <View style={estyle.exerciceNameContainer}>
            <Text style={estyle.exerciceName}>Dumbel Jumping</Text>
            <Text style={estyle.exerciceName}>Jampang</Text>
          </View>
        </View>
      </View>

      <View style={estyle.box} >
        <View style={estyle.inner} >
          <Image source={ex4} style={estyle.image} />
          <View style={estyle.exerciceNameContainer}>
            <Text style={estyle.exerciceName}>Rubber Hold</Text>
            <Text style={estyle.exerciceName}>Squat Up</Text>
          </View>
        </View>
      </View>

    </View>
  </>
}

const estyle = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: 600,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    paddingBottom: 15
  },

  box: {
    width: "48%",
    height: "43%",
    paddingBottom: "4%"

  },
  box2: {
    width: "48%",
    height: "43%",
  },
  inner: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 18,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    resizeMode: "cover",
  },
  exerciceNameContainer: {
    position: "absolute",
    top: "80%",
  },
  exerciceName: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 10
  },
  space: {
    width: "100%",
    height: 40,
    backgroundColor: "yellow"
  }



})