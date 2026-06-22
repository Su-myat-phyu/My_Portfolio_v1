import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const EDUCATION = [
  {
    year: '2026',
    degree: 'Bachelor Degree in Computer Science',
    school: 'University of Roehampton'
  },
  {
    year: '2025',
    degree: 'Higher Diploma in Software Engineering',
    school: 'Lithan Academy, CLaaS2SaaS'
  },
  {
    year: '2024',
    degree: 'Higher National Diploma in Computing',
    school: 'Lithan Academy, CLaaS2SaaS'
  },
  {
    year: '2023',
    degree: 'Foundation Diploma in Software Engineering',
    school: 'Lithan Academy, CLaaS2SaaS'
  }
]

export default function Education(){
  return (
    <section className="section education-section" id="education">
      <div className="section-heading">
        <h2>Education</h2>
      </div>

      <div className="education-timeline">
        {EDUCATION.map((item, index) => (
          <article className="education-card" key={`${item.year}-${item.degree}`} style={{'--delay': `${index * 0.12}s`}}>
            <div className="education-year">{item.year}</div>
            <div className="education-marker" aria-hidden="true">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
