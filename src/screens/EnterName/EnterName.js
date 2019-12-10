import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ShadowInput from '../../components/UI/ShadowInput/ShadowInput';
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';

import { connect } from "react-redux";
import { setUserData } from "../../service/auth";

class EnterNameScreen extends Component {


  state = {
    name: null,
  }

  switchAuthModeHandler = () => {
    console.log(this.props.uid);
    console.log(this.props.isAuthenticated);
    console.log(this.props.phone);
    console.log(this.state.name);
    setUserData(this.props.uid, this.props.phone, this.state.name);
  };

  updateInputState = (val) => {
    this.setState(prevState => {
      return {
        ...prevState,
        name: val,
      }
    });
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
            <View style={styles.container}>
              <ShadowInput name="ios-checkmark"
                placeholder="Enter Your Name"
                onPress={this.switchAuthModeHandler}
                onChangeText={val => this.updateInputState(val)}
              />
            </View>
          </Content>
        </Container>
      </StyleProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
});


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    phone: state.auth.phone,
    uid: state.auth.uid,
  };
};



export default connect(mapStateToProps, null)(EnterNameScreen);

