'use client';
import { useState, useEffect } from 'react';

export const useFixedScroll = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('fixed_container');
      if (container) {
        const rect = container.getBoundingClientRect();
        setIsFixed(rect.top <= -452);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isFixed };
};
