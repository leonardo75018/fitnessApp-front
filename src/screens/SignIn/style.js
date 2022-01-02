import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputArea: {
    width: "100%",
    padding: 40,
  },
  customBotton: {
    alignItems: "center",
    backgroundColor: "#4F1F77",
    padding: 10,
    borderRadius: 40
  },
  customBottonText: {
    fontSize: 18,
    color: "#fff"

  },
  signMessageButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  signMessageButtonText: {
    fontSize: 16,

  },
  signMessageButtonTextBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,


  },

})