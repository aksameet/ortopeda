import React, { Component } from 'react'
import { connect } from 'react-redux'

class Obszar extends Component {
    
    render() {

        if(!this.props.obszar) {
            return (
                <div className="obszary-content">
                    {this.props.obszary[0].content()}
                    <img className="obszary-content-img" src={this.props.obszary[0].img} alt="" />
                </div>
            )
        }

        return (
            <div className="obszary-content">
                {this.props.obszar.content()}
                <img className="obszary-content-img" src={this.props.obszar.img} alt="" />
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

export default connect(mapStateToProps)(Obszar);