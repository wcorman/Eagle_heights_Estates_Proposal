import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex flex-col justify-end p-8 md:p-16 lg:p-24 overflow-hidden text-background"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/b9346a_93d6a78fd5434e28ac09e080b1d9b1ae~mv2.png/v1/fill/w_2674,h_1520,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Eagle_Heights_Fleury_Road.png" 
          alt="Eagle Heights Fleury Road Property Rendering" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(30,36,33,0.12)_0%,rgba(30,36,33,0.24)_18%,rgba(51,74,63,0.58)_45%,rgba(30,36,33,0.9)_78%,rgba(30,36,33,0.98)_100%)]"></div>
      
      <div className="relative z-20 w-full flex flex-col items-start gap-4">
        <p className="hero-elem font-data text-xs md:text-sm uppercase tracking-[0.35em] text-background/70">
          Prepared for Eagle Heights Estates
        </p>
        <h1 className="flex w-full flex-col">
          <span className="hero-elem text-drama text-5xl md:text-7xl lg:text-[7.5rem] text-accent leading-none">
            Website Proposal.
          </span>
        </h1>
        <p className="hero-elem w-full max-w-2xl text-lg md:text-xl font-body opacity-90 mt-4 leading-relaxed">
          A proposal to rebuild the Eagle Heights Estates website as a modern custom site that clearly showcases available lots, supports an interactive lot map, and improves long-term Google search visibility.
        </p>
        <p className="hero-elem font-body text-sm md:text-base text-background/70">
          Prepared by Wes Corman.
        </p>
        <a href="#overview" className="hero-elem mt-8 magnetic-btn group bg-accent text-dark text-lg px-8 py-4">
          <span className="bg-layer bg-primary"></span>
          <span className="relative z-10 group-hover:text-accent transition-colors font-semibold">Review Proposal</span>
        </a>
      </div>
    </section>
  );
}
