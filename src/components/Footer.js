import React from 'react';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-accent">DentSmile</span>
              <span className="footer__logo-sub">Gabinet Stomatologiczny</span>
            </div>
            <p className="footer__tagline">
              Nowoczesna stomatologia w przyjaznej atmosferze.
              Twój uśmiech jest naszym priorytetem.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Nawigacja</h4>
            <ul>
              <li><a href="#hero">Strona główna</a></li>
              <li><a href="#about">O nas</a></li>
              <li><a href="#services">Usługi</a></li>
              <li><a href="#team">Zespół</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Usługi</h4>
            <ul>
              <li><a href="#services">Stomatologia zachowawcza</a></li>
              <li><a href="#services">Endodoncja</a></li>
              <li><a href="#services">Protetyka</a></li>
              <li><a href="#services">Chirurgia</a></li>
              <li><a href="#services">Estetyka</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Kontakt</h4>
            <ul>
              <li>ul. Kwiatowa 15</li>
              <li>30-100 Kraków</li>
              <li><a href="tel:+48123456789">+48 123 456 789</a></li>
              <li><a href="mailto:kontakt@dentsmile.pl">kontakt@dentsmile.pl</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} DentSmile. Wszelkie prawa zastrzeżone.
          </p>
          <p className="footer__credit">
            Stworzone z <FiHeart className="footer__heart" /> dla pięknych uśmiechów
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
