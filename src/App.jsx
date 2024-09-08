import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container">
        <main>
          <Banner />
        </main>
      </div>
    </>
  )
}

export default App
