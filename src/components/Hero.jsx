import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon } from 'lucide-react';

export default function Hero({ onToggleTheme, isDark, onExplore }) {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Hi, I’m <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">[Designer Name]</span> —
            <br /> 3D Artist & Blender Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-slate-200"
          >
            Crafting stunning 3D worlds, visuals, and animations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-6 py-3 text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.25)] backdrop-blur transition hover:from-cyan-500/30 hover:to-fuchsia-500/30"
            >
              <span className="font-medium">Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
