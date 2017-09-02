import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'


export default class Nav extends Component {
	constructor (props) {
		super(props)
		this.state = { activeItem: 'home' }
		this.handleItemClick = this.handleItemClick.bind(this)
	}

	handleItemClick (e, { name }) {
		this.setState({ activeItem: name })
	}

	render () {
		const activeItem = this.state.activeItem

		return (<Menu stackable>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
			Home
			</Menu.Item>

			<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
			About
			</Menu.Item>

			<Menu.Item name="contact us" active={activeItem === 'contact us'} onClick={this.handleItemClick}>
			Contact Us
			</Menu.Item>

			<Menu.Menu position="right">
				<Menu.Item>
					<Button basic color="black" content="Sign In" icon="id card outline" />
				</Menu.Item>
				<Menu.Item>
					<Button basic color="black" content="Sign Up" icon="add user" />
				</Menu.Item>
			</Menu.Menu>
      </Menu>)
	}
}
