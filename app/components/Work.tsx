import { experiences } from "../utils/const";

export default function Work() {
  return (
    <section id="work" className="bg-card">
      <div className="section-container">
        <p className="section-subheading mb-3">Experience</p>
        <h2 className="section-heading mb-12">Where I&apos;ve worked</h2>

        <div className="relative pl-6 border-l border-stroke space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-primary border-2 border-card" />

              <div className="bg-stroke/30 rounded-xl p-6 border border-transparent hover:border-primary/25 hover:bg-stroke/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-heading font-semibold text-lg">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-accent text-xs font-semibold tracking-wide shrink-0 pt-0.5">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
