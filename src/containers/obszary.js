import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wybierzObszar } from '../actions/index';
import { bindActionCreators } from 'redux';
import Images from '../assets/images.js';
import $ from 'jquery';

import Obszar from '../components/obszar';

class Obszary extends Component {
    constructor(props) {
        super(props);

        this.state = {
			isActive : false
		}
    }
    onObszarClick(e, obszar) {
        const $itemClicked = $(e.target);
        $itemClicked.addClass('on').removeClass('off').siblings().removeClass('on').addClass('off');
        this.props.wybierzObszar(obszar);
    }
    renderTitles() {
        return (
            this.props.obszary.map((obszar, idx) => {
				return (
					<li 
						key={obszar.obszar}
						onClick={(e) => this.onObszarClick(e, obszar)}
						className='obszary-list-item'>
                            {obszar.obszar}
                            <img alt="" src={Images.arrowDown}></img>
					</li>
				)
            })
        )
    }
    render() {
        return (
            <div className="obszary" id='obszary'>
                <div className='obszary-wrapper'>
                    <h2 className="obszary-header">
                        <span>Obszary specjalizacji</span>
                    </h2>
                    <ul className="obszary-list">
                        { this.renderTitles() }
                    </ul>
                    <Obszar obszary={this.props.obszary} obszar={this.props.obszar}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
        obszary: state.obszary,
        obszar: state.activeObszar
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({wybierzObszar: wybierzObszar}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Obszary);