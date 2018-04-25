import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {signout, callFoo} from 'actions/authActions'

class LoggedIn extends Component {
	
	callProtected = (e) =>{
		e.preventDefault()
		callFoo()
	}

	callSignout = (e) =>{
		e.preventDefault()
		signout()
		this.props.history.push('/signin')
	}

	render(){
		return(
			<ul>
				<h1>Signed In</h1>
				<button onClick={this.callProtected}>Call Protected</button>
				<button onClick={this.callSignout}>Sign Out</button> 
			</ul>
		)
	}
}

export default  withRouter(LoggedIn)