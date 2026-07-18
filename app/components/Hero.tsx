"use client"
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import CountUp from 'react-countup';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-page min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 md:pt-28 pt-20 pb-12"
    >
      {/* Top label row */}
      <div className="flex items-center gap-3 mb-auto" data-aos="fade-down" data-aos-duration="600">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Portfolio · 2026
        </span>
      </div>

      {/* Main content — two column */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0 my-auto py-8">

        {/* Left — Name block */}
        <div className="flex-1" data-aos="fade-right" data-aos-delay="150" data-aos-duration="900">
          <p className="text-muted text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Hey, I&apos;m
          </p>
          <h1
            className="font-black uppercase leading-[0.9] tracking-tight text-heading"
            style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}
          >
            Prerana
            <br />
            <span className="text-primary">Babar</span>
          </h1>
        </div>

        {/* Right — Info block */}
        <div className="lg:w-[400px] xl:w-[460px] flex flex-col md:gap-8 gap-5 lg:pb-3" data-aos="fade-left" data-aos-delay="300" data-aos-duration="900">

          {/* Role pill */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-heading font-semibold text-lg tracking-wide">
              Full Stack Developer
            </span>
          </div>

          {/* Description */}
          <p className="text-muted text-base leading-relaxed border-l-2 border-stroke pl-4">
            I build fast, scalable web applications for startups and
            businesses clean code, thoughtful UX, and shipped on time.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="button-primary"
            >
              View Projects
              <IconArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-muted hover:text-primary font-medium text-sm transition-colors duration-200"
            >
              Let&apos;s Talk
              <IconArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="border-t border-stroke/50 pt-6 justify-center flex flex-wrap items-center gap-x-10 gap-y-3"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        {[
          { end: 2, suffix: '+', label: 'Years of Experience' },
          { end: 12, suffix: '+', label: 'Projects Shipped' },
          { end: null, text: 'React · Next.js · MERN', label: 'Core Stack' },
        ].map(({ end, suffix, text, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-primary font-bold xl:text-3xl md:text-2xl text-sm">
              {end !== null
                ? <CountUp end={end!} suffix={suffix} duration={4} autoAnimate autoAnimateOnce />
                : text}
            </span>
            <span className="text-muted/60  max-md:text-sm uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
