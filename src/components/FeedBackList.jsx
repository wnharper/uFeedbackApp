import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem"

const FeedBackList = ({feedbackData, deleteFeedback}) => {

    if (!feedbackData || feedbackData.length === 0) return <h2>No feedback has been left yet.</h2>

    return (
      <>
      <AnimatePresence>

      {feedbackData.map(fb => 
        <motion.div 
          key={fb.id}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          exit={{ opacity: 0 }} >
            <FeedBackItem key={fb.id} id={fb.id} rating={fb.rating} text={fb.text} deleteFeedback={deleteFeedback} />
          </motion.div>)}
      </AnimatePresence>
      </>
    ) 

  // return (
  //   <>
  //   {feedbackData.map(fb => <FeedBackItem key={fb.id} id={fb.id} rating={fb.rating} text={fb.text} deleteFeedback={deleteFeedback} />)}
  //   </>
  // )
}
export default FeedBackList