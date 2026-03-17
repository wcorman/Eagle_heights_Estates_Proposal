import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in tailwind
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Site Structure', href: '#structure' },
    { name: 'Core Features', href: '#features' },
    { name: 'Pricing & Timeline', href: '#pricing' },
    { name: 'Next Steps', href: '#next-steps' },
  ];

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && !isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 p-3 bg-primary rounded-full text-background shadow-lg hover:bg-dark transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar Overlay/Container */}
      <div 
        className={`fixed top-0 left-0 h-[100dvh] w-full lg:w-72 bg-primary z-40 transform transition-transform duration-500 ease-in-out flex flex-col pt-12 lg:pt-20 px-8 pb-12 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile Close Button */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 lg:hidden p-3 text-background hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        )}

        {/* Logo/Brand */}
        <div className="mb-20 text-center flex flex-col items-center">
          <svg className="w-12 h-12 text-accent mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 3v18M3 12h18M5 5l14 14M19 5l-14 14" opacity="0.5"/>
            <rect x="7" y="7" width="10" height="10" strokeWidth="1.5" />
          </svg>
          <p className="font-data text-[10px] uppercase tracking-[0.35em] text-background/50 mb-4">
            Website Proposal
          </p>
          <h1 className="font-heading font-bold text-2xl lg:text-3xl text-background tracking-wide uppercase">
            Eagle Heights<br/><span className="text-sm font-medium tracking-widest text-background/60">Estates</span>
          </h1>
          <p className="font-body text-xs text-background/60 mt-4 max-w-[14rem] leading-relaxed">
            Designed and built by Wes Corman.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 w-full flex-grow mb-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="group flex flex-col border-b border-background/10 pb-4 w-full"
            >
              <span className="font-data text-sm uppercase tracking-[0.2em] font-medium text-background group-hover:text-accent transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Action Area */}
        <div className="mt-auto w-full">
          <p className="text-background/60 font-body text-xs leading-relaxed text-center mb-6">
            Custom rebuild proposal focused on better lot presentation, easier updates, and stronger SEO.
          </p>
          <a
            href="#pricing"
            onClick={handleLinkClick}
            className="block w-full bg-accent text-dark font-medium font-body py-4 rounded-xl hover:bg-white hover:-translate-y-1 transition-all text-center"
          >
            View Estimate
          </a>
        </div>
      </div>
    </>
  );
}
