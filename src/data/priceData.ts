import type { Category, TrendDataPoint } from '../types'

export const categories: Category[] = [
  {
    id: 'ac',
    name: 'Aire Acondicionado',
    icon: '❄️',
    color: '#38bdf8',
    colorClass: 'text-sky-400',
    items: [
      { label: 'Mantenimiento general', min: 1200, max: 3000, unit: 'servicio' },
      { label: 'Mantenimiento minisplit', min: 1100, max: 1200, unit: 'servicio', note: '+ IVA' },
      { label: 'Limpieza de ductos', min: 1000, max: 1200, unit: 'servicio' },
    ],
  },
  {
    id: 'pintura',
    name: 'Pintura Residencial',
    icon: '🎨',
    color: '#a78bfa',
    colorClass: 'text-violet-400',
    items: [
      { label: 'Mano de obra', min: 50, max: 70, unit: '/m²', note: 'solo mano de obra' },
      { label: 'Completo (mat + mano)', min: 180, max: 200, unit: '/m²' },
      { label: 'Casa 2-3 recámaras', min: 10000, max: 15000, unit: 'total' },
    ],
  },
  {
    id: 'plomeria',
    name: 'Plomería',
    icon: '🔧',
    color: '#34d399',
    colorClass: 'text-emerald-400',
    items: [
      { label: 'Visita / diagnóstico', min: 374, max: 632, unit: 'servicio' },
      { label: 'Reparación de fuga', min: 450, max: 650, unit: 'servicio' },
      { label: 'Destape', min: 600, max: 900, unit: 'servicio' },
      { label: 'Sustitución de llave', min: 500, max: 800, unit: 'servicio' },
      { label: 'Inst. de sanitario', min: 1000, max: 1600, unit: 'servicio' },
    ],
  },
  {
    id: 'general',
    name: 'Mantenimiento General',
    icon: '🏠',
    color: '#fb923c',
    colorClass: 'text-orange-400',
    items: [
      { label: 'Impermeabilización', min: 417, max: 705, unit: '/m²' },
      { label: 'Mantenimiento alberca', min: 1000, max: 1500, unit: '/mes' },
      { label: 'Servicio de limpieza', min: 500, max: 1500, unit: 'servicio' },
      { label: 'Empleado doméstico', min: 50, max: 100, unit: '/hora' },
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
  const d = new Date(2026, 3, 7) // April 7, 2026
  d.setDate(d.getDate() - daysAgo)
  return d.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })
}

const acBase = midpoint(categories[0].items)
const pinturaBase = midpoint(categories[1].items)
const plomeriaBase = midpoint(categories[2].items)
const generalBase = midpoint(categories[3].items)

const acTrend = generateTrend(acBase, 30)
const pinturaTrend = generateTrend(pinturaBase, 30, 0.04)
const plomeriaTrend = generateTrend(plomeriaBase, 30, 0.07)
const generalTrend = generateTrend(generalBase, 30, 0.05)

export const trendData: TrendDataPoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: formatDate(29 - i),
  ac: acTrend[i],
  pintura: pinturaTrend[i],
  plomeria: plomeriaTrend[i],
  general: generalTrend[i],
  promedio: Math.round((acTrend[i] + pinturaTrend[i] + plomeriaTrend[i] + generalTrend[i]) / 4),
}))

export const summaryStats = {
  cheapestService: { label: 'Visita de plomero', min: 374 },
  mostExpensive: { label: 'Pintura casa completa', max: 15000 },
  categoriesCount: categories.length,
  servicesCount: categories.reduce((acc, c) => acc + c.items.length, 0),
}
