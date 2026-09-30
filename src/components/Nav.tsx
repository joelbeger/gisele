"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand" onClick={close}>
          Gisele <span>Rodrigues Da Silva</span>
        </a>
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li>
            <a href="#about" onClick={close}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#specialties" onClick={close}>
              Especialidades
            </a>
          </li>
          <li>
            <a href="#credentials" onClick={close}>
              Formação
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5515996015944"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="nav-cta"
            >
              Agendar Sessão
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
