import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Persons from './Containers/Persons/Persons';
import Reducer from "./Store/reducers/PersonReducer";

class App extends Component {
  render() {
    return <Persons />;
  }
}

export default App;

let store = createStore(Reducer);

let app = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
