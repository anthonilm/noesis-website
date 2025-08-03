'use client';

import React from 'react';
import './PerformanceRationale.css';

export default function PerformanceRationale() {
  return (
    <section className="performance-rationale" data-bg="mid-blue">
      <div className="rationale-content">
        <p className="lead-line">A system is more durable than a mindset.</p>
        <h2>Why performance care requires infrastructure</h2>
        <ul className="rationale-list">
          <li>Many people reflect on their behavior but still can’t change it.</li>
          <li>Stress disrupts systems faster than insight restores them.</li>
          <li>Follow-through depends on design, not discipline.</li>
          <li>Stability is built through structure, not mood.</li>
        </ul>
      </div>
    </section>
  );
}
