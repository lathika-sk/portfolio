/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, GraduationCap, Languages, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EDUCATION, CONTACT, EXPERIENCE } from '../data';

export default function About() {
  // Dynamic reading time calculation (200 words-per-minute standard)
  const bioText = "I am a passionate 3rd-year B.Tech AI & Data Science student at Sasurie College of Engineering, driven by the intersection of artificial intelligence and full-stack development. From AI-powered healthcare systems with 85% diagnostic accuracy to competing as a national-level finalist in Buildathons, I enjoy resolving complex computing challenges and deploying polished production websites. As a natural creative leader, I enjoy balancing my software engineering and analytical skills with active organizational leadership roles, such as serving as the Fine Arts Club President.";
  const eduText = EDUCATION.map(e => `${e.degree} ${e.institution} ${e.location}`).join(" ");
  const expText = EXPERIENCE.map(ex => `${ex.title} ${ex.company} ${ex.description.join(" ")}`).join(" ");
  const totalText = `${bioText} ${eduText} ${expText}`;
  const totalWords = totalText.trim().split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(totalWords / 200))} min read (${totalWords} words)`;

  // Map icons to labels dynamically
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email': return <Mail size={16} className="text-primary" />;
      case 'phone': return <Phone size={16} className="text-primary" />;
      case 'location': return <MapPin size={16} className="text-primary" />;
      case 'degree': return <GraduationCap size={16} className="text-primary" />;
      case 'languages': return <Languages size={16} className="text-primary" />;
      default: return <GraduationCap size={16} className="text-primary" />;
    }
  };

  const infoList = [
    { label: 'Email', value: CONTACT.email },
    { label: 'Phone', value: CONTACT.phone },
    { label: 'Location', value: CONTACT.location },
    { label: 'Degree', value: CONTACT.degree },
    { label: 'Languages', value: CONTACT.languages.join(' · ') }
  ];

  return (
    <section className="py-32 bg-dark-2 relative" id="about">
      <div className="max-w-7xl mx-auto px-6" id="about-container">
        
        {/* About Headline */}
        <SectionHeader
          label="About Me"
          title="Crafting Intelligent Digital Experiences"
          subtitle="Bridging the gap between data science and web innovation with a touch of artistic leadership."
          readingTime={readingTime}
        />

        <div className="grid lg:grid-cols-2 gap-20 items-start" id="about-columns-grid">
          
          {/* Left Column: Bio copy and Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 animate-fade-in"
            id="about-left-col"
          >
            <div className="space-y-6 text-text-dim text-md leading-relaxed" id="about-bio-paragraphs">
              <p>
                I am a passionate <span className="text-primary font-bold">3rd-year B.Tech AI & Data Science</span> student at{' '}
                <span className="text-text-main font-semibold">Sasurie College of Engineering</span>, driven by the intersection of artificial intelligence and full-stack development.
              </p>
              <p>
                From <span className="text-text-main font-bold">AI-powered healthcare systems</span> with 85% diagnostic accuracy to competing as a{' '}
                <span className="text-primary font-semibold">national-level finalist in Buildathons</span>, I enjoy resolving complex computing challenges and deploying polished production websites.
              </p>
              <p>
                As a natural creative leader, I enjoy balancing my software engineering and analytical skills with active organizational leadership roles, such as serving as the{' '}
                <span className="text-text-main font-semibold">Fine Arts Club President</span>.
              </p>
            </div>

            {/* Quick Stats/Contact Fields */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4" id="about-info-grid">
              {infoList.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 p-5 bg-dark border border-primary/10 rounded-xl hover:border-primary/30 transition-all group"
                  id={`about-info-item-${idx}`}
                >
                  <div className="w-10 h-10 bg-dark-2 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-colors">
                    {getIcon(item.label)}
                  </div>
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-text-dim">{item.label}</div>
                    <div className="text-xs font-bold text-text-main mt-1">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social handles bar */}
            <div className="flex gap-4 pt-4" id="about-socials">
              <a
                href={CONTACT.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-dark-3 border border-primary/20 rounded-lg flex items-center justify-center hover:gold-gradient hover:text-primary-foreground text-primary transition-all duration-300 active:scale-95"
                aria-label="LinkedIn profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={CONTACT.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-dark-3 border border-primary/20 rounded-lg flex items-center justify-center hover:gold-gradient hover:text-primary-foreground text-primary transition-all duration-300 active:scale-95"
                aria-label="GitHub profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Experience and Education Timeline sections */}
          <div className="space-y-12 w-full" id="about-right-col">
            
            {/* Experience / Traineeship */}
            <div id="experience" className="space-y-6">
              <h3 className="text-md font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                <div className="w-4 h-px bg-primary" /> Training Experience
              </h3>
              {EXPERIENCE.map((exp, t) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: t * 0.1 }}
                  className="bg-dark p-6 rounded-2xl border border-primary/10 overflow-hidden relative group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-md font-bold text-text-main group-hover:text-primary transition-colors">{exp.title}</h4>
                      <div className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">{exp.company}</div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-dim px-3 py-1 bg-dark-2 rounded-full border border-primary/5 self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-text-dim text-xs">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <ArrowRight size={10} className="text-primary mt-1 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Academic Board */}
            <div id="education" className="space-y-6">
              <h3 className="text-md font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                <div className="w-4 h-px bg-primary" /> Educational Foundation
              </h3>
              {EDUCATION.map((edu, t) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: t * 0.1 }}
                  className="relative p-6 bg-dark rounded-2xl border border-primary/10 border-l-4 border-l-primary overflow-hidden group hover:border-primary/30 transition-all duration-300"
                  id={`edu-item-${t}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-md font-bold text-text-main group-hover:text-primary transition-colors">{edu.degree}</h4>
                      <div className="text-xs text-text-dim mt-1">{edu.institution}</div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-dim px-3 py-1 bg-dark-2 rounded-full border border-primary/5 self-start">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/5">
                    <div className="text-[10px] text-text-dim tracking-wider font-mono uppercase">
                      {edu.location}
                    </div>
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-1.5 animate-pulse-glow">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
