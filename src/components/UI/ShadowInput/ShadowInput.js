import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowButton from '../ArrowButton/ArrowButton';
import { Item, Input } from "native-base";


const shadowInput = props => {
  let icon = null;
  if (props.name) {
    icon = (<ArrowButton style={styles.circle} name={props.name} onPress={props.onPress} />);
  }

  return (
    // <View style={styles.container} >
    //   <View style={styles.container}>
    //     <TextInput
    //       underlineColorAndroid="transparent"
    //       {...props}
    //       style={[styles.input, props.style]}
    //     />
    //   </View>
    //   {icon}
    // </View>
    <Item rounded style={styles.input}>
      <Input keyboardType="numeric" {...props}  />
      <ArrowButton name={props.name} onPress={props.onPress}  />
    </Item>

  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    // justifyContent: "center",
  },

  input: {
    // color: 'green',
    // width: "80%",
    height: 35,
    paddingLeft: 30,
    padding: 5,
    margin: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D7E3FA",
    // shadowColor: '#aaE3FA',
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowRadius: 10,
    // shadowOpacity: 1.0,
    // elevation: 2,

  },
  circle: {
    position: 'relative',
    top: "-135%",
    left: "35%",
  },
});

export default shadowInput;
