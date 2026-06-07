'use client';

import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-page/95 backdrop-blur-md border-b border-stroke/60' : ''
      }`}
    >
      <nav className="flex items-center justify-between h-16 px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Logo */}
        <Link href="#hero" className="text-heading font-black uppercase text-sm tracking-[0.2em]">
          PB<span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted hover:text-heading transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-primary hover:bg-primary-light text-white text-[11px] font-semibold px-5 py-2 rounded-sm transition-colors uppercase tracking-widest"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-heading transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-page border-b border-stroke/60">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted hover:text-heading transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex w-fit bg-primary text-white text-[11px] font-semibold px-5 py-2 rounded-sm uppercase tracking-widest mt-1"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
