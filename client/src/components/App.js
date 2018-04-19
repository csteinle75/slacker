import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//components
import Home from 'components/Home'
import Chat from 'components/Chat'
import SignIn from 'components/SignIn'


class App extends Component {
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/chat" component={Chat} />
					<Route path="/signin" component={SignIn} />
				</Switch>
			</Router>
		)
	}
}



export default App

