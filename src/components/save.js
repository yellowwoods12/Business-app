import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
export default class Save extends Component {
  render() {
    return (
      
      <Container>
       
           
        <Footer>
      
          <FooterTab style={{ backgroundColor :"#FB0361"}} >
            
            <Button vertical active style={{ backgroundColor: "#000", flexDirection: "row", height: 55}}>
            <Icon active name="close-circle" style={{marginRight: -10,marginTop:5}} />
            <Text style={{fontSize: 15,marginTop: 10}} bold>CANCEL</Text>
              
              
            </Button>
            <Button vertical active style={{ backgroundColor: "#FB0361", flexDirection: "row", height: 50}}>
            <Text style={{fontSize: 15,marginTop: 10}} bold>SAVE</Text>
              <Icon active name="checkmark-circle" style={{marginLeft: -10, marginTop:5}} />
              
            </Button>
           
          </FooterTab>
          
        </Footer>
      </Container>
   
    );
  }
}
