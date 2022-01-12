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
  programmeInfos: {
    marginBottom: 30,
  },
  programmeInfosTitle: {
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 10
  },
  programmeInfosDescriptions: {
    fontWeight: "500",
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.52)"
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
  back: {
    position: "absolute",
    top: 40,
    zIndex: 9,

  }
})