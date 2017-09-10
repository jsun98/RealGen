import React from 'react'
import PropTypes from 'prop-types'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Nav = ({ activeItem, onClick }) => {
	return (
		<Menu stackable>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={onClick}>
				<Link to="/">Home</Link>
			</Menu.Item>

			<Menu.Item name="about" active={activeItem === 'about'} onClick={onClick}>
				<Link to="/about">About</Link>
			</Menu.Item>

			<Menu.Item name="contact us" active={activeItem === 'contact us'} onClick={onClick}>
				<Link to="/contact">Contact Us</Link>
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
