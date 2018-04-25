import store from 'services/store'
import api from 'services/api'
api.new('/api')



export function registerUser(username, password, func) {
	api.register(username, password).then( () => {func()} ).catch(err => console.log(err))
}

export function signinUser(username, password, func) {
	api.login(username, password).then(() => {
		
		store.dispatch({
			type: 'LOGIN_SUCCESS'
		})

		func()
	}).catch(err => console.log(err))
}

export function signout(){
	api.logout()
	store.dispatch({
		type: 'LOGOUT_SUCCESS'
	})
}

export function callFoo(){
	api.get('/foo').then(resp => console.log(resp.data))
}