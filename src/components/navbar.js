import React, { Component } from 'react';

import $ from 'jquery';


export default class NavBar extends Component {

	constructor (props) {
		super(props);

		this.state = {
			isActive : false,
			isSticky: false
		}
	}

	hamburgerIcon = () => {
		this.setState({isActive: !this.state.isActive});
	}

	smoothScrolling = (event) => {
		let pointer = event.target.getAttribute('data-tag');
		let $target = $('.root').find(`#${pointer}`).get(0);

		$('html,body').animate({
			scrollTop: $target.offsetTop
		}, 1000);
	}

    render() {
		
        return (
			<div className="navbar--container">
				<div className={`nav-cube ${this.state.isActive ? 'on' : ''}`}
					onClick={this.hamburgerIcon}>
					<span></span>
				</div>
				<nav className="navbar-">
					<button className="nav--link" type="button" href="#Home" data-tag="home" onClick={this.smoothScrolling}>Home </button>
					<button className="nav--link" type="button" href="#Gabinet" data-tag="gabinet" onClick={this.smoothScrolling}>Kontakt</button>
					<button className="nav--link" type="button" href="#About" data-tag="about" onClick={this.smoothScrolling}>O mnie</button>
					<button className="nav--link" type="button" href="#Obszary" data-tag="obszary" onClick={this.smoothScrolling}>Specjalizacja</button>
					<button className="nav--link" type="button" href="#Zakres" data-tag="zakres" onClick={this.smoothScrolling}>Zakres Usług</button>

				</nav>
			</div>

        )
    }
}
