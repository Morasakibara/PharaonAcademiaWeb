export default function Promo() {
  return (
    <section className="promo">
      <div className="wrap promo-grid">
        <div className="reveal">
          <div className="promo-eyebrow eyebrow">Promotion fondatrice</div>
          <h2>
            Rejoindre la première promotion, c&apos;est un avantage — pas un
            risque
          </h2>
          <p>
            Être parmi les premiers étudiants de PharaonAcademia signifie un
            encadrement resserré, un accès direct à l&apos;équipe fondatrice et
            un rôle actif dans la construction de l&apos;identité du centre. Les
            places de la première session sont volontairement limitées.
          </p>
          <a href="#contact" className="btn btn-gold btn-reserve">
            Réserver ma place
          </a>
        </div>
        <div className="promo-cards reveal">
          <div className="promo-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#F0B429"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  stroke="#F0B429"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>
              <h4>Effectifs restreints</h4>
              <p>
                Un suivi individualisé par des formateurs praticiens du métier.
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="#F0B429"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 12h8M12 8v8"
                  stroke="#F0B429"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>
              <h4>Matériel &amp; studios dédiés</h4>
              <p>
                Accès aux équipements photo, vidéo et postes de création.
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6L12 3z"
                  stroke="#F0B429"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4>Projets clients réels</h4>
              <p>
                Un portfolio construit sur des cas concrets, dès la première
                année.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
