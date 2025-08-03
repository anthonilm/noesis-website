// components/ScrollColorManager.tsx
"use client";

import { useEffect } from "react";

const sectionColors: Record<string, string> = {
  "deep-blue": "#0B1A2A",
  "mid-blue": "#11435C",
  "teal": "#1C7F7F",
  "graphite": "#2E2E2E",
};

export default function ScrollColorManager() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-bg]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const colorKey = entry.target.getAttribute("data-bg");
            const newColor = sectionColors[colorKey ?? "deep-blue"];
            document.body.style.backgroundColor = newColor;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
