import Map from './Components/Map';
import './App.css';

const location = {
  address: '5 Place Bel Air, 20012 arrondissement de Sidi Belyout, Maroc',
  lat: 33.59175387040091,
  lng: -7.629056646167155,
}

function App() {
  return (
    <div>
      <Map location={location} zoomLevel={15} />
    </div>
  );
}

export default App;
