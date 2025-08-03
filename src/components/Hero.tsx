'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <motion.section
      className="full-image-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/noesis-logo.png"
        alt="Noesis Systems Banner"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </motion.section>
  );
}
