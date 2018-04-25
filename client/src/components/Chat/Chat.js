import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendMessage} from 'actions/chatActions'
import moment from 'moment'

//styles
import 'styles/Chat.css'

class Chat extends Component {
	static defaultProps = {
		messages: []		
	}

	state = {
		message: ''
	}

	handleSubmit = (e) => {
		const timestamp = moment().format("LT")
		e.preventDefault()
		sendMessage({
			message: this.state.message,
			timestamp: timestamp
		})
		this.setState({
			message: ''
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render(){
		return(
			<div>
				<div className="chatWrapper">
					<div className="chatMessages">
						{this.props.messages.map((msg, i) => (
								<div key={"msg-" + i}>
									<p>{msg.timestamp}: {msg.message}</p>
								</div>
							))}
					</div>
					<form className="chatInputForm" onSubmit={this.handleSubmit} autoComplete="off">
						<input className="chatInput" onChange={this.handleChange} type="text" name="message" value={this.state.message}/>
						<button className="chatSubmit" type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		messages: state.chatReducer.messages
	}
}

export default connect(mapStateToProps)(Chat)