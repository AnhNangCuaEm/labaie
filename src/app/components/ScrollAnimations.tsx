"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    // Wait for ScrollSmoother to be ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // ── Menu Cards: staggered fade-up ──
        gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Stagger children: fade-up each child with stagger ──
        gsap.utils.toArray<HTMLElement>('[data-animate="stagger-children"]').forEach((container) => {
          const children = container.children;
          gsap.fromTo(
            children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Section headers: subtle fade-up ──
        gsap.utils.toArray<HTMLElement>('[data-animate="header"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Fade-in (no translate): for images, gallery ──
        gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Slide from left ──
        gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Slide from right ──
        gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Divider line grow ──
        gsap.utils.toArray<HTMLElement>('[data-animate="line-grow"]').forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component only runs side-effects
}
