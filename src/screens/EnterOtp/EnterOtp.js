import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import ArrowButton from '../../components/UI/ArrowButton/ArrowButton';
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import OtpInputs from 'react-native-otp-inputs';
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import { authenticate } from "../../service/auth"

class EnterOtpScreen extends Component {

  state = {
    code: null,
  }

  setOtp = (code) => {
    // console.log('set-Otp' + code);
    this.setState(prevState => {
      return {
        ...prevState,
        code: code,
      };
    });
  }

  validateOtp = () => {
    console.log('Hii!1');
    console.log(this.state.code);
    console.log(this.props.phone);
    authenticate(this.props.componentId, this.state.code, this.props.phone);

  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => { Navigation.pop(this.props.componentId); }}>
                <Icon name='md-arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.cointainer}>
              <View style={styles.text}>
                <Text style={{ textAlign: "center" }}>Please Enter Verfication code sent to {this.props.phone}</Text>
              </View>
              <View style={styles.otp}>
                <OtpInputs
                  handleChange={code => this.setOtp(code)}
                  numberOfInputs={6}
                  containerStyles={styles.box}
                  inputContainerStyles={styles.otpbox}
                  inputStyles={styles.otpboxinput}
                  focusedBorderColor="#000"
                  unfocusedBorderColor="#D7E3FA"
                />
                <ArrowButton name="md-arrow-forward" onPress={this.validateOtp} />
              </View>
              <View>
                <ButtonWithBackground color="transparent" width={0} style={styles.resendOtp} > Resend OTP? </ButtonWithBackground>
              </View>
            </View>
          </Content>
        </Container>
      </StyleProvider>

    );
  }
}

const styles = StyleSheet.create({

  cointainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "70%",
    alignItems: "center",
  },
  otp: {
    width: "95%",
    margin: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  resendOtp: {
    color: "#F02055",
    textDecorationLine: 'underline',
  },
  box: {
    flex: 0.7,
    width: 55,

  },
  otpbox: {
    borderWidth: 1,
    width: 35,
    height: 55,
  },
  otpboxinput: {
    width: 35,
    paddingTop: 15,

  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    phone: state.auth.phone,
  };
};




export default connect(mapStateToProps, null)(EnterOtpScreen);

