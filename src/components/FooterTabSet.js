import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
export default class FooterTabSet extends Component {
  render() {
    return (

      <Container >


        <Footer >

          <FooterTab style={{backgroundColor:"#000"}} >
            <Button vertical style={{ backgroundColor: "#000",flexDirection:"row"}}>
              <Icon name="paper" />
              <Text style={{fontSize: 13, marginLeft: -25}}>MESSAGE</Text>
            </Button>
            <Button vertical style={{ backgroundColor: "#000",flexDirection:"row"}}>
              <Icon name="cart" />
              <Text style={{fontSize: 13, marginLeft: -25}}>SHOP</Text>
            </Button>
            <Button vertical active style={{ backgroundColor: "#000",flexDirection:"row"}}>
              <Icon active name="settings" />
              <Text style={{fontSize: 13, marginLeft: -25}}>SETTINGS</Text>
            </Button>

          </FooterTab>

        </Footer>
      </Container>

    );
  }
}
