import React, { Component } from 'react';
import { Container, Header,Body, Title,Left, Content, Footer, FooterTab,Item,Input, Button, Icon, Text, Form, Textarea } from 'native-base';
import AttachImage from "../components/attachimage";
import Save from "../components/save";

export default class AddProduct extends Component {
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
      <Title style={{marginLeft: 20}}>NEW PRODUCTS</Title>
       </Body>

        </Header>
        <Content style={{padding: 10}}>
        <Button rounded iconRight style={{backgroundColor: "#FB0361", alignSelf: 'center', marginTop: 20, marginBottom: 10}}>
                <Text>Add Images</Text>
                <Icon name="image"/>

              </Button>
              <Content padder>
          <Form>
              <Text>PRODUCT NAME</Text>
          <Item regular>
            <Input bordered style={{color: "#000",fontSize: 15, height: 30}}/>
          </Item>
           <Text style={{paddingTop: 10}}>PRODUCT DESCRIPTION</Text>
            <Textarea rowSpan={5} bordered placeholder="Write message"style={{color: "#000", fontSize: 15,height:100}} />
            <Text style={{paddingTop: 10}}>PRODUCT PRICE</Text>
            <Item regular>
            <Input bordered style={{color: "#000",fontSize: 15, height: 30}}/>
          </Item>
          </Form>
        </Content>
        <Content padder>
        <AttachImage/>
        </Content>

              </Content>
              <Footer>
              <Save/>
              </Footer>
   </Container>
        );
    }
  }
