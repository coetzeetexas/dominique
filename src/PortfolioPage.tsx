import { ArrowLeft, Layout, Sparkles } from 'lucide-react';

export const PortfolioPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page header */}
      <div className="bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-600 flex items-center justify-center">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">Our Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Website Design Portfolio
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Concept builds showing the range of design styles and industries we work across —
            and every one of them is built to pair with AI-powered content and social media marketing
            so your new site doesn't just look great, it keeps growing.
          </p>
        </div>
      </div>

      {/* Portfolio Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <img src="/portfolio-set-1.png" alt="Portfolio concepts: Aetheri, Streamline SaaS, Terra Journeys, Urban Bloom, Nexus Financial, The Daily Bake" className="w-full h-auto rounded-xl shadow-lg" />
        <img src="/portfolio-set-2.png" alt="Portfolio concepts: Aurora, Orbital, Virtus, Symmetry, Helios, Genesis" className="w-full h-auto rounded-xl shadow-lg" />

        {/* Upsell CTA */}
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-700 p-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-accent-400" />
            Beyond the Website
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            A great design is just the starting point
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Every site we design can be paired with Claude AI training for your team and ongoing
            social media marketing — so the traffic keeps coming and your team knows what to do with it.
            Ask us about bundling all three.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-700 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
