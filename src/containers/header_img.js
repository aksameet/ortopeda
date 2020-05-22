import React, { Component } from 'react';
import Images from '../assets/images.js';

class HeaderImg extends Component {

    render() {

        return (
            <div className="main-img" id='home'>
                <img 
                    src={Images.hero} 
                    alt="Specjalistyczny Gabinet Lekarski Janusz Jaskowicz Ortopeda Chirurg Traumatolog Międzyrzecz"
                />
                <div className="main-img-wrapper">
                    <div className="main-img-text">
                        <h1>
                        Gabinet Lekarski<br />
                            <strong>Janusz Jaskowicz</strong><br />
                            Ortopeda <br />
                            Chirurg Traumatolog <br />
                            <br />
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderImg;
