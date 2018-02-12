// IMPORT REACT
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

class Signin extends Component{

	constructor(props) {
		super(props);
	}

	handleSubmit(){
		//LOGIN WITH PASSPORT-LOCAL
	}

	render(){
	  return(
	    <div className="">

	    	<form action="/login" method="post">
			    <div>
			        <label>Username:</label>
			        <input type="text" name="username"/>
			    </div>
			    <div>
			        <label>Password:</label>
			        <input type="password" name="password"/>
			    </div>
			    <div>
			        <input type="submit" value="Log In"/>
			    </div>
			</form>

			<h3>Not registered?</h3>
			<p>
				<NavLink to={'/signup'} exact className="nav-link">Click here to create an account</NavLink>
			</p>

	    </div>
	  )
	}
}

// EXPORT COMPONENT
export default Signin;