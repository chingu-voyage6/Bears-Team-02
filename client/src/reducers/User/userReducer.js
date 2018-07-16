import { SIGN_UP, LOG_IN, USER_DASHBOARD, LOGGED_OUT, AUTHENTICATED, ERROR } from '../../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case SIGN_UP:
			return { ...state, authenticated: true };
		case LOG_IN:
			return { ...state, authenticated: true };
		case AUTHENTICATED:
				return { ...state, authenticated: true };
		case ERROR:
			return { ...state, error: action.payload };
		case USER_DASHBOARD:
			return { ...state, user: action.payload };
		case LOGGED_OUT:
			return { ...state, authenticated: false };
		default:
			return state;
	}
}
