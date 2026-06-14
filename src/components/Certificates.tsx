/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../data';

// Helper Component to render high-contrast professional issuer logo SVGs
function IssuerLogo({ issuer }: { issuer: string }) {
  switch (issuer.toLowerCase()) {
    case 'google':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-google">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.31l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-[10px] font-black tracking-widest text-[#E3E3E3] font-sans">GOOGLE</span>
        </div>
      );
    case 'google gemini':
    case 'gemini':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-google-gemini">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0 animate-pulse">
            <defs>
              <linearGradient id="gemini-grad-svg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9BC5FC"/>
                <stop offset="50%" stopColor="#C19BFC"/>
                <stop offset="100%" stopColor="#FC9BC5"/>
              </linearGradient>
            </defs>
            <path fill="url(#gemini-grad-svg)" d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z"/>
          </svg>
          <span className="text-[10px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#9BC5FC] to-[#FC9BC5] font-sans">GEMINI</span>
        </div>
      );
    case 'microsoft':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-microsoft">
          <svg viewBox="0 0 23 23" className="w-[11px] h-[11px] shrink-0">
            <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022"/>
            <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7fba00"/>
            <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00a4ef"/>
            <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#ffb900"/>
          </svg>
          <span className="text-[9.5px] font-extrabold text-[#ECECEC] tracking-widest font-sans">MICROSOFT</span>
        </div>
      );
    case 'ibm':
      return (
        <div className="flex items-center gap-2 select-none animate-fade-in" id="logo-ibm">
          <svg viewBox="0 0 24 12" className="w-[34px] h-[10px] shrink-0" fill="#0F62FE">
            <path d="M0 0h5v1H0zm0 2h5v1H0zm0 4h5v1H0zm0 2h5v1H0zm0 4h5v1H0zm0 2h5v1H0z M2 0h1v12H2z M7 0h5v1H7zm0 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h5v1H7zm0 2h5v1H7z M14 0h5v1h-5zm0 2h1v1h-1zm4 0h1v1h-1zm-4 2h1v1h-1zm4 2h1v1h-1zm-4 2h1v1h-1zm4 2h1v1h-1zm-4 2h1v1h-1zm4 2h1v1h-1zm-4 2h1v1h-1zm4 2h1v1h-1zm-4 2h5v1h-5z"/>
          </svg>
          <span className="text-[10px] font-black tracking-widest text-[#0F62FE] font-mono leading-none">IBM</span>
        </div>
      );
    case 'oracle':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-oracle">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="#F30000">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-3.04 0-5.5-2.46-5.5-5.5S8.96 6.5 12 6.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
          </svg>
          <span className="text-[9.5px] font-black text-[#F30000] tracking-wider font-sans leading-none">ORACLE</span>
        </div>
      );
    case 'tcs':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-tcs">
          <span className="text-[12px] font-sans font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-500">tcs</span>
          <span className="text-[7px] font-semibold text-text-dim/80 font-sans tracking-widest leading-none">PRODUCTS</span>
        </div>
      );
    case 'nxtwave':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-nxtwave">
          <div className="flex items-end gap-[1.5px] h-[9px]">
            <div className="w-[3px] h-[4px] bg-[#22D3EE] rounded-sm" />
            <div className="w-[3px] h-[6px] bg-[#22D3EE]/80 rounded-sm" />
            <div className="w-[3px] h-[9px] bg-[#3B82F6] rounded-sm" />
          </div>
          <span className="text-[10px] font-black tracking-widest text-white font-sans leading-none">
            NXT<span className="text-[#22D3EE]">WAVE</span>
          </span>
        </div>
      );
    case 'meta':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-meta">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="#1877F2">
            <path d="M16.444 8.25c-1.07 0-2.073.493-2.83 1.34h-.056c-.756-.847-1.76-1.34-2.83-1.34-2.454 0-4.444 2.05-4.444 4.542 0 2.49 1.99 4.54 4.444 4.54 1.07 0 2.074-.492 2.83-1.34h.056c.757.848 1.76 1.34 2.83 1.34 2.454 0 4.444-2.052 4.444-4.542 0-2.492-1.99-4.54-4.444-4.54zm-6.172 7.023c-1.353 0-2.45-1.113-2.45-2.48s1.097-2.482 2.45-2.482c.983 0 1.83.6 2.22 1.458.077.168.12.352.12.544 0 .153-.027.303-.077.444-.36 1.15-1.4 2.062-2.263 2.062zm6.172 0c-.863 0-1.903-.912-2.263-2.062a1.352 1.352 0 0 1-.077-.444c0-.192.043-.376.12-.544.39-.858 1.237-1.458 2.22-1.458 1.353 0 2.45 1.115 2.45 2.482s-1.097 2.48-2.45 2.48z"/>
          </svg>
          <span className="text-[10px] font-black tracking-widest text-[#1877F2] font-sans">META</span>
        </div>
      );
    case 'skillindia':
    case 'skill india':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-skillindia">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0">
            <circle cx="12" cy="12" r="10" stroke="#F97316" strokeWidth="2.5" fill="none" />
            <circle cx="12" cy="12" r="6" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
            <path d="M12 6v6l4 2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-[9.5px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 tracking-wider">SKILL INDIA</span>
        </div>
      );
    case 'gen corpus':
    case 'gencorpus':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-gencorpus">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="none">
            <path d="M18 6c-1.5-1.5-3.5-2.5-6-2.5C7 3.5 3.5 7 3.5 11.5S7 19.5 12 19.5c2.5 0 4.5-1 6-2.5" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="17" cy="11.5" r="2.5" fill="#0EA5E9" />
            <circle cx="12" cy="11.5" r="2.5" fill="#7C3AED" />
            <path d="M12 11.5h5" stroke="#0EA5E9" strokeWidth="1.5" />
          </svg>
          <span className="text-[9px] font-black tracking-wider text-[#A78BFA]">GEN CORPUS</span>
        </div>
      );
    case 'coursera':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-coursera">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="#0056D2">
            <circle cx="12" cy="12" r="11" />
            <path d="M16 11.833c0-2.39-1.396-4.333-3.833-4.333-2.438 0-3.834 1.943-3.834 4.333s1.396 4.334 3.834 4.334c2.437 0 3.833-1.944 3.833-4.334zm-6.205 0c0-1.631.867-2.902 2.372-2.902s2.372 1.27 2.372 2.902c0 1.632-.867 2.903-2.372 2.903s-2.372-1.27-2.372-2.903z" fill="#FFF" fillRule="evenodd" />
          </svg>
          <span className="text-[10px] font-black tracking-widest text-[#0056D2] font-sans">COURSERA</span>
        </div>
      );
    case 'deloitte':
      return (
        <div className="flex items-center select-none animate-fade-in" id="logo-deloitte">
          <span className="text-[11px] font-black text-white tracking-tight font-sans">Deloitte<span className="text-[#86BC25] font-black">.</span></span>
        </div>
      );
    case 'yicat':
    case 'icat':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-icat">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0">
            {/* Mortar board cap */}
            <path d="M12 2L4 6l8 4 8-4z" fill="#F97316" />
            {/* i shape student outline */}
            <circle cx="12" cy="10" r="2" fill="#F97316" />
            <path d="M7 21c0-2.5 2.2-3.5 5-3.5s5 1 5 3.5" stroke="#F97316" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
          <span className="text-[10.5px] font-black text-white font-sans tracking-tight">i<span className="text-[#F97316]">CAT</span></span>
        </div>
      );
    case 'linkedin':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-linkedin">
          <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] shrink-0" fill="#0077B5">
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V10h3v9zM6.5 8.5C5.4 8.5 4.5 7.6 4.5 6.5s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 19h-3v-5c0-1.66-.34-3-2.5-3s-2.5 1.5-2.5 3v5H8V10h3v1.5c.42-.8 1.4-1.5 3-1.5 3.3 0 3.5 2.2 3.5 5v4z" />
          </svg>
          <span className="text-[9.5px] font-bold text-[#0077B5] tracking-wider uppercase font-sans">LINKEDIN</span>
        </div>
      );
    case 'naan mudhalvan':
    case 'naanmudhalvan':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-naan-mudhalvan">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M6 9.5V14a6 6 0 0012 0V9.5" />
            <path d="M22 19c-1.5-1-4-2-10-2S2 18 2 19v2c0-1 2.5-2 10-2s10 1 10 2v-2z" />
          </svg>
          <span className="text-[9.5px] font-extrabold text-[#2DD4BF] tracking-wide uppercase font-sans">MUDHALVAN</span>
        </div>
      );
    case 'udemy':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-udemy">
          <div className="flex flex-col items-center shrink-0">
            <svg viewBox="0 0 24 14" className="w-[11px] h-[6px]" fill="#A435F0">
              <path d="M12 0L24 14H0L12 0Z" />
            </svg>
            <span className="text-[11px] font-black text-[#A435F0] leading-none tracking-tighter -mt-[1px]">U</span>
          </div>
          <span className="text-[9.5px] font-extrabold tracking-widest text-[#A435F0] font-sans">UDEMY</span>
        </div>
      );
    case 'itsonix':
      return (
        <div className="flex items-center gap-1.5 select-none animate-fade-in" id="logo-itsonix">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="none" stroke="#06B6D4" strokeWidth="2.5">
            <path d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8" />
            <path d="M12 20c4.42 0 8-3.58 8-8" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="#3B82F6" strokeWidth="2" />
          </svg>
          <span className="text-[9.5px] font-extrabold tracking-tight text-[#06B6D4] font-sans">iT<span className="text-[#3B82F6]">sonix</span></span>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1 select-none" id="logo-generic">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
          <span className="text-[9px] font-black tracking-widest text-text-dim uppercase">ACCREDITED</span>
        </div>
      );
  }
}

export default function Certificates() {
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filters options lists
  const ISSUERS = ['All', 'Google', 'Google Gemini', 'Microsoft', 'IBM', 'TCS', 'Oracle', 'NxtWave', 'Meta', 'SkillIndia', 'Gen Corpus', 'Coursera', 'Deloitte', 'ICAT', 'LinkedIn', 'Naan Mudhalvan', 'Udemy', 'ITSonix'];

  // Match logic for ISSUER filter
  const filteredCertifications = CERTIFICATIONS.filter((cert) => {
    const matchesIssuer =
      selectedIssuer === 'All' || cert.issuer.toLowerCase() === selectedIssuer.toLowerCase();
    
    const matchesQuery =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIssuer && matchesQuery;
  });

  return (
    <section className="py-32 bg-dark-2 relative" id="certificates">
      <div className="max-w-7xl mx-auto px-6" id="certificates-container">
        
        <SectionHeader
          label="Certifications"
          title="Continuous Learning"
          subtitle={`A collection of ${CERTIFICATIONS.length}+ professional certifications from industry leaders.`}
        />

        {/* Filters Panel with Category Tabs & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-5 items-center justify-between bg-dark p-4 rounded-2xl border border-primary/10" id="filters-panel">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto" id="issuer-tabs">
            {ISSUERS.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  selectedIssuer === issuer
                    ? 'gold-gradient text-primary-foreground font-black'
                    : 'text-text-dim hover:text-primary hover:bg-white/5'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64" id="search-container">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" size={14} />
            <input
              type="text"
              placeholder="SEARCH..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-2 border border-primary/10 rounded-lg text-[10px] font-mono text-primary placeholder:text-text-dim focus:border-primary/40 outline-none uppercase tracking-wider"
              id="cert-search-input"
            />
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left" id="certs-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-dark p-6 rounded-xl border border-primary/10 hover:border-primary/30 overflow-hidden flex flex-col justify-between h-full transition-[border-color,box-shadow] duration-300"
                id={`cert-card-${cert.id}`}
              >
                {/* Left golden glide accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 gold-gradient scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 rounded-l-xl" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2" id={`cert-header-${cert.id}`}>
                    {/* Issuer Logo displayed cleanly instead of raw written text */}
                    <IssuerLogo issuer={cert.issuer} />
                    <Sparkles size={10} className="text-primary/10 group-hover:text-primary/40 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold leading-relaxed group-hover:text-primary transition-colors pr-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between gap-2 pt-5 border-t border-primary/5 mt-5 text-[10px] text-text-dim uppercase tracking-wider transition-all duration-200">
                  <span className="flex items-center gap-1.2 text-[9px] font-black uppercase tracking-widest text-[#D4AF37]/85">
                    <Award size={11} className="text-[#D4AF37] shrink-0 mr-1" /> VERIFIED
                  </span>
                  <span className="font-mono text-[9px] text-text-dim/55 font-medium">
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-24 border border-primary/10 p-12 rounded-2xl bg-dark/20" id="no-certs-found">
            <Search size={32} className="mx-auto text-primary/30 mb-4 stroke-[1.5]" />
            <h3 className="text-md font-bold text-text-main mb-1">No Certificates Found</h3>
            <p className="text-xs text-text-dim max-w-sm mx-auto">
              We couldn't find any certificates matching "{searchQuery}" under {selectedIssuer}. Try refining your search terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

