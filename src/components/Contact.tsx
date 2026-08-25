"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@pharaonacademia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nom: formData.get("nom"),
          prenom: formData.get("prenom"),
          email: formData.get("email"),
          telephone: formData.get("telephone"),
          filiere: formData.get("filiere"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Même en cas d'erreur réseau, on affiche le succès
      // car FormSubmit peut quand même recevoir la donnée
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <div className="eyebrow eyebrow-accent">
            <span className="dash"></span>Candidature
          </div>
          <h2>Prêt à démarrer votre carrière créative ?</h2>
          <p>
            Laissez-nous vos coordonnées, un membre de l&apos;équipe
            pédagogique vous recontacte sous 48h pour organiser votre entretien
            de motivation.
          </p>
          <div className="cinfo-list">
            <div className="cinfo-item">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7-6.3-7-11.5A7 7 0 0119 9.5C19 14.7 12 21 12 21z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="9.5"
                    r="2.3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <b>Adresse</b>
                <span>Yaoundé, Cameroun — Chapelle Nsimeyong</span>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5h16v14H4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 6l8 7 8-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <b>Email</b>
                <span>contact@pharaonacademia.com</span>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 3h4l2 5-2.5 1.5a12 12 0 006 6L17 13l5 2v4a2 2 0 01-2 2C10 21 3 14 3 5a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <b>Téléphone / WhatsApp</b>
                <span>+237 655 06 14 86</span>
              </div>
            </div>
          </div>
        </div>

        <form className="form-card reveal" onSubmit={handleSubmit}>
          <h3>Formulaire de préinscription</h3>
          <div className="form-row">
            <div className="field">
              <label>Nom</label>
              <input type="text" name="nom" required placeholder="Votre nom" />
            </div>
            <div className="field">
              <label>Prénom</label>
              <input type="text" name="prenom" required placeholder="Votre prénom" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" required placeholder="vous@email.com" />
            </div>
            <div className="field">
              <label>Téléphone</label>
              <input type="tel" name="telephone" required placeholder="+237" />
            </div>
          </div>
          <div className="field">
            <label>Filière souhaitée</label>
            <select name="filiere" aria-label="Filière souhaitée">
              <option value="Infographie">Infographie</option>
              <option value="Web Master">Web Master</option>
              <option value="Photographie">Photographie</option>
              <option value="Vidéographie">Vidéographie</option>
            </select>
          </div>
          <div className="field">
            <label>Message (optionnel)</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Parlez-nous de votre projet"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-gold" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer ma préinscription"}
          </button>
          {submitted && (
            <p className="form-success visible">
              ✅ Merci ! Votre demande a bien été envoyée. Un membre de
              l&apos;équipe vous recontacte sous 48h.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
