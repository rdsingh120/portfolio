import './SideBar.css'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { SiReaddotcv } from 'react-icons/si'
import { GrInstagram } from 'react-icons/gr'
import { ImStackoverflow } from 'react-icons/im'



import SideLink from '../SideLink/SideLink'

const Sidebar = () => {
  return (
    <div className="side-bar">
      <SideLink icon={<SiReaddotcv  className='resume'/>} text="Resume" />
      <SideLink icon={<FiLinkedin className='linkedin'/>} text="LinkedIn" />
      <SideLink icon={<FiGithub className='github'/>} text="GitHub" />
      <SideLink icon={<SiLeetcode className='leetcode'/>} text="LeetCode" />
      <SideLink icon={<GrInstagram className='instagram'/>} text="Instagram" />
      <SideLink icon={<ImStackoverflow className='stack'/>} text="Stack Overflow" />
    </div>
  )
}
export default Sidebar
