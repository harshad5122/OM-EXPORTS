import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="logo">OM Exports</div> */}
 <div className="logo">
  <img src={logo} alt="OM Exports Logo" />
</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Product</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/contact">Certification </Link></li>
        <li><Link to="/contact">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
