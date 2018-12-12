let intialState = {
  counter: 0
};

let reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.value
      };
      break;
    case "DECREMENT":
      return {
        counter: state.counter - action.value
      };
    case "ADD":
      return {
        counter: state.counter + action.value
      };
    case "SUB":
      return {
        counter: state.counter - action.value
      };
  }
  return state;
};

export default reducer;
