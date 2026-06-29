import { IconArrowRight } from '@tabler/icons-react';

export default function About() {
  return (
    <section id="about" className="bg-page py-20 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          About Me
        </span>
      </div>

      {/* Heading */}
      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        Passionate<br />
        about<br />
        <span className="text-primary">the web.</span>
      </h2>

      {/* Bio section */}
      <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-20 items-start">

        {/* Left — photo with offset decorative border */}
        <div className="relative self-start">
          <div className="relative w-full aspect-4/5 border border-stroke/60 flex flex-col items-center justify-center bg-card overflow-visible">
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/25 -z-10" />
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

            {/* Initials block */}
            <div className="flex flex-col items-center gap-3">
              <span
                className="font-black text-primary/10 leading-none select-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
              >
                PB
              </span>
              <span className="text-muted/40 text-[10px] uppercase tracking-[0.3em]">
                Photo coming soon
              </span>
            </div>
          </div>
        </div>

        {/* Right — bio */}
        <div className="flex flex-col gap-6">
          {/* Decorative opening quote */}
          <div
            className="font-black text-primary/10 leading-none select-none -mb-4"
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
          >
            &ldquo;
          </div>

          <div className="space-y-4 pl-5 border-l-2 border-stroke">
            <p className="text-muted text-base leading-relaxed">
              I&apos;m a full-stack developer with 2+ years of experience building
              scalable web applications. I work across the entire stack — from
              designing APIs and databases to crafting responsive, accessible UIs.
            </p>
            <p className="text-muted text-base leading-relaxed">
              I care about code quality, developer experience, and shipping
              products that solve real problems. I enjoy working with startups and
              small teams where I can have a meaningful impact.
            </p>
          </div>

          {/* Signature-style name */}
          <div className="flex items-center gap-4 pt-2">
            <span className="w-6 h-px bg-stroke" />
            <span className="text-heading font-bold text-sm uppercase tracking-widest">
              Prerana Babar
            </span>
          </div>

          <a href="#contact" className="button-primary w-fit mt-2 group">
            Get in touch
            <IconArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
