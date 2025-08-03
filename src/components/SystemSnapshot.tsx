'use client';

import React from 'react';
import './SystemSnapshot.css';

const SystemSnapshot = () => {
  return (
    <section className="snapshot-section">
      <div className="snapshot-grid">
        <div className="snapshot-block">
          <h2 className="snapshot-title">System Snapshot</h2>
          <p className="snapshot-subtext">
            Precision mental performance tools, tailored care protocols, and
            strategic diagnostics. Rooted in behavioral science. Built for elite clarity.
          </p>
        </div>
        <div className="snapshot-facts">
          <div className="fact">
            <span className="fact-number">3</span>
            <span className="fact-label">Care Tracks</span>
          </div>
          <div className="fact">
            <span className="fact-number">12+</span>
            <span className="fact-label">Diagnostic Modules</span>
          </div>
          <div className="fact">
            <span className="fact-number">∞</span>
            <span className="fact-label">Client Pathways</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSnapshot;
