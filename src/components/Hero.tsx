/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Cpu, GraduationCap, Award, Play } from 'lucide-react';
import Typewriter from './Typewriter';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            // Autoplay pre-requisites are met because video has muted attribute,
            // but log/handle typical browser permissions nicely
            console.debug('Autoplay initiated:', err);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.15, // trigger when at least 15% of section/video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const METRICS = [
    { value: '30+', label: 'Certificates' },
    { value: '9', label: 'Projects' },
    { value: '8.0', label: 'Current CGPA' },
    { value: '1K+', label: 'Buildathon' }
  ];

  return (
    <section className="relative min-h-screen bg-dark flex flex-col justify-center items-center pt-24 overflow-hidden" id="home">
      {/* Dynamic interactive particle background */}
      <ParticleBackground />

      {/* Decorative Grid and Ambient Blur Vectors */}
      <div className="absolute inset-0 -z-10" id="hero-background-effects">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full relative z-10" id="hero-grid">
        {/* Left Column Text details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
          id="hero-left-col"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2" id="hero-badge">
            <div className="w-8 h-px bg-primary" />
            AI & Data Science Student Portfolio
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[0.95] tracking-tighter text-text-main" id="hero-title">
            Lathika<span className="text-gradient block">SK</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-text-dim mb-8 h-8" id="hero-subtitle">
            <Typewriter texts={['AI Fullstack Developer', 'ML Engineer', 'Cloud Enthusiast', 'Creative Leader']} />
          </div>

          <p className="text-text-dim text-lg leading-relaxed max-w-lg mb-10 border-l-2 border-primary pl-6" id="hero-description">
            3rd-year B.Tech AI & Data Science student at Sasurie College of Engineering — building intelligent full-stack solutions backed by{' '}
            <span className="text-primary font-bold">30+ industry certifications</span>.
          </p>

          <div className="flex flex-wrap gap-5 mb-14" id="hero-ctas">
            <a
              href="#contact"
              className="px-7 py-4 gold-gradient text-primary-foreground rounded-lg font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center gap-3 text-xs active:scale-95 duration-200"
              id="hero-hire-me-btn"
            >
              <Mail size={16} strokeWidth={2.5} /> Hire Me
            </a>

            <a
              href="#projects"
              className="px-7 py-4 border border-primary/30 text-primary rounded-lg font-black uppercase tracking-widest hover:bg-primary/5 hover:-translate-y-0.5 transition-all flex items-center gap-3 text-xs active:scale-95 duration-200 cursor-pointer"
              id="hero-view-projects-btn"
            >
              <Play size={14} fill="currentColor" /> View Projects
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary/10 pt-8" id="hero-numbers-container">
            {METRICS.map((metric, idx) => (
              <div key={idx} id={`metric-${idx}`} className="space-y-1">
                <div className="text-3xl font-display font-bold text-gradient">{metric.value}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-text-dim mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column Interactive graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[280px] sm:h-[380px] md:h-[480px] w-full"
          id="hero-right-col"
        >
          {/* Constellation background and Interactive Video Player Container */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-primary/20 bg-dark-2 shadow-2xl flex items-center justify-center" id="scene-container">
            <video
              ref={videoRef}
              src="https://id-preview--a769e11a-1ba2-4fe9-8e46-0c3c9dad791d.lovable.app/__l5e/assets-v1/0a36829a-4cb8-4d98-9018-b6bf829e3df1/lathika-portfolio.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover rounded-3xl select-none"
              id="hero-video-player"
            />
            {/* Ambient soft glow overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Floating Badge 1: Top-Right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute top-6 right-6 bg-dark-2/90 border border-primary/30 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none select-none z-10"
            id="badge-ai-dev"
          >
            <Cpu size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-main">AI Developer</span>
          </motion.div>

          {/* Floating Badge 2: Bottom-Left */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-6 left-6 bg-dark-2/90 border border-accent/30 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none select-none z-10"
            id="badge-cgpa"
          >
            <GraduationCap size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-main">CGPA 8.0</span>
          </motion.div>

          {/* Floating Badge 3: Bottom-Right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 right-10 bg-dark-2/90 border border-primary/30 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none select-none z-10"
            id="badge-certs"
          >
            <Award size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-main">30+ Certs</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
