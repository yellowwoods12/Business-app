import { Navigation } from "react-native-navigation";
import React from 'react';

import Home from "./src/screens/Home/Home";
import LoginScreen from "./src/screens/Login/Login";
import EnterOtpScreen from "./src/screens/EnterOtp/EnterOtp";
import EnterNameScreen from "./src/screens/EnterName/EnterName";
import ProfileScreen from "./src/screens/Profile/Profile";
import ProductsDisplayScreen from "./src/screens/ProductsDisplay/ProductsDisplay";
import ChatScreen from "./src/screens/Chat/Chat";
import ProductDetail from "./src/screens/ProductDetail/ProductDetail";
import Messages from "./src/screens/messages";
import Chat from "./src/screens/chat";
import BroadcastMessage from "./src/screens/broadcastmessage";
import Shop from "./src/screens/shop";
import VacationMode from "./src/screens/vacationmode";
import AddProduct from "./src/screens/addproduct";
import Spinner from "./src/screens/Spinner/Spinner";


export const registerScreens = (store, Provider) => {

  Navigation.registerComponent("RNNv2.Home", () => Home, () => (props) => (
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  ), () => Home);

  Navigation.registerComponent("RNNv2.LoginScreen", () => (props) => (
    <Provider store={store}>
      <LoginScreen {...props} />
    </Provider>
  ), () => LoginScreen);


  Navigation.registerComponent("RNNv2.EnterOtpScreen", () => (props) => (
    <Provider store={store}>
      <EnterOtpScreen {...props} />
    </Provider>
  ), () => EnterOtpScreen);

  Navigation.registerComponent("RNNv2.EnterNameScreen", () => (props) => (
    <Provider store={store}>
      <EnterNameScreen {...props} />
    </Provider>
  ), () => EnterNameScreen);

  Navigation.registerComponent("RNNv2.ProfileScreen", () => (props) => (
    <Provider store={store}>
      <ProfileScreen {...props} />
    </Provider>
  ), () => ProfileScreen);

  Navigation.registerComponent("RNNv2.ProductsDisplayScreen", () => (props) => (
    <Provider store={store}>
      <ProductsDisplayScreen {...props} />
    </Provider>
  ), () => ProductsDisplayScreen);

  Navigation.registerComponent("RNNv2.ChatScreen", () => (props) => (
    <Provider store={store}>
      <ChatScreen {...props} />
    </Provider>
  ), () => ChatScreen);

  Navigation.registerComponent("RNNv2.ProductDetail", () => (props) => (
    <Provider store={store}>
      <ProductDetail {...props} />
    </Provider>
  ), () => ProductDetail);


  Navigation.registerComponent("RNNv2.Messages", () => (props) => (
    <Provider store={store}>
      <Messages {...props} />
    </Provider>
  ), () => Messages);


  Navigation.registerComponent("RNNv2.Chat", () => (props) => (
    <Provider store={store}>
      <Chat {...props} />
    </Provider>
  ), () => Chat);


  Navigation.registerComponent("RNNv2.BroadcastMessage", () => (props) => (
    <Provider store={store}>
      <BroadcastMessage {...props} />
    </Provider>
  ), () => BroadcastMessage);



  Navigation.registerComponent("RNNv2.Shop", () => (props) => (
    <Provider store={store}>
      <Shop {...props} />
    </Provider>
  ), () => Shop);


  Navigation.registerComponent("RNNv2.VacationMode", () => (props) => (
    <Provider store={store}>
      <VacationMode {...props} />
    </Provider>
  ), () => VacationMode);

  Navigation.registerComponent("RNNv2.AddProduct", () => (props) => (
    <Provider store={store}>
      <AddProduct {...props} />
    </Provider>
  ), () => AddProduct);


  Navigation.registerComponent("RNNv2.Spinner", () => (props) => (
    <Provider store={store}>
      <Spinner {...props} />
    </Provider>
  ), () => Spinner);

}




