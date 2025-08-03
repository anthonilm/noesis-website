'use client';

import React from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import PerformanceRationale from '../components/PerformanceRationale';
import ClientProfiles from '../components/ClientProfiles';
import SystemSnapshot from '../components/SystemSnapshot';
import DiagnosticLanding from '../components/DiagnosticLanding';
import WorkWithUs from '../components/WorkWithUs';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <main className="home-root">
      <Hero />
      <CallToAction />
      <AnimatedSection>
        <PerformanceRationale />
      </AnimatedSection>
      <AnimatedSection>
        <ClientProfiles />
      </AnimatedSection>
      <AnimatedSection>
        <SystemSnapshot />
      </AnimatedSection>
      <AnimatedSection>
        <DiagnosticLanding />
      </AnimatedSection>
      <AnimatedSection>
        <WorkWithUs />
      </AnimatedSection>
      <footer className="footer">
        <p>
          We work with high-capacity professionals and teams seeking to achieve and sustain
          peak performance—without burnout. My approach combines behavioral science, precision
          coaching, and operational adaptation to help individuals and organizations meet ambitious
          goals in ways that are scalable, sustainable, and aligned with long-term capacity. The
          result is more consistent output, better decision-making under pressure, and a measurable
          improvement in well-being and retention—while reducing costly losses in focus, engagement,
          and reliability caused by burnout and mental fatigue.
        </p>
      </footer>
    </main>
  );
}
