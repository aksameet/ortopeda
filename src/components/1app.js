import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from '../containers/header_img';
import Obszary from '../containers/obszary';
import About from './about';
import Zakres from '../containers/zakresUslug';
import Footer from '../components/footer';

export default class App extends Component {
	render() {
		return (
			<div className=''>
				<NavBar />
				<HeaderImg />
				<About />
				<Obszary />
				<Zakres />
				<Footer />
			</div>
		);
	}
}
