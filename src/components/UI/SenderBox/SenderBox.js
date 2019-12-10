import React from "react";
import {  StyleSheet, View } from "react-native";
import {  Item, Text, Thumbnail } from 'native-base';

const senderBox = props => (
  <View style={[styles.container, props.style]}  >
    <Item rounded style={styles.box}>
      <Text> {props.children} </Text>
    </Item>
    <View style={styles.img}>
      <Thumbnail small source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
      <Text style={styles.time}> 12.02 </Text>
    </View>

  </View>

);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,


  },
  box: {
    flex: 4,
    margin: 5,
    padding: 10,
    borderColor: "#D7E3FA",
  },
  img: {
    // justifyContent: "center",
    alignItems: "center",

  },
  time: {
    color: "#a8a8a8",
  }
});

export default senderBox;
