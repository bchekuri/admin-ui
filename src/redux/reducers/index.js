import { combineReducers } from 'redux';
import loading from './LoadingReducer';
import user from './UserReducer';


export default combineReducers({
    loading,
    user
});