import './Project.css'
const Project = ({ img, name, desc, link }) => {
  return (
    <a href={link} target='_blank' className="project">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <span className="project-name">{name}</span>
        <br />
        <span className="project-stack">{desc}</span>
      </div>
    </a>
  )
}
export default Project
