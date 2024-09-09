import './index.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'
import Modal from './components/Modal/Modal'

function App() {
  return (
    <>
      <div id="overlay"></div>
      <Modal />
      <Navbar />
      <Sidebar />
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
