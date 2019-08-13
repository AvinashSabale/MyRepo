import React, { Component } from 'react';

export default class ManagerSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			dob: '',
			address: '',
			company:'',
			redirect: false
		}
		this.setValues = this.setValues.bind(this);
		this.save = this.save.bind(this);
	}
	setValues(event) {
		//console.log(event.target.name, event.target.value)
		this.setState({
			[event.target.name]: event.target.value
		});
	
	}
	save(event) {
		event.preventDefault();
		//console.log(this.state.price, this.state.name, 'event');
		const data = {
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			password: this.state.password,
			dob: this.state.dob,
			address: this.state.address,
			company: this.state.company
		}
		//console.log(data, 'data')
		fetch('http://localhost:8080/signup', {
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
			this.props.history.push('/signup');
		}
		return (
			<div className="col-md-6">
			<h4>Manager Sign Up</h4>
			<form onSubmit={this.save}>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email: </label>
			    <input type="text" class="form-control" name="email" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputFristName">First Name: </label>
			    <input type="text" class="form-control" name="firstName" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter First Name" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputLastName">Last Name: </label>
			    <input type="text" class="form-control" name="lastName" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter Last Name" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword">password: </label>
			    <input type="password" onChange={this.setValues} class="form-control" name="password" placeholder="" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputDOB">Date of Birth: </label>
			    <input type="text" class="form-control" name="dob" onChange={this.setValues} aria-describedby="emailHelp" placeholder="DOB" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputAddress">Address: </label>
			    <input type="text" class="form-control" name="address" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter Address" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputCompany">Comapny: </label>
			    <input type="text" class="form-control" name="company" onChange={this.setValues} aria-describedby="emailHelp" placeholder="Enter Comapny" />
			  </div>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
			</div>
		);
	}
}