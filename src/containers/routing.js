import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


var NavRoute = ()=>{
	return <Router>
				<div>
					<ul>
						<li><Link to="/dist">Home</Link></li>
						<li><Link to="/dist/about-us">About us</Link></li>
					</ul>
						
					<hr/>
					<Route exact path="/dist" component={Home}/>
					<Route path="/dist/about-us" component={Aboutus}/>
				</div>
			</Router>
	
}, Home=()=>(<div>Home info</div>),

Aboutus=()=>(<div>Aboutus info</div>);

export default NavRoute;