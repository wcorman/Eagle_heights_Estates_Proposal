import React from 'react';

const pages = [
  {
    title: 'Home',
    description: 'Introduction to Eagle Heights Estates, key selling points (location, lot sizes, development vision), and a clear call-to-action to explore available lots.',
  },
  {
    title: 'Interactive Lot Map',
    description: 'A visual map where visitors can explore individual lots to view details, with structured listings for price, size, and availability status.',
  },
  {
    title: 'Location & Services',
    description: 'Information about proximity to Saskatoon, nearby services, and area highlights.',
  },
  {
    title: 'Gallery / Progress',
    description: 'Photos and videos for renderings, construction updates, and development progress.',
  },
  {
    title: 'About + Contact',
    description: 'Developer info, contact details, and an inquiry form for interested buyers.',
  },
  {
    title: 'Blog (Optional)',
    description: 'Keyword-optimized blog posts would be created as a part of the SEO Growth Plan to improve Google Search results.',
    pageLabel: 'Pages',
  },
];

export default function Features() {
  return (
    <section id="structure" className="py-24 px-6 md:px-12 lg:px-24 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-data font-semibold text-primary uppercase tracking-widest mb-4">
            Proposed Website Structure
          </h2>
          <div className="text-3xl md:text-5xl font-heading font-bold text-dark leading-tight">
            A clear page structure built to support discovery, lot exploration, and buyer inquiries.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {pages.map((page, index) => (
            <article
              key={page.title}
              className="bg-background rounded-[2rem] p-8 border border-dark/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[240px] flex flex-col"
            >
              <span className="font-data text-xs uppercase tracking-[0.25em] text-primary/60 mb-6">
                {page.pageLabel ? `${page.pageLabel} 06+` : `Page ${String(index + 1).padStart(2, '0')}`}
              </span>
              <h3 className="font-heading font-bold text-2xl mb-4 text-dark">{page.title}</h3>
              <p className="font-body text-dark/70 leading-relaxed">{page.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
