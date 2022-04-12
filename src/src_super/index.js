import React from "react";
import ReactDOM from "react-dom";

import App from "./src_event/App";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
