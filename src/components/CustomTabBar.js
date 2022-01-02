import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";


import HomeIcon from "../../assets/home.svg"
import ProfileIcon from "../../assets/account.svg"
import TrainingIcon from "../../assets/training.svg"




export default ({ state, navigation }) => {

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }


  return <View style={estyle.tabArea}>
    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Home")}>
      <HomeIcon width="24" height="24" />
    </TouchableOpacity>

    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Programme")}>
      <TrainingIcon width="40" height="40" />
    </TouchableOpacity>

    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Profile")}>
      <ProfileIcon width="24" height="24" />
    </TouchableOpacity>

  </View>
}

const estyle = StyleSheet.create({
  tabArea: {
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 30,

    elevation: 16,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

})