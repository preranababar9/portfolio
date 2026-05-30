'use client';

import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

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
        scrolled
          ? 'bg-page/80 backdrop-blur-md border-b border-stroke'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          {/* Desktop nav links — centered */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-heading text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted hover:text-heading transition-colors p-1 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-stroke">
          <div className="section-container py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-heading text-sm font-medium transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex w-fit bg-primary text-white text-sm font-semibold px-5 py-2 rounded-lg mt-1"
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
