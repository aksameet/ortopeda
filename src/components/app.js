import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from './header_img';
import Variety from './variety';
import Infographics from './infographics';
import About from './about';
import Contact from './contact';

export default class App extends Component {
	render() {
		return (
			<div className=''>
				<NavBar />
				<HeaderImg />
				<Variety />
				<Infographics />
				<About />
				<Contact />
			</div>
		);
	}
}
