import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap'

export class Header extends Component {

	render() {
		return (
			<Navbar inverse style={{borderRadius:0}}>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <Link to="/">CryptoInfo</Link>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Nav>
			  	<li><Link to="/news">News</Link></li>
			  	<li><Link to="/currencies">Currencies</Link></li>
			  	<li><Link to="/converter">Converter</Link></li>
			  </Nav>
			</Navbar>
		);
	}

}