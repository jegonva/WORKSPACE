import type { Category } from '../types'
import PriceRangeChart from './PriceRangeChart'
import SourcesDropdown from './SourcesDropdown'

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h2 className={`text-lg font-semibold ${category.colorClass}`}>{category.name}</h2>
        <span className="ml-auto text-slate-500 text-xs">{category.items.length} servicios</span>
      </div>

      <PriceRangeChart items={category.items} color={category.color} />

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800">
              <th className="text-left pb-2 font-medium">Servicio</th>
              <th className="text-right pb-2 font-medium">Mín</th>
              <th className="text-right pb-2 font-medium">Máx</th>
              <th className="text-right pb-2 font-medium hidden sm:table-cell">Unidad</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item) => (
              <tr key={item.label} className="border-b border-slate-800/50 last:border-0">
                <td className="py-2 text-slate-300 pr-4">
                  {item.label}
                  {item.note && (
                    <span className="text-slate-500 text-xs ml-1">({item.note})</span>
                  )}
                </td>
                <td className="py-2 text-right text-white font-medium">
                  ${item.min.toLocaleString('es-MX')}
                </td>
                <td className="py-2 text-right text-white font-medium">
                  ${item.max.toLocaleString('es-MX')}
                </td>
                <td className="py-2 text-right text-slate-500 text-xs hidden sm:table-cell">
                  {item.unit ?? '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SourcesDropdown sources={category.sources} colorClass={category.colorClass} />
    </div>
  )
}
