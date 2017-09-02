import MLSInput from './mlsinput'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	// constructor (props) {
	// 	super(props)
	// }

	render () {
		return <MLSInput />
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
