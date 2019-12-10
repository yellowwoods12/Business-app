import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Badge } from 'native-base';
import Right from '../native-base-theme/components/Right';
export default class DragAndDrop extends Component {
  render() {
    return (
    
      <Container>
        <Content style={{padding: 10}}>
            <Container style={{flexDirection:"row", borderBottomColor: "#000"}}>
                <Text style={{flex:1}}>IMAGE</Text>
                <Text style={{ flex:2}}>PRODUCT NAME</Text>
                <Text style={{ flex:1.5}}>POSITION</Text>
                <Text style={{ flex:1}}>STATUS</Text>
            </Container>
         

      
        
        </Content>
      </Container>
    );
  }
}