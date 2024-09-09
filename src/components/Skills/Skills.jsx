import Title from '../Title/Title'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-container">
      <Title title="Skills" />
      <div className="skill-list">
        <div className="skill-card">
          <div className="title">Frontend</div>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span className="t-blue">Tailwind</span>
            <span className="yellow">Javascript</span>
            <span className="r-blue">ReactJS</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="title">Backend</div>
          <div className="skills">
            <span className="green">NodeJS</span>
            <span className="ex">ExpressJS</span>
            <span>NPM</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="title">Database</div>
          <div className="skills">
            <span className="o-red">Oracle</span>
            <span className="m-green">MongoDB</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="title">Other Skills & Tools</div>
          <div className="skills">
            <span>C#</span>
            <span>Java</span>
            <span className="o-red">SQL</span>
            <span>Linux</span>
            <span className="gold">Data Structures & Algorithms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
