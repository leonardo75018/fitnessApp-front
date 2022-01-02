import { StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  listArea: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,

    // marginTop: 30,
    // marginBottom: 30,
  },
  menuArear: {
    width: 30,
    height: 30,
  },

  menulogo: {
    width: "100%",
    height: "100%"
  },
  welcomeSection: {
    paddingTop: 77,
    paddingBottom: 40,
  },
  welcome: {
    // fontFamily: "Inter",
    // fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
    opacity: 0.6,
  },
  userName: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24
  }
})