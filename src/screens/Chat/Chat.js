import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input, Card, CardItem, Thumbnail, Footer, Row } from 'native-base';
import Gallery from 'react-native-image-gallery';




import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import SenderBox from '../../components/UI/SenderBox/SenderBox';
import RecieverBox from '../../components/UI/RecieverBox/RecieverBox';
import OrderMessage from '../../components/UI/OrderMessage/OrderMessage';
class ChatScreen extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left/>
            <Body>
              <Title>Chat</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>
            <Item rounded style={styles.input}>
              <Icon name="search"> </Icon>
              <Input placeholder="Search message" />
              <Icon name="md-arrow-forward" style={{ fontSize: 25, color: 'red' }} />
            </Item>

            <View
              style={{
                width: "100%",
                borderBottomColor: '#D7E3FA',
                borderBottomWidth: 1,
                marginTop: 10,
              }}
            />

            <SenderBox > dsajhgbcfjkdsahnklfcvml;ds,v;'/dfs,c'sadfksldjnjhfkjdsklgjmldksfjgblksfgj;lnhkjdtgfmjlk.dfndbgnjhdsfcjkbjkladfbgvkjsdfjkj </SenderBox>
            <RecieverBox> sajkhfjkusadhklfjdsl;fks;k;</RecieverBox>
            <OrderMessage>  </OrderMessage>

            <View style={styles.image}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              ></Image>

            </View>
            {/* <Gallery
              style={{ flex: 1, backgroundColor: 'white' }}
              images={[
                { source: require('../../../assets/img_avatar2.png'), dimensions: { width: 150, height: 150 } },
                { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
              ]}
            /> */}
          </Content>
          <Footer>
            <View style={styles.footer}>
              <Icon name="add"> </Icon>
              <Item rounded style={[styles.input , { width: "80%" } ]}>
                <Input   placeholder="Enter a  message" />
              </Item>
              <Icon name="md-arrow-forward" style={{ fontSize: 25, color: 'red' }} />

            </View>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  input: {

    height: 35,
    padding: 5,
    margin: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D7E3FA",
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  image: {
    margin: 30,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#aaE3FA',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  footer: {
    flexDirection: "row",
    alignItems : "center",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 80,
    backgroundColor: "white",
    padding: 10,
  }
});

export default ChatScreen;
