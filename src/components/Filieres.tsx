export default function Filieres() {
  return (
    <section className="filieres" id="filieres">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow center-eyebrow">
            <span className="dash"></span>Nos filières
            <span className="dash"></span>
          </div>
          <h2>Quatre voies, un même niveau d&apos;exigence</h2>
          <p>
            Diplôme Qualifiant Professionnel (DQP) — 1 an de formation
            intensive, alliant fondamentaux, outils professionnels et projets
            concrets.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="fil-grid reveal">
          {/* Infographie */}
          <div className="fil-card">
            <div className="fil-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="15"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
                <circle cx="18" cy="19" r="2" fill="#F0B429" />
                <circle cx="30" cy="18" r="2" fill="#F1691D" />
                <circle cx="32" cy="28" r="2" fill="#FBF6EC" />
                <path
                  d="M24 9 C 30 9 33 14 30 18 C 27 21 24 19 24 24 C 24 30 18 30 18 24 C 18 20 14 22 14 17 C 14 12 18 9 24 9 Z"
                  stroke="#F0B429"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
            <span className="fil-tag">DQP · 1 an</span>
            <h3>Infographie</h3>
            <p>
              Identité visuelle, mise en page et création graphique, des
              fondamentaux à la maîtrise des outils professionnels.
            </p>
            <ul className="fil-list">
              <li>Logotypes &amp; chartes graphiques</li>
              <li>PAO : affiches, flyers, packaging</li>
              <li>Suite Adobe (Photoshop, Illustrator, InDesign)</li>
            </ul>
            <div className="fil-meta">
              <span>Présentiel</span>
              <span>Yaoundé</span>
            </div>
          </div>

          {/* Web Master */}
          <div className="fil-card">
            <div className="fil-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="6"
                  y="10"
                  width="36"
                  height="24"
                  rx="2"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
                <path
                  d="M16 20 L11 24 L16 28"
                  stroke="#FBF6EC"
                  strokeWidth="1.6"
                />
                <path
                  d="M32 20 L37 24 L32 28"
                  stroke="#FBF6EC"
                  strokeWidth="1.6"
                />
                <path
                  d="M27 17 L21 31"
                  stroke="#F1691D"
                  strokeWidth="1.6"
                />
                <line
                  x1="18"
                  y1="40"
                  x2="30"
                  y2="40"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <span className="fil-tag">DQP · 1 an</span>
            <h3>Web Master</h3>
            <p>
              Conception et développement de sites web et applications web : de la maquette à la
              mise en ligne, front-end et back-end.
            </p>
            <ul className="fil-list">
              <li>HTML, CSS, JavaScript,PHP</li>
              <li>UI/UX &amp; maquettage (Figma,Stitch)</li>
              <li>Introductions aux frameworks (Laravel,React)</li>
              <li>CMS, hébergement &amp; mise en production</li>
            </ul>
            <div className="fil-meta">
              <span>Présentiel</span>
              <span>Yaoundé</span>
            </div>
          </div>

          {/* Photographie */}
          <div className="fil-card">
            <div className="fil-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="6"
                  y="14"
                  width="36"
                  height="24"
                  rx="2"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
                <path
                  d="M17 14 L20 9 H28 L31 14"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
                <circle
                  cx="24"
                  cy="26"
                  r="8"
                  stroke="#FBF6EC"
                  strokeWidth="1.6"
                />
                <circle cx="24" cy="26" r="3" fill="#F1691D" />
              </svg>
            </div>
            <span className="fil-tag">DQP · 1 an</span>
            <h3>Photographie</h3>
            <p>
              Prise de vue, lumière et retouche professionnelle, du studio au
              reportage terrain.
            </p>
            <ul className="fil-list">
              <li>Techniques de prise de vue &amp; studio</li>
              <li>Retouche (Lightroom, Photoshop)</li>
              <li>Photo produit, portrait &amp; évènementiel</li>
            </ul>
            <div className="fil-meta">
              <span>Présentiel</span>
              <span>Yaoundé</span>
            </div>
          </div>

          {/* Vidéographie */}
          <div className="fil-card">
            <div className="fil-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect
                  x="6"
                  y="16"
                  width="28"
                  height="20"
                  rx="2"
                  stroke="#F0B429"
                  strokeWidth="1.6"
                />
                <path
                  d="M34 22 L42 17 V35 L34 30"
                  stroke="#F1691D"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 16 L14 10 L20 16"
                  stroke="#FBF6EC"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <span className="fil-tag">DQP · 1 an</span>
            <h3>Vidéographie</h3>
            <p>
              Tournage, narration visuelle et montage pour le web, la publicité
              et l&apos;évènementiel.
            </p>
            <ul className="fil-list">
              <li>Prise de vue &amp; réalisation</li>
              <li>Prise de vue Aérienne &amp; avec drone</li>
              <li>Montage &amp; étalonnage (Premiere Pro)</li>
              <li>Motion design &amp; habillage</li>
            </ul>
            <div className="fil-meta">
              <span>Présentiel</span>
              <span>Yaoundé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
