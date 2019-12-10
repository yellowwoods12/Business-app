import { TRY_AUTH, AUTH_VERIFY_ID, AUTH_SET_PHONE, AUTH_DATA, AUTH_CREDENTIAL, LOG_OUT } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import firebase from 'react-native-firebase';
import start from '../../screens/MainTabs/MainTabs';
import { authenticate } from "../../service/auth"



export const verifyId = (uid) => {
  return {
    type: AUTH_VERIFY_ID,
    isAuthenticated: true,
    uid: uid,
  }
}

export const setPhone = (authData, authMode) => {
  if (authData) {
    phone = "+91" + authData.toString();

  }
  return {
    type: AUTH_SET_PHONE,
    phone: phone,
    mode: authMode,
  }
}

export const setCredential = (uid, phone) => {
  return {
    type: AUTH_CREDENTIAL,
    uid: uid,
    phone: phone,
  }

}


export const setAuthData = (uid, phone, name) => {
  return {
    type: AUTH_DATA,
    uid: uid,
    phone: phone,
    name: name
  }
};


export const logout = () => {
  return {
    type: LOG_OUT
  }
}

