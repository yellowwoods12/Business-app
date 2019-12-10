import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { uiStartLoading, uiStopLoading, setCredential, setAuthData } from "../../store/actions/index";
import { connect } from "react-redux";
import firebase from 'react-native-firebase';
import { route } from "../../service/auth";

import { Navigation } from "react-native-navigation";

class Spin extends Component {
  state = {
    spinner: false

  }
  componentWillMount() {
    this.props.loadingStart();
    firebase.auth().onAuthStateChanged(res => {
      console.log(res);
      if (res) {
        this.props.onSetCredential(res.uid, res.phoneNumber);
        route(this.props.componentId, res.uid);
      }
      else {
        this.props.loadingStop();
        Navigation.setStackRoot(this.props.componentId, [
          {
            component: {
              name: "RNNv2.LoginScreen",
              passProps: {
                text: 'Root screen'
              },
              options: {
                animations: {
                  setStackRoot: {
                    enabled: true
                  },
                  topBar: {
                    visible: false,
                    height: 0
                  }
                }
              }
            }
          }
        ]);
      }

    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.props.isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  };
};


const mapDispatchToProps = dispatch => {
  return {
    loadingStart: () => dispatch(uiStartLoading()),
    loadingStop: () => dispatch(uiStopLoading()),
    onSetCredential: (uid, phone) => dispatch(setCredential(uid, phone)),
    onSetAuthData: (uid, phone, name) => dispatch(setAuthData(uid, phone, name))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Spin);


