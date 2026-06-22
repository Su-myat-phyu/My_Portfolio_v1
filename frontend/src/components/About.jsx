import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="profile-wrap">
        <img
          src="/assets/profile.jpg"
          alt="Su Myat Phyu"
          className="profile-img"
        />

        <div className="about-copy">
          <h2>About Me</h2>

          <p className="about-text about-text-primary">
            Hi, I'm Su Myat Phyu, a Full Stack Developer from Yangon, Myanmar.
            I build modern web applications, AI-powered tools, and automation
            solutions that make everyday tasks simpler and more efficient.
          </p>

          <p className="about-text about-text-secondary">
            I enjoy solving problems with technology and bringing ideas to life
            through clean design and well-structured code. Whether it's creating
            a user-friendly website, developing an AI agent, or automating a
            workflow, I focus on building solutions that are practical,
            reliable, and easy to use.
          </p>

          <a
            className="resume-download"
            href="/assets/su_myat_phyu_resume_enhanced.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf aria-hidden="true" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}
