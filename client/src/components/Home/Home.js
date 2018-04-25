import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import {callFoo} from 'actions/authActions'

//styles
import 'styles/Home.css'

class Home extends Component {
	
	callProtected = (e) =>{
		e.preventDefault()
		callFoo()
	}

	render(){
		return(
			<div className="homeWrapper">
	
			</div>
		)
	}
}

export default Home