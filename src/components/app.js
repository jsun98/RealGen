import MLSInput from './mlsinput'
import Nav from '../containers/nav'
import React, { Component } from 'react'


export default class App extends Component {
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
