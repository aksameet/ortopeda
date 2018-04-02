import React, { Component } from 'react';
import { connect } from 'react-redux';

class ZakresUslug extends Component {
    renderZakresy(zakres) {
        return (
            <div className='zakres-item' key={zakres.zakres}>
                <div className='zakres-item-img'>
                    <img src={zakres.img} alt=""/>
                </div>
                <span className='zakres-item-description'>{zakres.zakres}</span>
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