const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2023 – Present',
    description:
      'Lead development of a SaaS platform serving 10,000+ users. Architected a microservices backend and built a React dashboard with real-time analytics and role-based access control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Agency Ltd.',
    period: '2022 – 2023',
    description:
      'Delivered 8+ client projects across e-commerce, fintech, and healthcare verticals. Collaborated with designers to implement pixel-perfect, performant UIs.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Studio',
    period: '2021 – 2022',
    description:
      'Built and maintained the frontend for a B2B SaaS product. Improved page load performance by 40% through code splitting, lazy loading, and bundle optimisation.',
    tech: ['React', 'Redux', 'SCSS', 'Webpack'],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-card py-24 border-t border-stroke/40">
      <div className="section-container">
        <p className="section-subheading mb-3">Experience</p>
        <h2 className="section-heading mb-12">Where I&apos;ve worked</h2>

        <div className="relative pl-6 border-l border-stroke space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-card" />

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
