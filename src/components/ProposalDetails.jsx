import React from 'react';
import { Monitor, Settings, TrendingUp, FileText, Hammer, Rocket, PenTool, Video, Plus, MapPin } from 'lucide-react';

const websiteBuildFeatures = [
  'Planning and discovery',
  'Site architecture and structure',
  'Custom design',
  'Fully responsive mobile-friendly layout',
  'Interactive lot map showing lot details/status',
  'Custom dashboard for managing lots, photos, and videos',
  'Location page with area highlights and proximity info',
  'Developer contact page with inquiry form',
  'Gallery / See Progress page for video/photo updates on development progress',
  'SEO-optimized page structure',
  'Initial on-site SEO setup (Search Console, sitemap, on-page optimization)',
  'Launch support including content upload, testing, and go-live (hosting required)',
];

const managementItems = [
  'Website hosting',
  'Routine backups',
  'Security monitoring',
  '4 hours worth of content updates and technical support each month',
  'Updating lot availability (Available / Pending / Sold)',
  'Uploading new photos and videos',
  'Basic SEO monitoring',
];

const seoIncludedItems = [
  'Google Search Console configuration',
  'Sitemap creation',
  'On-page SEO setup',
];

const seoGrowthKeywords = [
  'acreages for sale Saskatoon',
  'acreages for sale Corman Park',
  'acreage lots near Saskatoon',
];

const seoGrowthPlanItems = [
  'Keyword research',
  'Creation of SEO pages and blog articles',
  'Building local backlinks and citations',
  'Internal linking improvements',
  'Updating content to improve rankings',
  'Local SEO optimization',
  'Monthly SEO performance review',
];

function MonthlyPlansCard() {
  return (
    <article className="rounded-[2rem] border border-dark/10 bg-primary text-background overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {/* Management Plan */}
        <div className="p-8">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/80 mb-3 flex items-center gap-2">
            <Settings size={16} />
            Management Plan
          </p>
          <h3 className="font-heading text-3xl font-bold mb-4">$195 / month</h3>
          <p className="font-body text-background/80 leading-relaxed mb-6">
            Monthly website hosting, updates, photos and videos, and updating lot information.
          </p>
          <ul className="space-y-2 font-body text-background/75 pl-5 list-disc marker:text-accent">
            {managementItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {/* SEO Growth Plan */}
        <div className="p-8">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/80 mb-3 flex items-center gap-2">
            <TrendingUp size={16} />
            SEO Growth Plan
          </p>
          <h3 className="font-heading text-3xl font-bold mb-4">$500 / month</h3>
          <p className="font-body text-background/80 leading-relaxed mb-6">
            Includes everything in the Website Management Plan, plus:
          </p>
          <ul className="space-y-2 font-body text-background/75 text-sm pl-5 list-disc marker:text-accent mb-6">
            {seoGrowthPlanItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="font-body text-background/80 text-sm mb-3">Optimizing pages for searches like:</p>
          <div className="space-y-3 mb-6">
            {seoGrowthKeywords.map((term) => (
              <div key={term} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-data text-xs uppercase tracking-[0.18em] text-background/90">
                {term}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-background/50 leading-relaxed italic">
            Note: SEO results take time to show up. Improvements typically become visible over several months.
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ProposalDetails() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-data font-semibold text-primary uppercase tracking-widest mb-4">
            Pricing and Timeline
          </h2>
          <div className="text-3xl md:text-5xl font-heading font-bold text-dark leading-tight">
            A custom website build with ongoing management available after launch.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="rounded-[2rem] border border-dark/10 bg-primary text-background p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/80 mb-4 flex items-center gap-2">
                <Monitor size={16} className="text-accent" />
                Website Design & Development
              </p>
              <h3 className="font-heading text-3xl font-bold mb-6">$4,250</h3>
              <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/80 mb-3">Deliverables</p>
              <ul className="space-y-2 font-body text-background/75 text-sm pl-5 list-disc marker:text-accent mb-8">
                {websiteBuildFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/20">
                <p className="font-data text-xs uppercase tracking-[0.25em] text-accent/80 mb-3">On-site SEO Included</p>
                <p className="font-body text-background/80 text-sm mb-3">Initial SEO setup includes:</p>
                <ul className="space-y-2 font-body text-background/75 text-sm pl-5 list-disc marker:text-accent">
                  {seoIncludedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="rounded-[2rem] border border-dark/10 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="font-data text-xs uppercase tracking-[0.25em] text-primary/60 mb-6 flex items-center gap-2">
                <Plus size={16} className="text-primary" />
                Add ons
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-heading text-lg font-bold text-dark mb-1 flex items-center gap-2">
                    <PenTool size={16} className="text-primary" />
                    Logo Creation
                  </p>
                  <p className="font-heading text-xl font-bold text-primary mb-2">$200</p>
                  <ul className="space-y-2 font-body text-dark/70 text-sm pl-5 list-disc marker:text-primary">
                    <li>Custom logo design tailored for Eagle Heights Estates</li>
                    <li>Will gather your input on logo direction, style, and feel</li>
                    <li>Adds professional brand identity</li>
                    <li>Collaborative feedback until you're satisfied</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-dark/10">
                  <p className="font-heading text-lg font-bold text-dark mb-1 flex items-center gap-2">
                    <Video size={16} className="text-primary" />
                    Drone video of land development
                  </p>
                  <p className="font-heading text-xl font-bold text-primary mb-2">$250</p>
                  <ul className="space-y-2 font-body text-dark/70 text-sm pl-5 list-disc marker:text-primary">
                    <li>Aerial footage of site and development progress</li>
                    <li>Edited video ready for website use</li>
                    <li>Highlights land features and lot layout</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-dark/10">
                  <p className="font-heading text-lg font-bold text-dark mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Optional Google Business Profile setup
                  </p>
                  <p className="font-heading text-xl font-bold text-primary mb-2">$40</p>
                  <ul className="space-y-2 font-body text-dark/70 text-sm pl-5 list-disc marker:text-primary">
                    <li>Not totally necessary—typically best for businesses with storefronts and for customer reviews</li>
                    <li>Most traffic will come from website SEO efforts</li>
                    <li>Verification has requirements (e.g., Google may mail a postcard to the registered address)</li>
                    <li>We can discuss more about how to set this up if you're interested</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <MonthlyPlansCard />

            <article className="rounded-[2rem] border border-dark/10 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2">
              <div className="flex flex-col gap-8">
                <div className="max-w-2xl">
                  <p className="font-data text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">Timeline</p>
                  <h3 className="font-heading text-3xl font-bold text-dark mb-4">Estimated total: 4 to 6 weeks</h3>
                  <p className="font-body text-dark/70 leading-relaxed">
                    Typical delivery includes planning and structure, design and development, then content upload and launch preparation.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                  <div className="rounded-2xl bg-background border border-dark/10 p-6 min-w-0">
                    <p className="font-data text-xs uppercase tracking-[0.2em] text-primary/60 mb-3">Week 1</p>
                    <p className="font-heading text-xl font-bold text-dark mb-2 flex items-center gap-2">
                      <FileText size={20} className="text-primary" />
                      Planning
                    </p>
                    <p className="font-body text-sm text-dark/65 leading-relaxed mb-3">Structure, page layout, and content requirements.</p>
                    <p className="font-body text-xs text-dark/55 leading-relaxed italic">I will send a Google Drive link for you to add any images/videos we could potentially use for the website.</p>
                  </div>
                  <div className="rounded-2xl bg-background border border-dark/10 p-6 min-w-0">
                    <p className="font-data text-xs uppercase tracking-[0.2em] text-primary/60 mb-3">Weeks 2–5</p>
                    <p className="font-heading text-xl font-bold text-dark mb-2 flex items-center gap-2">
                      <Hammer size={20} className="text-primary" />
                      Build
                    </p>
                    <p className="font-body text-sm text-dark/65 leading-relaxed">Design and development of website/interactive lot map, and Content Management System setup.</p>
                  </div>
                  <div className="rounded-2xl bg-background border border-dark/10 p-6 min-w-0 sm:col-span-2 xl:col-span-1">
                    <p className="font-data text-xs uppercase tracking-[0.2em] text-primary/60 mb-3">Final Week</p>
                    <p className="font-heading text-xl font-bold text-dark mb-2 flex items-center gap-2">
                      <Rocket size={20} className="text-primary" />
                      Launch
                    </p>
                    <p className="font-body text-sm text-dark/65 leading-relaxed mb-3">Content upload, final review and testing, cross-browser checks, hosting setup, and site go-live.</p>
                    <p className="font-body text-xs text-dark/55 leading-relaxed italic">Note: Either the Management Plan or SEO Growth Plan must be subscribed to by the week of launch for the website to go live.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
    </section>
  );
}
