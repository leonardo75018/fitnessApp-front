import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Input, Icon } from 'react-native-elements';



export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return <View style={estyle.inputArea} >
    <TextInput
      style={estyle.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={password}
      error
    />

  </View>
}

const estyle = StyleSheet.create({
  inputArea: {
    width: "100%",
    height: 60,
    backgroundColor: "yellow",
    flexDirection: "row",
    borderRadius: 30,
    paddingLeft: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  }
})