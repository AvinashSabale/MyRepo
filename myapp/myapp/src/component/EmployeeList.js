import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmployeeList extends Component {
	constructor() {
		super();
		this.state = {
			employees: []
		}
	}
	componentDidMount() {
		fetch('http://localhost:8080/getEmployees')
		.then((res) => res.json())
		.then((result) => {
			this.setState({
				employees: result
			});
		})
		.catch((err) => console.log(err, 'err'))
	}
	delete(event, index, id) {
		if (id) {
			fetch('http://localhost:8080/deleteEmployee/'+id,{
				method: 'DELETE'
			}).then((res) => {
				this.state.products.splice(index, 1);
				this.setState({
					products: this.state.products
				});
			})
			.catch((err) => console.log(err, 'error...'))
		} else {	
			alert('record not found');
		}
	}
	render() {
		console.log(this.state.employees, 'employees');
		return (
			<div className="row">
			<h1 className="text-center">List of Employees</h1>
			<Link to="addEmployee" className='btn btn-success'>Add Employee</Link>
			<table border="1" className="table table-bordered table-hover">
				<tr>
					<th>Employee Id</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Address</th>				
					<th>Date of Birth</th>
					<th>Mobile Number</th>
					<th>City</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
				{
					this.state.employees.map((value, index)=> 
						<tr>
							<th>{ value.empId }</th>
							<th>{ value.firstName }</th>
							<th>{ value.lastName }</th>
							<th>{ value.address }</th>
							<th>{ value.dob }</th>
							<th>{ value.mobile }</th>
							<th>{ value.city }</th>
							<th><Link to={`/employee-edit/${value.empId}`}>Update</Link></th>
							<th onClick={(e) => this.delete(e, index, value.empId)}>Delete</th>
						</tr>
					)
				}

			</table>
			</div>
		);
	}

} 

