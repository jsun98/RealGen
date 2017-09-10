import { connect } from 'react-redux'
import { updateNav } from '../actions/index'
import Nav from '../components/nav'

const mapStateToProps = state => ({ activeItem: state.activeItem })

const mapDispatchToProps = dispatch => ({
	onClick: (e, { name }) => {
		dispatch(updateNav(name))
	},
})

const NavContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav)

export default NavContainer
