import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

const Logo = () => {
	return (
		<div>
			<Header as="h1" textAlign="center" className="brandname" icon>
				<span className="brandname">
				RealGen
				</span>
				<Header.Subheader>
				Generate Attractive Real Estate Listing Web Templates In Seconds.
				</Header.Subheader>
			</Header>
			<Divider />
		</div>
	)
}

export default Logo
