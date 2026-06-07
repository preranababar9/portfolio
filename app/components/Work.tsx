import { experiences } from "../utils/const";

export default function Work() {
  return (
    <section id="work" className="bg-card py-24 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Experience
        </span>
      </div>

      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-16"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        Where I&apos;ve<br />
        <span className="text-primary">worked.</span>
      </h2>

      {/* Experience list */}
      <div className="divide-y divide-stroke/50">
        {experiences.map((exp, i) => (
          <div key={i} className="py-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 group">

            {/* Left — index + period */}
            <div className="flex md:flex-col gap-4 md:gap-2">
              <span className="text-muted/40 text-xs font-medium tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                {exp.period}
              </span>
            </div>

            {/* Right — content */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                <h3 className="text-heading font-bold text-lg">{exp.role}</h3>
                <span className="hidden sm:block text-stroke">—</span>
                <p className="text-primary text-sm font-semibold">{exp.company}</p>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5 border-l-2 border-stroke pl-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary border border-primary/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
