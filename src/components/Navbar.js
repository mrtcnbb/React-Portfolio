import HomePic from '../assets/home.svg';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// styles
import './Navbar.css';

export default function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link className="brand" to="/">
          <img src={HomePic} alt="home" />
        </Link>
        <NavLink className="home-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="about-link" to="/about">
          About
        </NavLink>
        <NavLink className="contact-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
