import { pageLoadingStart, pageLoadingEnd } from "./LoadingAction";
import { UserService } from '../../service/UserService';
import { LOGIN_FAILED } from "../../constants/ActionType";

export const initiateLogin = (username, password, history) => {
    return function(dispatch) {
        dispatch(pageLoadingStart());
        UserService.login(username, password).then(user => {
            dispatch(pageLoadingEnd());
            history.push("/home");
        }, error => {
            dispatch(loginFailed(error));
            dispatch(pageLoadingEnd());
        });
    };
};

export const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    error
});
