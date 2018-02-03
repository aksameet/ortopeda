/* eslint-disable no-undef */
import React, { Component } from 'react'
import { AsyncMap } from '../components/async_map';
import MapStyles from '../components/map-styles';
import markerIcon from '../assets/icons/marker.svg';


export default class Contact extends Component {

    componentDidMount() {
		let self = this,
			myLatLng = {
				lat: 52.22967560,
				lng: 21.01222870,
			};

		// Asynchronously render google map
		AsyncMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2iE3NM9sgpBszFSA32o64gnaO_fr6psw", function() {

			self.map = new google.maps.Map(self.refs.map, { 
				center: myLatLng,
                zoom: 14,
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

    render() {
        return (
            <div className='contact'>
                <div className='contact-wrapper'>
                    <h1 className='contact-header'>
                        <span>Gabinet</span>
                    </h1>
                    <div className='contact-item'>
                        <div className="contact-item-a">
                            <button>Gabinet A</button>
                        </div>
                        <div className="contact-item-b">
                            <button>Gabinet A</button>
                        </div>
                    </div>
                    <div className='contact-map' ref='map'>
                        Loading Map...
                    </div>
                </div>
            </div>
            // <div className="contact">
            //     <div className="col-md-12">
            //         <div className="section-map">
            //             <h1 className="fullWidth">Gabinet</h1>
            //             <div className="google-map">
            //                 <div className="map">
            //                     <div className="row">
            //                         <div className="col-md-5 col-sm-6 col-xs-12 gabinet gabinet-position">
            //                             <div className="gabinet-data">
            //                                 <h2>Gabinet w Międzyrzeczu</h2>
            //                                 <p>Międzyrzecz ul. Rynek 2</p>
            //                                 <p>Czynny w poniedziałki </p>
            //                                 <p>od godz. 15:00</p>
            //                                 <p className="smaller">(Przyjęcia bez konieczności wcześniejszej rejestracji)</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div id="map-canvas"></div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="col-md-12">
            //         <div className="phone">
            //             <p>Kontakt bezpośredni z lek. Januszem Jaskowiczem:
            //                 <span icon="color-icons:cell-phone"></span><b>601 556 167 &nbsp;</b>(czynny pn.-pt. od 8:00 do 16:00) </p>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
