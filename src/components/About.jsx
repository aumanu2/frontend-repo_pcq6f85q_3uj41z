import { motion } from 'framer-motion';
import { BadgeCheck, Cpu, Camera, PenTool } from 'lucide-react';

const skills = [
  { name: 'Blender', icon: Cpu },
  { name: 'Unreal Engine', icon: Camera },
  { name: 'After Effects', icon: PenTool },
  { name: 'Substance Painter', icon: BadgeCheck },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_20%_10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I design cinematic 3D visuals, product renders, and immersive animations. My focus is
            on clean composition, tactile materials, and evocative lighting that tells a story.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map((s) => (
              <motion.div
                key={s.name}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur hover:bg-white/10"
              >
                <s.icon className="mx-auto h-6 w-6 text-cyan-300" />
                <p className="mt-2 text-sm text-slate-200">{s.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-transparent p-1 backdrop-blur">
            <div className="h-full w-full rounded-[1rem] bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
