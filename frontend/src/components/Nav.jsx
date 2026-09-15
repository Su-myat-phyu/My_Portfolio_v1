import React from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav({ open, onToggle, onNavigate, theme, onToggleTheme }){
  const isDark = theme === 'dark'

  return (
    <header className="site-nav">
      <a href="#about" className="site-nav-logo" onClick={onNavigate}>Su Myat <span>Phyu</span></a>

      <nav className={`site-nav-links ${open ? 'site-nav-links-open' : ''}`} aria-label="Main navigation">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={onNavigate}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        aria-pressed={isDark}
      >
        <span className="theme-toggle-track" aria-hidden="true">
          <span className="theme-toggle-thumb">
            {isDark ? <FaMoon /> : <FaSun />}
          </span>
        </span>
      </button>

      <button
        className="site-nav-toggle"
        onClick={onToggle}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  )
}
