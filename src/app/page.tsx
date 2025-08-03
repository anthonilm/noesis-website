'use client';

import React from 'react';
import './home.css';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import PerformanceRationale from '../components/PerformanceRationale';
import ClientProfiles from '../components/ClientProfiles';
import SystemSnapshot from '../components/SystemSnapshot';
import DiagnosticLanding from '../components/DiagnosticLanding';
import WorkWithUs from '../components/WorkWithUs';

export default function Home() {
  return (
    <main className="home-root">
      <Hero />

      {/* 1. CTA */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>

      {/* 3. Client Profiles */}
      <AnimatedSection>
        <ClientProfiles />
      </AnimatedSection>

      {/* 4. System Snapshot */}
      <AnimatedSection>
        <section className="system-snapshot">
          <h2>The structure behind clarity and follow-through.</h2>
          <div className="components">
            <div className="component">
              <h3>Diagnostic Stack</h3>
              <p>
                Tiered assessments that identify behavioral patterns, friction points,
                and contextual triggers. Built for practical application.
              </p>
            </div>
            <div className="component">
              <h3>Protocol Library</h3>
              <p>
                Pre-built responses for breakdowns in function—interruption, fatigue, crisis.
                Structured to be usable under stress.
              </p>
            </div>
            <div className="component">
              <h3>Custom Tracks</h3>
              <p>
                Modular plans tailored to your current goals, constraints, and level of stability.
                Updated as your situation shifts.
              </p>
            </div>
          </div>
          <button className="cta secondary">→ Explore the Frameworks</button>
        </section>
      </AnimatedSection>

      {/* 5. Diagnostic */}
      <AnimatedSection>
        <DiagnosticLanding />
      </AnimatedSection>

      {/* Optional: Work With Us */}
      <AnimatedSection>
        <WorkWithUs />
      </AnimatedSection>
    </main>
  );
}
