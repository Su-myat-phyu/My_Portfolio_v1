import React from 'react'
import {
  SiSpringboot,
  SiPython,
  SiFlutter,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiVite,
  SiMysql,
  SiMongodb,
  SiVercel
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'

const SKILLS = [
  { name: 'Java', Icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'Node', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Vercel', Icon: SiVercel, color: '#000000' }
]

export default function TechStack() {
  return (
    <section className="skills" id="techstack">
      <div className="wrap">
        <div className="section-heading">
          <h2>Tech stack</h2>
          <p>
            The languages, frameworks, and tools I reach for most when building
            applications end to end.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map(({ name, Icon, color }) => (
            <div className="skill-card" key={name}>
              <Icon
                className="skill-icon"
                style={{ color }}
                aria-hidden="true"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

