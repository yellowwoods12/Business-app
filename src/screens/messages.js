import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';
import MessageContainer from '../components/messagecontainer';
export default class Messages extends Component {

  broadcastmessage = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "RNNv2.BroadcastMessage",
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          },
          bottomTabs: {
            visible: false,
            height: 0,
            drawBehind: true,
            animate: true
          },
        },
      }
    }
    );
  }
  render() {
    return (
      <Container>
        <Content style={{ paddingTop: 20 }}>
          <Button rounded iconRight onPress={this.broadcastmessage} style={{ backgroundColor: '#FB0361', alignSelf: 'center', marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>Broadcast Message</Text>
            <Icon name="home" />

          </Button>
          <MessageContainer id={this.props.componentId} />

        </Content>


      </Container>
    );
  }
}
