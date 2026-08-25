"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Use requestAnimationFrame for smoother animations
    const revealElements = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            requestAnimationFrame(() => {
              e.target.classList.add("in");
            });
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before element enters viewport
      }
    );

    revealElements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
