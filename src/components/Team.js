import React from 'react';
import './Team.css';

function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team__header">
          <p className="section-label reveal">Zespół</p>
          <h2 className="section-title reveal reveal-delay-1">Poznaj nasz zespół</h2>
          <p className="section-description reveal reveal-delay-2">
            Za każdym uśmiechem stoi zespół doświadczonych specjalistów,
            którzy z pasją dbają o zdrowie Twoich zębów.
          </p>
        </div>

        <div className="team__grid">
          <div className="team__card team__card--main reveal" id="team-lead">
            <div className="team__card-photo image-placeholder">
              {/* MIEJSCE NA ZDJĘCIE */}
              <span>Zdjęcie lekarza</span>
            </div>
            <div className="team__card-info">
              <h3 className="team__card-name">lek. stom. Anna Kowalska</h3>
              <p className="team__card-role">Założycielka &amp; Lekarz dentysta</p>
              <p className="team__card-bio">
                Absolwentka Uniwersytetu Medycznego z ponad 12-letnim doświadczeniem
                klinicznym. Specjalizuje się w stomatologii zachowawczej i estetycznej.
                Na bieżąco poszerza swoją wiedzę, uczestnicząc w krajowych
                i międzynarodowych szkoleniach.
              </p>
              <p className="team__card-quote">"Każdy uśmiech zasługuje na najlepszą opiekę."</p>
            </div>
          </div>

          <div className="team__card reveal reveal-delay-1" id="team-member-2">
            <div className="team__card-photo image-placeholder">
              {/* MIEJSCE NA ZDJĘCIE */}
              <span>Zdjęcie</span>
            </div>
            <div className="team__card-info">
              <h3 className="team__card-name">Marta Nowak</h3>
              <p className="team__card-role">Asystentka stomatologiczna</p>
            </div>
          </div>

          <div className="team__card reveal reveal-delay-2" id="team-member-3">
            <div className="team__card-photo image-placeholder">
              {/* MIEJSCE NA ZDJĘCIE */}
              <span>Zdjęcie</span>
            </div>
            <div className="team__card-info">
              <h3 className="team__card-name">Katarzyna Zielińska</h3>
              <p className="team__card-role">Higienistka stomatologiczna</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
