import { Link } from "react-router-dom";

import "./Footer.css";

import logo from "../../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            src={logo}
            alt="Polars Fighter"
          />

          <p>
            Centro de treinamento especializado em
            artes marciais, condicionamento físico
            e desenvolvimento pessoal.
          </p>
        </div>

        <div className="footer-column">
          <h3>Modalidades</h3>

          <ul>
            <li>Jiu-Jitsu</li>
            <li>Muay Thai</li>
            <li>Karatê</li>
            <li>MMA</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Navegação</h3>

          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/modalidades">
                Modalidades
              </Link>
            </li>

            <li>
              <Link to="/unidades">
                Unidades
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
			<h3>Contato</h3>

			<ul>
				<li>(31) 989090839</li>

				<li>
				contato@polarsfighter.com
				</li>

				<li>
				<a href="https://www.instagram.com/polar_fighters/">Instagram</a>
				</li>
			</ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2024 Polars Fighter.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}