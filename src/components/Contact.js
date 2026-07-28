import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiMapPin />, label: 'Adres', value: 'ul. Kwiatowa 15, 30-100 Kraków', href: null },
  { icon: <FiPhone />, label: 'Telefon', value: '+48 123 456 789', href: 'tel:+48123456789' },
  { icon: <FiMail />, label: 'E-mail', value: 'kontakt@dentsmile.pl', href: 'mailto:kontakt@dentsmile.pl' },
  { icon: <FiClock />, label: 'Godziny otwarcia', value: 'Pon–Pt: 8:00 – 18:00, Sob: 9:00 – 14:00', href: null },
];

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <p className="section-label reveal contact__label">Kontakt</p>
            <h2 className="section-title reveal reveal-delay-1 contact__title">Umów się na wizytę</h2>
            <p className="section-description reveal reveal-delay-2 contact__desc" style={{ marginBottom: '48px' }}>
              Skontaktuj się z nami telefonicznie, mailowo lub odwiedź nas osobiście. Chętnie odpowiemy na wszystkie pytania i dobierzemy najlepszy termin wizyty.
            </p>
            <div className="contact__details">
              {contactInfo.map((item, i) => (
                <div className={`contact__item reveal reveal-delay-${i + 3}`} key={i}>
                  <div className="contact__item-icon">{item.icon}</div>
                  <div>
                    <p className="contact__item-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact__item-value contact__item-link">{item.value}</a>
                    ) : (
                      <p className="contact__item-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact__map reveal reveal-delay-2">
            <div className="contact__map-placeholder image-placeholder">
              <span>Mapa / Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
