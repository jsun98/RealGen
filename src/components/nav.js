import React from 'react'
import PropTypes from 'prop-types'
import { Button, Menu } from 'semantic-ui-react'

const Nav = ({ activeItem, onClick }) => {
	console.log(activeItem)
	console.log(onClick)
	return (
		<Menu stackable>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={onClick}>
			Home
			</Menu.Item>

			<Menu.Item name="about" active={activeItem === 'about'} onClick={onClick}>
			About
			</Menu.Item>

			<Menu.Item name="contact us" active={activeItem === 'contact us'} onClick={onClick}>
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
		</Menu>
	)
}

Nav.propTypes = {
	activeItem: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Nav
//
// export default class Nav extends Component {
// 	constructor (props) {
// 		super(props)
// 		this.state = { activeItem: 'home' }
// 		this.handleItemClick = this.handleItemClick.bind(this)
// 	}
//
// 	handleItemClick (e, { name }) {
// 		this.setState({ activeItem: name })
// 	}
//
// 	render () {
// 		const activeItem = this.state.activeItem
//
//
// 	}
// }
