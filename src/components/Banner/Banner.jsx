import photo from './assets/photo.jpeg'
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <div className="photo">
        <img src={photo} alt="" />
      </div>
    </div>
  )
}
export default Banner
