import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import { logger } from 'redux-logger';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    // add support for Redux dev tools
    const composeEnhancers =
        (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;;
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant(), logger))
    );
}