import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutUs = () => {
  return (
    <Card>
        <h1>About us</h1>
        <p>This is an app created in React to leave feedback on a product or service.</p>
        <p>v1.0</p>
        <Link to='/'>Home</Link>
    </Card>
  )
}
export default AboutUs