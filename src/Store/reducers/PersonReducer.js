import * as actionTypes from './PersonActions';

const initialState = {
    persons: []
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            let newPerson = {
                name: action.personData.name,
                age: action.personData.age,
                id: Math.random()
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;
}

export default reducer;