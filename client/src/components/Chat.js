import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendMessage} from 'actions/actions'

class Chat extends Component {
	static defaultProps = {
		messages: []		
	}

	state = {
		message: ''
	}



	handleSubmit = (e) => {
		console.log(e)
		e.preventDefault()
		sendMessage(this.state.message)
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
				<form onSubmit={this.handleSubmit} autocomplete="off">
					<input onChange={this.handleChange} type="text" name="message" value={this.state.message}/>
					<button type="submit">Submit</button>
				</form>
				<div className="messages">
					{this.props.messages.map(msg => (
							<div>
								<p>{msg.message}</p>
							</div>
						))}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(Chat)