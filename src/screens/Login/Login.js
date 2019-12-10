import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import Cover from '../../components/UI/Cover/Cover'
import ShadowInput from '../../components/UI/ShadowInput/ShadowInput';
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import ArrowButton from "../../components/UI/ArrowButton/ArrowButton";
import {  setPhone } from "../../store/actions/index";


class LoginScreen extends Component {

  static navigatorStyle = {
    navBarHidden: true
  };

  state = {
    authMode: "login",
    authData: null,
  }

  validateName = () => {
    console.log('Hii!1');
    console.log(this.state.authData);
    this.props.onSetPhone(this.state.authData, this.state.authMode);
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

  updateInputState = (val) => {
    // console.log(val);
    this.setState(prevState => {
      return {
        ...prevState,
        authData: val,
      }
    });


  }


  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>

          <Content padder contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }} style={styles.content}>
            <View style={styles.container}>
              <Cover />
              <View style={styles.space}></View>
              <ShadowInput
                placeholder='Enter Your Phone Number'
                name="md-arrow-forward"
                onPress={this.validateName}
                value={this.state.authData}
                onChangeText={val => this.updateInputState(val)}
              ></ShadowInput>
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
    margin: 170,
  },
  input: {
    height: 35,
    paddingLeft: 30,
    padding: 5,
  }
});




const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetPhone: (authData, authMode) => dispatch(setPhone(authData, authMode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


