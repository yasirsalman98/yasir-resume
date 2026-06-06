import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Project } from '../data/resumeData'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="modal-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="project-modal glass-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
              X
            </button>
            <span className="modal-label">Selected Project</span>
            <h3 id="project-modal-title">{project.name}</h3>
            <p>{project.summary}</p>
            <div className="project-detail-grid">
              <section>
                <span>Problem</span>
                <p>{project.details.problem}</p>
              </section>
              <section>
                <span>What I built</span>
                <p>{project.details.built}</p>
              </section>
              <section>
                <span>Tech used</span>
                <div className="tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>
              <section>
                <span>Result / value</span>
                <p>{project.details.result}</p>
              </section>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
