import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import LotMap from './components/LotMap';
import ProposalDetails from './components/ProposalDetails';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-background flex">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* 
        Main Content Wrapper
        On 'lg' screens and above, add left margin equal to the sidebar width (w-72 = 18rem)
      */}
      <main className="flex-1 w-full lg:ml-72 flex flex-col min-w-0">
        <Hero />
        <Philosophy />
        <Features />
        <LotMap />
        <ProposalDetails />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
