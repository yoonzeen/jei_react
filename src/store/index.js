import { combineReducers, createStore } from 'redux';
import meetingrooms from './meetingrooms';
const rootReducer = combineReducers({
    meetingrooms
});

export const store = createStore(rootReducer);
