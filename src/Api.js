import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
const BASE_URL = 'http://143.198.99.81';


import { getUserDataLogin } from "../src/redux/userDuck"

export default {
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, body: JSON.stringify({ email, password })
    });
    const json = await req.json();
    return json;
  },
  logout: async () => {
    const token = await AsyncStorage.removeItem("token");
  },
  signUp: async (firstName, lastName, email, password, role) => {
    const req = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, body: JSON.stringify({ firstName, lastName, email, password, role })
    });
    const json = await req.json();
    return json;
  },
  getUserProgramme: async () => {

    const token = await AsyncStorage.getItem("token")

    const userId = "0ecfe4a5-75a2-40b9-bf5f-1c79ed7827bb"

    const req = await fetch(`${BASE_URL}/physicalplans/user/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      }
    });
    const json = await req.json();
    return json;
  },
  getProgrammeWeeks: async (programmeId) => {
    const token = await AsyncStorage.getItem("token")

    const userId = "0ecfe4a5-75a2-40b9-bf5f-1c79ed7827bb"

    const req = await fetch(`${BASE_URL}/weeks/physical/${programmeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      }
    });
    const json = await req.json();
    return json;
  },

  getSeancesProgramme: async (WeekId) => {
    const token = await AsyncStorage.getItem("token")

    const req = await fetch(`${BASE_URL}/sessions/week/${WeekId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      }
    });
    const json = await req.json();
    return json;
  }

}