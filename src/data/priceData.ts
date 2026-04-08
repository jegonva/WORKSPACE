import type { Category, TrendDataPoint } from '../types'

export const categories: Category[] = [
  {
    id: 'inspeccion',
    name: 'Inspección',
    icon: '📋',
    color: '#38bdf8',
    colorClass: 'text-sky-400',
    items: [
      { label: 'Inspección fotográfica', min: 1200, max: 8000, unit: 'servicio' },
      { label: 'Auditoría contra entrega', min: 2000, max: 5000, unit: 'servicio' },
    ],
  },
  {
    id: 'preventivo',
    name: 'Mantenimiento Preventivo',
    icon: '🔨',
    color: '#a78bfa',
    colorClass: 'text-violet-400',
    items: [
      { label: 'Mantenimiento preventivo básico', min: 2000, max: 5000, unit: '/mes' },
      { label: 'Presupuesto reparaciones e imprevistos', min: 3000, max: 8000, unit: '/mes', note: 'estimado residencial' },
    ],
  },
  {
    id: 'servicios',
    name: 'Servicios del Hogar',
    icon: '🏠',
    color: '#34d399',
    colorClass: 'text-emerald-400',
    items: [
      { label: 'Electricista', min: 500, max: 1200, unit: 'servicio' },
      { label: 'Plomería', min: 374, max: 900, unit: 'servicio' },
      { label: 'Fumigación residencial', min: 900, max: 3000, unit: 'servicio' },
      { label: 'Limpieza de aires acondicionados', min: 1200, max: 3000, unit: 'servicio' },
    ],
  },
  {
    id: 'acabados',
    name: 'Acabados y Obra',
    icon: '🎨',
    color: '#fb923c',
    colorClass: 'text-orange-400',
    items: [
      { label: 'Pintura residencial', min: 50, max: 75, unit: '/m²' },
      { label: 'Impermeabilización', min: 90, max: 280, unit: '/m²' },
      { label: 'Carpintería mayor', min: 300, max: 600, unit: '/hora' },
    ],
  },
]

function midpoint(items: Category['items']): number {
  const sum = items.reduce((acc, item) => acc + (item.min + item.max) / 2, 0)
  return sum / items.length
}

function generateTrend(baseValue: number, days: number, volatility = 0.06): number[] {
  return Array.from({ length: days }, (_, i) => {
    const wave = Math.sin((i / days) * Math.PI * 2) * volatility
    const noise = (((i * 13 + 7) % 17) / 17) * volatility * 0.5
    return Math.round(baseValue * (1 + wave + noise - volatility / 2))
  })
}

function formatDate(daysAgo: number): string {
  const d = new Date(2026, 3, 7)
  d.setDate(d.getDate() - daysAgo)
  return d.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })
}

const inspeccionBase = midpoint(categories[0].items)
const preventivoBase = midpoint(categories[1].items)
const serviciosBase = midpoint(categories[2].items)
const acabadosBase = midpoint(categories[3].items)

const inspeccionTrend = generateTrend(inspeccionBase, 30, 0.05)
const preventivoTrend = generateTrend(preventivoBase, 30, 0.04)
const serviciosTrend = generateTrend(serviciosBase, 30, 0.07)
const acabadosTrend = generateTrend(acabadosBase, 30, 0.06)

export const trendData: TrendDataPoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: formatDate(29 - i),
  ac: inspeccionTrend[i],
  pintura: preventivoTrend[i],
  plomeria: serviciosTrend[i],
  general: acabadosTrend[i],
  promedio: Math.round(
    (inspeccionTrend[i] + preventivoTrend[i] + serviciosTrend[i] + acabadosTrend[i]) / 4,
  ),
}))

export const summaryStats = {
  cheapestService: { label: 'Plomería (visita)', min: 374 },
  mostExpensive: { label: 'Presupuesto mensual reparaciones', max: 8000 },
  categoriesCount: categories.length,
  servicesCount: categories.reduce((acc, c) => acc + c.items.length, 0),
}
