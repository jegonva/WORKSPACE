import TrendChart from './TrendChart'

export default function TrendSection() {
  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-lg font-semibold text-white">Tendencia — Últimos 30 días</h2>
        <span className="inline-flex items-center gap-1.5 bg-amber-900/30 border border-amber-700/40 text-amber-400 text-xs px-3 py-1 rounded-full">
          ⚠️ Datos simulados basados en rangos de mercado observados
        </span>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <p className="text-slate-500 text-xs mb-4">
          La gráfica muestra el precio promedio estimado por categoría a lo largo de los últimos 30 días,
          calculado a partir de los rangos investigados con una variación estacional de ±6%.
          No representa datos en tiempo real.
        </p>
        <TrendChart />
      </div>
    </section>
  )
}
