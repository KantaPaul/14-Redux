import * as actionTypes from '../actions';

let intialState = {
    result: []
};

let reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({
                    id: new Date(),
                    value: action.result
                })
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