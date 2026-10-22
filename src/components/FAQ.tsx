"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quelles sont les conditions d'admission ?",
    a: "Aucun diplôme préalable n'est exigé. Nous accueillons toute personne motivée, âgée de 18 ans et plus, avec un intérêt pour les métiers créatifs, numériques et techniques. Un entretien de motivation est réalisé pour valider l'orientation.",
  },
  {
    q: "Combien coûte la formation ?",
    a: "Les frais de scolarité sont accessibles et un échelonnement de paiement est possible. Contactez-nous pour obtenir le barème détaillé et les modalités de paiement adaptées à votre situation.",
  },
  {
    q: "La formation est-elle certifiante ?",
    a: "Oui, vous obtenez un Diplôme Qualifiant Professionnel (DQP) reconnu à l'issue de la formation. Mais au-delà du diplôme, vous repartez avec un portfolio concret de projets réalisés.",
  },
  {
    q: "Quels horaires ?",
    a: "Les cours se déroulent du lundi au vendredi, en présentiel à Yaoundé (Chapelle Nsimeyong). Les horaires sont adaptables selon la filière choisie.",
  },
  {
    q: "Faut-il un ordinateur personnel ?",
    a: "Le centre met à disposition du matériel et des postes de travail équipés. Cependant, avoir un ordinateur personnel est un plus pour travailler sur vos projets en dehors des cours.",
  },
  {
    q: "Quelles sont les débouchés après la formation ?",
    a: "Nos diplômés peuvent travailler en tant que freelances, intégrer des agences, des startups ou des entreprises. Les métiers créatifs et numériques sont en forte demande au Cameroun et en Afrique francophone.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow center-eyebrow">
            <span className="dash"></span>Questions fréquentes
            <span className="dash"></span>
          </div>
          <h2>Vous avez des questions ?</h2>
          <p>
            Retrouvez les réponses aux interrogations les plus courantes sur
            notre formation et notre centre.
          </p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
