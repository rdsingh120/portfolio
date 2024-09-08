import { sideLinks } from './data'
import SideLink from '../SideLink/SideLink'

const SideLinks = () => {
  return (
    <div>
      {sideLinks.map((link) => (
        <SideLink key={link.name} {...link} />
      ))}
    </div>
  )
}
export default SideLinks
