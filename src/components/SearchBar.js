import React from "react";
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default function SearchBar() {
  return <View style={estyle.containerSearch}>
    <Searchbar
      style={estyle.searchBar}
      placeholder="Rechercher un entrainement"
    // onChangeText={onChangeSearch}
    // value={searchQuery}
    />
  </View>
}

const estyle = StyleSheet.create({
  containerSearch: {
    paddingBottom: 50
  },
  searchBar: {
    height: 55,
    borderRadius: 50,
    backgroundColor: "#F5F6F8",
  }
})