'use client'

import { useEffect, useRef } from 'react'
import type { SessionMoment } from '@/lib/session'

/**
 * The homepage's illustrative session, drawn as a single line that follows the reader down
 * the page. Each moment lights when the line reaches it and stays lit.
 *
 * At the silent moment (the one marked `accent`) the line stops for a stretch of scroll before
 * it moves on, so the reader waits through the silence too.
 *
 * Server render and reduced motion both show the finished state: full line, every moment lit.
 */

/** Share of the scroll range during which the line holds at the silent moment. */
const SILENCE_HOLD = 0.16

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export default function SessionTimeline({ moments }: { moments: SessionMoment[] }) {
  const listRef = useRef<HTMLDivElement>(null)
  const spineRef = useRef<HTMLSpanElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const list = listRef.current
    const spine = spineRef.current
    const fill = fillRef.current
    if (!list || !spine || !fill) return

    const rows = Array.from(list.querySelectorAll<HTMLElement>('[data-moment]'))
    const dotCentre = (row: HTMLElement) => {
      const dot = row.querySelector<HTMLElement>('[data-dot]')
      return row.offsetTop + (dot ? dot.offsetTop + dot.offsetHeight / 2 : 0)
    }

    let stops: number[] = []
    let hold = -1
    const silentIndex = moments.findIndex((moment) => moment.accent)

    const measure = () => {
      const centres = rows.map(dotCentre)
      const first = centres[0] ?? 0
      const span = Math.max(1, (centres[centres.length - 1] ?? 0) - first)
      spine.style.top = `${first}px`
      spine.style.height = `${span}px`
      stops = centres.map((centre) => (centre - first) / span)
      hold = silentIndex >= 0 ? (stops[silentIndex] ?? -1) : -1
    }

    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(list)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return () => resize.disconnect()

    // Map raw scroll progress to line length, flattening one stretch at the silent moment.
    const lineFor = (raw: number) => {
      if (hold < 0) return raw
      const moving = 1 - SILENCE_HOLD
      const arrive = hold * moving
      if (raw < arrive) return raw / moving
      if (raw < arrive + SILENCE_HOLD) return hold
      return (raw - SILENCE_HOLD) / moving
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = list.getBoundingClientRect()
      const viewport = window.innerHeight
      // Starts as the list rises past 72% of the viewport; ends as its foot reaches the middle.
      const raw = clamp((viewport * 0.72 - rect.top) / (rect.height + viewport * 0.22))
      const line = clamp(lineFor(raw))
      fill.style.transform = `scaleY(${line})`
      rows.forEach((row, index) => {
        if (row.dataset.lit !== 'true' && line >= (stops[index] ?? 0) - 0.002) {
          row.dataset.lit = 'true'
        }
      })
      if (line >= 1) window.removeEventListener('scroll', onScroll)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    rows.forEach((row) => (row.dataset.lit = 'false'))
    list.dataset.armed = 'true'
    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      resize.disconnect()
    }
  }, [moments])

  return (
    <div ref={listRef} className="session-timeline relative mt-8 border border-rule-dark">
      <span
        ref={spineRef}
        aria-hidden="true"
        className="absolute bottom-9 left-[15px] top-7 w-px bg-rule-dark lg:top-9"
      >
        <span
          ref={fillRef}
          className="session-timeline-fill absolute inset-0 origin-top bg-accent-light"
        />
      </span>
      {moments.map((note) => (
        <div
          key={note.time}
          data-moment
          className="session-timeline-moment relative grid items-baseline gap-x-7 gap-y-1 border-b border-[#262825] py-5 pl-10 pr-7 last:border-b-0 lg:grid-cols-[88px_1fr_1fr]"
        >
          <span
            data-dot
            aria-hidden="true"
            className="session-timeline-dot absolute left-3 top-[23px] h-[7px] w-[7px] rounded-full border border-accent-light bg-accent-light lg:top-[31px]"
          />
          <span className="font-sans text-[12px] tracking-[0.08em] text-faint">
            {note.time}
          </span>
          <span
            className={`font-serif text-[20px] leading-[1.5] ${note.accent ? 'text-accent-light' : 'text-paper'}`}
          >
            {note.event}
          </span>
          <span className="pl-4 font-sans text-[13.5px] leading-[1.65] text-onink lg:pl-0">
            {note.observation}
          </span>
        </div>
      ))}
    </div>
  )
}
