import Project from '../Project/Project'
import Title from '../Title/Title'
import { projects } from './data'

import './Projects.css'
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <Title title="projects" />
        <div className="projects">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Projects
