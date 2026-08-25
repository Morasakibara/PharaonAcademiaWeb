export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah N.",
      role: "Élève — Web Master",
      text: "PharaonAcademia m'a donné les clés pour lancer ma carrière dans le numérique. En 1 an, j'ai créé 5 sites web complets pour de vrais clients. L'encadrement est exceptionnel.",
      rating: 5,
    },
    {
      name: "David M.",
      role: "Élève — Infographie",
      text: "L'approche pratique fait toute la différence. Je suis arrivé avec zéro connaissance en design et je repars avec un portfolio solide. Les formateurs sont toujours disponibles.",
      rating: 5,
    },
    {
      name: "Caroline T.",
      role: "Élève — Photographie",
      text: "Les studios sont équipés professionnels et l'ambiance est stimulante. J'ai déjà décroché mes premiers contrats grâce aux projets réalisés en formation. Vivement la suite !",
      rating: 5,
    },
    {
      name: "Emmanuel K.",
      role: "Élève — Vidéographie",
      text: "Mon rêve de devenir réalisateur prend forme ici. Le matériel est de qualité et les formateurs maîtrisent leur art. Je recommande à 100%.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow center-eyebrow">
            <span className="dash"></span>Témoignages
            <span className="dash"></span>
          </div>
          <h2>Ils ont choisi PharaonAcademia</h2>
          <p>
            Découvrez les retours de nos élèves de la première promotion — des
            créatifs qui construisent déjà leur avenir.
          </p>
        </div>
        <div className="testi-grid reveal">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#F0B429"
                  >
                    <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <b className="testi-name">{t.name}</b>
                  <span className="testi-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
