import { store } from "../store/Store";
import firebase from 'react-native-firebase';
import { Navigation } from "react-native-navigation";
import { logout, uiStartLoading, uiStopLoading, verifyId, setAuthData } from "../store/actions/index";
import start from "../screens/MainTabs/MainTabs";
import admin from "../screens/AdminTabs/AdminTabs";




export const authenticate = (id, otp, phone) => {
  store.dispatch(uiStartLoading());
  console.log('Try-Auth' + '\n' + phone + '\n' + otp);
  firebase.auth().signInWithPhoneNumber(phone)
    .then(confirmResult => {
      confirmResult.confirm(otp)
        .then(res => {
          console.log(res);
          store.dispatch(verifyId(res.uid));
          store.dispatch(uiStopLoading());
        })
        .catch(err => { console.log(err) });
    })
    .catch(error => console.log(error));
};


export const route = (id, uid) => {
  console.log('route');
  store.dispatch(uiStartLoading());
  firebase.firestore().collection('users').doc(uid).get().then(res => {
    console.log(res);
    if (res.exists) {
      if (res.data().role === "admin") {
        console.log("admin");
        store.dispatch(setAuthData(res.data().uid, res.data().phoneNumber, res.data().name));
        store.dispatch(uiStopLoading());
        admin();
      }
      else {
        console.log(res.data());
        store.dispatch(setAuthData(res.data().uid, res.data().phoneNumber, res.data().name));
        store.dispatch(uiStopLoading());
        start();
      }
    }
    else {
      console.log('name not found');
      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: "RNNv2.EnterNameScreen"
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
      store.dispatch(uiStopLoading());
    }
  });
}

export const setUserData = (uid, phone, name) => {
  console.log("set user Data");
  store.dispatch(uiStartLoading());
  firebase.firestore().collection('users').doc(uid).set({ uid: uid, phoneNumber: phone, name: name, role: "user" }).then(res => {
    store.dispatch(setAuthData());
    store.dispatch(uiStopLoading());
    start();
  });
}

export const onLogout = () => {

  firebase.auth().signOut()
    .then(res => {

      console.log(res);
      store.dispatch(logout());
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
    })
    .catch(err => console.log(err));

}

