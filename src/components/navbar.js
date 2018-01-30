import React, { Component } from 'react';
import logo from '../assets/images/logo4.png';


export default class NavBar extends Component {

	constructor (props) {
		super(props);

		this.state = {
			isActive : false
		}
	}

	hamburgerIcon = () => {
		this.setState({isActive: !this.state.isActive});
	}

    render() {
        return (
			<div>
				<div className={`nav-cube ${this.state.isActive ? 'on' : ''}`}
					onClick={this.hamburgerIcon}>
					<span></span>
				</div>
				<div className="logo-cube">
					<img src={logo} alt="" />
				</div>
				<nav className="navbar navbar-expand-sm navbar-light active">
					<div className="navbar-nav">
						<button className="nav-link" type="button" href="#">Home </button>
						<button className="nav-link" type="button" href="#">Link 1</button>
						<button className="nav-link" type="button" href="#">Link 2</button>
						<button className="nav-link" type="button" href="#">Link 3</button>
					</div>
				</nav>
			</div>

        )
    }
}
