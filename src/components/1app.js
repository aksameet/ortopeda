import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from '../containers/header_img';
import Variety from './variety';
import Obszary from '../containers/obszary';
import About from './about';
import Contact from './contact';

export default class App extends Component {
	render() {
		return (
			<div className=''>
				<NavBar />
				<HeaderImg />
				<Obszary />
				<About />
				<Variety />
				<Contact />
			</div>
		);
	}
}
