import { summaryStats } from '../data/priceData'

interface StatCardProps {
  label: string
  value: string
  sub: string
  accent: string
}

function StatCard({ label, value, sub, accent }: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-1">
      <span className="text-slate-500 text-xs uppercase tracking-wider">{label}</span>
      <span className={`text-2xl font-bold ${accent}`}>{value}</span>
      <span className="text-slate-400 text-xs">{sub}</span>
    </div>
  )
}

export default function SummaryStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        label="Servicio más barato"
        value={`$${summaryStats.cheapestService.min.toLocaleString('es-MX')}`}
        sub={summaryStats.cheapestService.label}
        accent="text-emerald-400"
      />
      <StatCard
        label="Servicio más caro"
        value={`$${summaryStats.mostExpensive.max.toLocaleString('es-MX')}`}
        sub={summaryStats.mostExpensive.label}
        accent="text-rose-400"
      />
      <StatCard
        label="Categorías"
        value={String(summaryStats.categoriesCount)}
        sub="tipos de mantenimiento"
        accent="text-sky-400"
      />
      <StatCard
        label="Servicios analizados"
        value={String(summaryStats.servicesCount)}
        sub="precios investigados"
        accent="text-violet-400"
      />
    </div>
  )
}
