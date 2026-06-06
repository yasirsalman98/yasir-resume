import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

const particleCount = 22

export function BackgroundEffects() {
  const [cursor, setCursor] = useState({ x: 50, y: 45 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    const handlePointerMove = (event: PointerEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div
      className="background-effects"
      aria-hidden="true"
      style={
        {
          '--cursor-x': `${cursor.x}%`,
          '--cursor-y': `${cursor.y}%`,
        } as CSSProperties
      }
    >
      <div className="cursor-glow" />
      <div className="digital-grid" />
      <div className="scanlines" />
      <div className="cyber-glow glow-one" />
      <div className="cyber-glow glow-two" />
      <div className="cyber-glow glow-three" />
      <div className="neon-streak neon-streak-one" />
      <div className="neon-streak neon-streak-two" />
      <div className="neon-streak neon-streak-three" />
      <div className="particle-field">
        {Array.from({ length: particleCount }, (_, index) => {
          const left = (index * 37 + (index % 5) * 11) % 100
          return (
            <span
              key={index}
              style={
                {
                  '--particle-index': index,
                  '--particle-left': `${left}%`,
                } as CSSProperties
              }
            />
          )
        })}
      </div>
    </div>
  )
}
