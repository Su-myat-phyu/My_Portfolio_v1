import React from 'react'
import { FaGithub, FaFileAlt } from 'react-icons/fa'

export default function About(){
  return (
    <section id="about" className="about-section">
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="hero-kicker">Full-Stack Developer</p>
          <h1>Hi, I'm Su Myat Phyu.</h1>
          <p className="hero-lede">
            I build modern web applications, AI-powered tools, and automation
            solutions that make everyday tasks simpler and easier to use.
          </p>
          <p className="hero-body">
            Based in Yangon, Myanmar, I enjoy turning ideas into clean,
            practical digital experiences with thoughtful design and
            well-structured code.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-outline" href="/resume.html" target="_blank" rel="noreferrer">
              <FaFileAlt aria-hidden="true" /> Resume
            </a>
            <a
              className="hero-icon-link"
              href="https://github.com/Su-myat-phyu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>

          <div className="about-stats">
            <div className="stat">
              <b>12+</b>
              <span>Projects shipped</span>
            </div>
            <div className="stat">
              <b>17</b>
              <span>Tools in my stack</span>
            </div>
            <div className="stat">
              <b>MM</b>
              <span>Based in Yangon</span>
            </div>
            <div className="stat">
              <b>AI</b>
              <span>+ Automation focus</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile photo of Su Myat Phyu">
          <div className="profile-orbit profile-orbit-one" />
          <div className="profile-orbit profile-orbit-two" />
          <img src="/assets/profile.jpg" alt="Su Myat Phyu" className="hero-profile" />
        </div>
      </div>
    </section>
  )
}
