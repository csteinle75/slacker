import React, {Component} from 'react'
import {signinUser} from 'actions/authActions'
import {withRouter} from 'react-router-dom'

class LoginForm extends Component {
	state = {
		loginUser: '',
		loginPass: ''
	}

	handleChange = (e) =>{
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSignin = (e) =>{
		e.preventDefault()
		signinUser(this.state.loginUser, this.state.loginPass, () => {
			this.props.history.push('/chat')
		})
	}

	render(){
		return(
			<div className="formWrapper">
				<h3 className="inputTitles">Sign In</h3>
				<form onSubmit={this.handleSignin}>
					<input type="text" onChange={this.handleChange} name="loginUser" placeholder="username" value={this.state.loginUser}/>
					<input type="password" onChange={this.handleChange} name="loginPass" placeholder="password" value={this.state.loginPass} className="lastInput"/>
					<button type="submit">Sign In</button>
				</form>
			</div>
		)
	}
}

export default withRouter(LoginForm)