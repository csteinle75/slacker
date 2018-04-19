import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
	render(){
		return(
			<div>
				<Link to="/chat">Chat</Link>
				<Link to="/signin">Sign In </Link>
			</div>
		)
	}
}

export default Home