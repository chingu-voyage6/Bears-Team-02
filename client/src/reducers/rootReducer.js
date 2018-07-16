import { combineReducers } from 'redux';
import userReducer from './User/userReducer';
import { reducer as form } from 'redux-form';

const initialState = {
	authenticated: false,
};

const rootReducer = combineReducers({
	User: userReducer,
	initialState,
	form,
});

export default rootReducer;
