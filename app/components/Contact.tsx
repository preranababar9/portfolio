'use client';

import { useState } from 'react';
import {
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSend,
} from '@tabler/icons-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: replace with your form submission logic (e.g. Resend, Formspree, or a server action)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full bg-stroke/40 border border-stroke hover:border-stroke/80 focus:border-primary/60 rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 outline-none transition-colors';

  return (
    <section id="contact" className="bg-card py-24 border-t border-stroke/40">
      <div className="section-container">
        <p className="section-subheading mb-3">Contact</p>
        <h2 className="section-heading mb-12">Let&apos;s work together</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-muted leading-relaxed mb-8">
              I&apos;m open to freelance projects, contract work, and full-time
              opportunities. If you have a project in mind or just want to say
              hello — drop me a message.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <IconMail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:hello@example.com"
                  className="text-muted hover:text-heading transition-colors text-sm"
                >
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IconMapPin size={18} className="text-primary shrink-0" />
                <span className="text-muted text-sm">Your City, Country</span>
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
                  className="w-10 h-10 rounded-lg border border-stroke hover:border-primary/50 flex items-center justify-center text-muted hover:text-heading transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted font-medium mb-1.5 block">Name</label>
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
                <label className="text-xs text-muted font-medium mb-1.5 block">Email</label>
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
              <label className="text-xs text-muted font-medium mb-1.5 block">Message</label>
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
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {status === 'sent' ? (
                'Message sent!'
              ) : (
                <>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && <IconSend size={16} />}
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-accent text-sm text-center">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20 pt-8 border-t border-stroke/40">
        <p className="text-muted text-xs text-center">
          © {new Date().getFullYear()} Prerana Babar. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
