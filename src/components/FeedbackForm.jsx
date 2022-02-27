import { v4 as uuid } from "uuid"
import { useState } from "react"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedbackForm = ({ feedback, setFeedback }) => {
  const [review, setReview] = useState("")
  const [message, setMessage] = useState(null)
  const [rating, setRating] = useState(5)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check to see if review length is more than 10 characters
    if (review.trim().length > 10) {
      const newFeedback = {
        id: uuid(),
        rating: rating,
        text: review,
      }
      setFeedback([newFeedback, ...feedback])
      setReview("")
      setRating(5)
    }
  }

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
