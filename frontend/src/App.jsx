import React, { useEffect, useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Nav from './components/Nav'

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app-shell">
      <Nav
        open={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        onNavigate={() => setMenuOpen(false)}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
      />

      <main className="main-content">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact />

        <footer className="site-footer">
          <div className="wrap site-footer-inner">
            <div className="footer-brand">
              <a href="#about">Su Myat <span>Phyu</span></a>
              <p>Full-Stack Developer building practical web apps, AI tools, and automation solutions.</p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#education">Education</a>
              <a href="#techstack">Tech Stack</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer-meta">
              <span>Based in Yangon, Myanmar</span>
              <span>Copyright {new Date().getFullYear()} Su Myat Phyu</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
