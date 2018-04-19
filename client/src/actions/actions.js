import io from 'socket.io-client'
import store from 'services/store'

const socket = io.connect('http://localhost:3001')

socket.on('message', data => {
	addMessage(data)
})

export function sendMessage(message){
	socket.emit('message', {
		message: message
	})
}

export function addMessage(message) {
	 store.dispatch({
	 	type: 'ADD_MESSAGE',
	 	payload: message
	 })
}