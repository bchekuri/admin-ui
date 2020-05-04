import {LOGIN, LOGIN_FAILED} from '../../constants/ActionType';


const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}

export default UserReducer;