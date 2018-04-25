const initialState = {
	isAuthorized: false
}

export default function (state = initialState, action){
	switch (action.type){
		case 'LOGIN_SUCCESS':
			return {...state, isAuthorized: true}
		case 'LOGOUT_SUCCESS':
			return {...state, isAuthorized: false}
		default:
			return state
	}
}