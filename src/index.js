import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./containers/App";
import "./index.css";
import "tachyons";
import { searchRobots } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
