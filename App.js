
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import { registerScreens } from './RegisterScreens';

registerScreens(store, Provider);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "RNNv2.Spinner"
          }
        }],
        options: {
          topBar: {
            visible: false,
            height: 0
          }
        }
      }
    }
  });
});





