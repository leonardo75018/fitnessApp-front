import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';


import estyle from "./style"
import menuIcon from '../../../assets/menu.png'
import SearchBar from "../../components/SearchBar";
import RandomExercice from "../../components/RandomExercice";


export default () => {
  return (
    <SafeAreaView style={estyle.container} >
      <StatusBar />
      <ScrollView style={estyle.listArea}>
        <View style={estyle.menuArear}>
          <Image style={estyle.menulogo} source={menuIcon} />
        </View>

        <View style={estyle.welcomeSection}>
          <Text style={estyle.welcome}>Bienvenue</Text>
          <Text style={estyle.userName}>Léo Kabongo</Text>
        </View>

        <SearchBar />
        <RandomExercice />
      </ScrollView>
    </SafeAreaView>
  )
}

