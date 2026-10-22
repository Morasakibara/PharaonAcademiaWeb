export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-motif" aria-hidden="true">
        <svg
          viewBox="0 0 400 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 20 L330 90 L200 160 L70 90 Z"
            stroke="#F0B429"
            strokeWidth="1.4"
            opacity="0.55"
          />
          <path
            d="M150 40 C 120 130 110 260 150 340 C 175 390 225 400 250 350 C 280 290 275 190 240 130"
            stroke="#F0B429"
            strokeWidth="1.4"
            opacity="0.75"
          />
          <path
            d="M175 130 C 190 100 210 100 225 130 L 235 170 C 240 195 220 210 200 205 C 180 210 160 195 165 170 Z"
            stroke="#F0B429"
            strokeWidth="1.4"
            opacity="0.9"
          />
          <circle cx="200" cy="150" r="3" fill="#F0B429" />
          <path
            d="M60 250 Q 90 240 100 270 Q 110 300 140 285"
            stroke="#F1691D"
            strokeWidth="1.4"
            opacity="0.7"
          />
          <path
            d="M200 380 L200 440"
            stroke="#F0B429"
            strokeWidth="1.4"
            opacity="0.5"
          />
          <circle
            cx="200"
            cy="20"
            r="60"
            stroke="#F1691D"
            strokeWidth="1"
            opacity="0.25"
          />
          <circle
            cx="200"
            cy="230"
            r="200"
            stroke="#F0B429"
            strokeWidth="1"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="line"></span>
            <span className="eyebrow">
              Nouveau centre de formation — Yaoundé
            </span>
          </div>
          <h1>
            Bâtissez un métier créatif digne d&apos;un{" "}
            <em>héritage pharaonique</em>
          </h1>
          <p className="lead">
            PharaonAcademia forme la nouvelle génération de créatifs et de
            bâtisseurs du numérique africain. Diplôme Qualifiant Professionnel
            (DQP) en 1 an, 100% pratique, encadré par des professionnels du
            métier.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-gold">
              Candidater à la rentrée
            </a>
            <a href="#filieres" className="btn btn-outline">
              Découvrir les filières
            </a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <b>6</b>
              <span>Filières DQP</span>
            </div>
            <div className="hstat">
              <b>1 an</b>
              <span>Formation intensive</span>
            </div>
            <div className="hstat">
              <b>100%</b>
              <span>Pratique &amp; projets réels</span>
            </div>
            <div className="hstat">
              <b>1ère</b>
              <span>Promotion fondatrice</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
