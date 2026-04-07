import { useState } from 'react'
import Header from './components/Header'
import SummaryStats from './components/SummaryStats'
import CategoryFilter from './components/CategoryFilter'
import CategoryCard from './components/CategoryCard'
import TrendSection from './components/TrendSection'
import { categories } from './data/priceData'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleCategories =
    activeFilter === 'all' ? categories : categories.filter((c) => c.id === activeFilter)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <SummaryStats />
        <CategoryFilter active={activeFilter} onChange={setActiveFilter} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        <TrendSection />

        <footer className="mt-12 pt-6 border-t border-slate-800 text-slate-600 text-xs text-center">
          Datos recopilados via investigación web · Cancún, Quintana Roo · Abril 2026 ·
          Precios referenciales, pueden variar por proveedor y condiciones del servicio.
        </footer>
      </div>
    </div>
  )
}
