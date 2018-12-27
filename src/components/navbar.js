import React, { Component } from 'react';

import $ from 'jquery';
import _ from 'lodash';


export default class NavBar extends Component {

	constructor (props) {
		super(props);

		this.state = {
			isActive : false,
			isSticky: false
		}
		this.stickyNav = this.stickyNav.bind(this);
	}
	
	componentDidMount(){
		window.addEventListener('scroll', _.debounce(this.stickyNav, 50));
	}

	hamburgerIcon = () => {
		this.setState({isActive: !this.state.isActive});
	}

	smoothScrolling = (event) => {
		let pointer = event.target.getAttribute('data-tag');
		let $target = $('.root').find('#'+ pointer).get(0);
		$('html,body').animate({
			scrollTop: $target.offsetTop
		}, 1000);
	}

	stickyNav = () => {
		let $navCubePosition = $('.nav-cube').get(0).offsetTop;

		console.log();
		if($navCubePosition < window.scrollY) {
			console.log('yes')
			this.setState({isSticky: true});
		} else {
			console.log('no');
			this.setState({isSticky: false});
		}
	
	}

    render() {
		
        return (
			<div>
				<div className={`nav-cube ${this.state.isActive ? 'on' : ''} ${this.state.isSticky ? 'sticky' : ''}`}
					onClick={this.hamburgerIcon}>
					<span></span>
				</div>
				<nav className={`navbar navbar-expand-sm navbar-light active ${this.state.isSticky ? 'stickyNav' : ''}`}>
					<div className="navbar-nav">
						<button className="nav-link" type="button" href="#Home" data-tag="home" onClick={this.smoothScrolling}>Home </button>
						<button className="nav-link" type="button" href="#Obszary" data-tag="obszary" onClick={this.smoothScrolling}>Specjalizacja</button>
						<button className="nav-link" type="button" href="#About" data-tag="about" onClick={this.smoothScrolling}>O mnie</button>
						<button className="nav-link" type="button" href="#Zakres" data-tag="zakres" onClick={this.smoothScrolling}>Zakres Usług</button>
						<button className="nav-link" type="button" href="#Gabinet" data-tag="gabinet" onClick={this.smoothScrolling}>Kontakt</button>
					</div>
				</nav>
			</div>

        )
    }
}
