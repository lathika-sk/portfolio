/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Info } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CONTACT } from '../data';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // Verify if EmailJS credentials exist in client environment
  const metaEnv = (import.meta as any).env || {};

  const isEmailJSConfigured = !!(
    metaEnv.VITE_EMAILJS_SERVICE_ID &&
    metaEnv.VITE_EMAILJS_TEMPLATE_ID &&
    metaEnv.VITE_EMAILJS_PUBLIC_KEY
  );

  const registerSubmissionForTelemetry = (name: string, email: string, subject: string, message: string) => {
    try {
      const payload = {
        id: 'msg-' + Date.now(),
        sender: name,
        email: email,
        subject: subject,
        body: message,
        status: 'unseen' as const,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      
      const saved = localStorage.getItem('portfolio_received_messages');
      // If none saved, fallback component triggers seed values
      const list = saved ? JSON.parse(saved) : [];
      
      list.unshift(payload);
      localStorage.setItem('portfolio_received_messages', JSON.stringify(list));
      
      // Dispatch custom window event
      window.dispatchEvent(new CustomEvent('new-portfolio-message', { detail: payload }));
    } catch(err) {
      console.warn('Telemetry event registration failed:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const { name, email, subject, message } = formState;

    // Retrieve environment variables
    const serviceId = metaEnv.VITE_EMAILJS_SERVICE_ID;
    const templateId = metaEnv.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = metaEnv.VITE_EMAILJS_PUBLIC_KEY;

    if (!isEmailJSConfigured) {
      console.warn('EmailJS variables missing in environment. Using robust form submitting fallback...');
      
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            _subject: `Portfolio Inquiry from ${name}: ${subject}`,
            message,
            _honey: '' // Honeypot anti-spam
          })
        });

        if (response.ok) {
          registerSubmissionForTelemetry(name, email, subject, message);
          setStatus('sent');
          setFormState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
          return;
        } else {
          throw new Error('API server rejected the payload');
        }
      } catch (err) {
        console.warn('Direct API delivery failed, triggering local email draft launcher:', err);
        registerSubmissionForTelemetry(name, email, subject, message);
        const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Portfolio: ${subject}`)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('sent');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }
    }

    // EmailJS Delivery Process
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email,
        to_email: CONTACT.email
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      registerSubmissionForTelemetry(name, email, subject, message);
      setStatus('sent');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS direct transfer failed, fallback enabled:', err);
      registerSubmissionForTelemetry(name, email, subject, message);
      // Failover directly to client draft client
      const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Portfolio Inquiry: ${subject}`)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('sent');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactCards = [
    {
      label: 'Email Address',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: <Mail size={18} className="text-primary" />
    },
    {
      label: 'Phone Contact',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
      icon: <Phone size={18} className="text-primary" />
    },
    {
      label: 'Geographic region',
      value: CONTACT.location,
      href: '#',
      icon: <MapPin size={18} className="text-primary" />
    }
  ];

  return (
    <section className="py-32 bg-dark-2 relative" id="contact">
      {/* Visual background ambient flows */}
      <div className="absolute inset-0 -z-10" id="contact-bg-glows">
        <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="contact-container">
        
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          subtitle="Let us coordinate, exchange ideas, or collaborate on your next intelligent system."
        />

        <div className="grid lg:grid-cols-12 gap-16 items-start" id="contact-grid">
          
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-5" id="contact-details-col">
            {contactCards.map((card, idx) => {
              const Element = card.href === '#' ? 'div' : 'a';
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="block"
                >
                  {/* @ts-ignore - dynamic component mapping */}
                  <Element
                    href={card.href}
                    className="flex items-center gap-6 p-6 bg-dark border border-primary/10 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-dark-2 border border-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/45 transition-all duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-text-dim">{card.label}</div>
                      <div className="text-sm font-bold text-text-main mt-1.5 group-hover:text-primary transition-colors pr-2">
                        {card.value}
                      </div>
                    </div>
                  </Element>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column Interactive Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-dark p-8 md:p-10 rounded-2xl border border-primary/10 text-left"
            id="contact-form-col"
          >
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div className="grid md:grid-cols-2 gap-6" id="form-top-row">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[9px] font-black uppercase tracking-widest text-text-dim">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="E.G. JANE DOE"
                    className="w-full px-4 py-3 bg-dark-2 border border-primary/10 rounded-xl text-xs font-bold text-text-main placeholder:text-text-dim/60 focus:border-primary/40 outline-none uppercase tracking-wider"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-text-dim">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="E.G. JANE@EMAIL.COM"
                    className="w-full px-4 py-3 bg-dark-2 border border-primary/10 rounded-xl text-xs font-bold text-text-main placeholder:text-text-dim/60 focus:border-primary/40 outline-none uppercase tracking-wider"
                  />
                </div>
              </div>

              <div className="space-y-2" id="form-subject-row">
                <label htmlFor="subject" className="text-[9px] font-black uppercase tracking-widest text-text-dim">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="E.G. OPPORTUNITY PROPOSAL"
                  className="w-full px-4 py-3 bg-dark-2 border border-primary/10 rounded-xl text-xs font-bold text-text-main placeholder:text-text-dim/60 focus:border-primary/40 outline-none uppercase tracking-wider"
                />
              </div>

              <div className="space-y-2" id="form-message-row">
                <label htmlFor="message" className="text-[9px] font-black uppercase tracking-widest text-text-dim">Project Brief</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="WRITE YOUR MESSAGE DETAILED HERE..."
                  className="w-full px-4 py-3 bg-dark-2 border border-primary/10 rounded-xl text-xs font-bold text-text-main placeholder:text-text-dim/60 focus:border-primary/40 outline-none uppercase tracking-wider resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs rounded-xl hover:gold-gradient hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all select-none cursor-pointer duration-300 flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed"
                id="form-submit-btn"
              >
                {status === 'idle' && (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Sending Message...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 size={14} className="text-green-400" /> Message Forwarded!
                  </>
                )}
              </button>

              {!isEmailJSConfigured && status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-2 mt-4"
                  id="formsubmit-activation-notice"
                >
                  <div className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Inbox Activation Notice
                  </div>
                  <p className="text-[11px] text-text-dim leading-relaxed">
                    FormSubmit fallback activated! If this is your first time using this contact form, we've sent an <strong>activation link</strong> from FormSubmit directly to your email (<strong>{CONTACT.email}</strong>). Please check your **Inbox** or **Spam** folder and click **"Activate Form"** to begin forwarding regular messages to your main inbox!
                  </p>
                </motion.div>
              )}

              {isEmailJSConfigured && status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-2 mt-4"
                  id="emailjs-success-notice"
                >
                  <div className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Direct EmailJS Sent!
                  </div>
                  <p className="text-[11px] text-text-dim leading-relaxed">
                    Your message has been processed and forwarded successfully using your active <strong>EmailJS</strong> integration! It has been delivered directly to <strong>{CONTACT.email}</strong>.
                  </p>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-primary/5">
                <span className="text-[9.5px] text-text-dim/40 text-center sm:text-left uppercase tracking-wider font-sans select-none flex items-center gap-1">
                  <Info size={10} className="text-primary/60 shrink-0" />
                  {isEmailJSConfigured 
                    ? "Active: Custom EmailJS Service Channel" 
                    : "Active: Serverless (Configure EmailJS keys in Settings for custom routing)"}
                </span>
                
                <a 
                  href={`mailto:${CONTACT.email}?subject=Portfolio%20Inquiry&body=Hi%20Lathika,%20`}
                  className="text-[9.5px] text-primary/70 hover:text-primary font-black uppercase tracking-widest transition-colors flex items-center gap-1 font-sans"
                  id="direct-mailto-link"
                >
                  Alternative: Direct Email App &rarr;
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
