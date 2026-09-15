import React from 'react'
import { FaGithub, FaFileAlt } from 'react-icons/fa'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function LeftBar({ open, onNavigate }){
  return (
    <aside className={`leftbar ${open ? 'leftbar-open' : ''}`}>
      <div className="leftbar-profile">
        <img src="/assets/profile.jpg" alt="Su Myat Phyu" className="leftbar-photo" />
        <h1>Su Myat Phyu</h1>
        <p>Full-Stack Developer</p>
      </div>

      <nav className="leftbar-nav">
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={onNavigate}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="leftbar-footer">
        <a className="leftbar-resume" href="/resume.html" target="_blank" rel="noreferrer">
          <FaFileAlt aria-hidden="true" /> View Resume
        </a>
        <a
          className="leftbar-social"
          href="https://github.com/Su-myat-phyu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithub aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
