import "./navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";

// Navbar

export function Navbar() {
  // Rendering navbar

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={ImgLogo} alt="hoja" className="imgPlanta" />
        </Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/nosotros" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </>
  );
}
