'use client';

import React, { useState } from 'react';
import './PerformanceRationale.css';

export default function PerformanceRationale() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="performance-rationale" onClick={() => setExpanded(!expanded)}>
      <h2>Performance Infrastructure</h2>

      {expanded && (
        <ul className="rationale-list">
          <li>Many people reflect on their behavior but still can’t change it.</li>
          <li>Stress disrupts systems faster than insight restores them.</li>
          <li>Follow-through depends on design, not discipline.</li>
          <li>Stability is built through structure, not mood.</li>
        </ul>
      )}
    </section>
  );
}
