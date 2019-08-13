import React, { Component } from 'react';

export default class EmployeeEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			empId: props.match.params.empId,
			firstName: '',
			lastName: '',
			address: '',
			password: '',
			dob: '',
			mobile: '',
			city: '',
			redirect: false
		}
		this.setValues = this.setValues.bind(this);
		this.save = this.save.bind(this);
	}
	componentDidMount() {
		fetch('http://localhost:8080/updateEmployee/'+this.state.empId)
		.then((res) => res.json())
		.then((result) => {
			console.log(result, 'result...')
			this.setState({
				empId: result.empId,
				firstName: result.firstName,
				lastName: result.lastName,
				address: result.address,
				password: result.password,
				dob: result.dob,
				mobile: result.mobile,
				city: result.city
			})
		})
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
		empId: this.state.empId,
			empId: this.state.empId,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			dob: this.state.dob,
			mobile: this.state.mobile,
			city: this.state.city
		}
		//console.log(data, 'data')
	{/*
	http://localhost:2000/products/2'
	*/}
		fetch('http://localhost:8080/updateEmployee/'+this.state.empId, {
			method: 'put',
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
			this.props.history.push('/product');
		}
		return (
			<div className="col-md-6">
			<h4>Product Edit Form</h4>
			<form onSubmit={this.save}>
			<div class="form-group">
			    <label for="exampleInputFirstName">Employee Id: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="empId" placeholder="Emp Id" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputFirstName">First Name: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="firstName" placeholder="First Name" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputLastName">Last Name: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="lastName" placeholder="Last Name" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputAddress">Address: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="address" placeholder="Address" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputDOB">Date of Birth: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="dob" placeholder="Date of Birth" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputMobile">Mobile: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="mobile" placeholder="Mobile" />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputCity">City: </label>
			    <input type="text" onChange={this.setValues} class="form-control" name="city" placeholder="City" />
			  </div>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
			</div>
		);
	}
}