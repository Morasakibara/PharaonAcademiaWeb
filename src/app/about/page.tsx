import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

const aboutDescription =
  "Découvrez l'histoire, les valeurs et l'équipe de PharaonAcademia, centre de formation professionnelle à Yaoundé.";

export const metadata: Metadata = {
  title: "À propos",
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://pharaonacademia.com/about",
    siteName: "PharaonAcademia",
    title: "À propos — PharaonAcademia",
    description: aboutDescription,
    images: [
      {
        url: "/og-image.png",
        width: 630,
        height: 630,
        alt: "PharaonAcademia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos — PharaonAcademia",
    description: aboutDescription,
    images: ["/og-image.png"],
  },
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#F0B429" strokeWidth="1.8" />
        <path d="M16 24l5 5 11-11" stroke="#F0B429" strokeWidth="2" />
      </svg>
    ),
    title: "Exigence du geste",
    desc: "Des formateurs praticiens, pas seulement des enseignants théoriques. Chaque cours est orienté vers la pratique professionnelle.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="#F0B429" strokeWidth="1.8" />
        <path d="M16 24h16M24 16v16" stroke="#F0B429" strokeWidth="1.8" />
      </svg>
    ),
    title: "Portfolio réel",
    desc: "Chaque filière se termine par un projet client ou une mise en situation réelle. Vous repartez avec des pièces concrètes.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="16" cy="20" r="6" stroke="#F0B429" strokeWidth="1.8" />
        <circle cx="32" cy="20" r="6" stroke="#F1691D" strokeWidth="1.8" />
        <circle cx="24" cy="34" r="6" stroke="#FBF6EC" strokeWidth="1.8" />
      </svg>
    ),
    title: "Petits effectifs",
    desc: "Un accompagnement individualisé du premier au dernier jour. Pas de numéros, de vrais liens avec les formateurs.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6l4 8 9 1.5-6.5 6 1.5 9L24 25l-8 5.5 1.5-9-6.5-6 9-1.5L24 6z" stroke="#F0B429" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Esprit fondateur",
    desc: "Rejoindre la 1ère promotion, c'est marquer l'histoire du centre. Vous êtes les pionniers de PharaonAcademia.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 36V20l12-10 12 10v16H12z" stroke="#F0B429" strokeWidth="1.8" />
        <rect x="20" y="28" width="8" height="8" stroke="#F1691D" strokeWidth="1.8" />
      </svg>
    ),
    title: "Ancré au Cameroun",
    desc: "Un centre pensé pour les réalités locales, avec des débouchés concrets sur le marché camerounais et francophone.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#F0B429" strokeWidth="1.8" />
        <path d="M24 14v10l7 7" stroke="#F1691D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Formation intensive",
    desc: "12 mois de formation à temps plein, immersifs et exigeants. Pas de demi-mesure.",
  },
];

const timeline = [
  { year: "2025", event: "Conception du projet PharaonAcademia" },
  { year: "2025", event: "Aménagement des locaux et studios à Yaoundé" },
  { year: "2026", event: "Recrutement de la 1ère promotion (places limitées)" },
  { year: "2026", event: "Rentrée académique — début des cours" },
  { year: "2027", event: "Diplôme de la 1ère promotion" },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Header />

      {/* Hero About */}
      <section className="about-hero">
        <div className="wrap">
          <div className="eyebrow eyebrow-accent" style={{ color: "#F0B429" }}>
            <span className="dash"></span>Notre histoire
          </div>
          <h1 className="about-hero-title">
            PharaonAcademia, c&apos;est la conviction que l&apos;Afrique a
            tout ce qu&apos;il faut pour former les meilleurs créatifs du
            numérique.
          </h1>
          <p className="about-hero-sub">
            Nous avons fondé ce centre parce que nous croyons que le talent
            africain mérite un cadre de formation à la hauteur de son ambition.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="wrap about-mission-grid">
          <div className="reveal">
            <div className="eyebrow eyebrow-accent">
              <span className="dash"></span>Notre mission
            </div>
            <h2>Former des créatifs et des bâtisseurs du numérique africain</h2>
            <p>
              PharaonAcademia est né d&apos;un constat simple : le marché
              francophone manque de créatifs et de développeurs formés sur des
              projets concrets, prêts à travailler dès la sortie. Nous
              construisons un centre exigeant, moderne et ancré dans les
              réalités du terrain, où chaque étudiant repart avec un portfolio,
              pas seulement un certificat.
            </p>
            <p style={{ marginTop: "16px" }}>
              Notre nom ? Un hommage aux bâtisseurs de l&apos;Antiquité.
              Comme les pharaons, nous croyons que la grandeur se construit
              avec vision, patience et exigence. PharaonAcademia, c&apos;est
              la volonté de bâtir quelque chose de durable pour la jeune
              génération africaine.
            </p>
          </div>
          <div className="about-art reveal">
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
      </section>

      {/* Values */}
      <section className="about-section about-values">
        <div className="wrap">
          <div className="sec-head center">
            <div className="eyebrow center-eyebrow">
              <span className="dash"></span>Nos valeurs
              <span className="dash"></span>
            </div>
            <h2>Ce qui nous anime au quotidien</h2>
          </div>
          <div className="values-grid reveal">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section about-timeline">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">
              <span className="dash"></span>Notre parcours
            </div>
            <h2>L&apos;aventure en quelques étapes</h2>
          </div>
          <div className="timeline reveal">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--papyrus)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
            Prêt à rejoindre la 1ère promotion ?
          </h2>
          <p style={{ color: "rgba(251,246,236,.72)", marginTop: "16px", maxWidth: "50ch", margin: "16px auto 0" }}>
            Les places sont volontairement limitées. Candiditez dès maintenant
            pour réserver votre place.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href="/#contact" className="btn btn-gold">
              Candidater maintenant
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
