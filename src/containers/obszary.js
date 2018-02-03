import React, { Component } from 'react'
import { connect } from 'react-redux';
import { wybierzObszar } from '../actions/index';
import { bindActionCreators } from 'redux';

import Obszar from './obszar';

class Obszary extends Component {
    renderTitles() {
        return (
            this.props.obszary.map((obszar, idx) => {
				return (
					<li 
						key={obszar.obszar}
						onClick={() => this.props.wybierzObszar(obszar)}
						className='obszary-list-item'> 
                            <span className='obszary-list-item-number'>{idx + 1}</span> 
                            <span className='obszary-list-item-obszar'>
                                <p>{obszar.obszar}</p>
                            </span>
					</li>
				)
            })
        )
    }
    render() {
        return (
            <div className="obszary">
                <div className='obszary-wrapper'>
                    <h2 className="obszary-header">
                        <span>Obszary specjalizacji</span>
                    </h2>
                    <ul className="obszary-list">
                        { this.renderTitles() }
                    </ul>
                    <Obszar />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		obszary: state.obszary
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({wybierzObszar: wybierzObszar}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Obszary);