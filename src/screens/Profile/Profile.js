import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";
import Cover from '../../components/UI/Cover/Cover'
import ShadowInput from '../../components/UI/ShadowInput/ShadowInput';
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import ArrowButton from "../../components/UI/ArrowButton/ArrowButton";
import { onLogout } from "../../service/auth";

class ProfileScreen extends Component {


  validateName = () => {
    console.log('Hii!1');
    Navigation.push(this.props.componentId, {
      component: {
        name: "RNNv2.EnterOtpScreen",
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    }
    );
  }


  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          {/* <Header>
            <Left>
              <Button transparent onPress={() => { Navigation.pop(this.props.componentId); }}>
                <Icon name='md-arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Profile</Title>
            </Body>
            <Right />
          </Header> */}
          <Content padder contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }} style={styles.content}>
            <View style={styles.container}>
              <Cover style={styles.cover} />
              <View style={styles.space}></View>
              <Text style={styles.text}> Rachel Smith </Text>
              {/* <View style={styles.space}></View> */}
              <View style={styles.image}>
                <Image
                  style={styles.avatar}
                  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                ></Image>
              </View>
              <View style={styles.minspace} ></View>
              <ShadowInput placeholder='Enter Your Phone Number' name="md-arrow-forward" onPress={this.validateName} ></ShadowInput>
              <ShadowInput placeholder='Enter Your Name' name="md-arrow-forward" onPress={this.validateName} ></ShadowInput>
              <View style={styles.minspace} ></View>
              <Button iconRight primary rounded style={styles.button} onPress={() => onLogout()}>
                <Text>
                  Log Out
                </Text>
                <Icon name='ios-log-out' />
              </Button>
            </View>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  space: {
    margin: 45,
  },
  minspace: {
    margin: 10,
  },
  input: {
    height: 35,
    paddingLeft: 30,
    padding: 5,
    margin: 10,
  },
  text: {
    fontSize: 24,
    color: "#FFF"
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
  cover: {
    top: -400,
  },
  button: {
    alignSelf: "center"
  }
});

export default ProfileScreen;
