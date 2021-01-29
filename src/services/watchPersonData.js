import fire from "../fire";
import {setPersonData} from "../store/reducer";

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

export { watchPersonData };
