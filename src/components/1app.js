import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from '../containers/header_img';
import Gabinet from '../containers/gabinety';
import About from './about';
import Obszary from '../containers/obszary';
import Zakres from '../containers/zakresUslug';
import Footer from '../components/footer';

export default class App extends Component {
	render() {
		return (
			<div className='main'>
				<NavBar />
				<HeaderImg />
				<Gabinet />
				<Obszary />
				<Zakres />
				<About />
				<Footer />
			</div>
		);
	}
}
