'use client';

import React, { useState, useEffect } from 'react';
import './ClientProfiles.css';

const profiles = [
  {
    title: 'The Reflective Undershooter',
    hook: 'You know what’s wrong. You just can’t act on it.',
    points: [
      'You replay your patterns but don’t disrupt them.',
      'You’ve done therapy, read the books—but still feel stuck.',
      'You think more than you move.',
      'Your goals feel real, but traction is rare.',
    ],
    quote: '“I understand why I do it. But I keep doing it anyway.”',
    fit: 'You don’t need more insight. You need structured systems that convert reflection into follow-through.',
  },
  {
    title: 'The Overloaded Improviser',
    hook: 'Capable under pressure. Chaos outside of it.',
    points: [
      'You function in bursts, then disappear.',
      'You resist planning but suffer from disorganization.',
      'You over-adapt and under-systematize.',
      'Most of your wins come at the last minute.',
    ],
    quote: '“I can pull it off—but not consistently. And I’m tired.”',
    fit: 'You need externalized systems that protect your energy and build consistency.',
  },
  {
    title: 'The Dysregulated Executor',
    hook: 'High output. Emotional volatility. No margin for error.',
    points: [
      'You push until you break, then disappear.',
      'You get things done, but at the cost of your stability.',
      'You’ve built performance around adrenaline.',
      'Small disruptions knock everything out of place.',
    ],
    quote: '“I either do it all, or nothing at all. There’s no in between.”',
    fit: 'This service gives you operational tools to pace, reset, and stabilize without sacrificing results.',
  },
  {
    title: 'The Passive Adapter',
    hook: 'Always adjusting. Never directing.',
    points: [
      'You rely on others for structure, then resent it.',
      'You default to what’s expected instead of what’s chosen.',
      'You know what matters to others, not what matters to you.',
      'You’re rarely in the driver’s seat.',
    ],
    quote: '“I wait for direction. And when I get it, I still don’t move.”',
    fit: 'This care model trains internal leadership. It gives you structured control—not external pressure.',
  },
];

export default function ClientProfiles() {
  const [activeProfile, setActiveProfile] = useState<null | typeof profiles[0]>(null);

  // Lock scroll & listen for Escape key
  useEffect(() => {
    if (activeProfile) {
      document.body.style.overflow = 'hidden';

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveProfile(null);
      };
      window.addEventListener('keydown', handleKey);
      return () => {
        window.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
      };
    }
  }, [activeProfile]);

  return (
    <section className="client-profiles" data-bg="teal">
      <h2>Designed for People Who…</h2>

      <div className="profile-scroll-container">
        {profiles.map((p) => (
          <div key={p.title} className="profile-card">
            <h3>{p.title}</h3>
            <p className="hook">{p.hook}</p>
            <button className="read-more" onClick={() => setActiveProfile(p)}>
              → Read More
            </button>
          </div>
        ))}
      </div>

      <a href="/diagnostic" className="cta">→ Start the Diagnostic</a>

      {activeProfile && (
        <div className="modal-overlay" onClick={() => setActiveProfile(null)}>
          <div className="modal fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setActiveProfile(null)}>
              ×
            </button>
            <h3>{activeProfile.title}</h3>
            <p className="hook">{activeProfile.hook}</p>
            <ul>
              {activeProfile.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <blockquote>{activeProfile.quote}</blockquote>
            <p className="fit">{activeProfile.fit}</p>
          </div>
        </div>
      )}
    </section>
  );
}
