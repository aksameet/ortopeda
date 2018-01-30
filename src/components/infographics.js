import React, { Component } from 'react'

export default class Infographics extends Component {
    render() {
        return (
            <div className="healing">
                <div className="healing-list">
                    <h2 className="healing-list-header">Zakres usług Gabinetu</h2>
                    <ul>
                        <li data-heading="artro_bark" className="active">Artroskopia stawu barkowego</li>
                        <li data-heading="artro_kolano">Artroskopia stawu kolanowego</li>
                        <li data-heading="tapping">Taping</li>
                        <li data-heading="manual">Medycyna Manualna</li>
                        <li data-heading="infidel">Badanie Bioderek niemowląt</li>
                    </ul>
                </div>
                <div className="healing-img">
                    <img className="healing-img-artro_bark active" src="assets/images/ramie.png" alt="" />
                    <img className="healing-img-artro_kolano" src="assets/images/kolano.png" alt="" />
                    <img className="healing-img-tapping" src="assets/images/taping.png" alt="" />
                    <img className="healing-img-manual" src="assets/images/manualna.png" alt="" />
                    <img className="healing-img-infidel" src="assets/images/teddy.png" alt="" />
                </div>
                <div className="healing-content">
                    <span className="healing-content-artro_bark active">
                        <p> Wskazania:</p>
                        <ul>
                            <li>niestabilność barku;</li>
                            <li>konflikt podbarkowy;</li>
                            <li>przewlekłe zapalenie kaletki podbarkowej;</li>
                            <li>zmiany degeneracyjne mięśnia dwugłowego;</li>
                            <li>usunięcie ciał wolnych ze stawów;</li>
                            <li>rekonstrukcja uszkodzonych mięśni;</li>
                            <li>usunięcie przerośniętej błony wewnętrznej przy stanie zapalnym ramienia;</li>
                            <li>usunięcie podrażnionej torebki stawowej;</li>
                            <li>uszkodzenia stożka rotatorów.</li>
                        </ul>
                    </span>
                    <span className="healing-content-artro_kolano">Artroskopię kolana najczęściej wykonuje się po urazach stawu kolanowego (uszkodzenie łąkotek, uszkodzenie więzadeł krzyżowych, złamaniach kostno-chrzęstnych), w przypadku przewlekłych dolegliwości kolana (liczne wysięki stawu kolanowego,
                        choroby chrząstki stawowej, choroby błony maziowej), celem leczenia stanu zapalnego kolana, celem usuwania ciał wolnych kolana.</span>
                    <span className="healing-content-tapping">Plastrowanie (inaczej taping, nalepianie plastra) - metoda leczenia poprzez aplikację na ciele, w ściśle określony sposób, nierozciągliwego lub elastycznego plastra. Nalepiony plaster jest źródłem bodźców wyłącznie mechanicznych (nie jest
                        nasączony żadnym lekiem) i w zależności od rodzaju, sposobu i miejsca aplikacji, ma różnorakie oddziaływanie. Jedną z metod tapingu jest plastrowanie dynamiczne. Taping znajduje zastosowanie w fizjoterapii przeciwbólowej, ortopedycznej,
                        sportowej, neurologicznej, pediatrycznej, pooperacyjnej, ginekologicznej, onkologicznej.</span>
                    <span className="healing-content-manual">Terapia manualna polega na badaniu i leczeniu stawów obwodowych i kręgosłupa. Pierwszą częścią badania jest zazwyczaj dokładny wywiad. Następnie dokonuje się badania jakości ruchu, jego zakresów, biomechaniki oraz innych czynników (np.
                        bolesności). Podczas terapii za pomocą specjalnych technik mobilizacji lub manipulacji i pracy na tkankach miękkich przywraca się zaburzoną biomechanikę stawów (odblokowanie stawów), co prowadzi do zmniejszenia bólu, zwiększenia zakresu
                        ruchomości, ustąpienia stanów zapalnych.</span>
                    <span className="healing-content-infidel">Do ortopedy dziecięcego dziecko powinno trafić zanim skończy 3 miesiące. Podczas badania ortopeda sprawdza stopień i równomierność odwodzenia bioder, ocenia długość nóżek, dotykiem bada stawy. Obecnie, nawet gdy nic nie wzbudza podejrzeń,
                        zleca się profilaktycznie wykonanie usg stawów biodrowych u dzieci. To badanie jest całkowicie bezpieczne, można je wykonywać noworodkom. Jeśli lekarz stwierdzi, że niedorozwój stawów jest nieznaczny, zaleca jedynie odpowiednią pielęgnację
                        niemowlaka, co daje szansę na samoistny zanik wady. Jeżeli dysplazja zostanie stwierdzona, nie można zwlekać, ale od razu należy rozpocząć leczenie. Wadę trzeba skorygować, zanim niemowlę podejmie próbę chodzenia.</span>
                </div>
            </div>
        )
    }
}
