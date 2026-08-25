export default function About() {
  return (
    <section className="about" id="apropos">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="about-art">
            <svg viewBox="0 0 300 300" fill="none">
              <path
                d="M150 30 C 100 130 90 220 150 270 C 210 220 200 130 150 30 Z"
                stroke="#F0B429"
                strokeWidth="1.3"
                opacity="0.85"
              />
              <path
                d="M120 95 C 130 75 170 75 180 95 L 188 125 C 192 145 175 158 150 154 C 125 158 108 145 112 125 Z"
                stroke="#FBF6EC"
                strokeWidth="1.3"
                opacity="0.9"
              />
              <path
                d="M60 40 L150 5 L240 40 L150 75 Z"
                stroke="#F1691D"
                strokeWidth="1.3"
                opacity="0.85"
              />
              <line
                x1="150"
                y1="75"
                x2="150"
                y2="95"
                stroke="#F1691D"
                strokeWidth="1.3"
                opacity="0.85"
              />
              <circle
                cx="150"
                cy="150"
                r="120"
                stroke="#F0B429"
                strokeWidth="0.6"
                opacity="0.25"
              />
            </svg>
          </div>
        </div>
        <div className="about-copy reveal">
          <div className="eyebrow eyebrow-accent">
            <span className="dash"></span>Notre ambition
          </div>
          <h2>
            Un centre pensé pour le métier, pas pour le diplôme seul
          </h2>
          <p>
            PharaonAcademia est né d&apos;un constat simple : le marché
            francophone manque de créatifs et de développeurs formés sur des
            projets concrets, prêts à travailler dès la sortie. Nous construisons
            un centre exigeant, moderne et ancré dans les réalités du terrain,
            où chaque étudiant repart avec un portfolio, pas seulement un
            certificat.
          </p>
          <div className="pillars">
            <div className="pillar">
              <b>Exigence du geste</b>
              <span>
                Des formateurs praticiens, pas seulement des enseignants
                théoriques.
              </span>
            </div>
            <div className="pillar">
              <b>Portfolio réel</b>
              <span>
                Chaque filière se termine par un projet client ou une mise en
                situation réelle.
              </span>
            </div>
            <div className="pillar">
              <b>Petits effectifs</b>
              <span>
                Un accompagnement individualisé du premier au dernier jour.
              </span>
            </div>
            <div className="pillar">
              <b>Esprit fondateur</b>
              <span>
                Rejoindre la 1ère promotion, c&apos;est marquer l&apos;histoire
                du centre.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
