import { motion } from 'framer-motion'
import { navItems } from '../data/resumeData'

export function Navbar() {
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

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
