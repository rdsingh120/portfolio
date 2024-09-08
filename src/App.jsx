import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main>
          <Banner />
        </main>
      </div>
    </>
  )
}

export default App
