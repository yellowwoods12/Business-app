import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Badge } from 'native-base';
import Right from '../native-base-theme/components/Right';
import {
  TouchableOpacity
} from "react-native";
import { Navigation } from 'react-native-navigation';


export default class MessageContainer extends Component {



  onClickMessage = () => {
    Navigation.push(this.props.id, {
      component: {
        name: "RNNv2.Chat",
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
        <Content style={{ padding: 10 }}>
          <TouchableOpacity onPress={this.onClickMessage}>
            <Card >
              <CardItem header >
                <Text style={{ marginTop: -8 }}>Rahul Singh</Text>
                <Badge style={{ marginLeft: 4, marginTop: -8, backgroundColor: "#FB0361" }} ><Text>5</Text></Badge>
                <Text style={{ marginLeft: 100, marginTop: -8, color: '#B8B9B8' }} disabled>Sent 3 minutes ago</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Hi I want to purchase this watch.
                </Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onClickMessage}>
            <Card >
              <CardItem header >
                <Text style={{ marginTop: -8 }}>Rahul Singh</Text>
                <Badge style={{ marginLeft: 4, marginTop: -8, backgroundColor: "#FB0361" }} ><Text>5</Text></Badge>
                <Text style={{ marginLeft: 100, marginTop: -8, color: '#B8B9B8' }} disabled>Sent 3 minutes ago</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Hi I want to purchase this watch.
                </Text>
                </Body>
              </CardItem>

            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onClickMessage}>
            <Card >
              <CardItem header >
                <Text style={{ marginTop: -8 }}>Rahul Singh</Text>
                <Badge style={{ marginLeft: 4, marginTop: -8, backgroundColor: "#FB0361" }} ><Text>5</Text></Badge>
                <Text style={{ marginLeft: 100, marginTop: -8, color: '#B8B9B8' }} disabled>Sent 3 minutes ago</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Hi I want to purchase this watch.
                </Text>
                </Body>
              </CardItem>

            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onClickMessage}>
            <Card >
              <CardItem header >
                <Text style={{ marginTop: -8 }}>Rahul Singh</Text>
                <Badge style={{ marginLeft: 4, marginTop: -8, backgroundColor: "#FB0361" }} ><Text>5</Text></Badge>
                <Text style={{ marginLeft: 100, marginTop: -8, color: '#B8B9B8' }} disabled>Sent 3 minutes ago</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Hi I want to purchase this watch.
                </Text>
                </Body>
              </CardItem>

            </Card>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}
