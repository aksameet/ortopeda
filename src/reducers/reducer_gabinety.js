import React from 'react';

export default () => [
    { 
        miasto: 'Międzyrzecz',
        gabinet: 'Gabinet w Międzyrzeczu',
        img: '',
        centerLatLan: {
            lat: 52.4460838409867,
            lon: 15.568335056304932,
        },
        myLatLan: {
            lat: 52.444707,
            lon: 15.576710
        },
        content: () => {
            return (
                <div>
                    <h2>Gabinet w Międzyrzeczu</h2>
                    <p><a href="https://goo.gl/maps/DrP4Q5XZt432">Międzyrzecz ul. Rynek 2</a></p>
                    <br />
                    <p>CZYNNY:</p>
                    <p>poniedziałek od godz. 15:00</p>
                    <p>środa 15:00 — 17:00</p>
                    <hr/>
                    <p>REJESTRACJA:</p>
                    <p className="smaller">pon-pt: 9:00 — 16:00</p>
                    <p className="smaller">tel.: 691 378 686</p>
                </div>
            )
        }
    },
    { 
        miasto: '',
        obszar: '', 
        img: '',
        centerLatLan: {
            lat: 52.444893670786215,
            lon: 15.116157531738281,
        },
        myLatLan: {
            lat: 52.44355959563677,
            lon: 15.124483108520508
        },
        content: () => {
            return (
                <div>
                    <h2>Gabinet w XXX</h2>
                    <p>Międzyrzecz ul. RXXX</p>
                    <p>Czynny w XXX</p>
                    <p>od godz. XXX</p>
                </div>
            )
        }
    }
]
