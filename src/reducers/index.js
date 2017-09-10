const initialState = { navActiveItem: 'home' }

const app = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_NAV_HIGHLIGHT':
			return Object.assign({}, state, { navActiveItem: action.choice })
		default:
			return state
	}
}

export default app
