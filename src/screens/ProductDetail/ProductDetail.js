import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image
} from "react-native";


import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input, Card, CardItem, Thumbnail, Footer } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import { Col, Row, Grid } from "react-native-easy-grid";
import Gallery from 'react-native-image-gallery';
import NumericInput from 'react-native-numeric-input';


class ProductDetailScreen extends Component {


  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container >
          <Header>
            <Left>
              <Button transparent onPress={() => { Navigation.pop(this.props.componentId); }}>
                <Icon name='md-arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Product</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
            <Gallery
              style={[styles.input, { height: 300, backgroundColor: 'white' }]}
              images={[
                { source: require('../../../assets/img_avatar2.png'), dimensions: { width: 150, height: 150 } },
                { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
              ]}
            />
            <View style={styles.margin10} ></View>
            <Text style={styles.text}>    Boat Headphones </Text>
            <View style={styles.container}>
              <NumericInput
                type='plus-minus'

                totalWidth={80}
                onChange={value => console.log(value)}
                textColor="#F02055"
              />
              <Text style={[styles.text, { fontSize: 25 }]}> $190 </Text>
            </View>
            <View style={styles.container}>
              <Text> hbewjhfkdslkvjaldsvkbsaddvkljdslcvnklszxl;mc ,.msdmn;lcvm,msdcvjm;lsddzxmncv,mzxkljmn </Text>
            </View>
          </Content>
          <Footer>
            <View style={styles.footer}  >
              <Icon name="checkcircle" type="AntDesign" style={{ fontSize: 25, color: 'white' }} />
              <Text style={{ color: "white" }} >  Order Now </Text>
            </View>

          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}


const styles = StyleSheet.create({
  margin10: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    margin: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D7E3FA",
    shadowColor: '#aaE3FA',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  text: {
    color: "#F02055",
  },
  container: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});
export default ProductDetailScreen;
