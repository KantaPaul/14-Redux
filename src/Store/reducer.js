import * as actionTypes from './actions';

let intialState = {
  counter: 0,
  result: []
};

let reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // let newState = Object.assign({}, state);
      // newState.concat = state.counter + 1;
      return {
        ...state,
        counter: state.counter + action.value
      };
      // return newState;
      break;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({id: new Date(),value: state.counter})
      };
      case actionTypes.DELETE_RESULT:
      let newArray = state.result.filter(index => index.id !== action.resultid)
        return {
          ...state,
          result: newArray
        }
  }
  return state;
};

export default reducer;
