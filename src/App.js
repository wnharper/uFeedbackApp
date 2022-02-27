import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import fbData from "./data/feedbackdata"
import FeedBackList from "./components/FeedBackList"
import Stats from "./components/Stats"
import FeedbackForm from "./components/FeedbackForm"
import AboutUs from "./pages/AboutUs"
import AboutIconLink from "./components/AboutIconLink"

const App = () => {

    // states
    const [feedback, setFeedback] = useState(fbData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete feedback?')) {
            setFeedback(feedback.filter(fb => fb.id != id))
        }
    }



    return (
        <Router>
            
            <div className="container">
                <Header />
                <Routes>
                <Route exact path="/" element={
                    <>
                    <FeedbackForm feedback={feedback} setFeedback={setFeedback} />
                    <Stats feedbackData={feedback} />
                    <FeedBackList feedbackData={feedback} deleteFeedback={deleteFeedback} />
                    <AboutIconLink />
                    </>
                } />

                <Route path="/about" element={<AboutUs />} />
                </Routes>
                
            </div> 

        </Router>
    )
}

export default App