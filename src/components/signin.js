import React, { Component } from 'react'
import $ from 'jquery'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

export default class SignIn extends Component {

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
		$.ajax({
			url: '/auth/signin',
			method: 'POST',
			data: {
				email: this.state.email,
				password: this.state.password,
			},
		})
			.then(res => {
				// console.log(res)
				this.setState({ visible: false })
			})
			.fail(err => {
				// console.log(err)
			})
			.always(() => {
				this.setState({ loading: false })
			})
	}

	toggleVisibility () {
		this.setState({ visible: !this.state.visible })
	}

	onChangeHandler (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	render () {
		return (
			<div>
				<Button basic color="black" content="Sign In" icon="id card outline" onClick={this.toggleVisibility}/>
				<Modal closeIcon={true} size='small' open={this.state.visible} onClose={this.toggleVisibility}>
					<Modal.Header>Sign In</Modal.Header>
					<Modal.Content>
						<Form loading={this.state.loading} onSubmit={this.onSubmitHandler}>
							<Form.Field control={Input} onChange={this.onChangeHandler} name='email' label='Email' placeholder='Email' />
							<Form.Field control={Input} onChange={this.onChangeHandler} name='password' label='Password' placeholder='Password' />
							<Form.Field secondary control={Button}>Submit</Form.Field>
						</Form>
					</Modal.Content>
				</Modal>
			</div>
		)
	}
}
