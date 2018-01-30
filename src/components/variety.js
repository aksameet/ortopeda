import React, { Component } from 'react'

export default class Variety extends Component {
    render() {
        return (
            <div className="variety">
                <h2> Zakres usług Gabinetu</h2>
                <ul>
                    <li>Badanie ortopedyczne w pełnym zakresie.</li>
                    <li>Ocena funkcjonalna narządu ruchu.</li>
                    <li>Interpretacja badań dodatkowych, w tym opisy dla celów orzeczniczych.</li>
                    <li>Wykonywanie w gabinecie badania USG stawów, mięśni, więzadeł, nerwów.</li>
                    <li>USG bioderek niemowląt.</li>
                    <li>Kwalifikacja do leczenia operacyjnego.</li>
                    <li>Planowanie rehabilitacji po leczeniu operacyjnym i zachowawczym</li>
                    <li>Mobilizacje w zakresie medycyny manualnej.</li>
                    <li>Kinesiology taping - taśmy lecznicze w zespołach bólowych i zmianach pourazowych.</li>
                    <li>Wypełnianie dokumentacji orzeczniczej dla potrzeb ZUS, KRUS, Komisji d/s orzekania o niepełnosprawności itp. </li>
                </ul>
            </div>
        )
    }
}
