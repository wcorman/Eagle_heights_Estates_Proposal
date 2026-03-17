import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-elem', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="next-steps"
      ref={containerRef}
      className="relative w-full py-48 bg-primary text-background flex items-center justify-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-dark/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10">
        <h2 className="cta-elem font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Ready to move this <span className="text-accent underline decoration-1 underline-offset-8">forward?</span>
        </h2>
        <p className="cta-elem font-body text-xl md:text-2xl text-background/80 max-w-2xl mb-12">
          The next step is a short call to review scope, confirm the desired features, discuss the interactive lot map, and outline the content needed for launch.
        </p>
        
        <a
          href="#overview"
          className="cta-elem magnetic-btn group bg-accent text-dark text-xl px-12 py-5 rounded-full shadow-[0_10px_40px_rgba(216,198,160,0.3)] hover:shadow-[0_15px_50px_rgba(216,198,160,0.5)]"
        >
          <span className="bg-layer bg-white"></span>
          <span className="relative z-10 transition-colors font-semibold group-hover:text-primary">
            Confirm Scope and Features
          </span>
        </a>
      </div>
    </section>
  );
}
