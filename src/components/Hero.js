import React from 'react';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__label">Nowoczesny Gabinet Stomatologiczny</p>
          <h1 className="hero__title">
            Twój uśmiech w<br />
            <span className="hero__title-accent">najlepszych rękach</span>
          </h1>
          <p className="hero__description">
            Witamy w DentSmile — miejscu, gdzie technologia spotyka się
            z troską o Twój komfort. Oferujemy pełen zakres usług
            stomatologicznych w nowoczesnym i przyjaznym otoczeniu.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              <FiCalendar /> Umów wizytę
            </a>
            <a href="#services" className="btn btn-outline hero__btn-outline">
              Nasze usługi <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image image-placeholder">
            {/* MIEJSCE NA ZDJĘCIE: Zamień ten div na <img src="..." alt="Gabinet DentSmile" /> */}
            <span>Zdjęcie gabinetu</span>
          </div>

          <div className="hero__stats">
            <div className="hero__badge">
              <span className="hero__badge-number">15+</span>
              <span className="hero__badge-text">lat doświadczenia</span>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-number">5k+</span>
              <span className="hero__badge-text">zadowolonych pacjentów</span>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-number">98%</span>
              <span className="hero__badge-text">pozytywnych opinii</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Hero;
