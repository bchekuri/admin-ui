import { LOADING_START, LOADING_END } from '../../constants/ActionType';

const initialState = Object.freeze({
    loading: false
});

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true
            }
        case LOADING_END:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default LoadingReducer;