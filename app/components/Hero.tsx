import { IconArrowRight } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-card min-h-screen flex items-center overflow-hidden"
    >
      <div className="section-container relative z-10 py-24">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/8 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Open to opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="text-muted text-lg font-medium mb-2 tracking-wide">
            Hey there 👋 I&apos;m
          </p>

          {/* NAME — huge gradient */}
          <h1 className="text-6xl sm:text-7xl w-full md:text-8xl font-black mb-5">
            <span
              className="bg-clip-text text-primary-light"
            >
            Prerana Babar
            </span>
          </h1>

          {/* Role */}
            <h2 className="text-xl md:text-2xl font-semibold text-heading/60 tracking-wide">
              Full Stack Developer
            </h2>

          {/* Tagline */}
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg pt-3 mb-10">
            I build fast, scalable web applications for startups and
            businesses — clean code, great UX, delivered on time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:gap-3 hover:shadow-xl hover:shadow-primary/30"
            >
              View Projects
              <IconArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border-2 border-stroke hover:border-primary/50 text-heading hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              Let&apos;s Talk
            </a>
          </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted/50 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
