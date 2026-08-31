"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav>
          <a href="#top" className="brand">
            <Image
              src="/assets/logo.png"
              alt="Logo PharaonAcademia"
              width={100}
              height={100}
              className="brand-img"
              priority
            />
            <span className="brand-text">
              <span style={{ color: "var(--papyrus)" }}>Pharaon</span><span style={{ color: "var(--orange)" }}>Academia</span>
              <span>Votre carrière créative commence ici</span>
            </span>
          </a>
          <ul className={`nav-links ${open ? "open" : ""}`} id="navLinks">
            <li>
              <a href="/about" onClick={closeMenu}>
                À propos
              </a>
            </li>
            <li>
              <a href="#filieres" onClick={closeMenu}>
                Filières
              </a>
            </li>
            <li>
              <a href="#admission" onClick={closeMenu}>
                Admission
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-gold btn-compact" onClick={closeMenu}>
                Candidater
              </a>
            </li>
          </ul>
          <div className="burger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
