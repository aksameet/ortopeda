/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wybierzGabinet } from '../actions/index';
import { bindActionCreators } from 'redux';
import { AsyncMap } from '../components/googleMap/async_map';
import MapStyles from '../components/googleMap/map-styles';
import markerIcon from '../assets/icons/marker.svg';
import apiKey from '../libs/api-key';

import Gabinet from '../components/gabinet';

class Gabinety extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isActive: false
        };
        
        this.renderNewLocation = this.renderNewLocation.bind(this);
        this.targetGabinet = this.targetGabinet.bind(this);
    }

    componentDidMount() {
        let self = this,
            centerLatLang = {
                lat: 52.441407,
                lng: 15.576710
            },
            myLatLng = {
                lat: 52.442180,
                lng: 15.580280
            };

		// Asynchronously render google map
		AsyncMap(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`, function() {

            new google.maps.LatLng(myLatLng);

			self.map = new google.maps.Map(self.refs.map, { 
				center: new google.maps.LatLng(centerLatLang),
                zoom: 15,
                styles: MapStyles()
			});

			new google.maps.Marker({
				position: myLatLng,
                map: self.map,
                icon: {
					url: markerIcon,
					scaledSize: new google.maps.Size(46, 46)
				},
			});
		});
    }

    renderNewLocation() {
        let	gabinetData = this.props.gabinet,
        centerLatLng = {
                lat: parseFloat(gabinetData.centerLatLan.lat),
                lng: parseFloat(gabinetData.centerLatLan.lon)
            },
        markerLatLng = {
            lat: parseFloat(gabinetData.myLatLan.lat),
            lng: parseFloat(gabinetData.myLatLan.lon)
        };

        // Create new Markers
		let	bounds = new google.maps.LatLngBounds(),
        marker = new google.maps.Marker({
            position: markerLatLng,
            map: this.map,
            icon: {
                url: markerIcon,
                scaledSize: new google.maps.Size(46, 46)
            },
        });

        // Center map on active gabinet
        this.map.panTo(centerLatLng);

        // Dis IDK..
        bounds.extend(marker.getPosition());
    }

    targetGabinet(event) {
        this.props.wybierzGabinet(this.props.gabinety[event.target.value]);
        this.setState({isActive : !this.state.isActive});
    }

    render() {
        if (this.props.gabinet) {
			this.renderNewLocation();
		}
        return (
            <div className='gabinet-root'>
                <div className='gabinet' id='gabinet'>
                    <div className='gabinet-wrapper'>
                        <div className='gabinet-item'>
                            <div className='gabinet-item-buttons'>
                                <button 
                                    value='0'
                                    onClick={this.targetGabinet}
                                    className={this.state.isActive ? '' : 'active'}>
                                    {this.props.gabinety[0].miasto}
                                </button>
                                <button
                                    value='1'
                                    onClick={this.targetGabinet}
                                    className={this.state.isActive ? 'active' : ''}>
                                    {this.props.gabinety[1].miasto}
                                </button>
                            </div>
                            <Gabinet gabinety={this.props.gabinety} gabinet={this.props.gabinet} />
                        </div>
                    </div>
                    <div className='gabinet-map' ref='map'>
                            Loading Map...
                        </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Gabinety);
