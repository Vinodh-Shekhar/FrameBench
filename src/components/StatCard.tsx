interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  unit?: string
  status?: 'optimal' | 'fair' | 'warning'
}

export default function StatCard({ icon, label, value, unit, status }: StatCardProps) {
  const statusColors = {
    optimal: 'border-accent shadow-glow',
    fair: 'border-yellow-500 shadow-yellow-500/20',
    warning: 'border-red-500 shadow-red-500/20',
  }

  return (
    <div className={`glass glow-border rounded-lg p-6 ${status ? statusColors[status] : 'border-accent'} hover:shadow-glow-lg transition-all duration-300`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-accent">{icon}</div>
      </div>
      <p className="text-text-secondary text-sm font-medium mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-accent">{value}</p>
        {unit && <p className="text-text-secondary text-sm">{unit}</p>}
      </div>
    </div>
  )
}
