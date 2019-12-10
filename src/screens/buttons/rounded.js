import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
export default class Rounded extends Component {
  render() {
    return (

      <Container>

           <Content />
        <Footer>

          <FooterTab >
            <Button vertical style={{ backgroundColor: "#000"}}>
              <Icon name="paper" />
              <Text>MESSAGES</Text>
            </Button>
            <Button vertical style={{ backgroundColor: "#000"}}>
              <Icon name="cart" />
              <Text>SHOPPING</Text>
            </Button>
            <Button vertical active style={{ backgroundColor: "#000"}}>
              <Icon active name="settings" />
              <Text>SETTINGS</Text>
            </Button>

          </FooterTab>

        </Footer>
      </Container>

    );
  }
}
