/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layout, Cpu, Cloud, Database, Brain, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../data';

export default function Skills() {
  const CATEGORIES = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} className="text-primary" />,
      skills: SKILLS.frontend
    },
    {
      title: 'AI / Backend',
      icon: <Cpu size={20} className="text-primary" />,
      skills: SKILLS.aiBackend
    },
    {
      title: 'Cloud Computing',
      icon: <Cloud size={20} className="text-primary" />,
      skills: SKILLS.cloud
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={20} className="text-primary" />,
      skills: SKILLS.data
    },
    {
      title: 'Soft Skills & Leadership',
      icon: <Brain size={20} className="text-primary" />,
      skills: SKILLS.soft
    }
  ];

  return (
    <section className="py-32 bg-dark-2 relative" id="skills">
      {/* Background glowing effects */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" id="skills-container">
        
        <SectionHeader
          label="Expertise"
          title="Technical Arsenal"
          subtitle="A comprehensive toolkit spanning AI, Cloud, and Full-stack development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="bg-dark p-8 rounded-2xl border border-primary/10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.02] flex flex-col justify-between h-full group relative transition-[border-color,box-shadow] duration-300"
              id={`skill-category-${idx}`}
            >
              {/* Corner Glowing Sparkle */}
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/30 transition-colors">
                <Sparkles size={14} />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-2 border border-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-md font-bold text-text-main group-hover:text-primary transition-colors tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2" id={`skills-list-${idx}`}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-dark-2 text-text-dim text-[10px] font-mono rounded-md hover:text-primary hover:bg-primary/5 border border-primary/5 hover:border-primary/25 transition-all duration-200 uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slider Bottom Line */}
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
