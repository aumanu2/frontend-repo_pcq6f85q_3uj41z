import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Iridescent Product Render',
    category: 'Product Design',
    client: 'Nova Labs',
    cover: 'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop',
    ],
    description:
      'Exploration of translucent materials and neon accents for an elegant consumer tech aesthetic.',
  },
  {
    id: 2,
    title: 'Architectural Night Scene',
    category: 'ArchViz',
    client: 'Studio Orbit',
    cover: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1527195575508-5b692d9dc1f4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop',
    ],
    description: 'High-contrast lighting study with fog volumes and subtle rain FX.',
  },
  {
    id: 3,
    title: 'Retro-Futurist VFX Shot',
    category: 'VFX',
    client: 'Indie Film',
    cover: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
    ],
    description: 'Composited holographic UI with procedural ribbons and camera shake.',
  },
];

export default function Work() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              A curated set of 3D explorations and client projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              whileHover={{ y: -4 }}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-lg backdrop-blur"
            >
              <div
                className="h-56 w-full bg-cover bg-center transition group-hover:scale-105"
                style={{ backgroundImage: `url(${p.cover})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-cyan-300">{p.category}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                <div className="h-72 w-full bg-black md:h-full">
                  <img src={active.images[0]} alt={active.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-cyan-300">{active.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{active.title}</h3>
                  <p className="mt-3 text-slate-300">{active.description}</p>

                  <div className="mt-4 text-sm text-slate-400">
                    <p><span className="text-slate-200">Client:</span> {active.client}</p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" /> View Case Study
                    </a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {active.images.slice(1).map((img, i) => (
                      <img key={i} src={img} alt="detail" className="h-28 w-full rounded-lg object-cover" />
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-2 text-xs text-slate-400">Client-rated quality</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
