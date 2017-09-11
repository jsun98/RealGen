import React from 'react'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

const SignIn = () => (
	<Modal closeIcon={true} size='small' trigger={<Button basic color="black" content="Sign Up" icon="add user" />}>
		<Modal.Header>Sign Up</Modal.Header>
		<Modal.Content>
			<Form>
				<Form.Group widths='equal'>
					<Form.Field control={Input} name='first_name' label='First name' placeholder='First name' />
					<Form.Field control={Input} name='last_name' label='Last name' placeholder='Last name' />
				</Form.Group>
				<Form.Field control={Input} name='email' label='Email' placeholder='Email' />
				<Form.Field control={Input} name='password' label='Password' placeholder='Password' />
				<Form.Field secondary control={Button}>Submit</Form.Field>
			</Form>
		</Modal.Content>
	</Modal>
)

export default SignIn
