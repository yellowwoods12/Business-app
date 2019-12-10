import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Cover from '../../components/UI/Cover/Cover'
import ShadowInput from '../../components/UI/ShadowInput/ShadowInput';
import { Navigation } from 'react-native-navigation';
import { Container, Content, Text, StyleProvider, Header, Left, Button, Icon, Body, Title, Right, Item, Input, Card, CardItem, Thumbnail } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/commonColor';
import { Col, Row, Grid } from "react-native-easy-grid";
import ArrowButton from "../../components/UI/ArrowButton/ArrowButton";


class ProductsDisplayScreen extends Component {


  validateName = () => {
    console.log('Hii!1');
    Navigation.push(this.props.componentId, {
      component: {
        name: "RNNv2.ProductDetail",
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          },
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
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Products</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>

            <Item rounded style={styles.input}>
              <Icon name="search"> </Icon>
              <Input placeholder="Search message" />
              <Icon name="md-arrow-forward" style={{ fontSize: 25, color: 'red' }} />
            </Item>
            <Grid>
              <Row>
                <Col size={10} >
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col size={1}>
                </Col>
                <Col size={10} >
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.validateName}>
                    <Card style={styles.margin10}   >
                      <CardItem cardBody  >
                        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>xyz Product</Text>
                        </Body>
                        <Right>
                          <Text>$ 120</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  margin10: {
    marginTop: 10
  },
  input: {

    height: 35,
    paddingLeft: 30,
    padding: 5,
    margin: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D7E3FA",
    // shadowColor: '#aaE3FA',
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowRadius: 10,
    // shadowOpacity: 1.0,
    // elevation: 2,

  },
});

export default ProductsDisplayScreen;
