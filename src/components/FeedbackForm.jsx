import { v4 as uuid } from "uuid"
import { useState, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = () => {
  // context
  const { addFeedback, feedbackEdit, postEditFeedback } =
    useContext(FeedbackContext)

  // use states
  const [message, setMessage] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(5)

  // use effects

  useEffect(() => {
    if (feedbackEdit.editmode === true) {
      setReview(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false)
    }
  }, [feedbackEdit])

  const handleButton = (e) => {
    if (review === "") {
      setMessage(null)
      setBtnDisabled(true)
    } else if (review != "" && review.trim().length < 10) {
      setMessage("Review must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setReview(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check to see if review length is more than 10 characters
    if (review.trim().length > 10) {
      const newFeedback = {
        rating: rating,
        text: review,
      }

      if (feedbackEdit.editmode === true) {
        postEditFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setReview("")
      setRating(5)
    }
  }

  return (
    <>
      <Card>
        <h2>How would you rate this product</h2>
        <RatingSelect
          selectRating={(num) => setRating(num)}
          selected={rating}
        />
        <form onSubmit={(e) => handleSubmit(e)} className='input-group'>
          <input
            onChange={(e) => handleButton(e)}
            value={review}
            type='text'
            placeholder='Write review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Submit
          </Button>
        </form>
        {message && <div className='message'>{message}</div>}
      </Card>
    </>
  )
}
export default FeedbackForm
