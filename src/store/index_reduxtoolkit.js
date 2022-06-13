import { configureStore } from '@reduxjs/toolkit';
import meetingrooms from './meetingrooms';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
export const init = () => ({ type: 'INIT' });
const reducer = (state, action) => {
    if (action.type === 'INIT') {
        state = undefined;
    }
    return combineReducers({
        meetingrooms
    })(state, action);
};
export default configureStore({
    reducer,
    middleware: (base) => base().concat(logger)
});
