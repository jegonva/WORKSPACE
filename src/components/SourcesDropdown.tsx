import { useState } from 'react'
import type { Source } from '../types'

interface Props {
  sources: Source[]
  colorClass: string
}

export default function SourcesDropdown({ sources, colorClass }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4 border-t border-slate-800 pt-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer w-full"
      >
        <span className={`font-medium ${colorClass}`}>
          {open ? '▾' : '▸'} Fuentes de información
        </span>
        <span className="text-slate-600">({sources.length} fuentes)</span>
      </button>

      {open && (
        <ul className="mt-3 space-y-2">
          {sources.map((source) => (
            <li key={source.url} className="flex flex-col gap-0.5">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium ${colorClass} hover:underline truncate`}
              >
                {source.name} ↗
              </a>
              <span className="text-slate-500 text-xs">{source.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
