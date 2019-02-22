import React, { Component } from 'react';
import Copyright from '../assets/icons/Copyright.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer' >
                <span>
                    <img src={Copyright} alt=''/> 2019 Janusz Jaskowicz. All rights Reserved.
                </span>
            </div>
        )
    }
}
