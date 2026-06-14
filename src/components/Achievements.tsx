/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Trophy, Users, Star, Award, Sparkles, Building2, User, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS } from '../data';

// Match her specific icon definitions
function getAchievementIcon(iconLabel: string) {
  switch (iconLabel.toLowerCase()) {
    case 'trophy': return <Trophy size={18} className="text-primary" />;
    case 'users': return <Users size={18} className="text-primary" />;
    case 'star': return <Star size={18} className="text-primary" />;
    case 'building': return <Building2 size={18} className="text-primary" />;
    case 'user': return <User size={18} className="text-primary" />;
    default: return <Award size={18} className="text-primary" />;
  }
}

export default function Achievements() {
  return (
    <section className="py-32 bg-dark relative" id="achievements">
      <div className="absolute inset-x-0 bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" id="achievements-container">
        
        <SectionHeader
          label="Recognition"
          title="Key Achievements"
          subtitle="Milestones celebrating leadership, competitive coding, and organizing capability."
        />

        <div className="grid md:grid-cols-2 gap-8 text-left" id="achievements-grid">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-dark-2 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-primary/[0.01] transition-all duration-300"
              id={`achievement-card-${idx}`}
            >
              {/* Corner sparkles decoration */}
              <div className="absolute top-5 right-5 text-text-dim/15 group-hover:text-primary/35 transition-colors">
                <Sparkles size={14} />
              </div>

              <div className="space-y-6">
                
                {/* Header Row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-3 border border-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-text-main group-hover:text-primary transition-colors tracking-tight leading-snug pr-3">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description Body Paragraph */}
                <p className="text-text-dim text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Side Accent line on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 gold-gradient scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 rounded-l-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
