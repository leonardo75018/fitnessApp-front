import React, { useEffect, useContext } from "react";
import { View, Text, SafeAreaView, Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import estyle from "./style";
import preloadImg from "../../../assets/preload.jpg";



export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkTocken = async () => {
      const token = await AsyncStorage.getItem("token")
      if (token) {
        navigation.reset({
          routes: [{ name: "MainTab" }]
        })

        //Valider le token
        // await AsyncStorage.setItem("token", response.token);
        // userDispath({
        //   type: "setUserName",
        //   payload: {
        //     userName: response.user.firstName
        //   }
        // });

      } else {
        navigation.navigate("SignIn")
      }

    }
    checkTocken();
  }, []);


  return <SafeAreaView style={estyle.container}>
    <View style={estyle.containerImg}>
      <Image style={estyle.Img} source={preloadImg} />
      <ActivityIndicator style={estyle.activityIndicator} size="large" color="#ffffff" />
    </View>
    {/* <Text>Preload</Text> */}
  </SafeAreaView>
}