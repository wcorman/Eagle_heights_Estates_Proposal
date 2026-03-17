import React, { useState } from 'react';
import { Map } from 'lucide-react';
import interactiveLotMapGif from '../assets/interactive-lot-map.gif';

const ORIGINAL_SITE_PLAN_URL =
  'https://static.wixstatic.com/media/b9346a_10a596dc030f43e9b3f8bf5e450437ce~mv2.jpg/v1/fill/w_2250,h_1676,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Eagle%20Heights%20Site%20Plan_20241125_edited_.jpg';

export default function LotMap() {
  const [activeTab, setActiveTab] = useState('interactive');

  return (
    <section id="features" className="relative bg-dark pt-32 pb-48 overflow-hidden text-background">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-sm font-data font-semibold text-accent uppercase tracking-widest mb-4">Core Features</h2>
        <div className="text-3xl md:text-5xl font-heading font-bold max-w-4xl text-background leading-tight">
          Built to support your workflow and grow with the development.
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 relative z-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/70 mb-4">Content Management</p>
          <h3 className="font-heading text-2xl font-bold mb-3">Add videos and photos as needed</h3>
          <p className="font-body text-background/70 leading-relaxed">
            A custom dashboard for uploading videos and photos as the development progresses—renderings, construction updates, and progress highlights—without touching code.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/70 mb-4">Interactive Map</p>
          <h3 className="font-heading text-2xl font-bold mb-3">Explore lots at a glance</h3>
          <p className="font-body text-background/70 leading-relaxed">
            Visitors click individual lots to see price, size, and availability status instantly. Color-coded availability (Available, Pending, Sold) make it easy for buyers to find what they want.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/70 mb-4">SEO Setup</p>
          <h3 className="font-heading text-2xl font-bold mb-3">Built for Google visibility</h3>
          <p className="font-body text-background/70 leading-relaxed">
            Keyword targeting, page title and description optimization, technical SEO setup, sitemap creation, and Google Search Console configuration.
          </p>
        </div>
      </div>
      
      {/* Map Container */}
      <div className="relative w-full max-w-[1400px] mx-auto border border-white/5 rounded-[3rem] bg-[#111412] mt-12 overflow-hidden shadow-2xl">
        {/* Tab Navigation */}
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex-1 px-6 py-4 font-data text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'interactive'
                ? 'bg-white/10 text-accent border-b-2 border-accent'
                : 'text-background/60 hover:text-background/80 hover:bg-white/5'
            }`}
          >
            <Map size={18} />
            Interactive Lot Map
          </button>
          <button
            onClick={() => setActiveTab('original')}
            className={`flex-1 px-6 py-4 font-data text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'original'
                ? 'bg-white/10 text-accent border-b-2 border-accent'
                : 'text-background/60 hover:text-background/80 hover:bg-white/5'
            }`}
          >
            Original Lot Map
          </button>
        </div>

        <div className="relative p-4 md:p-12">
          {activeTab === 'original' ? (
            <div className="relative w-full aspect-[4/3] md:aspect-[2250/1676] rounded-2xl overflow-hidden bg-[#0B0D0B]">
              <img
                src={ORIGINAL_SITE_PLAN_URL}
                alt="Eagle Heights Estates original site plan"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="font-data text-[11px] uppercase tracking-[0.25em] text-accent/75 mb-2">
                  Example Preview
                </p>
                <p className="font-body text-sm md:text-base text-background/70 leading-relaxed">
                  This is a sample of the style and experience the final interactive lot map could have.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0B0D0B]">
                <img
                  src={interactiveLotMapGif}
                  alt="Interactive Eagle Heights lot map preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
