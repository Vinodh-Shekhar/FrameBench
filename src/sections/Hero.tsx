import { Download, Play } from 'lucide-react'
import Button from '../components/Button'
import AnimatedGraph from '../components/AnimatedGraph'

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden flex items-center">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-medium text-accent">GPU Performance Intelligence</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                FrameBench <span className="text-accent">Beyond FPS. Understand Frame Behavior</span>
              </h1>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed">
              Analyze frame-time telemetry, detect stutter, and validate GPU driver performance with precision. Detect regressions and generate reports in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="group">
                <Download size={20} />
                Download for Windows
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://vinodh-framebench-analyzer.bolt.host/', '_blank')}
              >
                <Play size={20} />
                View Demo
              </Button>
            </div>

          </div>

          {/* Right animated graph */}
          <div className="relative">
            <div className="glass glow-border rounded-lg overflow-hidden p-4">
              <AnimatedGraph />
            </div>
            <div className="absolute inset-0 rounded-lg shadow-glow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
