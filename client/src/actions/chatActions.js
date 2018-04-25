import io from 'socket.io-client'
import store from 'services/store'


const socket = io.connect('http://localhost:3001')

socket.on('message', data => {
	addMessage(data)
})

export function sendMessage(msgObj){
	socket.emit('message', {
		message: msgObj.message,
		timestamp: msgObj.timestamp
	})
}

export function addMessage(message) {
	 store.dispatch({
	 	type: 'ADD_MESSAGE',
	 	payload: message
	 })
}
