// import React from 'react'
// import { Button, Form, Input, Modal } from 'semantic-ui-react'
//
// const SignIn = () => (
// 	<Modal closeIcon={true} size='small' trigger={<Button basic color="black" content="Sign Up" icon="add user" />}>
// 		<Modal.Header>Sign Up</Modal.Header>
// 		<Modal.Content>
// 			<Form>
// 				<Form.Group widths='equal'>
// 					<Form.Field control={Input} name='first_name' label='First name' placeholder='First name' />
// 					<Form.Field control={Input} name='last_name' label='Last name' placeholder='Last name' />
// 				</Form.Group>
// 				<Form.Field control={Input} name='email' label='Email' placeholder='Email' />
// 				<Form.Field control={Input} name='password' label='Password' placeholder='Password' />
// 				<Form.Field secondary control={Button}>Submit</Form.Field>
// 			</Form>
// 		</Modal.Content>
// 	</Modal>
// )
//
// export default SignIn

import React, { Component } from 'react'
import $ from 'jquery'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

export default class SignUp extends Component {

	constructor (props) {
		super(props)
		this.state = {
			loading: false,
			visible: false,
		}
		this.onSubmitHandler = this.onSubmitHandler.bind(this)
		this.toggleVisibility = this.toggleVisibility.bind(this)
		this.onChangeHandler = this.onChangeHandler.bind(this)

	}

	onSubmitHandler (e) {
		e.preventDefault()
		this.setState({ loading: true })
		console.log(this.state.first_name)
		$.ajax({
			url: '/auth/signup',
			method: 'POST',
			data: {
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password,
			},
		})
			.then(res => {
				console.log(res)
				this.setState({ visible: false })
			})
			.fail(err => {
				console.log(err)
			})
			.always(() => {
				this.setState({ loading: false })
			})
	}

	onChangeHandler (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	toggleVisibility () {
		this.setState({ visible: !this.state.visible })
	}

	render () {
		return (
			<div>
				<Button basic color="black" content="Sign Up" icon="add user" onClick={this.toggleVisibility}/>
				<Modal closeIcon={true} size='small' open={this.state.visible} onClose={this.toggleVisibility}>
					<Modal.Header>Sign Up</Modal.Header>
					<Modal.Content>
						<Form loading={this.state.loading} onSubmit={this.onSubmitHandler}>
							<Form.Group widths='equal'>
								<Form.Field control={Input} name='first_name' label='First name' onChange={this.onChangeHandler} placeholder='First name' />
								<Form.Field control={Input} name='last_name' label='Last name' onChange={this.onChangeHandler} placeholder='Last name' />
							</Form.Group>
							<Form.Field control={Input} name='email' label='Email' onChange={this.onChangeHandler} placeholder='Email' />
							<Form.Field control={Input} name='password' label='Password' onChange={this.onChangeHandler} placeholder='Password' />
							<Form.Field secondary control={Button}>Submit</Form.Field>
						</Form>
					</Modal.Content>
				</Modal>
			</div>
		)
	}
}
