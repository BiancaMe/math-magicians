import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatorNav from './routes/calculatorSec';
import QuoteNav from './routes/quoteSec';
import HomeNav from './routes/homSec';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeNav />} />
      <Route path="/calculator" element={<CalculatorNav />} />
      <Route path="/quote" element={<QuoteNav />} />
    </Routes>
  </Router>
);

export default App;
