import { createContext, useState } from "react"
import fbData from "../data/feedbackdata"
import { v4 as uuid } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackData, setFeedback] = useState(fbData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editmode: false,
  })

  // delete a piece of feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete feedback?")) {
      setFeedback(feedbackData.filter((fb) => fb.id != id))
    }
  }

  // add a piece of feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedbackData])
  }

  // load a piece of feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, editmode: true })
  }

  // edit feedback
  const postEditFeedback = (id, newItem) => {
    console.log(newItem)
    setFeedback(
      feedbackData.map((item) =>
        item.id === id ? { ...item, ...newItem } : item
      )
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        setFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        postEditFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
