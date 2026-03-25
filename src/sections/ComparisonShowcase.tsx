import { useState } from 'react'

export default function ComparisonShowcase() {
  const [activeTab, setActiveTab] = useState<'stable' | 'comparison'>('stable')

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visual Performance Comparison</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See real performance data analyzed side-by-side
          </p>
        </div>

        <div className="mb-8">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('stable')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'stable'
                  ? 'bg-accent text-black shadow-glow'
                  : 'glass glow-border text-accent hover:shadow-glow'
              }`}
            >
              Performance Metrics
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'comparison'
                  ? 'bg-accent text-black shadow-glow'
                  : 'glass glow-border text-accent hover:shadow-glow'
              }`}
            >
              Driver Comparison
            </button>
          </div>
        </div>

        <div className="glass glow-border rounded-lg overflow-hidden p-8">
          {activeTab === 'stable' ? (
            <div data-animate>
              <img
                src="image.png"
                alt="Performance metrics benchmark"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 p-4 bg-surface rounded-lg border border-accent/20">
                <h3 className="text-lg font-semibold text-accent mb-2">Performance Metrics Analysis</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    Consistent frame delivery with minimal variance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    Frame time clustering around target framerate
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    No perceptible stutter or frame spikes
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div data-animate>
              <img
                src="edited-photo.png"
                alt="Driver comparison benchmark"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 p-4 bg-surface rounded-lg border border-accent/20">
                <h3 className="text-lg font-semibold text-accent mb-2">Driver A vs Driver B Analysis</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    Dataset A: 7,123 frames @ 238.3 avg FPS
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    Dataset B: 8,023 frames @ 277.2 avg FPS
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">›</span>
                    Performance improvement: ~16% on Driver B
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
