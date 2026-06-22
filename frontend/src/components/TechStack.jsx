import React from 'react'
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact
} from 'react-icons/fa'
import {
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiVercel,
  SiVite
} from 'react-icons/si'

const STACK = [
  {name: 'Java', Icon: FaJava, color: '#f89820'},
  {name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F'},
  {name: 'Python', Icon: FaPython, color: '#3776ab'},
  {name: 'Flutter', Icon: SiFlutter, color: '#02569b'},
  {name: 'PHP', Icon: FaPhp, color: '#777bb4'},
  {name: 'Laravel', Icon: FaLaravel, color: '#ff2d20'},
  {name: 'HTML', Icon: FaHtml5, color: '#e34f26'},
  {name: 'CSS', Icon: FaCss3Alt, color: '#1572b6'},
  {name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3'},
  {name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e'},
  {name: 'React', Icon: FaReact, color: '#61dafb'},
  {name: 'Node', Icon: FaNodeJs, color: '#339933'},
  {name: 'Vite', Icon: SiVite, color: '#646cff'},
  {name: 'MySQL', Icon: SiMysql, color: '#4479a1'},
  {name: 'MongoDB', Icon: SiMongodb, color: '#47a248'},
  {name: 'Vercel', Icon: SiVercel, color: '#000000'}
]

export default function TechStack(){
  return (
    <section className="section tech-stack" id="tech-stack">
      <div className="section-heading">
        <h2>Tech Stack</h2>
      </div>

      <div className="tech-grid">
        {STACK.map(({name, Icon, color}) => (
          <article className="tech-card" key={name}>
            <span className="tech-icon" style={{'--tech-color': color}}>
              <Icon />
            </span>
            <span className="tech-name">{name}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
