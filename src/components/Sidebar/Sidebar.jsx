import './Sidebar.css'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { SiCodewars } from 'react-icons/si'
import { SiReaddotcv } from 'react-icons/si'
import { GrInstagram } from 'react-icons/gr'
import { ImStackoverflow } from 'react-icons/im'

import SideLink from '../SideLink/SideLink'

const Sidebar = () => {
  return (
    <div className="side-bar">
      <SideLink
        link="https://drive.google.com/file/d/1NNu3_HN1Aw3fcQqYETR2Zbi5aVwh2Ilp/view?usp=sharing"
        icon={<SiReaddotcv className="resume" />}
        text="Resume"
      />
      <SideLink
        link="https://www.linkedin.com/in/rdsingh120/"
        icon={<FiLinkedin className="linkedin" />}
        text="LinkedIn"
      />
      <SideLink
        link="https://github.com/rdsingh120/"
        icon={<FiGithub className="github" />}
        text="GitHub"
      />
      <SideLink
        link="https://leetcode.com/u/rdsingh120/"
        icon={<SiLeetcode className="leetcode" />}
        text="LeetCode"
      />
      <SideLink
        link="https://www.codewars.com/users/rdsingh120"
        icon={<SiCodewars className="codewars" />}
        text="CodeWars"
      />
      <SideLink
        link="https://www.instagram.com/rdsingh120/"
        icon={<GrInstagram className="instagram" />}
        text="Instagram"
      />
      <SideLink
        link="https://stackoverflow.com/users/17151480/ripu-daman"
        icon={<ImStackoverflow className="stack" />}
        text="Stack Overflow"
      />
    </div>
  )
}
export default Sidebar
