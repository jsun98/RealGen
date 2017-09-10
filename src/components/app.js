import Hero from './hero'
import Nav from '../containers/nav'
import About from './about'
import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	// Link,
} from 'react-router-dom'


const App = () => {
	return (
		<Router>
			<div>
				<Nav />
				<Route exact path="/" component={Hero}/>
				<Route path="/about" component={About}/>
			</div>
		</Router>
	)
}

export default App
