import Banner from "../components/Banner/Banner"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"

const Home = () => {
  return (
    <>
        <Banner />
        <Projects num={4} />
        <Skills />
    </>
  )
}
export default Home