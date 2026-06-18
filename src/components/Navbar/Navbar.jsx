import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
import { Menu, X } from "lucide-react";
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
        <ul
          className={`nav-links ${
            isOpen ? "active" : ""
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/modalidades"
              onClick={() => setIsOpen(false)}
            >
              Modalidades
            </Link>
          </li>

          <li>
            <Link
              to="/unidades"
              onClick={() => setIsOpen(false)}
            >
              Unidades
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>
    </nav>
  );
}