import Project from '../Project/Project'
import Title from '../Title/Title'

import './Projects.css'
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <Title title="projects"/>
        <div className="projects">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  )
}
export default Projects
