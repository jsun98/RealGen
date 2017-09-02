import MLSInput from './mlsinput'
import Nav from './nav'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	// constructor (props) {
	// 	super(props)
	// }

	render () {
		return (
			<div>
				<Nav />
				<MLSInput />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
