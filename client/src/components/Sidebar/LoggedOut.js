import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {callFoo} from 'actions/authActions'

class LoggedOut extends Component {
	callProtected = (e) =>{
		e.preventDefault()
		callFoo()
	}

	render(){
		return(
			<ul>
				<li><Link to="/chat" className="chatLink">Chat</Link></li>
				<li><Link to="/signin" className="signinLink">Sign In </Link></li>
				<button onClick={this.callProtected}>Call Protected</button>
			</ul>
		)
	}
}

export default LoggedOut