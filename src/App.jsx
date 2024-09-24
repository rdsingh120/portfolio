import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Menu from './components/Menu/Menu'
import Home from './Pages/Home'
import ProjectsPage from './Pages/ProjectsPage'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/projects',
      element: <ProjectsPage/>,
    },
  ])

  return (
    <>
      <Navbar
        contactForm={() => setShowModal(!showModal)}
        sideMenu={() => setShowMenu(true)}
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
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
          <RouterProvider router={router} />
        </main>
      </div>
    </>
  )
}

export default App
