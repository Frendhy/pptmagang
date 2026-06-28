import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SLIDES_METADATA 
} from './data';
import { 
  SlideCover, 
  SlideLatarBelakang, 
  SlideMaksudTujuan, 
  SlideCompanyProfile, 
  SlideDatabaseERD, 
  SlideDashboardDemo, 
  SlideReminderGateway, 
  SlideKendalaSolusi, 
  SlideSimpulanSaran, 
  SlideThankYou 
} from './components/Slides';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Layers,
  Info,
  ExternalLink,
  Laptop
} from 'lucide-react';

export default function App() {
  const [activeIdx, setActiveSlideIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [autoplaySpeed, setAutoplaySpeed] = useState<number>(6); // seconds
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [audioMuted, setAudioMuted] = useState<boolean>(true);
  const [theme, setTheme] = useState<'blue' | 'eclipse' | 'cyber'>('blue');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // LIST OF SLIDE IDENTIFIERS IN CHRONOLOGICAL ORDER
  const slideIds = SLIDES_METADATA.map(s => s.id);
  const currentSlide = SLIDES_METADATA[activeIdx] || SLIDES_METADATA[0];

  // PLAY SOFT TRANSITION CHIRP AUDIO CUE
  const playClickSound = useCallback(() => {
    if (audioMuted) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.warn('Audio Context block:', e);
    }
  }, [audioMuted]);

  // NAVIGATION HANDLERS
  const handleNext = useCallback(() => {
    if (activeIdx < slideIds.length - 1) {
      setDirection('forward');
      setActiveSlideIndex(prev => prev + 1);
      playClickSound();
    } else {
      setAutoplay(false); // Stop autoplay when reaching end
    }
  }, [activeIdx, slideIds.length, playClickSound]);

  const handlePrev = useCallback(() => {
    if (activeIdx > 0) {
      setDirection('backward');
      setActiveSlideIndex(prev => prev - 1);
      playClickSound();
    }
  }, [activeIdx, playClickSound]);

  const handleSlideJump = useCallback((id: string) => {
    const targetIdx = slideIds.indexOf(id);
    if (targetIdx !== -1 && targetIdx !== activeIdx) {
      setDirection(targetIdx > activeIdx ? 'forward' : 'backward');
      setActiveSlideIndex(targetIdx);
      playClickSound();
    }
  }, [activeIdx, slideIds, playClickSound]);

  // KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when typing inside forms or text fields
      const target = e.target as HTMLElement;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') {
        return;
      }
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleSlideJump('cover');
          break;
        case 'End':
          e.preventDefault();
          handleSlideJump('thanks');
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleSlideJump]);

  // AUTOPLAY EFFECT
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, autoplaySpeed * 1000);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, handleNext]);

  // FULLSCREEN HANDLER
  const toggleFullscreen = () => {
    if (!mainContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      mainContainerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => {
          console.error(`Fullscreen request blocked: ${err.message}`);
          setIsFullscreen(true); // fallback UI state
        });
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => setIsFullscreen(false));
    }
  };

  // Listen to fullscreen escape
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // SLIDE RENDERER ROUTER
  const renderSlideContent = () => {
    switch (currentSlide.id) {
      case 'cover':
        return <SlideCover onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'background':
        return <SlideLatarBelakang onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'objectives':
        return <SlideMaksudTujuan onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'company':
        return <SlideCompanyProfile onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'architecture':
        return <SlideDatabaseERD onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'dashboard-demo':
        return <SlideDashboardDemo onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'reminder-demo':
        return <SlideReminderGateway onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'issues':
        return <SlideKendalaSolusi onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'conclusion':
        return <SlideSimpulanSaran onSlideJump={handleSlideJump} activeTheme={theme} />;
      case 'thanks':
        return <SlideThankYou onSlideJump={handleSlideJump} activeTheme={theme} />;
      default:
        return <SlideCover onSlideJump={handleSlideJump} activeTheme={theme} />;
    }
  };

  // Motion variants for slide transition animations (fade & horizontal drift)
  const slideVariants = {
    enter: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  // Determine current active theme backgrounds & borders
  const getThemeStyles = () => {
    switch (theme) {
      case 'eclipse':
        return {
          bg: 'bg-brand-dark',
          card: 'bg-slate-950 border-slate-900',
          accent: 'text-slate-400',
          accentGlow: 'border-slate-800',
          scrollbar: 'bg-slate-950'
        };
      case 'cyber':
        return {
          bg: 'bg-[#030c1b]',
          card: 'bg-[#051126] border-brand-cyan/20 shadow-glow-cyan',
          accent: 'text-brand-cyan',
          accentGlow: 'glow-border-cyan',
          scrollbar: 'bg-[#030c1b]'
        };
      default: // Classic corporate blue
        return {
          bg: 'bg-[#020716]',
          card: 'bg-brand-card border-brand-blue/30 shadow-glow-blue',
          accent: 'text-brand-blue',
          accentGlow: 'glow-border-blue',
          scrollbar: 'bg-brand-dark'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div 
      id="presentation-app"
      className={`min-h-screen w-full font-sans text-slate-100 flex flex-col md:flex-row transition-all duration-500 overflow-hidden ${themeStyles.bg}`}
    >
      {/* ----------------------------------------------------
          A. SIDEBAR: PROJECT ROADMAP TIMELINE NAVIGATOR 
          (styled exactly like Frendhy Zhuang's friend's slide)
         ---------------------------------------------------- */}
      <aside className="w-full md:w-[260px] flex-shrink-0 bg-slate-950/60 backdrop-blur-md border-r border-slate-900/60 p-5 flex flex-col justify-between overflow-y-auto">
        
        {/* Sidebar Header Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#38bdf8] animate-pulse"></div>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-slate-400">
              PROJECT ROADMAP
            </span>
          </div>
          
          {/* Dashboard Mini Shortcut indicator */}
          <div className="p-3 rounded-lg bg-brand-card/40 border border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-brand-cyan" />
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Report Console
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-brand-blue/20 text-brand-cyan text-[8px] font-mono">
              2026
            </span>
          </div>
        </div>

        {/* Chronological Step List */}
        <nav className="flex-grow space-y-1 relative pl-4 border-l border-slate-900/80">
          
          {/* Sliding glow accent marker for active slide step */}
          <div 
            className="absolute left-[-1.5px] w-[3px] bg-brand-cyan rounded-full transition-all duration-300 shadow-[0_0_8px_#38bdf8]"
            style={{
              height: '24px',
              top: `${activeIdx * 34 + 6}px`
            }}
          />

          {SLIDES_METADATA.map((slide, idx) => {
            const isActive = idx === activeIdx;
            const isCompleted = idx < activeIdx;
            
            return (
              <button
                key={slide.id}
                onClick={() => handleSlideJump(slide.id)}
                className={`w-full flex items-center gap-3 py-1.5 text-left transition-all duration-200 outline-none select-none relative group`}
              >
                {/* Visual Step Dot */}
                <div 
                  className={`absolute left-[-21px] w-2.5 h-2.5 rounded-full z-10 transition-all duration-300 border flex items-center justify-center
                    ${isActive 
                      ? 'bg-slate-950 border-brand-cyan shadow-[0_0_8px_#38bdf8]' 
                      : isCompleted
                        ? 'bg-brand-cyan border-brand-cyan'
                        : 'bg-slate-950 border-slate-800'
                    }`}
                >
                  {isCompleted && (
                    <div className="w-1 h-1 rounded-full bg-slate-950"></div>
                  )}
                </div>

                {/* Step Text details */}
                <div className="pl-1">
                  <span className={`text-[10px] font-mono tracking-wider block leading-none font-bold uppercase transition-colors duration-200 ${
                    isActive ? 'text-brand-cyan' : isCompleted ? 'text-brand-blue/80' : 'text-slate-500'
                  }`}>
                    SLIDE 0{idx + 1}
                  </span>
                  <span className={`text-xs font-display font-medium block truncate max-w-[190px] transition-colors duration-200 ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {slide.id === 'cover' ? 'Halaman Cover' : slide.title}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer: Student Profile widget */}
        <div className="mt-8 border-t border-slate-900/80 pt-4">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
              STUDENT PROFILE
            </span>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-blue/30 flex items-center justify-center font-display font-bold text-sm">
                FZ
              </div>
              <div className="overflow-hidden">
                <span className="font-display font-bold text-xs text-white block leading-tight truncate">
                  Frendhy Zhuang
                </span>
                <span className="font-mono text-[9px] text-slate-400 block truncate">
                  NIM: 00000092876
                </span>
                <span className="font-mono text-[8px] text-brand-cyan block">
                  Informatika UMN '23
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ----------------------------------------------------
          B. MAIN CONTENT AREA: DECK SLIDE PLAYER CARD
         ---------------------------------------------------- */}
      <main 
        ref={mainContainerRef}
        className="flex-grow flex flex-col justify-between overflow-hidden relative"
      >
        
        {/* top navigation bar metadata */}
        <header className="p-4 bg-slate-950/20 border-b border-slate-900/40 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan font-mono text-[10px] font-bold uppercase tracking-wider">
              {currentSlide.moduleName}
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              {currentSlide.subTitle}
            </span>
          </div>

          {/* UTILITY CONTROL BOARD */}
          <div className="flex items-center gap-3 text-xs">
            
            {/* 1. Toggle Audio sound cue */}
            <button 
              onClick={() => {
                setAudioMuted(!audioMuted);
                // Trigger sound instantly upon activation as initial cue
                if (audioMuted) {
                  setTimeout(playClickSound, 50);
                }
              }}
              title={audioMuted ? "Aktifkan bunyi transisi slide" : "Bisukan bunyi transisi"}
              className={`p-1.5 rounded transition-all border ${
                audioMuted 
                ? 'bg-slate-950/40 text-slate-500 border-slate-900/60 hover:text-slate-300' 
                : 'bg-brand-blue/20 text-brand-cyan border-brand-blue/30 hover:bg-brand-blue/30'
              }`}
            >
              {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* 2. Theme switch preset selector */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900/60 border border-slate-800 p-0.5 rounded">
              {[
                { key: 'blue', label: 'DKJ Corporate' },
                { key: 'cyber', label: 'Cyber Beaker' },
                { key: 'eclipse', label: 'Midnight' }
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setTheme(t.key as any)}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all uppercase ${
                    theme === t.key 
                    ? 'bg-brand-blue text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {t.key}
                </button>
              ))}
            </div>

            {/* 3. Autoplay toggler */}
            <div className="flex items-center gap-1.5 bg-slate-900/40 border border-slate-800/80 px-2 py-1 rounded">
              <button 
                onClick={() => setAutoplay(!autoplay)}
                className={`p-0.5 rounded ${autoplay ? 'text-brand-cyan animate-pulse' : 'text-slate-500 hover:text-slate-300'}`}
                title={autoplay ? "Hentikan autoplay" : "Mulai autoplay presentasi"}
              >
                {autoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <select 
                value={autoplaySpeed}
                onChange={(e) => setAutoplaySpeed(Number(e.target.value))}
                className="bg-transparent text-[10px] font-mono text-slate-400 focus:outline-none cursor-pointer"
              >
                <option value={4} className="bg-slate-950">4s</option>
                <option value={6} className="bg-slate-950">6s</option>
                <option value={10} className="bg-slate-950">10s</option>
              </select>
            </div>

            {/* 4. Fullscreen trigger */}
            <button 
              onClick={toggleFullscreen}
              title="Fullscreen Mode (F)"
              className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Slide page counter */}
            <span className="font-mono text-xs text-slate-500 bg-slate-900/80 border border-slate-800/60 px-2 py-1 rounded">
              SLIDE {activeIdx + 1 < 10 ? `0${activeIdx + 1}` : activeIdx + 1} / {slideIds.length < 10 ? `0${slideIds.length}` : slideIds.length}
            </span>
          </div>
        </header>

        {/* ----------------------------------------------------
            THE ACTIVE SLIDE STAGE WITH TRANSITION EFFECT 
           ---------------------------------------------------- */}
        <div className="flex-grow p-4 md:p-6 overflow-hidden flex flex-col justify-center">
          
          {/* Horizontal progress bar at top of stage */}
          <div className="w-full h-1 bg-slate-900/40 rounded-full mb-4 relative overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full absolute left-0"
              animate={{ width: `${((activeIdx + 1) / slideIds.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Sliding presentation card framework */}
          <div className={`flex-grow rounded-2xl transition-all duration-300 relative overflow-hidden border ${themeStyles.card}`}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                {renderSlideContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ----------------------------------------------------
            C. FOOTER ACTIONS & CONTROLLER BAR
           ---------------------------------------------------- */}
        <footer className="p-4 bg-slate-950/20 border-t border-slate-900/40 flex flex-col sm:flex-row justify-between items-center gap-3 z-20">
          
          {/* Presentation control buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:hover:bg-slate-900 font-mono text-xs font-bold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>KEMBALI</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={activeIdx === slideIds.length - 1}
              className="px-4 py-2 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue/80 transition-colors disabled:opacity-30 disabled:hover:bg-brand-blue font-mono text-xs flex items-center gap-1 shadow-glow-blue"
            >
              <span>SELANJUTNYA</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick instructions indicator */}
          <div className="hidden lg:flex items-center gap-2 text-slate-500 font-mono text-[9px] uppercase tracking-wider select-none">
            <Info className="w-3.5 h-3.5 text-brand-cyan animate-bounce" />
            <span>Navigasi: Tombol Arah & Spasi | Fullscreen: F</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
