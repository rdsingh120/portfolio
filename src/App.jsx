import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'
import Menu from './components/Menu/Menu'
import Skills from './components/Skills/Skills'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Navbar
        contactForm={() => setShowModal(!showModal)}
        sideMenu={() => setShowMenu(true)}
      />
      <Sidebar />
      <Menu
        className={showMenu ? 'menu' : 'menu hide-menu'}
        func={() => setShowMenu(false)}
        overlay2={showMenu ? 'overlay2' : ''}
      />
      <Modal showModal={showModal} func={() => setShowModal(!showModal)} />
      <div className="container">
        <main>
          <Banner />
          <Projects />
          <Skills />
        </main>
      </div>
    </>
  )
}

export default App
