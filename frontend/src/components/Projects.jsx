import React from 'react'
import {
  FaBoxOpen,
  FaCarSide,
  FaChartLine,
  FaDatabase,
  FaDumbbell,
  FaGithub,
  FaLaptopCode,
  FaMusic,
  FaPalette,
  FaShoppingBag,
  FaTasks,
  FaUtensils
} from 'react-icons/fa'

const PROJECTS = [
  {
    title: 'Fitness Coach Agent',
    desc: 'An AI-powered fitness coaching agent built with Python to support guided workout and wellness assistance.',
    language: 'Python',
    Icon: FaDumbbell,
    accent: '#4f9d69',
    url: 'https://github.com/Su-myat-phyu/fitness_coach_agent'
  },
  {
    title: 'Music Playlist Generator',
    desc: 'Generate personalized playlists based on users\' mood, genre, and favorite artists.',
    language: 'Python',
    Icon: FaMusic,
    accent: '#7c5cff',
    url: 'https://github.com/Su-myat-phyu/Music_Playlist_Generator'
  },


  {
    title: 'Portfolio',
    desc: 'A JavaScript portfolio project showcasing personal profile, work, and frontend presentation.',
    language: 'JavaScript',
    Icon: FaLaptopCode,
    accent: '#f4b400',
    url: 'https://github.com/Su-myat-phyu/portfolio'
  },
  {
    title: 'My Portfolio',
    desc: 'A personal portfolio website project built to present skills, education, and selected work.',
    language: 'JavaScript',
    Icon: FaPalette,
    accent: '#d76d77',
    url: 'https://github.com/Su-myat-phyu/my-portfolio'
  },
  {
    title: 'Used Car Sales Portal',
    desc: 'A PHP-based portal for browsing, managing, and presenting used car sales information.',
    language: 'PHP',
    Icon: FaCarSide,
    accent: '#2f80ed',
    url: 'https://github.com/Su-myat-phyu/Used_Car_Sales_Portal'
  },
  {
    title: 'Meals On Wheels',
    desc: 'A PHP web application concept for meal service coordination and community support workflows.',
    language: 'PHP',
    Icon: FaUtensils,
    accent: '#f2994a',
    url: 'https://github.com/Su-myat-phyu/Meals-On-Wheels'
  },
  {
    title: 'DoBu Martial Arts',
    desc: 'An HTML website project for a martial arts brand with structured pages and service information.',
    language: 'HTML',
    Icon: FaDumbbell,
    accent: '#eb5757',
    url: 'https://github.com/Su-myat-phyu/DoBu-Martial-Arts'
  },
  {
    title: 'PDP Generator',
    desc: 'A JavaScript tool for generating personal development plan content and structured planning output.',
    language: 'JavaScript',
    Icon: FaTasks,
    accent: '#27ae60',
    url: 'https://github.com/Su-myat-phyu/PDP-Generator'
  },
  {
    title: 'Boutiqa',
    desc: 'A boutique-inspired project repository focused on ecommerce or fashion storefront presentation.',
    language: 'Project',
    Icon: FaShoppingBag,
    accent: '#bb6bd9',
    url: 'https://github.com/Su-myat-phyu/Boutiqa'
  },
  {
    title: 'North Sussex Judo',
    desc: 'A Java application project related to judo club operations, registration, or training management.',
    language: 'Java',
    Icon: FaChartLine,
    accent: '#f2c94c',
    url: 'https://github.com/Su-myat-phyu/North_Sussex_Judo'
  },
  {
    title: 'In A Box By Su',
    desc: 'An HTML website project presenting a compact branded web experience.',
    language: 'HTML',
    Icon: FaBoxOpen,
    accent: '#56ccf2',
    url: 'https://github.com/Su-myat-phyu/in-a-box-by-su'
  }
]

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        
      </div>

      <div className="projects-grid">
        {PROJECTS.map(({Icon, ...p})=> (
          <article key={p.url} className="project-card" style={{'--project-accent': p.accent}}>
            <div className="project-thumb">
              <div className="project-visual" aria-hidden="true">
                <Icon />
              </div>
              <span>{p.language}</span>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-actions">
        <a className="projects-all-link" href="https://github.com/Su-myat-phyu?tab=repositories" target="_blank" rel="noreferrer">
          View all projects on GitHub
        </a>
      </div>
    </section>
  )
}
