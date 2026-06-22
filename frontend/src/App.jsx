import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LeftBar from './components/LeftBar'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [navOpen, setNavOpen] = useState(false)
  useEffect(()=>{document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme)},[theme])

  return (
    <div>
      <div className="site-side-animations" aria-hidden="true">
        <span className="side-dot-grid side-dot-grid-left" />
        <span className="side-dot-grid side-dot-grid-right" />
        <span className="side-ring side-ring-left" />
        <span className="side-ring side-ring-right" />
        <span className="side-diamond side-diamond-left" />
        <span className="side-diamond side-diamond-right" />
        <span className="side-wave side-wave-left" />
        <span className="side-wave side-wave-right" />
      </div>

      <div className="top-nav">
        <a className="brand" href="#home">Su Myat Phyu</a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={navOpen}
          aria-controls="primary-navigation"
          onClick={() => setNavOpen(open => !open)}
        >
          {navOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={`nav-items ${navOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a className="nav-item" href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a className="nav-item" href="#projects" onClick={() => setNavOpen(false)}>Projects</a>
          <a className="nav-item" href="#tech-stack" onClick={() => setNavOpen(false)}>Tech</a>
          <a className="nav-item" href="#education" onClick={() => setNavOpen(false)}>Education</a>
          <a className="nav-item" href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          <button
            className="theme-toggle"
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            onClick={()=>setTheme(t=>t==='light'? 'dark':'light')}
          >
            <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">☀</span>
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb" />
            </span>
            <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">☾</span>
          </button>
        </nav>
      </div>
      <LeftBar />
      <main className="main">
        <section className="section hero-section" id="home">
          <h1 className="hero-title-frame">
            <span>Hello, I'm Su Myat Phyu</span>
          </h1>

          <p className="hero-intro">
            Welcome to my portfolio. Watch a quick video introduction to learn how I build modern web apps and solve real-world problems.
          </p>

          <div className="video-wrapper">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/-FYqycr9B_w?start=0"
              title="Video introduction by Su Myat Phyu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <About />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
