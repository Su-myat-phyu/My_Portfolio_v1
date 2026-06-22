import React from 'react'
import { FaCode, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function LeftBar(){
  const links = [
    {href:'https://github.com/Su-myat-phyu', label:'Open GitHub profile', content:<FaGithub />},
    {href:'https://www.linkedin.com/in/su-myat-phyu-5a539926a/', label:'Open LinkedIn profile', content:<FaLinkedin />},
    {href:'https://www.instagram.com/su_m_phyu/', label:'Open Instagram profile', content:<FaInstagram />},
    {href:'mailto:sumyatphyu2422004@gmail.com', label: 'Open Email', content:<FaEnvelope />}
  ]

  return (
    <aside className="left-bar" aria-label="Social and quick links">
      {links.map(link => (
        <a
          key={link.label}
          className="icon"
          href={link.href}
          aria-label={link.label}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          {link.content}
        </a>
      ))}
    </aside>
  )
}
