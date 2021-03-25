import {Main} from "./routers";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import * as reducers from './redux'
import ThemeConfig from "./theme/ThemeConfig";
import React from "react";
import AppCss from "./App.css";

const App = () => {

  return (
    <ThemeConfig>
      <Main/>
    </ThemeConfig>
  );
}

const store = createStore(combineReducers(reducers))

const StoredApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default StoredApp;
