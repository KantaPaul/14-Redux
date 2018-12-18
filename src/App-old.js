import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.scss";
import Counter from "./Containers/Counter/Counter";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from './Store/reducers/counter';
import resultReducer from './Store/reducers/result';

class App extends Component {
  render() {
    return <Counter />;
  }
}


let rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})

let store = createStore(rootReducer);

export default App;

let app = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
