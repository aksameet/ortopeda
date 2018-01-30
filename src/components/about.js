import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
        <div className="about">
            <img className="about-img-spine" src="assets/images/spine.png" alt="" />
            <img className="about-img-portrait" src="assets/images/janusz_jaskowicz.jpg" alt="" />
            <div className="about-content">
                <h1 className="about-header"> O mnie</h1>
                <p> Lek. med. Janusz Jaskowicz ukończył studia na Wydziale Lekarskim Wojskowej Akademii Medycznej w Łodzi w 1984 roku. Droga zawodowa wiodła przez Oddział Chirurgii Szpitala w Skwierzynie i Oddziału Chirurgii Szpitala w Międzyrzeczu, oraz
                    Oddział Ortopedii i Traumatologii 111 Szpitala Wojskowego w Poznaniu, gdzie w 1997 roku uzyskał tytuł specjalisty II stopnia z Ortopedii i Traumatologii Narządu Ruchu.
                    <br />
                    <br />Od 2000 roku pracuje na Oddziale Chirurgii i Traumatologii Szpitala im. Pięciu Świętych Braci Międzyrzeckich w Międzyrzeczu, gdzie przez wprowadzanie najnowocześniejszych technik operacyjnych, w oparciu o nowe technologie i instrumentaria
                    wiodących firm europejskich, przyczynił się do rozwoju oraz zwiększenia zakresu usług i spektrum zabiegów, m.in. o artroskopię stawów i techniki zamknięte zaopatrywania złamań.
                    <br />
                    <br />Artroskopia stawu kolanowego i barkowego pozostały w centrum zainteresowania doktora Jaskowicza. Na rozwój tych technik kładzie on nadal główny nacisk poprzez uczestnictwo w licznych szkoleniach, kursach, warsztatach cadawerowych,
                    sympozjach, innych formach dokształcania, również obecnie po powstaniu od 2012 roku nowego Oddziału Ortopedii i Traumatologii, gdzie pełni funkcję z-cy Ordynatora.
                    <br />
                    <br />Poprzez te kształcenia rozwinął wiele praktycznych umiejętności, zdobywając certyfikaty wiodących ośrodków kształcących lekarzy na kursach krajowych i w składzie międzynarodowym m.in. z zakresu usg narządu ruchu, medycyny manualnej,
                    plastrowania dynamicznego, gwoździowania śródszpikowego, światowej organizacji osteosyntezy AO, oraz wielu innych. </p>
            </div>
        </div>
        )
    }
}
