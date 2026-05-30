import { IconArrowRight } from '@tabler/icons-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
];

export default function About() {
  return (
    <section id="about" className="bg-card py-24">
      <div className="section-container">
        <p className="section-subheading mb-3">About Me</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div>
            <h2 className="section-heading mb-6">
              Passionate about building for the web.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a full-stack developer with 3+ years of experience building
              scalable web applications. I work across the entire stack — from
              designing APIs and databases to crafting responsive, accessible UIs.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              I care about code quality, developer experience, and shipping
              products that solve real problems. I enjoy working with startups and
              small teams where I can have a meaningful impact.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Get in touch
              <IconArrowRight size={18} />
            </a>
          </div>

          {/* Photo + stats */}
          <div className="flex flex-col gap-10">
            {/* Avatar placeholder */}
            <div className="relative self-center md:self-start">
              <div className="absolute -inset-3 border border-primary/15 rounded-2xl" />
              <div className="w-64 h-72 rounded-xl bg-stroke/70 flex items-center justify-center">
                {/* Replace with: <Image src="/photo.jpg" alt="Prerana Babar" fill className="object-cover rounded-xl" /> */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">PB</span>
                  </div>
                  <p className="text-muted text-xs">Your photo here</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-accent" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-stroke pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
