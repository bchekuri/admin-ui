import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    debugger;
    return createStore(reducer, initialState, applyMiddleware(thunk));
}