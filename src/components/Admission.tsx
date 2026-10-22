export default function Admission() {
  return (
    <section className="parcours" id="admission">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">
            <span className="dash"></span>Admission
          </div>
          <h2>Votre parcours vers la rentrée, en 4 étapes</h2>
          <p>
            Un processus simple et accompagné, pensé pour vous mettre en
            confiance avant le premier jour de cours.
          </p>
        </div>
        <div className="steps reveal">
          <div className="steps-grid">
            <div className="step">
              <div className="num">1</div>
              <h3>Dossier de candidature</h3>
              <p>
                Renseignez le formulaire en ligne et déposez vos pièces
                (identité, photo et, le cas échéant, vos diplômes).
              </p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Entretien de motivation</h3>
              <p>
                Un échange avec l&apos;équipe pédagogique pour valider votre
                orientation vers la bonne filière.
              </p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Inscription &amp; frais</h3>
              <p>
                Confirmez votre place via le paiement des frais de scolarité,
                avec possibilité d&apos;échelonnement.
              </p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>Rentrée académique</h3>
              <p>
                Intégrez la première promotion de PharaonAcademia et démarrez
                votre année de formation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
