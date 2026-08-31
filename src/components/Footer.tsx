import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Image
                src="/assets/logo.png"
                alt="Logo PharaonAcademia"
              width={90}
              height={90}
                className="foot-brand-img"
              />
              <span><span style={{ color: "var(--papyrus)" }}>Pharaon</span><span style={{ color: "var(--orange)" }}>Academia</span></span>
            </div>
            <p className="desc">
              Centre de formation professionnelle basé à Yaoundé. DQP en 1 an
              dans les métiers créatifs et numériques.
            </p>
            <div className="socials socials-footer">
              <a href="#" aria-label="Facebook">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 8h2V5h-2c-2.2 0-4 1.8-4 4v2H9v3h2v7h3v-7h2.5l.5-3H14V9c0-.6.4-1 1-1z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.6 5.82A4.28 4.28 0 0 1 13.4 4h-2.8v12.4a2.59 2.59 0 0 1-2.6 2.6 2.59 2.59 0 0 1-2.6-2.6 2.59 2.59 0 0 1 2.6-2.6c.27 0 .54.04.8.1V9.35a5.38 5.38 0 0 0-.8-.06 5.45 5.45 0 0 0-5.4 5.45A5.45 5.45 0 0 0 8 20.14a5.45 5.45 0 0 0 5.4-5.4V9.07a7.1 7.1 0 0 0 4.15 1.33V7.6a4.28 4.28 0 0 1-.95-1.78z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul>
              <li>
                <a href="/about">À propos</a>
              </li>
              <li>
                <a href="#filieres">Filières</a>
              </li>
              <li>
                <a href="#admission">Admission</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Filières</h5>
            <ul>
              <li>
                <a href="#filieres">Infographie</a>
              </li>
              <li>
                <a href="#filieres">Web Master</a>
              </li>
              <li>
                <a href="#filieres">Photographie</a>
              </li>
              <li>
                <a href="#filieres">Vidéographie</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:contact@pharaonacademia.com">
                  contact@pharaonacademia.com
                </a>
              </li>
              <li>
                <a href="tel:+237655061486">+237 655 06 14 86</a>
              </li>
              <li>
                <a href="#">Yaoundé-Chapelle Nsimeyong, Cameroun</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>&copy; 2026 PharaonAcademia. Tous droits réservés.</p>
          <p>Votre carrière créative commence ici.</p>
        </div>
      </div>
    </footer>
  );
}
