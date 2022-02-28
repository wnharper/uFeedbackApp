import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()
const URL = "http://localhost:5000"

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackData, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editmode: false,
  })

  // hooks
  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(URL + "/feedback?_sort=id&_order=desc")
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // delete a piece of feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure want to delete feedback?")) {
      await fetch(`${URL}/feedback/${id}`, {
        method: "DELETE",
      })
      setFeedback(feedbackData.filter((fb) => fb.id != id))
    }
  }

  // add a piece of feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(URL + "/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
    const returnedData = await response.json()
    setFeedback([returnedData, ...feedbackData])
  }

  // load a piece of feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, editmode: true })
  }

  // edit feedback
  const postEditFeedback = async (id, newItem) => {
    const response = await fetch(`${URL}/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })

    const data = await response.json()
    setFeedback(
      feedbackData.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
