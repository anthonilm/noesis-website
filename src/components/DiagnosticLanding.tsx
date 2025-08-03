'use client';

import React, { useState, useEffect } from 'react';
import './DiagnosticLanding.css';

export default function DiagnosticLanding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    friction: '',
  });

  // Load form data from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('diagnosticForm');
    if (stored) {
      try {
        setFormData(JSON.parse(stored));
      } catch (err) {
        console.warn('Failed to parse diagnosticForm from sessionStorage');
      }
    }
  }, []);

  // Save form data to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem('diagnosticForm', JSON.stringify(formData));
  }, [formData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function nextStep() {
    setStep(prev => Math.min(prev + 1, 3));
  }

  function prevStep() {
    setStep(prev => Math.max(prev - 1, 1));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
console.log('Final Submission:', formData);
window.location.href = '/summary';
    // Route or store if needed
  }

  return (
    <section className="diagnostic-landing">
      <h2>Start Diagnostic</h2>

      <form onSubmit={handleSubmit} className="diagnostic-form">
        {step === 1 && (
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>
        )}

        {step === 2 && (
          <label>
            What's your current goal?
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="e.g., reduce burnout, improve focus"
            />
          </label>
        )}

        {step === 3 && (
          <label>
            What's getting in the way?
            <textarea
              name="friction"
              value={formData.friction}
              onChange={handleChange}
              placeholder="Briefly describe the key friction or trigger."
            />
          </label>
        )}

        <div className="form-nav">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="cta secondary">
              ← Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="cta">
              → Next
            </button>
          ) : (
            <button type="submit" className="cta">
              → Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
