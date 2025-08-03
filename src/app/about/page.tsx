'use client';

import './about.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-block">
        <h1>Structured care for how people actually function.</h1>
      </section>

      <section className="about-block">
        <h2>Why This Exists</h2>
        <p>
          Many people understand their patterns but still struggle to shift them.
          Disruption in follow-through, focus, and behavioral rhythm can persist even in those who are self-aware and motivated.
          What’s often missing isn’t insight—it’s structure: the kind that holds under pressure, adapts to instability, and supports behavioral clarity over time.
        </p>
      </section>

      <section className="about-block">
        <h2>What This Is</h2>
        <p>
          This is structured mental performance care. It's a licensed, psychology-informed system built to help individuals strengthen clarity, regulation, and execution across real-life conditions.
          Clients engage in weekly sessions and work from customized Individual Engagement Plans (IEPs) designed around how they actually operate.
        </p>
      </section>

      <section className="about-block">
        <h2>How It Works</h2>
        <p>
          Each engagement begins with a diagnostic process to map behavioral patterns, environmental stressors, and functional capacity.
          From there, clients receive tailored protocols, planning tools, and feedback systems.
          Together, we refine structure, rebuild momentum, and apply behavioral strategies that hold up in the presence of pressure—not just the absence of it.
        </p>
      </section>

      <section className="about-block">
        <h2>Who This Is For</h2>
        <p>
          This model is built for people who move through complexity—individuals managing mental load, returning from burnout, or operating in high-demand roles.
          It’s especially aligned with those who think deeply, function independently, and are ready for structured systems that go beyond reflection.
        </p>
      </section>

      <section className="about-block">
        <h2>About the Practice</h2>
        <p>
          This work is grounded in formal training in counseling psychology, behavioral design, and applied research.
          Credentials include a PhD, MS, and MA in related fields, a professional license as a Mental Health Counselor (LMHC), and active certification in community-engaged research (CITI).
          The model integrates clinical insight, system design, and strategic structure.
        </p>
      </section>

      <section className="about-block about-cta">
        <a href="/frameworks" className="cta">→ Explore the Frameworks</a>
        <a href="/diagnostic" className="cta secondary">→ Start the Diagnostic</a>
      </section>
    </main>
  );
}
