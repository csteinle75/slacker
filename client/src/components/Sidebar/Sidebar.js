import React, {Component} from 'react'
import {connect} from 'react-redux'

//components
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

//styles
import 'styles/App.css'

class Sidebar extends Component {

	render(){
		return(
			<div className="leftSidebar">
				{this.props.loggedIn === true ? <LoggedIn /> : <LoggedOut />}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		loggedIn: state.authReducer.isAuthorized
	}
}

export default connect(mapStateToProps)(Sidebar)