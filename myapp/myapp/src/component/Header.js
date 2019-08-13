import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		
<div>
	<div>
			<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="#"><span class="fa fa-coffee" aria-hidden="true"></span></a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">Home</a></li>
			<li><Link to="employee">Employee</Link></li>
			<li><a href="signup">Signup</a></li>
				<li><a href="signin">Signin</a></li>
			<li><a href="#">ContactUs</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
		
			<li><a href="#"><span
				class="glyphicon glyphicon-log-in"></span> LogOut</a>
			</li>
		</ul>
	</div>
	</nav>
	<div class="banner">
		<div class="banner-layer">
			<h1 class="title-w3layouts">
				<span class="fa fa-coffee" aria-hidden="true"></span>MindBowser
			</h1>
			</div>
		
		</div>
		</div>
	
		</div>
			);
}

export default Header;






