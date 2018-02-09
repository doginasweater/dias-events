import { combineReducers } from 'redux';

const fakeReducer = (state: any = {}, action: any): any => state;

export const rootReducer = combineReducers({
    fakeReducer
});
