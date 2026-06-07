import { IconArrowRight } from '@tabler/icons-react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
];

export default function About() {
  return (
    <section id="about" className="bg-page py-24 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          About Me
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — heading */}
        <div>
          <h2
            className="font-black uppercase leading-[0.9] tracking-tight text-heading"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Passionate<br />
            about<br />
            <span className="text-primary">the web.</span>
          </h2>
        </div>

        {/* Right — bio, photo, CTA */}
        <div className="flex flex-col gap-8">

          {/* Photo placeholder */}
          <div className="w-full h-56 bg-card border border-stroke flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 rounded-sm bg-primary/10 border border-primary/20 mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">PB</span>
              </div>
              <p className="text-muted text-xs uppercase tracking-widest">Your photo here</p>
            </div>
          </div>

          {/* Bio */}
          <div className="border-l-2 border-stroke pl-5 space-y-4">
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

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm uppercase tracking-widest w-fit hover:gap-3"
          >
            Get in touch
            <IconArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-stroke/50 mt-16 pt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-primary font-bold text-sm">{value}</span>
            <span className="text-muted/60 text-xs uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
