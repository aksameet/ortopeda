/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wybierzGabinet } from '../actions/index';
import { bindActionCreators } from 'redux';
import { AsyncMap } from '../components/async_map';
import MapStyles from '../components/map-styles';
import markerIcon from '../assets/icons/marker.svg';

import Gabinet from './gabinet';

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
			myLatLng = {
                lat: 52.444707,
                lng: 15.576710,
            },
            centerLatLang = {
                lat: 52.4460838409867,
                lng: 15.568335056304932,
            };

		// Asynchronously render google map
		AsyncMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2iE3NM9sgpBszFSA32o64gnaO_fr6psw", function() {

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
            <div className='gabinet'>
                <div className='gabinet-wrapper'>
                    <h1 className='gabinet-header'>
                        <span>Gabinety</span>
                    </h1>
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
                        <Gabinet />
                    </div>
                </div>
                <div className='gabinet-map' ref='map'>
                        Loading Map...
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