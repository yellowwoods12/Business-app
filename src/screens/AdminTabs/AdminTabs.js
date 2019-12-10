import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Ionicons';


const admin = () => {

  Promise.all([
    Icon2.getImageSource("hipchat", 20),
    Icon1.getImageSource("shop", 20),
    Icon3.getImageSource("md-settings", 20)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {

          children: [{
            stack: {
              children: [{
                component: {
                  name: 'RNNv2.Messages',
                  passProps: {
                    text: 'This is tab 1'
                  }
                }
              }],
              options: {
                bottomTab: {
                  text: 'Message',
                  icon: sources[0],
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  iconColor: 'white',
                  selectedIconColor: '#F02055',
                  selectedTextColor: '#F02055',
                  textColor: 'white',
                  fontSize: 14
                },
                topBar: {
                  visible: false,
                  height: 0
                },
                bottomTabs: {
                  backgroundColor: 'black'
                },
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'RNNv2.Shop',
                  passProps: {
                    text: 'This is tab 2'
                  },
                }
              }],
              options: {
                bottomTab: {
                  text: 'Shop',
                  icon: sources[1],
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  iconColor: 'white',
                  selectedIconColor: '#F02055',
                  selectedTextColor: '#F02055',
                  textColor: 'white',
                  fontSize: 14
                },
                topBar: {
                  visible: false,
                  height: 0
                },
                bottomTabs: {
                  backgroundColor: 'black'
                },
              }
            }
          },
          {
            component: {
              name: 'RNNv2.VacationMode',
              passProps: {
                text: 'This is tab 3'
              },
              options: {
                bottomTab: {
                  text: 'Settings',
                  icon: sources[2],
                  testID: 'THRID_TAB_BAR_BUTTON',
                  iconColor: 'white',
                  selectedIconColor: '#F02055',
                  selectedTextColor: '#F02055',
                  textColor: 'white',
                  fontSize: 14
                },
                topBar: {
                  visible: false,
                  height: 0
                },
                bottomTabs: {
                  backgroundColor: 'black'
                },
              }
            }
          }],
          backgroundColor: 'red',
        }
      }
    })
  });
}

export default admin;
