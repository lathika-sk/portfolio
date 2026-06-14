/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/10 py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="text-lg font-display font-bold tracking-tighter text-gradient hover:opacity-85 transition-opacity" id="footer-brand">
          Lathika SK
        </a>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim" id="footer-copyright">
          © {new Date().getFullYear()} Lathika SK. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
