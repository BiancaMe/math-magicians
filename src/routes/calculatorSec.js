import Navbar from '../components/navbar';
import Calculator from '../components/Calculator';

const CalculatorNav = () => (
  <div className="App">
    <header className="App-header">
      <p> Math Magicians</p>
      <Navbar />
    </header>
    <Calculator />
  </div>
);

export default CalculatorNav;
