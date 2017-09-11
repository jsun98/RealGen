import React from 'react'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

const SignIn = () => (
	<Modal closeIcon={true} size='small' trigger={<Button basic color="black" content="Sign In" icon="id card outline" />}>
		<Modal.Header>Sign In</Modal.Header>
		<Modal.Content>
			<Form>
				<Form.Field control={Input} name='email' label='Email' placeholder='Email' />
				<Form.Field control={Input} name='password' label='Password' placeholder='Password' />
				<Form.Field secondary control={Button}>Submit</Form.Field>
			</Form>
		</Modal.Content>
	</Modal>
)

export default SignIn