import React, {Component} from 'react'
import {registerUser} from 'actions/authActions'
import {withRouter} from 'react-router-dom'

class RegisterForm extends Component {
	state = {
		registerUser: '',
		registerPass: '', 
		registerConfirm: ''
	}

	handleChange = (e) =>{
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleRegister = (e) =>{
		e.preventDefault()
		if(this.state.registerPass === this.state.registerConfirm){
			registerUser(this.state.registerUser, this.state.registerPass, () => {
				this.props.history.push('/chat')
			})
		} else {
			alert('Passwords Must Match')
		}
	}

	render(){
		return(
			<div className="formWrapper">
				<h3 className="inputTitles">Register New Account</h3>
				<form onSubmit={this.handleRegister}>
					<input type="text" onChange={this.handleChange} name="registerUser" placeholder="username" value={this.state.registerUser}/>
					<input type="password" onChange={this.handleChange} name="registerPass" placeholder="password" value={this.state.registerPass}/>
					<input type="password" onChange={this.handleChange} name="registerConfirm" placeholder="confirm password" value={this.state.registerConfirm} className="lastInput"/>
					<button type="submit">Register</button>
				</form>
			</div>
		)
	}
}

export default withRouter(RegisterForm)