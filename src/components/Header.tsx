function getBuildLabel() {
  const now = new Date()
  const month = now.toLocaleDateString('es-MX', { month: 'long' })
  const year = now.getFullYear()
  return `Últimos 30 días · ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
}

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Precios de Mantenimiento Residencial
          </h1>
          <p className="text-slate-400 mt-1">
            Cancún, Quintana Roo · Investigación de mercado · Precios en MXN
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            {getBuildLabel()}
          </span>
          <span className="text-slate-500 text-xs">Algunos precios excluyen IVA (16%)</span>
        </div>
      </div>
    </header>
  )
}
