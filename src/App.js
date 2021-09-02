import logo from './logo.svg';
import './style.css';
import subaru from './img/subaru.jpg';
import toyota from './img/toyota_supra1.jpg';
import nissan from './img/nissangtr2.jpg';
import Logo from './Logo';
import CardCars from './CardCars';

function App() {
  return (
    <div className="App">
      <Logo/>
      <div className="div-card">
      <CardCars url = {subaru} modelo={"Subaru Impreza"} year = {"2017"} motor={"Bóxer de 4 cilindros de 1.6 a 2.5 L"} km = {"250km/h"} /*price={"30000"}*//>
     
      <CardCars url = {toyota} modelo={"Toyota Supra"} year = {"2002"} motor={"	6 en línea de 2997 cm³ (3 litros)"} km = {"250 km/h"} /*price={"52000"}*/ />
      <CardCars url = {nissan} modelo={"Nissan GT-R"} year = {"2007"} motor={"V6 a 60º VR38DETT Biturbo de 3799 cm³"} km = {"280km/h"} /*price={"47000"}*/ />
      </div>
  
     <ul className= "nav-car">

      <li className = "nav-text-style">Inicio</li>
      <li className = "nav-text-style">Marcas</li>
      <li className = "nav-text-style">Quienes Somos</li>
      <li className = "nav-text-style">Contacto</li>
     </ul>
    
    </div>
  );
}

export default App;
