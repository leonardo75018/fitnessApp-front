import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native';



import estyle from "./style"
import Api from "../../Api";

import BackIcon from "../../../assets/back.svg";

export default () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("screen")

  const handleBackBtn = () => {
    navigation.goBack()
  }

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [urlVideo, setUrlVideo] = React.useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');

  const handleChangeExercice = () => {
    setUrlVideo('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
    video.current.playAsync()
  }

  return (
    <SafeAreaView style={estyle.container}>
      <View style={estyled.mainPlayerVien} >
        <View style={{ height: height / 3, backgroundColor: "grey", width: "100%" }}>
          <Video
            ref={video}
            style={estyled.video}
            source={{
              uri: urlVideo,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>


        <Button
          title={'Exercice 1'}
          onPress={() =>
            handleChangeExercice()
          } />
        <Button
          title={'Exercice 2'}
          onPress={() =>
            handleChangeExercice()
          } />

      </View>


      <TouchableOpacity style={estyle.back} onPress={handleBackBtn}>
        <BackIcon width="44" height="44" fill="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
};


const estyled = StyleSheet.create({
  mainPlayerVien: {
    flex: 1,

  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: "100%",
  },
})