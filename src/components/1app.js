import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from '../containers/header_img';
import Obszary from '../containers/obszary';
import About from './about';
import Zakres from '../containers/zakresUslug';
import Contact from '../containers/contact';

export default class App extends Component {
	render() {
		return (
			<div className=''>
				<NavBar />
				<HeaderImg />
				<Obszary />
				<About />
				<Zakres />
				<Contact />
			</div>
		);
	}
}
