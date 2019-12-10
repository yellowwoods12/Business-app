import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Badge, Button, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import watch from '../assets/watch.jpg';
export default class AttachImage extends Component {
    render() {
      return (
          <Container style={{paddingTop: 10}}>
              <Content >
                  <Container style={{flexDirection: "row", height: 30, marginLeft:-2}}>
                  <Container style={{backgroundColor: "#AAA4A6", height: 30, flex:2, width: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30,borderTopRightRadius: 30}}>
              <Icon name="pricetag" style={{color: "#fff"}} />
              </Container>
              <Text style={{flex: 25, fontSize: 18, marginLeft: 10}}>
                  Attached Images
              </Text>
              </Container>
              <Container style={{flexDirection: "row", paddingTop: 10}}>
                <Card style={{flex: 1, height: 120}}  >
                <CardItem >
                
                  <Image source={require('../assets/watch.jpg')} style={{height: 90, width: 60,  marginLeft: 10}} bordered/>
                  <Button rounded small transparent style={{marginTop: -10, marginLeft: -10}} >
          <Icon name='remove-circle' style={{color:"#FB0361"}}  />
            </Button>
              </CardItem>
              </Card>
              <Card style={{flex: 1, height: 120}}  >
                <CardItem >
                
                  <Image source={require('../assets/watch.jpg')} style={{height: 90, width: 60,  marginLeft: 10}} bordered/>
                  <Button rounded small transparent style={{marginTop: -10, marginLeft: -10}} >
          <Icon name='remove-circle' style={{color:"#FB0361"}}  />
            </Button>
              </CardItem>
              </Card>
              <Card style={{flex: 1, height: 120}}  >
                <CardItem >
                
                  <Image source={require('../assets/watch.jpg')} style={{height: 90, width: 60,  marginLeft: 10}} bordered/>
                  <Button rounded small transparent style={{marginTop: -10, marginLeft: -10}} >
          <Icon name='remove-circle' style={{color:"#FB0361"}}  />
            </Button>
              </CardItem>
              </Card>
              </Container>              
         
              
              </Content>
          </Container>
         );
      }
    }
