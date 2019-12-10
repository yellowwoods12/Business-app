import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const cover = props => (
  <View style={[styles.container, props.style]}  >
  </View>

);

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: "#F02055",
    position: 'absolute',
    top: -300,
    // left: -150,
    alignItems: 'center',
    // justifyContent: "center",
  },


});

export default cover;
