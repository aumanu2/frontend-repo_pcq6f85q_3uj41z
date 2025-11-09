import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Briefcase, Users, Clock, Mail, Instagram, Globe } from 'lucide-react';

function Counter({ target, icon: Icon, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const controls = useAnimation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      const start = 0;
      const end = target;
      const duration = 1200; // ms
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * eased);
        setValue(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [inView, target, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={controls} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Icon className="h-6 w-6 text-cyan-300" />
      <div className="mt-2 text-3xl font-semibold text-white">{value.toLocaleString()}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function StatsContact() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 pb-24 pt-16 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_50%_10%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Highlights</h2>
            <p className="mt-2 max-w-md text-slate-300">Numbers that hint at the craft and consistency.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Counter target={48} icon={Briefcase} label="Projects Completed" />
              <Counter target={32} icon={Users} label="Happy Clients" />
              <Counter target={6} icon={Clock} label="Years of Experience" />
              <Counter target={120} icon={Briefcase} label="Renders Delivered" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Let’s collaborate</h2>
            <p className="mt-2 text-slate-300">Tell me about your idea, product, or film. I’ll reply within 24 hours.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              <div className="group relative">
                <input className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder-transparent focus:ring-2 focus:ring-cyan-500" placeholder="Your Name" id="name" />
                <label htmlFor="name" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">Your Name</label>
              </div>
              <div className="group relative">
                <input type="email" className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder-transparent focus:ring-2 focus:ring-cyan-500" placeholder="Email" id="email" />
                <label htmlFor="email" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">Email</label>
              </div>
              <div className="group relative">
                <textarea rows="4" className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder-transparent focus:ring-2 focus:ring-cyan-500" placeholder="Project details" id="message" />
                <label htmlFor="message" className="pointer-events-none absolute left-3 top-4 bg-transparent px-1 text-slate-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">Project details</label>
              </div>
              <button className="w-full rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-6 py-3 font-medium text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.25)] backdrop-blur transition hover:from-cyan-500/30 hover:to-fuchsia-500/30">Send Message</button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"><Globe className="h-4 w-4" /> ArtStation</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10"><Mail className="h-4 w-4" /> Email</a>
            </div>

            <p className="mt-6 text-slate-400">Let’s build something extraordinary together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
