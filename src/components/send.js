import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
export default class Send extends Component {
  render() {
    return (

      <Container>


        <Footer>

          <FooterTab style={{ backgroundColor :"#FB0361"}} >

            <Button vertical active style={{ backgroundColor: "#FB0361", flexDirection: "row", height: 50}}>
            <Text style={{fontSize: 15,marginTop: 10}} bold>SEND</Text>
              <Icon active name="paper-plane" style={{marginLeft: -10}} />

            </Button>

          </FooterTab>

        </Footer>
      </Container>

    );
  }
}
