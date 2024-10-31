import './App.css';
import EsperienzeLavorative from './components/esperienze_lavorative/EsperienzeLavorative';
import Intestazione from './components/intestazione/Intestazione';
import Presentazione from './components/presentazione/Presentazione';

function App() {
  return (
    <div className="App">
      <Intestazione />
      <h3>PRESENTAZIONE</h3> <hr/>
      <Presentazione />
      <h3>ESPERIENZE LAVORATIVE</h3> <hr/>
      <EsperienzeLavorative />
      <h3>ISTRUZIONE E FORMAZIONE</h3> <hr/>
      <h3>COMPETENZE LINGUISTICHE</h3> <hr/>
      <h3>COMPETENZE DIGITALI</h3> <hr/>
      <h3>CONFERENZE E SEMINARI</h3>
    </div>
  );
}

export default App;
