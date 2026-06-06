import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems } from '../data/resumeData'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      className="floating-nav"
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <a className="nav-brand" href="#home" aria-label="Yasir Salman home">
        YS
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-nav-menu"
            className="mobile-nav-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  )
}
