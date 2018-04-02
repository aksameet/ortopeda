import React from 'react';
import Images from '../assets/images.js';

export default () => [
    { 
        obszar: 'Artroskopia stawu barkowego',
        img: Images.ramie,
        content: () => {
            return (
                <div className="obszary-content-description">
                    <h3>Artroskopia stawu barkowego</h3>
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
                </div>
            )
        }
    },
    { 
        obszar: 'Artroskopia stawu kolanowego', 
        img: Images.kolano,
        content: () => {
            return (
                <div className="obszary-content-description">
                    <h3>Artroskopia stawu kolanowego</h3>
                    <p>Artroskopię kolana najczęściej wykonuje się po urazach stawu kolanowego (uszkodzenie łąkotek, uszkodzenie więzadeł krzyżowych, złamaniach kostno-chrzęstnych), w przypadku przewlekłych dolegliwości kolana (liczne wysięki stawu kolanowego, choroby chrząstki stawowej, choroby błony maziowej), celem leczenia stanu zapalnego kolana, celem usuwania ciał wolnych kolana.</p>
                </div>
            )
        }
    },
    { 
        obszar: 'Taping', 
        img: Images.taping,
        content: () => {
            return (
                <div className="obszary-content-description">
                    <h3>Taping</h3>
                    <p>Plastrowanie (inaczej taping, nalepianie plastra) - metoda leczenia poprzez aplikację na ciele, w ściśle określony sposób, nierozciągliwego lub elastycznego plastra. Nalepiony plaster jest źródłem bodźców wyłącznie mechanicznych (nie jest nasączony żadnym lekiem) i w zależności od rodzaju, sposobu i miejsca aplikacji, ma różnorakie oddziaływanie. Jedną z metod tapingu jest plastrowanie dynamiczne.</p>
                    <p>Taping znajduje zastosowanie w fizjoterapii przeciwbólowej, ortopedycznej, sportowej, neurologicznej, pediatrycznej, pooperacyjnej, ginekologicznej, onkologicznej.</p>
                </div>
            )
        }
    },
    { 
        obszar: 'Medycyna Manualna',
        img: Images.manualna,
        content: () => {
            return (
                <div className="obszary-content-description">
                    <h3>Medycyna Manualna</h3>
                    <p>Terapia manualna polega na badaniu i leczeniu stawów obwodowych i kręgosłupa. Pierwszą częścią badania jest zazwyczaj dokładny wywiad. Następnie dokonuje się badania jakości ruchu, jego zakresów, biomechaniki oraz innych czynników (np. bolesności).</p>
                    <p>Podczas terapii za pomocą specjalnych technik mobilizacji lub manipulacji i pracy na tkankach miękkich przywraca się zaburzoną biomechanikę stawów (odblokowanie stawów), co prowadzi do zmniejszenia bólu, zwiększenia zakresu ruchomości, ustąpienia stanów zapalnych.</p>
                </div>
            )
        }
    },
    { 
        obszar: 'Badanie Bioderek niemowląt',
        img: Images.teddy,
        content: () => {
            return (
                <div className="obszary-content-description">
                    <h3>Badanie Bioderek niemowląt</h3>
                    <p>Do ortopedy dziecięcego dziecko powinno trafić zanim skończy 3 miesiące. Podczas badania ortopeda sprawdza stopień i równomierność odwodzenia bioder, ocenia długość nóżek, dotykiem bada stawy. Obecnie, nawet gdy nic nie wzbudza podejrzeń, zleca się profilaktycznie wykonanie usg stawów biodrowych u dzieci. </p>
                    <p>To badanie jest całkowicie bezpieczne, można je wykonywać noworodkom. Jeśli lekarz stwierdzi, że niedorozwój stawów jest nieznaczny, zaleca jedynie odpowiednią pielęgnację niemowlaka, co daje szansę na samoistny zanik wady. Jeżeli dysplazja zostanie stwierdzona, nie można zwlekać, ale od razu należy rozpocząć leczenie. Wadę trzeba skorygować zanim niemowlę podejmie próbę chodzenia.</p>
                </div>
            )
        }
    }
]