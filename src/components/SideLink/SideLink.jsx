import './SideLink.css'
const SideLink = ({ link, icon, text }) => {
  return (
    <a className="side-link" href={link} target='_blank' >
      {icon}
      {text}
    </a>
  )
}
export default SideLink
