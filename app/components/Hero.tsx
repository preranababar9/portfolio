import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-page min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-12"
    >
      {/* Top label row */}
      <div className="flex items-center gap-3 mb-auto">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Portfolio · 2026
        </span>
      </div>

      {/* Main content — two column */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-0 my-auto py-16">

        {/* Left — Name block */}
        <div className="flex-1">
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
        <div className="lg:w-[400px] xl:w-[460px] flex flex-col gap-8 lg:pb-3">

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
            businesses — clean code, thoughtful UX, and shipped on time.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm uppercase tracking-widest hover:gap-3"
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
      <div className="border-t border-stroke/50 pt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
        {[
          { value: '3+', label: 'Years of Experience' },
          { value: '20+', label: 'Projects Shipped' },
          { value: 'React · Next.js · Node', label: 'Core Stack' },
        ].map(({ value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-primary font-bold text-sm">{value}</span>
            <span className="text-muted/60 text-xs uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
