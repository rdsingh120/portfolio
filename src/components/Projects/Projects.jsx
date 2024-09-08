import Project from '../Project/Project'
import './Projects.css'
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1 className="title">Projects</h1>
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
