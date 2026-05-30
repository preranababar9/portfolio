import { IconArrowRight } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #ece6d8 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blue glow — left */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary opacity-[0.1] rounded-full blur-3xl pointer-events-none" />
      {/* Beige warm glow — right */}
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-beige opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 py-32">
        <div className="max-w-3xl">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-medium tracking-wide">
              Available for freelance work
            </span>
          </div>

          {/* Greeting + Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
            Hi, I&apos;m{' '}
            <span className="text-primary">Your Name</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-muted mb-6">
            Full Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
            I build fast, scalable web applications for startups and businesses —
            clean code, great UX, delivered on time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
              <IconArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-beige/30 hover:border-beige/70 text-beige font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
