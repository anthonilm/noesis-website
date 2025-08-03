'use client';

import React from 'react';
import './WorkWithUs.css';

const offers = [
  {
    title: 'Self-Guided Tools',
    description:
      'Diagnostics, planning templates, and system guides built to improve clarity, reduce friction, and restore daily rhythm. Use them independently—on your time, in your way.',
    cta: '→ View Tools',
    link: '/frameworks',
  },
  {
    title: '1:1 Performance Care',
    description:
      'Weekly sessions for people facing persistent friction in follow-through, focus, and function. Built on diagnostics, guided by a plan, shaped around your conditions.',
    cta: '→ Book a Consult',
    link: '/book',
  },
  {
    title: 'Organizational Systems',
    description:
      'Modular systems for schools, teams, and orgs dealing with instability. Everything is behavior-based and scalable—with training, onboarding, and custom options.',
    cta: '→ Request Info',
    link: '/contact', // adjust based on actual route
  },
];

export default function WorkWithUs() {
  return (
    <section className="work-with-us">
      <h2>Work With Us</h2>
      <div className="work-grid">
        {offers.map((item) => (
          <div key={item.title} className="work-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="cta">
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
