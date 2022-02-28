import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import Stats from "./components/Stats"
import FeedbackForm from "./components/FeedbackForm"
import AboutUs from "./pages/AboutUs"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <Stats />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path='/about' element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
