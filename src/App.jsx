import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
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
