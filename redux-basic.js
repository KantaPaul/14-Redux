let redux = require("redux");
let createStore = redux.createStore;

// reducer
let intialState = {
  counter: 0
};

let rootReducer = (state = intialState, action) => {
    if (action.type === 'ADD_ACTION') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'INC_ACTION') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
  return state;
};

// store
let store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('Subscription', store.getState());
})

// dispatching action
store.dispatch({type: 'ADD_ACTION'})
store.dispatch({type: 'INC_ACTION', value: 10})
console.log(store.getState());

