import React, { Component } from 'react';
import { Container, Header,Body, Title,Left, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import SearchMessage from "../components/SearchBox";
export default class Chat extends Component {
    render() {
      return (
          <Container>
              <Header style={{backgroundColor: "#000", paddingLeft: -2}}>
                  <Left style={{}}>
                      <Button style={{backgroundColor: "#f00", borderBottomRightRadius: 55, borderTopRightRadius : 55, height: 55}}>
                         <Icon name='arrow-back'/>   
                      </Button>
                  </Left>
              <Body>
            <Title style={{marginLeft: 20}}>Rahul Gupta</Title>
             </Body>

              </Header> 
              <Content>
                <SearchMessage/>
                </Content>  
         </Container>
    );
  }
}