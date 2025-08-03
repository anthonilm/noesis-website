'use client';

import React from 'react';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-section" data-bg="deep-blue">
      <div className="cta-content">
        <h2>Ready to strengthen your behavioral infrastructure?</h2>
        <p>Start with a diagnostic designed to surface friction points and context-specific needs.</p>
        <button className="cta">→ Start Diagnostic</button>
      </div>
    </section>
  );
}
