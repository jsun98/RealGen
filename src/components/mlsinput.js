import { Input } from 'semantic-ui-react'
import React, { Component } from 'react'

class MLSInput extends Component {
	render () {
		return (
			<Input
				action={{
					color: 'black',
					labelPosition: 'right',
					content: 'Generate',
					icon: 'cloud upload',
				}}
				className="MLSInput"
				placeholder="Enter Multiple Listing Service (MLS) Number"
			/>
		)
	}

}


export default MLSInput
