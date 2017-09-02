import { Divider, Input, Header } from 'semantic-ui-react'
import React, { Component } from 'react'


class MLSInput extends Component {
	render () {
		return <div className = "MLSInputContainer">
			<Header as="h1" textAlign="center" className="brandname" icon>
				<span className="brandname">
					RealGen
				</span>
				<Header.Subheader>
					Generate Attractive Real Estate Listing Web Templates In Seconds.
				</Header.Subheader>
			</Header>
			<Divider />
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
		</div>
	}
}


export default MLSInput
