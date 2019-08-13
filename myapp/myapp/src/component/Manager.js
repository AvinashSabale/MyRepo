import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Manager extends Component {
	constructor() {
		super();
		this.state = {
			managers: []
		}
	}
	componentDidMount() {
		fetch('http://localhost:8080/manager')
		.then((res) => res.json())
		.then((result) => {
			this.setState({
				managers: result
			});
		})
		.catch((err) => console.log(err, 'err'))
	}
	render() {
		console.log(this.state.manager, 'manager');
		return (
			<div className="row">
			<h1 className="text-center">Manager Details</h1>
			<table border="1" className="table table-bordered table-hover">
				<tr>
					<th>email</th>
					<th>firstName</th>
					<th>lastName</th>
					<th>password</th>
					<th>dob</th>
					<th> address</th>
					<th> company</th>
				</tr>
				{
					this.state.managers.map((value, index)=> 
						<tr>
							<th>{ value.email }</th>
							<th>{ value.firstName }</th>
							<th>{ value.lastName }</th>
							<th>{ value.password }</th>
							<th>{ value.dob }</th>
							<th>{ value.address }</th>
							<th>{ value.company }</th>
						</tr>
					)
				}

			</table>
			</div>
		);
	}

} 

