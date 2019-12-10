import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/ui";
import authReducer from "./reducers/auth";
import sessionReducer from "./reducers/session";
import chatReducer from "./reducers/chat";


const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  session: sessionReducer,
  chat: chatReducer
});

let composeEnhancers = compose;


if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] Dispatching', action);
//       const result = next(action);
//       console.log('[Middleware] next state', store.getState());
//       return result;
//     }
//   }
// };

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;

