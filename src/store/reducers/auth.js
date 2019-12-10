import { AUTH_VERIFY_ID, AUTH_SET_PHONE, AUTH_SET_NAME, AUTH_DATA, AUTH_CREDENTIAL, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  name: null,
  isAuthenticated: false,
  phone: null,
  uid: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_VERIFY_ID:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        uid: action.uid,
      }
    case AUTH_SET_PHONE:
      return {
        ...state,
        phone: action.phone,
      }
    case AUTH_DATA:
      return {
        ...state,
        uid: action.uid,
        phone: action.phone,
        name: action.name,
      }
    case AUTH_CREDENTIAL:
      return {
        ...state,
        uid: action.uid,
        phone: action.phone,
      }
    case LOG_OUT:
      return {
        ...state,
        uid: null,
        phone: null,
        name: null,
        isAuthenticated: false,
      }
    default:
      return state;
  }
};

export default reducer;
