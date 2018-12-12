import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.scss";
import Counter from "./Containers/Counter/Counter";
import { createStore } from "redux";
import Reducer from "./Store/reducer";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return <Counter />;
  }
}

let store = createStore(Reducer);

export default App;

let app = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
