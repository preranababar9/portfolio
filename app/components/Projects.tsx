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
    <section id="projects" className="bg-card py-24 border-t border-stroke/40">
      <div className="section-container">
        <p className="section-subheading mb-3">Projects</p>
        <h2 className="section-heading mb-12">Things I&apos;ve built</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative flex flex-col bg-stroke/30 border border-stroke hover:border-primary/30 rounded-xl p-6 transition-colors"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-medium">
                  Featured
                </span>
              )}

              <h3 className="text-heading font-semibold text-xl mb-2 pr-20">{project.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-muted hover:text-heading text-sm transition-colors"
                >
                  <IconBrandGithub size={16} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-muted hover:text-primary text-sm transition-colors"
                  >
                    <IconExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
