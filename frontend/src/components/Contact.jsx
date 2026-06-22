import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Contact(){
  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <a className="contact-item" href="mailto:sumyatphyu2422004@gmail.com"><FaEnvelope /> Email</a>
        <a className="contact-item" href="https://www.linkedin.com/in/su-myat-phyu-5a539926a/"><FaLinkedin /> LinkedIn</a>
        <a className="contact-item" href="https://www.instagram.com/su_m_phyu/"><FaInstagram /> Instagram</a>
        <a className="contact-item" href="https://github.com/Su-myat-phyu"><FaGithub /> Github</a>
      </div>
    </section>
  )
}
