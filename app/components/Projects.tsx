import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'A full-featured analytics dashboard with real-time data visualisation, role-based access control, and customisable widget layouts.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with product management, shopping cart, Stripe payments, and a full admin panel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'DevOps Pipeline CLI',
    description:
      'A command-line tool to automate CI/CD workflows with built-in support for GitHub Actions and Docker deployments.',
    tech: ['Python', 'Docker', 'GitHub Actions', 'AWS'],
    github: '#',
    live: null,
    featured: false,
  },
  {
    title: 'Real-time Chat App',
    description:
      'A WebSocket-based chat application with rooms, private messages, file sharing, and read receipts.',
    tech: ['React', 'Socket.io', 'Express', 'Redis'],
    github: '#',
    live: '#',
    featured: false,
  },
];

export default function Projects() {
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
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-10"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        Things I&apos;ve<br />
        <span className="text-primary">built.</span>
      </h2>

      {/* Project list */}
      <div className="divide-y divide-stroke/50">
        {projects.map((project, i) => (
          <div key={i} className="py-8 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-start group">

            {/* Index */}
            <span className="text-muted/40 text-xs font-medium tabular-nums pt-1 w-6">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-heading font-bold text-xl group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-accent/10 text-accent border border-accent/30 font-semibold uppercase tracking-wide">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5 border-l-2 border-stroke pl-4 max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary border border-primary/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={project.github}
                aria-label="View code"
                className="text-muted hover:text-heading transition-colors"
              >
                <IconBrandGithub size={18} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  aria-label="Live demo"
                  className="text-muted hover:text-primary transition-colors"
                >
                  <IconExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
