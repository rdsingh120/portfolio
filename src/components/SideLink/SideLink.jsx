import './SideLink.css'
const SideLink = ({ link, icon, name }) => {
  return (
    <a className="side-link" href={link} target="_blank">
      <span className={name}>{icon}</span>
      <span className='name'>{name}</span>
    </a>
  )
}
export default SideLink
