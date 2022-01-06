import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


//importer les reducer 
import userReducer from "./userDuck"


//Combiner tous les reducers 
const rootReducer = combineReducers({
  userData: userReducer,
})


export default function generateStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store;
}

