import './App.css';
import Firma from './components/Firma';
import Poema from './components/Poema';

function App() {
  return (
    <div className="App">
        <Poema />
        <Firma
          author='Spacecraft97'
        />
    </div>
  );
}

export default App;
