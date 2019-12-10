import React from "react";
import { StyleSheet, View } from "react-native";
import { Item, Text, Thumbnail } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
const orderMessage = props => (
  <View style={[styles.container, props.style]}  >
    <View style={styles.img}>
      <Thumbnail small source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
      <Text style={styles.time}> 12.02 </Text>
    </View>
    <Item rounded style={styles.box}>
      <Grid>
        <Row style={styles.order} >
          <Text> Order, </Text>
        </Row>
        <Row>
          <Col size={5}><Text>ITEM</Text></Col>
          <Col size={3}><Text>QTY</Text></Col>
          <Col size={2}><Text>PRICE</Text></Col>
        </Row>
        <Row>
          <View
            style={{
              width: "100%",
              borderBottomColor: '#C8D6EA',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          />
        </Row>
        <Row>
          <Col size={5}><Text>Fitbit SmartWatch</Text></Col>
          <Col size={3}><Text>1</Text></Col>
          <Col size={2}><Text>2000</Text></Col>
        </Row>
      </Grid>
    </Item>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,


  },
  box: {
    flex: 4,
    padding: 10,
    borderColor: "#D7E3FA",
    backgroundColor: "#F2F5FC",
  },
  img: {
    // justifyContent: "center",
    alignItems: "center",

  },
  time: {
    color: "#a8a8a8",
  },
  order: {
    justifyContent: "flex-end",
    marginBottom: 15
  }
});

export default orderMessage;
