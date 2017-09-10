import { connect } from 'react-redux'
import { updateNavHighlight } from '../actions/index'
import Nav from '../components/nav'

const mapStateToProps = state => ({ activeItem: state.navActiveItem })

const mapDispatchToProps = dispatch => ({
	onClick: (e, { name }) => {
		dispatch(updateNavHighlight(name))
	},
})

const NavContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav)

export default NavContainer
