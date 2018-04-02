import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderImg from '../containers/header_img';
import Obszary from '../containers/obszary';
import About from './about';
import Zakres from '../containers/zakresUslug';
import Gabinet from '../containers/gabinety';
import Footer from '../components/footer';

export default class App extends Component {
	render() {
		return (
			<div className=''>
				<NavBar />
				<HeaderImg />
				<Obszary />
				<About />
				<Zakres />
				<Gabinet />
				<Footer />
			</div>
		);
	}
}
