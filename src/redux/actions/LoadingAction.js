import { LOADING_END, LOADING_START } from "../../constants/ActionType";

export const pageLoadingStart = () => ({
    type: LOADING_START
});

export const pageLoadingEnd = () => ({
    type: LOADING_END
});