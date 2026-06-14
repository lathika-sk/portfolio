/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import { CONTACT } from '../data';

export default function SocialDock() {
  const socials = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: CONTACT.socials.linkedin || 'https://www.linkedin.com/in/lathika-sk/',
      handle: 'lathika-sk',
      color: 'hover:text-[#0a66c2]',
      glow: 'shadow-[0_0_12px_rgba(10,102,194,0.3)]',
      border: 'hover:border-[#0a66c2]/40',
      bg: 'hover:bg-[#0a66c2]/5'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: CONTACT.socials.github || 'https://github.com/lathika-sk',
      handle: 'lathika-sk',
      color: 'hover:text-[#f0f6fc]',
      glow: 'shadow-[0_0_12px_rgba(240,246,252,0.2)]',
      border: 'hover:border-zinc-500/40',
      bg: 'hover:bg-zinc-800/10'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/lathika_sk',
      handle: 'lathika_sk',
      color: 'hover:text-[#1da1f2]',
      glow: 'shadow-[0_0_12px_rgba(29,161,242,0.3)]',
      border: 'hover:border-[#1da1f2]/40',
      bg: 'hover:bg-[#1da1f2]/5'
    }
  ];

  return (
    <div 
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4.5 pointer-events-none select-none"
      id="floating-social-dock-container"
    >
      {/* Decorative vertical line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary/20" />

      <div className="flex flex-col gap-3.5 pointer-events-auto" id="floating-social-dock-group">
        {socials.map((social) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center justify-end relative h-11 rounded-full bg-dark-2/80 backdrop-blur-md border border-primary/15 transition-colors cursor-pointer pl-3 pr-3 ${social.border} ${social.bg}`}
              id={`social-dock-item-${social.name.toLowerCase()}`}
              initial="initial"
              whileHover="hover"
            >
              {/* Profile handle container - slides/fades left on parent hover */}
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 20, width: 0, marginRight: 0 },
                  hover: { 
                    opacity: 1, 
                    x: 0, 
                    width: 'auto', 
                    marginRight: 10,
                    transition: { type: 'spring', stiffness: 350, damping: 25 }
                  }
                }}
                className="overflow-hidden whitespace-nowrap text-right flex items-center gap-1.5"
              >
                <span className="text-[10px] font-black tracking-widest text-primary uppercase font-display">
                  {social.name}
                </span>
                <span className="text-[9px] font-mono text-text-dim/60 font-medium">
                  @{social.handle}
                </span>
                <ExternalLink size={8} className="text-primary/40 shrink-0" />
              </motion.div>

              {/* Main Icon Circle */}
              <div className={`text-text-dim transition-all group-hover:scale-110 flex items-center justify-center ${social.color} shrink-0`}>
                <IconComponent size={14} className="stroke-[2.2px]" />
              </div>

              {/* Individual Glowing Orb Background */}
              <div className={`absolute inset-0 rounded-full cursor-pointer transition-opacity opacity-0 group-hover:opacity-100 duration-300 pointer-events-none -z-10 ${social.glow}`} />
            </motion.a>
          );
        })}
      </div>

      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-primary/20" />
    </div>
  );
}
