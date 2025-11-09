import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elena Park',
    role: 'Creative Director, Nova Labs',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote:
      'A rare blend of artistry and precision. The renders elevated our product launch and wowed stakeholders.',
    rating: 5,
  },
  {
    name: 'Marcus Nguyen',
    role: 'Producer, Indie Film',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop',
    quote:
      'Flawless communication and breathtaking VFX. Delivered on time with cinematic flair.',
    rating: 5,
  },
  {
    name: 'Aisha Khan',
    role: 'Architect, Orbit Studio',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
    quote:
      'The night scene visualizations helped our client seal the deal. Stunning mood and attention to detail.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_50%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">What Clients Say</h2>
        <p className="mt-2 text-slate-300">Kind words from collaborators and partners.</p>

        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-3xl"
            >
              <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <img src={testimonials[index].avatar} alt="avatar" className="h-16 w-16 rounded-full object-cover" />
                <p className="mt-6 text-lg text-slate-200">“{testimonials[index].quote}”</p>
                <div className="mt-6 flex items-center gap-2">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-300" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-400">{testimonials[index].name} — {testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-4">
            <button onClick={prev} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">Prev</button>
            <button onClick={next} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
