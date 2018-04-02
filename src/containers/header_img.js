import React, { Component } from 'react';
import TiltEffect from '../libs/tilt-effect';
import Images from '../assets/images.js';

class HeaderImg extends Component {

    componentDidMount() {
        TiltEffect(window);
    }

    render() {

        return (
            <div className="main-img" id='home'>
                <img 
                    className='tilt-effect'
                    src={Images.xray} 
                    alt='Specjalistyczny Gabinet Lekarski Janusz Jaskowicz'
                    data-tilt-options='{ "opacity" : 0.6, "extraImgs" : 4, "movement": { "perspective" : 500, "translateX" : 15, "translateY" : 0, "translateZ" : 10, "rotateX" : 3, "rotateY" : 4, "rotateZ" : 1 } }'
                />
                <div className="main-img-wrapper">
                    <div className="main-img-text">
                        <h1>
                            Dobry lekarz<br />
                            <strong>leczy schorzenie,</strong>
                            <br />wybitny<br />
                            <strong>pacjenta, który ma schorzenie</strong>.
                            <br />
                            <i className="ghandi">- William Osler</i>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderImg;