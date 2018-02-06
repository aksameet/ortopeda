import React from 'react';

export default (props) => {
    
    if(!props.gabinet) {
        return (
            <div className="gabinet-data">
                {props.gabinety[0].content()}
            </div>
        )
    }

    return (
        <div className="gabinet-data">
            {props.gabinet.content()}
        </div>
    )
};

