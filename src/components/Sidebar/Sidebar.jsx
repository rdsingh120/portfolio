import './Sidebar.css'
import { sideLinks } from './data'
import SideLink from '../SideLink/SideLink'

const Sidebar = () => {
  return (
    <div className="side-bar">
      {sideLinks.map(link => (
        <SideLink key={link.name} {...link} />
      ))}
    </div>
  )
}
export default Sidebar
