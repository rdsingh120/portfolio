import photo from './assets/photo.jpeg'
import banner from './assets/banner.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="me">
        <div className="photo">
          <img src={photo} alt="" />
        </div>
      </div>
    </>
  )
}
export default Banner
