import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";


import HomeIcon from "../../assets/home.svg"
import ProfileIcon from "../../assets/account.svg"



export default ({ state, navigation }) => {

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }


  return <View style={estyle.tabArea}>
    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Home")}>
      <HomeIcon width="24" height="24" />
    </TouchableOpacity>

    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Programme")}>
      <HomeIcon width="24" height="24" />
    </TouchableOpacity>

    <TouchableOpacity style={estyle.tabItem} onPress={() => goTo("Profile")}>
      <ProfileIcon width="24" height="24" />
    </TouchableOpacity>

  </View>
}

const estyle = StyleSheet.create({
  tabArea: {
    height: 60,
    backgroundColor: "green",
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

})