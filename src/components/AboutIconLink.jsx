import { FaBarcode } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
  return (
    <div className="about-link">
        <Link to='/about'>
        <FaBarcode size={50} />
        <p>About us</p>
        </Link>
    </div>
  )
}
export default AboutIconLink