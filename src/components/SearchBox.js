import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Card,CardItem,Content, Footer,Body, Right, Thumbnail, Left } from 'native-base';

import {Image} from 'react-native';
import watch from '../assets/watch.jpg';
export default class SearchMessage extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container style={{padding: -5}}>
        <Header searchBar style={{backgroundColor: 'transparent',padding: -5, height: 100}}>
          <Item style={{borderBottomStartRadius: 20, padding:-5}} rounded>
            <Icon name="ios-search" />
            <Input placeholder="Search Messages" style={{borderBottomEndRadius: 20 }} />
            <Icon name="arrow-forward" style={{color: "#f00"}}/>
          </Item>
          <Button transparent>
            <Text>Search Messages</Text>
          </Button>
        </Header> 
        <Content style={{padding: 10, marginTop: 20, marginBottom: 20}} >
          
           <Card style={{height: 80, borderBottomLeftRadius: 40, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowColor: 'red', shadowOpacity: 50, width: 300, marginBottom: 20}} >
            <CardItem style={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
              <Body>
              
                <Text >
                   Hello, Welcome to shop.
                   
                </Text>
               
              </Body>
              <Left>
              
                <Thumbnail source={{ uri: uri }} style={{marginLeft:180, marginTop: -10, borderRadius: 30, borderWidth: 10}} bordered/>
                
                

              </Left>
              
              <Text note style={{marginTop: -35}} >12:02</Text>
              
            </CardItem>
           
          </Card>
          
          <Card style={{height: 80, borderBottomLeftRadius: 40, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowColor: 'red', shadowOpacity: 50, width: 300, marginLeft: 80, backgroundColor: "#E1E9EA"}} >
            <CardItem style={{backgroundColor: "#E1E9EA", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40}} >
            <Left>
              
              <Thumbnail source={{ uri: uri }} style={{marginLeft: -90, marginTop: -10, borderRadius: 30, borderWidth: 10}} bordered/>
              
              

            </Left>
              <Body style={{ marginLeft: -230}}>
             
                 <Text> 
                  Following item is to be purchased.
                  
                </Text>
               
                
              </Body>
              
              
              <Text note style={{marginTop: -35}} >12:04</Text>
               
            </CardItem>
           
          </Card>
          <Image source={require('../assets/watch.jpg')} style={{height: 100, width: 80, flex: 2, marginLeft: 70, marginTop:5}}/>
          <Card style={{height: 80, borderBottomLeftRadius: 40, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowColor: 'red', shadowOpacity: 50, width: 300, marginBottom: 20}} >
            <CardItem style={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
              <Body>
              
                <Text >
                   Please send me your address.
                   
                </Text>
               
              </Body>
              <Left>
              
                <Thumbnail source={{ uri: uri }} style={{marginLeft:180, marginTop: -10, borderRadius: 30, borderWidth: 10}} bordered/>
                
                

              </Left>
              
              <Text note style={{marginTop: -35}} >12:12</Text>
              
            </CardItem>
           
          </Card>
          <Container style={{height: 50, flexDirection:"row"}}>
           
          <Button disabled rounded  style={{borderBottomLeftRadius: 200, borderBottomRightRadius: 200, borderTopLeftRadius: 200, borderTopRightRadius: 200}}>
          <Icon name='add' />
            </Button>
            
          <Item rounded style={{marginLeft: 10, flex: 20}}>
            <Input placeholder='Enter a message'/>
          </Item>
          <Button rounded  transparent>
          <Icon name='arrow-round-up'  style={{color: "#f00"}} bold/>
            </Button>
          </Container>
          </Content>
          <Footer>
            
         
          </Footer>
      </Container>
    ); 
  } 
}