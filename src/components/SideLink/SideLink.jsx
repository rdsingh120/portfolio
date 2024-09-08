import './SideLink.css'
const SideLink = ({ icon, text }) => {
  return (
    <a className="side-link" href="">
      {icon}
      {text}
    </a>
  )
}
export default SideLink
