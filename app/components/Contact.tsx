'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconArrowRight,
} from '@tabler/icons-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_3fpkr1x',
        'template_cbo1wbv',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '6juOTWY99AlOobDUp'
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-page border border-stroke hover:border-primary/40 focus:border-primary rounded-sm px-4 py-3 text-sm text-heading placeholder:text-muted/40 outline-none transition-colors';

  return (
    <section id="contact" className="bg-page pt-16 pb-8 border-t border-stroke/50 px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-10" data-aos="fade-right" data-aos-duration="600">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-[11px] uppercase tracking-[0.25em] font-semibold">
          Contact
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — big CTA text */}
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
          <h2
            className="font-black uppercase leading-[0.9] tracking-tight text-heading mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Let&apos;s work<br />
            <span className="text-primary">together.</span>
          </h2>

          <p className="text-muted text-base leading-relaxed mb-10 border-l-2 border-stroke pl-4">
            I&apos;m open to freelance projects, contract work, and full-time
            opportunities. If you have a project in mind or just want to say
            hello — drop me a message.
          </p>

          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3">
              <IconMail size={16} className="text-primary shrink-0" />
              <a
                href="mailto:preranababar9403@gmail.com"
                className="text-muted hover:text-heading transition-colors text-sm"
              >
                preranababar9403@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <IconMapPin size={16} className="text-primary shrink-0" />
              <span className="text-muted text-sm">Mumbai, India</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { label: 'GitHub', icon: IconBrandGithub },
              { label: 'LinkedIn', icon: IconBrandLinkedin },
              { label: 'Twitter', icon: IconBrandTwitter },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-sm border border-stroke hover:border-primary/50 flex items-center justify-center text-muted hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="800"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] text-muted uppercase tracking-widest font-medium mb-2 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[11px] text-muted uppercase tracking-widest font-medium mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-muted uppercase tracking-widest font-medium mb-2 block">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-black cursor-pointer disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-sm transition-colors uppercase tracking-widest text-sm hover:gap-3"
          >
            {status === 'sent' ? (
              'Message Sent!'
            ) : (
              <>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                {status !== 'sending' && (
                  <IconArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                )}
              </>
            )}
          </button>

          {status === 'sent' && (
            <p className="text-accent text-sm text-center uppercase tracking-widest">
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center uppercase tracking-widest">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="border-t border-stroke/50 mt-10 pt-6 flex items-center justify-between">
        <span className="text-muted/50 text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} Prerana Babar
        </span>
        <span className="text-muted/50 text-sm uppercase tracking-widest">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </section>
  );
}
