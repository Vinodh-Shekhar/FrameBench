import { Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-surface-alt">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">FrameBench</h3>
            <p className="text-text-secondary text-sm">
              Professional GPU performance analysis for driver validation and benchmarking teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Release Notes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Issues</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © 2026 FrameBench Analyzer. All rights reserved. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
