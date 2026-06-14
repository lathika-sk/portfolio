/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certs', href: '#certificates' },
  { name: 'Wins', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // 1. Calculate scroll progress percentage
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable > 0) {
        setScrollProgress((window.scrollY / totalScrollable) * 100);
      }

      // 2. Determine active section based on current viewport top boundary
      const scrollPosition = window.scrollY + 180; // offset trigger
      
      // Handle page top case
      if (window.scrollY < 120) {
        setActiveSection('');
        return;
      }

      // Reverse check is most stable for cascading heights
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Line Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-dark/40 z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_8px_rgba(201,168,76,0.6)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-xl border-b border-primary/10 pt-1"
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold tracking-tighter text-gradient hover:opacity-85 transition-opacity" id="nav-brand">
            Lathika SK
          </a>

          {/* Desktop Navigation with high-end sliding active indicator */}
          <div className="hidden md:flex items-center gap-2" id="desktop-nav-menu">
            {NAV_ITEMS.map((item) => {
              const activeId = item.href.substring(1);
              const isActive = activeSection === activeId;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg relative transition-colors duration-300 select-none ${
                    isActive ? 'text-primary' : 'text-text-dim hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-dim hover:text-primary p-2 transition-colors cursor-pointer"
            id="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-dark-2 border-b border-primary/10 pt-1"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const activeId = item.href.substring(1);
                const isActive = activeSection === activeId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs font-black uppercase tracking-[0.2em] py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive ? 'text-primary bg-primary/5 border border-primary/10' : 'text-text-dim hover:text-primary'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
