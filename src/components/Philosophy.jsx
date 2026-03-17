import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Text reveal
      gsap.from('.reveal-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="overview"
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-dark text-background overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      <div className="absolute inset-0 z-0 bg-dark">
        <img 
          className="parallax-bg absolute w-full h-[150%] object-cover opacity-30 scale-110 -top-[25%]" 
          src="https://static.wixstatic.com/media/b9346a_29015ee4d11648209b7d6f2892bb9037~mv2.png/v1/fill/w_1912,h_894,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9346a_29015ee4d11648209b7d6f2892bb9037~mv2.png" 
          alt="Eagle Heights Property Rendering" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-2">
          <p className="reveal-line text-sm font-data font-semibold text-accent uppercase tracking-widest mb-4">
            Project Overview
          </p>
          <p className="reveal-line text-2xl md:text-3xl font-heading font-medium text-background/80 max-w-3xl">
            Eagle Heights Estates needs a modern website that clearly presents available lots, communicates the value of the location, and makes land inquiries simple.
          </p>
        </div>

        <div className="w-12 h-px bg-accent/40 reveal-line my-4"></div>

        <div className="flex flex-col gap-2">
  
          <div className="reveal-line text-5xl md:text-7xl lg:text-[6rem] font-drama italic text-background leading-tight">
          <span className="text-accent underline decoration-1 underline-offset-8">Step beyond</span> restrictive website builders into a site designed for speed, flexibility, and <span className="text-accent underline decoration-1 underline-offset-8">tailored to your business.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="reveal-line bg-white/5 border border-white/10 rounded-[2rem] p-8">
            <h3 className="font-heading text-2xl font-bold mb-4 text-background">Main Website Goals</h3>
            <ul className="space-y-3 pl-5 list-disc marker:text-accent font-body text-background/70 leading-relaxed">
              <li>An interactive lot map which clearly showcases available acreage lots.</li>
              <li>Highlight proximity to Saskatoon and nearby amenities.</li>
              <li>Ability to update lot availability and add photo/video updates.</li>
              <li>Improve visibility in Google searches for key search terms.</li>
            </ul>
          </div>
          <div className="reveal-line bg-white/5 border border-white/10 rounded-[2rem] p-8">
            <h3 className="font-heading text-2xl font-bold mb-4 text-background">Opportunity</h3>
            <p className="font-body text-background/70 leading-relaxed">
              Rebuilding the website as a custom web experience creates room for interactive lot listings, stronger SEO foundations, faster performance, and a cleaner, more flexible platform for long-term growth.
            </p>
            <p className="font-body text-background/70 leading-relaxed mt-4">
              A custom dashboard will also be built for managing video and photo uploads as the development progresses, making it easy to keep the site updated with current renderings, construction updates, and progress highlights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
