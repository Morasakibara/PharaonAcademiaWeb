"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

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
          <a href={sectionHref("#top")} className="brand">
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
              <a href={sectionHref("#filieres")} onClick={closeMenu}>
                Filières
              </a>
            </li>
            <li>
              <a href={sectionHref("#admission")} onClick={closeMenu}>
                Admission
              </a>
            </li>
            <li>
              <a href={sectionHref("#contact")} onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a
                href={sectionHref("#contact")}
                className="btn btn-gold btn-compact"
                onClick={closeMenu}
              >
                Candidater
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="burger"
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
