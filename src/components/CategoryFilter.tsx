import { categories } from '../data/priceData'

interface Props {
  active: string
  onChange: (id: string) => void
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
          active === 'all'
            ? 'bg-white text-slate-900'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            active === cat.id
              ? 'bg-white text-slate-900'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {cat.icon} {cat.name}
        </button>
      ))}
    </div>
  )
}
