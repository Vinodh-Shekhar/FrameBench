import { Gamepad2, FlaskConical, HardDrive, Settings } from 'lucide-react'

interface UseCaseProps {
  icon: React.ReactNode
  title: string
  description: string
  points: string[]
}

function UseCaseCard({ icon, title, description, points }: UseCaseProps) {
  return (
    <div className="glass glow-border rounded-lg p-8 hover:shadow-glow-lg transition-all duration-300" data-animate>
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <span className="text-accent text-lg leading-none mt-0.5">›</span>
            <span className="text-text-secondary text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function UseCases() {
  const useCases = [
    {
      icon: <Gamepad2 size={28} />,
      title: 'Driver Validation',
      description: 'Compare driver builds and detect regressions automatically.',
      points: [
        'Compare driver builds side-by-side',
        'Detect regressions instantly',
        'Generate validation reports',
        'Export results for stakeholders',
      ],
    },
    {
      icon: <FlaskConical size={28} />,
      title: 'Performance Analysis',
      description: 'Analyze frame-time consistency and identify stutter spikes.',
      points: [
        'Detect micro-stutter and frame pacing issues',
        'Visualize frame-time distribution',
        'Export detailed telemetry data',
        'Compare settings impact',
      ],
    },
    {
      icon: <HardDrive size={28} />,
      title: 'Hardware Benchmarking',
      description: 'Compare GPU configurations and system performance.',
      points: [
        'Compare GPU configurations',
        'Analyze thermal performance',
        'Track power impact',
        'Generate benchmark reports',
      ],
    },
    {
      icon: <Settings size={28} />,
      title: 'Game Settings Optimization',
      description: 'Evaluate graphics settings impact on performance.',
      points: [
        'Compare Ultra vs Competitive presets',
        'Find optimal quality/performance balance',
        'Analyze per-setting impact',
        'Share optimization results',
      ],
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Use Cases</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            FrameBench powers critical workflows across GPU driver validation, performance analysis, and benchmarking teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <UseCaseCard key={idx} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
