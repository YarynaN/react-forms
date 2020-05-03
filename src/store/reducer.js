import {SET_PERSON_DATA} from "./actions";
import fire from '../fire';

const initialState = {
    personData: { },
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

const watchPersonData = (id) => {
    return function(dispatch) {
        fire.database().ref(`users/${id}`).on("value", function(snapshot)
        {
            var personData = snapshot.val();
            var actionSetPersonData = setPersonData(personData);
            dispatch(actionSetPersonData);
        }, function(error) { console.log(error); });
    }
};

export { setPersonData, watchPersonData };