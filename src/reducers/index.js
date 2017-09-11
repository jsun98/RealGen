const initialState = {
	activeItem: 'home',
	isSigninOpen: false,
	isSignupOpen: false,
}

const app = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_NAV':
			return Object.assign({}, state, { activeItem: action.choice })
		default:
			return state
	}
}

export default app
