'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return null;
}
