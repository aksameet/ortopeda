import React, { Component } from 'react';
import Copyright from '../assets/icons/Copyright.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer' >
                Copyright <img src={Copyright} alt=''/> 2018 Janusz Jaskowicz. All rights Reserved.
            </div>
        )
    }
}
