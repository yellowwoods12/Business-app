import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, DatePicker, Right, Text, Left, Card, CardItem, Segment, Body } from 'native-base';

import DragAndDrop from '../components/draganddrop';
import { Switch } from 'react-native';
import Picker from '../components/datepicker';
export default class VacationMode extends Component {

  render() {
    return (
      <Container>
        <Content style={{ paddingTop: 20 }}>


          <Card style={{ height: 135, marginTop: -40, paddingTop: 20 }}>
            <CardItem>
              <Body>
                <Text style={{ marginLeft: -10, paddingTop: 30, fontSize: 20 }}>
                  Total Active Users April 2019
                </Text>
                <Right>
                  <Text style={{ fontSize: 40, marginLeft: 300, marginTop: -40, color: "#FB0361" }}>
                    25
                  </Text>
                </Right>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ height: 500, marginTop: -10 }}>
            <CardItem>
              <Body>
                <Text style={{ marginLeft: 10, paddingTop: 30, fontSize: 20 }}>
                  Vacations Mode
                </Text>
                <Right>
                  <Switch
                    value={true}
                    onValueChange={this.toggle}
                    disabled={false}
                    activeText={'On'}
                    inActiveText={'Off'}
                    backgroundActive={'green'}
                    backgroundInactive={'gray'}
                    circleActiveColor={'#30a566'}
                    circleInActiveColor={'#000000'} style={{ marginTop: -25, marginLeft: 300 }} />
                </Right>
              </Body>
              <Left>

              </Left>

              <Container style={{ marginTop: 100, marginLeft: -700, flexDirection: "row" }}>
                <Picker />
              </Container>
            </CardItem>
          </Card>

        </Content>



      </Container>
    );
  }
}
