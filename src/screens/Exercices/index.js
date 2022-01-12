import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"
import { Video, AVPlaybackStatus } from 'expo-av';


import estyle from "./style"
import Api from "../../Api";
import ExerciceSession from "../../components/ExerciceSession";
import BackIcon from "../../../assets/back.svg";





export default () => {
  const navigation = useNavigation();

  const route = useRoute();
  const sessionId = route.params.id

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [urlVideo, setUrlVideo] = React.useState("https://mariageupload.s3.us-east-2.amazonaws.com/fitness/biceps+et+le+latissimus.mov");
  const [exercices, setExercices] = useState([])


  const getExercices = async () => {
    let response = await Api.getSeanceExercice(sessionId);
    if (!response.message) {
      setExercices(response)
    } else {
      console.log(response.message)
    }

  }

  useEffect(() => {
    getExercices()
  }, [])


  const { height, width } = Dimensions.get("screen")

  const handleBackBtn = () => {
    navigation.goBack()
  }



  const handleChangeExercice = (url) => {
    setUrlVideo(url)
    video.current.playAsync()
  }



  return (
    <SafeAreaView style={estyle.container}>
      <View style={estyled.mainPlayerVien} >


        <View style={{ height: height / 2.5, backgroundColor: "grey", width: "100%" }}>
          <Video
            ref={video}
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: urlVideo,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping

          />

        </View>


        <View View style={estyled.mainExercices} >
          <Text style={estyled.title}>Les exerices de ma séance</Text>
          <ScrollView >
            {
              exercices.map((item, k) => (
                <ExerciceSession key={k} data={item.exercices} handleChangeExercice={handleChangeExercice} />
              ))
            }

          </ScrollView>

        </View >

      </View >


      <TouchableOpacity style={estyle.back} onPress={handleBackBtn}>
        <BackIcon width="44" height="44" fill="#ffffff" />

      </TouchableOpacity>
    </SafeAreaView >
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
    resizeMode: "cover"
  },

  mainExercices: {
    width: "100%",
    height: 500,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,

  },
  title: {
    paddingTop: 20,
    fontWeight: "500",
    fontSize: 17,
    paddingBottom: 20


  }

})