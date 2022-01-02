import React, { useState } from "react";
import { Text, SafeAreaView, View, Button, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


import estyle from "./style";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../../assets/email.svg"
import LockIcon from "../../../assets/lock.svg"
import Api from "../../Api";


export default function SignIn() {

  const navigation = useNavigation();

  const [firstNameFiedl, setFirstNamelFiedl] = useState("");
  const [lastNameFiedl, setlastNamelFiedl] = useState("");
  const [emailFiedl, setEmailFiedl] = useState("");
  const [passwordFiedl, setPasswordFiedl] = useState("");
  const [role, setRole] = useState("");


  const handleMessageBtnClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }]
    });
  }

  const handleSignUpClick = async () => {
    if (firstNameFiedl != "" && lastNameFiedl != "" && emailFiedl != "" && passwordFiedl != "" && role != "") {
      let response = await Api.signUp(firstNameFiedl, lastNameFiedl, emailFiedl, passwordFiedl, role);
      if (response.id) {
        navigation.reset({
          routes: [{ name: "SignIn" }]
        })

      } else {
        alert("email e/ou password invalides")
      }

    } else {
      alert('il faut remplir des champs')
    }

  }



  return <SafeAreaView style={estyle.container}>

    <ScrollView style={estyle.inputArea} >

      <SignInput
        IconSvg={EmailIcon}
        placeholder="votre prénom"
        value={firstNameFiedl}
        onChangeText={t => setFirstNamelFiedl(t)}
      ></SignInput>

      <SignInput
        IconSvg={EmailIcon}
        placeholder="votre nom"
        value={lastNameFiedl}
        onChangeText={t => setlastNamelFiedl(t)}
      ></SignInput>

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

      <SignInput
        IconSvg={EmailIcon}
        placeholder="role"
        value={role}
        onChangeText={t => setRole(t)}
      ></SignInput>

      <TouchableOpacity style={estyle.customBotton} onPress={handleSignUpClick}>
        <Text style={estyle.customBottonText}>Créer mon compte</Text>
      </TouchableOpacity>
    </ScrollView>

    <TouchableOpacity style={estyle.signMessageButton} onPress={handleMessageBtnClick}>
      <Text style={style.signMessageButtonText}>J'ai un  compte!</Text>
      <Text style={style.signMessageButtonTextBold}>Login</Text>
    </TouchableOpacity>

  </SafeAreaView>
}