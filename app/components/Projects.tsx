import { IconExternalLink, IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import { projects } from '../utils/const';
import Link from 'next/link';


export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-page py-16 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10" data-aos="fade-right" data-aos-duration="600">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Projects
        </span>
      </div>

      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Things I&apos;ve<br />
        <span className="text-primary">built.</span>
      </h2>

      {/* Featured project cards */}
      <div className="flex flex-col gap-6 mb-6">
        {featured.map((f, i) => (
          <div
            key={f.title}
            className="group relative border border-stroke/60 hover:border-primary/40 bg-card rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_-8px_rgba(30,58,138,0.15)]"
            data-aos="fade-up"
            data-aos-delay={`${200 + i * 150}`}
            data-aos-duration="800"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-linear-to-r from-primary via-primary-light to-accent" />

            <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">

              {/* Left content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[3.5rem] font-black text-primary/8 leading-none select-none -ml-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-heading font-bold text-2xl group-hover:text-primary transition-colors duration-200">
                        {f.title}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-sm bg-accent/10 text-accent border border-accent/30 font-semibold uppercase tracking-wide">
                        Featured
                      </span>
                      {(f as { ongoing?: boolean }).ongoing && (
                        <span className="text-[10px] px-2 py-0.5 rounded-sm bg-green-500/10 text-green-600 border border-green-500/30 font-semibold uppercase tracking-wide">
                          Ongoing
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6 border-l-2 border-primary/30 pl-4 max-w-4xl">
                  {f.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {f.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary border border-primary/20 font-medium hover:bg-primary/15 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right links */}
              <div className="flex md:flex-col items-center gap-3 pt-1">
                <Link
                  href={f.github}
                  target='_blank'
                  aria-label="View code"
                  className="w-10 h-10 rounded-sm border border-stroke hover:border-primary/50 flex items-center justify-center text-muted hover:text-heading transition-colors"
                >
                  <IconBrandGithub size={18} />
                </Link>
                <Link
                  href={f.live}
                  target='_blank'
                  aria-label="Live demo"
                  className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center hover:bg-primary-light transition-colors"
                >
                  <IconArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other projects grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((project, i) => {
          const idx = String(featured.length + i + 1).padStart(2, '0');
          return (
            <div
              key={project.title}
              className="group relative border border-stroke/60 hover:border-primary/40 bg-card rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(30,58,138,0.12)] hover:-translate-y-1 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={`${100 + i * 120}`}
              data-aos-duration="800"
            >
              {/* Top accent bar — appears on hover */}
              <div className="h-0.5 w-full bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-1">

                {/* Index + links row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[2.5rem] font-black text-primary/8 leading-none select-none -ml-0.5">
                    {idx}
                  </span>
                  <div className="flex items-center gap-2">
                    <Link
                      href={project.github}
                      target='_blank'
                      aria-label="View code"
                      className="text-muted hover:text-heading transition-colors"
                    >
                      <IconBrandGithub size={17} />
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                      target='_blank'
                        aria-label="Live demo"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        <IconExternalLink size={17} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-heading font-bold text-lg group-hover:text-primary transition-colors duration-200 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-primary/6 text-primary border border-primary/15 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
