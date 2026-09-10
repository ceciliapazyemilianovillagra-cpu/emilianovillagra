import { useEffect, useState } from 'react'

const DEFAULT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWUNm482knE9ycG_agBYFPxKCJFjZlkbgjH_0bCwRYq9YTG2RxI9XGmODx2d58ELAlMCTqveNJRSx3/pub?output=csv'
const SHEET_URL = import.meta.env.VITE_SHEET_CSV_URL || DEFAULT_SHEET_URL

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/)
  if (lines.length < 2) return []
  const headers = splitCsvLine(lines[0]).map(h => h.trim().toLowerCase())
  return lines.slice(1).filter(Boolean).map(line => {
    const cells = splitCsvLine(line)
    const row = {}
    headers.forEach((h, i) => { row[h] = (cells[i] ?? '').trim() })
    return row
  })
}

function splitCsvLine(line) {
  const cells = []
  let cur = '', inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cur += c
    } else {
      if (c === '"') inQuotes = true
      else if (c === ',') { cells.push(cur); cur = '' }
      else cur += c
    }
  }
  cells.push(cur)
  return cells
}

function parseFecha(fecha) {
  const [d, m, y] = fecha.split('/').map(Number)
  if (!d || !m || !y) return null
  return new Date(y, m - 1, d)
}

const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

export function useAgenda() {
  const [state, setState] = useState({ loading: true, error: null, fechas: [] })

  useEffect(() => {
    if (!SHEET_URL) {
      setState({ loading: false, error: 'missing-url', fechas: [] })
      return
    }
    let cancelled = false
    fetch(`${SHEET_URL}${SHEET_URL.includes('?') ? '&' : '?'}cachebust=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.text()
      })
      .then(text => {
        if (cancelled) return
        const rows = parseCsv(text)
        const today = new Date(); today.setHours(0, 0, 0, 0)
        const fechas = rows
          .map(row => {
            const date = parseFecha(row.fecha || '')
            return {
              date,
              mes: date ? MESES[date.getMonth()] : '',
              dia: date ? String(date.getDate()).padStart(2, '0') : '',
              lugar: row.lugar || '',
              ciudad: row.ciudad || '',
              estado: row.estado || 'Confirmado',
              link: row.link || '',
            }
          })
          .filter(f => f.date && f.lugar)
          .filter(f => f.date >= today)
          .sort((a, b) => a.date - b.date)
        setState({ loading: false, error: null, fechas })
      })
      .catch(err => {
        if (!cancelled) setState({ loading: false, error: err.message, fechas: [] })
      })
    return () => { cancelled = true }
  }, [])

  return state
}
