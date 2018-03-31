import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const fakeReducer = (state: any = {}, action: any): any => state;

export const rootReducer = combineReducers({
    fakeReducer,
    form
});
