import axios from 'axios'
import history from '../hoc/history'

import { GET_USERS, USER_DASHBOARD, GET_CONNECTIONS, FLASH_MESSAGE} from './types'

export function getUsers(filterParams) {
  return dispatch => {
    let token = localStorage.getItem('token');
    axios.get(`/connections`, { params:{ isTechnical : filterParams || "all" }, headers: { Authorization: `Bearer ${token}` } }).then(response => {
      dispatch({ type: GET_USERS, payload: response.data })
    }).catch(error => {
        dispatch({ type: FLASH_MESSAGE, payload: 'Failed to load users'})
    })
  };
}

export function requestConnection(requestedUser) {
	return dispatch => {
		let token = localStorage.getItem('token');
		axios.post(`/connections/connectionrequest`, { requestedUser }, { headers: { Authorization: `Bearer ${token}`}}).then(response => {
			dispatch({ type: FLASH_MESSAGE, payload: 'Connected request sent' });
			dispatch(getPendingConnections());
			history.push('/connect');
		}).catch(error => {
			dispatch({ type: FLASH_MESSAGE, payload: 'ERROR: requestConnection'})
	})
	}
}

export function getPendingConnections() {
	return dispatch => {
		let token = localStorage.getItem('token');
		axios.get(`/connections/pendingconnections`, { headers: { Authorization: `Bearer ${token}`}}).then(response => {
			dispatch({ type: GET_CONNECTIONS, payload: response.data })
		}).catch(error => {
			dispatch({ type: FLASH_MESSAGE, payload: 'ERROR: getPendingConnections'})			
		})
	}
}

export function pendingConnectionResponse({ connectionRequest, action }) {
	return dispatch => {
		let token = localStorage.getItem('token');
		axios.post(`/connections/pendingconnectionresponse`, { connectionRequest, action }, { headers: { Authorization: `Bearer ${token}`}}).then(response => {
			dispatch({ type: FLASH_MESSAGE, payload: response.data.message  })
			//Need to dispatch a getCurrentConnections that routes to Connections reducer - Currently only serving current connections from User.connections
			history.push('/dashboard')
		}).catch(error => {
			dispatch({ type: FLASH_MESSAGE, payload: 'Request failed. Please try again' })
		})
	}
}

export function blockConnection(blockedUserId) {
	return dispatch => {		
		let token = localStorage.getItem('token');
		axios.post(`/connections/blockconnection`, { blockedUserId }, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
			dispatch({ type: FLASH_MESSAGE, payload: response.data.message })
			dispatch({ type: USER_DASHBOARD, payload: response.data })
			history.push('/dashboard')
		}).catch(error => {			
			dispatch({ type: FLASH_MESSAGE, payload: 'Blocking of connection failed. Please try again.' })
		})
	}
}
