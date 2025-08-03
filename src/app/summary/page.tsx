'use client';

import { useEffect, useState } from 'react';

export default function SummaryPage() {
  const [data, setData] = useState<{
    name: string;
    goal: string;
    friction: string;
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('diagnosticForm');
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch (err) {
        console.warn('Error loading summary:', err);
      }
    }
  }, []);

  if (!data) {
    return (
      <section style={{ padding: '4rem 2rem', color: 'var(--bone)', backgroundColor: 'var(--graphite)' }}>
        <h2>Summary</h2>
        <p>No diagnostic data found.</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '4rem 2rem', color: 'var(--bone)', backgroundColor: 'var(--graphite)' }}>
      <h2>Diagnostic Summary</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
        <li><strong>Name:</strong> {data.name || '—'}</li>
        <li><strong>Goal:</strong> {data.goal}</li>
        <li><strong>Friction:</strong> {data.friction}</li>
      </ul>
    </section>
  );
}
