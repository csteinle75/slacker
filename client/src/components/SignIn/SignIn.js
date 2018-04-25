import React, {Component} from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

import 'styles/SignIn.css'

class SignIn extends Component{

	render(){
		return(
			<div>
				<div className="signinWrapper">
					<div className="formsContainer">
						<LoginForm />
						<RegisterForm />
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn