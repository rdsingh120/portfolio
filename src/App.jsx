import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Navbar func={() => setShowModal(!showModal)} />
      <Sidebar />
      <Modal showModal={showModal} func={() => setShowModal(!showModal)} />
      <div className="container">
        <main>
          <Banner />
          <Projects />
        </main>
      </div>
    </>
  )
}

export default App
