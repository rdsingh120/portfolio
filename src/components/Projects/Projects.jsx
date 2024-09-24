import Project from '../Project/Project'
import Title from '../Title/Title'
import { projects } from './data'

import './Projects.css'
const Projects = ({num = 50}) => {
  return (
    <div className="projects-container">
      <Title title="projects" />
      <div className="projects">
        {projects.map((project, i) => {
          if (i < (num)) return <Project key={project.name} {...project} />
        })}
      </div>
    </div>
  )
}
export default Projects
