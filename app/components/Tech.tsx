import { techCategories } from "../utils/const";


export default function Tech() {
  return (
    <section id="technologies" className="bg-card py-16 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10" data-aos="fade-right" data-aos-duration="600">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Technologies
        </span>
      </div>

      <h2
        className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-10"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        My tech<br />
        <span className="text-primary">stack.</span>
      </h2>

      {/* Categories */}
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stroke/50 border border-stroke/50">
        {techCategories.map((category, i) => (
          <div
            key={category.label}
            className="p-6"
            data-aos="fade-up"
            data-aos-delay={`${i * 150}`}
            data-aos-duration="700"
          >
            <h3 className="md:text-xl  uppercase tracking-[0.20em] font-semibold text-muted mb-4">
              {category.label}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span className="text-heading  max-md:text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
