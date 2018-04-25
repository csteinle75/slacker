import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//components
import Home from 'components/Home/Home'
import Chat from 'components/Chat/Chat'
import SignIn from 'components/SignIn/SignIn'
import Sidebar from 'components/Sidebar/Sidebar'

//styles
import 'normalize.css/normalize.css'
import 'styles/App.css'

class App extends Component {
	render(){
		return(
			<Router>
				
					<div>
						<div className="appHead">
							<h1>Slacker</h1>
						</div>
						
						<div className="appContainer">
							<Sidebar />
							<div className="pageDisplay">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/signin" component={SignIn} />
									<Route path="/chat" component={Chat} />
								</Switch>
							</div>
						</div>
					</div>
				
			</Router>
		)
	}
}



export default App

