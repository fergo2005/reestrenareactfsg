import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { Nav } from '../Nav/Nav'

/* import { Nav } from '../Nav/Nav' */

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
          <span className='logo-text'>Re-Estrena</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
