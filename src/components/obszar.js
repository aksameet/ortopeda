import React from 'react';

export default (props) => {
    
    if(!props.obszar) {
        return (
            <div className="obszary-content">
                {props.obszary[0].content()}
                <img className="obszary-content-img" src={props.obszary[0].img} alt="" />
            </div>
        )
    }

    return (
        <div className="obszary-content">
            {props.obszar.content()}
            <img className="obszary-content-img" src={props.obszar.img} alt="" />
        </div>
    )
}
