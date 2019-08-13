import React, { Component } from 'react';

export default class ManagerLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			redirect: false
		}
		this.setValues = this.setValues.bind(this);
		this.save = this.login.bind(this);
	}
	setValues(event) {
		//console.log(event.target.name, event.target.value)
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	login(event) {
		event.preventDefault();
		//console.log(this.state.price, this.state.name, 'event');
		const data = {
			email: this.state.email,
			password: this.state.password
		}
		//console.log(data, 'data')
		fetch('http://localhost:8080/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => res.json())
		.then((result) => {
			this.setState({redirect: true});
		})
		.catch((err) => console.log(err, 'err'))
	}
	render() {
		if (this.state.redirect) {
			this.props.history.push('/signin');
		}
		return (
			<div className="col-md-6">
			<h4>Manager Login Form</h4>
			<form onSubmit={this.login}>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email: </label>
			    <input type="text" class="form-control" name="email" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword">password: </label>
			    <input type="password" onChange={this.setValues} class="form-control" name="password" placeholder="" />
			  </div>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
			</div>
		);
	}
}