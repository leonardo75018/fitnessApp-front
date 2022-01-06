import React, { useState, useContext } from "react";
import { Text, SafeAreaView, View, Button, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from "../../contexts/UserContext"

import estyle from "./style";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../../assets/email.svg"
import LockIcon from "../../../assets/lock.svg"

import Api from "../../Api";


export default function SignIn() {

  const navigation = useNavigation();

  const [emailFiedl, setEmailFiedl] = useState("");
  const [passwordFiedl, setPasswordFiedl] = useState("");

  const handleMessageBtnClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }]
    });
  }

  const handleSignClick = async () => {
    if (emailFiedl != "" && passwordFiedl != "") {
      let response = await Api.signIn(emailFiedl, passwordFiedl);
      if (response.token) {
        await AsyncStorage.setItem("token", response.token);

        // userDispath({
        //   type: "setUserName",
        //   payload: {
        //     userName: response.user.firstName
        //   }
        // }
        // );

        navigation.reset({
          routes: [{ name: "MainTab" }]
        })

      } else {
        alert(response.message)
      }

    } else {
      alert('il faut remplir des champs')
    }
  }



  return <SafeAreaView style={estyle.container}>
    <View style={estyle.inputArea} >
      <SignInput
        IconSvg={EmailIcon}
        placeholder="votre email"
        value={emailFiedl}
        onChangeText={t => setEmailFiedl(t)}
      ></SignInput>

      <SignInput
        LockIcon={LockIcon}
        placeholder="votre password"
        value={passwordFiedl}
        onChangeText={t => setPasswordFiedl(t)}
        password={true}
      ></SignInput>

      <TouchableOpacity style={estyle.customBotton} onPress={handleSignClick}>
        <Text style={estyle.customBottonText}>Login</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={estyle.signMessageButton} onPress={handleMessageBtnClick}>
      <Text style={style.signMessageButtonText}>Je n'ai pas un compte!</Text>
      <Text style={style.signMessageButtonTextBold}>Créer un compte</Text>
    </TouchableOpacity>

  </SafeAreaView>
}