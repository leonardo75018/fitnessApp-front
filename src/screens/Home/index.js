import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import { getUserDataLogin } from "../../redux/userDuck"


import estyle from "./style"
import menuIcon from '../../../assets/menu.png'
import SearchBar from "../../components/SearchBar";
import RandomExercice from "../../components/RandomExercice";


export default () => {
  const [userData, setUserData] = useState({})


  //Déclancher une action du Reducer 
  const dispatch = useDispatch()

  const handleGeUserData = () => {
    dispatch(getUserDataLogin())
  }

  useEffect(() => {
    handleGeUserData()
  }, [])

  //Lire notre state 
  const data = useSelector(state => state.userData)
  console.log()

  return (
    <SafeAreaView style={estyle.container} >
      <StatusBar />
      <ScrollView style={estyle.listArea}>
        <View style={estyle.menuArear}>
          <Image style={estyle.menulogo} source={menuIcon} />
        </View>

        <View style={estyle.welcomeSection}>
          <Text style={estyle.welcome}>Bienvenue</Text>
          <Text style={estyle.userName}>{data.firstName} {data.lastName}</Text>
        </View>

        <SearchBar />
        <RandomExercice />
      </ScrollView>
    </SafeAreaView>
  )
}

