import React from 'react';
import { FiHeart, FiShield, FiSmile } from 'react-icons/fi';
import './About.css';

const features = [
  {
    icon: <FiHeart />,
    title: 'Indywidualne podejście',
    text: 'Każdy pacjent traktowany jest wyjątkowo — dostosowujemy plan leczenia do Twoich potrzeb.',
  },
  {
    icon: <FiShield />,
    title: 'Nowoczesny sprzęt',
    text: 'Korzystamy z najnowszych technologii, aby zapewnić najwyższy standard opieki.',
  },
  {
    icon: <FiSmile />,
    title: 'Komfortowa atmosfera',
    text: 'Nasz gabinet to miejsce, w którym poczujesz się swobodnie i bezpiecznie.',
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__inner container">
        <div className="about__image-col reveal">
          <div className="about__image image-placeholder">
            {/* MIEJSCE NA ZDJĘCIE: Zamień na <img src="..." alt="Wnętrze gabinetu DentSmile" /> */}
            <span>Zdjęcie wnętrza</span>
          </div>
          <div className="about__image-accent" />
        </div>

        <div className="about__content">
          <p className="section-label reveal">O nas</p>
          <h2 className="section-title reveal reveal-delay-1">Dbamy o zdrowie<br />Twojego uśmiechu</h2>
          <p className="section-description reveal reveal-delay-2">
            Gabinet DentSmile powstał z myślą o pacjentach ceniących profesjonalizm
            i komfort. Łączymy wieloletnie doświadczenie z najnowszymi technologiami,
            aby każda wizyta była przyjemna i efektywna.
          </p>

          <div className="about__features">
            {features.map((f, i) => (
              <div className={`about__feature reveal reveal-delay-${i + 3}`} key={i}>
                <div className="about__feature-icon">{f.icon}</div>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
