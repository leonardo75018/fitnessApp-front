import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,

    // justifyContent: "center",
    // alignItems: "center",
  },
  programme: {
    width: "100%",
    minHeight: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: "white"
    // marginTop: 30,
    // marginBottom: 30,
  },
  fakeSwiper: {
    width: "100%",
    height: 280,
  },
  fakeSwiperImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

})