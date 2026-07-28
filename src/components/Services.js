import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Stomatologia zachowawcza',
    description: 'Leczenie próchnicy, wypełnienia kompozytowe, odbudowa zębów — dbamy o zachowanie naturalnego uzębienia.',
  },
  {
    number: '02',
    title: 'Endodoncja',
    description: 'Profesjonalne leczenie kanałowe z wykorzystaniem nowoczesnych narzędzi i technik.',
  },
  {
    number: '03',
    title: 'Protetyka',
    description: 'Korony, mosty, protezy — przywracamy pełną funkcjonalność i estetykę Twojego uśmiechu.',
  },
  {
    number: '04',
    title: 'Chirurgia stomatologiczna',
    description: 'Ekstrakcje, zabiegi chirurgiczne — przeprowadzane bezpiecznie i komfortowo.',
  },
  {
    number: '05',
    title: 'Stomatologia estetyczna',
    description: 'Wybielanie, licówki, bonding — dla pięknego i naturalnego wyglądu Twoich zębów.',
  },
  {
    number: '06',
    title: 'Profilaktyka i higiena',
    description: 'Skaling, piaskowanie, fluoryzacja — regularna profilaktyka to podstawa zdrowego uśmiechu.',
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <p className="section-label reveal services__label">Usługi</p>
            <h2 className="section-title reveal reveal-delay-1 services__title">Kompleksowa opieka<br />stomatologiczna</h2>
          </div>
          <p className="section-description reveal reveal-delay-2 services__desc">
            Oferujemy szeroki zakres usług stomatologicznych, aby zadbać
            o zdrowie i estetykę Twojego uśmiechu.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div className={`services__card reveal reveal-delay-${(i % 3) + 1}`} key={service.number} id={`service-${service.number}`}>
              <span className="services__card-number-bg">{service.number}</span>
              <span className="services__card-number">{service.number}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
              <a href="#contact" className="services__card-link">
                Umów wizytę <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
