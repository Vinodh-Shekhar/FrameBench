import { Download, Package, Zap } from 'lucide-react'
import Button from '../components/Button'

export default function DownloadSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="glass glow-border rounded-2xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Download FrameBench Analyzer</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Get started with professional-grade GPU performance analysis. Lightweight Windows application with zero dependencies.
          </p>

          <div className="flex gap-6 justify-center items-center flex-wrap mb-12">
            <Button variant="primary" size="lg" className="text-lg">
              <Download size={24} />
              Download .exe
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-surface/50">
              <Package size={24} className="text-accent mb-3 mx-auto" />
              <p className="font-semibold mb-1">Lightweight</p>
              <p className="text-sm text-text-secondary">~50MB installer, minimal dependencies</p>
            </div>
            <div className="p-4 rounded-lg bg-surface/50">
              <Zap size={24} className="text-accent mb-3 mx-auto" />
              <p className="font-semibold mb-1">Fast Performance</p>
              <p className="text-sm text-text-secondary">Rust-powered analysis engine</p>
            </div>
            <div className="p-4 rounded-lg bg-surface/50">
              <Download size={24} className="text-accent mb-3 mx-auto" />
              <p className="font-semibold mb-1">Offline Capable</p>
              <p className="text-sm text-text-secondary">Works without internet connection</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-left">
            <h3 className="font-semibold mb-4">System Requirements</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Windows 10 or later
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                4GB RAM minimum
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                NVIDIA, AMD or INTEL GPU with current drivers
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                CSV telemetry files from FrameView or PresentMon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
