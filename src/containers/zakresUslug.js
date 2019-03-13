import React, { Component } from 'react';
import { connect } from 'react-redux';

class ZakresUslug extends Component {
    renderZakresy(zakres) {
        return (
            <div className='zakres-item' key={zakres.zakres}>
                <div className='zakres-item-img'>
                    <img src={zakres.img} alt="Ortopeda Międzyrzecz Zakres Usług"/>
                </div>
                <span className='zakres-item-description'>{zakres.zakres}</span>
                <svg className="zakres-item-svg" x="0px" y="0px" width="300px" height="115px">
                    <path className="zakres-item-path" fill="transparent" stroke="#45a29e" strokeWidth="2" strokeMiterlimit="10" d="M 75 20 A 40 40 5 1 0 75 70 L 93 108 L 201 108 L 300 108" />
                </svg>
            </div>
        )
    }
    render() {
        return (
            <div className='zakres' id='zakres'>
                <div className='zakres-wrapper'>
                    <h2 className="zakres-header">
                        <span>Zakres usług gabinetu</span>
                    </h2>
                    {this.props.zakresy.map(this.renderZakresy)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		zakresy: state.zakresy
	}
}

export default connect(mapStateToProps)(ZakresUslug);