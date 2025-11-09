import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import StatsContact from './components/StatsContact';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const onToggleTheme = () => setIsDark((d) => !d);
  const onExplore = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} relative font-sans`}> 
      {/* Glowing cursor */}
      <div
        style={{
          left: cursorPos.x - 150,
          top: cursorPos.y - 150,
        }}
        className="pointer-events-none fixed z-50 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] mix-blend-screen"
      />

      <Hero onToggleTheme={onToggleTheme} isDark={isDark} onExplore={onExplore} />
      <About />
      <Work />
      <StatsContact />

      <footer className="border-t border-white/10 bg-neutral-950/80 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} [Designer Name]. Crafted with Blender, love, and neon.
      </footer>
    </div>
  );
}

export default App;
