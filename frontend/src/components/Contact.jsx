import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'sumyatphyu2422004@gmail.com',
    href: 'mailto:sumyatphyu2422004@gmail.com',
    Icon: FaEnvelope
  },
  {
    label: 'LinkedIn',
    value: 'su-myat-phyu',
    href: 'https://www.linkedin.com/in/su-myat-phyu-5a539926a/',
    Icon: FaLinkedin
  },
  {
    label: 'Instagram',
    value: '@su_m_phyu',
    href: 'https://www.instagram.com/su_m_phyu/',
    Icon: FaInstagram
  },
  {
    label: 'GitHub',
    value: 'Su-myat-phyu',
    href: 'https://github.com/Su-myat-phyu',
    Icon: FaGithub
  }
]

export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-box">
          <div className="contact-copy">
            <p className="contact-kicker">Contact</p>
            <h2>Let's build something <em>useful</em> together.</h2>
            <p>
              I am open to new projects, collaborations, and opportunities.
              Choose the channel that works best for you.
            </p>
          </div>

          <div className="contact-grid">
            {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
              <a
                className="contact-item"
                href={href}
                key={label}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <span className="contact-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
