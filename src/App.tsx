import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MotionProps, Variants } from 'framer-motion'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Navbar } from './components/Navbar'
import { ProjectModal } from './components/ProjectModal'
import { Section } from './components/Section'
import {
  contact,
  education,
  experience,
  projects,
  skillGroups,
  stats,
} from './data/resumeData'
import type { Project } from './data/resumeData'
import './App.css'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

const cardMotion = {
  whileHover: { y: -8, scale: 1.01 },
  whileTap: { scale: 0.98 },
}

const revealCardMotion = (delay = 0, y = 40): MotionProps => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.72, ease: 'easeOut', delay },
  whileHover: cardMotion.whileHover,
  whileTap: cardMotion.whileTap,
})

const featuredSkills = new Set([
  'TypeScript',
  'React Native',
  'Expo',
  'Next.js',
  'Node.js',
  'Express',
  'Supabase',
  'PostgreSQL',
  'Python',
])

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showExperienceDetails, setShowExperienceDetails] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    const playBackgroundVideo = () => {
      const playAttempt = video.play()
      if (playAttempt) {
        playAttempt.catch(() => {
          // Mobile Safari can defer autoplay until it has enough media data.
        })
      }
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) playBackgroundVideo()
    }

    playBackgroundVideo()
    video.addEventListener('canplay', playBackgroundVideo)
    video.addEventListener('loadeddata', playBackgroundVideo)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('touchstart', playBackgroundVideo, { once: true, passive: true })

    return () => {
      video.removeEventListener('canplay', playBackgroundVideo)
      video.removeEventListener('loadeddata', playBackgroundVideo)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('touchstart', playBackgroundVideo)
    }
  }, [])

  const handleHeroContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })

    window.setTimeout(() => {
      window.location.href = `mailto:${contact.email}`
    }, 450)
  }

  return (
    <main className="portfolio-page">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        aria-hidden="true"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="site-overlay" />
      <div className="site-vignette" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="light-streak streak-one" />
      <div className="light-streak streak-two" />
      <BackgroundEffects />

      <Navbar />

      <section id="home" className="hero-section" aria-label="Yasir Salman portfolio">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={item}>
            RALEIGH, NC • MOBILE • WEB • BACKEND • INTERNAL TOOLING
          </motion.p>

          <motion.h1 variants={item}>{contact.name}</motion.h1>

          <motion.p className="role" variants={item}>
            {contact.title}
          </motion.p>

          <motion.p className="description" variants={item}>
            I build production mobile, web, backend, and internal tooling systems with secure APIs,
            multi-tenant workflows, automation tools, and deployment-ready architecture.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <motion.a className="button button-primary" href="#projects" {...cardMotion}>
              View Projects
            </motion.a>
            <motion.a
              className="button button-secondary"
              href="/Yasir_Salman_Resume.pdf"
              download="Yasir_Salman_Resume.pdf"
              {...cardMotion}
            >
              Download Resume
            </motion.a>
            <motion.a
              className="button button-ghost"
              href={`mailto:${contact.email}`}
              onClick={handleHeroContactClick}
              {...cardMotion}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-shell">
        <Section
          id="about"
          eyebrow="About"
          title="Building production systems across mobile, web, backend, and automation"
          intro={[
            'I build production-ready mobile, web, backend, and internal tooling systems with secure APIs, multi-tenant data flows, and deployment-focused architecture.',
            'My work spans React Native/Expo mobile apps, Next.js web portals, Node.js/Express APIs, Supabase/PostgreSQL databases, private file storage, role-based access, automation scripts, and business workflows from prototype through release.',
          ]}
          className="about-section"
          stablePlacement
        >
          <div className="stat-grid">
            {stats.map((stat, index) => (
              <motion.article
                className="stat-card glass-panel"
                key={stat.title}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stat.title}</h3>
                <p>{stat.detail}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Practical tools for production delivery"
          intro="Grouped by the areas I use most when designing, building, debugging, and deploying applications."
          className="skills-section"
          stablePlacement
        >
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article className="skill-card glass-panel" key={group.title} {...revealCardMotion(0, 0)}>
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.skills.map((skill) => (
                    <span className={featuredSkills.has(skill) ? 'is-featured' : undefined} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Multi-tenant platform work at Exceed Safety"
          intro="Current full-stack role spanning mobile, web, backend APIs, database security, deployment, and production support."
          className="experience-section"
          stablePlacement
        >
          <motion.article className="timeline-card glass-panel" {...revealCardMotion(0.08, 0)}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-heading">
                <div>
                  <h3>
                    {experience.role} / {experience.company}
                  </h3>
                  <p>
                    {experience.location} / {experience.dates}
                  </p>
                </div>
                <span>Current</span>
              </div>

              <ul className="bullet-list">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <AnimatePresence initial={false}>
                {showExperienceDetails ? (
                  <motion.ul
                    className="bullet-list detail-list"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                  >
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>

              <button
                className="text-toggle"
                type="button"
                onClick={() => setShowExperienceDetails((value) => !value)}
                aria-expanded={showExperienceDetails}
              >
                {showExperienceDetails ? 'Show less' : 'View more details'}
              </button>
            </div>
          </motion.article>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Featured systems and application projects"
          intro="Production tools, automation workflows, and application projects built across mobile, web, backend, and internal business operations."
          className="projects-section"
          stablePlacement
        >
          <div className="project-grid">
            {projects.map((project) => (
              <motion.button
                className="project-card glass-panel"
                type="button"
                key={project.id}
                onClick={() => setSelectedProject(project)}
                {...revealCardMotion(0, 0)}
              >
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <span className="project-action">View More Details</span>
              </motion.button>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Computer Science foundation"
          intro="Formal CS training paired with production application development experience."
          className="education-section"
          stablePlacement
        >
          <motion.article className="education-card glass-panel" {...revealCardMotion(0.08, 0)}>
            <div>
              <h3>{education.degree}</h3>
              <p>
                {education.school}, {education.location}
              </p>
              <strong>{education.graduation}</strong>
            </div>
            <div className="tag-row coursework">
              {education.coursework.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </motion.article>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build the next production-ready system"
          intro="Available for full-stack application development conversations, portfolio walkthroughs, and resume review."
          className="contact-section"
        >
          <div className="contact-grid">
            <motion.article className="contact-card glass-panel" {...revealCardMotion()}>
              <span>Email:</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </motion.article>
            <motion.article className="contact-card glass-panel" {...revealCardMotion(0.08)}>
              <span>Phone:</span>
              <a href={`tel:${contact.phone.replaceAll('-', '')}`}>{contact.phone}</a>
            </motion.article>
            <motion.article className="contact-card glass-panel" {...revealCardMotion(0.16)}>
              <span>Location:</span>
              <p>{contact.location}</p>
            </motion.article>
          </div>

          <div className="contact-actions">
            <motion.a className="contact-cta" href={`mailto:${contact.email}`} {...cardMotion}>
              Contact Me
            </motion.a>
            <motion.a
              className="contact-cta"
              href="/Yasir_Salman_Resume.pdf"
              download="Yasir_Salman_Resume.pdf"
              {...cardMotion}
            >
              Download Resume
            </motion.a>
          </div>
        </Section>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}

export default App
