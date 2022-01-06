import { createStore } from "redux";


function reducers() {
  return {
    testing: "gegeg"
  }
}

export default () => {
  return {
    ...createStore(reducers)
  };

};