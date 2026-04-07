export interface PricePoint {
  label: string
  min: number
  max: number
  unit?: string
  note?: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  colorClass: string
  items: PricePoint[]
}

export interface TrendDataPoint {
  date: string
  ac: number
  pintura: number
  plomeria: number
  general: number
  promedio: number
}
