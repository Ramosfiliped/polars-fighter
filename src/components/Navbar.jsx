import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo CT"
            className="logo"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/modalidades">Modalidades</Link>
          </li>

          <li>
            <Link to="/unidades">Unidades</Link>
          </li>
{/* 
          <li>
            <Link to="/contato">Contato</Link>
          </li> */}
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}