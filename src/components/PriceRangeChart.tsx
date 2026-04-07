import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import type { PricePoint } from '../types'

interface Props {
  items: PricePoint[]
  color: string
}

interface TooltipPayload {
  payload: {
    label: string
    min: number
    max: number
    unit?: string
    note?: string
  }
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) {
  if (!active || !payload || !payload.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm shadow-lg">
      <p className="text-white font-medium mb-1">{d.label}</p>
      <p className="text-slate-300">
        <span className="text-slate-500">Mín:</span>{' '}
        <span className="font-semibold">${d.min.toLocaleString('es-MX')}</span>
        {d.unit && <span className="text-slate-500"> {d.unit}</span>}
      </p>
      <p className="text-slate-300">
        <span className="text-slate-500">Máx:</span>{' '}
        <span className="font-semibold">${d.max.toLocaleString('es-MX')}</span>
        {d.unit && <span className="text-slate-500"> {d.unit}</span>}
      </p>
      {d.note && <p className="text-slate-500 text-xs mt-1">{d.note}</p>}
    </div>
  )
}

export default function PriceRangeChart({ items, color }: Props) {
  const data = items.map((item) => ({
    ...item,
    range: item.max - item.min,
  }))

  return (
    <ResponsiveContainer width="100%" height={items.length * 52 + 20}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
        barSize={20}
      >
        <CartesianGrid horizontal={false} stroke="#334155" strokeDasharray="3 3" />
        <XAxis
          type="number"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `$${(v as number).toLocaleString('es-MX')}`}
        />
        <YAxis
          type="category"
          dataKey="label"
          tick={{ fill: '#cbd5e1', fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          width={160}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
        {/* Invisible base bar to offset to min */}
        <Bar dataKey="min" stackId="a" fill="transparent" radius={[0, 0, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill="transparent" />
          ))}
        </Bar>
        {/* Visible range bar */}
        <Bar dataKey="range" stackId="a" fill={color} radius={[0, 4, 4, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={color} fillOpacity={0.85} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
