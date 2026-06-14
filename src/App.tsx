/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialDock from './components/SocialDock';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-text-main selection:bg-primary selection:text-primary-foreground font-sans">
      <div className="animate-fade-in animate-duration-1000 relative">
        <Navbar />
        <SocialDock />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
