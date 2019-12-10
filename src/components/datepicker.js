import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, DatePicker, Right, Text, Left, Card, CardItem, Segment, Body } from 'native-base';
import { onLogout } from "../service/auth";
export default class Picker extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container >
        <Content>

          <Container style={{ flexDirection: "row", paddingLeft: -10, height: 700 }}>
            <Container>
              <Card >
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  disabled={false}

                />
                <Text style={{ marginLeft: 10 }}>
                  From: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              </Card>
            </Container>
            <Container>
              <Card>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  disabled={false}

                />
                <Text style={{ marginLeft: 10 }}>
                  To: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              </Card>
            </Container>

          </Container>
          <Container style={{ marginTop: -600, paddingTop: 90 }}>
            <Button rounded onPress={() => onLogout()} iconRight style={{ backgroundColor: '#FB0361', alignSelf: 'center', marginLeft: -20 }}>
              <Text style={{ fontSize: 15 }}>Logout</Text>
              <Icon name="power" />

            </Button>
          </Container>
        </Content>
      </Container>
    );
  }
}
