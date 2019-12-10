import React, { Component } from 'react';
import { Container, Header,Body, Title,Left, Content, Footer, FooterTab, Button, Icon, Text, Form, Textarea } from 'native-base';
import AttachImage from "../components/attachimage";
import Send from "../components/send";

export default class BroadcastMessage extends Component {
    render() {
      return (
        <Container>
        <Header style={{backgroundColor: "#000", paddingLeft: -2}}>
            <Left style={{}}>
                <Button style={{backgroundColor: "#FB0361", borderBottomRightRadius: 55, borderTopRightRadius : 55, height: 55}}>
                   <Icon name='arrow-back'/>   
                </Button>
            </Left>
        <Body>
      <Title style={{marginLeft: 5}}>BROADCAST MESSAGE</Title>
       </Body>

        </Header> 
        <Content style={{padding: 10}}>
        <Button rounded iconRight style={{backgroundColor: "#FB0361", alignSelf: 'center', marginTop: 20, marginBottom: 10}}>
                <Text>Add Images</Text>
                <Icon name="image"/>

              </Button>
              <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Write message"style={{color: "#000", fontSize: 15, borderColor:"#BBB1B5"}} />
          </Form>
        </Content>
        <Content padder>
        <AttachImage/>
        </Content>
        
              </Content>
              <Footer>
              <Send/>
              </Footer>
   </Container>
        );
    }
  }