import { experiences } from "../utils/const";

export default function Work() {
  return (
    <section id="work" className="bg-card py-16 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10" data-aos="fade-right" data-aos-duration="600">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Experience
        </span>
      </div>

      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Where I&apos;ve<br />
        <span className="text-primary">worked.</span>
      </h2>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical connecting line */}
        <div className="absolute left-[1.65rem] top-10 bottom-10 w-px bg-linear-to-b from-primary/30 via-stroke to-transparent hidden md:block" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group flex gap-6 md:gap-10 items-start"
              data-aos="fade-up"
              data-aos-delay={`${200 + i * 150}`}
              data-aos-duration="800"
            >

              {/* Timeline dot */}
              <div className="relative shrink-0 hidden md:flex flex-col items-center mt-9">
                <div className="w-[14px] h-[14px] rounded-full border-2 border-primary bg-card group-hover:bg-primary transition-colors duration-300 z-10" />
              </div>

              {/* Card */}
              <div className="flex-1 border border-stroke/60 hover:border-primary/40 bg-page rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(30,58,138,0.14)] hover:-translate-y-0.5">

                {/* Left accent bar — shows on hover */}
                <div className="flex">
                  <div className="w-1 shrink-0 bg-linear-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-sm" />

                  <div className="flex-1 p-6 md:p-8">

                    {/* Top row: big number + period badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[3rem] font-black text-primary/8 leading-none select-none -ml-0.5 -mt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-accent border border-accent/30 bg-accent/8 px-3 py-1 rounded-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role + Company */}
                    <div className="mb-4">
                      <h3 className="text-heading font-bold text-xl md:text-2xl group-hover:text-primary transition-colors duration-200 leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-semibold mt-1 tracking-wide">
                        @ {exp.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-5 border-l-2 border-stroke pl-4">
                      {exp.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-sm bg-primary/6 text-primary border border-primary/15 font-medium hover:bg-primary/15 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
