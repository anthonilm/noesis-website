'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <div className="hero-image-container">
        <Image
          src="/noesis-logo.png"
          alt="Noesis Systems Banner"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="tagline">
        <h1>Perform Better. Recover Faster. Live Smoother.</h1>
      </div>
    </motion.section>
  );
}
