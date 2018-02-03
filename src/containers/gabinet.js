import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wybierzGabinet } from '../actions/index';
import { bindActionCreators } from 'redux';

class Gabinet extends Component {
    
    render() {

        if(!this.props.gabinet) {
            return (
                <div className="gabinet-data">
                    {this.props.gabinety[0].content()}
                </div>
            )
        }

        return (
            <div className="gabinet-data">
                {this.props.gabinet.content()}
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
        gabinety: state.gabinety,
        gabinet: state.activeGabinet
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({wybierzGabinet: wybierzGabinet}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gabinet);