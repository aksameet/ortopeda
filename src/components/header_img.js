import React, { Component } from 'react';
import xRayImg from '../assets/images/x-ray.png';

export default class HeaderImg extends Component {
    render() {
        return (
            <div className="main-img">
                <img src={xRayImg} alt='Specjalistyczny Gabinet Lekarski Janusz Jaskowicz'/>
                <div className="main-img-wrapper">
                    <div className="main-img-text">
                        <h1>
                            Dobry lekarz<br />
                            <strong>leczy chorobę,</strong>
                            <br />wybitny<br />
                            <strong>pacjenta, który zachorował</strong>.
                            <br />
                            <i className="ghandi">- William Osler</i>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}
