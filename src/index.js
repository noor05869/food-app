import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring pe rformance in your app, pass a function
// to log results (for example: repor tWebVitals(console.log))
// or send to an analytics endpoint. L earn more: https://bit.ly/CRA-vitals
