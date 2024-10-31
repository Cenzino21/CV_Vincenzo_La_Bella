import "./EsperienzeLavorative.css";

function AlternanzaScuolaLavoro() {
    return (
        <div className="AlternanzaScuolaLavoro">
            <p id="animatoreTuristico">Animatore turistico</p>
            <p id="lifeAnimation">Life Animation</p>
            <table className="datiAlternanzaScuolaLavoro">
                <tr>
                    <td><strong>Città:</strong> Lucera</td>
                    <td><strong>Paese:</strong> Italia</td>
                    <td><strong>Durata:</strong> Da 15-03-2017 a 10-03-2019 </td>
                </tr>
            </table>
            <div>
                <ul>
                    <li>Alternanza scuola-lavoro</li>
                    <li>Condotta e comunicazione con gli ospiti</li>
                    <li>Condotta e comunicazione coi colleghi</li>
                    <li>Organizzazione attività</li>
                    <li>Rispetto dei tempi</li>
                </ul>
            </div>
        </div>
    );
}

export default AlternanzaScuolaLavoro;