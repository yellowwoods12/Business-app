import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';
import DragAndDrop from '../components/draganddrop';


export default class Shop extends Component {

  broadcastmessage = () => {
    console.log('Hi!!');
    console.log(this.props.componentId);
    Navigation.push(this.props.componentId, {
      component: {
        name: "RNNv2.AddProduct",
        options: {
          bottomTabs: {
            visible: false,
            height: 0,
            drawBehind: true,
            animate: true
          },
        },
      }
    }
    );
  }

  render() {
    return (
        <Container>
            <Content style={{paddingTop: 20}}>
              <Button rounded iconRight onPress={this.broadcastmessage} style={{backgroundColor: '#FB0361', alignSelf: 'center', marginTop: 20, marginBottom: 10}}>
                <Text style={{fontSize: 15}}>Add New</Text>
                <Icon name="add-circle" style={{color:"#fff"}}/>

              </Button>
              <DragAndDrop/>

              </Content>



        </Container>
    );
  }
}
