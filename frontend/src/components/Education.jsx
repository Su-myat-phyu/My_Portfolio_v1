import React from 'react'

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
    <section id="education" className="education-section">
      <div className="wrap">
        <div className="section-heading">
          <h2>Education</h2>
          <p>My academic path, from foundation studies to a computer science degree.</p>
        </div>

        <div className="education-timeline">
          {EDUCATION.map((item, index) => (
            <article
              className="education-item"
              key={`${item.year}-${item.degree}`}
              style={{ '--delay': `${index * 120}ms` }}
            >
              <div className="education-year">{item.year}</div>
              <div className="education-marker" aria-hidden="true" />
              <div className="education-card">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
