import { NavLink } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => (
  <nav>
    <ul className="item-c">
      <li>
        <NavLink className="item" to="/">Home</NavLink>
      </li>
      <li>
        <div className="line" />
      </li>
      <li>
        <NavLink className="item" to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <div className="line" />
      </li>
      <li>
        <NavLink className="item" to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
