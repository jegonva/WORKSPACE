import type { Category, TrendDataPoint } from '../types'

export const categories: Category[] = [
  {
    id: 'inspeccion',
    name: 'Inspección',
    icon: '📋',
    color: '#38bdf8',
    colorClass: 'text-sky-400',
    items: [
      { label: 'Inspección fotográfica', min: 1200, max: 8000, unit: 'servicio', note: 'según tamaño y paquete' },
      { label: 'Auditoría contra entrega', min: 2000, max: 6000, unit: 'servicio', note: 'avalúo + informe técnico' },
    ],
    sources: [
      { name: 'Cronoshare – Fotografía inmobiliaria', url: 'https://www.cronoshare.com.mx/cuanto-cuesta/fotografia-inmobiliaria', description: 'Precios de fotografía inmobiliaria en México 2026' },
      { name: 'Holii – Fotografía y video inmobiliario', url: 'https://holii.mx/servicios/fotografia-video-inmobiliario', description: 'Servicio de inspección fotográfica en Cancún' },
      { name: 'Avalúos Quintana Roo', url: 'https://avaluosquintanaroo.com/', description: 'Avalúos y auditorías de inmuebles en Q. Roo' },
      { name: 'Correduría Pública 5 – Avalúos Cancún', url: 'https://www.correduriapublica.mx/portfolio-item/avaluos-en-cancun/', description: 'Valuadores autorizados en Quintana Roo' },
    ],
  },
  {
    id: 'preventivo',
    name: 'Mantenimiento Preventivo',
    icon: '🔨',
    color: '#a78bfa',
    colorClass: 'text-violet-400',
    items: [
      { label: 'Mantenimiento preventivo básico', min: 450, max: 3000, unit: 'servicio', note: 'contratos mensuales disponibles' },
      { label: 'Presupuesto reparaciones e imprevistos', min: 3000, max: 8000, unit: '/mes', note: '1–3% valor inmueble/año' },
    ],
    sources: [
      { name: 'Limpiar.mx – Mantenimiento Cancún', url: 'https://www.limpiar.mx/empresas/mantenimiento-de-edificios/cancun', description: 'Directorio de empresas de mantenimiento en Cancún' },
      { name: 'Puntodestino – Costo mantenimiento departamento', url: 'https://puntodestino.com.mx/blog/cuanto-cuesta-el-mantenimiento-de-un-departamento/', description: 'Guía de presupuesto mensual para reparaciones residenciales' },
      { name: 'CAISA – Cuota de mantenimiento residencial', url: 'https://grupocaisa.com/blog/como-calcular-cuota-mantenimiento-en-residencial/', description: 'Cálculo de cuota de mantenimiento en residencial' },
      { name: 'Cronoshare – Reparaciones del hogar 2026', url: 'https://www.cronoshare.com.mx/cuanto-cuesta/reparaciones-hogar', description: 'Precios de reparaciones más comunes 2026' },
    ],
  },
  {
    id: 'servicios',
    name: 'Servicios del Hogar',
    icon: '🏠',
    color: '#34d399',
    colorClass: 'text-emerald-400',
    items: [
      { label: 'Electricista', min: 300, max: 1300, unit: 'servicio', note: 'emergencia nocturna hasta $2,200' },
      { label: 'Plomería', min: 374, max: 900, unit: 'servicio', note: 'materiales por separado' },
      { label: 'Fumigación residencial', min: 400, max: 2860, unit: 'servicio', note: 'según tamaño y tipo de plaga' },
      { label: 'Limpieza de aires acondicionados', min: 1000, max: 4000, unit: 'servicio', note: 'minisplit desde $1,200 + IVA' },
    ],
    sources: [
      { name: 'Cronoshare – Electricistas Cancún', url: 'https://www.cronoshare.com.mx/servicios/electricistas/quintana-roo/cancun', description: 'Precios de electricistas a domicilio en Cancún 2026' },
      { name: 'HomePro – Tabla de precios electricidad 2026', url: 'https://homepro.com.mx/blog/tabla-precios-trabajos-electricidad', description: 'Tabla de precios de trabajos eléctricos 2026' },
      { name: 'Plomero en Cancún 24/7', url: 'https://plomeroencancun.com/', description: 'Servicio de plomería urgente con garantía en Cancún' },
      { name: 'Cronoshare – Plomeros Cancún', url: 'https://www.cronoshare.com.mx/servicios/plomeros/quintana-roo/cancun', description: 'Precios de plomeros a domicilio en Cancún' },
      { name: 'Roachbusters Cancún – Fumigación residencial', url: 'https://www.roachbusterscancun.com/product-page/fumigaci%C3%B3n-a-casa-residencial-de-1-piso', description: 'Control de plagas residencial en Cancún con precios publicados' },
      { name: 'Grupo Force – Fumigaciones Cancún', url: 'https://grupoforce.mx/', description: 'Empresa de fumigación y sanitización en Cancún y Riviera Maya' },
      { name: 'Habitissimo – Mantenimiento A/C Quintana Roo', url: 'https://www.habitissimo.com.mx/presupuesto/mantenimiento-aire-acondicionado/quintana-roo', description: 'Precios de limpieza de aires acondicionados en Q. Roo' },
      { name: 'Aire y Climas – Costo mantenimiento minisplit 2026', url: 'https://www.aireyclimas.mx/costo-mantenimiento-mini-split/', description: 'Análisis de precios de mantenimiento de minisplit 2026' },
    ],
  },
  {
    id: 'acabados',
    name: 'Acabados y Obra',
    icon: '🎨',
    color: '#fb923c',
    colorClass: 'text-orange-400',
    items: [
      { label: 'Pintura residencial', min: 28, max: 70, unit: '/m²', note: 'con materiales ~$180/m²' },
      { label: 'Impermeabilización', min: 417, max: 705, unit: '/m²', note: 'acrílico a asfalto prefabricado' },
      { label: 'Carpintería mayor', min: 1800, max: 45000, unit: 'proyecto', note: 'closets, cocinas, puertas' },
    ],
    sources: [
      { name: 'Cronoshare – Pintar departamento 2026', url: 'https://www.cronoshare.com.mx/cuanto-cuesta/pintar-departamento', description: 'Precios de pintura residencial por m² 2026' },
      { name: 'Habitissimo – Pintores Quintana Roo', url: 'https://www.habitissimo.com.mx/presupuesto/pintores/quintana-roo', description: 'Cotizaciones de pintores en Cancún' },
      { name: 'Cronoshare – Impermeabilización 2026', url: 'https://www.cronoshare.com.mx/cuanto-cuesta/impermeabilizacion', description: 'Precios de impermeabilización por m² 2026' },
      { name: 'Habitissimo – Impermeabilización Quintana Roo', url: 'https://www.habitissimo.com.mx/presupuesto/impermeabilizacion/quintana-roo', description: 'Cotizaciones de impermeabilización en Cancún' },
      { name: 'Carpintec – Carpintería Cancún', url: 'https://www.carpintec.mx/carpinteria-cancun', description: 'Taller y fábrica de carpintería en Cancún' },
      { name: 'Cronoshare – Carpinteros Cancún 2026', url: 'https://www.cronoshare.com.mx/servicios/carpinteros/quintana-roo/cancun', description: 'Precios de carpintería mayor en Cancún 2026' },
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
  mostExpensive: { label: 'Carpintería mayor', max: 45000 },
  categoriesCount: categories.length,
  servicesCount: categories.reduce((acc, c) => acc + c.items.length, 0),
}
