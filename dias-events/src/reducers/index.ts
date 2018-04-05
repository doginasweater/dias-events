import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { staticReducer } from 'components/static/staticredux';

export const rootReducer = combineReducers({
    form,
    staticReducer
});
