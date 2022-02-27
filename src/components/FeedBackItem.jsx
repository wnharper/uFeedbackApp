import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"

const FeedBackItem = ({ id, rating, text, deleteFeedback }) => {

  return (
    <Card >
        <div className="num-display">{rating}</div>
        <button onClick={() => deleteFeedback(id)} className='close'>
            <FaTimes color='#3A405B' />
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}
export default FeedBackItem