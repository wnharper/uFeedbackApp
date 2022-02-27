import { Link } from "react-router-dom"

const Header = ({ text, bgColor, textColor }) => {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link to={'/'}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#CBF67C'
}

export default Header