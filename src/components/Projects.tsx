/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Stethoscope, Bot, Layout, Utensils, Smartphone, Github, ExternalLink, Award, Sparkles, Cpu, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';

// Helper to load her specific icons
function getProjectIcon(iconName: string) {
  switch (iconName.toLowerCase()) {
    case 'stethoscope': return <Stethoscope size={18} className="text-primary" />;
    case 'bot': return <Bot size={18} className="text-primary" />;
    case 'layout': return <Layout size={18} className="text-primary" />;
    case 'utensils': return <Utensils size={18} className="text-primary" />;
    case 'smartphone': return <Smartphone size={18} className="text-primary" />;
    case 'cpu': return <Cpu size={18} className="text-primary animate-pulse" />;
    case 'sparkles': return <Sparkles size={18} className="text-primary" />;
    case 'graduationcap': return <GraduationCap size={18} className="text-primary" />;
    default: return <Bot size={18} className="text-primary" />;
  }
}

export default function Projects() {
  // Dynamic reading time calculation (200 words-per-minute standard)
  const projectsText = PROJECTS.map(p => `${p.title} ${p.description} ${p.tech.join(" ")} ${p.impact || ""} ${p.award || ""}`).join(" ");
  const totalWords = projectsText.trim().split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(totalWords / 200))} min read (${totalWords} words)`;

  return (
    <section className="py-32 bg-dark relative" id="projects" style={{ perspective: 1000 }}>
      {/* Visual glowing layout nodes */}
      <div className="absolute inset-0 -z-10" id="projects-background-decorations">
        <div className="absolute top-[20%] right-[10%] w-[330px] h-[330px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[330px] h-[330px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6" id="projects-container">
        
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="Real-world applications of AI and Web technologies."
          readingTime={readingTime}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center max-w-xl mx-auto lg:max-w-none" id="projects-cards-grid" style={{ transformStyle: 'preserve-3d' }}>
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                rotateX: 8, 
                rotateY: -8, 
                z: 20,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              className="group relative bg-dark-2 p-7 rounded-2xl border border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/[0.02] flex flex-col justify-between h-full transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
              id={`project-card-${idx}`}
            >
              {/* Slide corner glow */}
              <div className="absolute top-5 right-5 text-text-dim/20 group-hover:text-primary/40 transition-colors">
                <Sparkles size={14} />
              </div>

              <div className="space-y-6">
                
                {/* Header Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-dark-3 border border-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/35 transition-colors duration-300">
                    {getProjectIcon(project.icon)}
                  </div>
                  <h3 className="text-[15px] font-bold text-text-main group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description Copy */}
                <p className="text-text-dim text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Impact or Award tag inside the card if available */}
                {(project.impact || project.award) && (
                  <div className="flex flex-wrap gap-2 pt-1" id={`project-banners-${idx}`}>
                    {project.impact && (
                      <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[9px] font-semibold tracking-wider rounded-full uppercase">
                        {project.impact}
                      </span>
                    )}
                    {project.award && (
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[9px] font-semibold tracking-wider rounded-full uppercase flex items-center gap-1">
                        <Award size={10} /> {project.award}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Technologies and Social hyperlinks */}
              <div className="mt-8 pt-5 border-t border-primary/5 space-y-5">
                <div className="flex flex-wrap gap-1.5" id={`project-tech-chips-${idx}`}>
                  {project.tech.map((chip) => (
                    <span
                      key={chip}
                      className="px-2 py-1 bg-dark-3 border border-primary/5 text-text-dim text-[8px] font-mono rounded-md hover:text-primary hover:border-primary/25 transition-all"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4" id={`project-links-${idx}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-black uppercase tracking-widest text-text-dim hover:text-primary flex items-center gap-1.5 transition-colors"
                    >
                      <Github size={12} /> Repo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-black uppercase tracking-widest text-text-dim hover:text-primary flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={12} /> Launch
                    </a>
                  )}
                </div>
              </div>

              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] gold-gradient scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 rounded-l-2xl" strokeLinecap="round" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
