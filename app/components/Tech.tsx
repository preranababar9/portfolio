const techCategories = [
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML & CSS',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    label: 'Tools & DevOps',
    items: [
      'Git & GitHub',
      'Docker',
      'AWS',
      'GitHub Actions',
      'Prisma',
      'Figma',
    ],
  },
];

export default function Tech() {
  return (
    <section id="technologies" className="bg-card py-24 border-t border-stroke/40">
      <div className="section-container">
        <p className="section-subheading mb-3">Technologies</p>
        <h2 className="section-heading mb-12">My tech stack</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.label}
              className="bg-stroke/30 rounded-xl p-6 border border-stroke"
            >
              <h3 className="text-heading font-semibold mb-5 pb-4 border-b border-stroke/60">
                {category.label}
              </h3>
              <div className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
