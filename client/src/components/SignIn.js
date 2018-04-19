import React, {Component} from 'react'

class SignIn extends Component{
	render(){
		return(
			<div>
				<h1>Sign In</h1>
				<form>
					<input type="text" placeholder="username" />
					<input type="password" placeholder="password" />
				</form>
			</div>
		)
	}
}

export default SignIn