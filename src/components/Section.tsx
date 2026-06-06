import { motion, useAnimationControls, useInView } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { useEffect, useRef } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  intro?: string | string[]
  className?: string
  stablePlacement?: boolean
}>

export function Section({ id, eyebrow, title, intro, className = '', stablePlacement = false, children }: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const controls = useAnimationControls()
  const isInView = useInView(sectionRef, { amount: 0.25, once: false })
  const hiddenY = stablePlacement ? 0 : 30
  const initialY = stablePlacement ? 0 : 40

  useEffect(() => {
    void controls.start(
      isInView
        ? {
            opacity: 1,
            y: 0,
            transition: { duration: 0.78, ease: 'easeOut' },
          }
        : {
            opacity: 0,
            y: hiddenY,
            transition: { duration: 0.82, ease: 'easeOut' },
          },
    )
  }, [controls, hiddenY, isInView])

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`content-section ${className}`}
      initial={{ opacity: 0, y: initialY }}
      animate={controls}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        {Array.isArray(intro)
          ? intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          : intro
            ? <p>{intro}</p>
            : null}
      </div>
      {children}
    </motion.section>
  )
}
