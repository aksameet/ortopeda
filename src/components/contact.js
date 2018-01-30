import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="col-md-12">
                    <div className="section-map">
                        <h1 className="fullWidth">Gabinet</h1>
                        <div className="google-map">
                            <div className="map">
                                <div className="row">
                                    <div className="col-md-5 col-sm-6 col-xs-12 gabinet gabinet-position">
                                        <div className="gabinet-data">
                                            <h2>Gabinet w Międzyrzeczu</h2>
                                            <p>Międzyrzecz ul. Rynek 2</p>
                                            <p>Czynny w poniedziałki </p>
                                            <p>od godz. 15:00</p>
                                            <p className="smaller">(Przyjęcia bez konieczności wcześniejszej rejestracji)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="map-canvas"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="phone">
                        <p>Kontakt bezpośredni z lek. Januszem Jaskowiczem:
                            <span icon="color-icons:cell-phone"></span><b>601 556 167 &nbsp;</b>(czynny pn.-pt. od 8:00 do 16:00) </p>
                    </div>
                </div>
            </div>
        )
    }
}
