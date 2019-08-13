import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ManagerSignup from './component/ManagerSignup';
import ManagerLogin from './component/ManagerLogin';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import EmployeeEdit from './component/EmployeeEdit';

const Routes = () => (
	<div>
		<BrowserRouter>
			<Header />
				<Switch>
					<Route exact path="/employee" component={EmployeeList} />
					<Route exact path="/signin" component={ManagerLogin} />
					<Route exact path="/employee-add" component={EmployeeAdd} />
					<Route exact path="/signup" component={ManagerSignup} />
					<Route exact path="/employee-edit" component={EmployeeEdit} />
				</Switch>
			<Footer />
		</BrowserRouter>
	</div>
);

export default Routes;