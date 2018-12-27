import React, { Component } from 'react'
import Images from '../assets/images.js';

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
			isActive : false
		}
    }
    render() {
        return (
            <div className="about" id="about">
                <div className="heading-title">
                    <h2>
                        <span>
                            <p>Specjalistyczna Praktyka Lekarska</p>
                            <p>Janusz Jaskowicz</p>
                        </span>
                    </h2>
                </div>
                <div className='about-wrapper'>
                    <h2 className='about-header'>
                        <span>O mnie</span>
                    </h2>
                    <div className={`about-content ${this.state.isActive ? 'on' : 'off'}`}>
                        <h3>Lek. med. Janusz Jaskowicz</h3>
                        <p> ukończył studia na Wydziale Lekarskim Wojskowej Akademii Medycznej w Łodzi w 1984 roku. Droga zawodowa wiodła przez Oddział Chirurgii Szpitala w Skwierzynie i Oddziału Chirurgii Szpitala w Międzyrzeczu, oraz Oddział Ortopedii i Traumatologii 111 Szpitala Wojskowego w Poznaniu, gdzie w 1997 roku uzyskał tytuł specjalisty II stopnia z Ortopedii i Traumatologii Narządu Ruchu.</p>
                        <p>Od 2000 roku pracuje na Oddziale Chirurgii i Traumatologii Szpitala im. Pięciu Świętych Braci Międzyrzeckich w Międzyrzeczu, gdzie przez wprowadzanie najnowocześniejszych technik operacyjnych, w oparciu o nowe technologie i instrumentaria wiodących firm europejskich, przyczynił się do rozwoju oraz zwiększenia zakresu usług i spektrum zabiegów, m.in. o artroskopię stawów i techniki zamknięte zaopatrywania złamań.</p>
                        <p>Artroskopia stawu kolanowego i barkowego pozostały w centrum zainteresowania doktora Jaskowicza. Na rozwój tych technik kładzie on nadal główny nacisk poprzez uczestnictwo w licznych szkoleniach, kursach, warsztatach cadawerowych, sympozjach, innych formach dokształcania, również obecnie po powstaniu od 2012 roku nowego Oddziału Ortopedii i Traumatologii, gdzie pełni funkcję z-cy Ordynatora.</p>
                        <p>Poprzez te kształcenia rozwinął wiele praktycznych umiejętności, zdobywając certyfikaty wiodących ośrodków kształcących lekarzy na kursach krajowych i w składzie międzynarodowym m.in. z zakresu usg narządu ruchu, medycyny manualnej, plastrowania dynamicznego, gwoździowania śródszpikowego, światowej organizacji osteosyntezy AO, oraz wielu innych. </p>
                    </div>
                    <div className="about-portrait">
                        <div className='about-portrait-circle'>
                            <img src={Images.profilowe} alt="" />
                        </div>
                    </div>
                    <button 
                        className='about-content-read_more'
                        onClick={() => this.setState({isActive: !this.state.isActive})}>
                        {`${this.state.isActive ? 'Zwiń' : 'Czytaj dalej'}`}
                    </button>
                </div>
            </div>
        )
    }
}
