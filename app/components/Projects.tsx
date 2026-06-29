import { IconExternalLink, IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';

const projects = [
  {
    title: 'Travel Agency ERP System',
    description:
      'An all-in-one Enterprise Resource Planning platform built specifically for travel agencies. Covers end-to-end operations including booking management, itinerary planning, supplier & vendor coordination, invoicing, HR, payroll, and real-time reporting dashboards — giving management a unified view of the entire business from a single interface.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A scalable, full-featured commerce platform supporting multi-vendor storefronts, dynamic product catalogues, inventory tracking, discount engines, and Stripe-powered secure checkout.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Tailwind CSS'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Flight Booking Website',
    description:
      'A fast and intuitive flight search and booking portal that integrates with live airline APIs to display real-time availability, fares, and seat maps with instant e-ticket generation.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Amadeus API', 'Tailwind CSS'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Company Profile Website',
    description:
      'A polished, SEO-optimised corporate profile website with smooth animations, fully responsive design, and a content management system for easy updates without touching code.',
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: '#',
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-page py-16 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Projects
        </span>
      </div>

      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        Things I&apos;ve<br />
        <span className="text-primary">built.</span>
      </h2>

      {/* Featured project card */}
      <div className="group relative border border-stroke/60 hover:border-primary/40 bg-card rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_-8px_rgba(30,58,138,0.15)] mb-6">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-linear-to-r from-primary via-primary-light to-accent" />

        <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">

          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Faded index number */}
              <span className="text-[3.5rem] font-black text-primary/8 leading-none select-none -ml-1">01</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-heading font-bold text-2xl group-hover:text-primary transition-colors duration-200">
                    {featured.title}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-accent/10 text-accent border border-accent/30 font-semibold uppercase tracking-wide">
                    Featured
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed mb-6 border-l-2 border-primary/30 pl-4 max-w-2xl">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
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
            <a
              href={featured.github}
              aria-label="View code"
              className="w-10 h-10 rounded-sm border border-stroke hover:border-primary/50 flex items-center justify-center text-muted hover:text-heading transition-colors"
            >
              <IconBrandGithub size={18} />
            </a>
            <a
              href={featured.live}
              aria-label="Live demo"
              className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center hover:bg-primary-light transition-colors"
            >
              <IconArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Other projects grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((project, i) => {
          const idx = String(i + 2).padStart(2, '0');
          return (
            <div
              key={project.title}
              className="group relative border border-stroke/60 hover:border-primary/40 bg-card rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(30,58,138,0.12)] hover:-translate-y-1 flex flex-col"
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
                    <a
                      href={project.github}
                      aria-label="View code"
                      className="text-muted hover:text-heading transition-colors"
                    >
                      <IconBrandGithub size={17} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        aria-label="Live demo"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        <IconExternalLink size={17} />
                      </a>
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
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-primary/6 text-primary border border-primary/15 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-sm bg-stroke/50 text-muted border border-stroke font-medium">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
