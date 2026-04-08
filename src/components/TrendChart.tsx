import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { trendData, categories } from '../data/priceData'

const LINES = [
  { key: 'ac' as const, name: `${categories[0].icon} ${categories[0].name}`, color: categories[0].color },
  { key: 'pintura' as const, name: `${categories[1].icon} ${categories[1].name}`, color: categories[1].color },
  { key: 'plomeria' as const, name: `${categories[2].icon} ${categories[2].name}`, color: categories[2].color },
  { key: 'general' as const, name: `${categories[3].icon} ${categories[3].name}`, color: categories[3].color },
]

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: string
}) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="text-slate-400 mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-medium">
          {p.name}: ${p.value.toLocaleString('es-MX')}
        </p>
      ))}
    </div>
  )
}

export default function TrendChart() {
  const tickIndices = [0, 5, 10, 15, 20, 25, 29]
  const ticks = tickIndices.map((i) => trendData[i].date)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={trendData} margin={{ top: 4, right: 8, left: 8, bottom: 4 }}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          ticks={ticks}
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `$${(v as number).toLocaleString('es-MX')}`}
          width={80}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
          formatter={(value) => <span style={{ color: '#cbd5e1' }}>{value}</span>}
        />
        {LINES.map((line) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            name={line.name}
            stroke={line.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
