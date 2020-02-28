import React from "react";
import ReactDom from "react-dom";
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css"
import "./style.css"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from "./components/App";
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
  <Provider store={store} >
    <App></App>
  </Provider>
  ,document.querySelector("#root"));
