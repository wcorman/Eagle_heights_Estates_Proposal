import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-background rounded-t-[4rem] px-8 py-20 md:px-16 lg:px-24 flex flex-col mt-[-4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h3 className="font-heading font-bold text-3xl">Eagle Heights Estates.</h3>
            <p className="font-body text-background/60 max-w-sm leading-relaxed text-lg">
              Website proposal prepared for a custom rebuild focused on lot presentation, interactive browsing, and long-term management.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-data text-xs text-accent uppercase tracking-widest font-bold mb-2">Proposal</h4>
            <a href="#overview" className="font-body text-background/80 hover:text-accent hover:translate-x-1 transition-all">Project Overview</a>
            <a href="#structure" className="font-body text-background/80 hover:text-accent hover:translate-x-1 transition-all">Website Structure</a>
            <a href="#pricing" className="font-body text-background/80 hover:text-accent hover:translate-x-1 transition-all">Pricing and Timeline</a>
          </div>
          
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-data text-xs text-accent uppercase tracking-widest font-bold mb-2">Prepared By</h4>
            <span className="font-body text-background/80">Wes Corman</span>
            <span className="font-body text-background/60">Custom design and development</span>
            <a href="#next-steps" className="font-body text-background/80 hover:text-accent hover:translate-x-1 transition-all">Next Steps</a>
          </div>
        </div>
        
        {/* Bottom divider and links */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between pt-8 border-t border-background/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-data text-xs tracking-wider text-background/80 uppercase">Proposal Ready</span>
            </div>
            <span className="font-body text-sm text-background/40">© {new Date().getFullYear()} Eagle Heights Estates</span>
          </div>
          
          <div className="flex items-center gap-6 font-body text-sm text-background/50">
            <a href="#features" className="hover:text-background transition-colors">Core Features</a>
            <a href="#pricing" className="hover:text-background transition-colors">Estimate</a>
            <a href="#next-steps" className="hover:text-background transition-colors">Next Steps</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
