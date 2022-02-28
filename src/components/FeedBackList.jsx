import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

const FeedBackList = () => {
  const { feedbackData, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedbackData || feedbackData.length === 0))
    return <h2>No feedback has been left yet.</h2>

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <AnimatePresence>
        {feedbackData.map((fb) => (
          <motion.div
            key={fb.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedBackItem
              key={fb.id}
              id={fb.id}
              rating={fb.rating}
              text={fb.text}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
export default FeedBackList
