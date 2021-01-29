import {SET_PERSON_DATA} from "./actions";

const initialState = {
    personData: {
        userName: '',
        catName: '',
        age: ''
    },
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PERSON_DATA:
            return { ...state, personData: action.value };
        default:
            return state;
    }
};

export default reducer;

//
// Action Creators
//
const setPersonData = (personData) => {
    return {
        type: SET_PERSON_DATA,
        value: personData
    };
};

export { setPersonData };